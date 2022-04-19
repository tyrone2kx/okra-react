export interface IAccount {
    name: string,
    balance: number,
    currency: string,
    nuban: string
}

export interface IUser {
    name: string,
    accounts: IAccount[]
}

export const User: IUser = {
    name: "TOKUNBO O. ADEDEJI",
    accounts: [
        {
            name: "Savings",
            balance: 440520.76,
            currency: "ngn",
            nuban: "0123127823",
        },
        {
            name: "Current",
            nuban: "0123127824",
            balance: 22827.30,
            currency: "ngn"
        },
        {
            name: "Domiciliary",
            nuban: "0123127825",
            balance: 3000.45,
            currency: "usd"
        }
    ],
}
