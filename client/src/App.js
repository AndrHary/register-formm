import React from 'react'
import './app.css'
import { useState } from 'react'
import submitHandler from './submitHandler'
function App() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [user, setUser] = useState({})
    const userData = {
        fullName,
        email,
        phoneNumber,
        password,
        confirmPassword
    }
    return (
        <div className="form-container">
            {!user.email
                ? <form className="form" onSubmit={(e) => submitHandler(e, errors, setErrors, userData, setUser)}>
                    <h1>Sign Up</h1>
                    <div className="fieldset-container">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            name="fullName"
                            placeholder="Full Name" />
                    </div>
                    <div className="fieldset-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            placeholder="Email" />
                    </div>
                    <div className="fieldset-container">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            name="phoneNumber"
                            placeholder="Phone Number" />
                    </div>
                    <div className="fieldset-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="Password" />
                    </div>
                    <div className="fieldset-container">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            name="confirmPassword"
                            placeholder="Confirm Password" />
                    </div>
                    <button>Sign Up</button>
                </form>
                : <h1>Wellcome, {user.fullName}</h1>}
            {errors.messages
                ?
                <div className="error-message">
                    {Object.values(errors.messages).map((x, i) => <p key={i}>{x}</p>)}
                </div>
                :
                null}
        </div>
    )
}

export default App
