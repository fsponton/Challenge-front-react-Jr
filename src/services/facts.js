const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'


// ASYNC - AWAIT

export const getRamdonFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
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