import { Box, ChakraProvider } from "@chakra-ui/react"
import { Html } from 'react-konva-utils';
import { Layer, Stage } from "react-konva";
import { DummyComponent } from "./components";

const App = () => {
    //const box = new Rect
    return (
        <Box w="100vw" h="100vh" overflow="hidden" bg="gray.50">
            <Stage width={window.innerWidth} height={window.innerHeight} draggable>
                <Layer>
                    <Html>
                        <ChakraProvider>
                            <DummyComponent w="xl" />
                        </ChakraProvider>
                    </Html>
                </Layer>
            </Stage>
        </Box>
    );
}

export default App;
