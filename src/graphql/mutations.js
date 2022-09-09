/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNOte = /* GraphQL */ `
  mutation CreateNOte(
    $input: CreateNOteInput!
    $condition: ModelNOteConditionInput
  ) {
    createNOte(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNOte = /* GraphQL */ `
  mutation UpdateNOte(
    $input: UpdateNOteInput!
    $condition: ModelNOteConditionInput
  ) {
    updateNOte(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNOte = /* GraphQL */ `
  mutation DeleteNOte(
    $input: DeleteNOteInput!
    $condition: ModelNOteConditionInput
  ) {
    deleteNOte(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
