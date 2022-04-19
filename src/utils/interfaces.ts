
export type env = "production" | "sandbox"


export interface IOkraOptions {
	key: string,
	env: env,
	payment: boolean,
	token: string,
	country: string,
	charge: {
		amount: number,
		currency: string
	}
}