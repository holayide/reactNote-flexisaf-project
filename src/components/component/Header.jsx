import { LoginContext } from "../../contexts/LoginContext";
import { ToggleContext } from "../../contexts/ToggleContext";
import { useContext } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

function Header() {
  const { lightmode, setLightMode } = useContext(ToggleContext);
  const { formValues } = useContext(LoginContext);

  return (
    <div className="h-[60px] px-5 bg-primary flex items-center border-b-0 shadow-sm">
      <div className="w-full flex items-center justify-between">
        <h3>ReactNote</h3>
        <div className="flex items-center gap-3">
          <div className="text-lg">
            <span className="text-xs pr-2"> welcome</span>
            {formValues.name.toLowerCase()}
          </div>
          <button onClick={() => setLightMode((light) => !light)}>
            {lightmode ? <IoMdSunny /> : <IoMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
