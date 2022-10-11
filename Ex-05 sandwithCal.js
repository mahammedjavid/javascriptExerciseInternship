// var sandwitchCalculator = (bread) => {
//         if(bread>2){
//             console.log(`now you can get ${Math.floor(bread/2)} sandwitch`)
//         }
//         else if(bread<2){
//             console.log('Sorry we dont have enough breads to make sandwitch')
//         }
// }

// sandwitchCalculator(1)


var sandwitchCalculator = (bread , chees) => {
    if(bread > 2 && chees < 1 ){
        console.log("Sorry, we dont have enough ingredients to make sandwitch")
    }else if(bread>2 && chees === 1){
        console.log(1)
    }else if(bread > 2 && chees > 1){
        
        var sandwitch = bread/2

        if(sandwitch>chees){
            console.log(chees)
        }else{
            console.log(sandwitch)
        }
    }
}

sandwitchCalculator(4,10)