import React, { createContext, useContext, useEffect, useState } from "react";
import { IOkraOptions } from "../utils/interfaces";
import { IAccount } from "../utils/user";
import { ValidCredentials } from "../utils/validCredentials";
import { IBank, useBank } from "./useBank/useBank";
import {
  CurrentStepEnum,
  useCurrentStep,
} from "./useCurrentStep/useCurrentStep";

interface IOkraWidgetContext {
  options: IOkraOptions | undefined;
  currentStep: CurrentStepEnum;
  setCurrentStep: React.Dispatch<React.SetStateAction<CurrentStepEnum>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  bankLoginLoading: boolean;
  loadingBanks: boolean;
  fetchBankList: () => void;
  bankList: IBank[];
  handleLogin: () => void;
  selectedAccount: IAccount | undefined;
  setSelectedAccount: React.Dispatch<
    React.SetStateAction<IAccount | undefined>
  >;
  selectedBank: IBank | undefined;
  setSelectedBank: React.Dispatch<React.SetStateAction<any>>;
  handleSelectBank: (bank: IBank) => void;
  onGoBack: () => void;
  reset: () => void;
  error: string,
  loginError: string,
  clearLoginError: () => void
}

const OkraWidgetContext = createContext<IOkraWidgetContext>(null!);

export function useOkraWidgetContext() {
  const context = useContext(OkraWidgetContext);
  if (!context) {
    throw new Error(
      "useOkraWidgetContext must be used within a OkraWidgetProvider"
    );
  }
  return context;
}

interface IProps {
  children: React.ReactNode;
  options: IOkraOptions | undefined;
}

export const OkraWidgetProvider = ({ children, options }: IProps) => {
  const { currentStep, setCurrentStep, onGoBack } = useCurrentStep();
  const [error, setError] = useState<string>("");


  useEffect(() => {
    const handleError = () => {
      let error:string = ""
      if (!options) error = "Please provide a valid configuration object."
      else {
        if (options.key !== ValidCredentials[options.env].key) error = "Invalid API Key. Be sure to supply a valid key for the running environment."
        if (options.token !== ValidCredentials[options.env].token) error = "Invalid Token."
        if (!options.country) error = "Invalid Country in configuration object."
        if (!options.charge.amount || options.charge.amount <= 0) error = "Invalid payment amount."
        if (!options.charge.currency) error = "Please enter a valid currency."
      }
      setError(error)
      if (error) setCurrentStep(CurrentStepEnum.Error)
    }
    handleError()
  }, [options, setCurrentStep])

  const {
    email,
    setEmail,
    password,
    setPassword,
    bankLoginLoading,
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
  } = useBank();

  const clearLoginError = () => setLoginError("")


  const handleSelectBank = (bank: IBank) => {
    setSelectedBank(bank);
    setCurrentStep(CurrentStepEnum.Credentials);
  };


  const reset = () => {
    setSelectedAccount(undefined)
    setSelectedBank(undefined)
    setEmail("")
    setPassword("")
    setCurrentStep(CurrentStepEnum.SelectBank)
  }

  

  const handleLogin = () => {
    bankLogin(() => setCurrentStep(CurrentStepEnum.SelectAccount));
  };

  useEffect(() => {
    fetchBankList();
  }, []);

  return (
    <OkraWidgetContext.Provider
      value={{
        options,
        currentStep,
        setCurrentStep,
        email,
        setEmail,
        password,
        setPassword,
        bankLoginLoading,
        loadingBanks,
        fetchBankList,
        bankList,
        handleLogin,
        selectedAccount,
        setSelectedAccount,
        selectedBank,
        setSelectedBank,
        handleSelectBank,
        onGoBack,
        error,
        reset,
        loginError,
        clearLoginError
      }}
    >
      {children}
    </OkraWidgetContext.Provider>
  );
};
