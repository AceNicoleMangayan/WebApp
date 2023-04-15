import React, { useEffect, useState } from 'react';

const Registration = (props) => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [passwordsmatch, setPasswordsMatch] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    useEffect(() => {
        if (password === confirmpassword){
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false)
        }
      }, [password, confirmpassword]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="auth-form-container">
            <h2>REGISTRATION</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor = "email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} required/>
                <br/>
                <label htmlFor = "email">First Name:</label>
                <input type="text" id="firstname" value={firstname} onChange={handleFirstNameChange} required/>
                <br/>
                <label htmlFor = "email">Last Name:</label>
                <input type="text" id="lastname" value={lastname} onChange={handleLastNameChange} required/>
                <br/>
                <label htmlFor = "email">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required/>
                <br />
                <label htmlFor = "email">Confirm Password:</label>
                <input type="password" id="confirmpassword" value={confirmpassword} onChange={handleConfirmPasswordChange} required/>
                <br />
                {passwordsmatch ? (
                    <p style={{ color: 'green' }}><b>Passwords Match!</b></p>
                ) : (
                    <p style={{ color: 'red' }}><b>Passwords don't match!</b></p>
                )}
                <button type="submit"><b>REGISTER</b></button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('log-in')}>Already have an account? Login here. </button>
        </div>
    )
}

export default Registration;