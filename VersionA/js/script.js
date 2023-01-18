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
    if($('.main-input').val().toLowerCase() == 'mouse' && $('.where-input').val().toLowerCase() == 'enschede' && $('.when-input').val()){
        $('.random-items').css('display', 'none');
        $('.mice').css('display', 'flex');
        $('.main-input').val('');
        $('.where-input').val('');
        $('.when-input').val('');
    }else{
        alert('Please fill out all fields properly')
    }
}