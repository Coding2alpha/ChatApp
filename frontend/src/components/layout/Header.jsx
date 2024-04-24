import { Suspense, lazy, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const SearchDialog = lazy(() => import("../SearchDialog"));
const NotificationDialog = lazy(() => import("../NotificationDialog"));
const NewGroup = lazy(() => import("../NewGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNotification, SetIsNotification] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    SetIsNotification((prev) => !prev);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center shadow-xl bg-gradient-to-r from-cyan-300 to-blue-300 min-h-[40px]`}
      >
        <div className="sm:block hidden">Chat App</div>
        <div className="block sm:hidden">
          <IoIosMenu />
        </div>
        <div className="flex gap-8 justify-center items-center md:mr-10 sm:mr-4 mr-2 text-xl ">
          {/* // Search add groups notification logout */}
          <div>
            <GoSearch onClick={openSearch} />
          </div>
          <div>
            <IoIosAdd onClick={openNewGroup} />
          </div>
          <div>
            <FaUserGroup onClick={() => navigate("/groups")} />
          </div>
          <div>
            <MdOutlineNotificationsActive onClick={openNotification} />
          </div>
          <div className="">
            <IoLogOutOutline onClick={handleLogout} />
          </div>
        </div>
      </div>

      {isSearch && (
        <div>
          <Suspense
            fallback={
              <div className="bg-gray-300 h-6 rounded-full animate-pulse w-1/2 mx-2"></div>
            }
          >
            <SearchDialog closeHandler={openSearch} isOpen={isSearch} />
          </Suspense>
        </div>
      )}
      {isNotification && (
        <div>
          <Suspense
            fallback={
              <div className="bg-gray-300 h-6 rounded-full animate-pulse w-1/2 mx-2"></div>
            }
          >
            <NotificationDialog
              closeHandler={openNotification}
              isOpen={isNotification}
            />
          </Suspense>
        </div>
      )}
      {isNewGroup && (
        <div>
          <Suspense
            fallback={
              <div className="bg-gray-300 h-6 rounded-full animate-pulse w-1/2 mx-2"></div>
            }
          >
            <NewGroup closeHandler={openNewGroup} isOpen={isNewGroup} />
          </Suspense>
        </div>
      )}
    </div>
  );
};
export default Header;
