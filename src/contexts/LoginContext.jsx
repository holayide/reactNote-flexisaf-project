import PropTypes from "prop-types";
import { createContext, useState } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const initialValue = { name: "", pwd: "" };
  const [formValues, setFormValues] = useState(initialValue);

  return (
    <LoginContext.Provider value={{ formValues, setFormValues }}>
      {children}
    </LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node,
};

export { LoginContext, LoginProvider };
