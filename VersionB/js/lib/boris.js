$(document).ready(docReady);
var classIn;
var classOut;
function docReady(){
    includeHTML();
    $('nav').ready(navReady);

    setInterfaceHeight()
    addPageAnimation();
    addPage();
}
function navReady(){
    setInterfaceHeight()
    addPageNavigation();
}
function setInterfaceHeight(){
    var windowHeight = $(window).height();
    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();
    $('main').css('top',headerHeight);
    $('#template>section').css('height',windowHeight - headerHeight - footerHeight + 'px');
}
function addPageAnimation(){
    if($('main').attr('class-in')){classIn = $('main').attr('class-in')}
    if($('main').attr('class-out')){classOut = $('main').attr('class-out')}
}
function addPageNavigation(){
    var sectionArray = $('#template>section');
    var navBtnArray = $('.main-nav li');
    console.log(navBtnArray)  

    for(var i = 0;i < navBtnArray.length;i++){
        $(navBtnArray[i]).click({section:sectionArray[i]},pageNavigationClicked); 
    }
}
function pageNavigationClicked(event){
    if($('#offcanvas-nav').length != 0){
        UIkit.offcanvas($('#offcanvas-nav')).hide();
    }
    var $button = $(event.currentTarget);
    var $section = $(event.data.section);
    if(!$button.hasClass('uk-active')){
        $('.uk-active').removeClass('uk-active')
        $button.addClass('uk-active')
        addPage($section);
    }
    navBtnClicked($button,$section);
}
function addPage(section = $('#template>section')[0]){
    var $section = $(section).clone(true); 
    $section.addClass(classIn);
    $('body>main').prepend($section);
    $('body>main>section:nth-child(2)').removeClass(classIn);
    $('body>main>section:nth-child(2)').addClass(classOut);
    $('body>main>section:nth-child(3)').remove();
}

function navBtnClicked(button,page){
    console.log('button',button);
    console.log('page',page);
}