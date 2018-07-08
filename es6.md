# ES6

## Let and Const
### Let
Let is similar to var but let has scope. Let is only accessible in the block level it is defined.
```javascript
if(true){
    let a = 40;
    console.log(a);
}
console.log(a);
```
another example
```javascript
let a = 50;
let b = 100;
if (true){
    let a = 60;
    var c = 10;
    console.log(a/c); //6
    console.log(b/c); //10
}
console.log(c); //10
console.log(a); //50
```
### Const
Const is used to assign a constant value to the variable. And the value can not be changed.
```javascript
const a = 50;
a = 60; // shows error. You can not change the value of const.
const b = "Constant Variable";
b = "Assigning new variable"; // shows error
/* Another Example*/
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error
LANGUAGES.push('Java') // Works fine
console.log(LANGUAGES); //['Js', 'Ruby', 'Python', 'Go', 'Java']
```

## Arrow Function
Syntax for writing functions is changed a bit.
```javascript
//old syntax
fucntion oldOne(){
    console.log("Hello World...!");
}
// New Syntax
var newOne = () =>{
    console.log("Hellow World...!");
}
```

## for of loop
* similar to for in, iterates through list of elements, and returns the elements one by one.
```javascript
let arr = [2,3,4,1];
for (let value of arr){
    console.log(value);
}
/* Output
2
3
4
1
*/
```
Another Example
```javascript
let string ="honey";
for(char of string){
    console.log(char);
}
/*
Output
h
o
n
e
y
*/
```
## Spread Operator
Spread attributes help to spread the expression as the name suggests. In simple words, it converts a list of elements to an array and vice versa.
Example without spread attributes
```javascript
let SumElements = (arr) =>{
    console.log(arr);
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    console.log(sum);
}
SumElements([10, 20, 40, 60, 90]);
```

Example with spread attributes
```javascript
let SumElements = (...arr) => {
    console.log(arr);
    let sum = 0;
    for(let element of arr){
        sum += element;
    }
    console.log(sum);
}
SumElements(10,20,40,60,90); // we are not passing array here
```
Another Example
```javascript
Math.max(10,20,60,100,50,200) // 200
```
Math.max won't work with arrays
```javascript
let arr = [10,20,60];
Math.max(arr); //error
```

Our Savior
```javascript
let arr = [1, 20, 30];
Math.max(...arr); // 30
```

## Maps
Maps hold key-value pairs. It's similar to an array but we can define our own index, and indexes are uniquie in maps.

Example
```javascript
var NewMap = new Map();
NewMap.set('name','John');
NewMap.set('id','3456789');
NewMap.set('interest',['js', 'ruby', 'python']);
NewMap.get('name'); // John
NewMap.get('id'); // 3456789
NewMap.get('interest'); //['js', 'ruby', 'python']

// other method of map
NewMap.size; //3
NewMap.keys(); // outputs only keys
NewMap.values();// outputs only values
for(let key of NewMap.keys()){
    console.log(key);
}
/*
Output
name
id
interest
*/
var map = new Map();
for(let [key, value] of map){
    console.log(key + " - " + value);
}
/*Output
name - John
id - 3456789
*/
```

## Sets
Sets are used to store the unique values of any type.
```javascript
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');
for(let element of sets){
    console.log(element);
}
/*
Output
a
b
*/
// other methods
sets.size; //2
sets.has('a'); //true
sets.has(1); //false
```
## Static Methods
Static methods are easy to define and use.
```javascript
class Example{
    static Callme(){ // keyword function is not used
        console.log("static method");
    }
}
Example.Callme();
/*
Output
Static method
*/

```

## Getters and Setters
Getters and setters are one of the useful feature in ES6, and can be used only with classes.

```javascript
class People{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(){
        this.name = name;
    }
}

let person = new Person("Jon snow");
console.log(person.getName());
person.setName("Dany");
console.log(person.getName());
/*
Output
Jon snow
Dany
*/
```
Example with getters and setters
```javascript
class People{
    constructor(name){
        this.name = name;
    }
    get Name(){
        return this.name;
    }
    set Name(name){
        this.name = name;
    }
}

let person = new People("Jon Snow");
console.log(person.Name);
person.Name = "Dany";
console.log(person.Name);
```

## References
[1]: [ES6 by example](https://dev.to/srebalaji/es6-for-beginners-with-example-c7)
