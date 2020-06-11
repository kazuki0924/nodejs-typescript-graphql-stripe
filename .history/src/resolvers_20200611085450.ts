/** @format */

import {IResolvers} from "apollo-server-express";

export const resolvers: IResolvers = {
	Query: {
		hello: () => 'h1',
	},
	Mutation: {
		register(_, {email, password}) => {
			User.create({email, password})
		}
	}
};
