let set=new Set([1,2,3,4,58]);
for (let x in set){
    console.log(set[x]); // even though sets are ordered we cant access
}

for (x of set){
    console.log(x); // prints the array in order
}
set.add(0);
set.add(9);
for (x of set){
    console.log(x); // prints the array in order
}

//size
console.log(set.size); //7

// values
let values=set.values();
console.log(values);
let lset=[...values];
console.log(lset);
console.log(lset['0']);

//for each
values=[1,2,3,3];
let text='';
function fun(x){
    text+=x+' ';
}
values.forEach(fun);
console.log(text);

//keys
text='';
for (const x of set.keys()){
    text+=x+' ';
}
console.log(text);

//entires // enumerate in python
text='';
for (const x of set.entries()){
    text+=x.at(1)+' ';
}
console.log(text);

//clear
let set2=new Set([1,2,3,4])
set2.clear()
//set2.length=0; //this will not work
//set2.size=0; this doesnt work
console.log(set2); //{}

//delete
set.delete(0);
console.log(set);

console.log(set.has(8));