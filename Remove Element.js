nums = [1,2,3,4,5,5,5,5,5,6,7]
val = 5

var removeElement = function(nums, val) {

    let i = 0

    while(i < nums.length){

        if(nums[i] === val){
            nums.splice(i,1)
        }else{
            i++
        }
    }

    return nums.length
};

console.log(removeElement(nums, val))
console.log(nums)