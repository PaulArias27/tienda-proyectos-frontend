import { useState } from "react";
import api from "../services/api";

export default function CrearProyecto() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");

    const guardar = async () => {
        try {
            await api.post("/proyectos", {
                nombre,
                descripcion,
                fechaInicio
            });

            alert("Proyecto creado correctamente");

        } catch (error) {

            if (error.response?.status === 403) {
                alert("⛔ ACCESO DENEGADO: Solo ADMIN puede crear proyectos");
            } 
            else if (error.response?.status === 401) {
                alert("Sesión expirada, vuelva a iniciar sesión");
            } 
            else {
                alert("Error inesperado al crear proyecto");
            }
        }
    };

    return (
    <div className="card">
        <h2>Crear Proyecto</h2>

        <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
        <input placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />
        <input type="date" onChange={(e) => setFechaInicio(e.target.value)} />

        <button className="primary" onClick={guardar}>
            Guardar
        </button>
    </div>
);
}