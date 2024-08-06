import { ReactNode } from 'react'
import React from "react"

import Sidebar from './Sidebar'


const Layout :React.FC<{children: ReactNode }> = ({children}) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidebar />
                <div className='grow'>
                  
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
