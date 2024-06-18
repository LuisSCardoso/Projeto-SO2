import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cookies from 'js-cookie';


const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [backendIp, setBackendIp] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const ip = Cookies.get('backendIp') || '';
        setBackendIp(ip);
      }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const request = fetch(`http://${backendIp || 'localhost'}:4000/user/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: email,
              password: password
            })
          })
          const response = await request
          if(response.status == 200){
            localStorage.setItem('authenticated', 'true')
            navigate('/home')
          }
          if(response.status == 401) window.alert("User or password invalid")  

        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            <Link to="/ipConfig">Configurar IP do Back-end</Link>
            </form>
        </div>
    );
};

export default Login;
