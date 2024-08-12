// Obtener el modal
var modal = document.getElementById("movieModal");

// Obtener el elemento del título del modal
var modalTitle = document.getElementById("modalTitle");

// Obtener el elemento de información del modal
var modalInfo = document.getElementById("modalInfo");

// Obtener el elemento de videoPlayer
var videoPlayer = document.getElementById("videoPlayer");

// Función para mostrar el modal con la información de la película y el video local
function showMovieInfo(movieId) {
    // Variables para almacenar la información de la película
    var movieTitle = "";
    var movieDate = "";
    var movieDuration = "";
    var movieGenre = "";
    var movieDescription = "";

    // Asignar la información de la película según el ID
    switch (movieId) {
        case "misionImposible":
            movieTitle = "Misión imposible: sentencia mortal - parte 1";
            movieDate = "2023";
            movieDuration = "2h 43m";
            movieGenre = "Acción/Aventura";
            videoPlayer.src = "videos/mision_imposible.mp4"; 
            movieDescription = "Descripción de la película Misión imposible: sentencia mortal - parte 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "oppenheimer":
            movieTitle = "Oppenheimer";
            movieDate = "2023";
            movieDuration = "3 horas";
            movieGenre = "Bélico/Drama";
            videoPlayer.src = "videos/oppenheimer.mp4"; 
            movieDescription = "Descripción de la película Oppenheimer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "barbie":
            movieTitle = "Barbie";
            movieDate = "2023";
            movieDuration = "1h 54m";
            movieGenre = "Comedia/Ficción";
            videoPlayer.src = "videos/barbie.mp4"; 
            movieDescription = "Descripción de la película Barbie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "theFlash":
            movieTitle = "The Flash";
            movieDate = "2023";
            movieDuration = "2h 24m";
            movieGenre = "Acción/Fantasía";
            videoPlayer.src = "videos/the_flash.mp4"; 
            movieDescription = "Descripción de la película The Flash. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
    }

    // Mostrar el modal con la información de la película y el video local
    modalTitle.innerText = movieTitle;
    modalInfo.innerHTML = "<p>Fecha: " + movieDate + "</p>" +
                          "<p>Duración: " + movieDuration + "</p>" +
                          "<p>Género: " + movieGenre + "</p>" + "<br>" + "<br>" +
                          "<h2>DESCRIPCION:" + "</h2>" + 
                          "<p>" + movieDescription + "</p>"; // Agregamos la descripción

    // Cargar el video local
    videoPlayer.load();

    // Mostrar el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    // Detener la reproducción del video
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.pause();
    videoPlayer.currentTime = 0;

    // Ocultar el modal
    modal.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

// Función para establecer el video actual cuando se carga un video en el modal
function setVideo(videoElement) {
    currentVideo = videoElement;
}

// JavaScript para mostrar/ocultar el menú en pantallas pequeñas
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
});