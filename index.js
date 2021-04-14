/*function wakeDog() {
  console.log("Wake Byron the poodle");
}
function leashDog() {
  console.log("Leash Byron the poodle");
}
function walkToPark() {
  console.log("Walk to the park with Byron the poodle");
}
function throwFrisbee() {
  console.log("Throw the frisbee for Byron the poodle");
}
function Unleash() {
  console.log("Unleash Byron the poodle");
}*/
//let dog= [dogName, dogBreed];
function wakeDog(Xerox, dogBreed) {
  console.log("Wake ${dogName} the ${dogBreed}");
  return "Wake ${dogName} the ${dogBreed}";
}
function leashDog(Boo Radley,dogBreed) {
  console.log("Leash ${dogName} the ${dogBreed}");
  return "Leash ${dogName} the ${dogBreed}";
}
function walkToPark(Bunny, dogBreed) {
  console.log("Walk to the park with ${dogName} the ${dogBreed}");
  return "Walk to the park with ${dogName} the ${dogBreed}";
}
function throwFrisbee(Mary J. Blige, dogBreed) {
  console.log("Throw the frisbee for ${dogName} the ${dogBreed}");
  return "Throw the frisbee for ${dogName} the ${dogBreed}";
}
function Unleash(Byron, dogBreed) {
  console.log("Unleash ${dogName} the ${dogBreed}");
  return "Unleash ${dogName} the ${dogBreed}";
}

const routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
//function exersiceDog (dogName,dogBreed){
  //let dogName="Byron";
  //let dogBreed="poodle";
/*  for (let i=0; i<length.routine;i++){
return routine[i];
  }
  console.log(exersiceDog(Bryan, poodle))
}*/
const exerciseDog = function(dogName, dogBreed) {
  return routine.map(action => action(dogName, dogBreed));
}
