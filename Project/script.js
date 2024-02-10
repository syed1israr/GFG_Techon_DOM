const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});


gsap.from("#part2  h1",{
    x:300,
    duration:3,
    stagger:0.1
})


const cursor=document.getElementById("cursor");
const  main= document.querySelector("body");
main.addEventListener("mousemove",(dets)=>{
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";

})


var elems=document.querySelectorAll("#elem");
var page1=document.querySelector("#page1");
elems.forEach((elem)=>{
    elem.addEventListener("mousemove",()=>{
        var bgimage=elem.getAttribute("data-img");
        page1.style.backgroundImage=`url(${bgimage})`
    })
})