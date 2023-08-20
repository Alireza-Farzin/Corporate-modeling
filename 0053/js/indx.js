$(document).ready(function () {

    let modalClic = $('.icon-nav')
    let modal = $('.modla');
    let modalCloseBtn = $('.exit')
    let body = $('.body')


    // modla

    modalClic.click(function () {

        modal.fadeIn(1000);
        body.style.display = 'none'



    })

    modalCloseBtn.click(function () {

        modal.fadeOut(1000);
        body.style.display = 'inline-block'

    })





});



