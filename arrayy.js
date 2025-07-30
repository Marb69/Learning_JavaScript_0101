
/*array filter */
let age = [18,12,21,17];

let eightenplus = age.filter(ages => ages>=18);

eightenplus.forEach(element => {
    
    console.log(element);
});


/*Even */

let number = [1,2,3,4,5,6,7,8,9,10];

let even = number.filter(num => num%2==0);

even.forEach(element => {
    
    console.log(element);
});


/* Object*/


let persons = {

    name: 'Jhon alvert',
    age: 18,
    isStudent: true,
}


console.log(persons.name);

