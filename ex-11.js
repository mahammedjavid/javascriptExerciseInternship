var arrOne = [1,4,3,2,5,7]


checkLargest = (arr,checkValue) => {
    var sortedArr = arr.sort()
    for(let i = 0; i<sortedArr.length; i++){
        if (sortedArr[i]>checkValue){
            return `nearest larger value for the number ${checkValue} is at position ${sortedArr[i]} `
            break
        }
    }

}
console.log(checkLargest(arrOne,1))
