const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

console.log("Ingredients listed from a for loop:");
// Write a while loop that prints out the contents of ingredients:
var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list])
  list++
}
console.log("\nUsing for:")

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write a for while loop that prints out the contents of ingredients backwards:
console.log("\n ingredients in a while loop backward");
for (var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
