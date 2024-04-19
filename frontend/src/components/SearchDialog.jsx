import { memo, useState } from "react";
import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { sampleUsers } from "./constants/sampleData";

const SearchDialog = () => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setInput(() => e.target.value);
    console.log(input);
  };

  let isLoadingSendFriendRequest = false;

  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = (id) => {
    console.log(id);
  };

  return (
    <div className="">
      <div className="absolute sm:top-[35%] sm:left-[40%] top-[35%] left-[15%] shadow-2xl z-50">
        <div className="w-[300px]  bg-white flex-col p-5 relative space-y-2 shadow-2xl">
          <h1 className="flex justify-center text-2xl">FindPeople</h1>
          <div className="flex ">
            <div className="flex items-center p-2">
              <GoSearch className="" />
            </div>
            <input
              type="text"
              placeholder="find people"
              aria-label="find people"
              className="border-2 w-full p-1"
              onChange={onChangeHandler}
              value={input}
            />
          </div>
          <div className="flex-col justify-center items-center space-y-2">
            {users.map((user, index) => (
              <UserItem
                key={index}
                user={user}
                handler={addFriendHandler}
                handleIsLoading={isLoadingSendFriendRequest}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(SearchDialog);
