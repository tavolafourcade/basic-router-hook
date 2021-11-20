import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

const User = () => {
    // Implementando el hook useParams: captura el parametro ingresado como :id
    // console.log('useParams',useParams())
    const { id } = useParams()
    const [town, setTown] = useState([])

    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const civilization = await data.json()
            setTown(civilization)
        }
        obtenerDatos()
        
    },[id])

    

    return (
        <div>
            <h3>{town.name}</h3>
            <p>{town.army_type}</p>
        </div>
    )
}

export default User
