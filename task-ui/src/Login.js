import { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!username || !password) {
            alert("Enter username & password");
            return;
        }

        const token = "Basic " + btoa(username + ":" + password);

        // save token
        localStorage.setItem("token", token);

        onLogin(token);
    };

    return (
        <div className="login-container">
            <h2>Login</h2>

            <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="primary" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;