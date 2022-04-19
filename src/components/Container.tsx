import { Flex } from "../design-components/Flex"; 
import React from "react";

interface IProps {
    children: React.ReactNode
}

const Container = ({ children }: IProps) => {
  return (
    <Flex
      w="400px"
      baseWidth="85%"
      height="80vh"
      borderRadius="18px"
      p={"20px"}
      background="#FFF"
      boxShadow={"lg"}
      direction="column"
    >
      {children}
    </Flex>
  );
};

export default Container;
