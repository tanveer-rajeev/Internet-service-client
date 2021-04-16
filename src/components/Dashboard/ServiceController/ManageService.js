import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar/Sidebar";
import DisplayServices from "./DisplayServices";


const ManageService = () => {
    const [services,setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (

        <div className="container-fluid row" >
            <Sidebar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Booking</h5>
                <DisplayServices service={services}/>
            </div>
        </div>

    );
};

export default ManageService;