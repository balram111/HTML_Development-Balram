$(function(){
	$('#header').load('shared/header.html');
	$('#footer').load('shared/footer.html');	
});

let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
	counter = 1;
  }
}, 2000);
