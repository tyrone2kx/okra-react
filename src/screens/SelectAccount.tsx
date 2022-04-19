import Header from "../components/Header";
import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import Container from "../components/Container";
import { User } from "../utils/user";
import { CurrentStepEnum } from "../hooks/useCurrentStep/useCurrentStep";
import Heading from "../design-components/Heading";
import { Box } from "../design-components/Box";
import { Flex } from "../design-components/Flex";
import { Text } from "../design-components/Text";
import PrimaryButton from "../design-components/PrimaryButton";
import { CheckCircle, CircleIcon } from "../assets/icons";

const SelectAccount = () => {
  const { selectedAccount, setSelectedAccount, setCurrentStep } =
    useOkraWidgetContext();
  return (
    <>
      <Container>
        <Flex flex="1" direction={"column"} justify="space-between" h="100%">
          <Box>
            <Header />
            <Heading mt={"15px"} textTransform={"capitalize"} size={"md"}>
              Which account do you want to pay from?
            </Heading>

            <Box mt={"15px"}>
              <Text textTransform={"uppercase"} fontSize={"sm"}>
                Account name: {User.name}
              </Text>

              <Flex mt={"15px"} direction="column">
                {User.accounts.map((account) => (
                  <Flex
                    justify="space-between"
                    align="center"
                    borderRadius={"10px"}
                    border="1px solid #ECECEC"
                    p={"10px"}
                    mb={"10px"}
                    cursor="pointer"
                    boxShadow={
                      account.nuban === selectedAccount?.nuban ? "0 3px 10px rgb(0 0 0 / 0.2)" : "none"
                    }
                    onClick={() => setSelectedAccount(account)}
                  >
                    <Box>
                      <Text fontWeight={"bold"} fontSize="14px">
                        {account.name}: {account.nuban}
                      </Text>
                      <Text fontSize="14px">{account.balance}</Text>
                    </Box>

                    {account.nuban === selectedAccount?.nuban ? (
                      <CheckCircle />
                    ) : (
                      <CircleIcon />
                    )}
                  </Flex>
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
        <PrimaryButton
          disabled={!selectedAccount}
          onClick={() => {
            if (selectedAccount) {
              setCurrentStep(CurrentStepEnum.Success);
            }
          }}
        >
          Pay 1000 + NIP Charges
        </PrimaryButton>
      </Container>
    </>
  );
};

export default SelectAccount;
