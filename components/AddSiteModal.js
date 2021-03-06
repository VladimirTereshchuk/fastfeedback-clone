import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Input,
  useToast,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

import { createSite } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const AddSiteModal = ({ children }) => {
  const toast = useToast();
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, register, errors } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      // settings: {
      //   icons: true,
      //   timestamp: true,
      //   ratings: false,
      // },
    };
    const { id } = createSite(newSite);
    toast({
      title: "Success!",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    mutate(
      ["api/sites", auth.user.token],
      async (data) => ({
        sites: [{ id, ...newSite }, ...data.sites],
      }),
      false
    );
    onClose();
  };

  return (
    <>
      <Button
        id="add-site-modal-button"
        onClick={onOpen}
        backgroundColor="gray.900"
        color="white"
        fontWeight="medium"
        _hover={{ bg: "gray.700" }}
        _active={{
          bg: "gray.800",
          transform: "scale(0.95)",
        }}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          //   mt={40}
          as="form"
          onSubmit={handleSubmit(onCreateSite)}
        >
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Name</FormLabel>
              <Input
                id="site-input"
                placeholder="My site"
                name="name"
                ref={register({
                  required: "Required",
                })}
              />
              <FormErrorMessage>
                {errors.name && "Введите имя"}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={errors.name}>
              <FormLabel>Link</FormLabel>
              <Input
                id="link-input"
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: "Required",
                })}
              />
              <FormErrorMessage>
                {errors.name && "Введите адрес сайта"}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3} fontWeight="medium">
              Cancel
            </Button>
            <Button
              id="create-site-button"
              backgroundColor="#99FFFE"
              color="#194D4C"
              fontWeight="medium"
              type="submit"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSiteModal;
