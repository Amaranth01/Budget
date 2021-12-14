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
    //calcul the expenditures
    for (let expend of expenditures) {
        resultExpend += (parseFloat(expend.value));
        console.log(expend.value);
    }
    //calcul the take
    for (let taking of take) {
        resultTake += (parseFloat(taking.value));
    }
    //calcul the sapes
    for (let sapping of sapes) {
        sapesResult += (parseFloat(sapping.value));
    }

    //calcul the final result and import in the HTML
    resultTotal = resultTake  - resultExpend- sapesResult;
    result.innerHTML = resultTotal;
    //condition for look the phrase
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

buttonReset.addEventListener('click', function () {
    window.location.reload();
})