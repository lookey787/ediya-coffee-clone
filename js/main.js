const header = document.querySelector('header'),
    nav = document.querySelector('.nav')

// nav mouse 올리면 header높이 300으로 증가,
// nav mouseleave시 header높이 50(원래)로 변경

nav.addEventListener('mouseover', function () {
    header.style.height = '392px'
})
nav.addEventListener('mouseout', function () {
    header.style.height = '171px'
});



$(function () {
    const $window = $(window),
        header = $('.header');
    headerOffsetTop = header.offset().top;

    // console.log(headerOffsetTop);
    $window.scroll(function () {
        //window의 스크롤양이 .page-header의 위치보다 많으면 .page-header의 포지션을 sticky로 변경하여 고정시킨다.
        if ($(this).scrollTop() > headerOffsetTop) {
            header.addClass('sticky')
            header.addClass('visual')

        } else {
            header.removeClass('sticky')
            header.removeClass('visual')
        }
    })

});

// $(function () {
//     const $window = $(window),
//         header = $('.top_nav');
//     headerOffsetTop = header.offset().top;

//     // console.log(headerOffsetTop);
//     $window.scroll(function () {
//         //window의 스크롤양이 .page-header의 위치보다 많으면 .page-header의 포지션을 sticky로 변경하여 고정시킨다.
//         if ($(this).scrollTop() > headerOffsetTop) {
//             header.addClass('visual')
//         } else {
//             header.removeClass('visual')
//         }
//     })

// });