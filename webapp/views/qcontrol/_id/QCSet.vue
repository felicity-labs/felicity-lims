<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useSampleStore } from "@/stores/sample";
import { isNullOrWs, parseDate } from "@/utils/helpers";
import useAnalysisComposable from "@/composables/analysis";
import { IAnalysisResult, IQCLevel, IQCSet, ISample } from "@/models/analysis";

import * as shield from "@/guards";

let sampleStore = useSampleStore();
let route = useRoute();

let can_submit = ref<boolean>(false);
let can_retract = ref<boolean>(false);
let can_verify = ref<boolean>(false);
let can_retest = ref<boolean>(false);
let can_reinstate = ref<boolean>(false);

let allChecked = ref<boolean>(false);

sampleStore.fetchQCSetByUid(route.params.qcSetUid);

let qcSet = computed(() => {
  let set = sampleStore.getQCSet as IQCSet;
  if (!set) return;
  let final = { levels: [], analytes: [] } as any;
  set?.samples?.forEach((sample) => {
    if (!sample.assigned) {
      if (!final.levels.some((l: IQCLevel) => l.uid == sample?.qcLevel?.uid)) {
        final.levels.push(sample?.qcLevel);
      }
      sample?.analysisResults?.forEach((result) => {
        if (
          !final.analytes.some((a: IAnalysisResult) => a.uid == result?.analysis?.uid)
        ) {
          final.analytes.push(result?.analysis);
        }
        const index = final.analytes.findIndex(
          (a: IAnalysisResult) => a.uid == result?.analysis?.uid
        );
        if (final.analytes[index]["items"]) {
          if (
            !final.analytes[index]["items"]?.some(
              (a: IAnalysisResult) => a.sampleUid === result.sampleUid
            )
          ) {
            final.analytes[index]["items"].push({ ...result, sample });
          }
        } else {
          final.analytes[index]["items"] = [{ ...result, sample }];
        }
      });
    }
  });

  toggleView("list");

  return {
    levels: final.levels as IQCLevel[],
    analytes: final.analytes as any[],
  };
});

function getResults(): IAnalysisResult[] {
  let results: IAnalysisResult[] = [];
  qcSet?.value!["analytes"]?.forEach((analyte: any) =>
    analyte["items"].forEach((result: IAnalysisResult) => results.push(result))
  );
  return results;
}

function getAllAnalysisResults(): IAnalysisResult[] {
  let results: IAnalysisResult[] = [];
  if (!qcSet?.value!["analytes"]) return [];
  qcSet?.value["analytes"]?.forEach((analyte) => {
    analyte?.items?.forEach((result: IAnalysisResult) => results.push(result));
  });
  return results;
}

function getResultsChecked(): IAnalysisResult[] {
  let results: IAnalysisResult[] = [];
  if (!qcSet?.value!["analytes"]) return [];
  qcSet?.value["analytes"]?.forEach((analyte) => {
    analyte?.items?.forEach((result: IAnalysisResult) => {
      if (result.checked) results.push(result);
    });
  });
  return results;
}

function getResultsUids(): string[] {
  const results = getResultsChecked();
  let ready: string[] = [];
  results?.forEach((result: IAnalysisResult) => ready.push(result.uid!));
  return ready;
}

function resetAnalysesPermissions(): void {
  // reset
  can_submit.value = false;
  can_retract.value = false;
  can_verify.value = false;
  can_retest.value = false;
  can_reinstate.value = false;

  const checked = getResultsChecked();
  if (checked.length === 0) return;

  // can reinstate
  if (checked.every((result) => result.status === "cancelled")) {
    can_reinstate.value = true;
  }

  // can submit
  if (checked.every((result) => result.status === "pending")) {
    can_submit.value = true;
  }

  // can verify/ retract/retest
  if (checked.every((result) => result.status === "resulted")) {
    can_retract.value = true;
    can_verify.value = true;
    can_retest.value = true;
  }
}

function areAllChecked(): Boolean {
  const results = getAllAnalysisResults();
  return results?.every((item) => item.checked === true);
}

function check(result: IAnalysisResult): void {
  result.checked = true;
  resetAnalysesPermissions();
}

function unCheck(result: IAnalysisResult): void {
  result.checked = false;
  resetAnalysesPermissions();
}

