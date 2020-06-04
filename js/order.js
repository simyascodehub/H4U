$(document).ready(function() {
    $('.orderbutton').on('click', function() {
        var imgsrc = $(this).prev('a').attr('href');
        var res = encodeURIComponent(imgsrc);
        console.log(res);
        var link = "https://api.whatsapp.com/send?phone=918921212317&text=Hello!%20I%20would%20like%20to%20order%20this%20product%20https://simyascodehub.github.io/H4U/" + res;
        window.location = link;
    })
});

$(document).ready(function() {


});