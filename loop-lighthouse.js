//Loopy Lighthouse Exercise
for (var printNumbers = 100; printNumbers <= 200; printNumbers++) {
  if (printNumbers % 3 === 0 && printNumbers % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (printNumbers % 3 === 0) {
    console.log("Loopy");
  }
  else if (printNumbers % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(printNumbers);
  }
}