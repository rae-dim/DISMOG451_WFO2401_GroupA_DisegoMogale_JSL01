let input = document.getElementById('petInput').value;
// Validation logic goes here
let result = document.getElementById('result'); // Placeholder for validation result NOTEW it returns the html object if you use cost/let to declare the variable
let current_year = new Date().getFullYear()

function validateSyntax(){

    function validatePet(input) { 
        let validPet = false
        //split the srting input
        const pet = input.substring(0, 4); //substring() is used to split the input pet code into seperate sections to validate them individually
    

        if (pet === 'pet_'){
            validPet = true 
        }
        return validPet //the function (like the ones after eat) are boolean functions.
    }

    function yearValidation(input) {
        let validYear = true //!is this line at all necessary?
        const input_year = input.substring(4, 8);

            // Regular expression to match only digits
            let regex =  /^[0-9]+$/;
                if(!(regex.test(year))) {
                validYear = false;
                }
                // Check if year length is not equal to 4
                if (input_year.length !== 4) {
            
                validYear = false;
                }
            
                // Check if year is not in the range 1900 to current year, logical age for pets like tortoises
                if (year < 1900 || year > current_year) {
                validYear = false;
                } 
                    //!! How do i bring back tah variable validYyear into the function, not sure where to put it in order to validate it
                return validYear;
                // Year is valid
                
    }


    function validatePetNamed(input) {
        let validPetNamed= false
        const petName = input.substring(8);
        //Regular Expression Ussed to check that the Pet Name starts with capital letters followed by a series of small letters
        let petNameRegex = /^([A-Z]{1}[a-z]{2,30})/;

        if (petNameRegex.test(petName) ){
        validPetNamed = true;
        } 
        return validPetNamed;
    }


    const inputElement = document.getElementById('petInput').value
    const validPet= validatePet(inputElement)
    const validYear= yearValidation(inputElement)
    const validPetNamed = validatePetNamed(inputElement) 

    if (validPet === true && validYear == true && validPetNamed == true) {
        result.textContent= "Valid Syntax" ;
    } else {
        result.textContent= "Invalid Syntax" ;
    }
}