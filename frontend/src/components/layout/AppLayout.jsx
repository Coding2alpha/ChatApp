import { useParams } from "react-router-dom";
import ChatList from "../ChatList.jsx";
import { sampleChats } from "../constants/sampleData.js";
import Title from "../shared/Title.jsx";
import Header from "./Header.jsx";
import Profile from "../Profile.jsx";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params=useParams()
    const chatId=params.chatId
    // console.log(chatId);

    const handleDeleteChat=(e,_id,groupChat)=>{
      e.preventDefault()
      console.log("Delete Chat",_id,groupChat);
    }

    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-4  h-[100vh] relative">
          <div className="hidden sm:block">
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
          <div className="bg-slate-100 md:col-span-2 sm:col-span-3 col-span-4">
            <WrappedComponent {...props} />
          </div>
          <div className="hidden md:block"><Profile/></div>
        </div>
      </>
    );
  };
};
export default AppLayout;
