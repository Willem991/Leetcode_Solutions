let l1 = {
  "val": 9,
  "next": {
    "val": 9,
    "next": {
      "val": 9,
      "next": {
        "val": 9,
        "next": {
          "val": 9,
          "next": {
            "val": 9,
            "next": {
              "val": 9,
              "next": null
            }
          }
        }
      }
    }
  }
}

let l2 = {
  "val": 9,
  "next": {
    "val": 9,
    "next": {
      "val": 9,
      "next": {
        "val": 9,
        "next": null
      }
    }
  }
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val); // Value of the node
    this.next = (next === undefined ? null : next); // Reference to the next node
}

var addTwoNumbers = function(l1, l2) {
    a1 = []
    a2 = []
    while(l1){
        a1.push(l1.val)
        l1 = l1.next
    }
    while(l2){
        a2.push(l2.val)
        l2 = l2.next
    }

    carry = 0
    index = 0
    a1 = a1
    a2 = a2
    a3=[]
    
    while(a1[index] || a2[index] || carry > 0 || a1[index] == 0 || a2[index] == 0){
      
      if(a1[index]){
        A = a1[index]
      }else{
        A = 0
      }

      if(a2[index]){
        B = a2[index]
      }else{
        B = 0
      }

      console.log(A + B + carry)

      if(A + B + carry < 10){
        a3.push(A + B + carry)
        carry = 0
      }else if(A + B + carry == 10){
        a3.push((0) % 10)
        carry = 1
      }else{
        a3.push((A + B + carry) % 10)
        carry = 1
      }
      
      index += 1

    }
    a3 = a3.reverse()
    l3 = new ListNode(a3[0])
    for (let index = 1; index < a3.length; index++) {
        L3 = new ListNode(a3[index], l3)
        l3 = L3
    }

    return l3
};

console.log(addTwoNumbers(l1,l2))