


let tb = document.querySelector("tbody")
let be = tb.querySelectorAll("tr")


for (let i = 0; i < be.length; i++) {
  const element = be[i];
  if(i%2 !==0) {
  element.style.backgroundColor = "gray"
  element.style.color = "white"
  } else {
    element.style.backgroundColor = "blue"
    element.style.color = "red"
  }
}

