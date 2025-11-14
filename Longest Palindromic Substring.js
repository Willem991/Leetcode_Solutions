s = '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111'

var oddPalindromeChecker = function(index, s, step){
    s_left = s[index - step]
    s_right = s[index + step]

    //console.log("RUN " + step)

    if(s_left == s_right && s_left != undefined && s_right != undefined){
        step += 1
        result = oddPalindromeChecker(index, s, step)
    }else{
        result = s[index]
        for (let i = 1; i < step; i++){
            result = s[index + i] + result + s[index + i]
        }
        //console.log(result)
    }

    //console.log("ODD: " + result)
    return result
    
}

//console.log(oddPalindromeChecker(8,s,1))

var evenPalindromeChecker = function(index, s, step, step_right){
    s_root = s[index]
    s_left = s[index - step]
    s_right = s[index + step + step_right]

    if(s_left == s_right  && s_left != undefined && s_right != undefined){
        console.log("Continuing " + s_left + s_right)
        step += 1
        result = evenPalindromeChecker(index, s, step, 1)
    }else{
        console.log("Returning " + step)
        if(s[index] != undefined && s[index + 1] != undefined && s[index] == s[index + 1]){
            result = s[index] + s[index + 1]
        }else{
            result = ""
        }
        
        console.log("REsult: " + result)
        for (let i = 1; i < step; i++){
            if(s[index - i] != undefined && s[index + i + 1 ] != undefined){
                result = s[index - i] + result + s[index + i + 1 ]
                //console.log("REsult: " + result)
            }
        }

    }
    //console.log("EVEN: " + result)
    return result

}

//console.log(evenPalindromeChecker(0, s, 0, 1))

var longestPalindrome = function(s) {
    let palindromeodd = ''
    let palindromeeven = ''
    for (let index = 0; index < s.length; index++) {
        //console.log("INDEX: " + index + " #################")
        let tempodd = oddPalindromeChecker(index,s,1)
        let tempeven = evenPalindromeChecker(index, s, 0, 1)
        if(tempodd.length > palindromeodd.length){
            palindromeodd = tempodd
        }
        if(tempeven.length > palindromeeven.length){
            palindromeeven = tempeven
        }
    }
    return palindromeeven.length > palindromeodd.length ? palindromeeven:palindromeodd
};

console.log(longestPalindrome(s))

