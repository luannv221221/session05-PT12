import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Header() {
    return (
        <>
            <nav className="navbar navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://mosoftvn.com/images/logo.png" alt="" width="70" />
                    </a>

                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header