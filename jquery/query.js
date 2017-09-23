$('.hidden').hide();
$('li .my-2').hide();
$('.list-group-item').click(function(){
  $('.my-2',this).toggle();
  $('.hidden',this).toggle();
});
