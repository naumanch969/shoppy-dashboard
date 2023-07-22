import { DataGrid } from '@mui/x-data-grid';
import { product1, product2, product3, product4, product5, product6, product7, } from '../data'
import { Header } from "../components"
import { TableContainer } from "@mui/material";

const Orders = () => {

    const orders = [
        {
            _id: 102438,
            CustomerName: 'Vinet',
            TotalAmount: 32.38,
            OrderItems: 'Fresh Tomato',
            Location: 'USA',
            Status: 'pending',
            StatusBg: '#FB9678',
            ProductImage: product6,
        },
        {
            _id: 345653,
            CustomerName: 'Carson Darrin',
            TotalAmount: 56.34,
            OrderItems: 'Butter Scotch',
            Location: 'Delhi',
            Status: 'complete',
            StatusBg: '#8BE78B',
            ProductImage: product5,
        },
        {
            _id: 390457,
            CustomerName: 'Fran Perez',
            TotalAmount: 93.31,
            OrderItems: 'Candy Gucci',
            Location: 'New York',
            Status: 'active',
            StatusBg: '#03C9D7',
            ProductImage: product7,
        },
        {
            _id: 845954,
            CustomerName: 'Jie Yan',
            TotalAmount: 87.99,
            OrderItems: 'Shoes',
            Location: 'USA',
            Status: 'pending',
            StatusBg: '#FB9678',
            ProductImage: 'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
        },
        {
            _id: 874534,
            CustomerName: 'Danai',
            TotalAmount: 122.99,
            OrderItems: 'Watch',
            Location: 'USA',
            Status: 'canceled',
            StatusBg: '#FF5C8E',
            ProductImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
        },
        {
            _id: 318489,
            CustomerName: 'Miron',
            TotalAmount: 87.99,
            OrderItems: 'Ice Cream',
            Location: 'USA',
            Status: 'active',
            StatusBg: '#03C9D7',
            ProductImage: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
        },
        {
            _id: 245436,
            CustomerName: 'Frank',
            TotalAmount: 84.99,
            OrderItems: 'Pan Cake',
            Location: 'Delhi',
            Status: 'complete',
            StatusBg: '#8BE78B',
            ProductImage: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
        {
            _id: 674534,
            CustomerName: 'Danai',
            TotalAmount: 122.99,
            OrderItems: 'Watch',
            Location: 'USA',
            Status: 'canceled',
            StatusBg: '#FF5C8E',
            ProductImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
        },
        {
            _id: 102328,
            CustomerName: 'Vinet',
            TotalAmount: 32.38,
            OrderItems: 'Fresh Tomato',
            Location: 'USA',
            Status: 'pending',
            StatusBg: '#FB9678',
            ProductImage: product6,
        }]

    const orderColumns = [
        { field: '_id', headerName: 'Order ID' },
        { field: 'CustomerName', headerName: 'Customer', width: '200' },
        { field: 'TotalAmount', headerName: 'Amount' },
        {
            field: 'OrderItems', headerName: 'Product', width: '200', renderCell: (params) => (
                <div className="flex justify-start items-center gap-[8px] " >
                    <img src={params.row.ProductImage} alt="image" className="w-[40px] h-[40px] rounded-full object-cover " />
                    <span>{params.row.OrderItems}</span>
                </div>
            )
        },
        { field: 'Location', headerName: 'Location', width: '150' },
        {
            field: 'Status', headerName: 'Status', renderCell: (params) => (
                <span style={{ background: params.row.StatusBg }} className={`px-[8px] py-[4px] rounded-[1rem] `} >{params.row.Status}</span>
            )
        },
    ]


    return (
        <div className="flex flex-col gap-[1rem] pb-[2rem]" >

            <div>
                <h1 className='text-[40px] font-bold ' >Orders</h1>
            </div>

            <DataGrid
                rows={orders}
                columns={orderColumns}
                initialState={{
                    pagination: { paginationModel: { page: orders.length % 10, pageSize: 10 }, },
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