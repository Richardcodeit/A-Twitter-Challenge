const icon = document.querySelector(".icon")
const link = document.querySelector(".links")

icon.addEventListener("click" , function(){
    link.style.display = "block"
    link.style.transition = "5s"
    icon.style.display = "none"
})