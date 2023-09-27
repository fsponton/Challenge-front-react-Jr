import React, { useEffect, useState } from 'react'
import './App.css'
import { getImage, getRamdonFact } from './services/facts'

const CAT_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        getRamdonFact().then((res) => setFact(res))
    }, [])


    useEffect(() => {
        if (!fact) return
        getImage(fact).then((res) => setImageUrl(res))
    }, [fact])


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
