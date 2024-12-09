import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ToggleContext = createContext();

function ToggleProvider({ children }) {
  const [lightmode, setLightMode] = useState(false);

  return (
    <ToggleContext.Provider value={{ lightmode, setLightMode }}>
      {children}
    </ToggleContext.Provider>
  );
}

ToggleProvider.propTypes = {
  children: PropTypes.node,
};

export { ToggleContext, ToggleProvider };
