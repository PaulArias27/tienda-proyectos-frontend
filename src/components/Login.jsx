import { useState } from "react";
import api from "../services/api";

export default function Login({ setUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                username,
                password
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("rol", res.data.rol);

            setUser(res.data.rol);

        } catch (error) {
            alert("Credenciales incorrectas");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
}