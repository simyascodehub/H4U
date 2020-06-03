$(document).ready(function() {
    $('.orderbutton').on('click', function() {
        console.log('hi222222222');
        var imgsrc = $(this).prev('a').attr('href');
        var link = "https://api.whatsapp.com/send?phone=918921212317&text=Iwouldliketoorder%20https://simyascodehub.github.io/H4U/" + imgsrc;

        console.log('hihihih');
        console.log(imgsrc);
        window.location = link;
    })
});