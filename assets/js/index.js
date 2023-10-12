let layersCont = document.getElementById("Lc");
console.log(layersCont);
document.addEventListener("mousemove",elem=>{
    Object.assign(document.documentElement,{
        style:`--move-x:${(elem.clientX-window.innerWidth)/2*-0.005}deg;
        --move-y:${(elem.clientY-window.innerHeight)/2*-0.01}deg;`
    })
})