import { memo, useState } from "react";
import { GoSearch } from "react-icons/go";
import UserItem from "./UserItem";
import { sampleNotifications, sampleUsers } from "./constants/sampleData";
import { IoIosAdd } from "react-icons/io";

const NotificationDialog = () => {

  const notifications=sampleNotifications

  const friendRequestHandler=({_id,accept})=>{

  }

  return (
    <div className="">
      <div className="absolute sm:top-[35%] sm:left-[40%] top-[35%] left-[15%] shadow-2xl z-50">
        <div className="w-[300px]  bg-white flex-col p-2 relative space-y-2 shadow-2xl">
          <h1 className="flex justify-center text-2xl">Friend Requests</h1>
          <div className="flex-col justify-center items-center space-y-2">
            {notifications.length > 0 ? (
              notifications.map((notification)=><NotificationItem key={notification._id} handler={friendRequestHandler} _id={notification._id} sender={notification.sender}/>)
            ) : (
              <div>0 Notifications</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const NotificationItem = memo(({sender,_id,handler }) => {
  return (
    <div className="flex justify-center items-center space-x-2 text-lg mt-4">
      <div className="w-[30px] h-[30px] flex justify-center items-center">
        <img src={sender.avatar} alt="no Image" className="rounded-full" />
      </div>
      <p className="w-full line-clamp-1">{sender.name} sent you a friend request</p>
      <button className="text-green-500" onClick={() => handler({ _id, accept: true })}>
        Accept
      </button>
      <button className="text-red-500" onClick={() => handler({ _id, accept: false })}>
        Reject
      </button>
    </div>
  );
});
export default memo(NotificationDialog);
