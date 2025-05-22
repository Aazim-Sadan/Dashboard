import React from 'react'
import { DataTable } from './Data-Table'
import { columns } from './Columns'
import { TableData } from '../sampleData/sampleData'

const Dashboard = () => {
    return (
        <div className='max-w-7xl mx-auto bg-white  p-6 rounded-md shadow-md'>
            <h1 className="font-bold text-4xl">Articles</h1>
            <div className='flex justify-center gap-2 text-sm my-4'>
                <p className='border px-2 rounded-md hover:cursor-pointer bg-blue-500 text-white'>Generated Articles</p>
                <p className='border px-2 rounded-md hover:cursor-pointer'>Published Articles</p>
                <p className='border px-2 rounded-md hover:cursor-pointer'>Scheduled Articles</p>
                <p className='border px-2 rounded-md hover:cursor-pointer'>Archived Articles</p>
            </div>
            <div>
                <input 
                className='border rounded-md my-6'
                type="text" 
                />
            </div>
            <DataTable columns={columns} data={TableData}/>
        </div>
    )
}

export default Dashboard