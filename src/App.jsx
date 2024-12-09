import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToggleContext } from "./contexts/ToggleContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Note from "./pages/Note";

function App() {
  const { lightmode } = useContext(ToggleContext);

  return (
    <div
      className={` ${
        lightmode ? "" : "dark"
      } min-h-screen bg-background text-foreground`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="note" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
