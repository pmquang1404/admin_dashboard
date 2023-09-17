import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params: GridValueGetterParams) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
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
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

export const cartRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, price: 350000000 },
    { id: 2, fullname: 'Minh Quang', phone: '1131234567', address: 'Ho Chi Minh', price: 4000000 }
];