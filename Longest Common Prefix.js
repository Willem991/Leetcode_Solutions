s = ["dog"]

var longestCommonPrefix = function(strs) {
    
    let result = ""
    let l = 1000

    s.forEach(elem => {
        
        l = Math.min(l, elem.length)
    });

    let comparer = s[0][0]
    let compare = true

    for (let i = 0; i < l; i++) {
        
        //console.log(comparer)

        compare = true

        s.forEach(arr => {
            
            if(comparer === arr[i] && compare){
                compare = true
            }else{
                compare = false;
            }
        });

        if(compare){
            result = result + comparer
            comparer = s[0][i + 1]
        }else{
            break
        }
        
    }

    return result
};

console.log(longestCommonPrefix(s))