$(function  () {
    $('img.bg-max-image').maxImage({
        isBackground: true,
        overflow: 'auto',
        position: ('fixed'),
        verticalAlign:'top',
        horizontalAlign:'right',
        maxFollows: 'height' 
    });
});

$.ajax({
    type:"GET",
    url:"http://localhost/blog/feed/",
    dataType: "xml",
    success: function(xml){
        var limit = 3;
        var dest = $('.entry-container');

        console.log("success");
        $(xml).find('item').each(function(index){
            if(index<limit){
                var title = $(this).find('title').text();
                $('<h3></h3>').html(title).appendTo(dest);
                return;
            }
        })
    }

});