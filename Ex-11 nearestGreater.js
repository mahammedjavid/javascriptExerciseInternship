// var arr = [5,1,4,3,2,5,7,10]
// var leftMax = 0;
// var rightMax = 0;
// var pos = 2;
// var leftPos=0 , rightPos=0;
// for(let i=0;i<pos;i++){
//     if(arr[i]>arr[pos]){
//         leftMax = arr[i]
//         leftPos = i
//     }
// }

// for(let i=pos;i<arr.length;i++){
//     if(arr[i]>arr[pos]){
//         rightMax = arr[i]
//         rightPos = i
//         break
//     }
// }
// if(leftMax==0){
//     console.log(rightMax)
// }
// else if(rightMax==0){
//     console.log(leftMax)
// }
// else if(pos- leftMax<rightPos-pos){
//     console.log(leftMax)
// }else{
//     console.log(rightMax)
// }

let arr = [1,4,3,2,5,7]
let maxPos = 10;
let maxValue = 0;
let CurrPos = 0;
let x = 2;
for(let i=0;i<arr.length;i++){
    if(x===arr[i]){
        CurrPos = i
    }
    
}

for(let i=0;i<arr.length;i++){
    if((arr[i]>x) && (CurrPos!==i) ){
        // console.log(i)
        if(Math.abs(maxPos-CurrPos) >=Math.abs(i-CurrPos)){
            maxValue = arr[i]
            maxPos = i
        }
    }
        
}
console.log(maxValue)







