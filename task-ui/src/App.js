import { useState, useEffect } from "react";
import Login from "./Login";
import TaskPage from "./TaskPage";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  // ✅ Load token from localStorage on app start
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // ✅ Handle Login
  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
      <div className="app-container">
        {token ? (
            <TaskPage token={token} onLogout={handleLogout} />
        ) : (
            <Login onLogin={handleLogin} />
        )}
      </div>
  );
}

export default App;