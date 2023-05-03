const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setTimeout(function() {
    $('#message').fadeOut('slow');
}, 3000);

const small_icon= document.getElementById('small-icon')
const icon = document.getElementById('icon')

icon.addEventListener('click',()=>{
    small_icon.classList.toggle('active')
})