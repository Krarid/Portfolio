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

    function hideMenu()
    {
        $('#menu-btn').toggleClass('open')
        $('#menu').toggleClass(['flex', 'hidden'])
    }

    // Click on hamburger icon and then open mobile header
    $('#menu-btn').on('click', hideMenu)

    // After clicking on any item header in mobile version the fixed layaout is removed
    $('div.mobile-menu-item').on('click', hideMenu)

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

    // Click on see more... and expand the low level test cases
    $('#see-more').on('mousedown', (e) => {
        $('#low-level').removeClass('h-96', 'overflow-hidden');
        $(e.target).parent().addClass('hidden');
        $('#see-less').parent().removeClass('hidden');
    })

    // Click on see less... and contract the low level test cases
    $('#see-less').on('mousedown', (e)=> {
        $('#low-level').addClass('h-96', 'overflow-hidden');
        $(e.target).parent().addClass('hidden');
        $('#see-more').parent().removeClass('hidden');
    })

    // Click on see more... and expand the gerkhin
    $('#see-more-gerkhin').on('mousedown', (e) => {
        $('#gerkhin').removeClass('h-128', 'overflow-hidden');
        $(e.target).parent().addClass('hidden');
        $('#see-less-gerkhin').parent().removeClass('hidden');
    })

    // Click on see less... and contract the gerkhin
    $('#see-less-gerkhin').on('mousedown', (e) => {
        $('#gerkhin').addClass('h-128', 'overflow-hidden');
        $(e.target).parent().addClass('hidden');
        $('#see-more-gerkhin').parent().removeClass('hidden');
    })

    // Hover over the projects and display the framework used
    $('#project1').on('mouseenter', (e) => {
        $('#project1 img').removeAttr('src').attr('src', 'images/skillset/selenium.png');
    })

    // Hover over the projects and display the framework used
    $('#project1').on('mouseleave', (e) => {
        $('#project1 img').removeAttr('src').attr('src', 'images/projects/LUMA.png');
    })

    // Hover over the projects and display the framework used
    $('#project2').on('mouseenter', (e) => {
        $('#project2 img').removeAttr('src').attr('src', 'images/skillset/cypress.png');
    })

    // Hover over the projects and display the framework used
    $('#project2').on('mouseleave', (e) => {
        $('#project2 img').removeAttr('src').attr('src', 'images/projects/orangehrm.png');
    })

     // Hover over the projects and display the framework used
     $('#project3').on('mouseenter', (e) => {
        $('#project3 img').removeAttr('src').attr('src', 'images/skillset/appium.png');
    })

    // Hover over the projects and display the framework used
    $('#project3').on('mouseleave', (e) => {
        $('#project3 img').removeAttr('src').attr('src', 'images/projects/MyDemoApp.png');
    })

    // Go back when pressing left arrow
    $(".back").on('click', (e)=> {
        window.history.back();
    } )
});