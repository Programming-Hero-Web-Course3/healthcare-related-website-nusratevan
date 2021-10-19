import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row  pt-5">
                    <div className="col-6 col-sm-3 ">
                        <h3 className="footer-text">ABOUT HOPE</h3>
                        <p className="footer-text">HopeHealth provides integrated health services for more than 50,000 patients in areas surrounding Aiken, Clarendon, Florence, Orangeburg, and Williamsburg counties. </p>
                    </div>
                    <div className="col-6 col-sm-3 footer-text">
                        <p>about doctor</p>
                        <p>department</p>
                        <p>doctors</p>
                    </div>
                    <div className="col-6 col-sm-3 footer-text">
                        <p>Health checkup</p>
                        <p>Blood check</p>
                        <p>services</p>
                    </div>
                    <div className="col-6 col-sm-3 footer-text">
                        <i className="fab fa-facebook fa-2x footer-text"></i>
                        <i className=" fab fa-google fa-2x footer-text"></i>
                        <i className=" fab fa-twitter fa-2x footer-text mt-5"></i>
                        <i className=" fab fa-instagram fa-2x footer-text mt-5"></i>

                    </div>
                    <div className="footer-tex text-center mt-5 pt-5">
                        <p className="footer-text">Copyright © General Hospital  </p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Footer;