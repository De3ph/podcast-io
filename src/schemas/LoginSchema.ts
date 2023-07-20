import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().trim().email().nonempty(),
	password: z.string().trim().nonempty()
});

export default loginSchema;
