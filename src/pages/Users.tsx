import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { avatar1, avatar2, avatar3, avatar4 } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/reducers/usersSlice";
import { format } from 'date-fns'

const Employees = () => {
  /////////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const { users: fetchedUsers } = useSelector((state) => state.user);

  /////////////////////////////////////////////////////////////// STATES //////////////////////////////////////////////////////////////
  const [users, setUsers] = useState(fetchedUsers || []);
  console.log("users", users);

  /////////////////////////////////////////////////////////////// USE EFFECTS /////////////////////////////////////////////////////////
  useEffect(() => {
    dispatch<any>(fetchUsers());
  }, []);
  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  /////////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////
  const usersColumns = [
    { field: "id", headerName: "User ID", width: "150" },
    {
      field: "name", headerName: "Name", width: "150", renderCell: (params) => (
        <>
          {params.row.name || "N/A"}
        </>
      ),
    },
    { field: "email", headerName: "Email", width: "250" },
    {
      field: "isSubscribed", headerName: "Is Subscribed", width: "100", renderCell: (params) => (
        <>
          {params.row.isSubscribed ? "Yes" : "No"}
        </>
      ),
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: "200",
      renderCell: (params) => (
        <div className="flex justify-start items-center gap-[8px] ">
          {format(new Date(params.row.createdAt), 'MMMM d, yyyy')}
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-[1rem] pb-[2rem]">
      <div>
        <h1 className="text-[40px] font-bold ">Users</h1>
      </div>

      <DataGrid
        rows={users}
        columns={usersColumns}
        initialState={{
          pagination: {
            paginationModel: { page: users.length % 10, pageSize: 10 },
          },
        }}
        getRowId={(row) => row.id}
        checkboxSelection
        pageSizeOptions={[5, 10]}
        disableSelectionOnClick={true}
      />
    </div>
  );
};

export default Employees;
