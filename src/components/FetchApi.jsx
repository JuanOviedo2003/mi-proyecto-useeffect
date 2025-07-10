import React, { useEffect, useState } from 'react'

// Cargar una lista de ítems (por ejemplo, posts de un blog) desde una API RESTful al montar el componente.

function FetchApi() {

    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // La función que contiene la lógica async debe ser llamada.
        const fetchDatos = async () => {
            // El try...catch...finally debe ir DENTRO de la función async.
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character/484')

                if (!response.ok) {
                    throw new Error('fail response')
                }

                // Corregido: 'response' en lugar de 'respuesta'.
                const dataJson = await response.json();

                setCharacter(dataJson)

            } catch (error) {
                // guardamos el error
                setError(error)
            } finally {
                // Exito o error, dejamos de cargar
                setLoading(false)
            }
        }

        // Se debe invocar la función para que se ejecute.
        fetchDatos();

    }, [])

    // --- Lógica de renderizado condicional ---

    if (loading) {
        return <div className="p-4 text-center">Buscando personaje... ⏳</div>;
    }

    if (error) {
        // Es mejor renderizar el mensaje del error para evitar problemas.
        return <div className="p-4 text-center text-red-700">Error: {error.message} ❌</div>;
    }

    return (
        <div className="bg-red-400 border-red-300 sm:row-start-1 sm:row-end-3 sm:col-start-1 
            sm:col-end-3 h-full border-5 flex items-center justify-center">
            {/* Es buena práctica agregar el atributo 'alt' a las imágenes. */}
            <img src={character.image} alt={character.name} className='w-32 h-32'></img>
        </div>
    )
}

export default FetchApi