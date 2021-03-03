import $ from './lib/lib';

// $('button').on('click', function() {
//     $('button').toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findme'));
// $('button').fadeOut(1800);
// $('button').fadeIn(1800);

// console.log($('button').html('hello'));
$('#first').on('click', ()=> {
    $('div').eq(1).fadeToggle(800);
});
$('[data-count="second"]').on('click', ()=> {
    $('div').eq(2).fadeToggle(800);
});
$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});