let close_btn = document.querySelector('.close');
let click = document.querySelector('button');
let modal = document.querySelector('.modal');
let img = document.querySelectorAll('img');
let modalImg = document.querySelector('.modal img');



close_btn.addEventListener('click', function () {
    modal.style.display = 'none';
})
click.addEventListener('click', function () {
    modal.style.display = 'block';
})
window.addEventListener('click', function () {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    for (let i = 0; i < img.length; i++) {
        if (event.target == img[i]) {
            modal.style.display = 'block';
            let scr = img[i].src;
            modalImg.src = scr
        }
    }
})