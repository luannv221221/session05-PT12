import React from 'react'
import Header from './Header'
import Siderbar from './Siderbar'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function LayoutBE() {
    return (
        <>
            <Header></Header>
            <div className="d-flex">
                <div className="left" style={{ width: '20%' }}>
                    <Siderbar></Siderbar>
                </div>
                <div style={{ width: '80%' }} className=''>
                    <Container>
                        <Outlet></Outlet>
                    </Container>

                </div>
            </div>

        </>
    )
}

export default LayoutBE