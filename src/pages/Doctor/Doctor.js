import React from 'react';
const Doctor = (props) => {
    const { img, name, detail } = props.doctor

    return (
        <div>
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img src={img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{detail}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;