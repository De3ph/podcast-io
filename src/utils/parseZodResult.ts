import LoginSchema from '../schemas/LoginSchema';

type Credentials = {
	email: string;
	password: string;
};

export const validateLoginSchema = (credentials: Credentials) => {
	const errorRes: {
		email: string[];
		password: string[];
	} = {
		email: [],
		password: []
	};

	const parseResult = LoginSchema.safeParse(credentials);

	if (parseResult.success) {
		return null;
	}

	parseResult.error.errors.forEach((error) => {
		error.path[0] == 'email'
			? errorRes.email.push(error.message)
			: errorRes.password.push(error.message);
	});

	return errorRes;
};
