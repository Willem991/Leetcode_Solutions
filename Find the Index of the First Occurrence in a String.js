let haystack = "mississippi"
let needle = "issip"

var strStr = function(haystack, needle) {
    
    let result = -1

    if(needle.length > haystack.length){
        return result
    }

    for (let i = 0; i < haystack.length; i++) {
        
        if(haystack[i] === needle[0]){

            result = i

            for (let j = 0; j < needle.length; j++) {
                
                if(haystack[i + j] !== needle[j]){
                    result = -1  
                    break
                }
                
            }

            if(result !== -1){
                break
            }
            
        }
        
    }

    return result
};

console.log(strStr(haystack,needle))