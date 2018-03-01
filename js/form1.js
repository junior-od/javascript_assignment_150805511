document.getElementById("full_name").addEventListener("mouseleave", function(){
	var alphaExp = /^[a-zA-Z ]+$/;
	var full_name =document.getElementById("full_name").value;
	if (alphaExp.test(full_name)){
		document.getElementById("full_name").style.borderColor="black";

		document.getElementById("user_email_label").style.visibility="visible";
		document.getElementById("user_email").style.visibility="visible";

	}
	else {
		document.getElementById("full_name").style.borderColor="red";

		document.getElementById("user_email").style.borderColor="black";
		document.getElementById("user_email_label").style.visibility="hidden";
		document.getElementById("user_email").style.visibility="hidden";
		document.getElementById("user_email").value=" ";

		document.getElementById("user_age").style.borderColor="black";
		document.getElementById("user_age_label").style.visibility="hidden";
		document.getElementById("user_age").style.visibility="hidden";
		document.getElementById("user_age").value=" ";

		document.getElementById("user_relationship").style.borderColor="black";
		document.getElementById("user_relationship_label").style.visibility="hidden";
		document.getElementById("user_relationship").style.visibility="hidden";
		document.getElementById("user_relationship").value=" ";

		document.getElementById("user_message").style.borderColor="black";
		document.getElementById("user_message_label").style.visibility="hidden";
		document.getElementById("user_message").style.visibility="hidden";
		document.getElementById("user_message").value=" ";

		document.getElementById("user_school_occupation_label").style.visibility="hidden";
		document.getElementById("user_school_occupation").style.visibility="hidden";
		document.getElementById("user_school_occupation").value=" ";

		
		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";



	}
});

document.getElementById("user_email").addEventListener("mouseleave", function(){
	var emailExp=/^([A-Za-z0-9_\.\-]){1,}\@([A-Za-z\.\-]){1,}\.([A-za-z]{2,4})$/;
	var user_email =document.getElementById("user_email").value;
	if (emailExp.test(user_email)){
		document.getElementById("user_email").style.borderColor="black";

		document.getElementById("user_age_label").style.visibility="visible";
		document.getElementById("user_age").style.visibility="visible";
	}
	else{
		document.getElementById("user_email").style.borderColor="red";

		document.getElementById("user_age").style.borderColor="black";
		document.getElementById("user_age_label").style.visibility="hidden";
		document.getElementById("user_age").style.visibility="hidden";
		document.getElementById("user_age").value=" ";

		document.getElementById("user_relationship").style.borderColor="black";
		document.getElementById("user_relationship_label").style.visibility="hidden";
		document.getElementById("user_relationship").style.visibility="hidden";
		document.getElementById("user_relationship").value=" ";

		
		document.getElementById("user_message").style.borderColor="black";
		document.getElementById("user_message_label").style.visibility="hidden";
		document.getElementById("user_message").style.visibility="hidden";
		document.getElementById("user_message").value=" ";

		

		document.getElementById("user_school_occupation").style.borderColor="black";
		document.getElementById("user_school_occupation_label").style.visibility="hidden";
		document.getElementById("user_school_occupation").style.visibility="hidden";
		document.getElementById("user_school_occupation").value=" ";

		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";


	}


});

