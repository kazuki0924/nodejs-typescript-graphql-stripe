/** @format */

export const resolvers = {
	Query: {
		hello: () => 'h1',
	},
	Mutation: {
		register(_, {email, password}) => {

		}
	}
};
