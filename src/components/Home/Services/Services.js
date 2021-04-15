
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Home Internet Service',
        img: fluoride,
        bandwidth: '5mbps',
        monthly_price:1300
    },
    {
        name: 'Corporate Internet Service',
        img: fluoride,
        bandwidth: '15mbps',
        monthly_price:6000
    },
    {
        name: 'Premium Internet Service',
        img: fluoride,
        bandwidth: '35mbps',
        monthly_price:10000
    },
]

const Services = () => {
   


    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;