/* const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// Hamburger button listener
btn.addEventListener('click', navToggle)

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
} */

$( function() {
    // Click on hamburger icon and then open mobile header
    $('#menu-btn').on('click', (e) => {
        $(e.target).parent().toggleClass('open')
        $menu = $('#menu').toggleClass(['flex', 'hidden'])
    })

    // Click on any certificate and then zoom in
    $('.certification-image').on('click', (e) => {
        const certification = $(e.target).attr('src')
        $('#full-certificate').children('img').attr('src', certification)
        $('#full-certificate').addClass('flex').removeClass('hidden')
    })

    // Click on full certificate and then zoom out
    $('#full-certificate').on('click', () => {
        $('#full-certificate').addClass('hidden').removeClass('flex')
    })

    // Get rid of container when inner width is less than 768px
    $(window).on( 'load resize' , () => {
        if( window.innerWidth < 768 )
            $('#hero').removeClass('container', 'mx-auto')
        else
            $('#hero').addClass('container', 'mx-auto')
    })
});