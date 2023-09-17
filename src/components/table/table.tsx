'use client'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { cartColumns, cartRows } from '@/databasesource';

export default function DataTable() {
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