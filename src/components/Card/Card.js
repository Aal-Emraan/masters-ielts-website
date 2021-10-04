import React from 'react';

const Card = (props) => {
    const {img, title, description, price} = props.data;
    return (
        <div className="col-3">
            <div className="card shadow">
            <img className="card-img-top" src={img} alt="" />
            <div className='m-1 shadow rounded img-thumbnail'>
            <h3>{title}</h3>
            <p className="text-start mx-1">{description}</p>
            <h4>Price: {price}</h4>
            <button className="btn btn-danger w-75 mx-auto mb-2">Enroll Now</button>
            </div>
            </div>
            
        </div>
    );
};

export default Card;