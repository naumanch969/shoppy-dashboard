import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../store/reducers/contactSlice";
import { format } from "date-fns";

const Contacts = () => {
  /////////////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const { contacts: fetchedContacts } = useSelector((state) => state.contact);

  /////////////////////////////////////////////////////////////// STATES //////////////////////////////////////////////////////////////
  const [contacts, setContacts] = useState(fetchedContacts || []);

  /////////////////////////////////////////////////////////////// USE EFFECTS /////////////////////////////////////////////////////////
  useEffect(() => {
    dispatch<any>(fetchContacts());
  }, []);
  useEffect(() => {
    setContacts(fetchedContacts);
  }, [fetchedContacts]);

  /////////////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////

  const contactColumns = [
    { field: "id", headerName: "Contact ID", width: "150" },
    { field: "userId", headerName: "User ID", width: "150" },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      width: "200",
      renderCell: (params: any) => (
        <div className="flex justify-start items-center gap-[8px] ">
          {format(new Date(params.row.createdAt), 'MMMM d, yyyy')}
        </div>
      ),
    },
    { field: "subject", headerName: "Subject", width: "250" },
    { field: "message", headerName: "Message", width: "450" },
  ];

return (
  <div className="flex flex-col gap-[1rem] pb-[2rem]">
    <div>
      <h1 className="text-[40px] font-bold ">Contacts</h1>
    </div>

    <DataGrid
      rows={contacts}
      columns={contactColumns}
      initialState={{
        pagination: {
          paginationModel: { page: contacts.length % 10, pageSize: 10 },
        },
      }}
      getRowId={(row: any) => row.id}
      checkboxSelection
      pageSizeOptions={[5, 10]}
      disableSelectionOnClick={true}
    />
  </div>
);
};

export default Contacts;
