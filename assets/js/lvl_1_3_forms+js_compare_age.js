

function subNum(){
    let inputNumOne = document.getElementById('numOne').value;
    let inputNumTwo = document.getElementById('numTwo').value;

    let result = inputNumOne - inputNumTwo;
    console.log(result);
    document.getElementById('p').innerHTML = "Die Diffenrenz ist: "+ result;
}

