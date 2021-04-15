import { faVestPatches } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Admin from "./Admin";
const Admins = () => {
    const [admins, setAdmins] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/admins')
        .then(res => res.json())
        .then(data => setAdmins(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Admins</h5>
                <div className="row">
                    {
                     admins.map(admin =><Admin key={admin._id} admin={admin} />)
                    }
                    
                </div>
            </div>
        </section>
    );
};

export default Admins;