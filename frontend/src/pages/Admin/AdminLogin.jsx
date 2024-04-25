import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    secretKey: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const isAdmin = true;
  if (isAdmin) {
    return <Navigate to={"/admin/dashboard"} />;
  }

  return (
    <div className="flex h-[100vh] w-[100%] justify-center items-center bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="md:min-w-[30%] max-w-md min-h-sm shadow-xl bg-white p-3 rounded-md">
        <div className="flex justify-center">
          <h1 className="text-4xl">Admin Login</h1>
        </div>
        <form
          className="flex-col min-w-sm p-4 space-y-2 justify-start items-start "
          onSubmit={handleOnSubmit}
        >
          <label className="">Secret Key *</label>
          <div className="mt-1">
            <input
              type="password"
              name="secretKey"
              placeholder="enter the secret key"
              required
              className="border-slate-200 border-2 rounded-sm p-1 w-full"
              onChange={handleOnChange}
              value={formData.secretKey}
            />
          </div>
          <div className="p-1">
            <button
              type="submit"
              className=" bg-blue-600 p-1 justify-center w-full rounded-md"
            >
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AdminLogin;
