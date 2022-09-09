/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNOte = /* GraphQL */ `
  query GetNOte($id: ID!) {
    getNOte(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNOtes = /* GraphQL */ `
  query ListNOtes(
    $filter: ModelNOteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNOtes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
