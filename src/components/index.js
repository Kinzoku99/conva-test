import { Stack, InputGroup, InputLeftElement, Input, InputRightElement, Box, Button } from "@chakra-ui/react";
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons";

const DummyInput = () => (
    <Box pb={2}>
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<PhoneIcon color='blue.500' />}
                />
                <Input type='tel' placeholder='Phone number' />
            </InputGroup>

            <InputGroup bg="white" >
                <InputLeftElement
                    pointerEvents='none'
                    color='green.400'
                    fontSize='1.2em'
                    children='$'
                />
                <Input placeholder='Enter amount' />
                <InputRightElement children={<CheckIcon color='green.500' />} />
            </InputGroup>
        </Stack>
    </Box>
);

const DummyButton = () => (
    <Button colorScheme='blue'>Button</Button>
);


export const DummyComponent = ({w}) => (
    <Box w={w} mx="auto" bg="gray.100" p={2} my={3}>
        <DummyInput />
        <DummyButton />
    </Box>
);