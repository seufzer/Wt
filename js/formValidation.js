document.getElementById('form').addEventListener('submit', validate);

function validate() {
    var name = document.getElementById('lastName').value;
    if(name ===''){
			alert('Nachname ausfüllen!');
			console.log("ja");
			event.preventDefault();
		}

}