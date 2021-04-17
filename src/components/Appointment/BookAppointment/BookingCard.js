import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm';

const BookingCard = ({ service}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{service.bandwidth}</h5>
                    <h6>{service.service_hour}</h6>
                    <h6>{service.ip_service}</h6>
                    <h6>{service.monthly_charge}</h6>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={service.bandwidth} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;