// src/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [CorreoElectronico, setCorreoElectronico] = useState('');
    const [Clave, setClave] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-desarrollo.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ CorreoElectronico, Clave }),
            });

            if (response.ok) {
                // Handle successful login
                console.log('Login successful');
            } else {
                // Handle login error
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">CorreoElectronico</label>
                    <input
                        type="text"
                        className="form-control"
                        value={CorreoElectronico}
                        onChange={(e) => setCorreoElectronico(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Clave</label>
                    <input
                        type="Clave"
                        className="form-control"
                        value={Clave}
                        onChange={(e) => setClave(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
