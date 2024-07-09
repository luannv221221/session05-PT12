import React from 'react'
import { NavLink } from 'react-router-dom'

function Siderbar() {
    return (
        <>

            <div className="list-group vh-100 bg-dark">
                <NavLink to={'category'} className="list-group-item list-group-item-action">Quản lý danh mục</NavLink>
                <a href="#" className="list-group-item list-group-item-action"
                >Quản lý sản phẩm</a>
                <a href="#" className="list-group-item list-group-item-action"
                >Quản lý người dùng</a>
                <a href="#" className="list-group-item list-group-item-action"
                >Quản lý giỏ hàng</a>
            </div>

        </>
    )
}

export default Siderbar