import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('Doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    })
    return (
        <div>
            <div className="banner-doctors"></div>
            <h2 className="text-center mt-5 mb-5">Our Doctors </h2>
            <div className="card mb-3 w-75 mx-auto " >
                {
                    doctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;