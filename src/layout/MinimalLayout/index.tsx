import  { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MinimalLayout: FC = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default MinimalLayout