class Car{
    constructor(brand){
        this.carname=brand;
        let s=0; // declared
        //console.log(this.carname);
    }
    present(){
        return 'I have a '+this.carname;
    }
}

class Model extends Car{ // made model class as an extention of Car
    constructor(brand,mod){
        let s=0; //declared out the scope
        super(brand); // to access parent parameter or variable
        this.modelname=mod;
        //console.log(this.modelname);
    }
    show(){
        return this.present()+' I have '+ this.modelname;
    }
    static print(){
        return 'This is a static method called print';
    }
}

mycar=new Car('ford'); //simple class
console.log(mycar.present());
myM=new Model('ford','Gt');
console.log(myM.show());
console.log(Model.print());

// static method
class car /*extends Model*/{
    constructor(/*brand,mod,*/name){
        //super (brand,mod);
        this.carName=name;
        let s=`this is the car name ${this.carName}.`;
        console.log(s);
    }
    static hello(){
        return 'No parameters required to call this';
    }
}
pcar=new car('BMW');
console.log(car.hello());
let y=0
console.log(typeof y); // no
y='i';
console.log(typeof y); // string
const cAr = {type:"Fiat", model:"500", color:"white"};
console.log(cAr['type']);
