$(document).ready(function(){
    $('img').each(function(){
        var link = $(this).attr('src');
        console.log(link);
        var image = $(this);
        console.log("colorblind!");

        $.post( "localhost:5000", { imgUrl: link })
          .done(function( image_link ) {
              console.log(image_link);
              image.attr("src", "localhost:5000" + image_link);
          });

    });
});
