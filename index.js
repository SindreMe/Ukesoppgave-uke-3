const output = document.getElementById("storyOutput");
//model
let firstWord = "__";
let secondWord = "__";
let thirdWord = "__";
let forthWord = "__";
let fifthWord = "__";
//view
buildStory();

function buildStory(){
    output.innerHTML = `
    Det var en gang en <span id="firstWord">${firstWord}</span> som hadde tre sønner, 
    Per og Pål og Espen Askeladd, 
    men annet enn de <span id="secondWord">${secondWord}</span> sønnene hadde han ikke heller, 
    for han var så <span id="thirdWord">${thirdWord}</span> at han eide ikke nåla på <span id="forthWord">${forthWord}</span>, 
    og derfor sa han titt og ofte til dem, at de fikk ut i <span id="fifthWord">${fifthWord}</span> og se å tjene sitt brød,
    hjemme hos ham ble det så ikke annet enn sveltihjel likevel.
    `;
    
    if(firstWord=="mann"){
        document.getElementById("firstWord").style.color = "#ff6701"
    }

    if(secondWord=="tre"){
        document.getElementById("secondWord").style.color = "#ff6701"
    }

    if(thirdWord=="fattig"){
        document.getElementById("thirdWord").style.color = "#ff6701"
    }

    if(forthWord=="kroppen"){
        document.getElementById("forthWord").style.color = "#ff6701"
    }

    if(fifthWord=="verden"){
        document.getElementById("fifthWord").style.color = "#ff6701"
    }

}
//controller

function chooseFirstWord(choice){
    firstWord = choice.innerHTML;
    buildStory();
}

function chooseSecondWord(choice){
    secondWord = choice.innerHTML;
    buildStory();
}

function chooseThirdWord(choice){
    thirdWord = choice.innerHTML;
    buildStory();
}

function chooseForthWord(choice){
    forthWord = choice.innerHTML;
    buildStory();
}

function chooseFifthWord(choice){
    fifthWord = choice.innerHTML;
    buildStory();
}

function chooseSubmit(choice){
    submit = choice.innerHTML;
    buildStory();
}

function resetButton(){
    firstWord = "__";
    secondWord = "__";
    thirdWord = "__";
    forthWord = "__";
    fifthWord = "__";
    buildStory();
}

