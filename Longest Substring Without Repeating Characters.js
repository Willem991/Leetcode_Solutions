let a = "abcabcbb"
let b = "bbbbb"
let c = "pwwkew"
let d = 'abcdefg'
let e = "dvdf"

var lengthOfLongestSubstring = function(s) {
    
    let first = 0 
    let Length = s.length = 1 && s != "" ? 1:0

    for (let index = 0; index < s.length; index++) {
        
        if(index != first){
            console.log("Substring: " + s.substring(first, index))
            console.log("Index val: " + index)
            console.log("Index: " + s[index])
            console.log("Includes: " + s.substring(first, index).includes(s[index]))
            if(!(s.substring(first, index).includes(s[index]))){
                length = s.substring(first, index).length + 1
                Length = length > Length ? length:Length
            }else{
                length = s.substring(first, index).length 
                Length = length > Length ? length:Length
                first = s.substring(first, index).indexOf(s[index]) + 1 + first
                index = first - 1
                console.log("First: " + first)
                console.log("Index val: " + index)
            }
        }
        console.log(Length)
    }

    return Length
};

console.log(lengthOfLongestSubstring(b))
