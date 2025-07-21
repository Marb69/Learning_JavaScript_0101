let truty = 1;

let cn = truty ? 'Truty' : 'falsy';

console.log(cn);

let user = 'Jhonmarb';
let pass = 'alvert';

let userValid = user==='Jhonmarb' ? 'User is correct' : 'Wrong user';
console.log(userValid);
let passValid = pass==='alvert' ? 'Pass is correct' : 'Wrong password';
console.log(passValid);

let Bankbalance = 1000;
let witdrawBalance = 1000;
let currentBal;
let withdrawMin = Bankbalance<witdrawBalance ? 'Enough balance balance to withdraw' : `Successfully withdraw your current balance is ${currentBal = Bankbalance-witdrawBalance}`;
console.log(withdrawMin);

let grades = 75;

let result = grades>=75 ? 'Pass' : 'failed';

console.log(result);

let userInput = 'Messagesend';

const message =  userInput.toLowerCase()==='messagesend' && 'Hello sent';
console.log(message);


let moneyCurency = 'Piso';

const curency = moneyCurency==='Piso' || 'Money valid';
console.log(curency);


let hour = 24;
let name = 'Jhon';
if(hour>=6 && hour<=12){

    console.log(`Goodmorning ${name}`);
}

else if(hour>=13 && hour<=17){

    console.log(`Goodafternoon ${name}`);
}

else{

    console.log(`Goonight ${name}`);
}

let age = 65;
let isHoliday = true;
if((isHoliday) && age<=6 || age>=65){

    console.log('Discounted');
}

else{

    console.log('The dicount is not apply because is not holiday to day or not meet the age requirements');
}

