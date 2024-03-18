let input = document.getElementById('petInput').value;
// Validation logic goes here
let result = document.getElementById("result"); // Placeholder for validation result NOTEW it returns the html object if you use cost/let to declare the variable
let validPetName = false;



let current_year = new Date().getFullYear()

function valPet(input) { 
    let validPet = false
    //split the srting input
    const pet = input.innerText.substring(0, 4); //substring() is used to split the input pet code into seperate sections to validate them individually
   

    if (pet === 'pet_'){
        validPet = true 
    }
    return validPet //the function (like the ones after eat) are boolean functions.
}

function yearValidation(year) {
    let validYear = false //!is this line at all necessary?
    const year = input.innerText.substring(4, 8);

        // Regular expression to match only digits
           let regex =  /^[0-9]+$/;
            if(!RegExp.test(year)) {
            return false
            }
            // Check if year length is not equal to 4
            if (year.length !== 4) {
        
            return false;
            }
        
            // Check if year is not in the range 1900 to current year, logical age for pets like tortoises
            if (year < 1900 || year > current_year) {
            return false;
            } 
                //!! How do i bring back tah variable validYyear into the function, not sure where to put it in order to validate it
            return true;
            // Year is valid
            
}


function valPetNamed(input) {
    let validPetNamed= false
    const petName = input.innerText.substring(8);
    //Regular Expression Ussed to check that the Pet Name starts with capital letters followed by a series of small letters
    let petNameRegex = /^([A-Z]{1}[a-z]{2,30})/;

    if (petNameRegex.test(petName) ){
    validPetNamed = true;
    } 
    return false;
}


const inputElement = document.getElementById('input').value
validPet= valPet(inputElement)
validYear= yearValidation(inputElement)
validPetNamed = valPetNamed(inputElement) // !in the first pictures i was referencing the valid syntax function, not the valPetNamed one

if (validPet == false && validYear == false && validPetNamed == false) {
    result.innerText= "Invalid Syntax" 
} else {
    result.innertext= "Valid Syntax"
}
