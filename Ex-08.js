
const newArr = ['new','hello','world']

capitalize = (arr) => {
    var upperCaseArr = arr.map((x)=>x.toUpperCase())
    console.log(upperCaseArr)
}
capitalize(newArr)