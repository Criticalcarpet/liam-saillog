import '../css/app.css'

let getSidebar = document.querySelector('nav')
let getToggle = document.getElementsByClassName('toggle')

if (getToggle.length > 0) {
  for (let i = 0; i < getToggle.length; i++) {
    getToggle[i].addEventListener('click', function () {
      getSidebar.classList.toggle('active')
    })
  }
}
