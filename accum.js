let accum = (mot) => {
    return [...mot].map((word , indice) =>(word.toUpperCase() + word.toLowerCase().repeat(indice))).join('-')
}

console.log(accum('phrase'))







