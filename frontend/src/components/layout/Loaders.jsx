const Loaders = () => {
  return (
    <div>
      <div className="flex justify-between items-center shadow-xl min-h-[40px] animate-pulse">
        <div className="sm:block hidden bg-gray-200 w-20 h-6 rounded-xl"></div>
        <div className="block sm:hidden bg-gray-200 w-6 h-6 rounded-full"></div>
        <div className="flex gap-8 justify-center items-center md:mr-10 sm:mr-4 mr-2 text-xl animate-pulse">
          {/* // Search add groups notification logout */}
          <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
          <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
          <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
          <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
          <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="w-full grid grid-cols-4 gap-4 h-[100vh] animate-pulse">
          <div className="w-full hidden sm:block bg-gray-200 rounded-2xl"></div>
          <div className="w-full md:col-span-2 sm:col-span-3 col-span-4  gap-2">
            <div className="flex-col justify-between gap-2 rounded-xl">
              {Array.from({ length: 10 }).map((_, index) => {
                return (
                  <div key={index} className="w-full bg-gray-200 h-20 mb-2 rounded-xl">
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full hidden md:block bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
export default Loaders;
