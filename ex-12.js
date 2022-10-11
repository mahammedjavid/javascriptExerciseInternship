// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in number until you reach a single digit.



multiple = (num) => {
    if (num<10) {
      return 0;
    }
    var prod = 1;
    var str = num.toString().split("");
    for (let i = 0; i < str.length; i++) {
      prod *= str[i];       
    }
    return 1+multiple(prod);
}
console.log( multiple(999));

