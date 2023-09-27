import { useState, useEffect } from "react"
import { getRamdonFact } from "../services/facts"

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRamdonFact().then((res) => setFact(res))
    }
    useEffect(() => {
        refreshFact()
    }, [])

    return { fact, refreshFact }
}
