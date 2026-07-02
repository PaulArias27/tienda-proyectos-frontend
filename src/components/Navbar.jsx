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
    <div className="navbar">

        <div>
            <button onClick={() => setView("proyectos")}>
                Proyectos
            </button>

            {user === "ADMIN" && (
                <button onClick={() => setView("crear")}>
                    Crear
                </button>
            )}
        </div>

        <button onClick={logout}>
            Logout
        </button>

    </div>
);
}
