$(document).ready(function(){
	    $('.card2, .card3').hide();	
		$('.collapse1').click(()=>{
			$('.card1').slideToggle();
			$('.card2, .card3').hide(300);	
		});
		$('.collapse2').click(()=>{
			$('.card1,.card3').hide();
			$('.card2').slideToggle(300);
		});
		$('.collapse3').click(()=>{
			$('.card1,.card2').hide();
			$('.card3').slideToggle(300);
		});
	

});