function toggleCheckAll(): void {
  const analysisResults = getResults();
  analysisResults?.forEach((result: IAnalysisResult) =>
    allChecked.value ? check(result) : unCheck(result)
  );
  resetAnalysesPermissions();
}

function checkCheck(): void {
  if (areAllChecked()) {
    allChecked.value = true;
  } else {
    allChecked.value = false;
  }
  resetAnalysesPermissions();
}

function editResult(result: any): void {
  result.editable = true;
}

function isEditable(result: IAnalysisResult): Boolean {
  if (result?.editable || isNullOrWs(result?.result)) {
    if (
      ["cancelled", "verified", "retracted", "to_be_verified"].includes(result.status!)
    ) {
      result.editable = false;
      return false;
    } else {
      editResult(result);
      return true;
    }
  }
  return false;
}

function isDisabledRowCheckBox(result: any): boolean {
  switch (result?.status) {
    case "retracted":
      return true;
    case "verified":
      if (result?.reportable === false) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }
}

// Sample Actions
function prepareResults(): IAnalysisResult[] {
  let results = getResultsChecked();
  let ready: any[] = [];
  results?.forEach((result: IAnalysisResult) =>
    ready.push({ 
      uid: result.uid, 
      result: result.result,
      laboratoryInstrumentUid: result.laboratoryInstrumentUid,
      methodUid: result.methodUid
    })
  );
  return ready;
}

// _updateSample if state has changed
const _updateSample = async () => {
  const sample = computed(() => sampleStore.getSample);
  if (sample.value) {
    sampleStore.fetchSampleStatus(sample?.value?.uid);
  }
};

let {
  submitResults: submitter_,
  cancelResults: canceller_,
  reInstateResults: reInstater_,
  approveResults: verifier_,
  retractResults: retracter_,
  retestResults: retester_,
} = useAnalysisComposable();

const submitResults = () =>
  submitter_(prepareResults(), "qcset", sampleStore.qcSet?.uid!).then(
    (_) => (_updateSample(), resetAnalysesPermissions())
  );
const cancelResults = () =>
  canceller_(getResultsUids()).then((_) => (_updateSample(), resetAnalysesPermissions()));
const reInstateResults = () =>
  reInstater_(getResultsUids()).then(
    (_) => (_updateSample(), resetAnalysesPermissions())
  );
const verifyResults = () =>
  verifier_(getResultsUids(), "qcset", sampleStore.qcSet?.uid!).then(
    (_) => (_updateSample(), resetAnalysesPermissions())
  );
const retractResults = () =>
  retracter_(getResultsUids()).then((_) => (_updateSample(), resetAnalysesPermissions()));
const retestResults = () =>
  retester_(getResultsUids()).then((_) => (_updateSample(), resetAnalysesPermissions()));

// View selection
let gridView = ref<boolean>(true);
let view = ref<string>("grid");
let hasDuplicates = ref<boolean>(false);

function toggleView(choice: string): void {
  let results: IAnalysisResult[] = [];
  let samples: ISample[] = [];

  let set = sampleStore.getQCSet;

  // for all results in a sample
  // if analyses is dublicated then a retract/retest has hapenned
  set?.samples?.forEach((sample: ISample) => {
    samples.push(sample);
    if (!sample.assigned) {
      sample?.analysisResults?.forEach((result: IAnalysisResult) => results.push(result));
    }
  });

  for (let sample of samples) {
    const filtered: IAnalysisResult[] = results.filter((r) => r.sampleUid === sample.uid);
    let analysisUids: string[] = [];
    filtered?.forEach((result) => analysisUids.push(result.analysisUid!));
    hasDuplicates.value = new Set(analysisUids).size !== analysisUids.length;
    if (hasDuplicates.value === true) break;
  }

  if (hasDuplicates.value) {
    gridView.value = false;
    view.value = "list";
  } else {
    if (choice === "grid") {
      gridView.value = true;
      view.value = "grid";
    } else {
      gridView.value = false;
      view.value = "list";
    }
  }
}
</script>

