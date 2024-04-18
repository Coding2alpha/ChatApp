import Title from "../shared/Title.jsx";
import Header from "./Header.jsx";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-4 gap-4 h-[100vh]">
          <div className="bg-blue-300 hidden sm:block">First</div>
          <div className="bg-slate-300 md:col-span-2 sm:col-span-3 col-span-4">
            <WrappedComponent {...props} />
          </div>
          <div className="bg-red-300 hidden md:block">Last</div>
        </div>
      </>
    );
  };
};
export default AppLayout;
