import React, { useEffect, useState } from 'react'
import './App.css'
import { getRamdonFact } from './services/facts'


const CAT_IMAGE_URL = 'https://cataas.com'

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        getRamdonFact().then((res) => setFact(res))
        // getRamdonFact().then(setFact)
    }, [])


    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ').splice(0, 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=black&json=true`)
            .then(res => res.json())
            .then(data => {
                const { url } = data
                setImageUrl(url)
            })
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
