import  { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const MinimalLayout: FC = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}

export default MinimalLayout