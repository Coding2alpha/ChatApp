import AppLayout from "../components/layout/AppLayout";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-[100%] p-2">
      <p className="mb-20 text-2xl text-gray-500 font-bold">
        Select A Friend To Chat
      </p>
    </div>
  );
};
export default AppLayout()(Home);
