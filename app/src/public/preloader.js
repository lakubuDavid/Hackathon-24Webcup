function fadeOutEffect(target) {
    var fadeTarget = target;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.05;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

document.addEventListener("DOMContentLoaded", function (event) {
    const loader = document.querySelector("#preloader")
    setTimeout(() => {
        fadeOutEffect(loader)
    }, 200);
});