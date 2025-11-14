let x = 12

var isPalindrome = function(x) {
    
    x = x.toString()

    let a = x.substring(0, Math.floor(x.length/2))

    let b = x.substring(Math.ceil(x.length/2), x.length)

    b = b.split("").reverse().join("")

    let result = b == a ? true:false


    return result
};

console.log(isPalindrome(x))