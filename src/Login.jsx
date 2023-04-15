import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="web-title">
        <h1 className="title">GGN1 Payment Management System</h1>
        <div className="auth-form-container">
            <h2>LOGIN</h2>
            <form className="log-in" onSubmit={handleSubmit}>
                <label htmlFor = "email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                <br/>
                <label htmlFor = "email">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                <br />
                <button type="submit"><b>LOGIN</b></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here. </button>
        </div>
    </div>
    );
};

export default Login;