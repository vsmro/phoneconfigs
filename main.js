//input field for numbers bigger than 5. and a button Continue
//If mistake messaje try again, if success continue
// tablou with phone configuration
//each config: model, pret, constructor, memory
//After Continue zone with add new phone configs
//Click Add after each new config
//Display button appaears after the added confisg reaches the number from the input type
//After click display, the phone configs will appear in the console.


let divConfig = document.getElementById("config");
let alertMessage= "The number you have entered is less than 5";
let tablou = [];

//function to add class to remove AddButton
function addClass() {
    let divAddBtn = document.getElementById("divAddBtn");
    divAddBtn.classList.add("btnDisplay");
}

//function to remove class from div
function removeClass() {
    let divConfig = document.getElementById("config");
     divConfig.classList.remove("config");
    
}

//function to remove class from button Display
function removeClassB() {
    let btnDisplay = document.getElementById("btnDisplay");
     btnDisplay.classList.remove("btnDisplay");
    
}
/* 

//REFACTOR METHODS REMOVECLASS A/B!!! BOTH MAKE THE SAME TASK
    function removeClass(htmlElement, className) {
        htmlElement.classList.remove("className");
    }
*/

//get the number from input field
function getValue() {
    let input = document.getElementById("inputNo").value;
    return input;
}



function checkInput() {
   
    if(getValue() > 5 ) {
        removeClass()
     } else {
        alert(alertMessage)
        location.reload()
     }
}
    
//function to add new cofig to the tablou array/object
function addConfig() {
    
    let model = document.getElementById("model").value;
    let pret = document.getElementById("pret").value;
    let constructor = document.getElementById("constructor").value
    let memory = document.getElementById("memory").value
    let value = getValue();
    //create a config
    let config = {
        model:model,
        pret: pret,
        constructor: constructor,
        memory: memory  

    }
    
            
    tablou.push(config);
    

    if(tablou.length == value) {
        
        removeClassB();
        addClass();
        
    }

   

}
//display the array in conole.log
function displayConfigs() {
    console.log(tablou);
}



 