$(document).ready(function(){
	$('.btn').click(function(){
		$('.modal').css('display', 'flex');
		
	})
	$('.close, .cancel').click(function(){
		$('.modal').css('display','none')
	})
  
  $(window).click(function(e){
  	let target = $(e.target)
  	if ( target.is(".modal")  ) {
            $(".modal").css("display", "none");
        }

  })

})