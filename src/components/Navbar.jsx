import { useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser, setView }) {

    const logout = async () => {
        const token = localStorage.getItem("token");

        await fetch("http://localhost:8080/api/auth/logout", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        localStorage.clear();
        setUser(null);
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>

            <button onClick={() => setView("proyectos")}>
                Ver Proyectos
            </button>

            {user === "ADMIN" && (
                <button onClick={() => setView("crear")}>
                    Crear Proyecto
                </button>
            )}

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}
