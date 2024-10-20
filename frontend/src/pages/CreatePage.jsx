import { Text, Container, Input, Box, Button, useColorModeValue, VStack, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });
    const toast = useToast();

    const { createProduct} = useProductStore()
    
    const handleAddProduct = async() => {
        const {success, message} = await createProduct(newProduct);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                isClosable: true
            });
        } else {
            toast ({
                title: "Success",
                description: message,
                status: "success",
                isClosable: true
            });
        }
        setNewProduct({ name: "", price: "", image: ""});
    };

  return (
    <Container maxW="100%" display="flex" justifyContent="center" alignItems="center" pt="100">
      <Box w={"50%"} display = "flex" flexDirection ="column" justifyContent="center" alignItems="center" gap={10}>
      <Text fontSize='5xl'>Create New Product</Text>
        <VStack display={"flex"} flexDirection={"column"} spacing={4} w={"80%"} p={6} background={useColorModeValue("White", "gray.800")} rounded={"lg"}>
                <Input 
                placeholder='Product Name' 
                name='name'
                value={newProduct.name} 
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
                />

                <Input 
                placeholder='Price' 
                name= 'price'
                type= 'number'
                value={newProduct.price} 
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
                />
                <Input 
                placeholder='Image URL' 
                name='image'
                value={newProduct.image} 
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
                />
                <Button colorScheme='blue' onClick={handleAddProduct} w='full' > Add Product </Button>
        </VStack>
    </Box>
    </Container>
    )
}

export default CreatePage