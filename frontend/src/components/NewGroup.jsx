import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { useState } from "react";
import { sampleUsers } from "./constants/sampleData";

const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers);

  const [groupName, setGroupName] = useState("");

  const onChangeHandler = (e) => {
    e.preventDefault();
    setGroupName(() => e.target.value);
    console.log(groupName);
  };

  const selectMemberHandler = (id) => {
    setMembers((members) =>
      members.map((user) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );
    console.log(members);
  };

  const submitHandler = () => {
    console.log(members);
  };

  const closeHandler=()=>{
    console.log('close');
  }

  return (
    <div className="">
      <div className="absolute sm:top-[35%] sm:left-[40%] top-[35%] left-[15%] shadow-2xl z-50">
        <div className="w-[300px]  bg-white flex-col p-2 relative space-y-2 shadow-2xl">
          <h1 className="flex justify-center text-2xl">New Group</h1>
          <div className="flex ">
            <div className="flex items-center p-2">
              <GoSearch className="" />
            </div>
            <input
              type="text"
              placeholder="Group Name"
              className="border-2 w-full p-1"
              onChange={onChangeHandler}
              value={groupName}
            />
          </div>
          <p>Members</p>
          <div className="flex-col justify-center items-center space-y-2">
            {members.map((user, index) => (
              <UserItem key={index} user={user} handler={selectMemberHandler} />
            ))}
          </div>
          <div className="flex gap-6 items-center justify-center mt-2">
            <button
              className="bg-red-500 rounded-md p-1 text-white shadow-xl"
              onClick={() => closeHandler()}
            >
              Cancel
            </button>
            <button
              className="bg-green-500 rounded-md p-1 text-white shadow-xl"
              onClick={() => submitHandler()}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewGroup;
