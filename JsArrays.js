//creating
const cars=['audi','BYD','volvo','BMW'];
const car=new Array();
car.push('BMW');
car.push('Tesla');
console.log(car);
const veh=new Array('b','M','W');
console.log(veh);

//index access
console.log(veh.at(1));
console.log(veh.at(-1));
console.log(veh[1]);

//concatination
/*The concat() method concatenates (joins) two or more arrays.

The concat() method returns a new array, containing the joined arrays.

The concat() method does not change the existing arrays.*/
console.log(veh.concat(car));
console.log(veh.concat(car,cars));
const newcars=veh.concat(car,cars);
console.log(newcars)

//print methods
/*The join() method returns an array as a string.

The join() method does not change the original array.

Any separator can be specified. The default is comma (,).*/
console.log(veh.join());

//slicing
/*The slice() method returns selected elements in an array, as a new array.

The slice() method selects from a given start, up to a (not inclusive) given end.

The slice() method does not change the original array. */
console.log(veh.slice(1,-1));
console.log(veh.slice(1,2));

//inserting at position
/*index	Required.
The index (position) to add or remove items.
A negative value counts from the end of the array.
count	Optional.
Number of items to be removed.
item1, ...,	Optional.
The new elements(s) to be added.*/
console.log(cars.splice(2,1,'Tesla','proche'));
console.log(cars);
cars.push('i','9');
console.log(cars);

//creating copies
/*
array.copyWithin(target, start, end)
target	Required.
The index (position) to copy the elements to.
start	Optional.
The start index (position). Default is 0.
end	Optional.
The end index (position). Default is the array length.*/
console.log(cars.copyWithin(3,1,-3));
console.log(cars);

//iterator
const num=["Banana", "Orange", "Apple", "Mango"];
const list=num.entries();
let text = new Array();
for (let x of list) {
  text.push(x);
}
console.log(text);

//every
var ages=[112,35,,34,526,81,23];
for (let i of ages){
    console.log(i);
}
function checkAge(age){
    return age>18;
}
console.log(ages.every(checkAge));

//filter
var ages = [112, 35, , 34, 526, 81, 23];
for (let i of ages){
    if (i>50){
        console.log(i);
    }
}
console.log(ages.filter(x => x>50));

// fill
const arr=[1,2,3,4,5];
arr.fill('1');
arr.fill('2',2,4);
console.log(arr);

//operatation (find)-return the first value to be true
//indexing
var nums=[,12,3,42,3,18,24,2,4,5,98,45];
function check(age){
    return age>18;
}
console.log(nums.find((x)=> x>18?true:false));
console.log(nums.indexOf(3));
console.log(nums.lastIndexOf(3));
console.log(nums.findIndex(check));
console.log(nums.findLast(check));
console.log(nums.findLastIndex(check));


//2d to 1d array
var ar=[1,[2,3,[3,4],3,5,7],[1,2]];
const farr=ar.flat(2);
console.log(ar.length);
console.log(ar.flat());
console.log(ar.flat(2)); // 2 is depth [[]] 1=[], 3=[[[]]]

// falt map
function square(num){
    return num*2;
}
console.log(farr.flatMap(square));
console.log(farr.flatMap((x)=> x*2));

//for each not exectued for emoty cells
const fruits=['a','b','c',,'d'];
var sum='';
fruits.forEach(fun);
function fun(ag){
    sum=sum.concat(ag);
    return sum
}
console.log(sum);

//from
/*Parameter	Description
object	Required.
The object to convert to an array.
mapFunction	Optional.
A map function to call on each item.
thisValue	Optional.
A value to use as thisfor the mapFunction*/
var sum='';
console.log(Array.from('abcd',fun));

//converting
function parse(num){
    return parseInt(num)
}
const n=['1','24','0005','5555'];
console.log(n);
for (let i=0;i<n.length;i++){
    n[i]=parse(n[i]);
}
n.push(9);
console.log(n)


//includes
console.log(n.includes(5)); 
console.log(n.includes(24,2)); // starts searching from index 2

//chec if it is array
console.log(Array.isArray(sum));

//map
console.log(n.map(Math.sqrt));
// we can also pass function
function mul(n){
    return n*10;
}
console.log(n.map(mul));

// creating a new array with of
var y=Array.of('b','c');
console.log(y);//['b]

//pop
console.log(y.pop());
// with is just as inset at index but returns new arra
var y=[1,2,3,4,6]
let yy=y.with(3,6,7) 
console.log(yy);//[1,2,3,6,6]

//valueof
var ar=y.valueOf();
console.log(ar);//[1,2,3,4,6]

//unshift
yy.unshift('2','3');
console.log(yy);//['2','3',1,2,3,6,6]

//shift
yy.shift(); //left pop
console.log(yy);// ['3',1,2,3,6,6] //changes original array

//to string
console.log(y.toString()); // 1,2,3,4,5 (comma seperated)

//revrse
yy.reverse()
console.log(yy)//[6,6,3,2,1,'3']

//to reversed
let ry=yy.toReversed();
console.log(ry); //['3',1,2,3,6,6]

//to sorted
let sy=yy.toSorted();
console.log(sy);//[1,2,3,'3',4,6,6]

console.log(sy.at(-2));

let li=[1,2,3,4,56,7];
li.slice(0,0)=li; // this also works
//li.length=0; // clear the array
console.log(li);