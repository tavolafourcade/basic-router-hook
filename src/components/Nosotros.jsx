import React, {useEffect, useState} from 'react'

const Nosotros = () => {
    useEffect(() => {
        obtenerDatos()
        
    },[])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        setEquipo(users)
    }
    const [equipo, setEquipo] = useState([])

    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
