
    var name = prompt("Wat is je naam")
    var nameid = document.querySelector("#naam")
    nameid.innerHTML = naam

    var age= prompt("Hoe oud ben je")
    var nameid = document.querySelector("#age")
    nameid.innerHTML = age

    var bezoeker ={
        voornaam : naam,
        leeftijd : age,
    }

    if(age <= 18)
        {
            document.body.style.background = "#ff0000"
        }

    if(age <= 15)
        {
            document.body.style.background = "#66ff33"
        }
    
    