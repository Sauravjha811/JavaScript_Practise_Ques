// 21. Explain the concept of closure in JavaScript. Provide an example of a closure and discuss its practical use cases.
function outerFunction() {
    const outerVar = 10;

    function innerFunction() {
        console.log(outerVar);
    }
    return innerFunction;
}
const closure = outerFunction();
closure(); // This will log 10, even though outerFunction has completed.


// 22. Explain the prototype-based inheritance system in JavaScript. How does it differ from classical inheritance in languages like Java or C++? Provide an example of using prototypes to create inheritance in JavaScript.
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
}

function Student(name, school) {
    Person.call(this, name);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const john = new Student('John', 'ABC School');
john.sayHello(); // This will call the sayHello method from the prototype.


// 23. Describe the event loop in JavaScript and how it manages concurrency. 
// Explain the concepts of the call stack, callback queue, and microtask queue. 
// Provide an example of how the event loop handles asynchronous operations.
console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

Promise.resolve(). then(() => {
    console.log('Promise resolved');
});

console.log("End");
// output
/*
Start --> Call Stack
End  --> call Stack
Promise resolved  --> Microtask queue
Timeout callback --> Callback queue
*/


/* 
24. Discuss memory management in JavaScript. How does JavaScript's garbage collection work, 
 and what are some best practices for optimizing memory usage in your code? 
Provide examples of memory-related issues and how to mitigate them.
*/
// Memory leak example with event listeners
function addEventListener() {
    const element = document.getElementById('myButton');
    element.addEventListener('click', function onClick() {
        // ...
    });
}
// To prevent the memory leak, remove the event listener when it's no longer needed
function addEventListener() {
    const element = document.getElementById('myButton');
    function onClick() {
        // ...
    }
    element.addEventListener('click', onClick);

    // Later, when you're done with the listener
    element.removeEventListener('click', onClick);
} 


// 25. Create a prototype for a generic character
const characterPrototype = {
    health: 100,
    damage: 10,
    attack() {
        console.log(`${this.name} attacks for ${this.damage} damage.`);
    }
};
// Create a specific character by inheriting from the protype
function createCharacter(name) {
    const character = Object.create(characterPrototype);
    character.name = name;
    return character;
}
// create two specific characters
const warrior = createCharacter("Warrior");
const mage = createCharacter("Mage");

// Modify properties for specific characters
warrior.damage = 20;
mage.health = 80;
// Use inherited methods
warrior.attack(); // "Warrior attacks for 20 damage"
mage.attack(); // "Mage attacks for 10 damage". (uses the inherited 'damage' value)

console.log(warrior.health); // 100 (inherits from the prototype)
console.log(mage.health); // 80 (modified for the 'mage' object)


