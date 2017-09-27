function onCategory(categoryId){
  console.log(categoryId);
  $.ajax({
      url: 'dashboard/getQuotes',
      type: "GET",
      data: {"id" : categoryId},
      dataType : "html",
      success : function (data) {
      $('#categoryQuotes').html(data);
    }
    });
}