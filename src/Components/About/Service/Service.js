import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price, duration } = service;
    return (
        <div className='one-service-container p-3'>
            <img className='w-50' src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>Package Type: {duration}</p>
            <p className='mb-5'><small>{description}</small></p>
            <Link to='/checkout'>
                <button className='service-button btn btn-primary d-block mx-auto'>{name}</button>
            </Link>
        </div>
    );
};

export default Service;