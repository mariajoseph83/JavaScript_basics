// true or false
console.log(10>8); //true

//prototype
Boolean.prototype.myColor=function(){
    if (this.valueOf()==true){
        return 'green';
    }
    else{
        return 'red';
    }
};
let a=true;
let color=a.myColor();
console.log(color);

//to string
console.log(typeof true.toString()); //string


//val of
console.log(true.valueOf()); //true the value of true is true
console.log(false.valueOf()); //false