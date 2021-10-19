import React from 'react';
import './services.css'
const Services = () => {
    return (
        <div>
            <h2 className="text-center mt-5">OUR OUTSTANDING SERVICES</h2>
            <div className="service-container p-5">
                <div className="service">

                    <div><i className="fas fa-stethoscope fa-3x "></i></div>
                    <div className="articel"><h5 >Outdoor Checkup</h5>
                        <p>Conveniently provide access to worldwide core
                            competencies after efficient manufactured products.
                            Interactively generate backward-compatible information for state of the art applications.
                        </p>
                    </div>
                </div>
                <div className="service">

                    <div><i class="fas fa-procedures fa-3x"></i></div>
                    <div> <h5>Operation Theater Service</h5>
                        <p> The department of Surgical Oncology has three state of art major operation theaters for performing various kinds of  major cancer surgeries . One of the  existing operation</p>
                    </div>
                </div>
                <div className="service">

                    <div><i class="fas fa-ambulance fa-3x"></i></div>
                    <div> <h5>Emergency Care</h5>
                        <p>Emergency Care Emergency care should be sought when a patient with cellulitis develops high fever or chills, nausea, vomiting, enlarging, or hardening of the reddened area, increased pain,</p>
                    </div>
                </div>
                <div className="service">

                    <div><i class="fas fa-vial fa-3x"></i></div>
                    <div> <h5>Blood Test</h5>
                        <p>A blood test is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle, or via fingerprick. </p>
                    </div>
                </div>
                <div className="service">

                    <div><i class="fas fa-phone fa-3x"></i></div>
                    <div> <h5>Pharmacy Support</h5>
                        <p>Pharmacist Support is an independent, trusted charity, providing a wide variety of support services to pharmacists and their families, former pharmacists and pharmacy students. </p>
                    </div>
                </div>
                <div className="service">

                    <div><i class="fas fa-user fa-3x"></i></div>
                    <div> <h5>Special Services</h5>
                        <p>The mission of the Division of Special Health Services (SHS) is to promote a system of care and services that improves the health and well-being of individuals with special health care needs and their families.

                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;