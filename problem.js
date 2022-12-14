// !problem = 1
/* - [ ]  ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো। */

const alu = 'alu vorta';
let blue = 'alu vorta';
console.log(alu);
console.log(blue);




// !Problem = 2
/* - [ ]  ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। 

সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও।

একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */


const object = {
    mark: 10,
    name: "alu",
}



let string = `this is template ${object.mark}  name  ${object.name}`
console.log(string);



// !problem 3
/* - [ ]  ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো।
 এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। */

const arrow = (a)=>{

    return a/5;
}
console.log(arrow(10));


// !problem 4
/* - [ ]  ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে।

সেই ফাংশনের ভিতরে কাজ হবে।
 প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 
 
 ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */

const arrow2 = (a,b)=>
{
   a1 =   (a+2);  
   b1 =   (b+2);
   
   return a1 * b1;
}


console.log(arrow2(12,23));



// !problem 5

/* - [ ]  ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। 

যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে। */

const arrow3 = (a,b,c)=>
{
    return a*b*c;
}
console.log(arrow3(11,22,33));



// !Problem 6
/* - [ ]  ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে।
ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। 
সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। 

ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */
const arrow4 = (a,b)=>
{
    while(a>b)
    {
        a +=2;
        b +=2;
         console.log(a*b);
    }
}
// arrow4(12,2);



// !Problem 7
/* 
- [ ]  ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। */


/* // Normal Function
let add = function (num1, num2) {
    return num1 + num2;
    }
    
    // Arrow Function
    let add = (num1, num2) => num1 + num2;
 */


/* - [ ]  ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? */




// !Problem 8

/* - [ ]  ৫. অনেকগুলা সংখ্যার একটা array হবে।
 তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। 
 প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

const  arr = [11,22,3,3,4,5];

value = arr.map(item=> item*5);

console.log(value);


// !problem 9
/* - [ ]  ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */

value2 = arr.filter(item=> item%2);
console.log(value2);




//! Problem 10
/* - [ ]  ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।\ */

let object3 = [
    {potato: 'price', price:400},
    {mango: 'price', price:500},
    {banana: 'price', price:5000},
]
const value3 = object3.find(item=> item.price === 5000);
console.log(value3);





/* - [ ]  ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। */

// Map loops all element of an array and give it to back to array with any condition for each element...

// ForEach doesn't give result back like an array but we can use it to do operation for each item and push into the array or anywhere...

// Filter really cool... filter only store values are true or false inside an array...


// find also work like filter but it start from zero index in a array and whever he got his given condition are correct he stop the work and give it back the conditional true value...



// !Problem 11`
/* 
- [ ]  ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */


const objcet6 = {
    apple : "apple",
    banana: "banana",

    
}

const object7 = [
    {apple: 10, book:5},
    {
        apple:5, book:10}
    
];


let {apple,banana} = objcet6;

console.log(apple,banana);





// !Problem 12
/* - [ ]  ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring 
করে 'three' নামক একটা ভেরিয়েবল এ রাখবে। */

let x1 = [112,233,444,55]

const [aa,bb,cc] = x1;

three = cc;

console.log(three);






// !Problem 13
/* - [ ]  ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। */

const x2 =(a,b,c = 7) => {
    return a+b+c;
}

console.log(x2(1,2));




// !Problem 14
/* - [ ]  ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        arr: [11,22,334,455,4]
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };


  console.log(myStorage.car.inside.arr);



// !Problem 15
/* - [ ]  ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */


  console.log(myStorage.carr?.outside.trunk);


