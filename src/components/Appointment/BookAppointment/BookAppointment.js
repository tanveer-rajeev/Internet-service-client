import React, {useEffect, useState} from 'react';
import BookingCard from './BookingCard';

const BookAppointment = ({date}) => {
    const [services,setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/getServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    services.map(service => <BookingCard service={service} date={date} key={service._id}/>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;