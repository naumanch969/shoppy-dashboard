import { DataGrid } from '@mui/x-data-grid';
import { avatar1, avatar2, avatar3, avatar4 } from '../data'
import { Header } from "../components"

const Orders = () => {

  const customers = [
    {
      _id: 1001,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage: avatar2,
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      _id: 1002,

      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage: avatar3,

      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    },
    {
      _id: 1003,

      CustomerName: 'Andrew McDownland',
      CustomerEmail: 'andrew@gmail.com',
      ProjectName: 'Real Homes WP Theme',
      Status: 'Pending',
      CustomerImage: avatar4,
      StatusBg: '#FEC90F',
      Weeks: '19',
      Budget: '$24.5k',
      Location: 'USA',
    },
    {
      _id: 1004,

      CustomerName: 'Christopher Jamil',
      CustomerEmail: 'jamil@gmail.com',
      ProjectName: 'MedicalPro WP Theme',
      Status: 'Completed',
      CustomerImage: avatar1,
      StatusBg: '#8BE78B',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      _id: 1005,

      CustomerName: 'Michael',
      CustomerEmail: 'michael@gmail.com',
      ProjectName: 'Weekly WP Theme',
      Status: 'Cancel',
      CustomerImage: avatar2,
      StatusBg: 'red',
      Weeks: '34',
      Budget: '$16.5k',
      Location: 'USA',
    },
    {
      _id: 1006,
      CustomerName: 'Nirav Joshi',
      CustomerEmail: 'nirav@gmail.com',
      CustomerImage: avatar2,
      ProjectName: 'Hosting Press HTML',
      Status: 'Active',
      StatusBg: '#8BE78B',
      Weeks: '40',
      Budget: '$2.4k',
      Location: 'India',
    },
    {
      _id: 1007,
      CustomerName: 'Sunil Joshi',
      CustomerEmail: 'sunil@gmail.com',
      ProjectName: 'Elite Admin',
      Status: 'Active',
      CustomerImage: avatar3,
      StatusBg: '#8BE78B',
      Weeks: '11',
      Budget: '$3.9k',
      Location: 'India',
    }
  ];


  const customerColumns = [
    { field: '_id', headerName: 'Customer ID' },
    {
      field: 'OrderItems', headerName: 'Product', width: '200', renderCell: (params) => (
        <div className="flex justify-start items-center gap-[8px] " >
          <img src={params.row.CustomerImage} alt="image" className="w-[40px] h-[40px] rounded-full object-cover " />
          <span>{params.row.CustomerName}</span>
        </div>
      )
    },
    { field: 'CustomerEmail', headerName: 'Email', width: '200' },
    { field: 'ProjectName', headerName: 'Project', width: '200' },
     { field: 'Location', headerName: 'Location', width: '150' },
    { field: 'Budget', headerName: 'Budget', width: '150' },
    { field: 'Weeks', headerName: 'Weeks', width: '150' },
    {
      field: 'Status', headerName: 'Status', renderCell: (params) => (
        <span style={{ background: params.row.StatusBg }} className={`px-[8px] py-[4px] rounded-[1rem] `} >{params.row.Status}</span>
      )
    },
  ]


  return (
    <div className="flex flex-col gap-[1rem] pb-[2rem]" >

      <div>
        <h1 className='text-[40px] font-bold ' >Customers</h1>
      </div>

      <DataGrid
        rows={customers}
        columns={customerColumns}
        initialState={{
          pagination: { paginationModel: { page: customers.length % 10, pageSize: 10 }, },
        }}
        getRowId={row => row._id}
        checkboxSelection
        pageSizeOptions={[5, 10]}
        disableSelectionOnClick={true}
      />
    </div>
  )
}

export default Orders
