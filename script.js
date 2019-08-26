let foot = document.getElementsByTagName("footer");
let i = 0;
foot[0].addEventListener("click", function(){
    i+=1
    console.log(`clique numero ${i}`);
});

let navCollapse = document.getElementById("navbarHeader");
let navButton = document.getElementsByTagName("button");
navButton[0].addEventListener("click", function(){
    navCollapse.classList.toggle("collapse");
});

let card = document.getElementsByClassName("card");
firstCard = card[0];
secondCard = card[1];

let buttonEdit = document.getElementsByClassName("btn-outline-secondary");
firstButtonEdit = buttonEdit[0];
secondButtonEdit = buttonEdit[1];

firstButtonEdit.addEventListener("click", function(){
    firstCard.style.color = "red";
});

secondButtonEdit.addEventListener("click", function(){
    if (secondCard.style.color === 'green'){ 
        secondCard.style.color = '' ; 
    }else{
        secondCard.style.color = 'green';
    };     
});

let navHeader = document.getElementsByTagName("header");
let checkStyle = document.styleSheets[0];
let j = 0
navHeader[0].addEventListener("dblclick", function(){
    if(j == 0){
        checkStyle.disabled = true;
        j = 1;
    }else{
        checkStyle.disabled = false;
        j = 0;
    }
});
console.log(checkStyle);
