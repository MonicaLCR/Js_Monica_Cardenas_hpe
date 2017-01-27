//Exercises for lesson 3:
console.log("1.- Using a For loop, print out numbers from 0 to 100 with a increase of 5 each.");
for(var i=0; i<=100; i+=5 ){
  console.log(i);
}

console.log("2.- Using a For loop, print all the values of an array by separate.");

var array = [1, "hola", "hello", 2, "adios", "adieu", "bye", 3, "buenas noches", "good night"];

for(var b= 0; b<array.length; b++){
  console.log(array[b]);
}

console.log("3.- Using a For loop, print out numbers from 24 to 2 with a decrease of 2 each.");

for(var a=24; a>=2; a-=2){
  console.log(a);
}

console.log("4.- Using an If statement, generate a condition that includes a .length comparation, and print numbers from 10 to 50 using for. \
Include an else that prints the same values but decreasing");


//you can change the comparison operator (if array.length>5) to enter else statement
if (array.length<5){
  for(var c=10; c<=50; c++)
  console.log(c);
}
    else {
      for(var d=50; d>=10; d--){
        console.log(d);
      }
    }


console.log("5.-Using an If statement, generate a similar condition as in excercise 2, and print numbers from 9 to 0 using for.\
  Include an else that prints the same values but increasing.");

  if (array.length>5){
    for(var c=0; c<=9; c--)
    console.log(c);
  }
      else {
        for(var d=9; d>=0; d--){
          console.log(d);
        }
      }
