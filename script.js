let input = document.getElementById('petInput').value;
// Validation logic goes here
let result = ''; // Placeholder for validation result NOTEW it returns the html object if you use cost/let to declare the variable
let validPetName = false;
let validPet = false
let validYear = false
let validPetNamed = false
let current_year = new Date().getFullYear()

function validateSyntax(input) { 
    //split the srting input
    const pet = input.innerText.substring(0, 4);
    const year = input.innerText.substring(4, 8);
    const petName = input.innerText.substring(8);

    if (pet === 'pet_'){
        validPet = true
    }

    function yearValidation(year) {
        // Regular expression to match only digits
           let regex =  /^[0-9]+$/;
            if(!RegExp.test(year)) {
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
    validYear = yearValidation(year)

    let petNameRegex = /^([A-Z]{1}[a-z]{2,30})/i;

    if (petNameRegex.test(petName) ){
    validPetNamed = true;
    }
return {validPet, validYear, validPetNamed}
}

const inputElement = document.getElementById('input').value
const  {validPet, validYear, validPetNamed} = validSyntax(inputElement)

if (validPetName = validateSyntax(input)){
    alert("Wrong Pet Code")
}
