# cackle

A WIP library to batch and optimize graphql queries and mutations. I think I just about have all the core

## Usage

### Graphql Request

- Library: [Graphql Request](https://github.com/prisma/graphql-request)
- Example: [graphql-request.example.ts](./examples/graphql-request/graphql-request.example.ts)

### Zeus

- Library: [Zeus](https://github.com/graphql-editor/graphql-zeus)
- Example: [graphql-zeus.example.ts](./examples/graphql-zeus/graphql-zeus.example.ts)

## Features

### Core Features

- [x] Batch queries together on a set timeout
- [x] Optimizes queries to only query for the same piece of data once
  - [x] Optimizes with query arguments
- [x] Handles mutations
- [x] Handles queries that return arrays
- [x] Handles mutations that return arrays

### Core Features TODO

- [ ] Flesh out tests and organize tests
- [ ] Add 100% type safety
- [ ] Add 100% code coverage
- [ ] Add usage and examples to readme

### Features that allow use in any client

Note: This really is already the case. As long as you can pass a string to your client.

- [x] Ensure support for GraphQL Request and add example
- [x] Ensure support for Zeus and add example
- [ ] Ensure support for Apollo Fetch and add example

### Possible Features Being Explored

- [ ] Support operation names
- [ ] Support Apollo Client
  - I know we will be able to support it when doing `.query` but it would be useful to be able to support it globally
