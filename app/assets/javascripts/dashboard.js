function onCategory(categoryId){
  console.log(categoryId);
  
  //Get quotes for selected category
  var q = $.ajax({
      		url: 'dashboard/getQuotes',
      		type: "GET",
      		data: {"id" : categoryId},
      		dataType : "html"
  		});
  	
  //Get images for selected category
  var imgs = $.ajax({
      		url: 'dashboard/getImages',
      		type: "GET",
      		data: {"id" : categoryId},
      		dataType : "html"
  		});
  
  //show quotes and images on view
  $.when(q, imgs).done(function(q, imgs){
  	$('#categoryQuotes').html(q);
  	$('#categoryImages').html(imgs);
  });
  
}