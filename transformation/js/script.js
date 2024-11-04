$(document).ready(function() {
    $('.circle').hover(
        function() {
            $(this).css('background-color', 'orange').text('Hello!');
        },
        function() {
            $(this).css('background-color', 'lightseagreen').text('Hover Me');
        }
    );

    $('.circle').click(function() {
        $(this).animate({ width: '200px', height: '200px' }, 'slow')
               .css('background-color', 'purple')
               .text('Clicked!');
    });
});
