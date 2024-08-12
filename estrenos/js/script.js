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
        case "Megalodón 2":
            movieTitle = "Megalodón 2";
            movieDate = "9 de Mayo 2023";
            movieDuration = "2h";
            movieGenre = "Ciencia Ficción";
            videoPlayer.src = "videos/megalodon.mp4"; 
            movieDescription = "Descripción de la película Megalodón 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "Hablame":
            movieTitle = "Hablame";
            movieDate = "11 de Agosto";
            movieDuration = "1h 35m";
            movieGenre = "Terror";
            videoPlayer.src = "videos/hablame.mp4"; 
            movieDescription = "Descripción de la película Hablame. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "Gran Turismo":
            movieTitle = "Gran Turismo";
            movieDate = "11 de Agosto";
            movieDuration = "2h 15m";
            movieGenre = "Acción";
            videoPlayer.src = "videos/gran_turismo.mp4"; 
            movieDescription = "Descripción de la película Gran Turismo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;

        case "five nights at freddys":
            movieTitle = "five nights at freddy's";
            movieDate = "3 de Noviembre ";
            movieDuration = "3 Horas";
            movieGenre = "Terror";
            videoPlayer.src = "videos/fnaf.mp4"; 
            movieDescription = "Descripción de la película five nights at freddy's. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
            break;
    }

    // Mostrar el modal con la información de la película y el video local
    modalTitle.innerText = movieTitle;
    modalInfo.innerHTML = "<p>Fecha: " + movieDate + "</p>" +
                          "<p>Duración: " + movieDuration + "</p>" +
                          "<p>Género: " + movieGenre + "</p>" + "<br>" + "<br>" +
                          "<h2>DESCRIPCION:</h2>" + 
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
