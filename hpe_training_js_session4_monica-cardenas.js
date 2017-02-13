/*
Exercises for lesson 4:
1. Create a simple function that prints out this line: "My name is: <yourName> and guess what?
I'm indeed learning js" and call it sending your name as a parameter.
2. Create a simple While loop that prints true until the condition becomes false.

4. Combine a While and For, the For loop is gonna be isnide the While loop. Tip: take care of the infinite loops ;)
5. Ask a user for a number between 1-100 and create an If, elsif, else statement where you can print something different
depending on his/her choice. make sure you are making all this inside a function and the parameter that is gonna be sent, is the
user's answer. Tip: prompt is gonna help you out with this.
*/
var nombre= 'Monica';
var array =["Sólo", "una cosa", "convierte", "en","imposible", "un" ,"sueño:","el miedo", "a fracasar.", "Paulo Cohelo"];
var array2 = ["Aprenderás Lecciones."," Estás inscrito en una escuela informal"," de tiempo completo llamada vida."];

name(nombre);
verdadero();
arreglo1();
arreglo2();
number(myAnswer);


//1. Create a simple function that prints out this line: "My name is: <yourName> and guess what?
function name(nombre) {
  console.log("My name is " + nombre + " and guess what? I am indeed Learning js");
}//fin de la funcion name



//2. Create a simple While loop that prints true until the condition becomes false.
function verdadero(){
while(i<=6){
  var i=0;
  i+=2;
  if (i==6) {
    console.log("True");
    }//fin del if
  }//fin del while
}//fin de la funcion verdadero




//3. Create a While loop that prints all the statements inside an array of at least 10 words/sentences.
function arreglo1{
  var a=0;
  while(array[a]){
  console.log(array[a]);
  a++;
  }//fin del while
}//fin de la funcion



//4. Combine a While and For, the For loop is gonna be inside the While loop. Tip: take care of the infinite loops ;)

function arreglo2{
var j=0;
while (array2){
  for(j=0; j<=1; j++){
    console.log(array2);
      }//fin del For
    }//fin del while (true)
  }//fin de la funcion



/*5. Ask a user for a number between 1-100 and create an If, elsif, else statement where you can print something different
depending on his/her choice. make sure you are making all this inside a function and the parameter that is gonna be sent, is the
user's answer*/

function number(myAnswer){
var myAnswer = prompt("Give me a number between 1-100");

if(myAnswer==0){
  console.log("El cero no esta dentro del rango");
  }
  else if(myAnswer<=10){
    console.log("Tu numero esta dentro de los primeros 10");
    }
    else if(myAnswer<=20){
      console.log("Tu numero esta dentro de los decimos o es igual a 20");
    }
    else if(myAnswer<=30){
      console.log("Tu numero esta dentro de los 20s o es igual a 30");
    }
    else if(myAnswer<=40){
      console.log("Tu numero esta dentro de los 30s o es igual a 40");
    }
    else if(myAnswer<=50){
      console.log("Tu numero esta dentro de los 40s o es igual a 50");
    }
    else if(myAnswer<=60){
      console.log("Tu numero esta dentro de los 50s o es igual a 60");
    }
    else if(myAnswer<=70){
      console.log("Tu numero esta dentro de los 60s o es igual a 70");
    }
    else if(myAnswer<=80){
      console.log("Tu numero esta dentro de los 70s o es igual a 80");
    }
    else if(myAnswer<=90){
      console.log("Tu numero esta dentro de los 80s o es igual a 90");
    }
    else if(myAnswer<=99){
      console.log("Tu numero esta dentro de los 90s");
    }
    else{
      console.log("Tu numero es el 100");
    }
}
