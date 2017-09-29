function onCategory(categoryId){
  console.log(categoryId);
  
  //Get quotes for selected category
  var q = $.ajax({
      		url: 'dashboard/getQuotes',
      		
      		data: {"id" : categoryId}
      	
  		});
  	
  //Get images for selected category
  var imgs = $.ajax({
      		url: 'dashboard/getImages',
      		
      		data: {"id" : categoryId}
      		
  		});
  
  //show quotes and images on view
  $.when(q, imgs).done(function(q, imgs){
  	$('#categoryQuotes').html(q[0]);
  	$('#categoryImages').html(imgs[0]);
  });
  
}

function generateGreeting(args) {
	var imageSrc = $("input[name='categoryImage']:checked").next(undefined, "img").attr('src');
	var quote = $("#quote_id option:selected").text();
	var greetingMsg = $("#greeting-message").val();
	
 	var canvas = document.getElementById('greetingCanvas');

 	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
 	
 	var backImg = new Image();
 	backImg.src = imageSrc;
 	
 	//make sure image has been loaded before painting anything on canvas
 	backImg.onload = function(){
 		
 		context.drawImage(backImg,0,0, backImg.width, backImg.height, 0, 0, canvas.width, canvas.height);
 		
 		context.font = '25pt Monotype Corsiva';
 		context.fillStyle = 'blue';
 		context.textAlign = 'center';
 		context.shadowBlur = 4;
 		context.fillText(quote, 200, 100);
 		
 		context.font = '15pt Comic Sans MS';
 		context.fillStyle = 'black';
 		context.textAlign = 'center';
 		context.shadowBlur = 4;
 		context.fillText(greetingMsg, 200, 300);
 	};
}

function takeSnap() {
	var canvas = document.getElementById('greetingCanvas');
	var dataURL =  canvas.toDataURL('image/png');
	//window.location = dataURL;
	
	document.write('<img src="'+dataURL+'"/>');
}

/*
function getVValue(id){
	console.log(id);
	//Get images for selected category
  var imgs = $.ajax({
      		url: 'dashboard/getQuote',
      		type: "GET",
      		data: {"id" :id},
      		dataType : "html"
  		});
  $.when(imgs).done(function(imgs){
  	console.log(imgs);
  });
}*/
