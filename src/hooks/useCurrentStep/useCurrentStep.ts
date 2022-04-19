import { useState } from 'react'

export enum CurrentStepEnum {
    SelectBank = "SelectBank",
    Credentials = "Credentials",
    SelectAccount = "SelectAccount",
    Success = "Success",
    Error = "Error",
}

export const useCurrentStep = () => {
    const [currentStep, setCurrentStep] = useState<CurrentStepEnum>(CurrentStepEnum.SelectBank);

    const onGoBack = () => {
        if (currentStep === CurrentStepEnum.Credentials) setCurrentStep(CurrentStepEnum.SelectBank)
        if (currentStep === CurrentStepEnum.SelectAccount) setCurrentStep(CurrentStepEnum.Credentials)
    }
    
    return {
        currentStep, 
        setCurrentStep,
        onGoBack
    }
}
