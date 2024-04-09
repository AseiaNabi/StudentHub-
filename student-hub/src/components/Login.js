import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="header2">
                <div className="login-buttons">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                     <Link to="/Register">
                    <button>Register</button>
                    </Link>
                </div>
            </div>
            <div className="login-container">
                <div className="left-section">
                    <h1 style={{ color: '#F99417' }}>International Student Hub</h1>
                </div>
                <div className="right-section">
                    <div className="login-box">
                        <h2 style={{ fontSize: '36px',color: '#F99417' }}>Login</h2>
                        <form>
                            <label htmlFor="username">Username:</label><br />
                            <input type="text" id="username" name="username" /><br />
                            <label htmlFor="password">Password:</label><br />
                            <input type="password" id="password" name="password" /><br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
