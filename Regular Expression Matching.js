//s = "mississippi"

s = "a"

p_1 = "ab*a"
p_2 = "ab*ac*a"
p_3 = "a.a"
p_4 = "mis*is*ip*."

var isMatch = function(s, p) {

    let j = 0
    let i = 0

    console.log("MAX: " + Math.max(s.length, p.length))

    while(i < s.length) {

        console.log("I: " + i)
        console.log("J: " + j)

        if(p[j] === "."){

            if(p[j + 1] === "*"){

                console.log("### .* ###")

                if(p[j + 2] !== s[i]){

                    console.log("p[j + 2] !== s[i] " + (p[j + 2] !== s[i]))

                    i++

                    if(i === s.length){

                        console.log("p[j + 2] " + (p[j + 2]))

                        if( p[j + 2] !== undefined){
                            return false
                        }else{
                            return true
                        }
                        
                    }

                }else{

                    j = j + 3
                    i++
                }
            }else{

                console.log("### . ###")

                console.log("p[j + 1] == s[i]" + (p[j + 1])  + " " + s[i])

                j++
                i++

            }
        }else if(p[j] === "*"){

            console.log("### * ###")

            console.log("p[j - 1] " + (p[j - 1]) + " " + s[i])

            if(p[j - 1] === s[i]){

                i++

            }else if(p[j + 1] === s[i] || p[j + 1] == "."){

                j = j + 2
                i++

            }else{
                return false
            }

        }else{
            i++
            j++
        }



        if(s[i] !== p[j] && p[j] !== "." && p[j] !== "*"){

            if(p[j + 1] === "*"){
                j++
            }else{
                return false
            }
            
        }

        console.log("I2: " + i)
        console.log("J2: " + j)
    }

    return true
};

console.log(isMatch(s, p_1))