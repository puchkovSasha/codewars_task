// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false

//                               version 1

function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') );
    
  }

  test = isPalindrome("anna") ;
  console.log('test: ', test);

//                              version 2

function isPalindromee(str) {
    var a = str;
    var result = '';
    for (var i = 0; i < a.length; i++) {
      if (str[i] === str[a.length - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
        result = true;
      } else {
        result = false;
        return result;
      }
    }
    
    return result;
  }

  
  test2 = isPalindromee("anna") ;
  console.log('test2: ', test2);