const fruit = ['Mango','banana','Apple'];

fruit.push('Ikaw');
fruit.unshift('Parin');
fruit.pop();
fruit.reverse();
for(i = 0; i<fruit.length; i++){

    console.log(fruit[i]);
}


let user = ['Jhon','Alvv'];
let pass = [123,123];

if(!user.includes('Jhon') || !pass.includes(123)){


    console.log('invalid user');
}

else{
    

    console.log('successfully login')
}