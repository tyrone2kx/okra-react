import Header from "../components/Header";
import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import Container from "../components/Container";
import Heading from "../design-components/Heading";
import { Box } from "../design-components/Box";
import { Flex } from "../design-components/Flex";
import { Text } from "../design-components/Text";
import { Input } from "../design-components/Input";
import PrimaryButton from "../design-components/PrimaryButton";

const Credentials = () => {
  const { email, setEmail, password, setPassword, selectedBank, handleLogin, loginError, clearLoginError } =
    useOkraWidgetContext();
  return (
    <>
      <Container>
        <Flex flex="1" direction={"column"} justify="space-between" h="100%">
          <Box>
            <Header />
            <Heading mt="10px">
              Type in your credentials
            </Heading>

            <Box mt={"12px"}>
              <Text fontSize={"12px"}>
                By entering your {selectedBank?.name} credentials here, you're
                authorizing Okra tp pay Kent Wood the agreed amount.
              </Text>
            </Box>

            <Flex direction={"column"} justify="space-between" h="100%">
              <Flex direction="column" mt={"25px"} w="100%">
                <Input
                  value={email}
                  onChange={(e:any) => {
                    setEmail(e.target.value)
                    clearLoginError()
                  }}
                  placeholder="Email Address / Phone Number"
                  size="md"
                />
                  <Input
                    value={password}
                    onChange={(e:any) => {
                      setPassword(e.target.value)
                      clearLoginError()
                    }}
                    placeholder="Password / PIN"
                    type={"password"}
                    width="100%"
                    mt="20px"
                  />
                  {loginError && <Text mt={"10px"} mb={"20px"} color="red" fontSize="12px">
                    {loginError}
                  </Text>}

                  <Text mt={"10px"} fontSize="12px">
                    Forgot Password
                  </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
        <PrimaryButton disabled={!email || !password} onClick={handleLogin}>Login</PrimaryButton>
      </Container>
    </>
  );
};

export default Credentials;
