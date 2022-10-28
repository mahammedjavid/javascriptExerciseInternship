const minimumSteps = (arrOne,arrTwo,num) => {
    let steps = 0;
    let converted = false

    
    while(Math.min(...arrOne)>-1){
        let minValueInArray = Math.min(...arrOne)

        for(let i=0;i<num;i++){

            if(arrOne[i]!==minValueInArray){
                arrOne[i] -= arrTwo[i]
                steps += 1
            }
            // console.log(arrOne)
        }

        let newSet = new Set(arrOne)
        

        if(newSet.size===1){
            converted=true
            console.log(steps)
            break
        }
    }
    if(converted==false){
        console.log(-1)
    }
    
}
let arr1 = [5 ,7, 10, 5, 15]
let arr2 = [2 ,2, 1, 3, 5]  
minimumSteps(arr1,arr2,5)
