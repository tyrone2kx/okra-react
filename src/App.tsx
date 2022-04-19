import SelectBank from './screens/SelectBank';
import { useOkraWidgetContext } from './hooks/OkraWidgetProvider';
import { CurrentStepEnum } from './hooks/useCurrentStep/useCurrentStep';
import Credentials from './screens/Credentials';
import SelectAccount from './screens/SelectAccount';
import PaymentSuccess from './screens/PaymentSuccess';
import ErrorScreen from './screens/ErrorScreen';
import { Flex } from './design-components/Flex';

function App() {
  const { currentStep } = useOkraWidgetContext();
  return (
    <>
      <Flex
        align={"center"}
        justify={"center"}
        flex={1}
        h="100vh"
        background={"rgba(0,0,0,0.5)"}
      >
        {currentStep === CurrentStepEnum.SelectBank && <SelectBank />}
        {currentStep === CurrentStepEnum.Credentials && <Credentials />}
        {currentStep === CurrentStepEnum.SelectAccount && <SelectAccount />}
        {currentStep === CurrentStepEnum.Success && <PaymentSuccess />}
        {currentStep === CurrentStepEnum.Error && <ErrorScreen />}
      </Flex>
    </>
  );
}

export default App;
