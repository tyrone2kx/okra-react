import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import { Flex } from "../design-components/Flex";
import { Box } from "../design-components/Box";
import { BackIcon, CloseIcon, Logo } from "../assets/icons";

interface IProps {
  noBackButton?: boolean;
  noLogo?: boolean;
}

const Header = ({ noBackButton, noLogo }: IProps) => {
  const { onGoBack } = useOkraWidgetContext();
  return (
    <Flex w="100%" justify={"space-between"} align="center">
      {noBackButton ? (
        <Box />
      ) : (
        <Box cursor={"pointer"} onClick={onGoBack}>
          <BackIcon />
        </Box>
      )}
      {noLogo ? <Box /> : <Logo />}
      <Box
        onClick={() => {
          // @ts-ignore
          if (window.closeOkraWidget) {
            // @ts-ignore
            window.closeOkraWidget();
          }
        }}
        cursor="pointer"
      >
        <CloseIcon />
      </Box>
    </Flex>
  );
};

export default Header;
