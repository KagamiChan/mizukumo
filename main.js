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
        var limit = 4;
        var dest = $('.entry-container');

        console.log("success");
        $(xml).find('item').each(function(index){
            if(index<limit){
                var title = $(this).find('title').text();
                var tags = "";
                $(this).find('category').each(function(){
                    tags+=$(this).text()+"  ";
                });
                var link =$(this).find('link').text()

                var pubDateRaw = $(this).find('pubDate').text();
                var date = new Date(pubDateRaw);
                var month =Array("一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月");
                var pubDate=date.getFullYear()+"年"+month[date.getMonth()]+date.getDate()+"日";


                text = $('<a></a>').addClass('entry');
                $('<h3></h3>').html(title).appendTo(text);
                outdate = $('<p></p>');
                $('<span></span>').addClass('icon-envelope-alt').appendTo(outdate);
                $('<span></span>').html(pubDate).appendTo(outdate);
                outdate.appendTo(text);
                $('<span></span>').addClass('icon-tags').appendTo(text);
                $('<span></span>').html(tags).appendTo(text);
                text.attr({'href':link});
                text.appendTo(dest);
                return;
            }
        })
    }

});