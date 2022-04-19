import React from "react";
import { Avatar } from "../design-components/Avatar";
import { Flex } from "../design-components/Flex";
import { Text } from "../design-components/Text";
import { IBank } from "../hooks/useBank/useBank";

interface IProps {
  banks: IBank[];
  onClick: (bank: IBank) => void
}

const BankList = ({ banks, onClick }: IProps) => {
  return (
    <Flex
      direction={"column"}
      mt={"20px"}
      overflowY={"auto"}
      className="scrollbar"
    >
      {banks.map((bank) => (
        <Flex align="center" onClick={() => onClick(bank)} cursor={"pointer"} key={bank.id} mb={"15px"}>
          <Avatar name="Dan Abrahmov" src={bank.icon} />
          <Text ml="10px">{bank.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default BankList;
