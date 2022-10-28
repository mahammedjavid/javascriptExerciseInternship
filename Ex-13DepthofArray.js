// let arrayDepth = (arr) => {
//     let level = 1;
//     let prevLength = 1;
//     let currentLength = arr.length;

//     while(currentLength>prevLength){
//         arr = arr.flat();
//         prevLength = currentLength
//         currentLength = arr.length
//         level++
//     }
//     console.log(level)
// }
// console.log(arrayDepth([[[[[[[[[[2][[[2,3]]]]]]]][2],[2]]]]]) )

let arrayDepth = (value) =>{
    if(Array.isArray(value)){
        return 1 + Math.max(0, ...value.map(arrayDepth))
    }
    else{
        return 0
    }
}
console.log(arrayDepth([]))