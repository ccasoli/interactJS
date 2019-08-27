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

//by qchuchu
var viewButtons = document.getElementsByClassName('btn-success');
var cardImages = document.getElementsByClassName('card-img-top');
var cardTexts = document.getElementsByClassName('card-text');

var isReduced = Array(viewButtons.length).fill(false);

var reduceCard = function(i) {
  let img = cardImages[i];
  let text = cardTexts[i];
  if (isReduced[i]) {
    isReduced[i] = false;
    img.style.height = "100%";
    img.style.width = "100%";
    text.style.fontSize = "";
  } else {
    isReduced[i] = true;
    img.style.height = "20%";
    img.style.width = "20%";
    text.style.fontSize = "0px";
  }
};
for (let i = 0; i<viewButtons.length ; i++) {
  viewButtons[i].addEventListener("mouseover",function() {
    reduceCard(i);
  });
}

var buttonScrollRight = document.getElementsByClassName('btn-secondary')[0];

var clickScrollRight = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.insertBefore(album.lastElementChild, album.firstElementChild);
}

buttonScrollRight.addEventListener("click", clickScrollRight);

var buttonScrollLeft = document.getElementsByClassName('btn-primary')[0];

var clickScrollLeft = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.appendChild(album.firstElementChild);
}

buttonScrollLeft.addEventListener("click", clickScrollLeft);

var navbarBrand = document.getElementsByClassName('navbar-brand')[0];

var keypressChanges = function(e) {
  let body = document.body;
  let letter = e.key.toLowerCase();
  if (letter === 'a') {
    body.classList.value = "col-4"
  } else if (letter === 'y') {
    body.classList.value = "col-4 offset-4"
  } else if (letter === 'p') {
    body.classList.value = "col-4 offset-8"
  } else if (letter === 'b') {
    body.classList.value = ""
  }
}

navbarBrand.addEventListener('keydown', keypressChanges);