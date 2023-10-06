
let fix = document.querySelector(".navbar").offsetTop;

export function fixHeader(){

    if(window.scrollY > fix){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
}