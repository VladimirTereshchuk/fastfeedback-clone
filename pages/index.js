import Head from "next/head";
import {
  Link as ChakraLink,
  Text,
  Button,
  Heading,
  Flex,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

const Index = (props) => {
  const auth = useAuth();
  return (
    <Container height="100vh">
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `,
          }}
        />
      </Head>
      <Main mx="auto">
        <Heading fontSize="5vw" textAlign="center">
          Fast Feedback
        </Heading>

        <Icon viewBox="0 0 46 30" w="30" h="10" color="blue.200">
          <path
            d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
            fill="currentColor"
          />
        </Icon>

        <Stack spacing={10} justify="center">
          <Flex mx="auto">
            {auth?.user ? (
              <Button bg="gray.300">
                <Link href="/dashboard">View DashBoard</Link>
              </Button>
            ) : (
              <LoginButtons />
            )}
          </Flex>
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      {/* <CTA /> */}
    </Container>
  );
};

export default Index;
