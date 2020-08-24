//Hidden Output Area
document.getElementById('outputAll').style.visibility = 'hidden'

//Create Input value
let inputKG = document.getElementById('inputKG');

//Function Event
inputKG.addEventListener('input', function(e) {     
    //Visible Area  
    document.getElementById('outputAll').style.visibility = 'visible';    

    //input = kilogram
    let kg = e.target.value;

    //Gram
    let gram = kg * 1000;
    document.getElementById('gram').innerHTML = gram;

    //miliGram
    let miliGram = kg * 1e+6;
    document.getElementById('miliGram').innerHTML = miliGram;

    //Microgram
    let microGram = kg * 1e+9;
    document.getElementById('microGram').innerHTML = microGram;
    
    //Tonne
    let tonne = kg / 1000;
    document.getElementById('tonne').innerHTML = tonne;

    //Pound
    let pound = kg * 2.205;
    document.getElementById('pound').innerHTML = pound;

});