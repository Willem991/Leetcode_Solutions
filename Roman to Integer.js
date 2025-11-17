s = 400

var intToRoman = function(s) {

    s = s.toString().split("")
    let ten = ""
    let five = ""
    let one = ""
    let result = ""
    let j = 0

    for (let i = s.length - 1; i >= 0; i--) {
        
        switch (i) {
            case 0:
                ten = "X";
                five = "V"
                one = "I"
                break;
            case 1:
                ten = "C";
                five = "L"
                one = "X"
                break;
            case 2:
                ten = "M";
                five = "D"
                one = "C"
                break;
            default:
                one = "M"
                break;
        }

        switch (s[j]) {
            case "0":
                
                break;
            case "1":
                result = result + one
                break;
            case "2":
                result = result + one + one
                break;    
            case "3":
                result = result + one + one + one
                break;
            case "4":
                result = result + one + five
                break;
            case "5":
                result = result + five
                break;
            case "6":
                result = result + five + one
                break;
            case "7":
                result = result + five + one + one
                break;
            case "8":
                result = result + five + one + one + one
                break;
            case "9":
                result = result + one + ten
                break;    
            default:
                break;
        }

        j++
    }
    
    return result
};

var romanToInt = function(s) {

    let Thousands  = 0
    let Hundreds = 0
    let Tens = 0
    let Ones = 0
    let i = 0


   while( i < s.length){   

        //console.log(i)
        //console.log(s[i])
        //console.log(Thousands + Hundreds + Tens + Ones)

        switch (s[i]) {
            case "M":

                Thousands += 1000
                i++
                
                break;
            case "D":
                
                Hundreds += 500
                i++

                break;
            case "C":
                
                switch (s[i + 1]) {
                    case "D":
                        Hundreds += 400
                        i += 2
                        break;
                    case "M":
                        Tens += 900
                        i += 2
                        break
                    default:
                        Hundreds += 100
                        i++
                        break;
                }
                
                break;
            case "L":
                
                Tens += 50
                i++

                break;
            case "X":
                
                switch (s[i + 1]) {
                    case "L":
                        Tens += 40
                        i += 2
                        break;
                    case "C":
                        Tens += 90
                        i += 2
                        break
                    default:
                        Tens += 10
                        i++
                        break;
                }
                
                break;
            case "V":
                
                Ones += 5
                i++

                break;
            case "I":
                
                switch (s[i + 1]) {
                    case "V":
                        Ones += 4
                        i += 2
                        break;
                    case "X":
                        Ones += 9
                        i += 2
                        break
                    default:
                        Ones += 1
                        i++
                        break;
                }
                break
            default:
                i++
                break;
        }


   }

   return Thousands + Hundreds + Tens + Ones
};

console.log(intToRoman(s))
console.log(romanToInt(intToRoman(s)))