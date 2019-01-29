window.addEventListener('load',init,false);
function init(){
	
	var lastName=document.getElementById('lastName');
	var firstName=document.getElementById('firstName');
	var birthDate=document.getElementById('date');
	var email=document.getElementById('email');
	var submit=document.getElementById('submit');
	var form=document.getElementsByTagName('form')[0];

	
	lastName.addEventListener('blur',function(){showValue(lastName);},false);
	firstName.addEventListener('blur',function(){showValue(firstName);},false);
	birthDate.addEventListener('blur',function(){showValue(birthDate);},false);
	email.addEventListener('blur',function(){showValue(email);},false);
	
	
	function showValue(field){
		console.log('inside showValue');
		console.log(field.value);
		
		if(field.value!=='')
			return true;
		else{
			alert('form cannot be left empty !');	
			return false;
		}
	}

form.addEventListener('submit',function(e){
	e.preventDefault();
	if (validate()){
	alert("forwarding");
	location.replace('gallery.html');
	}
});

	function validate(){
		console.log('inside validate');
		
		
		if(lastName.value===''){
			alert('please fill your last name');
			console.log("false last");
			return false;
		}
		else if(!isNaN(lastName.value)){
			alert(`${lastName.value} is a number, add your last name`);
			console.log("false last");
			return false;
		}
	
		else if(firstName.value===''){

			alert('please fill your first name');
			console.log("false first");
			return false;
		}
		
		else if(email.value===''){
			alert('add your email');
			console.log("false email");
			return false;
		}

		else if(birthDate.value===''){
			alert('please add your birthday');
			console.log("false birth");
			return false;
		}
		

		else if(birthDate.value !==''&&email.value!==''&&firstName.value!==''&&lastName.value!==''){
			console.log("every are true");
			return true;
		}
		

		else
			return true;
	}
		
}