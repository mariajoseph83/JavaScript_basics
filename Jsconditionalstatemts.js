//if (condition) {
//    block of code to be executed if the condition is true
//  }

let a=9;
b=9;
if (a>b){
    console.log(`${a} is greater than ${b}`);
}

/*if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}*/

if (a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}

//elif
if (a>b){
    console.log(`${a} is greater than ${b}`);
}
else if(a<b){
    console.log(`${b} is greater than ${a}`);
}
else{
    console.log(`${b},${a} are equal`);
}

//switch
let x=0
switch('2'){ //it uses (===) to find case so it should be same type
    case 0:
        console.log(`The value of x is ${x}`);
        console.log('We need to break for every case if we dont all cases will be execute');
        break;
    case 2:
        console.log('if u want to put same for 2 and 1 u can avoid break');
        console.log('|| or operator doesnt work 3||1 will consider as 3');    case 1:
    case 1:    
        console.log('after point of execution no other cases will be executed');
        console.log('The case operator doesnt require {}');
        break
    default:
        console.log(x);
        console.log('If the cases dont execute this default will be executed');
        console.log('default case can be at first it wrks perfectly fine');
}

//try catch
try {
    // Code that might throw an error
    let result = 10 / 0; // This will throw a division by zero error
    console.log("Result:", result); // This line won't be executed
} catch (error) {
    // Code to handle the error
    console.log("An error occurred:", error.message);
} finally {
    // Code that will always execute, regardless of whether an error occurred or not
    console.log("Finally block executed");
}
