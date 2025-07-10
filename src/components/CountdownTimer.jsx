import React, { useEffect, useState } from 'react'

//Mostrar un contador que disminuye cada segundo y se detiene en cero.

function CountdownTimer() {
    // Estado para el número que se mostrará y disminuirá
    const [time, setTime] = useState(10);

    // Estado para controlar si el temporizador está activo o no
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId = null;

        // Solo ejecuta el intervalo si isRunning es true y el tiempo es mayor a 0
        if (isRunning && time > 0) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000); // El intervalo se ejecuta cada 1 segundo
        } else if (time === 0) {
            // Detiene el temporizador si el tiempo llega a 0
            setIsRunning(false)
        }

        // Función de limpieza: se ejecuta cuando el componente se desmonta o antes de que el efecto se vuelva a ejecutar.
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        };
    }, [isRunning, time]) // El efecto se volverá a ejecutar si isRunning o time cambian

    const startTimer = () => {
        setIsRunning(true)
    }
    const resetTimer = () => {
        setTime(10)
    }

    return (
        <div className="bg-amber-400 border-amber-300 sm:row-start-3 sm:row-end-5 
            sm:col-start-1 sm:col-end-3 h-full border-5 flex items-center justify-center">
            
            <p className="mr-4">Time: <b>{time}</b> </p>
            <div className='flex flex-row flex-wrap m-2'>
                <button onClick={resetTimer} className="bg-amber-800 text-white p-2 rounded-md mr-2">
                    Reset
                </button>
                <button onClick={startTimer} className="bg-amber-800 text-white p-2 rounded-md ml-2">
                    RunTime
                </button>
            </div>
        </div>
    )
}

export default CountdownTimer;