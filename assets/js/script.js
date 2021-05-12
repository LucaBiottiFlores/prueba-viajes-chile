$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();
 
            var hash = this.hash;
 
            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
     });

//enable tooltips everywhere
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  
//Cambio color navbar
$(window).scroll(function(){
    if ($("#navbarpulento").offset().top > 2000){
        $("#navbarpulento").addClass("bg-dark");
    }else {
        $("#navbarpulento").removeClass("bg-dark");
    }
    });

//Modal

var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
  }

});