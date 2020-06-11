/** @format */

import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type Query {
		hello: String!
	}
	type Mutation {
		register(email: String, password: String!): Boolean!
		login(email: String, password: String!): User!
	}
`;
