import {
    useDisclosure,
    Modal,
    Button,
    ModalOverlay,
    ModalContent
} from "@chakra-ui/react";
import ResetPassword from "./ResetPassword";

function PasswordModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} height={"10px"}>
          <ModalOverlay />
          {/* <ModalCloseButton /> */}
          <ModalContent height={'50px'} size={'md'} useInert={'aria-hidden'}>
            <ResetPassword/>
          </ModalContent>
        </Modal>
      </>
    )
}

export default PasswordModal;