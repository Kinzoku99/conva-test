import { Box } from "@chakra-ui/react"
import { DummyComponent } from "./components";

const App = () => (
    <Box w="100wv" h="100vh" bg="gray.50">
        <DummyComponent w="xl" />
    </Box>
);

export default App;
