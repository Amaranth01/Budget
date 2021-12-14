let expenditures = document.querySelector('#expenditure').getElementsByTagName("input");
let take = document.querySelector('#take').getElementsByTagName('input');
let sapes = document.querySelector('#sapes').getElementsByTagName('input');
let buttonResult = document.querySelector('#resultButton');
let result = document.querySelector('#result');
let phrase = document.querySelector("#phase")
let buttonReset = document.querySelector('#reset');

//Variable for the base of the result

let resultExpend = 0;
let resultTake = 0;
let sapesResult = 0;

//a for loop to calculate each result of div
for (let expend of expenditures) {
    resultExpend = (parseFloat(expend.value));
}

for (let taking of take) {
    resultTake = (parseFloat(taking.value));
}

for (let sapping of sapes) {
    sapesResult = (parseFloat(sapping.value));
}

let resultTotal;


//initialize button for calculate the final result
buttonResult.addEventListener('click',function () {
    result = ((resultTake) - (resultExpend) - (sapesResult));
    result.innerHTML = result.value;
    console.log(result)
    if (result > '0') {
        phrase.innerHTML = 'Félicitations ! Vous pouvez vous acheter un jeu, ou une nouvelle voiture !';
    }
    // else {
    //     phrase.innerHTML = 'Il va falloir penser à manger des pâtes...';
    // }
})