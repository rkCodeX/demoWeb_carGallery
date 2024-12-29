//auto slide show
let slide = document.getElementsByClassName("slides");
let slideIndex = 0;
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
//show and hide navbar
let nav = document.getElementsByClassName('nav')[0];
let navBtn = document.getElementsByClassName('navBtn')[0];

let show = false;

navBtn.addEventListener('click',()=>{
    if(show){
        show = false;
        navBtn.innerHTML = `<i class="fas fa-bars fa-2xl" style="line-height: 1; color: #dedede;"></i>`
        nav.style.display = "none";
    }else{
        show = true;
        navBtn.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: #dedede;"></i>`;
        nav.style.display = "block";
    }
});