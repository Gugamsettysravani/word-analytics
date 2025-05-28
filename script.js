const textareaEl=document.querySelector(".textarea");
const characterEl=document.querySelector(".stat__number--characters");
const twitterEl=document.querySelector(".stat__number--twitter");
const facebookEl=document.querySelector(".stat__number--facebook");
const wordEl=document.querySelector(".stat__number--words");
 
textareaEl.addEventListener('input', function(){


const numberOfCharacters=textareaEl.value.length;
let numberofwords=textareaEl.value.split(' ').length;
if(textareaEl.value.length===0){
    numberofwords=0;
};

 characterEl.textContent=numberOfCharacters;
 numberOfNumbersleftontwitter=280-numberOfCharacters;
 numberofelementsleftinfacebook=2200-numberOfCharacters;

wordEl.textContent=numberofwords;
 twitterEl.textContent=numberOfNumbersleftontwitter;
 

if(numberOfNumbersleftontwitter<0){
    twitterEl.classList.add("stat__number--limit");
}else{
    twitterEl.classList.remove("stat__number--limit");
}

 facebookEl.textContent=2200-numberOfCharacters;
 if(numberOfNumbersleftontwitter<0){
facebookEl.classList.add("stat__number--limit");
}else{
    facebookEl.classList.remove("stat__number--limit");
}



});
