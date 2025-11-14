//let s = "PAYPALISHIRING"

var convert = function(s, numRows) {

    let result = ""

    if(numRows == 1){

        result = s

    }else{

        //Build Start String

        for (let i = 0; i < s.length; i+=(numRows+numRows - 2)) {
            //console.log(s[i])
            result = result + s[i]
            
        }

        //Build Middle String

        let twoCounter = 2

        for (let j = 1; j < numRows - 1; j++) {

            let twoIndex = 2 + 2 * (numRows - (2 + j) )
            let mainIndex = twoIndex

            //console.log("J: " + j)
            
            for (let l = j; l < s.length; l) {
                /*
                console.log("L: " + l)
                console.log("TWO Index: " + twoIndex)
                console.log("TWO Counter: " + twoCounter)
                console.log("Main Index: " + mainIndex)*/
                
                result = result + s[l]

                l = l + mainIndex
                //twoIndex = twoIndex == twoCounter ? twoIndex + 2 * (numRows - (2 + j)):twoCounter
                mainIndex = mainIndex == twoCounter ? twoIndex:twoCounter
                
            }

            twoCounter = 2 + 2*(j) 
            

            
        }

        //Build End String

        for (let k = (numRows - 1); k < s.length; k+=(numRows+numRows - 2)) {
            
            result = result + s[k]
            
        }

    }

    

    return result
};

//console.log(convert(s,2))

console.log(convert(s, 3) == "PAHNAPLSIIGYIR")
console.log(convert(s, 3))
console.log("PAHNAPLSIIGYIR")

console.log(" ")

console.log(convert(s, 4) == "PINALSIGYAHRPI")
console.log(convert(s, 4))
console.log("PINALSIGYAHRPI")

console.log(" ")

console.log(convert(s, 5) == "PHASIYIRPLIGAN")
console.log(convert(s, 5))
console.log("PHASIYIRPLIGAN")