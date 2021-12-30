import gql from 'graphql-tag';

export const ADD_WORKSHEET_TEMPLATE= gql`
  mutation AddWorkSheetTemplate($payload: WorksheetTemplateInputType!){
  createWorksheetTemplate(payload: $payload)
  {
    ... on WorkSheetTemplateType {
      __typename
      uid
      name
      reserved
      plate
      numberOfSamples
      rows
      cols
      rowWise
      worksheetType
      instrument {
        uid
        name
      }
      sampleType {
        uid
        name
      }
      description
      qcTemplate {
        uid
        name
        description
        qcLevels {
          uid
          level
        }
      }
      qcLevels {
        uid
        level
      }
      analyses {
        uid
        name
      }
      state
    }

    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}`;

export const EDIT_WORKSHEET_TEMPLATE= gql`
  mutation EditWorkSheetTemplate($uid:Int!, $payload: WorksheetTemplateInputType!){
  updateWorksheetTemplate(uid: $uid, payload: $payload)
  {
    ... on WorkSheetTemplateType {
      __typename
      uid
      name
      reserved
      plate
      numberOfSamples
      rows
      cols
      rowWise
      worksheetType
      instrument {
        uid
        name
      }
      sampleType {
        uid
        name
      }
      description
      qcTemplate {
        uid
        name
        description
        qcLevels {
          uid
          level
        }
      }
      qcLevels {
        uid
        level
      }
      analyses {
        uid
        name
      }
      state
    }

    ... on OperationError {
      __typename
      error
      suggestion
    }
  }
}`;


export const ADD_WORKSHEET = gql`
  mutation AddWorkSheet($analystUid:Int!, $templateUid: Int!, $count: Int){
    createWorksheet(analystUid: $analystUid, templateUid: $templateUid, count:$count)
    {
      ... on WorksheetListingType {
        __typename
        worksheets {
          uid
          worksheetId
          numberOfSamples
          assignedCount
          analyst {
            uid
            auth{
              uid
              userName
            }
            firstName
            lastName
          }
          instrument {
            uid
            name
          }
          analyses {
            uid
            name
          }
          state
          createdAt
        }
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }`;



export const WORKSHEET_UPDATE = gql`
  mutation UpdateWorkSheet ($worksheetUid:Int!, $analystUid: Int, $action: String, $samples: [Int!]!) {
    updateWorksheet(worksheetUid: $worksheetUid, analystUid: $analystUid, action: $action, samples: $samples )
    {
      ... on WorkSheetType {
        __typename
        uid
        numberOfSamples
        sampleType {
          name
          name
        }
        instrument {
          uid
          name
        }
        template {
          uid
          name
        }
        plate
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }`;


export const EDIT_WORKSHEET_APPLY_TEMPLATE= gql`
  mutation EditWorkSheetApplyTemplate($worksheetUid:Int!, $templateUid: Int!){
    updateWorksheetApplyTemplate(worksheetUid: $worksheetUid, templateUid: $templateUid)
  {
      ... on WorkSheetType {
        __typename
        uid
        numberOfSamples
        sampleType {
          name
          name
        }
        instrument {
          uid
          name
        }
        template {
          uid
          name
        }
        plate
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
  }
}`;