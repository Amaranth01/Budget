let expenditures = document.querySelector('#expenditure').getElementsByTagName("input");
let take = document.querySelector('#take').getElementsByTagName('input');
let sapes = document.querySelector('#sapes').getElementsByTagName('input');
let buttonResult = document.querySelector('#resultButton');
let result = document.querySelector('#result');
let phrase = document.getElementById('phrase');
let buttonReset = document.querySelector('#reset');

let resultTotal;

//initialize button for calculate the final result
buttonResult.addEventListener('click', function () {

    //Variable for the base of the result
    let resultExpend = 0;
    let resultTake = 0;
    let sapesResult = 0;

    //a for loop to calculate each result of div
    for (let expend of expenditures) {
        resultExpend += (parseFloat(expend.value));
        console.log(expend.value);
    }

    for (let taking of take) {
        resultTake += (parseFloat(taking.value));
    }

    for (let sapping of sapes) {
        sapesResult += (parseFloat(sapping.value));
    }

    resultTotal = resultTake  - resultExpend- sapesResult;
    console.log(resultTotal);
    result.innerHTML = resultTotal;
    console.log(resultTake, resultExpend, sapesResult);

    if (resultTotal > 0) {
        phrase.innerHTML = 'Félicitations ! Vous pouvez vous acheter un jeu, ou une nouvelle voiture !';
        phrase.style.color = "darkgreen";
        phrase.style.fontWeight = "bold";
    } else {
        phrase.innerHTML = 'Il va falloir penser à manger des pâtes...';
        phrase.style.color = 'red';
        phrase.style.fontWeight = 'bold';
    }


})