function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log("weather data");
        resolve(200);
       },2000);
    });
}
async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call
} 
//async function
async function hello(){
    console.log("hello");
}
// function asyncFunction1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("sucess");
//         }, 4000);
//     });
// }

// function asyncFunction2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("sucess");
//         }, 4000);
//     });
// }

// console.log("Fetching data1...");  //work as like as callback 
// asyncFunction1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunction2().then((res) => {
//     });
// });


// const getPromise= () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         //resolve("success");
//         reject("network error");
//     });
// };
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

//callback hell

// function getData(dataId, getNextData){
//     //2s
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// ;})


//promises have three state in it 1. resolve 2.Reject 3.fullfilled

// let promises = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     reject("some error occured");
// });

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("some error occured");
// });

// function getData(dataId, getNextData) {
//     //2s
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });

// }

function getData(dataId) {
    //2s
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });

}

//Async await
async function getAllData(){
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
}
 
//IIFE : immediatelt invoked function expression  it execute automatically without typing extra function in console
(async function(){
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);
})();

//Promis chaining
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     });
// });

//or
// console.log("getting data1...");
// getData(1)
// .then((res) => {
//     console.log("getting data2...");
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3...");
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });