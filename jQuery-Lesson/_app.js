// $(function(){
//     $('.box1').slideDown(1000,function(){
//         $('.box1').css({
//             'background-color': '#0000FF',
//             'width': '200px',
//             'height': '100px'
//         }).slideUp(2000);
//     });
// });

$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
});
$(function(){
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});