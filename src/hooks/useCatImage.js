import { useState, useEffect } from "react"
import { getImage } from "../services/facts"


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return
        getImage(fact).then((res) => setImageUrl(res))
    }, [fact])

    return { imageUrl }
}
