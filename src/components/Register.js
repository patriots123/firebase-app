import React, {useState} from 'react';
import Navbar from './Navbar';
//import {Link} from 'react-router-dom';
import firebase from "../firebase";

const Register = (props) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    async function onRegister() {
        try {
            await firebase.register(name, email, password);
            props.history.replace("/dashboard");
        } catch(error) {
            alert(error.message);
        }
    }

    return (
        <main>
            <Navbar {...props}/>
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={e=>e.preventDefault() && false}>
                    <div>
                        <input 
                            placeholder="username" 
                            type="text" 
                            value={name} 
                            aria-label 
                            onChange={e=>setName(e.target.value)} />
                    </div>
                    <div>
                        <input 
                            placeholder="email" 
                            type="text" 
                            value={email} 
                            aria-label 
                            onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input 
                            placeholder="password" 
                            type="text" 
                            value={password} 
                            aria-label 
                            onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit"  className="button is-primary" onClick={onRegister} />
                </form>
            </div>
        </main>
    )
};

export default Register;