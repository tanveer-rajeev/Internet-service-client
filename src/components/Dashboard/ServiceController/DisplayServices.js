import React from 'react';
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const DisplayServices = ({service}) => {
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteService/${id}`)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (

            <form className="container">
                <table className="table table-borderless ">
                    <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Bandwidth</th>
                        <th className="text-secondary" scope="col">Service Hour</th>
                        <th className="text-secondary" scope="col">Real IP</th>
                        <th className="text-secondary" scope="col">Monthly Charge</th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        service.map(service =>
                            <tr>
                                <td>{service.bandwidth}</td>
                                <td>{service.service_hour}</td>
                                <td>{service.ip_service}</td>
                                <td>{service.monthly_charge}KG</td>

                                <td>
                                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                                </td>
                            </tr>
                        )


                    }
                    </tbody>
                </table>
            </form>

    );
};

export default DisplayServices;