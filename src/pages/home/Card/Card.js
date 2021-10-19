import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="https://researchresearch-news-wordpress-media-live.s3.eu-west-1.amazonaws.com/2020/04/lab_testtube_flask.jpg" alt="" />
                <div className="card-body">
                    <h3 style={{ textAlign: "center" }}>Lab Test</h3>
                    <p>A medical test is a medical procedure performed to detect, diagnose, or monitor diseases, disease processes, susceptibility, or to determine a course of treatment</p>
                    <button className="btn btn-info">MORE INFO</button>
                </div>
            </div>
            <div className="card">
                <img src="https://www.pasadenahealthcenter.com/site/wp-content/uploads/2018/02/Dentist-Check-Up.jpg" alt="" />
                <div className="card-body">
                    <h3 style={{ textAlign: "center" }}>Dental Care</h3>
                    <p>This interactive course will provide dental practitioners with strategies to effectively educate patients about oral hygiene during the COVID-19 pandemic.</p>
                    <button className="btn btn-info">MORE INFO</button>
                </div>
            </div>
            <div className="card">
                <img src="https://www.nurseszone.in/CMS/banner/28_Dec_2017_154509647_Lifeline_Cardiac_Monitoring.jpg" alt="" />
                <div className="card-body">
                    <h3 style={{ textAlign: "center" }}>Cardiac Monitoring</h3>
                    <p>Cardiac monitoring generally refers to continuous or intermittent monitoring of heart activity, generally by electrocardiography, with assessment of .</p>
                    <button className="btn btn-info">MORE INFO</button>
                </div>
            </div>

        </div>
    );
};

export default Card;