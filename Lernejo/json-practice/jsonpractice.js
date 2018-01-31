// PROBLEM ONE //

document.getElementById("answer-one").innerHTML = luke.birth_year


// PROBLEM TWO //

document.getElementById("answer-two").innerHTML += jurassicpark.Genre + "</br>"

document.getElementById("answer-two").innerHTML += picnic.Country + "</br>"

document.getElementById("answer-two").innerHTML += theredshoes.Ratings[1].Value + "</br>"

// PROBLEM THREE //

document.getElementById("answer-three").innerHTML += songofthesea.Ratings[1].Value + "</br>"

document.getElementById("answer-three").innerHTML += roaninish.Director + "</br>"

// PROBLEM FOUR //

document.getElementById("answer-four").innerHTML += charmeleon.stats[4].stat.name + "</br>"

document.getElementById("answer-four").innerHTML += charmeleon.moves[3].move.name + "</br>"

document.getElementById("answer-four").innerHTML += bulbasaur.moves[6].move.name + "</br>"

// PROBLEM FIVE //

document.getElementById("answer-five").innerHTML += nov6.data.Events[0].text + "</br>"

document.getElementById("answer-five").innerHTML += nov6.data.Events[9].text + "</br>"

document.getElementById("answer-five").innerHTML += nov6.data.Events[13].year + "</br>"

document.getElementById("answer-five").innerHTML += nov6.data.Births[2].text + "</br>"

document.getElementById("answer-five").innerHTML += nov5.data.Births.length + "</br>"

// PROBLEM SIX //

document.getElementById("answer-six").innerHTML += pasadena[0].Temperature.Metric.Value + "</br>"

document.getElementById("answer-six").innerHTML += petersburg[0].Temperature.Imperial.Value + "</br>"

document.getElementById("answer-six").innerHTML += petersburg[0].WeatherText + "</br>"

document.getElementById("answer-six").innerHTML += edinburgh[0].WeatherText + "</br>"

// PROBLEM SEVEN //

document.getElementById("answer-seven").innerHTML += freebandnames.statuses[0].entities.hashtags[0].indices + "</br>"

document.getElementById("answer-seven").innerHTML += freebandnames.statuses[0].user.name + "</br>"

for (i in freebandnames.statuses){
    console.log(i)
    document.getElementById("answer-seven").innerHTML += freebandnames.statuses[i].user.time_zone + "</br>"
}

// PROBLEM EIGHT //

document.getElementById("answer-eight").innerHTML += quiz.quiz.maths.q1.answer + "</br>"

document.getElementById("answer-eight").innerHTML += quiz.quiz.sport.q1.answer + "</br>"

// PROBLEM NINE //

document.getElementById("answer-nine").innerHTML += wartortle.abilities[0].ability.name + "</br>"

document.getElementById("answer-nine").innerHTML += charmander.stats[2].stat.name + "</br>"

document.getElementById("answer-nine").innerHTML += charmander.stats.length + "</br>"

// PROBLEM TEN //

document.getElementById("answer-ten").innerHTML += nov5.data.Events[0].text + "</br>"

console.log("jkl".indexOf("kl"))

for (i in nov5.data.Births){
    if (nov5.data.Births[i].year == 1992 && nov5.data.Births[i].text.indexOf("football player")>=0){
	document.getElementById("answer-ten").innerHTML += nov5.data.Births[i].text + "</br>"
    }
}

