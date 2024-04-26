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
  { Header: "Name", accessor: "name", width: "200px" },
  { Header: "Total Members", accessor: "totalMembers", width: "200px" },
  { Header: "Total Messages", accessor: "totalMessages", width: "150px" },
  {
    Header: "Created By",
    accessor: "creator",
    width: "150px",
    Cell: ({ cell: { value } }) => (
      <div>
        <img
          alt={value}
          src={value.avatar}
          style={{ width: "100px", height: "100px" }}
        />
        <p>{value.name}</p>
      </div>
    ),
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: transFormImage(i.avatar, 50),
      }))
    ); // Assuming the ID property is 'id'
  }, []);

  return (
    <AdminLayout>
      <div className="mt-10">
        <p className="w-full flex justify-center text-3xl">All Chats</p>
        <div className="flex justify-center p-5 ">
          <div className="overflow-x-auto overflow-y-auto bg-white h-[400px]">
            <Table columns={columns} data={rows} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;
