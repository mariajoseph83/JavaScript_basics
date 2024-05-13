const fruits=new Map([
    ['apple',500],
    ['banana',300],
    ['oranges',200]
]);
console.log(fruits);

//set operator
const car=new Map();
car.set('ford',200);
car.set('BMW',500); // assigns the value
car.set('Lambo',350);
console.log(car);

//get
console.log(car.get('ford')); //200
console.log(car.get('Honda')); //undefined

//type
console.log(typeof car); // object

//size
console.log(car.size); //3

// delete
car.delete('ford'); //
car.delete('Ford'); // no error
console.log(car);

//clear 
car.clear();
console.log(car);

//has
console.log(fruits.has('apple'));//true
console.log(fruits.has('apples'));//False

//List the entries using for each
var text='';
fruits.forEach(function(value,key){
    text+=`${value}=>${key} `;
})
console.log(text);

//entries using entries()
var text='';
var list=[];
for (var x of fruits.entries()){
    list.push(x);
    text+=x;
}
console.log(text);
console.log(list);

//keys
var keys='';
for (var key of fruits.keys()){
    keys+=key;
}
console.log(keys); // apple banana oranges

//values
var values=''
for (var value of fruits.values()){
    console.log(typeof value);
    value+=values
}
console.log(values); // 500 300 200

//size
car.set('ford',66);
console.log(car.size);

// dictionary
let dict={};
dict['hi']=0;
console.log(dict);
dict['bye']=1;
console.log(dict[0]);
console.log(dict);
console.log(dict.length); // not applicable to dictionarry
for (let val in dict){
    if (dict.hasOwnProperty(val)){
        console.log(val);
    }
}

for (let x of Object.entries(dict)){
    console.log(x);
}