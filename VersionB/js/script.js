$('.mice').css('display', 'none');

$('.x-button').click(removeOverlay);
$('.send-button').click(removeOverlay);
// $('html').keypress(removeOverlay);

function removeOverlay(e) { 
    e.preventDefault();
    $('.overlay').css('display', 'none');
    
}

$('.mouse>img').click(OverlayToRentable);
function OverlayToRentable(e){
    e.preventDefault();
    $('.contact-owner-button').css('visibility', 'visible');
    $('.overlay').css('display', 'flex');
    $('form.overlay-form').css('visibility', 'hidden');
}

$('.contact-owner-button').click(openMessageSender);
function openMessageSender(e) { 
    e.preventDefault();
    $('form.overlay-form').css('visibility', 'visible');   
}

$('.back-arrow').click(backArrow);
function backArrow(e) { 
    e.preventDefault();
    $('form.overlay-form').css('visibility', 'hidden');   
}

$('.main-search-button').click(search);
function search(e) { 
    e.preventDefault();

    if($('.main-input').val().toLowerCase() == 'mouse'){
        $('.random-items').css('display', 'none');
        $('.mice').css('display', 'flex');
        $('.main-input').val('')
    }
}