import AppLayout from "../components/layout/AppLayout";
import { ImAttachment } from "react-icons/im";
import { IoMdSend } from "react-icons/io";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessage } from "../components/constants/sampleData";
import MessageComponent from "../components/MessageComponent";

const user = {
  id: "1",
  name: "Om Singh Thakur",
};

const Chat = () => {
  return (
    <div className="h-[92vh]">
      <div className="h-[90%] overflow-x-hidden overflow-y-auto">
        {sampleMessage.map((message) => (
          <MessageComponent key={message.chat} message={message} user={user} />
        ))}
      </div>
      <div className="h-[10%] flex gap-2 p-1 relative pb-2">
        <div className="bg-white shadow-xl rounded-lg w-full flex gap-1">
          <button>
            <ImAttachment className="flex justify-center items-center text-xl ml-1  h-full text-gray-600" />
          </button>
          <input
            type="text"
            className="p-1 w-full outline-none font-medium text-gray-400"
            placeholder="Type a message..."
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex h-full text-2xl items-center justify-center text-gray-600"
          >
            <IoMdSend className="hover:text-black   " />
          </button>
        </div>
        {/* <FileMenu /> */}
      </div>
    </div>
  );
};
export default AppLayout()(Chat);
