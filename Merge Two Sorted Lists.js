l1 = [1,1,1,1]
l2 = [1,1,1,1,1]

var mergeTwoLists = function(list1, list2) {
    
    let i = 0
    let j = 0
    let result = []

    while (i < list1.length || j < list2.length) {

        console.log()
        if(list1[i] === undefined){
            result.push(list2[j])
            j++
        }else if(list2[j] === undefined){
            result.push(list1[i])
            i++
        }else if(list1[i] <= list2[j]){
            result.push(list1[i])
            i++
        }else{
            result.push(list2[j])
            j++
        }
        

    }

    return result
};

console.log(mergeTwoLists(l1,l2))