document.getElementById("user_age").addEventListener("mouseleave", function(){
	var ageExp= /^[0-9]+$/;
	var user_age =document.getElementById("user_age").value;
	if (ageExp.test(user_age)){
		if (user_age >0 && user_age < 150){
			document.getElementById("user_age").style.borderColor="black";

			document.getElementById("user_relationship_label").style.visibility="visible";
			document.getElementById("user_relationship").style.visibility="visible";
		}
		else{
			document.getElementById("user_age").style.borderColor="red";

			document.getElementById("user_relationship").style.borderColor="black";
			document.getElementById("user_relationship_label").style.visibility="hidden";
			document.getElementById("user_relationship").style.visibility="hidden";
			document.getElementById("user_relationship").value=" ";

			document.getElementById("user_message").style.borderColor="black";
			document.getElementById("user_message_label").style.visibility="hidden";
			document.getElementById("user_message").style.visibility="hidden";
			document.getElementById("user_message").value=" ";

		

			document.getElementById("user_school_occupation").style.borderColor="black";
			document.getElementById("user_school_occupation_label").style.visibility="hidden";
			document.getElementById("user_school_occupation").style.visibility="hidden";
			document.getElementById("user_school_occupation").value=" ";

			document.getElementById("user_phone_number").style.borderColor="black";
			document.getElementById("user_phone_number_label").style.visibility="hidden";
			document.getElementById("user_phone_number").style.visibility="hidden";
			document.getElementById("user_phone_number").value=" ";

			document.getElementById("user_gender").style.borderColor="black";
			document.getElementById("user_gender_label").style.visibility="hidden";
			document.getElementById("user_gender").style.visibility="hidden";
			document.getElementById("user_gender").value=" ";

		    document.getElementById("user_country").style.borderColor="black";
			document.getElementById("user_country_label").style.visibility="hidden";
			document.getElementById("user_country").style.visibility="hidden";
			document.getElementById("user_country").value=" ";

			document.getElementById("user_dob_label").style.visibility="hidden";
			document.getElementById("user_dob").style.visibility="hidden";
			document.getElementById("user_dob").value=" ";



		}
	}
	else{
		document.getElementById("user_age").style.borderColor="red";

		document.getElementById("user_relationship").style.borderColor="black";
		document.getElementById("user_relationship_label").style.visibility="hidden";
		document.getElementById("user_relationship").style.visibility="hidden";
		document.getElementById("user_relationship").value=" ";

		
		document.getElementById("user_message").style.borderColor="black";
		document.getElementById("user_message_label").style.visibility="hidden";
		document.getElementById("user_message").style.visibility="hidden";
		document.getElementById("user_message").value=" ";

		

		document.getElementById("user_school_occupation").style.borderColor="black";
		document.getElementById("user_school_occupation_label").style.visibility="hidden";
		document.getElementById("user_school_occupation").style.visibility="hidden";
		document.getElementById("user_school_occupation").value=" ";

		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";
	}
});

document.getElementById("user_relationship").addEventListener("mouseleave" ,  function(){
	var user_relationship = document.getElementById("user_relationship").value;
	if (user_relationship ==="Married"){
		document.getElementById("user_relationship").style.borderColor="black";

		document.getElementById("user_message_label").style.visibility="visible";
		document.getElementById("user_message").style.visibility="visible";

	}
	else if (user_relationship ==="Single"){
		document.getElementById("user_relationship").style.borderColor="black";

		document.getElementById("user_message_label").style.visibility="visible";
		document.getElementById("user_message").style.visibility="visible";

	}
	else if (user_relationship ==="Complicated"){
		document.getElementById("user_relationship").style.borderColor="black";

		document.getElementById("user_message_label").style.visibility="visible";
		document.getElementById("user_message").style.visibility="visible";

	}
	else{
		document.getElementById("user_relationship").style.borderColor="red";

		document.getElementById("user_message").style.borderColor="black";
		document.getElementById("user_message_label").style.visibility="hidden";
		document.getElementById("user_message").style.visibility="hidden";
		document.getElementById("user_message").value=" ";

		

		document.getElementById("user_school_occupation").style.borderColor="black";
		document.getElementById("user_school_occupation_label").style.visibility="hidden";
		document.getElementById("user_school_occupation").style.visibility="hidden";
		document.getElementById("user_school_occupation").value=" ";

		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";

	}
});

document.getElementById("user_message").addEventListener("mouseleave" , function(){
	var alphaExp = /^[a-zA-Z ]+$/;
	var user_message = document.getElementById("user_message").value;
	if (alphaExp.test(user_message) && user_message != " "){
		document.getElementById("user_message").style.borderColor="black";

		document.getElementById("user_school_occupation_label").style.visibility="visible";
		document.getElementById("user_school_occupation").style.visibility="visible";

	}
	else{
		document.getElementById("user_message").style.borderColor="red";
		

		document.getElementById("user_school_occupation").style.borderColor="black";
		document.getElementById("user_school_occupation_label").style.visibility="hidden";
		document.getElementById("user_school_occupation").style.visibility="hidden";
		document.getElementById("user_school_occupation").value=" ";

		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";

	}
});

