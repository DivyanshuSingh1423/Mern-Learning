let slides = document.querySelector("carsual-inner")
let totalslides = document.querySelectorAll("carsual-inner")
console.log(totalslides.length);
console.log(totalslides[1]);

function showslide(i) {
    const currSlide = totalslides[i];
    currSlide.classList.toggle("active");
}

function preIMG(){
    index = index - 1;
}
function nextIMG(){
    index = index + 1;
    showslide(index);
    index = index + 1;
    showslide(index);
}
showslide(index)