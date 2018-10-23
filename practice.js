function minimum(a, b) {
  if (a == b) {
    return undefined;
  }
  if (a === String && b === String) {
    return "Please enter an Integer";
  }
  return a < b ? a : b;
}

let manDog = minimum("Chase", "Chae");
console.log(manDog);
