import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { useState } from "react";
import { sampleUsers } from "./constants/sampleData";
import { useRef, useEffect } from "react";
const NewGroup = ({ isOpen, closeHandler }) => {
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
  };

  console.log(members);

  const submitHandler = () => {
    console.log(members);
  };

  const closeHandle = () => {
    console.log("close");
  };

  const dialogRef = useRef(null);

  // Handle clicks outside the dialog to close it
  const handleOutsideClick = (event) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target)) {
      closeHandler();
    }
  };

  // Add event listener for clicks outside the dialog when it's open
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <main
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 cursor-pointer ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 bg-gray-900 bg-opacity-25`}
    >
      <section
        ref={dialogRef}
        className={`w-full md:max-w-[30%] sm:max-w-[30%] max-w-[80%] bg-white rounded-lg shadow-xl transform transition-transform cursor-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="">
          <div className=" bg-white flex-col p-2 relative space-y-2 shadow-2xl">
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
                <UserItem
                  key={index}
                  user={user}
                  handler={selectMemberHandler}
                />
              ))}
            </div>
            <div className="flex gap-6 items-center justify-center mt-2">
              <button
                className="bg-red-500 rounded-md p-1 text-white shadow-xl"
                onClick={() => closeHandle()}
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
      </section>
    </main>
  );
};
export default NewGroup;
