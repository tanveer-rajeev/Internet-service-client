import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const ServiceDetail = ({ service }) => {

    return (
        <div className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.bandwidth}</p>
            <p className="text-secondary">{service.monthly_price}</p>

        </div>
    );
};

export default ServiceDetail;