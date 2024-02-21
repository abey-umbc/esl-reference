import React, { useState } from "react";
import {
  Input,
  Button,
  Box,
  Text,
  VStack,
  Center,
  useToast,
} from "@chakra-ui/react";

function SecurityPage({ onAccessGranted }) {
  const [accessCode, setAccessCode] = useState("");
  const toast = useToast();

  const verifyAccessCode = () => {
    const validAccessCode = import.meta.env.VITE_APP_ACCESS_CODE; // Use an environment variable for the access code

    if (accessCode === validAccessCode) {
      onAccessGranted();
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect code.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Center h="100vh">
      {" "}
      {/* Center the form vertically and horizontally */}
      <VStack spacing={4} align="stretch">
        <Box textAlign="center">
          <Text fontSize="xl" mb={4}>
            Enter Access Code
          </Text>
          <Input
            placeholder="Access Code"
            size="md"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
        </Box>
        <Button
          colorScheme="blue"
          onClick={verifyAccessCode}
          isDisabled={accessCode === ""} // Disable button if accessCode is empty
        >
          Submit
        </Button>
      </VStack>
    </Center>
  );
}

export default SecurityPage;
