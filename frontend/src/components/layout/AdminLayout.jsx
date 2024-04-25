import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { MdDashboard, MdGroups2, MdLogout, MdMessage } from "react-icons/md";
import { Link, Navigate, useLocation } from "react-router-dom";

const adminTabs = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    path: "/admin/dashboard",
  },
  {
    name: "Users",
    icon: <FaUserShield />,
    path: "/admin/users-management",
  },
  {
    name: "Chats",
    icon: <MdGroups2 />,
    path: "/admin/chats-management",
  },
  {
    name: "Messages",
    icon: <MdMessage />,
    path: "/admin/messages-management",
  },
];

const SideBar = () => {
  const location = useLocation();
  //   console.log(location.pathname);

  const logoutHandler = () => console.log("logout");
  return (
    <div className="py-3 flex-col space-y-8">
      <h1 className="text-2xl text-gray-400 font-bold flex justify-center">
        Chat App
      </h1>
      <div className="flex-col space-y-6 px-4 justify-center max-w-[65%] m-auto">
        {adminTabs.map((tab, index) => (
          <Link
            to={tab.path}
            className={`flex py-3 p-10 relative  rounded-full items-center space-x-4 ${
              location.pathname === tab.path ? "bg-black text-white" : ""
            } hover:text-white hover:bg-black`}
            key={index}
          >
            <p className="absolute left-5">{tab.icon}</p>
            <p>{tab.name}</p>
          </Link>
        ))}
        <Link
          onClick={logoutHandler}
          className={`flex py-3 p-10 relative  rounded-full items-center space-x-4  hover:text-white hover:bg-black`}
        >
          <MdLogout className=" absolute left-5" />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

const isAdmin = true;

const AdminLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  if (!isAdmin) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <div className=" grid grid-cols-3 min-h-[100vh] relative ">
      <IoIosMenu
        className="absolute top-3 right-3 text-2xl md:hidden block"
        onClick={handleMobile}
      />
      <div className="md:block hidden">
        <SideBar />
      </div>
      <div className=" md:col-span-2 col-span-3 bg-slate-200">{children}</div>
      {isMobile && (
        <Drawer isOpen={isMobile} setIsOpen={setIsMobile}>
          <SideBar />
        </Drawer>
      )}
    </div>
  );
};

function Drawer({ isOpen, setIsOpen, children }) {
  const [isScreenWide, setIsScreenWide] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is greater than "sm" breakpoint
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      const isWide = screenWidth > 766; // Assuming "sm" breakpoint is 640px
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
        {children}
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

export default AdminLayout;
