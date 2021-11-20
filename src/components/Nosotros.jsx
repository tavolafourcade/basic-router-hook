import React, {useEffect, useState} from 'react'
import {
    Link
  } from "react-router-dom";

const Nosotros = () => {
    useEffect(() => {
        obtenerDatos()
        
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const users = await data.json()
        setEquipo(users.civilizations)
    }
    const [equipo, setEquipo] = useState([])

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(civilization => (
                        <li key={civilization.id}>
                            {/* Creando una URL dinamica */}
                            <Link to={`/nosotros/${civilization.id}`}>
                            {civilization.name} - {civilization.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
