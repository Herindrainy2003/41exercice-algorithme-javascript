let factorielle = (n) => {
    if(n === 0){
        return 1
    }else{
        return n * factorielle(n-1)
    }
}
console.log(factorielle(3))