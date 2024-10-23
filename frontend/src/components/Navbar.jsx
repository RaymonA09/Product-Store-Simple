import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { FaRegSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

  return <Container maxW = { "1140px" } px = {4}>
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column", sm:"row"}}>
        <Text fontSize= {{ base: " 22" , sm: "28"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient = {"linear(to-r, #FF606A, #FF101F)"}
            bgClip = {"text"}>
                <Link to = {"/"}> CRUD STORE 📦</Link> 
        </Text>
        
        

        <HStack spacing = {2} alignItems={"center"}>
            <Link to = {"/create"}>
                <Button>
                    <PlusSquareIcon fontSize={20} />
                </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MdDarkMode /> : <FaRegSun /> }
            </Button>
        </HStack>
    </Flex>
  </Container>;
};

export default Navbar