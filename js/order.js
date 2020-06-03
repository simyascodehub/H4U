$(document).ready(function() {
    $('.orderbutton').on('click', function() {
        console.log('hi222222222');
        var imgsrc = $(this).prev('a').attr('href');
        var res = encodeURIComponent(imgsrc);
        console.log(res);
        var link = "https://api.whatsapp.com/send?phone=918921212317&text=I%20would%20like%20to%20order%20this%20product%20https://simyascodehub.github.io/H4U/" + res;
        console.log(link);
        console.log('hihih222222222ih');
        console.log(imgsrc);
        window.location = link;
    })
});