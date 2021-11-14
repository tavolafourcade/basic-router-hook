import React, {useEffect, useState} from 'react'

const Nosotros = () => {
    useEffect(() => {
        console.log('USEEFFECT')
        setEquipo(datos)
    },[])

    const datos = [
        {
            id: 1,
            nombre: 'React',
        },
        {
            id: 2,
            nombre: 'Vuejs',
        },
        {
            id: 3,
            nombre: 'Angular',
        }
    ]

    const [equipo, setEquipo] = useState(null)
    return (
        <div>
            <h1>Nosotros</h1>
        </div>
    )
}

export default Nosotros
