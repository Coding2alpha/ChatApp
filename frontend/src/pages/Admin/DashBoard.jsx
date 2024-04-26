import {
  MdAdminPanelSettings,
  MdMessage,
  MdOutlineGroup,
} from "react-icons/md";
import AdminLayout from "../../components/layout/AdminLayout";
import moment from "moment";
import { IoIosNotifications } from "react-icons/io";
import { FaUser, FaUserGroup, FaUserLarge } from "react-icons/fa6";
import { DoughnutChart, LineChart } from "../../components/Charts";

const DashBoard = () => {
  const AppBar = (
    <div className="flex items-center justify-between sm:gap-6 shadow-2xl bg-white p-2 rounded-xl w-full">
      <div className="sm:block hidden"></div>
      <div className="flex sm:gap-4 gap-2 justify-center items-center">
        <MdAdminPanelSettings className="text-2xl" />
        <input
          type="text"
          placeholder="Search..."
          className="rounded-xl sm:p-2 p-1 bg-gray-100 outline"
        />
        <button className="bg-black text-white sm:p-2 p-1 rounded-full">
          Search
        </button>
      </div>
      <p className="sm:block hidden">{moment().format("dddd,D MMMM YYYY")}</p>
      <IoIosNotifications className="text-2xl" />
    </div>
  );

  return (
    <AdminLayout>
      <div className="flex-col justify-center items-center p-4 space-y-4 h-[100vh] overflow-y-auto">
        {AppBar}
        <div className="flex sm:flex-row flex-col gap-3">
          <div className="flex relative sm:gap-6 justify-center items-center shadow-2xl min-h-[250px] sm:max-w-[50%] m-auto bg-white p-3 rounded-xl w-full">
            <div className="flex-col">
              <p className=" absolute top-3 left-2 text-xl">Last Messages</p>
              <LineChart value={[22, 34, 7, 68, 55, 55, 66]} />
            </div>
          </div>
          <div className="flex relative justify-center items-center sm:gap-6 shadow-2xl min-h-[200px] max-h-[250px] sm:max-w-[50%] bg-white p-5 rounded-xl w-full">
            <div className="absolute top-[50%] left-[42%] flex gap-2">
              <FaUserGroup /> vs <FaUserLarge />
            </div>
            <DoughnutChart
              labels={["Single Chats", "Group Chats"]}
              value={[33, 77]}
            />
          </div>
        </div>
        <div className="flex-col flex sm:flex-row gap-4 justify-center items-center">
          <Widgets title="Users" value={20} Icon={<FaUser />} />
          <Widgets title="Chats" value={20} Icon={<MdOutlineGroup />} />
          <Widgets title="Messages" value={20} Icon={<MdMessage />} />
        </div>
      </div>
    </AdminLayout>
  );
};

const Widgets = ({ title, value, Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-7 gap-4 rounded-md sm:min-w-[20%] min-w-[50%]">
      <div className="flex justify-center items-center border-4 border-black rounded-full p-6">
        <p className="text-2xl">{value}</p>
      </div>
      <div className="flex gap-6">
        <div className="flex justify-center items-center">{Icon}</div>
        <div className="flex justify-center items-center">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
