let a = [1,2,3,4,5]
let b = [6,7,8,9,10,11,12,13,14,15,16,17]

var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort(function(a,b){
        return a - b
    })
    let l = nums3.length
    let m = 0
    if(l % 2 != 0){
        m = nums3[l/2 + 0.5 - 1]
    }else if(l % 2 == 0 & l != 0){
        m = (nums3[l/2 -1] + nums3[l/2])/2
    }else{
        m = null
    }
    console.log(nums3)
    return m
};

console.log(findMedianSortedArrays(a,b))