// assume that we are creating a function
//to calculate distance given speed and time
function calculateDistance(speed, time) {
  let distance = speed * time;
  return distance;
}
// console.log(calculateDistance(10, 20));

function calculateFuelRequired(distance) {
  //assume 1km cost 0.5 litre of fuel
  return distance * 0.5;
}
let distance = calculateDistance(10, 20);
console.log("Distance travelled=", distance);
console.log("Fuel needed =", calculateFuelRequired(distance));
