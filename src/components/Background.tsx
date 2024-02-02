import { ReactNode } from "react"

const Background = ({ children }: { children: ReactNode }) => {
    return <div className='bg-white dark:bg-gray-800'>{children}</div>
}

export default Background
