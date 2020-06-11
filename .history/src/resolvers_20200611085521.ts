/** @format */

import {IResolvers} from "apollo-server-express";
import {User} from "./entity/User";

export const resolvers: IResolvers = {
	Query: {
		hello: () => 'h1',
	},
	Mutation: {
		register(_, {email, password}) => {
			User.create({email, password}).save()
		}
	}
};
