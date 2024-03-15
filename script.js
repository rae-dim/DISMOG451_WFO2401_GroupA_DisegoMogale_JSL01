let input = document.getElementById('petInput').value;
// Validation logic goes here
let result = ''; // Placeholder for validation result NOTEW it returns the html object if you use cost/let to declare the variable
let validPetName = false;
let validPet = false
let validYear = false
let validPetNamed = false
let current_year = new Date().getFullYear()

function validateSyntax() { 
    //split the srting input
    const pet = input.innerText.substring(0, 4);
    const year = input.innerText.substring(4, 8);
    const petName = input.innerText.substring(8);
    
    if (pet === 'pet_'){
        validPet = true
    }
    function yearValidation(year) {
        // Regular expression to match only digits
            if (year != /^[0-9]+$/;){
            return false
            }
            // Check if year length is not equal to 4
            if (year.length !== 4) {
        
            return false;
            }
        
            // Check if year is not in the range 1900 to current year
            if (year < 1900 || year > current_year) {
            return false;
            }
        
            // Year is valid
            return true;
    }
    if (yearValidation(year) = true){
        validYear = true
    }

    if (petName != /^([A-Z]{1}[a-z]{2,30})/){
    validPetNamed = true;
}


    /* if (input.value == `
    pet_ + RegExp([\w-])
    `){
        validPetName = true;
        result = input;
    } else {
        alert("This is not a valid adoption code")
    }*/

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
debugger;
            document.getElementById('result').innerText = result;
                validPetName=true
}

