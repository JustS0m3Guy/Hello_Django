document.addEventListener('DOMContentLoaded', main)

async function main()
{
    let audio = new Audio('static/audio/rickroll.mp3');
    setTimeout(rickrollsound(audio), 1000)

    let test = document.getElementsByName("body");
    test.addEventListener("mouseenter", rickrollsound(audio), false)

    let rr = document.querySelector('.rickrolled');
    for (let i = 1; i < 4; i++) {
        rr.src = 'static/images/' + i + ".png";
        await new Promise(r => setTimeout(r, 500));
        if (i==3)
        {
            i=0;
        }
    }
}

function rickrollsound(audio)
{
    
}