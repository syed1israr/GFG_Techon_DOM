const person={
    name:"Syed Israr Ahmed ",
    age:"19",
    education:{
        middle:"parbhani",
        higher:"wagholi"
    }
}
console.log("log wala hun",person)
console.dir( "Dir wala hun",document);

let isDoge=false;
function changeimage(){
    let image1=document.getElementById("image_1");
    let image2=document.getElementById("image_2");
    if(isDoge){
        image1.src="./image/Doge_2.jpeg "
        image2.src="./image/Doge_1.jpeg "
        isDoge=false;
    }else{
        image1.src="./image/Doge_1.jpeg "
        image2.src="./image/Doge_2.jpeg "
        isDoge=true;
    }

   
    
}
