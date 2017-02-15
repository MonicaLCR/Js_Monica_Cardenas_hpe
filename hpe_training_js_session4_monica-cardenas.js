//1.
var name = "Monica";
var nameString = function (name) {
	console.log("Hi, I am " + name + "and guess what? I am indeed Learning js");
	};
nameString (name);

//2.
var verdadero = function(){
  var i=0;
  while(i<=6){
    i+=2;
    if (i==6) {
      console.log("True");
    }//fin del if
  }//fin del while
};//fin de la funcion verdadero

verdadero();

//3.
var arreglo1 = ["Sólo", "una cosa", "convierte", "en","imposible", "un" ,"sueño:","el miedo", "a fracasar.", "Paulo Cohelo"];

var varArreglo = function(){
  var a=0;

  while(arreglo1[a]){
    console.log(arreglo1[a]);
    a++;
  }//fin del while
};//fin de la funcion

varArreglo();

//4.
var array2 = ["Aprenderás Lecciones."," Estás inscrito en una escuela informal"," de tiempo completo llamada vida."];
var myarray =function(){
var interruptor = true;
while (interruptor){
  for(var j=0; j<1; j++){
    console.log(array2);
      }//fin del For
  interruptor = false;
    }//fin del while (true)
  };//fin de la funcion
myarray();

//5.
var myQuestion =function(myAnswer){
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
};

myQuestion();
