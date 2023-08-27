  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */
// map , filter and reduce methods operate on arrays, which means they operate on array of elements.
// It must be an array for map, filter or reduce to work on it.
// this 3 methods are all designed to accomplish what a for loop and a while loop are able to 
// achieve, but using less code. example below will give the same results, see:
/* map, filter and reduce are called Iterator Methods which means that they provide a nice,
 elegant way to iterate through an array or items and also perform some action on each item. */


/* REMENCBER 
  the MAP method executes a provided callback function as a parameter on each array item and
  returns a new array containing all the results.
*/

//A callback function is a function given to another method to be executed on each item of an array.
 
let nums = [1, 2, 3, 4, 5];

// Using a for loop
  let results = [];
  for (let num of nums) {
    results.push(num* 2);
  }
console.log(results);

// Using map()
const multByTwo = function (num) {
  return num * 2;
}
const mapResults = nums.map(multByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWhitIds = students.map( student => [student.name, student.id]);
console.log(studentsWhitIds)

// return them as objects with the id and name properties intact
const studentObject = students.map(student => ({
  id: student.id,
  name: student.name
}));
console.log(studentObject);

/* add an age property to each student  
and return an array identical to the original,  
but where each student has an age as well*/
const ages = [20, 18, 17];
const studentAge = students.map((student, index)=> ({
  ...student,
  age: ages[index]
}));
console.log(studentAge);

// map method challenge
let students1 = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];
/* You will use destructuring assignment to create two variables and 
you will assign them values from calling the map method on the students array.
The function provided to the map method can either be created within the map method or
outside and passed in but in either case, it should use an arrow function. 
The map method should return an array for each item in the students array and
this new array should contain two items the items name value and the items results value.
Create variables named john and rest using the destructuring assignment
Assign the variables values from calling the map method on the students array
Within the map method either use an arrow function or provide a function created outside of
the map method (note this function should also be an arrow function)
Log out the variable named: john to see its value
Log out the variable named: rest to see its value
*/

// here is my solution 
let [john, ...rest] = students.map(student => [student.name, student.results]);
console.log(john);
console.log(rest);

// below are the 2 ways to solve the challenge

     // single line, used different variable names so as not to clash with those below.
let [John, ...Rest] = students1.map(itm => [itm.name, itm.results]);
console.log(John);
console.log(Rest);

      // Or create function first and use in map
const mapper = (itm) => [itm.name, itm.results];
let [joohn, ...reest] = students1.map(mapper);
console.log(joohn);
console.log(reest);
