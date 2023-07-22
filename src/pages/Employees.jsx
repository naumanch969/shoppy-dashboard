import { DataGrid } from "@mui/x-data-grid";
import { avatar1, avatar2, avatar3, avatar4 } from '../data'


const Employees = () => {

    const employees = [
        {
            _id: 415561,
            Name: 'Nancy Davolio',
            Title: 'Sales Representative',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar1,
        },
        {
            _id: 125562,
            Name: 'Nasimiyu Danai',
            Title: 'Marketing Head',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar2,
        },
        {
            _id: 915563,
            Name: 'Iulia Albu',
            Title: 'HR',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar4,
        },
        {
            _id: 202564,
            Name: 'Siegbert Gottfried',
            Title: 'Marketing Head',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar2,
        },
        {
            _id: 928565,
            Name: 'Omar Darobe',
            Title: 'HR',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar1,
        },
        {
            _id: 253564,
            Name: 'Penjani Inyene',
            Title: 'Marketing Head',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar1,
        },
        {
            _id: 392565,
            Name: 'Miron Vitold',
            Title: 'HR',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar4,
        },
        {
            _id: 294561,
            Name: 'Nancy Davolio',
            Title: 'Sales Representative',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar2,

        },
        {
            _id: 325262,
            Name: 'Nasimiyu Danai',
            Title: 'Marketing Head',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar3,
        },
        {
            _id: 352562,
            Name: 'Nasimiyu Danai',
            Title: 'Marketing Head',
            HireDate: '01/02/2021',
            Country: 'USA',
            ReportsTo: 'Carson',
            EmployeeImage: avatar1,
        },
    ];

    const employeeColumns = [
        { field: '_id', headerName: 'Employee ID',width:'150' },
        {
            field: 'Employee', headerName: 'Name', width: '200', renderCell: (params) => (
                <div className="flex justify-start items-center gap-[8px] " >
                    <img src={params.row.EmployeeImage} alt="image" className="w-[40px] h-[40px] rounded-full object-cover " />
                    <span>{params.row.Name}</span>
                </div>
            )
        },
        { field: 'Title', headerName: 'Title', width: '200' },
        { field: 'HireDate', headerName: 'Hiring Date', width: '150' },
        { field: 'Country', headerName: 'Country', width: '150' },
        { field: 'ReportsTo', headerName: 'Reports To', width: '150' },
    ]

    return (
        <div className="flex flex-col gap-[1rem] pb-[2rem]" >

            <div>
                <h1 className='text-[40px] font-bold ' >Employees</h1>
            </div>

            <DataGrid
                rows={employees}
                columns={employeeColumns}
                initialState={{
                    pagination: { paginationModel: { page: employees.length % 10, pageSize: 10 }, },
                }}
                getRowId={row => row._id}
                checkboxSelection
                pageSizeOptions={[5, 10]}
                disableSelectionOnClick={true}
            />
        </div>
    )
}

export default Employees