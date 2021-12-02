*Data Types In Javascript*
 var
 

var PrimitiveData = undefined;
console.log(PrimitiveData == NaN);
console.log(typeof PrimitiveData);

var fun = function (x) {
    return x;
}
console.log(fun(6));
console.log(typeof fun == 'function');
var obj = {
    Name: "Ragab",
    Age: 12,
    Fun: function () {
        return this.Age;
    }
}
console.log(typeof obj == "object");
console.log(typeof obj.Fun == 'function');
console.log(typeof obj.Name == 'string');

//Block Scope
 //If-the 
  if(boolean Experssion){// block scope}
  if()-the-else
  if()-then-else if()
  switch-case...
  {
  }
 
/// Function Scope 

  function Func(){
    // block scope
  }
//
var IsInt = prompt("Please Enter Number:", 12);
if (0) {
    IsInt = 50;
}
console.log(typeof IsInt);

if (0) {
    IsInt = 20;
} else if (1) {
    IsInt = 60;
}
console.log(IsInt);
switch (IsInt) {
    case IsInt:
        IsInt = 90;
        break;
    default:
      alert("You!!")
}
console.log(IsInt);

{
    IsInt = 4;
}
console.log(IsInt);
function Text() {
    IsInt = 30;
}
var IsInt = 20;
console.log(IsInt);
IsInt = 30;
console.log(IsInt);
IsInt = "Ragab Muhamed Ragab";
console.log(IsInt);
var IsInt = 67;
console.log(IsInt);
let Val = true;
console.log(typeof Val);
var Val = "Ragab Muhamed Ragab";
function Add(){
    var  Val = 12;
}
console.log(Val2);

if (1) {
    let Val = 12;
}
console.log(Val);

function Sum() {
    let val = 90;
}
console.log(val);
let x = 0;
 x = "Ragab";
console.log(x);

if (1) {
    const x = 12;
}
console.log(x);

function add() {
    const x = 9;
}
console.log(x);
const x = 9;
 x = "Ragab";
console.log(x);
const Arr = [1, 2, 3, 4];
Arr = [5, 6, 7];
let x = 0;
if (1) {
  let x = 8;
}
console.log(x);
let i = 9;
function myfunction() {
    i = 92;
}
console.log(i);

if (1) {
    let i = 0;
}
console.log(i);
Statement in Javascript

 If-then

 * if(boolean Experssion)
 * {
 *    //Statements
 * }
 * if Boolean Experssion Is True Then Execute Body Of if,Otherwise Ca'nt Execute
 * /
if (1) console.log("if-then");


if (0) 
    console.log("if body");
 else  
    console.log("else if body");
var i = 1;
switch (3) {
    case i:
        console.log("case 1");
        break;
    case i:
        console.log("case 2");
        break;

}

var r=function Retreive(a) {
    if (a > 0) {
        return "Positive";
    } else {
        return "Nagitive";
    }   
}
console.log(new Boolean(false));
if (x = 9) {
    console.log("ok");
}
switch (19) {
    default:
        console.log("kjh");

    case 1: {
        console.log("kk");
        break;
    }
}
var val = prompt("Enter Number");

if (parseInt(val) > 0)
    console.log("Okay");
else
    console.log("No!!!!");
console.log(typeof val);

console.log(6 && 0);
console.log(8 || 4);
console.log(5 == '5');//true
console.log(0==='0');//false
console.log(true == 'true');  // false
console.log(NaN == 'NaN');   // false
console.log(undefined == 'undefined');  // false
console.log(null == 'null'); // false
console.log(false == 'false'); // false
console.log(false === false);
console.log(5!='5');
console.log('22' == '2');
console.log('122'=='12');
console.log(8 & 3)
console.log((100).toString(16));
console.log(parseInt("144", 2))
let x = "12.33";
console.log(parseFloat(x));
console.log(typeof x);
console.log(8 >>> 2);
console.log(Math.pow(2, 2));
console.log(Math.ceil(2.3));
console.log(Math.max(...[1, 2, 3, 4, 5]));
console.log(Math.round(2.4));
let x = [1, 2, 3];
let y = ["R", "A", "b", "C"]
console.log(Math.fround(7.6));
console.log(Math.PI);
let name = "Ragab";
console.log(name);
console.log(name.length);
console.log(name.sub)
console.log(name.charAt(0));
console.log(name.charCodeAt(8));
console.log(name.charCodePoint(8));
var x;
console.log(5 + x);
console.log(name.concat("rAGAV","Eslam"));
for (var i = 0; i < name.length; i++) {
    console.log(`${name[i]}=>${name.charCodeAt(i)}`);
}
console.log(name.charCodePoint(0));
console.log(name.indexOf('m'));
console.log(name.lastIndexOf('m',15));
console.log(name.substring(1,1));
console.log(name.slice(-3, -1));
if (1) {
    let i = 9;
}
console.log(i);

let name = "Hi, my name is Sam!   ";
console.log(name.replace('my','R'));
console.log(name.includes("z"));
console.log(name.startsWith('H'));
console.log("#".repeat(10));
console.log(name.valueOf());
console.log(name +"-");
console.log(name.trimStart()+"-");
let str = "IJava Love javascript";
//console.log(str.match(/Javga/ig).length);
console.log(str.split(/\s/));
let str = "RagAb Muhamed Ragab";
console.log(str.search(/ah/ig));
let str = "3-12-3455";
console.log(str.replace(/-/g,':'));
let s1 = 'Their artwork is exceptional'
let s2 = 'one plus two is not three'
let s3 = 'TRUSTWORTHY'
const Part1 = /two/i;
console.log(`Part 1 =>${Part1.test(s1)}`);
console.log(Part1.exec(s2));
console.log(s3.match(Part1));
let ip = 'They ate 5 apples and 5 oranges';
console.log(ip.replace(/5/g, 'Five'));
let ip = 'This note should not be NoTeD'
console.log(ip.replace(/not/gi,'X'));
let purchases = `items qty
apple 24
mango 50
guava 42
onion 31
water 10222222222
2222222222
2222222`;
const Regex = /2/mg;
console.log(purchases.replace(Regex,"Two"));
let ip = 'start address: 0xA0, func1 address: 0xC0'
const Regex1 = /0xA0/;
const Regex2 = /0xC0/;
console.log(ip.replace(Regex1, "Hexdecimal1").replace(Regex2,"Hexdecimal"));


let s1 = 'creed refuse removed read'
let s2 = 'refused reed redo received'
const Regex = /(refuse|read|redo)/g;
console.log(s1.replace(Regex, "X"));
console.log(s2.replace(Regex, "X"));


let str1 = 'plate full of slate';
let str2 = "slated for later, don't be late";
const Regex = /(slate|plate|later|late)/g;
console.log(str1.replace(Regex,"X"));
let x = "12335667";
console.log(x.match(/[0-9]/g));
let str1 = '(9-2)*5+qty/3';
const r = /\(9\-2\)\*5/g;
console.log(str1.replace(r,"Ragab"));
let s1 = '2.3/(4)\\|6 foo 5.3-(4)\\|';
const Regex = /\(4\)\\\|/g;
console.log(s1.replace(Regex,"Done"));
let ip = '123\b456'
const Regex = /\x08/g;
console.log(ip.replace(Regex," "));
let ip = 'th\\er\\e ar\\e common asp\\ects among th\\e alt\\ernations'
const Regex = /\\e/g;
console.log(ip.replace(Regex,"RRR"));
let ip = 'a+42//5-c pressure*3+42/5-14256';
const Regex = /(42\/\/5|42\/5)/g;
console.log(ip.replace(Regex,"RRRRRRRRRRR"));
let str1 = 'a+b(addition)';
const Regex = /\(.*?\)/
console.log(str1.replace(Regex,"h"));
let s2 = 'always test your regexp for corner\ncases'
const Regex = /test(.|\\n)gm;
console.log(s2.replace(Regex,""));
const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const Regex = /\d/g;
console.log(ex2);
const ex3 = 'The salad costs $9.99';
const Regex = /\$/g;
console.log(ex3.replace(Regex,""));
const ex4 = 'Contact customer support on 0800 300 500';
const Regex = /\d/g
console.log(ex4.replace(Regex,""));
const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
const Regex = /\w+@\w+\.(com)$/gi;
console.log(ex5.replace(Regex,"Email"));
let Arr = [1, 2, 3, 4];
console.log(Arr);
let arr1 = new Array(4);
arr1.push(3);
arr1.push("33");
//console.log(arr1);
let arr = new Array(1, "Rgaba", true);
console.log(arr);
const Arr = [1, "Ragab", 0];
Arr[0] = "hh";

console.log(Arr);

////console.log(Arr.copyWithin(1,0,3));
////let Arr2 = Arr.entries();
////for (var i of Arr2) {
////    console.log(i);
////}

console.log(Arr.every(val => val >= 1));
console.log(Arr.fill(1,0,2));
console.log(Arr.copyWithin(1,0,3));
let Arr2 = Arr.filter(val => val > 3);
console.log(Arr2);
let Arr2 = Arr.find((val, index) => index % 2 == 0);
//console.log(Arr2);
let i;
console.log(i+8);

const Arr = ["Ragga", "RGAJHAa", "AA", 4, 5];
Arr.forEach((val, index) => {
    console.log(val+'\n')
});
console.log(Arr);
//console.log(Object.keys)
//console.log(Arr.join(""));
console.log(Arr.map(val => val>3));
console.log(Arr.filter(val => val.length));
console.log(Arr.reduceRight((p, c) => p + c));
console.log(Arr.reverse())
console.log(Arr.sort());
console.log(Object.values(Arr));
let x = "Rgab";
console.log(Array.from(x));
let Arr = [1, 2, 3, 4];
for (var item in Arr) {
    console.log(Arr[item]);
}
console.log(Arr);
const obj = {
    Name: "Ragab",
    Age: 21,
    fun: function () {
        return this.Name + this.Name;
    }
}
for (var i in obj) {
    console.log(typeof obj[i]);
}
console.log(typeof obj);
console.log(typeof true);2*2*2
const Arr =
    [1, 2, 3, 4
    ];

for (var item of Arr) {
    console.log(Arr[item]);
    /*
     * 1,2,3,4
     * Arr[1]=2
     * Arr[2]=3
     * Arr[3]=4
     * Arr[4]=undefined
     * 
     * 
     * */
}
const obj = {
    Name: "Ragab",
    Age: 21,
    Run() {
        return this.Name + this.Age;
    },
};
for (var i of obj) {
    console.log(obj[i]);
}
const Arr = [1, 2, 3, 4];
Arr.forEach((val, index) => {
    if (index % 2 == 0)
        console.log(`${val} + ${index}`);
})
const obj = {
    Name: "Ragab",
    Age: 20,
};

let Result;
var val;
Result = null +9 ; 
console.log(Result);
let R = Number(undefined);
console.log(R);
console.log([] == []);
console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);







