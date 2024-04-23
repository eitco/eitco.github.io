// Get the modal
var modal = document.getElementById("imageModalBox");
  
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgArr = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0, len = imgArr.length; i < len; i += 1) {
  if(imgArr[i].id != "arveoLogo"){
    imgArr[i].onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
}
  
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
