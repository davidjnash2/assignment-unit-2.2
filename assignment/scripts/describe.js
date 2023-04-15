// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Assign string value of 'Dane' to variable 'name'. 
// Run if/else conditional script against 'name' variable to determine console log return. 
// If the variable is exactly equal to value 'Mary', message will display as 'Hi, Mary!'
// However, since the variable value is not 'Mary', the console log 
// message will display as the else option 'How do you do?'.
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Use result of the conditional statements to assign value of variable 'secret'.
// Assign value of 123 to variable 'code'.
// First conditional states that when 'code' value is exactly equal to 123 then:
// 1) the value of 'secret' will be string 'super', &
// 2) the value of the 'code' variable will be multiplied by 2.
// Second conditional statement states that if value of 'code' is greater than 250,
// then value of 'secret' will change to 'duper'.
// Since the value of 'code' is 123, which is exact match for first script, 
// then it will run that script, with following results:
// 1) value of 'secret' will be 'super', &
// 2) value of 'code' will double, &
// 3) second script will not run because 'code' value is <250 (123*2=246), &
// 4) console log display message will be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Assign values of 'true' to variable 'isStudent', '34' to variable 'age', and '55407' to variable 'zip'.
// Per conditionals, there are these 4 possible return messages, with these criteria:
// 1) 'You're a student on the West Coast!' will be displayed in console log if 'isStudent' value is 'true' AND
//    the 'zip' value is over 80000. 
//    -These conditions are not met because 'zip' value is under 80000, and both conditions must be met due to '&&'.-
// 2) 'What are your hobbies?' will disply if either 'isStudent' value equals 'false' OR 'age' value is less than 30. 
//    -These conditions are not met because neither of the OR values are matched; 'isStudent' value is 'true' and 'age' is over 30.-
// 3) 'Welcome to Prime!' will display if 'isStudent' value is 'true'.
//    -These conditions are met, because 'isStudent' value equals 'true'.
// 4) 'How about the weather?' is default message, which will display if none of the conditions for first 3 options are met.
// So, message 'Welcome to Prime!' will display in console log since conditions of first two statements were not met, 
// but were met for third statement. Default statement will not run since a prior statement sastisfied conditions.
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - String values for the colors are transposed. colorOne should be 'blue' and colorTwo should be 'red'.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - As currently written, will only change value for colorOne. To excecute as described, 
// will need a second line for colorTwo under the colorOne line, which should be: colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Descrition calls for both temp AND time values to be true, but '||' is an OR operator; 
// will need '&&' to check that both values are true. Should correctly read ( temp > 39 && time >= 4 )
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - As written, this will return the message 'no entry', because the 'equal to' portion 
// of the current '<=' comparison between 'minAge' and 'age' will match their identical '21' 
// values, thereby meeting conditions for first statement.
// To operate as described, that comparison should omit the '=' to read (minAge < age), so 
// that terms of 'if'  statement are not met, so script will run desired 'else' message.

// FIX, TAKE 2 - Ok, I would change it so that it is the cleanest, simplest, least convoluted 
// for me to read. That would mean making the if statment be (age >= minAge), and changing that 
// result to 'enter', and then making the else statment be 'no enter.'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

