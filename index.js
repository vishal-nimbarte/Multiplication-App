const num1 = Math.ceil(Math.random()*30)
const num2 = Math.ceil(Math.random()*30)

// Math.random() funtion genrated the differnt differnt
// number.
// Math.ceil() function only integer value stored


const quetionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input")
const formE1 = document.getElementById("form")
const scoreE1 = document.getElementById("score")

//local storage concept
/////////////////////////////////////////////////////////////////////
let score = JSON.parse(localStorage.getItem("score"));//how many score are contain in the local storeg they are cheack

if(!score){
    score = 0;
}

scoreE1.innerText = `score: ${score}`
/////////////////////////////////////////////////////////////////////
quetionE1.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;

formE1.addEventListener("submit",()=>{
    
    if(inputE1.value!=0)
    {
        const userAns = +inputE1.value //after write the + inputE1.value then string converted to the number
        // console.log(userAns,typeof userAns);
        if(userAns===correctAns)
        {
            score++;
            // console.log(score);
            updateLocalStorage()
        }
        else 
        {
            score--;
            // console.log(score);
            updateLocalStorage()
        }
   }
   else 
   {
    alert("Please Enter Your Answer..!");
   }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}


