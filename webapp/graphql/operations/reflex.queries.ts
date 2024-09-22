import gql from 'graphql-tag';

export const GET_ALL_REFLEX_RULES = gql`
    query getAllReflexRules {
        reflexRuleAll {
            totalCount
            items {
                uid
                name
                description
                createdBy {
                    firstName
                    lastName
                }
            }
        }
    }
`;

export const GET_EFLEX_RULE_BY_UID = gql`
 query getReflexRuleByUid($uid: String!) {
  reflexRuleByUid(uid: $uid) {
    uid
    name
    description
    reflexActions {
      uid
      level
      description
      analyses {
        uid
        name
        __typename
      }
      brains {
        uid
        description
        conditions {
          description
          priority
          criteria {
            analysisUid
            analysis {
              uid
              name
              resultOptions {
                optionKey
                value
                __typename
              }
              __typename
            }
            operator
            value
            __typename
          }
        }
        actions {
          addNew {
            analysisUid
            analysis {
              uid
              name
              resultOptions {
                optionKey
                value
                __typename
              }
              __typename
            }
            count
            __typename
          }
          finalise {
            analysisUid
            analysis {
              name
              resultOptions {
                optionKey
                value
                __typename
              }
              __typename
            }
            value
            __typename
          }
          __typename
        }
        __typename
      }
      createdBy {
        firstName
        lastName
        __typename
      }
      __typename
    }
  }
}
`;
