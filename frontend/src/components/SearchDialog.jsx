import { memo, useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { sampleUsers } from "./constants/sampleData";

const SearchDialog = ({ isOpen, closeHandler }) => {
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
        className={`w-full sm:max-w-[20%] max-w-[80%] bg-white rounded-lg shadow-xl transform transition-transform cursor-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="">
          <div className="  bg-white flex-col p-5 relative space-y-2 shadow-2xl">
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
      </section>
    </main>
  );
};
export default memo(SearchDialog);
