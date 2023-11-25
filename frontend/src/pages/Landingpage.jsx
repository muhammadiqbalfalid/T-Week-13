import {
  VStack,
  Image,
  Heading,
  Box,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <VStack w="100vw">
      <Box p={5}>
        <HStack p={2} justify="space-around">
          <VStack>
            <HStack>
              <Button colorScheme="teal" onClick={() => navigate("/home")}>
                See All Book
              </Button>
              <Button colorScheme="teal" onClick={() => navigate("/register")}>
                Register
              </Button>
            </HStack>
          </VStack>

          <Image boxSize="40%" objectFit="contain" alt="Cover Image" />
        </HStack>
      </Box>
    </VStack>
  );
}
