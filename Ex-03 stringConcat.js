var greeting = "hello" 
var Name = 'World'
var stringConcat = greeting+ " " + Name

// alert(stringConcat)
let regex1 = /l/gi
let regex2 = /o/gi

var a = stringConcat.replace(regex1,1).replace(regex2,0)
console.log(a)

var reverseStr = stringConcat.split("").reverse().join('')
console.log(reverseStr)


