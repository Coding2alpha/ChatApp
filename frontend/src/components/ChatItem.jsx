import { memo } from "react";
import { Link } from "react-router-dom";
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar,
  _id,
  name,
  groupChat ,
  sameSender,
  isOnline,
  newMessageAlert,
  index,
  handleDeleteChat,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <div
        className={`flex justify-between gap-4 items-center relative ${
          sameSender
            ? " bg-black text-white"
            : "bg:white text-black hover:bg-gray-200"
        } border-b-2 border-black p-3 `}
      >
        {/* avatar */}
        <AvatarCard avatar={avatar}/>
        <div>
          <h1>{name}</h1>
          {newMessageAlert && <div>{newMessageAlert.count} New Message</div>}
        </div>
        <div>
          {isOnline && (
            <div className="w-[10px] h-[10px] rounded-full bg-green-800 absolute top-[50%] right-4 "></div>
          )}
        </div>
      </div>
    </Link>
  );
};
export default memo(ChatItem);
