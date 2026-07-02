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
    <div className="card">
        <h2>Iniciar Sesión</h2>

        <input
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
        />

        <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary" onClick={handleLogin}>
            Ingresar
        </button>
    </div>
);
}