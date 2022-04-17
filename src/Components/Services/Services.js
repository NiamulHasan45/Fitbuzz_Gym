import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../About/Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h1>This is all services</h1>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                >
                </Service>)
            }
        </div>
    );
};

export default Services;