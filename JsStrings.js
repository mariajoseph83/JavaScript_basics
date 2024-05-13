//creating
var str='hi I am a string ri stri';
var strr="I am in double quotes";
console.log(strr.at(2)); //
console.log(str);
console.log(strr);

let text=`we \\ hi`;
console.log(text);

//length
console.log(str.length);

//char at index
console.log(str.charAt(10)); // s
console.log(strr.charAt(-5)); //-ve idex doesnt work
console.log(strr.charAt(strr.length-5)); // u

//char code at
console.log(str.charCodeAt(10)); // ascie value of s =115
console.log(str.charCodeAt(str.length-4));//ascie value of r=114

//concat
console.log(str.concat(strr)); // we need some space
console.log(strr.concat(" ",str)); //I am in double quotes hi I am a string

//endswith
console.log(strr.endsWith("s"));//true
console.log(strr.endsWith('e',14)); //true // we are checking if 13 is 'e'
console.log(strr.charAt(14-1)==='e'); // true

// 65 => A
console.log(String.fromCharCode(65)); //A
console.log(String.fromCharCode(114)); //r
var num=[23,45,67,89,35];
console.log(String.fromCharCode(65,67,89,33,36)); //ACY!$
//console.log(String.fromCharCode(num)); //not possinle

//check if it includes
console.log(str.includes('h')); //true
console.log(str.includes('h',1)); //false search from index 1

//index and last index of
console.log(str.indexOf('i'));//1
console.log(str.lastIndexOf('i'));//13

//compare
var r='ba'; // modify aa ba and check your self
var c='ba';
console.log(r.localeCompare(c)); //if (r>c) -1 r==c 0 r<c 1 

// searching for word string match
let a=str.match('ri');
console.log(str.match('ri'));
console.log(str.match(/ri/));
console.log(str.match(/ri/g));
console.log(str.match(/ri/gi));
console.log(str.search('ri'));
console.log(/ri/.exec(str));
console.log(/ri/.test(str));
console.log(a);

//repeat
let res=str.repeat(2);
console.log(res);

//replace
var result=str.replace('string','replaced string');
console.log(result);
result=result.replace(/String/g,'nope'); // g is case sensitive
console.log(result);
result=result.replace(/String/gi,'nope'); // g is not case sensitive
console.log(result);
result=result.replace(/String|am|replaced/gi,function(x){
    return x.toUpperCase();
}); // g is not case sensitive
console.log(result);

// trim
let s='           fgdrf        ';
console.log(s.trim()); // removes white spaces
console.log(s.trimStart().length); //removes white spaces at start
console.log(s.trimEnd()); //removes spaces from end

//padding
let ss='8';
console.log(ss.padStart(3,'0')); // pads at start until it reaches until 3
console.log(ss.padEnd(3,'1'));

let sss='1,2,3,4,5,6';
console.log(sss.split(','));
console.log(Number('123.99'));
console.log(Number(true));
console.log(parseInt(1010,2));


