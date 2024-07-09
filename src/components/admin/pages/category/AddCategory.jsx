import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddCategory() {
    const [formData, setFormData] = useState({ categoryName: "", categoryStatus: true })
    const [checked, setChecked] = useState("");
    const navigator = useNavigate();
    const onChangeRadio = (e) => {
        console.log(e.target.value);
        setFormData({ ...formData, categoryStatus: e.target.value })
    }
    const handleAdd = () => {
        console.log(formData);
        axios.post("http://localhost:8080/api/v1/categories", formData).then((respone) => {
            console.log(respone);
            navigator("/admin/category")
        })
            .catch(err => console.log(err));
    }
    return (
        <form>
            <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input type="text" className="form-control" value={formData.categoryName} onChange={(e) => setFormData({ categoryName: e.target.value, categoryStatus: formData.categoryStatus })} />

            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"

                        id=""
                        value={false}
                        checked={!formData.categoryStatus}
                        onChange={() => setFormData({ ...formData, categoryStatus: false })}
                    />
                    <label className="form-check-label">Ẩn</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"

                        id=""
                        value={true}
                        checked={formData.categoryStatus}
                        onChange={() => setFormData({ ...formData, categoryStatus: true })}
                    />
                    <label className="form-check-label" >Hiện</label>
                </div>

            </div>

            <button type="button" className="btn btn-primary" onClick={handleAdd}>Thêm mới</button>
        </form>
    )
}

export default AddCategory