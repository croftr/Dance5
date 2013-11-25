$( document ).ready(function() {
	
	var $first_row = $('form table tr:first');
	
	$first_row.hide();
		
	$('form').submit(function(event){
		
		event.preventDefault();
				
		var form_data = $('form'). serialize();
		
		console.log('data' + form_data);
		
		$.ajax({
      		type: "POST",
      		url:  "bigContact.php",
      		data: form_data,
      		
      		error: function() {
        		$('#status').text('Update failed. Try again.').slideDown('slow');
      		},
      		
      		success: function() {      			
      			$first_row.slideDown("slow"); 
        		$('#status').text('Thanks!  Your Question has been sent');
        		$('input, textarea').val("");        
      		},
      		
      		complete: function() {
        		setTimeout(function() {
          			$first_row.slideUp("slow");
        		}, 3000);
      		}
    	});
	});
	
		
});