let desktopImages = document.querySelectorAll(".desktop-slides img");
let mobileImages = document.querySelectorAll(".mobile-slides img");

let nextButton = document.querySelector(".next");
let previousButton = document.querySelector(".previous");
let text = document.querySelector(".home-text");

let currentImage = 0;

function getImages() {
    if (window.innerWidth <= 768) {
        return mobileImages;
    } else {
        return desktopImages;
    }
}

function showImage(index) {
    let images = getImages();

    images.forEach(function (image) {
        image.style.display = "none";
    });

    if (images.length > 0) {
        images[index].style.display = "block";
    }

    if (index === 0) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

nextButton.addEventListener("click", function () {
    let images = getImages();

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    showImage(currentImage);
});

previousButton.addEventListener("click", function () {
    let images = getImages();

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    showImage(currentImage);
});

window.addEventListener("resize", function () {
    currentImage = 0;
    showImage(currentImage);
});

showImage(0);

let serviceButton = document.querySelector(".allservicesbtn");
let moreServices = document.querySelector(".more-services");

serviceButton.addEventListener("click", function () {
    if (moreServices.style.display === "block") {
        moreServices.style.display = "none";
        serviceButton.textContent = "View All Services";
    } else {
        moreServices.style.display = "block";
        serviceButton.textContent = "Hide Services";
    }
});
function bookAppointment() {
    let message =
        "Hello Heni Beauty Parlour!\n\n" +
        "I would like to book an appointment.\n\n" +
        "Name: \n" +
        "Contact Number: \n" +
        "Which Service: ";

    let whatsappNumber = "919909678700";

    let whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}
let aboutIndex = 0;
const aboutdisplay = document.querySelectorAll(".aboutdisplay");
setInterval(function () {
    aboutdisplay[aboutIndex].classList.remove("active");
    aboutIndex++;
    if (aboutIndex >= aboutdisplay.length) {
        aboutIndex = 0;
    }
    aboutdisplay[aboutIndex].classList.add("active");
}, 7000);
