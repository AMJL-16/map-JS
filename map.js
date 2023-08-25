  
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
