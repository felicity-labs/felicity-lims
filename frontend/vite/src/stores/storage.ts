import { defineStore } from 'pinia'

import { useApiUtil } from '../composables'
import { IStorageContainer, IStorageLocation, IStorageSection, IStorageSlot, IStoreRoom } from '../models/storage';
import { GET_ALL_STORAGE_CONTAINERS, GET_ALL_STORAGE_LOCATIONS, GET_ALL_STORAGE_SECTIONS, GET_ALL_STORE_ROOMS } from '../graphql/storage.queries';

const { withClientQuery } = useApiUtil()

export const useStorageStore = defineStore('storage', {
  state: () => {
      return {
        storeRooms: [], 
        fetchingStoreRooms: false,
        storageLocations: [],
        fetchingStorageLocations: false,
        storageSections: [],
        fetchingStorageSections: false,
        storageContainers: [],
        fetchingStorageContainers: false,
        storageSlots: [],
        fetchingStorageSlots: false,
      } as {
        storeRooms: IStoreRoom[], 
        fetchingStoreRooms: boolean,
        storageLocations: IStorageLocation[],
        fetchingStorageLocations: boolean,
        storageSections: IStorageSection[],
        fetchingStorageSections: boolean,
        storageContainers: IStorageContainer[],
        fetchingStorageContainers: boolean,
        storageSlots: IStorageSlot[],
        fetchingStorageSlots: boolean,
      }
  },
  getters: {  
    getStoreRooms: (state) => state.storeRooms,
    getStorageLocations: (state) => state.storageLocations,
    getStorageSection: (state) => state.storageSections,
    getStorageContainers: (state) => state.storageContainers,
    getStorageSlots: (state) => state.storageSlots,
  },
  actions: {
    // storeRooms
    async fetchStoreRooms(){
      this.fetchingStoreRooms = true;
      await withClientQuery(GET_ALL_STORE_ROOMS, {}, "storeRoomAll")
            .then((storeRooms: IStoreRoom[]) => {
              this.fetchingStoreRooms = false;
              this.storeRooms = storeRooms
            }).catch((err) => this.fetchingStoreRooms = false)
    },
    addStoreRoom(payload): void {
      this.storeRooms?.unshift(payload);
    },
    updateStoreRoom(payload: IStoreRoom): void {
      const index = this.storeRooms?.findIndex(item => item.uid === payload?.uid);
      if(index > -1) this.storeRooms[index] = payload;
    },

    // storageLocations    
    async fetchStorageLocations(storeRoomUid: number){
      this.fetchingStorageLocations = true;
      await withClientQuery(GET_ALL_STORAGE_LOCATIONS, { storeRoomUid }, "storageLocationAll")
            .then((storageLocations: IStorageLocation[]) => {
              this.fetchingStorageLocations = false;
              this.storageLocations = storageLocations
            }).catch((err) => this.fetchingStorageLocations = false)
    },
    addStorageLocation(payload): void {
      this.storageLocations?.unshift(payload);
    },
    updateStorageLocation(payload: IStorageLocation): void {
      const index = this.storageLocations?.findIndex(item => item.uid === payload?.uid);
      if(index > -1) this.storageLocations[index] = payload;
    },

    // storageSection 
    async fetchStorageSections(storageSectionUid: number){
      this.fetchingStorageSections = true;
      await withClientQuery(GET_ALL_STORAGE_SECTIONS, { storageSectionUid }, "storageSectionAll")
            .then((storageSections: IStorageSection[]) => {
              this.fetchingStorageSections = false;
              this.storageSections = storageSections
            }).catch((err) => this.fetchingStorageSections = false)
    },
    addStorageSection(payload): void {
      this.storageSections?.unshift(payload);
    },
    updateStorageSection(payload: IStorageSection): void {
      const index = this.storageSections?.findIndex(item => item.uid === payload?.uid);
      if(index > -1) this.storageSections[index] = payload;
    },

    // storageContainers
    async fetchStorageContainers(storageContainerUid: number){
      this.fetchingStorageContainers = true;
      await withClientQuery(GET_ALL_STORAGE_CONTAINERS, { storageContainerUid }, "storageContainerAll")
            .then((storageContainers: IStorageContainer[]) => {
              this.fetchingStorageContainers = false;
              this.storageContainers = storageContainers
            }).catch((err) => this.fetchingStorageContainers = false)
    },
    addStorageContainer(payload): void {
      this.storageContainers?.unshift(payload);
    },
    updateStorageContainer(payload: IStorageContainer): void {
      const index = this.storageContainers?.findIndex(item => item.uid === payload?.uid);
      if(index > -1) this.storageContainers[index] = payload;
    },

    // storageSlots
    async fetchStorageSlots(storageSlotUid: number){
      this.fetchingStorageSlots = true;
      await withClientQuery(GET_ALL_STORAGE_CONTAINERS, { storageSlotUid }, "storageSlotAll")
            .then((storageSlots: IStorageSlot[]) => {
              this.fetchingStorageSlots = false;
              this.storageSlots = storageSlots
            }).catch((err) => this.fetchingStorageSlots = false)
    },
    addStorageSlot(payload): void {
      this.storageSlots?.unshift(payload);
    },
    updateStorageSlot(payload: IStorageSlot): void {
      const index = this.storageSlots?.findIndex(item => item.uid === payload?.uid);
      if(index > -1) this.storageSlots[index] = payload;
    },

  }
})


