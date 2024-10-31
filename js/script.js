let navbar = document.querySelector(".header .navbar");
let menubtn = document.querySelector("#menu-btn");
let header = document.querySelector(".header")
menubtn.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    menubtn.classList.toggle("fa-times");
})
window.onscroll = ()=>{
    navbar.classList.remove("active");
    menubtn.classList.remove("fa-times");
    if(window.scrollY > 0){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
}

let feqbox = document.querySelectorAll(".faq .box-containers .box")
feqbox.forEach((box)=>{
    box.onclick = ()=>{
        let content = box.querySelector(".content")
        let icons = box.querySelector("i")
        if(content.classList.contains("active")){
            content.classList.remove("active")
        }else{
            document.querySelectorAll(".faq .box-containers .box .content").forEach((contens)=>{
                contens.classList.remove("active")
            })
            content.classList.add("active")
        }
        if(icons.classList.contains("fa-minus")){
            icons.classList.replace("fa-minus","fa-plus")
        }else{
            document.querySelectorAll(".faq .box-containers .box i").forEach((contens)=>{
                contens.classList.replace("fa-minus","fa-plus")
            })
            icons.classList.replace("fa-plus","fa-minus")
        }
    }
})