var range = document.querySelector("#range");
var form = document.querySelector("#form");

range.addEventListener("input", function() {
  form.style["opacity"] = this.value ;
});


$('#onOff').on('change', function() {     
     $('.banner-wrapp').toggleClass('lightOff');        
});
$('#lightSelect').on('change', function() {     
     $('.light-off').toggleClass('cool');        
});