import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetail = () => {
    const { detailId, picture, name, detail } = useParams();
    const [service, setService] = useState()
    const history = useHistory()
    const click = () => {
        history.push(`/services`)
    }
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setService(data))
    })

    return (
        <div className="App mt-5">
            <h3>id : {detailId}</h3>
            <img src={service?.picture} alt="" />
            <h3>{service?.name}</h3>
            <p>{detail}</p>
            <button onClick={click}>all services</button>
        </div>
    );
};

export default ServiceDetail;