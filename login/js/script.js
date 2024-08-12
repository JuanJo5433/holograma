let signUp = document.getElementById("singUp");
let singIn = document.getElementById("singIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

singIn.onclick = function() {

    title.innerHTML = "Iniciar Sesion";
   
}

signUp.onclick = function() {

    title.innerHTML = "Registro";
  
}


let toggle = document.getElementById("toggle");
let label_toggle = document.getElementById("label_toggle");
toggle.addEventListener("change",(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle("dark");
    if (checked==true){
        label_toggle.innerHTML = '<i class="fa-sharp fa-solid fa-sun">';
        label_toggle.style.color="white"
    }else{
        label_toggle.innerHTML = '<i class="fa-sharp fa-solid fa-moon">';
        label_toggle.style.color="black"
    }

})