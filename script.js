const letterpage= document.querySelector(".letter-page");
const homepage= document.querySelector(".home-page");
const waxSeal= document.querySelector(".wax-seal");
const opennedletter= document.querySelector(".openned-letter");
const envelope=document.querySelector(".envelope");
const closeenvelope= document.querySelector(".close-envelope");
const music=document.querySelector("#hp-music");

waxSeal.addEventListener("click" ,function(){
    envelope.classList.add("show");
    opennedletter.classList.add("show");
    closeenvelope.classList.add("show");
});

closeenvelope.addEventListener("click" ,function(){
    envelope.classList.add("hide");
    letterpage.classList.add("hide");
    letterpage.style.display="none";
    homepage.classList.add("show");
    music.play();

});
