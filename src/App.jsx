import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import CrearProyecto from "./components/CrearProyecto";

function App() {
   const [user, setUser] = useState(localStorage.getItem("rol"));
   const [view, setView] = useState("proyectos");

    if (!user) {
        return <Login setUser={setUser} />;
    }

    return (
        <div>
            <Navbar user={user} setUser={setUser} />
            

            {view === "proyectos" && <Proyectos />}
            {view === "crear" && <CrearProyecto />}
        </div>
    );
}

export default App
