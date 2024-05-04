function fadeOutEffect(target) {
    var fadeTarget = target;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

    // loader.style.opacity = 1
    document.addEventListener("DOMContentLoaded", function (event) {
        // console.log("startted")
        const loader = document.querySelector("#preloader")
        // fadeOutEffect(loader)
        setTimeout(() => {
            fadeOutEffect(loader)
            // console.log("done")
        }, 200);
    });