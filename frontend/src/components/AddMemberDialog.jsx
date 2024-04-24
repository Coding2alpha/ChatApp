import { useRef, useEffect, useState } from "react";
import { sampleUsers } from "./constants/sampleData";
import UserItem from "./UserItem";

export default function AddMemberDialog({ isOpen }) {
  const [members, setMembers] = useState(sampleUsers);
  const selectMemberHandler = (id) => {
    setMembers((members) =>
      members.map((user) =>
        user._id === id ? { ...user, isAdded: !user.isAdded } : user
      )
    );
    console.log(members);
  };

  const closeHandler = () => {
    setMembers([]);
  };

  const addMemberSubmitHandler = () => {
    closeHandler();
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
        className={`w-full sm:max-w-[30%] max-w-[80%] bg-white rounded-lg shadow-xl transform transition-transform cursor-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-200 rounded-t-lg">
          <h2 className="text-lg font-semibold">Add Member</h2>
        </div>
        <div className="p-6">
          {members.length > 0 ? (
            members.map((user, index) => (
              <UserItem key={index} user={user} handler={selectMemberHandler} />
            ))
          ) : (
            <p>No Friends</p>
          )}
        </div>
        <div className="flex-row-reverse flex  p-6 bg-gray-100 border-t border-gray-200 rounded-b-lg">
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-sm"
            onClick={addMemberSubmitHandler}
          >
            Submit Changes
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm ml-2"
            onClick={closeHandler}
          >
            Cancel
          </button>
        </div>
      </section>
    </main>
  );
}
