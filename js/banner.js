//首页轮播图
$(function(){
    var INTERVAL_TIME = 5000,
        MIN_WIDTH = 1000;

    var width = 0;

    var nodes = {
        btnLeft: $('#btn-pre'),
        btnRight: $('#btn-next'),
        banner: $('#banner'),
        inner: $('#banner-inner'),
        pics: $('#banner-inner div')
    };

    var autoMoveInterval;

    function moveToLeft(){
        nodes.inner.animate({
            left: 0
        }, 'slow', function(){
            replaceFirst();
            startAutoMove();
        });
    }

    function moveToRight(){
        nodes.inner.animate({
            left: -2*width
        }, 'slow', function(){
            replaceLast();
            startAutoMove();
        });
    }

    /**
     * 将最后的元素移至第一位
     */
    function replaceFirst(){
        nodes.inner.prepend(nodes.inner.find('div:last').remove());
        nodes.inner.css({
            left: -width
        });
    }


    /**
     * 将第一的元素移至最后一位
     */
    function replaceLast(){
        nodes.inner.append(nodes.inner.find('div:first').remove());
        nodes.inner.css({
            left: -width
        });
    }

    function startAutoMove(){
        suspendAutoMove();
        autoMoveInterval = setTimeout(function(){
            moveToRight();
        }, INTERVAL_TIME);
    }

    function suspendAutoMove(){
        clearTimeout(autoMoveInterval);
    }

    function resize(){
        width = nodes.banner.width();
        width = width < MIN_WIDTH ? MIN_WIDTH : width;
        nodes.inner.css({
            left: -width
        });
        nodes.pics.css({
            width: width
        });
    }

    function main(){
        nodes.inner.show();
        resize();
        replaceFirst();
        nodes.btnLeft.on('click', function(){
            suspendAutoMove();
            moveToLeft();
        });
        nodes.btnRight.on('click', function(){
            suspendAutoMove();
            moveToRight();
        });
        $(window).on('resize', resize);
        startAutoMove();
    }

    main();
});

