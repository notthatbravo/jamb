passwordField = document.querySelector('#password');
confirmPasswordField = document.querySelector('#c-password');


// Indicating strength of password
function checkLength(field) {
    field.addEventListener('keyup', function() {
        if (field.value.length < 8) {
            field.style.outlineColor = 'red';
        } else {
            field.style.outlineColor = '#006633';
        }
    })
}

checkLength(passwordField);
checkLength(confirmPasswordField);



confirmPasswordField.addEventListener('keyup', function() {
    if (confirmPasswordField.value == passwordField.value) {
        confirmPasswordField.style.outlineColor = '#006633';
    } else {
        confirmPasswordField.style.outlineColor = 'red';
    }
})
