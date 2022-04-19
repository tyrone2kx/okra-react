import Header from "../components/Header";
import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import Container from "../components/Container";
import { Flex } from "../design-components/Flex";
import { Text } from "../design-components/Text";
import PrimaryButton from "../design-components/PrimaryButton";
import { CheckMarkIcon } from "../assets/icons";

const PaymentSuccess = () => {
  const { selectedAccount, reset } = useOkraWidgetContext();
  return (
    <>
      <Container>
        <Header noBackButton noLogo />
        <Flex
          flex={1}
          direction={"column"}
          justify="center"
          align={"center"}
          h="100%"
        >
          <Flex align="center" direction={"column"}>
            <Flex
              justify="center"
              align="center"
              p={"40px"}
              background="#333"
              borderRadius="50%"
            >
              <CheckMarkIcon />
            </Flex>

            <Text mt="20px" w="80%" textAlign={"center"}>
              Your account ending in {selectedAccount?.nuban.slice(-4)} has been
              successfully debited.
            </Text>
          </Flex>
        </Flex>
        <PrimaryButton
          onClick={() => {
            reset()
          }}
        >
          Return to CrossWallet
        </PrimaryButton>
      </Container>
    </>
  );
};

export default PaymentSuccess;
