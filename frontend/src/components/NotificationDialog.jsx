import { memo, useState } from "react";
import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { sampleNotifications, sampleUsers } from "./constants/sampleData";
import { IoIosAdd } from "react-icons/io";
import { useRef, useEffect } from "react";

const NotificationDialog = ({ isOpen, closeHandler }) => {
  const notifications = sampleNotifications;

  const friendRequestHandler = ({ _id, accept }) => {
    console.log(accept);
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
        className={`w-full sm:max-w-[40%] max-w-[80%] bg-white rounded-lg shadow-xl transform transition-transform cursor-auto ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="">
          <div className="  bg-white flex-col p-2 relative space-y-2 shadow-2xl">
            <h1 className="flex justify-center text-2xl">Friend Requests</h1>
            <div className="flex-col justify-center items-center space-y-2">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <NotificationItem
                    key={notification._id}
                    handler={friendRequestHandler}
                    _id={notification._id}
                    sender={notification.sender}
                  />
                ))
              ) : (
                <div>0 Notifications</div>
              )}
            </div>
            <div className="flex flex-row-reverse p-1  border-t border-gray-200 rounded-b-lg">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-sm ml-2"
                onClick={closeHandler}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  return (
    <div className="flex justify-center items-center space-x-2 text-lg mt-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center">
        <img src={sender.avatar} alt="no Image" className="rounded-full" />
      </div>
      <p className="w-full line-clamp-1">
        {sender.name} sent you a friend request
      </p>
      <button
        className="text-green-500"
        onClick={() => handler({ _id, accept: true })}
      >
        Accept
      </button>
      <button
        className="text-red-500"
        onClick={() => handler({ _id, accept: false })}
      >
        Reject
      </button>
    </div>
  );
});
export default memo(NotificationDialog);
