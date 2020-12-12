import { Button, Icon, Stack } from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

const LoginButtons = () => {
  const auth = useAuth();

  return (
    // <Stack isInline>
    <Stack spacing={6}>
      <Button
        onClick={() => auth.signinWithGitHub()}
        backgroundColor="gray.900"
        color="white"
        fontWeight="bold"
        fontSize={20}
        padding={8}
        mt={4}
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
      >
        <Icon mr={4} as={FiGithub} color="white" />
        Continue with GitHub
      </Button>
      <Button
        onClick={() => auth.signinWithGoogle()}
        backgroundColor="gray.100"
        color="gray.900"
        variant="outline"
        fontWeight="bold"
        fontSize={20}
        padding={8}
        mt={4}
        _hover={{ bg: "red.50" }}
        _active={{
          bg: "red.50",
          transform: "scale(0.95)",
        }}
      >
        {/* <FcGoogle /> */}
        <Icon mr={4} as={FcGoogle} />
        Continue with Google
      </Button>
    </Stack>
  );
};

export default LoginButtons;
