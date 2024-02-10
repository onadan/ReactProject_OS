import { ReactNode } from 'react'
import React from "react"

import Sidebar from './Sidebar'
import Navbar from '../shared/Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
