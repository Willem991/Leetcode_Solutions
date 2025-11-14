x = -123284619826491284892



var reverse = function(x) {
    let sign = x < 0 ? -1:1
    x = Math.abs(x)
    x = sign * parseInt(x.toString().split("").reverse().join(""));
    if(x > Math.pow(2,31) - 1 || x < Math.pow(2,31) * - 1){
        x = 0
    }
    return x
};

console.log(reverse(x))