import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../About/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='text-center'>
            <h1 className='m-5'>This is all my services</h1>
            <div className='service-container mb-0'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;