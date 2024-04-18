import ChatItem from "./ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlerts = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <div className={`w-${w} flex-col`}>
      {chats.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;
        const newMessageAlert = newMessagesAlerts.find(
          ({ chatId }) => chatId === _id
        );
        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <div key={index}>
            <ChatItem
            index={index}
              avatar={avatar}
              newMessageAlert={newMessageAlert}
              isOnline={isOnline}
              name={name}
              _id={_id}
              groupChat={groupChat}
              sameSender={chatId===_id}
              handleDeleteChat={handleDeleteChat}
            />
          </div>
        );
      })}
    </div>
  );
};
export default ChatList;