<template>
  <hr />
  <div class="flex justify-end">
    <button
      :class="[
        'focus:outline-none',
        { 'fill-current text-gray-900': gridView === true },
        { 'fill-current text-gray-200': gridView === false },
      ]"
      @click.prevent="toggleView('grid')"
    >
      <font-awesome-icon icon="th" />
    </button>
    <button
      :class="[
        'focus:outline-none ml-2',
        { 'fill-current text-gray-900': gridView === false },
        { 'fill-current text-gray-200': gridView === true },
      ]"
      @click.prevent="toggleView('list')"
    >
      <font-awesome-icon icon="th-list" />
    </button>
  </div>
  <section v-if="gridView" class="overflow-x-auto mt-4">
    <div
      class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"
            ></th>
            <th
              class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"
            >
              Analysis
            </th>
            <th
              v-for="level in qcSet?.levels"
              :key="level.uid"
              class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"
            >
              {{ level?.level }}
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300"></th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="analyte in qcSet?.analytes" :key="analyte.uid">
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500"></td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-gray-800">
                {{ analyte?.name }}
              </div>
            </td>
            <td
              v-for="result in analyte?.items"
              :key="result.uid"
              class="px-1 py-1 whitespace-no-wrap border-b border-gray-500"
            >
              <div class="flex items-center gap-x-4">
                <div>
                  <div class="text-md font-semibold italics text-sky-800"> {{ result?.sample?.qcLevel?.level }}</div>
                  <div class="text-sm italics text-sky-400">({{ result?.status }})</div>
                  <input
                    type="checkbox"
                    class="mr-2"
                    v-model="result.checked"
                    @change="checkCheck()"
                    :disabled="isDisabledRowCheckBox(result)"
                  />
                </div>
                <div class="w-3/5">
                  <div class="flex justify-start items-center gap-x-4 px-1 py-1">
                    <h4 class="w-28">Instrument</h4>
                    <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                      {{ result.laboratoryInstrument?.labName }}
                    </div>
                    <label v-else class="mb-2 w-full">
                      <select class="form-input mt-1 block w-full" v-model="result.laboratoryInstrumentUid" @change="check(result)">
                        <option value=""></option>
                        <template v-for="instrument in result.analysis?.instruments" :key="instrument.uid">
                          <option 
                            v-for="lab_instrument in instrument.laboratoryInstruments" 
                            :key="lab_instrument.uid"
                            :value="lab_instrument.uid"
                          >
                            {{ lab_instrument.labName }} → ({{ instrument?.name }})
                          </option>
                        </template>
                      </select>
                    </label>
                  </div>

                  <div class="flex justify-start items-center gap-x-4 px-1 py-1">
                    <h4 class="w-28">Method</h4>
                    <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                      {{ result.method?.name }}
                    </div>
                    <label v-else class="mb-2 w-full">
                      <select class="form-input mt-1 block w-full" v-model="result.methodUid" @change="check(result)">
                        <option value=""></option>
                        <option v-for="method in result.analysis?.methods" :key="method.uid"
                          :value="method.uid">
                          {{ method.name }}
                        </option>
                      </select>
                    </label>
                  </div>

                  <div class="flex justify-start items-center gap-x-4 px-1 py-1">
                    <h4 class="w-28">Result</h4>
                    <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                      {{ result?.result }}
                    </div>
                    <label v-else-if="result?.analysis?.resultOptions?.length > 0" class="block w-full" >
                      <input class="form-input mt-1 block w-full" v-model="result.result"  @keyup="check(result)"/>
                    </label>
                    <label v-else class="block col-span-2 w-full">
                      <select
                        class="form-input mt-1 block w-full"
                        v-model="result.result"
                        @change="check(result)"
                      >
                        <option value=""></option>
                        <option
                          v-for="option in result?.analysis?.resultOptions"
                          :key="option.optionKey"
                          :value="option.value"
                        >
                          {{ option.value }}
                        </option>
                      </select>
                    </label>
                  </div>

                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section v-else class="overflow-x-auto">
    <div
      class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"
    >
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">
              <input type="checkbox"  @change="toggleCheckAll()"  v-model="allChecked" />
            </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider"></th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-gray-800 tracking-wider">Analysis</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Methods</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Instrument </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Analyst</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Reviewer</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Interims </th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Result</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Retest</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Submitted</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Reviewed</th>
            <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Status</th>
            <th class="px-1 py-1 border-b-2 border-gray-300"></th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="result in getResults()" :key="result.uid">
            <td>
              <input
                type="checkbox"
                class=""
                v-model="result.checked"
                @change="checkCheck()"
                :disabled="isDisabledRowCheckBox(result)"
              />
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500"></td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                {{ result.analysis?.name }}
              </div>
              <div class="italic text-sm text-gray-400">({{ result?.sample?.qcLevel?.level }})</div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                {{ result.laboratoryInstrument?.labName || "---" }}
              </div>
              <label v-else class="block col-span-2 mb-2">
                <select class="form-input mt-1 block w-full" v-model="result.laboratoryInstrumentUid" @change="check(result)">
                  <option value=""></option>
                  <template v-for="instrument in result.analysis?.instruments" :key="instrument.uid">
                    <option 
                      v-for="lab_instrument in instrument.laboratoryInstruments" 
                      :key="lab_instrument.uid"
                      :value="lab_instrument.uid"
                    >
                      {{ lab_instrument.labName }} → ({{ instrument?.name }})
                    </option>
                  </template>
                </select>
              </label>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                {{ result.method?.name }}
              </div>
              <label v-else class="block col-span-2 mb-2">
                <select class="form-input mt-1 block w-full" v-model="result.methodUid" @change="check(result)">
                  <option value=""></option>
                  <option v-for="method in result.analysis?.methods" :key="method.uid"
                    :value="method.uid">
                    {{ method.name }}
                  </option>
                </select>
              </label>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                {{ `${result.submittedBy?.firstName ?? '--'} ${result.submittedBy?.lastName ?? '--'}` }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                <span v-for="reviewer in result.verifiedBy" :key="reviewer.firstName" class="ml-1">
                  {{ `${reviewer?.firstName ?? '--'} ${reviewer?.lastName ?? '--'},` }}
                </span>
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div v-if="!isEditable(result) || result?.analysis?.interims?.length === 0"
                class="text-sm leading-5 text-sky-800">
                ---
              </div>
              <label v-else class="block col-span-2 mb-2">
                <select class="form-input mt-1 block w-full" v-model="result.result" @change="check(result)">
                  <option value=""></option>
                  <option v-for="interim in result?.analysis?.interims" :key="interim.key"
                    :value="interim.value">
                    {{ interim.value }}
                  </option>
                </select>
              </label>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div v-if="!isEditable(result)" class="text-sm leading-5 text-sky-800">
                {{ result?.result }}
              </div>
              <label
                v-else-if="result?.analysis?.resultOptions?.length === 0"
                class="block"
              >
                <input
                  class="form-input mt-1 block w-full"
                  v-model="result.result"
                  @keyup="check(result)"
                />
              </label>
              <label v-else class="block col-span-2 mb-2">
                <select
                  class="form-input mt-1 block w-full"
                  v-model="result.result"
                  @change="check(result)"
                >
                  <option value=""></option>
                  <option
                    v-for="option in result?.analysis?.resultOptions"
                    :key="option.optionKey"
                    :value="option.value"
                  >
                    {{ option.value }}
                  </option>
                </select>
              </label>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">
                <span v-if="result?.retest" class="text-sky-800">
                  <font-awesome-icon icon="fa-check-circle" />
                </span>
                <span v-else class="text-orange-600">
                  <font-awesome-icon icon="fa-times-circle" />
                </span>
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">{{ parseDate(result?.dateSubmitted) }}</div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <div class="text-sm leading-5 text-sky-800">{{ parseDate(result?.dateVerified) }}</div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
              <button
                type="button"
                class="p-1 bg-sky-800 text-white rounded-sm leading-none"
              >
                {{ result.status }}
              </button>
            </td>
            <td
              class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"
            >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="my-4">
    <button
      v-if="shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_submit"
      @click.prevent="cancelResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Cancel
    </button>
    <button
      v-if="
        shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_reinstate
      "
      @click.prevent="reInstateResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Re-Instate
    </button>
    <button
      v-if="shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_submit"
      @click.prevent="submitResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Submit
    </button>
    <button
      v-if="shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_retract"
      @click.prevent="retractResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Retract
    </button>
    <button
      v-if="shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_verify"
      @click.prevent="verifyResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Verify
    </button>
    <button
      v-if="shield.hasRights(shield.actions.UPDATE, shield.objects.RESULT) && can_retest"
      @click.prevent="retestResults()"
      class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
    >
      Retest
    </button>
  </section>
</template>
