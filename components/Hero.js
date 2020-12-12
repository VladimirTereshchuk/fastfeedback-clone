import { Flex, Heading } from "@chakra-ui/react";

export const Hero = ({ title }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    border="1px solid red"
    // fontFamily="Consolas"
  >
    <Heading fontSize="8vw">{title}</Heading>
    {/* {title} */}
  </Flex>
);

Hero.defaultProps = {
  title: "Fast Feedback Default",
};
