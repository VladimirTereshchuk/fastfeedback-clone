import React from "react";
import NextLink from "next/link";
import { Box, Link, Flex } from "@chakra-ui/react";
import { parseISO, format, formatISO, lightFormat } from "date-fns";

import { Table, Tr, Th, Td } from "./Table";
import AddSiteModal from "./AddSiteModal";
// import DeleteSiteButton from "./DeleteSiteButton";

const SiteTable = ({ sites }) => {
  //   console.log(format(parseISO("2020-12-09T12:06:46.022Z")));
  return (
    <Box overflowX="scroll">
      <Flex mb="3" justify="flex-end">
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex>
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box as="tr" key={site.id}>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link id={`site-table-link-${index}`} fontWeight="medium">
                    {site.name}
                  </Link>
                </NextLink>
              </Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink
                  href="/site/[siteId]"
                  as={`/site/${site.id}`}
                  passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{lightFormat(new Date(2014, 1, 11), "yyyy-MM-dd")}</Td>
              <Td>{/* <DeleteSiteButton siteId={site.id} /> */}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
