import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import HomeInfo from '../HomeInfo/HomeInfo';
import Services from '../Services/Services';

const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return (
        <div className="container">
            <div>
                <HomeInfo></HomeInfo>
            </div>
            <div>
                <Services></Services>
            </div>
            <div className="row g-3 my-5">
                <h1 className="text-dark">Our Top Courses</h1>
            {
                data.map(dt => <Card data={dt}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;