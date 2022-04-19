import { useState, useEffect } from "react";
import Header from "../components/Header";
import BankList from "../components/BankList";
import { useOkraWidgetContext } from "../hooks/OkraWidgetProvider";
import Container from "../components/Container";
import Heading from "../design-components/Heading";
import { Box } from "../design-components/Box";
import { SearchBar } from "../design-components/SearchBar";
import { Flex } from "../design-components/Flex";
import Spinner from "../design-components/Spinner";

const SelectBank = () => {
  const { bankList, handleSelectBank, loadingBanks } = useOkraWidgetContext();
  const [list, setList] = useState(bankList);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const search = (query: string) => {
      const newList = bankList.filter((x) =>
        x.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
      setList(newList);
    };
    if (!query) setList(bankList);
    else search(query);
  }, [query, bankList]);

  return (
    <>
      <Container>
        <Header noBackButton />
        <Box mt={"18px"}>
          <Heading>What Bank Do You Use?</Heading>

          <Box mt={"10px"}>
              <SearchBar
                value={query}
                onChange={(e: any) => {
                  setQuery(e.target.value);
                }}
                type="text"
                placeholder="Search"
              />
          </Box>
        </Box>
        {loadingBanks ? (
          <Flex justify={"center"} align="center" w="100%" h="100%">
            <Spinner size='xl' />
          </Flex>
        ) : (
          <BankList onClick={handleSelectBank} banks={list} />
        )}
      </Container>
    </>
  );
};

export default SelectBank;
