document.getElementById("form").onsubmit = function(e){

// get values
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let age = document.getElementById("age").value;
let terms = document.getElementById("terms").checked;

// check the conditions
if(name.length < 3){
alert("Enter valid name");
return;
}

if(!email.includes("@") || !email.includes(".com")){
alert("Enter valid email (.com)");
return;
}

if(phone.length != 10){
alert("Phone must be 10 digits");
return;
}

if(age < 18 || age > 60){
alert("Age must be between 18 and 60");
return;
}

if(!terms){
alert("Accept terms");
return;
}

// if everything correct, display result
document.getElementById("result").innerHTML =
"Name: " + name + "<br>" +
"Email: " + email + "<br>" +
"Phone: " + phone + "<br>" +
"Age: " + age;
e.preventDefault();//it hold the output in the same page without refreshing

// reset form
document.getElementById("form").reset();

};