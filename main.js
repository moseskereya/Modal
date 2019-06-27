const mydocs = document.querySelector('.modal');
const mybutton = document.querySelector('.myButton')
const close = document.querySelector('.close')
mybutton.addEventListener('click', function(){
    mydocs.style.display = 'block';
})

close.onclick = function(){
    mydocs.style.display = 'none';
}

setTimeout(close, 2000)
setTimeout(mybutton, 2000)



window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }