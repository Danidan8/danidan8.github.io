let availablePixels = 0;
let selectedColor = $('.selected').css('background-color');

$('.dispenser').click(function (e) { 
    e.preventDefault();
    availablePixels += 5;
    $('h2').html(availablePixels);
    // console.log('test');
});

$('.color').click(function (e) { 
    e.preventDefault();
    $('.color').removeClass('selected');
    $(e.currentTarget).addClass('selected');

    selectedColor = $(e.currentTarget).css('background-color');
});

$('.pixel').click(function (e) { 
    e.preventDefault();
    if(availablePixels > 0){
        availablePixels -= 1;
        $('h2').html(availablePixels);
        $(e.currentTarget).css('background-color', selectedColor);
    }
});
