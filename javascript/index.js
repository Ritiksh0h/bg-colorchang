const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

$("#randomColorBtn").on("click",function(){

    $('body').css({
        'background-color' : randomColor,
    });

    $("h3").html(randomColor);
})
