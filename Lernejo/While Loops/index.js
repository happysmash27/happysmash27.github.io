var numbro1 = 1;
var numbro2 = 5;
var signoĉeno = " ";
var respondo = 0;

do {
    respondo = numbro1 * numbro2;
    signoĉeno += numbro1 + " x " + numbro2 + " = " + respondo + "<br>";
    numbro1++;
} while (respondo<60);

document.getElementById("while").innerHTML = signoĉeno;
