$(document).ready(function(){
    $('img').each(function(){
        var link = $(this).attr('src');
        console.log(link);
        var image = $(this);
        console.log("colorblind!");

        $.post( "https://c83d8555.ngrok.io/img", { imgUrl: link })
          .done(function( image_link ) {
              console.log(image_link);
              image.attr("src", "https://c83d8555.ngrok.io" + image_link);
          });

    });
});
