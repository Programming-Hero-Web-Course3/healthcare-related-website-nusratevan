import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const OurService = (props) => {
    const { _id, name, picture, detail } = props.service
    const history = useHistory()
    const handleClick = () => {
        history.push(`/detail/${_id}`)
    }

    return (
        <div>
            <div class="col">
                <div class="card mb-5">
                    <img src={picture} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{detail}</p>
                        <Link to={`/detail/${_id}`}>
                            <Button onClick={handleClick}>MORE INFO</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;