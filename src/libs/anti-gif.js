
function run() {
    $('video').each(function(){
        $(this).get(0).pause();
        $(this).removeAttr("autoplay");
    });

    $('video').mouseenter(function(){
        $(this).get(0).play();
    })

    $('video').mouseleave(function(){
        $(this).get(0).pause();
    })

    $('video').on('load', function () {
        $(this).get(0).pause();
    });

    $(document).on('DOMNodeInserted', function (e) {
        $('video', e.target).each(function(){
            $(this).get(0).pause();
            $(this).removeAttr("autoplay");

            $('video').mouseenter(function(){
                console.log("Hello World!");
                $(this).get(0).play();
            })

            $('video').mouseleave(function(){
                $(this).get(0).pause();
            })

        });
    });
}
