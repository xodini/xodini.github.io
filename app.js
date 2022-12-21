const form = document.querySelector('#form')
const course = document.querySelector('#course-select');
console.log(select)
if (select.value = 0) {
    document.querySelector('#errors').append('Course must be selected.')
}
const fullName = document.querySelector('#full-name');
console.log(firstName)
const email = document.querySelector('#email');
const preFix = document.querySelector('#phone-prefix');
const areaCode = document.querySelector('#phone-area-code');
const phoneNumber = document.querySelector('#phone-number-line');
const catering = document.querySelector('#catering-date');

if (experience.length < 50) {
    document.querySelector('#errors').append('Past experience should atleast be 50 characters')
}

if ((firstName.length <= 2) (lastName.length <= 2)) {
    document.querySelector('#errors').append('Your first and last name must be atleast 2 characters')
}

if ((areaCode.length < 3) (prefix.length < 3) (lineNumber.length <= 4)) {
    document.querySelector('#errors').append('Your phone number must be the correct length')
}
