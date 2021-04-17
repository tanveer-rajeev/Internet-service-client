import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddAdmin = () => {
    const [adminInfo, setAdminInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...adminInfo };
        newInfo[e.target.name] = e.target.value;
        setAdminInfo(newInfo);
    }

    const handleAdminFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        console.log(adminInfo);
        e.preventDefault();
        formData.append('file', file);
        formData.append('name', adminInfo.name);
        formData.append('email', adminInfo.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleAdminFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;