var twoSum = function(nums, target) {
let result = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[j] + nums[i] == target){
                if(!(i in result)){
                    result.push(i)
                } 
                if(!(j in result)){
                    result.push(j)
                }  
            }
            
        }
    }

    return result
};