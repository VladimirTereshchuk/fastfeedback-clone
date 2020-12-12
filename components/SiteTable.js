import React from "react";
import NextLink from "next/link";
import { Box, Link, Flex } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import { Table, Tr, Th, Td } from "./Table";
import AddSiteModal from "./AddSiteModal";
import DeleteSiteButton from "./DeleteSiteButton";

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      {/* <Flex mb="3" justify="flex-end">
        <AddSiteModal>+ Add Site</AddSiteModal>
      </Flex> */}
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
            <Box as="tr" key={index}>
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
                  href={`/p/${site.id}`}
                  // as={`/site/${site.id}`}
                  // passHref
                >
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>

              <Td>{format(parseISO(site.createdAt), "PPp")}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
