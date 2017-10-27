var uzitajAdjektivoj1=[]
var uzitajAdjektivoj2=[]
var uzitajAnimaloj=[]
var montriloAdjektiva1=0
var montriloAdjektiva2=0
var montriloAnimala=0
var animaloj = ["kapro", "urso", "ruĝa pando", "delfeno", "polpo", "apro", "heliko", "kamelo", "muso", "rato", "kato", "hundo", "koko", "kuniklo", "testudo", "porko", "ŝafo", "bovo"]//last=17
var adjektivoj1 = []
var adjektivoj2 = []
var animals = ["goat", "bear", "red panda", "dolphin", "octopus", "boar", "snail", "camel", "mouse", "cat", "dog", "chicken", "rabbit", "turtle", "pig", "sheep", "neat"]
var adjectives1 = []
var adjectives2 = []

function submit(){
    var nunaAnimalaMontrilo = Math.floor(Math.random()*animaloj.length)
}

function submetu(){
    var farita = false;

    while (farita!=true){
	var malbona=false;
	var nunaAnimalaMontrilo = Math.floor(Math.random()*animaloj.length)
	for (i=0;i<uzitajAnimaloj.length;i++){
	    if (uzitajAnimaloj[i]==nunaAnimalaMontrilo){
		malbona=true
	    }
	}
	if (malbona!=true){
	    uzitajAnimaloj[montriloAnimala]=true
	    montriloAnimala++
	    if (montriloAnimala>4){
		montriloAnimala=0
	    }
	    farita=true
	}
    }

    if (animaloj[nunaAnimalaMontrilo]=="kapro"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/9/9c/Capra_caucasica1.JPG\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="ruĝa pando"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fe/Ailurus_fulgens_RoterPanda_LesserPanda.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="delfeno"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="koko"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="kuniklo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="testudo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="porko"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/2/28/Cochon_2A_Corse-du-Sud.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="ŝafo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/1/1c/German_ewe_grazing_closeup.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="bovo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fb/CH_cow_2.jpg\"/>"
    }
}
