import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

   const handleOnChange = (e) => {
     e.preventDefault();
     const name = e.target.name;
     const value = e.target.value;
     setFormData({ ...formData, [name]: value });
     console.log(name,value);
   };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex h-[100vh] w-[100%] justify-center items-center bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="md:min-w-[30%] max-w-md min-h-sm shadow-xl bg-white p-3">
        <div className="flex justify-center">
          <h1 className="text-4xl">Login</h1>
        </div>
        <form
          className="flex-col min-w-sm p-4 space-y-2 justify-start items-start "
          onSubmit={handleOnSubmit}
        >
          <div>
            <label className="">Username</label>
            <div className="mt-1">
              <input
                type="text"
                name="username"
                required
                className="border-slate-200 border-2 rounded-sm p-1 w-full"
                onChange={handleOnChange}
                value={formData.username}
              />
            </div>
          </div>
          <div>
            <label className="">Password</label>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                required
                className="border-slate-200 border-2 rounded-sm p-1 w-full"
                onChange={handleOnChange}
                value={formData.password}
              />
            </div>
          </div>
          <button
            type="submit"
            className=" bg-blue-600 p-1 justify-center w-full rounded-md"
          >
            Login
          </button>
        </form>
        <h1 className="flex justify-center">OR</h1>
        <div className="flex justify-center">
          <h1>Don't Have an account?</h1>
          <Link to={"/register"} className="ml-3 text-blue-600 underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login