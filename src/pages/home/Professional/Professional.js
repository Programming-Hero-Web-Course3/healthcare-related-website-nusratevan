import React from 'react';

const Professional = () => {
    return (
        <div>
            <h2 className="text-center">MEET THE PROFESSIONALS</h2>
            <div className="card-container">
                <div className="card">
                    <img src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                    <h4 className="text-center pt-3">Lori Robertson</h4>
                    <p className="text-center">Dentist</p>
                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
                    <h4 className="text-center pt-3">Ovier Newman</h4>
                    <p className="text-center">Cardiologist & Surgeon</p>
                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/2182979/pexels-photo-2182979.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182979.jpg&fm=jpg" alt="" />
                    <h4 className="text-center pt-3">Charlotte</h4>
                    <p className="text-center">Neurologist & Surgeon</p>
                </div>
            </div>
        </div>
    );
};

export default Professional;