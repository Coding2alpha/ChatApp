import React, { useEffect, useState } from "react";
import Table from "../../components/Table";
import AdminLayout from "../../components/layout/AdminLayout";
import { dashboardData } from "../../components/constants/sampleData";
import { transFormImage } from "../../lib/features";

const columns = [
  { Header: "ID", accessor: "id", width: "200px" },
  {
    Header: "Avatar",
    accessor: "avatar",
    width: "200px",
    Cell: ({ cell: { value } }) => (
      <img
        alt={value}
        src={value}
        style={{ width: "100px", height: "100px" }}
      />
    ),
  },
  { Header: "UserName", accessor: "userName", width: "200px" },
  { Header: "Friends", accessor: "friends", width: "150px" },
  { Header: "Groups", accessor: "groups", width: "150px" },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.users.map((i) => ({
        ...i,
        id: i.id,
        avatar: transFormImage(i.avatar, 50),
      }))
    ); // Assuming the ID property is 'id'
  }, []);

  return (
    <AdminLayout>
      <div className="mt-10">
        <p className="w-full flex justify-center text-3xl">All Users</p>
        <div className="flex justify-center p-5 ">
          <div className="overflow-x-auto overflow-y-auto bg-white h-[400px]">
            <Table columns={columns} data={rows} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ChatManagement;
