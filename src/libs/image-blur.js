$( document ).ready(function() {


$('img').each(function(){
    console.log("ya");
    var link = $(this).attr("src");
    console.log(link);
    var image = $(this);
    var filterVal = 'blur(25px)';
    $.post("localhost:5000", { imgUrl : link })
        .done(function( data ) {
            console.log(JSON.stringify(data));
            image.attr('alt', data.description)

            if(data.description == "weapon") {
                //filter: blur(5px);
                image.css('filter',filterVal);

                $(this).addClass("blur");

                console.log("applying");
            }
  });
});
});
