var uzitajAdjektivoj1=[]
var uzitajAdjektivoj2=[]
var uzitajAnimaloj=[]
var montriloAdjektiva1=0
var montriloAdjektiva2=0
var montriloAnimala=0
var animaloj = ["kapro", "urso", "ruĝa pando", "delfeno", "manato", "apro", "heliko", "kamelo", "muso", "rato", "kato", "hundo", "koko", "kuniklo", "testudo", "porko", "ŝafo", "bovo", "marleono"]//last=18
var adjektivoj1 = []
var adjektivoj2 = []
var animals = ["goat", "bear", "red panda", "dolphin", "manatee", "boar", "snail", "camel", "mouse", "cat", "dog", "chicken", "rabbit", "turtle", "pig", "sheep", "neat", "sea lion"]
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
		console.log("Malbona. Animalo estas "+animaloj[nunaAnimalaMontrilo]);
	    }
	}
	if (malbona!=true){
	    uzitajAnimaloj[montriloAnimala]=nunaAnimalaMontrilo
	    montriloAnimala++
	    if (montriloAnimala>4){
		montriloAnimala=0
	    }
	    farita=true
	}
    }

    document.getElementById("poemArea").innerHTML=document.getElementById("userInput").value + ", vi estas " + animaloj[nunaAnimalaMontrilo] + "."
    
    if (animaloj[nunaAnimalaMontrilo]=="kapro"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/9/9c/Capra_caucasica1.JPG\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="urso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6b/Kodiak_Brown_Bear.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="ruĝa pando"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fe/Ailurus_fulgens_RoterPanda_LesserPanda.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="delfeno"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/1/10/Tursiops_truncatus_01.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="manato"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/2/2a/Two_manatee_rooting_for_food_in_bottom_sand.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="apro"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/62/Zwijntje.JPG\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="heliko"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6d/Common_snail.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="kamelo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/4/43/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="muso"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/c/c2/White_lab_mouse.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="rato"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/5c/139_copy.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="kato"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/7/75/Brown_and_white_tabby_cat_and_flower_trees-Hisashi-01.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="hundo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/68/Brown-White_Husky_Climbing.JPG\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="koko"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/5/50/Female_pair.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="kuniklo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/6/6c/Sylvilagus_audubonii.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="testudo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/7/75/%D0%92%D0%95%D0%9B%D0%95%D0%9A%D0%902.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="porko"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/2/28/Cochon_2A_Corse-du-Sud.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="ŝafo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/1/1c/German_ewe_grazing_closeup.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="bovo"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/f/fb/CH_cow_2.jpg\"/>"
    } else if (animaloj[nunaAnimalaMontrilo]=="marleono"){
	document.getElementById("imageContainer").innerHTML="<img src=\"https://upload.wikimedia.org/wikipedia/commons/7/74/California_sea_lion_in_La_Jolla_%2870568%29.jpg\"/>"
    }
}
