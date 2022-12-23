let form1success = false;
const radio = document.querySelectorAll('input[name="radio-opt"]');

//Radio buttons + select validation
function checkRadio(){
    for(let i=0;i<radio.length;i++){
        if(radio[i].checked){
            if(validateSelected() !== 'not-selected'){
                form1success=true;
                window.location = "investments.html";
            }
        }
    }

    if(form1success===false){
        alert("Please fill the form before going to the next page.");
        window.location = "account-status.html";
    }
}

//Textarea validation
function checkTextArea(){
    if(text.value === ''){
      alert("Text area is empty. Please try again before going to the next page.");
    }else{
        window.location = "personaldata.html";
    }
  }
  

//Select validation
function validateSelected(){
    let selection = document.getElementById('sel');
    let seloption = selection.options[selection.selectedIndex];
    let value = seloption.value;

    console.log(value);

    return value;
}

//Validating info fields with Regex
function validatePersonalData(){
    let ageinput = document.getElementById("age");
    const ageRegex = new RegExp(/^[1-9]?[0-9]{1}$|^100$/);
    const isValidAge = ageRegex.test(ageinput.value);

    let nameinput = document.getElementById("name");
    const nameRegex = new RegExp(/^[a-zA-Z ]{2,30}$/);
    const isValidName = nameRegex.test(nameinput.value);

    let emailinput = document.getElementById("email");
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/);
    const isValidEmail = emailRegex.test(emailinput.value);

    if(isValidName === true && isValidEmail === true && isValidEmail === true){
        return true;
    }else{
        return false;
    }
}


function checkPersonalInfo(){
    if(validatePersonalData() === true){
        window.location = "success.html";
    }else{
        alert("Please enter all information correctly before continuing.");
    }
}