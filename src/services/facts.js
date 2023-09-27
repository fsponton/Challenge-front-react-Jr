const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'


// ASYNC - AWAIT

export const getRamdonFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}

export const getImage = async (fact) => {
    const threeFirstWords = fact.split(' ').splice(0, 3).join(' ')
    const res = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=black&json=true`)
    const data = await res.json()
    const { url } = data
    return url
}


// FETCH

// export const getRamdonFact = () => {
//     return fetch(CAT_ENDPOINT_RAMDOM_FACT)  //promise
//         .then(res => res.json())  //promise
//         .then(data => {
//             const { fact } = data
//             return fact
//         })
// }


// export const getImage = (fact) => {
//     const threeFirstWords = fact.split(' ').splice(0, 3).join(' ')
//     return fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=black&json=true`)
//         .then(res => res.json())
//         .then(data => {
//             const { url } = data
//             return url
//         })
// }