let f = document.querySelector(".filip")
console.dir(f)

let m = document.querySelectorAll("h1")
console.dir(m)


for (let i = 0; i < m.length; i++) {
  const element = m[i];
  if (i%2 !==0) {
    element.style.color ="red"
    element.style.backgroundColor = "lightblue"
  } else {
    element.style.color ="blue";
    element.style.backgroundColor = "green"
  }
  
}