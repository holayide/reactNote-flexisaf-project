import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  const { formValues, setFormValues } = useContext(LoginContext);
  const [error, setError] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (value) => {
    const errors = {};
    if (!value.name) {
      errors.name = "This is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(formValues));
    if (Object.keys(validate(formValues)).length === 0) {
      navigate("/note");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-[570px] w-full mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-20">
          <FaPen size={35} />
          <h2 className="text-[48px] font-bold select-none">ReactNote</h2>
        </div>
        <form
          action="#"
          onSubmit={handleSubmit}
          className="flex flex-col gap-11"
        >
          <div>
            <label htmlFor="name" className="text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full mt-2 px-4 py-2 bg-transparent border border-primary rounded-md placeholder:text-sm ${
                error.name && "border-destructive"
              }`}
            />

            {error.name && (
              <p className="mt-1 text-sm text-destructive">{error.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="pwd" className="text-base">
              Password
            </label>
            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                name="pwd"
                id="pwd"
                value={formValues.pwd}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-2 bg-transparent border border-primary rounded-md placeholder:text-sm"
              />
              <div
                onClick={() => setShow((show) => !show)}
                className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 mr-4"
              >
                {show ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </div>
            </div>
          </div>
          <div>
            <button className="w-full py-3 bg-destructive hover:bg-destructive-foreground rounded-md">
              Get Started!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
