import React, { useEffect, useState } from 'react';
import OurService from '../OurService/OurService';

const ServicesArea = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto">
                {
                    services.map(service => <OurService
                        key={service._id}
                        service={service}
                    ></OurService>)
                }

            </div>
        </div>
    );
};

export default ServicesArea;