// 11. loop an array and sum all members of it.
const arr = [1,2,3,4,5,6,7,8,9];
let sum = 0;
arr.forEach( (ele) => {
    sum += ele;
})
console.log(sum); // output - 45


// 12. In an array of strings and numbers only add those numbers which are not strings (numbers)
const arr1 = [12, "car", 21, "Money", "8", 9];
let sum1 = 0;
arr1.forEach((ele) => {
    if(typeof(ele) === 'number') {
        sum1 += ele;
    }
})
console.log(sum1); // output - 42


// 13. loop an array of objects and remove all objects which don't have gender's value male
const arr2 = [
    {name:"Saurav", gender:"Male"},
    {name:"Snowber", gender:"Female"},
    {name:"Nidhi", gender:"Female"},
    {name:"Unknown", gender:"Female"},
    {name:"Kismat", gender:'Female'}
]
let arr3 = arr2.filter((ele) => {
    return ele.gender === "Male";
})
console.log(arr3); // [ { name: 'Saurav', gender: 'Male' } ]
console.log(arr2); // same 
// one way like arr2 = arr3;
let count = 0;
arr2.forEach((ele) => {
    if(ele.gender !== 'Male') count++;
})
console.log(count); // 4
for(let i=1; i<=count; i++) {
for(var j=0; j<arr2.length; j++) {
    if(arr2[j].gender !== "Male") {
        arr2.splice(j,1);
    }
}}
console.log(arr2); // [ { name: 'Saurav', gender: 'Male' } ]


// 14. Write a Javascript function to clone an array
function cloneArr(arr) {
    return [...arr];
}
function cloneArr1(arr) {
    var newArr = [];
    arr.forEach((ele) => {
        newArr.push(ele);
    })
    return newArr;
}
function cloneArr2(arr) {
    return arr.map((ele) => {
        return ele;
    } )
}
let arr4 = cloneArr([1,2,3,4,5]);
console.log(arr4); // [ 1, 2, 3, 4, 5 ]
let arr5 = cloneArr1([1,2,3,4,5]);
console.log(arr5); // [ 1, 2, 3, 4, 5 ]
let arr6 = cloneArr2([1,2,3,4,5]);
console.log(arr6); // [ 1, 2, 3, 4, 5 ]


// 15. Write a JavaScript function that accepts an argument return their type
function typeTeller(ele) {
    return typeof(ele);
}
console.log(typeTeller([])); // object
console.log(typeTeller({})); // object
console.log(typeTeller(1.2)); // number
console.log(typeTeller(true)); // boolean
console.log(typeTeller("Software Engineer")); // string
console.log(typeTeller(null)); // object
console.log(typeTeller(function() {})); // function
console.log(typeTeller(undefined)); // undefined


// 16. Write a JavaScript function to get the first element of an array if we don't pass any n elements
function nFirstPrint(arr, n = 1) {
    if(n <= arr.length) {
        for(let i = 0; i< n; i++) {
            console.log(arr[i]);
        }
    }
    else{
        console.log("More then the length of the array");
    }
}
nFirstPrint([1,2,3,4,5], 4); // 1, 2, 3, 4
nFirstPrint([1,2,3,4,5]); // 1
nFirstPrint([1,2,3,4,5], 15); // More then the length of the array


// 17. Write a JavaScript function to get the last element of an array if we don't pass any n elements
function nLastPrint(arr, n = 1) {
    if(n <= arr.length) {
        for(let i = 0; i< n; i++) {
            console.log(arr[arr.length-1]-i);
        }
    }
    else{
        console.log("More then the length of the array");
    }
}
nLastPrint([1,2,3,4,5], 4); // 5, 4, 3, 2
nLastPrint([1,2,3,4,5]); // 5
nLastPrint([1,2,3,4,5], 15); // More then the length of the array


// 18. Write a JavaScript program to find the most frequent item of an array.
function findMostFrequentItem(arr) {
    // Create an obj to store the count of each item
    let countObj = {};
    
    // Initialize variables to keep track of the most frequent item and its count
    let mostFreItem;
    let maxCount = 0;

    // Iterate through the array
    for(let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];

        // If the current item is not in the count object, initalize its count to 1
        if(!countObj[currentItem]){
            countObj[currentItem] = 1;
        }
        else {
            // If it's already in the count object, increment its count
            countObj[currentItem]++;
        }

        // Check if the current item has a higher count than the current most frequent Item
        if(countObj[currentItem] > maxCount) {
            mostFreItem = currentItem;
            maxCount = countObj[currentItem];
        }
    }
    return mostFreItem;
}
// Now using the reduce
function findMostFrequentItem1(arr) {
    // Create an empty object to store the counts of each item
    const countMap = arr.reduce((acc, item) => {
        // If the item is not in the count map, intialize its count to 1, otherwise increment it
        acc[item] = (acc[item] || 0) + 1;
        return acc;
}, {});

    // Find the most frequent item by iterating through the count map
    const mostFreItem = Object.keys(countMap).reduce((a, b)=> 
    countMap[a] > countMap[b] ? a : b
    );
    
    // Return the  most frequent item found
    return mostFreItem;
}
let arr11 = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
let mostFrequent = findMostFrequentItem(arr11);
let mostFrequent1 = findMostFrequentItem1(arr11);
console.log("The most frequent item is: " + mostFrequent); // The most frequent item is: 5
console.log("The most frequent item is: " + mostFrequent1); // The most frequent item is: 5


// 19. Write a javaScript function to shuffle an array
function shuffleArray(arr) {
    for(let i = arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
const myArray = [1,2,3,4,5];
shuffleArray(myArray);
console.log(myArray); // output: [4, 2, 3, 5, 1];  not fixed, it's totally random position.


// 20. write a program that return union of two array.
function union(arr, arr1) {
    return [...new Set(arr.concat(arr1))];
}
let arr_ = [1,2,3,4,5];
let arr_1 = [2,3,4,6,7];
console.log(union(arr_, arr_1)); // output: [1, 2, 3, 4, 5, 6, 7]