function Fun() {
    console.log (typeof window);
    console.log(typeof this );
}
Fun();
(function () {
    console.log(true);
})();
console.log(Hello("Ragab"));
console.log(Hello.name);
function Hello(name) {
    return `Hello3 ${name}`;
}
function Fact(n) {
    if (n == 0)
        return 1;
    else
        return n * Fact(n - 1);
}
console.log(Fact(5));
((function (n) { return n })(2)).name;
let x = 9;
function fun(x) {
    "use strict"
    console.log(this == window);
   
}
fun(5);
console.log(x);]
function* Get() {
    var n = 0;
    wh (true) {
        yield n++;
    }
}

var i = Get();
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next().value);
console.log(i.next(z).value);




function* indexGenerator() {
    var index = 0;
    while (1) {
        yield index++;
    }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
console.log(g.next().value); // => 1
console.log(g.next().value); // => 1




function Adds(...rest) {
    for (var item of rest ) {
        console.log(item);
    }
}
Adds(1,2,3,4,5)
 closures
function A() {
    var i = 4 // Lexical Variable /Scope
    function B() {
        console.log(i + 1);
    }
    B();
}
A();
function A() {
    console.log("outer");
    return function () {
        return "hello";
    }

};
let x = A();
console.log(x());
const Arr = [];
for (var i = 0; i < 3; i++) {
    Arr[i] = function () {
        console.log("Function " + i);
    }
}
for (var i = 0; i < 3; i++) {
    Arr[i]();
}
function A() {
    function B() {
        console.log("Inner");
    }
    return B()
}
console.log(A());
function Add(t) {
    alert(5 + 4+t);
}
a = "Hello";
console.log(a);
const a;

console.log(A());
let A=function () {
    return "hello";
//}
//sum(3, 2)
//var sum=function (A, B) {
//    console.log(A+B);
//}

// finished Js basic
