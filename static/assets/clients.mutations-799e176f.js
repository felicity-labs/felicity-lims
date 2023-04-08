import{ab as t}from"./index-e95f8522.js";const n=t`
  mutation AddClient($payload: ClientInputType!) {
    createClient(payload: $payload) {
      ... on ClientType {
        __typename
        uid
        name
        code
        districtUid
        district {
          uid
          name
          province {
            uid
            name
            country{
              uid
              name
            }
          }
        }
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }
`,a=t`
  mutation editClient($uid: FelicityID!, $payload: ClientInputType!){
    updateClient(uid: $uid, payload: $payload){
      ... on ClientType {
        __typename
        uid
        name
        code
        districtUid
        district {
          uid
          name
          province {
            uid
            name
            country{
              uid
              name
            }
          }
        }
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }
`,i=t`
  mutation AddClientContact($payload: ClientContactInputType!) {
    createClientContact(payload: $payload){
      ... on ClientContactType {
        __typename
        uid
        firstName
        lastName
        email
        mobilePhone
        consentSms
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }
`,o=t`
  mutation editClientContact($uid: FelicityID!, $payload: ClientContactInputType!){
    updateClientContact(uid: $uid, payload: $payload){
      ... on ClientContactType {
        __typename
        uid
        firstName
        lastName
        email
        mobilePhone
        consentSms
      }

      ... on OperationError {
        __typename
        error
        suggestion
      }
    }
  }
`;export{n as A,a as E,i as a,o as b};
