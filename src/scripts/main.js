/**
 * Import npm dependencies
 * 
 */
 
import swal from 'sweetalert2';
window.swal = swal
 
 
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/**
 * Initialize JS
 * 
 */
$( document ).ready(function() {
    
	
	$("#idForm").submit(function(){
		
		//ENVIAMOS EL FORMULARIO
		$.ajax({
			url: "https://reqres.in/api/users", 
			data: $("#idForm").serialize(), 
			type: "POST", 
			dataType: 'json',
			cache: false,
			success: function (e) {
				console.log(JSON.stringify(e));
				
				//CERRAMOS MODAL
				$("#modal-skill-test").modal('hide');
				
				//RESETEAMOS FORMULARIO
				$("#idForm")[0].reset();
				
				
				
				var nombre = e['modal-skill-test-email'];
				
				//SWEETALERT 2
				swal.fire({
				  type: "success",
				  title: 'User: ' + e['modal-skill-test-name'] + ' ' + e['modal-skill-test-surname'] + ' ' + e['id'] + ' created',
				  text: 'A confirmation email was sent to ' + e['modal-skill-test-email'],
				  showConfirmButton: false,
				  timer: 1500
				})
			},
			error:function(e){
				console.log(JSON.stringify(e));
			}
			
			
			
			
		}); 
		
		return false;
		
		
		
	});
	
	

});
