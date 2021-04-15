import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Review = ({review}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">

            <h4> Name: {review.name}</h4>
            <p>Review: {review.review}</p>
        </div>
    );
};

export default Review;