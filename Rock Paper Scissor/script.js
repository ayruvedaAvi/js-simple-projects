// Essential varaibles

let userScore=0;
let botScore=0;
const user_span= document.getElementById("user-score");
const bot_span= document.getElementById("bot-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result > h1");
const r_button=document.getElementById("rock-choice");
const p_button=document.getElementById("paper-choice");
const s_button=document.getElementById("scissor-choice");

// adding events to the choices

r_button.addEventListener('click',function(){
    //console.log("rock is clicked");
    process("rock");
});
p_button.addEventListener('click',function(){
    //console.log("Paper is clicked");
    process("paper");
});
s_button.addEventListener('click',function(){
    //console.log("Scissor is clicked");
    process("scissor");
});

//defining a function that generates bot choices

function getRandomChoice(){
    const choices=['rock','paper','scissor'];
    const randomNum=Math.floor(Math.random()*3);
    return choices[randomNum];
}
//console.log(getRandomChoice());

//defining the game function called process
function process(user_choice){
    //console.log(user_choice);
    let bot_choice=getRandomChoice();
    switch(user_choice+bot_choice) {
        //user win cases:
        case "rockscissor":
        case "scissorpaper":
        case "paperrock":
            //console.log("USER WINS");
            hugeW(user_choice,bot_choice);
            break;
        //bot win cases:
        case "scissorrock":
        case "paperscissor":
        case "rockpaper":
            //console.log("BOT WINS");
            hugeL(user_choice,bot_choice);
            break;
        //draw cases:
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            //console.log("DRAWWW");
            draw(user_choice,bot_choice);
            break;
    }
}

//When user wins
function hugeW(uc,bc){
    //console.log("W");
    userScore++;
    user_span.innerHTML=userScore;
    ucc="you".fontsize(3).sup();
    bcc="bot".fontsize(3).sup();
    result_div.innerHTML=uc +ucc+" beats "+bc+bcc+". You win.";
    result_div.style.color="green";
}

//when bot wins
function hugeL(uc,bc){
    //console.log("L");
    botScore++;
    bot_span.innerHTML=botScore;
    ucc="you".fontsize(3).sup();
    bcc="bot".fontsize(3).sup();
    result_div.innerHTML=uc +ucc+" is beaten by "+bc+bcc+". You loose.";
    result_div.style.color="brown";
}

//when draw
function draw(uc,bc){
    //console.log("DRAW");
    ucc="you".fontsize(3).sup();
    bcc="bot".fontsize(3).sup();
    result_div.innerHTML=uc +ucc+" and "+bc+bcc+". Its a draw.";
    result_div.style.color="cyan";
}



