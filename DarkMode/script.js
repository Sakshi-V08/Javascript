let modeBtn1= document.querySelector("#modeBtn1");
let body=document.querySelector("body");
let currMode = "light"; //change into dark

modeBtn1.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode= "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
})