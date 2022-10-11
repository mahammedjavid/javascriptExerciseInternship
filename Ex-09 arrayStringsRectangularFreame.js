const newArr = ["Hello", "World", "in", "a", "frame"]

newFunc = (arr) => {
    console.log("***********")
    for(let i=0;i<arr.length;i++){
        var a = "* " + arr[i]+"   *"
        console.log(a)
    }
    console.log("*********")
}

newFunc(newArr)