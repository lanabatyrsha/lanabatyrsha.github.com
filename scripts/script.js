document.getElementById("main-action").onclick =function () {

}

var buttons = document.getElementsByClassName("car-button");
for (var i =0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick =function () {
    if (document.getElementById("name").value === "") {
        alert("Аты-жөні қатарын толтырыңыз!");
    } else if (document.getElementById("phone").value === "") {
        alert("Телефон нөмері қатарын толтырыңыз!");
    } else {
        alert("Рақмет,жақын арада байланысқа шығуға тырысамыз!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.connection-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});
