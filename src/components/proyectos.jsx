import { useEffect, useState } from "react";
import api from "../services/api";

export default function Proyectos() {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {
        cargar();
    }, []);

    const cargar = async () => {
        const res = await api.get("/proyectos");
        setProyectos(res.data);
    };

    return (
        <div>
            <h2>Proyectos</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>

                <tbody>
                    {proyectos.map(p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}