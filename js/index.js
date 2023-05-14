const buttonthemechanger = document.getElementById("button-theme-changer");

const body = document.querySelector("body");

const buttonthemechangerimage = document.querySelector(".image-button");

buttonthemechanger.addEventListener("click", () => {

    const darkmodeon = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");

    if (darkmodeon) {
        buttonthemechangerimage.setAttribute("src", "./imagens/sun.png");
    } else {
        buttonthemechangerimage.setAttribute("src", "./imagens/moon.png");
    }
});