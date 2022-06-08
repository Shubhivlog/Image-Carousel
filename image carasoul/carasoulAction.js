let dot1=document.getElementById('active1');
let dot2=document.getElementById('active2');
let dot3=document.getElementById('active3');
let images=document.getElementById('three-images');
dot1.addEventListener('click',()=>{
    dot1.style.backgroundColor="rgba(145, 148, 153, 0.862)";
    dot2.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    dot3.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    images.style.transform="translateX(0px)";
})
dot2.addEventListener('click',()=>{
    dot2.style.backgroundColor="rgba(145, 148, 153, 0.862)";
    dot1.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    dot3.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    images.style.transform="translateX(-323px)";
    

})
dot3.addEventListener('click',()=>{
    dot3.style.backgroundColor="rgba(145, 148, 153, 0.862)";
    dot2.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    dot1.style.backgroundColor="rgba(10, 9, 9, 0.611)";
    images.style.transform="translateX(-660px)";
    
})