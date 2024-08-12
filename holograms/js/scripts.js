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
        case "Mechatron":
            movieTitle = "Robot Mechatron 3D";
            movieDate = "2023";
            movieDuration = "1:23m";
            movieGenre = "Holograms";
            videoPlayer.src = "videos/Mechatron.mp4"; // Reemplaza con la ruta y nombre del video
            movieDescription = "Description of 3D Robot video Mechatron.";
            break;

        case "degree":
            movieTitle = "Degree";
            movieDate = "2023";
            movieDuration = "1:41m";
            movieGenre = "Holograms";
            videoPlayer.src = "videos/degree.mp4"; // Reemplaza con la ruta y nombre del video
            movieDescription = "Description of 3D Degree";
            break;

        case "cat":
            movieTitle = "Cat";
            movieDate = "2023";
            movieDuration = "0:59s";
            movieGenre = "Holograms";
            videoPlayer.src = "videos/cat.mp4"; // Reemplaza con la ruta y nombre del video
            movieDescription = "Description of 3D Cat";
            break;

        case "dancer":
            movieTitle = "Dancer";
            movieDate = "2023";
            movieDuration = "2:44m";
            movieGenre = "Holograms";
            videoPlayer.src = "videos/dancer.mp4"; // Reemplaza con la ruta y nombre del video
            movieDescription = "Description of 3D Dancer";
            break;
    }

    // Mostrar el modal con la información de la película y el video local
    modalTitle.innerText = movieTitle;
    modalInfo.innerHTML = "<p>Date: " + movieDate + "</p>" +
                          "<p>Duration: " + movieDuration + "</p>" +
                          "<p>Kind: " + movieGenre + "</p>" + "<br>" + "<br>" +
                          "<h2>DESCRIPTION:" +  "</h2>" +  "<br>" + "<br>" +
                          
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