/** @format */

import { IResolvers } from 'apollo-server-express';
import { User } from './entity/User';
import * as bcrypt from 'bcryptjs';

export const resolvers: IResolvers = {
	Query: {
		me: (_, __, { req }) => {
			if (!req.session.userId) {
				return null;
			}
			return User.findOne(req.session.userId);
		},
	},
	Mutation: {
		register: async (_, { email, password }) => {
			const hashedPassword = await bcrypt.hash(password, 10);
			await User.create({ email, password: hashedPassword }).save();
		},
		login: async (_, { email, password }, { req }) => {
			console.log(req);
			const user = await User.findOne({ where: { email } });
			if (!user) {
				return null;
			}

			const valid = await bcrypt.compare(password, user.password);
			if (!valid) {
				return null;
			}

			req.session.userId = user.id;

			return user;
		},
	},
};
