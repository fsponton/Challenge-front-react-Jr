import React, { useEffect, useState } from 'react'
import './App.css'
import { getRamdonFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'

const CAT_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const { imageUrl } = useCatImage({ fact }) //Custom hooks

    useEffect(() => {
        getRamdonFact().then((res) => setFact(res))
    }, [])



    const handlerClick = async () => {
        const newFact = await getRamdonFact()
        setFact(newFact)
    }

    return (
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handlerClick}> Get new Fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={CAT_IMAGE_URL + imageUrl} alt={`imagen extraida usando las 3 primeras palabras del fact  `} />}
            </section>
        </main>
    )
}
