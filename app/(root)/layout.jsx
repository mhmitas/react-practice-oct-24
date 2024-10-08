import Navbar from '@/components/shared/Navbar'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='grow'>{children}</div>
        </div>
    )
}

export default Layout