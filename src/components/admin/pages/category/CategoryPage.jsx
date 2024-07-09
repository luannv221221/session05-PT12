import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function CategoryPage() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        getCategoryAPI();
    }, []);

    const getCategoryAPI = async () => {
        try {
            const respone = await axios.get("http://localhost:8080/api/v1/categories");
            setCategory(respone.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <Link to="/admin/add-category" className='btn btn-success'>Thêm Mới</Link>
            <div
                className="table-responsive"
            >
                <table
                    className="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((item) => {
                            return (
                                <tr className="" key={item.categoryId}>
                                    <td scope="row">{item.categoryId}</td>
                                    <td>{item.categoryName}</td>
                                    <td>{item.categoryStatus ? "Active" : "inactive"}</td>
                                    <td>

                                        <NavLink to={"/admin/edit-category/" + item.categoryId} className='btn btn-primary'>Sửa</NavLink>
                                        <a href="" className='btn btn-danger'>xóa</a>
                                    </td>
                                </tr>
                            )
                        })}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default CategoryPage