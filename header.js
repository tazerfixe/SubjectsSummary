
let fix = document.querySelector(".navbar").offsetTop;
console.log(fix);

export function fixHeader(){

    if(window.scrollY > fix){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
}