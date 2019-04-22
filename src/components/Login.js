import React from 'react';
import Navbar from './Navbar';

const Login = (props) => {
    return (
        <main>
            <Navbar {...props}/>
            <div className="container">
                <h2>Login</h2>
                <p>lorem ipsum</p>
            </div>
        </main>
    )
};

export default Login;