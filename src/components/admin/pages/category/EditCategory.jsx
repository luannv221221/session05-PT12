import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditCategory() {
    const [formData, setFormData] = useState({ categoryName: "", categoryStatus: "" });
    const { id } = useParams();

    useEffect(() => {
        getCategoryFormAPI();
    }, []);

    const getCategoryFormAPI = async () => {
        const respone = await axios.get(`http://localhost:8080/api/v1/categories/${id}`);
        console.log("API", respone.data);
        setFormData(respone.data);

    }

    const [checked, setChecked] = useState("");
    const navigator = useNavigate();
    const onChangeRadio = (e) => {
        console.log(e.target.value);
        setFormData({ ...formData, categoryStatus: e.target.value })
    }
    const handleUpdate = () => {
        console.log(formData);
        axios.put(`http://localhost:8080/api/v1/categories/${id}`, formData).then((respone) => {
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

            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
        </form>
    )
}

export default EditCategory