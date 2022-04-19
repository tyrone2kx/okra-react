import Header from "../components/Header";
import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import Container from "../components/Container";
import { Flex } from "../design-components/Flex";
import { Text } from "../design-components/Text";
import { CloseIconWhite } from "../assets/icons";

const ErrorScreen = () => {
  const { error } = useOkraWidgetContext();
  return (
    <>
      <Container>
        <Header noBackButton noLogo />
        <Flex flex={1} direction={"column"} justify="center" align={"center"} h="100%">
          <Flex align="center" direction={"column"}>
          <Flex
              justify="center"
              align="center"
              p={"45px"}
              background="red"
              borderRadius="50%"
            >
              <CloseIconWhite />
            </Flex>

            <Text mt="10px" fontWeight={"bold"} w="90%" textAlign={"center"}>
              Configuration Error
            </Text>
            <Text mt="10px" fontSize={"14px"} w="80%" textAlign={"center"}>
              {error}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default ErrorScreen;
