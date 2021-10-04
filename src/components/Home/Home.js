import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return (
        <div className="row g-3 m-4">
            {
                data.map(dt => <Card data={dt}></Card>)
            }
        </div>
    );
};

export default Home;