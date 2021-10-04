// Code your solution in this file!

function distanceFromHqInBlocks(numberofstreet) {
    if(numberofstreet>=42){
        return numberofstreet-42;
    } return -(numberofstreet-42); 
}
    console.log(distanceFromHqInBlocks(34));

//DistanceTravelledInFeet

function distanceFromHqInFeet(numberofstreet) {
    if(numberofstreet>=42){
        return (numberofstreet-42)*264;
    } return (-(numberofstreet-42))*264; 
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(num1,num2) {
    if(num2>=num1){
        return (num2-num1)*264;
    } return (-(num2-num1))*264; 
}
console.log(distanceTravelledInFeet(34,24));

//CalculatesFarePrice

let distance=0;
function calculatesFarePrice(start, destination){
    if (destination>start){
        distance=(destination-start)*264;
        if (distance<400){
          return 0;
        } else if (distance>=400 && distance <2000) {
          return (distance-400)*0.02;
        } else if (distance >=2000 && distance <2500) {
          return 25;
        } return `cannot travel that far`;
  
    } distance=(-(destination-start))*264;
        if (distance<400){
          return 0;
        } else if (distance>=400 && distance <2000) {
          return (distance-400)*0.02;
        } else if (distance >=2000 && distance <2500) {
          return 25;
        } return `cannot travel that far`;
  }
  
  console.log(calculatesFarePrice(34, 24));