document.getElementById("user_school_occupation").addEventListener("mouseleave", function(){
	var alphaExp = /^[a-zA-Z ]+$/;
	var user_school_occupation = document.getElementById("user_school_occupation").value;
	if (alphaExp.test(user_school_occupation) && user_school_occupation !== " "){
		document.getElementById("user_school_occupation").style.borderColor="black";

		document.getElementById("user_phone_number_label").style.visibility="visible";
		document.getElementById("user_phone_number").style.visibility="visible";

	}
	else{
		document.getElementById("user_school_occupation").style.borderColor="red";

		document.getElementById("user_phone_number").style.borderColor="black";
		document.getElementById("user_phone_number_label").style.visibility="hidden";
		document.getElementById("user_phone_number").style.visibility="hidden";
		document.getElementById("user_phone_number").value=" ";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";


	}
});

document.getElementById("user_phone_number").addEventListener("mouseleave", function(){
	var phoneExp = /^[0-9\+]+$/;
	var user_phone_number = document.getElementById("user_phone_number").value;
	var user_phone_number_length = document.getElementById("user_phone_number").value.length;
	if (phoneExp.test(user_phone_number)){
		if (user_phone_number_length > 9 && user_phone_number_length < 15){
			document.getElementById("user_phone_number").style.borderColor="black";

			document.getElementById("user_gender_label").style.visibility="visible";
			document.getElementById("user_gender").style.visibility="visible";

		}
		else{
			document.getElementById("user_phone_number").style.borderColor="red";

     		document.getElementById("user_gender").style.borderColor="black";
			document.getElementById("user_gender_label").style.visibility="hidden";
			document.getElementById("user_gender").style.visibility="hidden";
			document.getElementById("user_gender").value=" ";

		    document.getElementById("user_country").style.borderColor="black";
		    document.getElementById("user_country").style.borderColor="black";
			document.getElementById("user_country_label").style.visibility="hidden";
			document.getElementById("user_country").style.visibility="hidden";
			document.getElementById("user_country").value=" ";

			document.getElementById("user_dob_label").style.visibility="hidden";
			document.getElementById("user_dob").style.visibility="hidden";
			document.getElementById("user_dob").value=" ";

		}
	}
	else{
		document.getElementById("user_phone_number").style.borderColor="red";

		document.getElementById("user_gender").style.borderColor="black";
		document.getElementById("user_gender_label").style.visibility="hidden";
		document.getElementById("user_gender").style.visibility="hidden";
		document.getElementById("user_gender").value=" ";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";

	}

});

document.getElementById("user_gender").addEventListener("mouseleave", function(){
	var user_gender = document.getElementById("user_gender").value;
	if (user_gender === "Male"){
		document.getElementById("user_gender").style.borderColor="black";

		document.getElementById("user_country_label").style.visibility="visible";
		document.getElementById("user_country").style.visibility="visible";
	}
	else if (user_gender === "Female"){
		document.getElementById("user_gender").style.borderColor="black";

		document.getElementById("user_country_label").style.visibility="visible";
		document.getElementById("user_country").style.visibility="visible";
	}
	else{
		document.getElementById("user_gender").style.borderColor="red";

		document.getElementById("user_country").style.borderColor="black";
		document.getElementById("user_country_label").style.visibility="hidden";
		document.getElementById("user_country").style.visibility="hidden";
		document.getElementById("user_country").value=" ";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";
	}
});


document.getElementById("user_country").addEventListener("mouseleave", function(){
	var alphaExp = /^[a-zA-Z ]+$/;
	var user_country = document.getElementById("user_country").value;
	if (alphaExp.test(user_country) && user_country !== " "){
		document.getElementById("user_country").style.borderColor="black";

		document.getElementById("user_dob_label").style.visibility="visible";
		document.getElementById("user_dob").style.visibility="visible";

	}
	else{
		document.getElementById("user_country").style.borderColor="red";

		document.getElementById("user_dob_label").style.visibility="hidden";
		document.getElementById("user_dob").style.visibility="hidden";
		document.getElementById("user_dob").value=" ";
	}
});