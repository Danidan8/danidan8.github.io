$('.x-button').click(removeOverlay);
$('.send-button').click(removeOverlay);
// $('html').keypress(removeOverlay);

function removeOverlay(e) { 
    e.preventDefault();
    $('.overlay').css('display', 'none');
    
}


// $('.available-item>img').click(addOverlay);

// function addOverlay(e) { 
//     e.preventDefault();
//     $('.overlay').css('display', 'flex');
// }

$('.rentable-item>img').click(OverlayToRentable);
function OverlayToRentable(e){
    e.preventDefault();
    $('.contact-owner-button').css('visibility', 'visible');
    $('.overlay').css('display', 'flex');
    $('form.overlay-form').css('visibility', 'hidden');
}

$('.lent-item>img').click(OverlayToLent);
function OverlayToLent(e){
    e.preventDefault();
    $('.contact-owner-button').css('visibility', 'hidden');
    $('.overlay').css('display', 'flex');
    $('form.overlay-form').css('display', 'none');
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

