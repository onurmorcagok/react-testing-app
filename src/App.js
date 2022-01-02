import "./App.css";
import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Form from "./components/Form";

function App() {
  const [user, setUser] = useState(null);
  return (
    <ChakraProvider>
      <div className="App">
        {user ? (
          <Text fontSize="4xl">Welcome!</Text>
        ) : (
          <Form setUser={setUser} />
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
