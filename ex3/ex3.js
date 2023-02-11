

const main = document.querySelector(".main")

console.dir(main);


const table = main.querySelector("table")
console.dir(table)


let divarr = main.querySelectorAll("div")

console.dir(divarr)


divarr.forEach((element,index) => {
    element.classList.add = (index + 1)
  }
);

console.dir(divarr)

////////////////////// prv nacin
// for (let i = 0; i < divarr.length; i++) {
//   const element = divarr[i];
//   element.classList.add(i+1);
// }


let tablebody = document.querySelector("tbody")
let bodyelements = tablebody.querySelectorAll("tr")
for (let i = 0; i < bodyelements.length; i++) {
  const element = bodyelements[i];
  if (i%2 !==0) {
    element.style.backgroundColor = "lightgray"
  } else {
    element.style.backgroundColor = "lightblue"
  }
  
}