import { useState } from 'react'
import axios from 'axios'
import { ValidCredentials } from '../../utils/validCredentials'
import { IAccount } from '../../utils/user'

export interface IBank {
    id: string,
    name: string,
    icon: string
}

export const useBank = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingBanks, setLoadingBanks] = useState<boolean>(false);
    const [bankList, setBankList] = useState<IBank[]>([])
    const [selectedBank, setSelectedBank] = useState<IBank>();
    const [selectedAccount, setSelectedAccount] = useState<IAccount>();
    const [loginError, setLoginError] = useState<string>("")




    const fetchBankList = async () => {
        setLoadingBanks(true);
        try {
            const { data } = await axios.get("https://api.okra.ng/v2/banks/list");
            setLoadingBanks(false);
            setBankList(data.data.banks)
            localStorage.setItem("OkraBankList", JSON.stringify(data.data.banks));
        } catch (error) {
            setLoadingBanks(false);
            const list = (localStorage.getItem("OkraBankList"));
            if (list) {
                setBankList(JSON.parse(list))
            }
        }
    }


    const bankLogin = async (callback: () => void) => {
        setLoading(true);
        if (email.toLowerCase() !== ValidCredentials.username || password !== ValidCredentials.password) {
            return setLoginError(`Invalid username or password.`)
        }
        setLoading(false);
        callback()
    }


    return {
        email,
        setEmail,
        password,
        setPassword,
        bankLoginLoading: loading,
        loadingBanks,
        fetchBankList,
        bankList,
        bankLogin,
        selectedAccount, 
        setSelectedAccount,
        selectedBank, 
        setSelectedBank,
        loginError,
        setLoginError
    }
}
