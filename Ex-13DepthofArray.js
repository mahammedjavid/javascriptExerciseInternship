let arrayDepth = (value) =>{
    if(Array.isArray(value)){
        return 1 + Math.max(0, ...value.map(arrayDepth))
    }
    else{
        return 0
    }
}
console.log(arrayDepth([]))
