
var verdadero = true;
var falso = false;
var correcto = true;
var edad = 27;
var name = 'Monica';
var a = 10;
var b = 10;
var work = 'hpe';
var song = 'roadhouse blues';

/*1.- Using Logical Operators, write 6 comparations, 3 that returns true and 3 others that return false.
It can be either a comparation between a length of a String and a number, or just between numbers.
*/
console.log("my name is Monica".length>10);
console.log(80>=79);
console.log(80*2<=80+80);
console.log(100*2==10*2);
console.log("parangaricutirimicuaro".length<=8);
console.log("El volcán de parangaricutirimícuaro se quiere desparangaricutiriguarizar, y él que lo desparangaricutiricuarizare será un buen desparangaricutirimizador".length<=50);


//2.- Using Substrings and this coordinates: (0,2), (2,3), (0,5), (1,3), (5,7), Write 5 different sentences and print out the output.

console.log("Metallica".substring(0,2));
console.log("The doors".substring(2,3));
console.log("Led Zepellin".substring(0,5));
console.log("Black Sabath".substring(1,3));
console.log("Pink Floyd".substring(5,7));

//3.- Declare 5 Arrays and print only one of the values inside, it can be any of them.

var dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];
var paises = ["Mexico", "Brasil", "Estados Unidos", "Alemania"];
var numeros = ["uno", "dos","tres","cuatro"];
var nombres = ["zutanito", "perenganito", "fulanito", "juana","florencia", "africa", "amanda"];
var puntos = [100, 200,300,400, 500,1000, 100000];

console.log(dias[3]);
console.log(paises[0]);
console.log(numeros[1]);
console.log(nombres[6]);
console.log(puntos[5]);


//4.- Write 6 simple if's, where if the condition is true, prints this: "I'm doing it in the right way"

if(correcto == true){
  console.log("Im doing it in the right way");
} else {
  console.log("wrong");
}

if(edad == 27){
  console.log("Im doing it in the right way");
}else {
  console.log("wrong");
}

if(name== 'Monica'){
  console.log("Im doing it in the right way");
}else {
  console.log("wrong");
}

if(a==b){
  console.log("Im doing it in the right way");
}else{
  console.log("wrong");
}

if (work == 'hpe') {
  console.log("Im doing it in the right way");
}else {
  console.log('wrong');
}

if(song == 'roadhouse blues'){
  console.log("Im doing it in the right way");
}else {
  console.log("wrong");
}


//5.- Based on Modulo operations, write 6 sentences where 3 of them returns 0 as result and 3 others with 1 as the output. Try to use big numbers

console.log(1500 % 5);
console.log(997 % 997);
console.log(100 % 99);
console.log(571 % 570);
console.log(10000 % 100);
console.log(150800 % 150799);
