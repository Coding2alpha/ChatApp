import { memo } from "react";
import { BiMinus } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";

const UserItem = ({ user, handler, handleIsLoading }) => {
  const { avatar, name, _id } = user;
  console.log(user);
  return (
    <div className="flex justify-center items-center space-x-2 text-lg mt-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center">
        <img src={avatar} alt="no Image" className="rounded-full" />
      </div>
      <p className="w-full">{name}</p>
      {user.isAdded ? (
        <button
          className="bg-red-500 rounded-full p-1 text-white shadow-xl"
          onClick={() => handler(_id)}
        >
          <BiMinus disabled={handleIsLoading} className="" />
        </button>
      ) : (
        <button
          className="bg-green-500 rounded-full p-1 text-white shadow-xl"
          onClick={() => handler(_id)}
        >
          <IoIosAdd disabled={handleIsLoading} className="" />
        </button>
      )}
    </div>
  );
};
export default memo(UserItem);
