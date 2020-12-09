import Head from "next/head";
import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Button,
  Heading,
  Flex,
  Box,
  Stack,
  Icon,
  useStyles,
  useStyleConfig,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import Image from "next/image";
import EmptyState from "@/components/SiteEmptyState";

const GoogleIcon = (props) => (
  <svg
    width="300"
    height="316"
    viewBox="0 0 3000 3163"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    {/* <rect width="3000" height="3162.95" fill="none" /> */}
    <path
      d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
      fill="currentColor"
    />
  </svg>
);

const Index = (props) => {
  // const styles = useStyleConfig(props);
  // console.log(styles);
  const auth = useAuth();
  return (
    <Container height="100vh">
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Hero title="Fast Feedback almost" /> */}
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
            <Button
              bg="red.100"
              // w="max-content"
              onClick={() => auth.signinWithGitHub()}
            >
              Sing In
            </Button>
          </Flex>
          {auth?.user && (
            <EmptyState />
            // <Flex justify="center">
            //   <Flex borderRadius="full" overflow="hidden">
            //     <Image
            //       src="https://avatars2.githubusercontent.com/u/50174243?v=4"
            //       alt="photo"
            //       width={30}
            //       height={30}
            //     />{" "}
            //   </Flex>
            //   <Box ml={3} fontSize={20}>
            //     {auth?.user?.email}
            //   </Box>
            // </Flex>
          )}
          {/* <Flex justify="center">
            {auth?.user && (
              <Button bg="green.200" onClick={() => auth.signout()}>
                SingOut
              </Button>
            )}
          </Flex> */}
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

// import Head from "next/head";
// import { useAuth } from "../lib/auth";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";

// export default function Home() {
//   const auth = useAuth();
//   // console.log(auth);
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
// <h1 className={styles.title}>Fast Feedback</h1>

// <p className={styles.description}>
//   Get started by editing{" "}
//   <code className={styles.code}>pages/index.js</code>
// </p>
// <button onClick={() => auth.signinWithGitHub()}>Sing In</button>
// {auth?.user && (
//   <div className={styles.fuck}>
//     <div className={styles.image}>
//       <Image
//         src="https://avatars2.githubusercontent.com/u/50174243?v=4"
//         alt="photo"
//         width={30}
//         height={30}
//       />{" "}
//     </div>
//     <span>{auth?.user?.email}</span>
//   </div>
// )}
// {auth?.user && <button onClick={() => auth.signout()}>SingOut</button>}
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   );
// }
