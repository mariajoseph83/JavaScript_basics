let arr = [1, 2, 0,974, 4, 5];
let i=2;
for (let i = 0; i < arr.length; i++) {
    if (i !== 4) {
        process.stdout.write(arr[i] + " ");
    }
}
console.log(i);

for (i in arr){ // i is the index
    console.log(arr[i]);
}

for (i of arr){ // i is value
    console.log(i);
}
arr.forEach(func);
function func(val,idx){
    console.log(val*2);
    console.log(idx);
}
console.log(arr);

//while loop
while (i<6){
    console.log(i);
    i++;
}

i=15
do{
    i--;
    console.log(i);
}
while (i>10);

i=0
//while(undefined); // doesnt execute
while (arr.at(i)!=undefined){ // if ur arrays has no 0 skip !=undefined
    console.log(arr[i]);
    i++;
}

const set=new Set([1,2,3,4,4,6,7,7]);
for (let x of set){
    console.log(x);
}