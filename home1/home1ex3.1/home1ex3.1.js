let tb = document.querySelector("tbody")
let be = tb.querySelectorAll("tr")


for (let i = 0; i < be.length; i++) {
  const element = be[i];
  if (i%2 !==0) {
    element.style.backgroundColor = "red"
  } else {
    element.style.backgroundColor = "blue"
  }
  
}