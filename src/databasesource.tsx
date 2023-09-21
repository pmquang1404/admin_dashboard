import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getStorage, ref } from 'firebase/storage';
import { getFirebaseData } from './utils/firebase'
import { useEffect, useState } from 'react';
export const cartColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'fullname', headerName: 'Full Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
        field: 'phone',
        headerName: 'Phone',
        // type: 'number',
        width: 130,
    },
    {
        field: 'price',
        headerName: 'Price',
        // type: 'number',
        align: 'left',
        width: 130,
    },
    {
        field: 'products',
        headerName: 'Products',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 320,
        // align: 'right',
        // valueGetter: (params: GridValueGetterParams) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];




export const cartRows: any = async () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const path = 'cart'; // Replace with the desired path
        getFirebaseData(path)
            .then((data) => {
                console.log('Data from Firebase:', data);
                setData(data)
                // Handle your data here...
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const dataItems = data.map((item: any, key) => (
        {
            id: item.id,
            fullname: item.name,
            phone: item.phone,
            address: item.address,
            price: item.price,
            products: 'iphone',
            status: 'pending'
        }
    ))
    console.log(dataItems)
    return dataItems
} 