'use client'
import { useEffect, useState } from 'react';
import { getFirebaseData } from '../../utils/firebase'

import { DataGrid } from '@mui/x-data-grid';
import { cartColumns } from '@/databasesource';
import { cartRows } from '@/databasesource'
import './table.scss'

export default function DataTable() {
    const [cartRows, setCartRows] = useState([]); // Sử dụng trạng thái để lưu dữ liệu
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const path = 'cart'; // Replace with the desired path
                const result = await getFirebaseData(path);
                if (typeof result === 'object' && !Array.isArray(result)) {
                    // Biến đổi đối tượng thành mảng các giá trị
                    const dataArray = Object.values(result);

                    // Transform data if needed
                    const transformedData: any = dataArray.map((item: any, index) => ({
                        id: index + 1,
                        fullname: item.name,
                        phone: item.numberPhone,
                        address: item.address,
                        price: item.price,
                        products: 'iphone',
                        status: 'pending',
                    }));

                    setCartRows(transformedData); // Cập nhật trạng thái với dữ liệu đã được biến đổi
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        console.log(cartRows)
        fetchData();
    }, []);
    return (
        <div className='table'>
            <DataGrid

                rows={cartRows}
                columns={cartColumns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}