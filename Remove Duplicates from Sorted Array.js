nums = [1,1,2]

var removeDuplicates = function(nums) {
    
    let result = []

    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] !== nums[i+1]){
            result.push(nums[i])
        }
        
    }

    l = nums.length - result.length
    L = nums.length

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