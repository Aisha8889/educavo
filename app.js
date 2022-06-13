let imagebox = document.querySelector(".image-box");
let imgwrap = document.querySelector(".image-wrap");
let originalimg = document.querySelector("#originalimg");


originalimg.style.width = imgbox.offsetWidth + "px"
let leftSpace = imgbox.offsetLeft;
imgbox.onemousemove = function(e) {
  let boxWidth = (e.pageX - leftSpace) + "px";
   
  imgwrap.style.width = boxWidth;
  
}