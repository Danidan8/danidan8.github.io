$('.x-button').click(removeOverlay);

function removeOverlay(e) { 
    e.preventDefault();
    $('.overlay').css('display', 'none');
    
}


$('.available-item>img').click(addOverlay);

function addOverlay(e) { 
    e.preventDefault();
    $('.overlay').css('display', 'flex');
    // console.log('I am being trigered');
    // $('section').css('background-color', 'red');
}