import moment from "moment";
import { memo } from "react";
import { fileFormat } from "../lib/features";
import RenderFile from "./RenderFile";

const MessageComponent = ({ message, user }) => {
  const { attachments = [], content, id, sender, chat, createdAt } = message;
  const sameSender = sender?.id === user?.id;
  const timeAgo = moment(createdAt).fromNow();
  return (
    <div className="">
      <div
        className={`flex ${sameSender ? "justify-end" : "justify-start"} p-2`}
      >
        <div className="max-w-[50%] bg-white shadow-xl rounded-lg min-w-[20%]">
          {!sameSender && (
            <p className="pl-1 font-medium text-gray-400">{sender.name}</p>
          )}
          {content && (
            <p
              className=" px-2 pt-0 text-sm "
              style={{ wordWrap: "break-word" }}
            >
              {content}
            </p>
          )}
          {attachments.length > 0 &&
            attachments.map((attachment, index) => {
              const url = attachment.url;
              const file = fileFormat(url);
              return (
                <div key={index}>
                  <a href={url} target="_blank" download className="text-black">
                    {RenderFile(file, url)}
                  </a>
                </div>
              );
            })}
          <p className="shadow-xl rounded-lg flex justify-end pr-1 text-xs pt-0 text-gray-400 pb-1">
            {timeAgo}
          </p>
        </div>
      </div>
    </div>
  );
};
export default memo(MessageComponent);
