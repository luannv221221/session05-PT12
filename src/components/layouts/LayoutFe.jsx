import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function LayoutFe() {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    )
}

export default LayoutFe