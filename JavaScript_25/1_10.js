// 1. Given a String, reverse each word of a String.
var str = "Snowber Fayaz";
// Reverse Word
var revWord = str.split(" ").map(function(word){
    return word.split("").reverse().join("");
})
console.log(revWord); // output - [ 'rebwonS', 'zayaF' ]
// Reverse String
var revStr = revWord.join(" ");
console.log(revStr); // output - rebwonS zayaF


// 2. How to check if an object array or not?
function checkArray(ele) {
    return Array.isArray(ele);
}
console.log(checkArray([])); // output - True
console.log(checkArray({})); // output - False


// 3. How to empty an array in JavaScript? -> without using reset & loops.
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr); // ouput -  [  1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr.length); // output - 9
arr.length = 0;
console.log(arr); // output - []
console.log(arr.length); // output - 0


// 4. How would you check if number is an integer? // not used Number.isInteger();
console.log(Number.isInteger(12.0)); // True;
console.log(Number.isInteger(12.23)); // False;
var num = 12.0; // Integer
if(num%1 === 0) {
    console.log("Integer");
}
else {
    console.log("Not an Integer");
}


// 5. Make this work
// duplicate([1,2,3]) = [1,2,3,1,2,3]
const arr1 = [1, 2, 3];
function duplicate(arr) {
    return arr.concat(arr);
}
let ans = duplicate(arr1);
console.log(ans); // [ 1, 2, 3, 1, 2, 3 ]


// 6. Make a JavaScript function that reverse a Number
function revNum(num) {
    return +(num.toString().split("").reverse().join(""));
}
var reverseNum = revNum(12);
var reverseNum1 = revNum(8112001);
console.log(reverseNum); // 21
console.log(reverseNum1); // 1002118

function revNumber(num) {
    var rev = 0;
    while(num > 0) {
        var rem = num % 10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}
var reverseNum = revNumber(12);
var reverseNum1 = revNumber(8112001);
console.log(reverseNum); // 21
console.log(reverseNum1); // 1002118


// 7. To check String is Palindrome or not.
function checkPal(str) {
    var revStr = str.split("").reverse().join("");
    return revStr === str;
}
console.log(checkPal("SaaS")); // true
console.log(checkPal("Saas")); // false


// 8. Write a function that return a passed string with letters with alphabetical order
function alpha(str) {
    return str.split("").sort().join("");
}
console.log(alpha("saurav")); // aarsuv
console.log(alpha("snowber")); // benorsw


// 9. Write a JavaScript function that accepts a string as an parameter converts the first letter of each word of a string into uppercase.
function fLetterCap(str) {
    var allWords = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allWords.join(" ");
}
console.log(fLetterCap("saurav kumar jha")); // Saurav Kumar Jha
console.log(fLetterCap("snowber fayaz"));  // Snowber Fayaz


// 10. Write a javaScript function to get the number of occurence each letter in specified string
function nOccur(word) {
   let obj = {};
   word.split("").forEach(function(element) {
    if(obj.hasOwnProperty(element) === false) {
        obj[element] = 1;
    }
    else {
        obj[element] +=1;
    }
   });
   return obj;
}
let ans1 = nOccur("Saurav Jha");  
let ans2 = nOccur("Snowber fayaz"); 
console.log(ans1);  // { S: 1, a: 3, u: 1, r: 1, v: 1, ' ': 1, J: 1, h: 1 }
console.log(ans2); // { S: 1, n: 1, o: 1, w: 1, b: 1, e: 1, r: 1, ' ': 1, f: 1, a: 2, y: 1, z: 1 }



