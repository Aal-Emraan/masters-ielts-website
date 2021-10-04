import React from 'react';

const Services = () => {
    return (
        <div className="my-5 shadow p-3">
            <h1 className="">Our Services</h1>
            <div className="row">
                <div className="col-4">
                    <div className="card mb-3 shadow">
                        <div className="card-header">Our Courses</div>
                        <div>
                            <img className="img-fluid rounded-circle p-2" src="https://images.indianexpress.com/2020/04/online759.jpg" alt="" />
                        </div>
                        <div className="card-body mt-2">
                            <h5 className="card-title">Awesome Courses</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 shadow">
                        <div className="card-header">Research Ability</div>
                        <div>
                            <img className="img-fluid rounded-circle p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXf8xCRPoauHk5M5nOdAHmaf0uSSd9NEedJWKAn0XFwk5yDRM9nbseujtPYKzBhueJFfU&usqp=CAU" alt="" />
                        </div>
                        <div className="card-body  mt-1">
                            <h5 className="card-title">Online Research</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="card mb-3 shadow">
                        <div className="card-header">Our Teachers</div>
                        <div>
                            <img className="img-fluid rounded-circle p-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2T5yJdaKQOJcUnHpi8HkpnpaNxLCAnFKR9PYqSnEDd_Tdcao5PbopsklRUS-h9OEbRyg&usqp=CAU" alt="" />
                        </div>
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