$(function(){

  $('.select span').click(function(){
    $(this).addClass('active')
    $(this).siblings('.select span').removeClass('active')
  })

})