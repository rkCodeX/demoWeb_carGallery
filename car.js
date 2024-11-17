let slide = document.getElementsByClassName("slides");
slideIndex = 0;
slides();
function slides(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex > slide.length){
        slideIndex = 1;
    }
    slide[slideIndex-1].style.display = 'block';
    setTimeout(slides, 5000);
}