// Given a number n, return the number of positive odd numbers below n, 

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
// 

function oddCount(n){
    let scope = n;
    
    if ( typeof(scope) === "string" ) {
        return scope;
  
    } else {
        let k =  Math.floor((n - 1) / 2);

        return k;
    }

  }

var test1 = oddCount("sad");
var test2 = oddCount(11);

console.log('test: ', test1);
console.log('test2: ', test2);

//  version 2 only number
const oddCount2 = n => Math.floor(n / 2);

test3 = oddCount2(11);

console.log('test3: ', test3);