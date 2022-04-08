document.addEventListener("DOMContentLoaded", main);

async function main() {
    let rr = document.querySelector(".rickrolled");
    for (let i = 1; i < 4; i++) {
        rr.src = "static/images/" + i + ".png";
        await new Promise((r) => setTimeout(r, 500));
        if (i == 3) {
            i = 0;
        }
    }
    /*
    let audio = new Audio("static/audio/rickroll.mp3");
    let test = document.getElementsByName("body");
    test.onmouseover = function () {
        audio.play();
    };
    */
}
