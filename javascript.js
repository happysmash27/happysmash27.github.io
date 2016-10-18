function itWorks(){
  alert("It works!")
}

document.getElementById("alert2").onclick = function() {alert("It works too!")}

function show(){
  document.getElementById("Fox").style.display = "block"
  document.getElementById("show").style.display = "none"
  document.getElementById("hide").style.display = "block"
}
function hide(){
  document.getElementById("Fox").style.display = "none"
  document.getElementById("show").style.display = "block"
  document.getElementById("hide").style.display = "none"
}

document.getElementById("show").onclick = function(){
  show()
}

document.getElementById("hide").onclick = function(){
  hide()
}


function clrd(){
  document.getElementById("text").style.color = "red"
  document.getElementById("chClr1").style.display = "none"
  document.getElementById("chClr2").style.display = "block"
}
function clrb(){
  document.getElementById("text").style.color = "#3366ff"
  document.getElementById("chClr1").style.display = "block"
  document.getElementById("chClr2").style.display = "none"
}

document.getElementById("chClr1").onclick = function(){
  clrd()
}

document.getElementById("chClr2").onclick = function(){
  clrb()
}
