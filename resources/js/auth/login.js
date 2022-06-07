import '../../css/auth/login.css'

const onSubmit = () => {
  const email = document.getElementById('emailField')
  const password = document.getElementById('passwordField')

  const emailError = document.getElementById('emailError')
  const passwordError = document.getElementById('passwordError')

  if (!emailError.classList.contains('invisible')) emailError.classList.add('invisible')
  if (!passwordError.classList.contains('invisible')) passwordError.classList.add('invisible')

  /* Email Validation */
  if (!email.value || email.value === '') {
    emailError.innerHTML = 'This field cannot be empty.'
    if (emailError.classList.contains('invisible')) emailError.classList.remove('invisible')
    return false
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-._]+)$/.test(email.value)) {
    emailError.innerHTML = 'Enter a valid email address.'
    if (emailError.classList.contains('invisible')) emailError.classList.remove('invisible')
    return false
  }

  /* Password Validation */
  if (!password.value || password.value === '') {
    passwordError.innerHTML = 'This field cannot be empty.'
    if (passwordError.classList.contains('invisible')) passwordError.classList.remove('invisible')
    return false
  }
  if (password.value.length < 8) {
    passwordError.innerHTML = 'Must be a minimum of 8 characters.'
    if (passwordError.classList.contains('invisible')) passwordError.classList.remove('invisible')
    return false
  }

  /* AdonisJS auth stuff here */

  return true
}
