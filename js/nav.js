$(document).ready(function(){
    var nav = $('.nav a');
    var navLine = $('.nav-line');
    var aNav = nav.parent().find('.active');
    var fnum = aNav.index();
    function countWidth(num){
        var oRight = ((nav.length-1-num)*80+37)+'px';
        navLine.stop(true,false).animate({'right':oRight},100);
        return oRight;
    }
    var aRight = countWidth(fnum);
    nav.hover(function(){
        var num = $(this).index();
        countWidth(num);
        aNav.attr('style','color:#ffffff');
    });
    $('#top-nav').mouseout(function(){
        navLine.delay(1000).stop(true,false).animate({'right': aRight},100);
        aNav.attr('style','color:#37c292');
    });
    setTimeout(function(){
        navLine.css('visibility', 'visible');
    }, 500);
});

var _hmt = _hmt || [];
var _czc = _czc || [];

$(document).ready(function(){
    var pageName;

    //链接点击统计
    function linkEventListener(){
        $('a[data-name]').each(function(index, elem) {
            elem = $(elem);
            var pos = pageName + '-' + elem.attr('data-name');
            elem.on('click', function(evt){
                _hmt.push(['_trackEvent', pos, 'click']);
                _czc.push(['_trackEvent', pos, 'click']);
            });
        });
    }

    function main(){
        pageName = $('[data-page]').attr('data-page') || document.location.pathname;
        linkEventListener();
    }

    main();
});
