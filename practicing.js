
let y=0
console.log(typeof y); // no
y='i';
console.log(typeof y); // string
const cAr = {type:"Fiat", model:"500", color:"white"};
console.log(cAr['type']);
console.log(9**9);
console.log(10<9?10:9);
console.log(~6);
console.log(Math.pow(3,5));
const car={}
car['pip']=9;
if (!car.hasOwnProperty('pip')){
    car['pip']=1;
}
else{
    car['pip']+=1;
}
console.log(car);