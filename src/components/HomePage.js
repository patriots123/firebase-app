import React from 'react';
import Navbar from './Navbar';

const HomePage = (props) => {
    return (
        <main>
            <Navbar {...props}/>
            <div className="container">
                <h2>Home Page</h2>
                <p>lorem ipsum</p>
            </div>
        </main>
    )
};

export default HomePage;