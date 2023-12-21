const URL ="https://cat-fact.herokuapp.com/facts";
const factPara= document.querySelector("#fact");
const btn=document.querySelector("#btn");



// let promise=fetch(URL);
//console.log(promise);

const getFacts= async()=>{
    console.log("Getting data....");
    let response = await fetch(URL);
    console.log(response);  //JSON format as an object
    let data = await response.json();  //it is used for changing data format into readable dataformat
    factPara.innerText = data[2].text;

};

// By promise chaining
// function getFacts(){ 
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[2].text;
//     })
// }
btn.addEventListener("click",getFacts);