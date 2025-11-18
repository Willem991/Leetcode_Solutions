s = "[]"

var isValid = function(s) {

    let key = {
        "}":"{",
        "]":"[",
        ")":"("
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {

        if(s[i] === "{" || s[i] === "[" || s[i] === "("){
            //console.log("Pushed!")
            stack.push(s[i])
        }else if(stack.at(-1) == key[s[i] + ""]){
            //console.log("Popped!")
            stack.pop()
        }else{
            console.log("Fled!")
            return false
        }

        console.log(stack)
        
    }

    if(stack.length == 0){
        return true
    }else{
        return false
    }
};

console.log(isValid(s))