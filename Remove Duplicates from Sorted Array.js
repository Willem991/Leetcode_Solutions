nums = [1,1,2]

var removeDuplicates = function(x) {
    
    let result = []

    for (let i = 0; i < x.length; i++) {
        
        if(x[i] !== x[i+1]){
            result.push(x[i])
        }
        
    }

    l = x.length - result.length
    L = x.length

    for (let l = 0; l < L; l++) {

        if(result[(L - 1) - l] !== undefined){
            nums.unshift(result[(L - 1 )- l])
        }

        nums.pop()
        
    }
    

    for (let j = 0; j < l; j++) {
        
        nums.push("_")
        
    }

    return result.length
};


console.log(removeDuplicates(nums))
console.log(nums)