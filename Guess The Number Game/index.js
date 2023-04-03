let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let div = document.getElementById("game");
let chance = 10;
let guessed_num = [];
let answer = Math.floor(Math.random() * 50) + 1; 
console.log(answer);
msg2.textContent = "Number of chance to guess : " + chance;
function play(){
    let guess_num = Number(document.getElementById("guess_num").value);
    if(guess_num < 1 || guess_num > 50){
        alert("Number should be between 1 - 50!")
    }else if(guess_num > answer){
        msg1.style.backgroundColor = "rgb(68, 24, 24)";
        msg1.textContent = "Your number is too high !";
        chance--;
        msg2.textContent = "Number of chance to guess : " + chance;
        guessed_num.push(guess_num);
        div.classList.add("wrong");
        msg3.textContent = "Number of guess are : " + guessed_num;
        document.getElementById("guess_num").value = "";
    }else if(guess_num < answer){
        msg1.style.backgroundColor = "rgb(68, 24, 24)";
        msg1.textContent = "Your number is too low !";
        chance--;
        msg2.textContent = "Number of chance to guess : " + chance;
        guessed_num.push(guess_num);
        msg3.textContent = "Number of guess are : " + guessed_num;
        div.classList.add("wrong");
        document.getElementById("guess_num").value= "";
    }else{
        msg1.style.backgroundColor = "green";
        msg1.style.borderRadius = "10px";
        msg1.style.margin = "auto";
        msg1.style.marginTop = "20px";
        msg1.style.width = "350px";
        msg1.textContent = "Congratulation  You won this game !"
        div.classList.add("true");
    }

    if(chance <=  0){
        document.querySelector(".btn-guess").disabled = true;
        alert("Your chance is empty! Please restart the game");
        restart();
    }
}
function restart(){
    msg1.style.backgroundColor = "rgb(68, 24, 24)";
    answer = Math.floor(Math.random() * 50) + 1; 
    document.querySelector(".btn-guess").disabled = false;
    console.log(answer)
    document.getElementById("guess_num").value = "";
    div.classList.remove("wrong");
    div.classList.remove("true");
    msg1.textContent = "Your game is successfully restart ! ";
    chance = 10;
    msg2.textContent = "Number of chance to guess : " + chance;
    guessed_num = [];
    msg3.textContent = "Number of guess are : " + guessed_num;
}