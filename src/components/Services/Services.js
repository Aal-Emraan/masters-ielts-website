import React from 'react';

const Services = () => {
    return (
        <div className="my-5 container">
            <h1 className="text-dark">Our Services</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Service 1</div>
                        <div className="card-body">
                            <h5 className="card-title">Awesome Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Service 2</div>
                        <div className="card-body">
                            <h5 className="card-title">Online Research</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white bg-dark mb-3">
                        <div className="card-header">Service 3</div>
                        <div className="card-body">
                            <h5 className="card-title">Experienced Teacher</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;