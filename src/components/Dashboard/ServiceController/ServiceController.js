import React, {useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";

const ServiceController = () => {

    const [info, setInfo] = useState({});

    const handleBlur = (event) => {
        const preInfo = {...info};
        preInfo[event.target.name] = event.target.value;
        setInfo(preInfo);
    }
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('bandwidth', info.bandwidth);
        formData.append('service_hour', info.hour);
        formData.append('ip_service', info.ip);
        formData.append('monthly_charge', info.price);

        fetch('http://localhost:5000/addService', {
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
            <div className="col-md-10 p-4 pr-5" style={{position: "absolute", right: 0, backgroundColor: "#F4FDFB"}}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Bandwidth</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="bandwidth"
                               placeholder="bandwidth speed"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Service hour</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="hour"
                               placeholder="service hour"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">IP service</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="ip"
                               placeholder="ip service"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">monthly charge</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="price"
                               placeholder="monthly charge"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add service</button>
                </form>
            </div>
        </section>
    );
};

export default ServiceController;