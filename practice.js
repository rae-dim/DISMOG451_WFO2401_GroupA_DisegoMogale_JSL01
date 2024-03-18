let input = document.getElementById('petInput').value;
// Validation logic goes here
let result = ''; // Placeholder for validation result NOTEW it returns the html object if you use cost/let to declare the variable
let validPetName = false;



let current_year = new Date().getFullYear()

function valPet(input) { 
    let validPet = false
    //split the srting input
    const pet = input.innerText.substring(0, 4);
   

    if (pet === 'pet_'){
        validPet = true
    }
    return validPet
}

function yearValidation(year) {
    let validYear = false
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
        
            // Check if year is not in the range 1900 to current year
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
    let petNameRegex = /^([A-Z]{1}[a-z]{2,30})/;

    if (petNameRegex.test(petName) ){
    validPetNamed = true;
    }
    return validPetNamed
}


const inputElement = document.getElementById('input').value
validPet= valPet(inputElement)
validYear= yearValidation(inputElement)
validPetNamed = validSyntax(inputElement)

if (validPet == false || validYear == false || validPetNamed == false) {
    alert("Wrong Pet Code")
}
