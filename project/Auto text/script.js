const containerEl = document.querySelector(".container");

const career = ["Youtuber","web developer","freelancer","Instructor"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
     characterIndex++;
    containerEl.innerHTML = `<h1>
        I am ${career[careerIndex].slice(0,1)==="I"? "an":"a"} ${career[careerIndex].slice(0,characterIndex)
        }</h1>`;
   
    setTimeout(updateText, 400);
    if (characterIndex===career[careerIndex].length){
        careerIndex++;
        characterIndex =0;
    }

    if (careerIndex=== characterIndex.length){
        careerIndex=0;
    }
}
