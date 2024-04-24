import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { sampleChats, sampleUsers } from "../components/constants/sampleData";
import { IoArrowBack } from "react-icons/io5";
import { IoIosMenu, IoMdAdd } from "react-icons/io";
import { Suspense, lazy, memo, useEffect, useState } from "react";
import AvatarCard from "../components/AvatarCard";
import { MdEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import UserItem from "../components/UserItem";

const ConfirmDeleteDialog = lazy(() =>
  import("../components/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() => import("../components/AddMemberDialog"));

const isAddMember = false;

const Groups = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const chatId = useSearchParams()[0].get("group");
  // console.log(chatId);

  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [updatedGroupName, setUpdatedGroupName] = useState("");

  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setUpdatedGroupName(() => e.target.value);
  };

  const removeMemberHandler = (id) => {console.log('Remove member',id);}

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setUpdatedGroupName(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setUpdatedGroupName("");
      setIsEdit(false);
    };
  }, [chatId]);

  const handleSubmit = () => {
    setIsEdit(false);
    setGroupName(updatedGroupName);
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("confirm delete");
  };

  const closeConfirmDeleteHandler = () => setConfirmDeleteDialog(false);

  const openMemberHandler = () => console.log("open member");

  const GroupName = (
    <div>
      {isEdit ? (
        <div className="flex space-x-2 items-center">
          <input
            type="text"
            value={updatedGroupName}
            onChange={handleOnChange}
            className="p-1 border-2"
          />
          <button
            onClick={handleSubmit}
            className="rounded-full bg-green-500  text-white h-8 w-8 p-1 flex items-center justify-center"
          >
            <MdDone className=" text-2xl" />
          </button>
        </div>
      ) : (
        <h1 className="flex p-2 space-x-2">
          {groupName && <p>{groupName}</p>}
          <button onClick={() => setIsEdit(true)}>
            <MdEdit />
          </button>
        </h1>
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-3 h-[100vh]">
      <div className="hidden sm:block overflow-auto">
        <GroupList myGroup={sampleChats} chatId={chatId} />
      </div>
      <div className="bg-slate-100 sm:col-span-2 col-span-3 flex-col w-full item-center  relative px-1 py-3 ">
        <IoArrowBack
          className="absolute top-3 left-3 text-2xl cursor-pointer hover:bg-gray-700 p-1 text-white bg-black rounded-full h-7 w-7"
          onClick={() => navigate("/")}
        />
        <IoIosMenu
          className="absolute top-3 right-3 text-2xl sm:hidden block"
          onClick={() => setIsOpen(true)}
        />
        {groupName ? (
          <>
            <div className="flex justify-center">{GroupName}</div>
            <div className="p-4 px-20">Members</div>
            <div className="flex-col p-2 justify-center bg-white shadow-xl z-5 max-w-[80%] h-[60%] m-auto overflow-y-scroll">
              {sampleUsers.map((user, index) => {
                user.isAdded = true;
                return <UserItem key={index} user={user} style={true} handler={removeMemberHandler}/>;
              })}
            </div>
            <div className=" sm:flex-row-reverse md:flex justify-center space-y-2 mt-4">
              <div className="w-full flex justify-center">
                <button
                  className="bg-teal-500 rounded-md w-[8rem] p-1"
                  onClick={openMemberHandler}
                >
                  <p className="flex items-center justify-center space-x-2">
                    <IoMdAdd className="text-xl font-extrabold mr-1" />
                    Add Member
                  </p>
                </button>
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="bg-red-500 rounded-md w-[8rem] p-1"
                  onClick={openConfirmDeleteHandler}
                >
                  <p className="flex items-center justify-center space-x-2">
                    <MdDeleteOutline className="text-xl font-extrabold mr-1" />
                    Delete Group
                  </p>
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="flex w-full h-full justify-center items-center text-2xl font-bold text-gray-500">Please Select Group To Edit</p>
        )}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} chatId={chatId} />

        {isAddMember && (
          <Suspense fallback={<div>Loading...</div>}>
            <AddMemberDialog isOpen={isAddMember} />
          </Suspense>
        )}

        {confirmDeleteDialog && (
          <Suspense fallback={<div>Loading...</div>}>
            <ConfirmDeleteDialog
              isOpen={confirmDeleteDialog}
              closeHandler={closeConfirmDeleteHandler}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
};

function Drawer({ isOpen, setIsOpen, chatId }) {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is greater than "sm" breakpoint
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      const isWide = screenWidth > 640; // Assuming "sm" breakpoint is 640px
      setIsScreenWide(isWide);

      // If screen is wide and drawer is open, close the drawer
      if (isWide && isOpen) {
        setIsOpen(false);
      }
    };

    // Add event listener to check screen width on resize
    window.addEventListener("resize", checkScreenWidth);

    // Initial check on component mount
    checkScreenWidth();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isOpen]);
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0  " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " -transition-all opacity-0 -translate-x-full ")
      }
    >
      <section
        className={
          " w-screen max-w-80 left-0 absolute bg-white h-full shadow-xl " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-80 pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          {isOpen && <GroupList myGroup={sampleChats} chatId={chatId} w={80} />}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

const GroupList = ({ w = "100%", myGroup = [], chatId }) => {
  return (
    <div className={`w-${w} flex-col`}>
      {myGroup.length > 0 ? (
        myGroup.map((data, index) => {
          const { avatar, _id, name } = data;
          return (
            <div key={index}>
              <GroupItem
                index={index}
                avatar={avatar}
                name={name}
                _id={_id}
                chatId={chatId}
              />
            </div>
          );
        })
      ) : (
        <p className="flex justify-center mt-4">No Group</p>
      )}
    </div>
  );
};

const GroupItem = memo(({ avatar, _id, name, chatId }) => {
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <div
        className={`flex justify-between gap-4 items-center relative ${
          chatId === _id
            ? " bg-black text-white"
            : "bg:white text-black hover:bg-gray-200"
        } border-b-2 border-black p-3 `}
      >
        {/* avatar */}
        <AvatarCard avatar={avatar} />
        <div>
          <h1>{name}</h1>
        </div>
        <div></div>
      </div>
    </Link>
  );
});

export default Groups;
