import { useRef } from "react";
import Feedback from "@/components/FeedBack";
import { useAuth } from "@/lib/auth";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import { Box, Button, Flex, FormControl, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createFeedback } from "@/lib/db";
import { useState } from "react";

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  console.log(feedback);
  return {
    props: {
      initialFeedback: feedback,
    },
  };
}
export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

function SiteFeedBack({ initialFeedback }) {
  const auth = useAuth();
  const router = useRouter();
  const inputEl = useRef();
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth?.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: inputEl.current.value,
      createdAt: new Date().toISOString(),
      provider: auth?.user.provider,
      status: "pending",
    };
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };

  //   console.log(initialFeedback);
  return (
    <Flex
      m="0 auto"
      mt={3}
      direction="column"
      maxWidth="700px"
      //   border="1px solid black"
    >
      <Box as="form" onSubmit={onSubmit}>
        <FormControl mb={8}>
          <Textarea
            ref={inputEl}
            id="comment"
            placeholder="Leave a comment"
            // isDisabled={!user}
            h="100px"
          />
          <Button mt={2} type="submit">
            Add Comment
          </Button>
          {/* {!loading && <LoginOrLeaveFeedback />} */}
        </FormControl>
      </Box>
      {allFeedback.map((feedback, i) => (
        <Feedback key={i} {...feedback} />
      ))}
    </Flex>
  );
}

export default SiteFeedBack;
