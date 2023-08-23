validateEmail = (email) =>{
    const validEmail = /.*@.*\..*/;
    return validEmail.test(email)
}


let button = document.querySelector('#submit-email-btn')
const input = document.getElementById('email-input')

button.addEventListener('click', function (){
    let email = document.getElementById('email-input')
    console.log(email.value)
    console.log(validateEmail(email.value))
    if (validateEmail(email.value) == false){
        input.style.borderColor= 'orange'
        input.style.color = 'orange'
        input.style.backgroundColor = '#FFE8E6'
    }
})