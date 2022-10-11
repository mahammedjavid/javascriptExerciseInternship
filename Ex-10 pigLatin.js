let str1 = ["The", "quick", "brown", "fox"];

pigLatin = (str) => {
    var first = str.map((x) => x[0])
    var notFirst = str.map((y)=>y.slice(1))
    let newArr = []

    for(let i = 0;i<str.length;i++){
        newArr[i] = notFirst[i].toLowerCase() + first[i].toLowerCase() + "ay"
    }
    return newArr
}

console.log(pigLatin(str1))