/*//Arthermetic operators
console.log(2+3);
console.log(5-7);
console.log(7*9);
console.log(5**3);
console.log(9.0/9.0);
console.log(3%7);
var a;
a=9;
console.log(a++);
console.log(a--)
console.log(--a);
console.log(++a)
*/

/*// Assignment operators
let a=8;
let b=5;
a+=7;
console.log(a);
b-=4;
console.log(b);
b*=9;
console.log(b);
a/=2;
console.log(a);
a%=2;
console.log(a);
let dict={a:9,b:7};
console.log(dict.a,dict.b);*/

/*// operations on strings
let a='abc';
let b='def';
console.log(a+b);
b+=b
a+=b
console.log(a)*/

//Comparision operators

/*let a=8;
let b='8.0';
console.log(a==b);
console.log(a!=b);
console.log(a===b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
*/

/*//Ternary operator
let a=9,b=9,c=10;
console.log((b==10)? a:c);
*/

//Logical operators
/*let b=0;
let a=9;
console.log(9==='9');
console.log(a>9 && b==0);
console.log(a==10 || b==0);
console.log(a=='9' && b=='0');
console.log(a==='9' || b==='0');
console.log(!(a===9));*/

/*let nam='ji';
let txt='hii';
let result = nam ?? txt; // assings first if not null or assings other
console.log(result);
console.log(typeof nam);
console.log(typeof [1,2,34]);*/

console.log(~66);
console.log(5>>1);
const v={age:'2','3':'3',5:'5'};
delete v[3];
console.log(v);

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
console.log(q1.concat(q2));

const numbers=[1,2,3,4,56,6];
let maxval=Math.max(...numbers);
console.log(maxval);

const person = {firstName:"John", lastName:"Doe", age:50};
console.log("firstName" in person);
console.log("age" in person);
console.log("PI" in Math);
console.log("NaN" in Number);
console.log("length" in String);

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars instanceof Array)   // Returns true
console.log(cars instanceof Object)  // Returns true
console.log(cars instanceof String)  // Returns false
console.log(cars instanceof Number)  // Returns false