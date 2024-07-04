// function sm(a,b){
//     return a+b;
// }

// console.log(sm(4,5))

//arrow function part of modern js

// const a=(a,b)=>{
//     return a+b;
// }

// console.log(a(5,9));

// inorder to call arrow function we need to save it in a variable

// let arrowMul=(a,b)=>{
//     return a*b;
// }

// arrowMul=5;
// console.log(arrowMul);
// arrow function variable can also be redefined

// function abc(str){
//     let c=0;
//     for (const i of str){
//         if (i==="a"|| i==="e"||i==="i"||i==="o"||i==="u"){
//             c++;}}
//     return c
//         }
// console.log(abc("xyza"));

// const a =(str)=>{
//     let c=0;
//     for (const i of str){
//         if (i==="a"|| i==="e"||i==="i"||i==="o"||i==="u"){
//             c++;}}
//     return c
// }

// console.log(a("aeiou")); 

// let arr =[1,2,3,4,5];
// console.log(arr.idx(1));
// arr.forEach((element) => {
//     console.log(element);
// });

// let arr=[1,2,3,4,5,6]
// arr.forEach((val)=>{
//     console.log(val*val);
// })


//Another way of passing callback function is

// const calcSquare=(num)=>{
//     console.log(num*num)
// }
// let arr=[1,2,3,4,5,6]
// arr.forEach(calcSquare);

//Map function

// let arr=[1,2,3,4,5]

// let newArr= arr.map((val)=>{
//     return val*val}
// )

// console.log(newArr);

// filter method

// let arr=[1,2,3,4,5,6,7,8]
// let evenArr=arr.filter((val)=> {
//     return val%2===0;}
// )

// console.log(evenArr);

//Reduce

// let  arr =[20,30,40,50]
// const output = arr.reduce((res,val)=>{
//     return res+val;
// })
// console.log(output);


// let  arr =[20,30,40,50]
// console.log(arr.reduce((res,val)=>{
//         return res+val; }))

// let arr =[10,20,30,40]
// console.log(
//     arr.reduce((prev,curr)=>{
//         if (prev>curr){
//             return prev;
//         }
//         else{
//             return curr;}}
// ));


// let students_marks = [95,92,83,47,67,80];

// let toppers = students_marks.filter((val)=>{
//     return val>90;
// })

// console.log(toppers);


// let n=100;
// let arr = [];
// for (let i=1;i<=n;i++){
//     arr[i-1]=i;
// }

// let sum = arr.reduce((prev,curr)=>{
//     return prev +curr;
// });

// let prod = arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(arr);
// console.log(sum);
// console.log(prod);


// function hello(){
//     console.log("hello");
// }

// setTimeout(hello,2000);
// setTimeout(()=> {
//     console.log("hello this is gowtham")
// }
// );

//callbacks in synchronous programming

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// // calculator(1,2,sum);

// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })

//callbacks in asynchronous prgramming

// const hello=()=>{
//     console.log("HEllo ,How are you ?");
// }

// setTimeout(hello,4000);


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{  
//         getData(3)
//       })
// });

// const prompt = require("prompt-sync")();
// let promise= new Promise((resolve,reject)=>{
// console.log("Hey this is promise")
// c=prompt("enter a number")
// if (c%2===0){
//     resolve("even")
// }
// else{
//     reject("error occured")
// }
// })

// promise;
