 const btnEle =document.querySelectorAll("button")
 const UserScoreEle = document.getElementById("user-score")
 const CompScoreEle = document.getElementById("Comp-score")
 const resultEle = document.getElementById("result")

let userScore = 0
let compScore = 0



btnEle.forEach((btn)=>{
    btn.addEventListener("click",()=>{
      //  console.log("you clicked on",btn.id);
       // console.log("Computer choice",CompChoice());
        const result =playRound(btn.id, CompChoice())
        // console.log(result);
        resultEle.textContent=result
    })
})


function CompChoice(){
    const choice =["Rock","Paper","Scissor"]
      const randomChoice = Math.floor(Math.random()*choice.length)
       return choice[randomChoice]


}
function playRound(userSelection, CompSelection){
    if(userSelection === CompSelection){
        return "It's a tie! "
    }
    else if(
        (userSelection === "Rock" && CompSelection ==="Scissor") ||
        (userSelection === "Paper" && CompSelection ==="Rock") ||
        (userSelection === "Scissor" && CompSelection ==="Paper") 
    ){
        userScore++
        UserScoreEle.textContent=userScore 
        return `You won! ${userSelection} beats ${CompSelection}`
    }else{
        compScore++
        CompScoreEle.textContent=compScore
        return `You lose! ${CompSelection} beats ${userSelection}`
    }
}
