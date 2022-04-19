import { Text } from "./Text";

const Heading = (props) => {
    const {children, mt} = props
  return (
    <Text mt={mt} textTransform="capitalize" fontSize="20px" fontWeight="bold">
      {children}
    </Text>
  );
};

export default Heading;
