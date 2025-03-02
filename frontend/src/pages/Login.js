import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";
import "../pages/Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // ✅ Use navigate for redirection

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = await loginUser(email, password);
        if (data && data.success) {
            localStorage.setItem("token", data.token); // ✅ Store JWT token
            localStorage.setItem("user", JSON.stringify(data.user)); // ✅ Store user data
            navigate("/dashboard"); // ✅ Redirect to Dashboard
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
