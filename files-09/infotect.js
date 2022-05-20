const prizes = [
  'Samsung 43" Class NU6900 Smart 4K UHD TV',
  "iPhone 12 Pro Max",
  "Dyson Cyclone V10",
  "MacBook Pro 13-inch",
];
for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
  // For each of our buttons, when the user clicks it...
  //   console.log(btnNum);
  //   console.log(btnNum);
  document
    .getElementById(`btn-${btnNum}`)
    .addEventListener("click", function () {
      // Tell user what he/she's won!
      alert("Congratulations you have won a " + prizes[btnNum] + "!");
    });
}
