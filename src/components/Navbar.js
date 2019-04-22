import React from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase';


export default function Navbar(props) {
    async function logout(e) {
        e.preventDefault();
        await firebase.logout();
        props.history.push("/");
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1>My App Title</h1>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbaer-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        {!firebase.getCurrentUsername() ? (
                            <div className="buttons">
                                <Link className="button is-primary" to="/register"><strong>Sign Up</strong></Link>
                                <Link className="button is-light" to="/login">Login</Link>
                            </div>
                        ) : (
                            <div className="buttons">
                                <Link className="button is-primary" to="/dashboard">Dashboard</Link>
                                <a className="button is-light" href="/logout" onClick={logout}>Log Out</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
