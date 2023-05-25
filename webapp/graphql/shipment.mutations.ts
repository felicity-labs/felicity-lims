import gql from 'graphql-tag';


export const ADD_REFERRAL_LABORATORY = gql`
    mutation AddReferralLaboratory($payload: ReferralLaboratoryInputType!) {
        createReferralLaboratory(payload: $payload) {
            ... on ReferralLaboratoryType {
                __typename
                uid
                name
                code
                url
                password
                username
                isReferral
                isReference
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const EDIT_REFERRAL_LABORATORY = gql`
    mutation EditReferralLaboratory($uid: String!, $payload: ReferralLaboratoryInputType!) {
        updateReferralLaboratory(uid: $uid, payload: $payload) {
            ... on ReferralLaboratoryType {
                __typename
                uid
                name
                code
                url
                password
                username
                isReferral
                isReference
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;


export const ADD_SHIPMENT = gql`
    mutation AddShipment($payload: ShipmentInputType!) {
        createShipment(payload: $payload) {
            ... on ShipmentListingType {
                __typename
                shipments {
                    uid
                    shipmentId
                    assignedCount
                    state
                    laboratoryUid
                    laboratory { 
                        name
                    }
                    createdAt
                    laboratoryUid
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const SHIPMENT_UPDATE = gql`
    mutation UpdateShipment(
        $uid: String!
        $payload: ShipmentUpdateInputType!
    ) {
        updateShipment(
            uid: $uid
            payload: $payload
        ) {
            ... on ShipmentType {
                __typename
                uid
                shipmentId
                assignedCount
                state
                incoming
                comment
                createdAt
                courier
                laboratory { 
                    uid
                    name
                }
            }

            ... on OperationError {
                __typename
                error
                suggestion
            }
        }
    }
`;

export const SHIPMENT_MANAGE_SAMPLES = gql`
    mutation shipmentManageSamples($uid: String!, $payload: ShipmentManageSamplesInput!) {
        shipmentManageSamples(uid: $uid, payload: $payload) {
            ... on ShipmentType {
                __typename        
                uid
                shipmentId
                assignedCount
                state
                incoming
                comment
                createdAt
                courier
                laboratory { 
                    uid
                    name
                }
                samples {
                    uid
                    sampleId
                    status
                    analysisRequest {
                        patient {
                            uid
                        }
                    }
                    analyses {
                        uid
                        name
                        keyword
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
`;


export const ACTION_SHIPMENT = gql`
mutation actionShipment($uid: String!, $action: String!) {
    actionShipment(uid: $uid, action: $action) {
        ... on ShipmentType {
            __typename        
            uid
            state
        }

        ... on OperationError {
            __typename
            error
            suggestion
        }
    }
}
`;