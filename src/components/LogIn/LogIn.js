import React from 'react';

const LogIn = () => {
    return (
        <div className="container">
            <h2 className="mt-5">Login</h2>
            <form className="w-75 mx-auto my-5 border shadow p-5 rounded text-start">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check w-25 mx-auto">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <a href="#">Don't have account? Create here...</a><br /><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default LogIn;