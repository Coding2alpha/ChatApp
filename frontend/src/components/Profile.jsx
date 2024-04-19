import { FaRegUser } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiSolidFaceMask } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import moment from 'moment'

const Profile = () => {
  return (
    <div className="flex-col items-center justify-center space-y-4 w-full mt-4">
      <div className="w-full flex justify-center ">
        <FaRegUser className="h-[150px] w-[150px] border-black border-2 rounded-full bg-slate-200" />
      </div>
      <ProfileCard heading={"Bio"} text={"loremdfghjklpoijhgf"} />
      <ProfileCard
        heading={"UserName"}
        text={"omsthakur_08"}
        Icon={<MdOutlineAlternateEmail />}
      />
      <ProfileCard
        heading={"Name"}
        text={"Om Singh Thakur"}
        Icon={<BiSolidFaceMask />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment("2023-11-03T00:00:00.000Z").fromNow()}
        Icon={<FaRegCalendarAlt />}
      />
    </div>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <div className="flex items-center space-x-2 justify-center">
    {Icon && Icon}
    <div>
        <p>{text}</p>
        <p className="flex justify-center text-gray-500 text-sm">{heading}</p>
    </div>
  </div>
);

export default Profile;
