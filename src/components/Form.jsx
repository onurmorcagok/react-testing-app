import { useState } from "react";
import {
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Flex,
  Text,
} from "@chakra-ui/react";

import { FormValidation } from "./FormValidation";

function Form({ setUser }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submitForm = () => {
    const error = FormValidation(formData);

    console.log(error);

    if (error) {
      setErrorMessage(error);
      return;
    }

    setUser(true);
  };

  const handleInputs = (e) => {
    setErrorMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Flex mb={4}>
        <Input
          placeholder="Name"
          mr={4}
          name="firstName"
          value={formData.firstName}
          onChange={(e) => handleInputs(e)}
        />
        <Input
          placeholder="Surname"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => handleInputs(e)}
        />
      </Flex>
      <Input
        mb={4}
        placeholder="E-mail"
        name="email"
        value={formData.email}
        onChange={(e) => handleInputs(e)}
      />
      <InputGroup size="md" mb={4}>
        <Input
          pr="4.5rem"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInputs(e)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="2rem"
            size="sm"
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button mb={4} colorScheme="teal" size="md" w="100%" onClick={submitForm}>
        Login
      </Button>

      <Text fontSize="24px" color="tomato" h="36px" data-testid="error-text">
        {errorMessage}
      </Text>
    </div>
  );
}

export default Form;
