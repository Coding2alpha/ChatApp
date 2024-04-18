import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";

const Register = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    username: "",
    password: "",
  });

  const [imagePreview,setImagePreview]=useState('')

  const handleOnChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log(typeof value,name,value);
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

   const  handleOnUpload=(e)=>{
      e.preventDefault();
      const file=e.target.files[0]
      const reader=new FileReader()
      reader.readAsDataURL(file)
      // ImagePreview is in Base 64
      // console.log(reader.result);
      reader.onloadend=()=>{
        setImagePreview(reader.result)
        setFormData({...formData,image:file})
      }
   }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };
  
 

  return (
    <div className="flex h-[100vh] w-[100%] justify-center items-center bg-gradient-to-r from-purple-300 to-pink-300">
      <div className="md:min-w-[30%] max-w-md min-h-sm shadow-xl bg-white p-3">
        <div className="flex justify-center">
          <h1 className="text-4xl">Register</h1>
        </div>
        <form
          className="flex-col min-w-sm p-4 space-y-2 justify-start items-start "
          onSubmit={handleOnSubmit}
        >
          <div className="flex  justify-center relative ">
            {formData.image ? (
              <img
                src={imagePreview}
                className=" bg-red-200 rounded-full h-[100px] w-[100px]"
              />
            ) : (
              <FaRegUserCircle className=" text-6xl bg-slate-200 rounded-full " />
            )}
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleOnUpload}
              className="absolute bottom-0 right-[40%] h-[20px] w-[20px] z-10 rounded-full opacity-0 bg-red-500 cursor-pointer"
            />
            <IoCameraOutline className="absolute bottom-0 right-[40%] h-[20px] w-[20px] bg-gray-200 rounded-full cursor-pointer" />
          </div>
          <div className="">
            <label className="w-full">Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                required
                className="border-slate-200 border-2 rounded-sm p-1 w-full"
                onChange={handleOnChange}
                value={formData.name}
              />
            </div>
          </div>
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
            Register
          </button>
        </form>
        <h1 className="flex justify-center">OR</h1>
        <div className="flex justify-center">
          <h1>Already Have an account?</h1>
          <Link to={"/login"} className="ml-3 text-blue-600 underline">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
