import React from 'react';

const Card = (props) => {
    const {img, title, description} = props.data;
    return (
        <div className="col-6">
            <div className="card">
            <img className="card-img-top" src={img} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            
        </div>
    );
};

export default Card;