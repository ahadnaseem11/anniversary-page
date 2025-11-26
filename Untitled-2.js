function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function toggleLike(btn) {
    btn.classList.toggle("liked");
}

/* Generate Particles */
const box = document.getElementById("particles");
for(let i=0;i<45;i++){
    let d=document.createElement("div");
    d.className="particle";
    d.style.left=Math.random()*100+"%";
    d.style.animationDuration=(4+Math.random()*6)+"s";
    box.appendChild(d);
}