let box = document.querySelector(".box");
let winbtn = document.querySelector(".ri-microsoft-fill");
let list = document.querySelector(".list");

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
     list.style.display = "block";
        list.style.opacity = "0";

    let listWidth = list.offsetWidth;
    let listHeight = list.offsetHeight;
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    let x = e.pageX;
    let y = e.pageY;

    if (x + listWidth > winWidth) {
        x = winWidth - listWidth - 10; 
    }

    if (y + listHeight > winHeight) {
        y = winHeight - listHeight - 10;
    }

    list.style.left = `${x}px`;
    list.style.top = `${y}px`;
      list.style.opacity = "1";
   
});


document.addEventListener("click", function(){
    list.style.display = "none";
});



winbtn.addEventListener("click", function(){
    box.classList.toggle("show");
})