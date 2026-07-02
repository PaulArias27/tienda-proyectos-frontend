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

            if (error.response && error.response.status === 403) {
                alert("No autorizado (solo ADMIN)");
            } else {
                alert("Error al crear proyecto");
            }
        }
    };

    return (
        <div>
            <h2>Crear Proyecto (ADMIN)</h2>

            <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
            <input placeholder="Descripción" onChange={(e) => setDescripcion(e.target.value)} />
            <input type="date" onChange={(e) => setFechaInicio(e.target.value)} />

            <button onClick={guardar}>
                Guardar
            </button>
        </div>
    );
}