let validInput = false;
let result = document.getElementById('result')
function validSyntax() {
    const input = document.getElementById('petInput').value;
    const regex = /^pet_(19\d{2}|20[0-1][0-9]|202[0-4])[^\d_]+$/;
    validInput = regex.test(input);
    return validInput;
}

const inputElement = document.getElementById('petInput');
inputElement.addEventListener('change', () => {
    if (!validSyntax()) {
        result.textContent= "Ivnalid Syntax" + '\u{1f62c}' ;
    } else {
       result.textContent ="Valid Syntax" + '\u{1F604}';
    }
});