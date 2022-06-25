/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMainTable = /* GraphQL */ `
  query GetMainTable($id: String!) {
    getMainTable(id: $id) {
      id
    }
  }
`;
export const listMainTables = /* GraphQL */ `
  query ListMainTables(
    $filter: TableMainTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMainTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
      }
      nextToken
    }
  }
`;
export const listMainTableswodeleted = /* GraphQL */ `
  query ListMainTableswodeleted(
    $filter: TableDeletedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMainTableswodeleted(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
      }
      nextToken
    }
  }
`;
export const dummyQuery = /* GraphQL */ `
  query DummyQuery($limit: Int) {
    dummyQuery(limit: $limit) {
      body
      arguments
      second
    }
  }
`;
