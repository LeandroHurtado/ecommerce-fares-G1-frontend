import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

import { MdLocalShipping } from "react-icons/md";
import { useLocation } from "react-router";

const ProductDetails = () => {
  const location = useLocation();
  const { title, description, price, image, category } = location.state;
  console.log(image);
  return (
    <Container>
      <Flex>
        <Image
          rounded={"md"}
          alt={"product-image"}
          src={image}
          fit={"cover"}
          align={"center"}
          w={"100%"}
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={"header"}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            {title}
          </Heading>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={"2xl"}
          >
            {price}
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              {category}
            </Text>
            <Text fontSize={"lg"}>{description}</Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Detalles del producto:
            </Text>
            <Text> lista de detalles del producto seleccionado</Text>
          </Box>
        </Stack>
        <Button
          rounded={"none"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
        >
          Agregar al carrtito
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <MdLocalShipping />
          <Text>Envios se tardan de 2/3 dias</Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
