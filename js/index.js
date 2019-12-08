
window.onload = function() {
    /* 初始化页面功能 */
    /* 搜索 */
    this.search();
    /* 轮播图 */
    this.banner();
    /* 倒计时 */
    this.downTime();
    
}

var search = function() {
    var search = document.querySelector('.jd_search_box');
    var banner = document.querySelector('.jd_search');
    /*距离范围*/
    var height = banner.offsetHeight;
    
    /*监听滚动事件*/
    window.onscroll = function() {
        /*获取当前页面滚动的距离*/
        var top = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0; 

        var opacity = 0;

        if(top > height) {
            opacity = 0.85;
        } else {
            opacity = 0.85 * (top/height);
        }
        /*设置颜色给搜索盒子*/
        search.style.background = 'rgba(216, 80, 92,' + opacity + ')';
    }
}

var banner = function() {
    /*
    * 1. 无缝滚动&无缝滑动（定时器 过渡 位移）
    * 2. 点盒子对应改变 （改变当前样式）
    * 3. 可以滑动 （touch事件 监听触摸点坐标改变距离 位移）
    * 4. 当滑动距离不够 吸附回去 （过渡 位移）
    * 5. 当滑动距离够了时 跳转  上一张  下一张 （判断方向 过渡和位移）
    * */

    var banner = document.querySelector('.jd_banner');
    var width = banner.offsetWidth;
    var imageBox = banner.querySelector('ul:first-child');
    var pointBox = banner.querySelector('ul:last-child');
    var points = pointBox.querySelectorAll('li');

    var addTransition = function() {
        /*过渡*/
        imageBox.style.transition = 'all 0.2s';
        imageBox.style.webkitTransition = 'all 0.2s';
    }

    var removeTransition = function() {
        /*清除过渡*/
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    }

    var setTranslateX = function(translateX) {
        imageBox.style.transform = 'translateX(' + translateX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    }

    /* 1. 无缝滚动&无缝滑动（定时器 过渡 位移）*/
    var index = 1; /*默认索引*/
    var timer = setInterval(function(){
        index++;
        addTransition();
        /*位移*/
        setTranslateX(-index*width);
    },1000);

    imageBox.addEventListener('transitionend', function(){
        if(index >= 4) {
            index = 1;
            removeTransition();
            /*定位*/
            setTranslateX(-index*width);
            /*无缝滑动*/
        } else if(index <= 0) {
            index = 3;
            removeTransition();
            setTranslateX(-index*width);
        }

        setPoint();
    });

    /* 2. 点盒子对应改变 （改变当前样式）*/
    var setPoint = function() {
        for(var i = 0; i < points.length; i++) {
            points[i].classList.remove('now');
        }
        points[index-1].classList.add('now');
    }


    var startX = 0;
    var distanceX = 0;
    /*严谨判断*/
    var isMove = false;

    /* 3. 可以滑动 （touch事件 监听触摸点坐标改变距离 位移）*/
    imageBox.addEventListener('touchstart', function(e) {
        /*清除定时器*/
        clearInterval(timer);
        /*记录开始的位置*/
        startX = e.touches[0].clientX;

    });

    imageBox.addEventListener('touchmove', function(e) {

        var moveX = e.touches[0].clientX;
        distanceX = moveX - startX;
        /*distance大于0时 向右滑动*/
        /*distance小于0时 向左滑动*/

        /*滑动*/
        /*基于当前的位置计算将要滑动到的位置*/
        var translateX = -index * width + distanceX;
        /*滑动时清除过渡*/
        removeTransition();
        /*做定位*/
        setTranslateX(translateX);

    });

    imageBox.addEventListener('touchend', function(escape) {
        /*滑动事件结束之后 判断当前滑动的距离*/
        /*有一个范围 若大于3/1则切换图片 否则吸附回去*/
        if(isMove) {
            if(Math.abs(distanceX) < width/3) {
                /* 4. 当滑动距离不够 吸附回去 （过渡 位移） */
                
            } else {
                /* 5. 当滑动距离够了时 跳转  上一张  下一张 （判断方向 过渡和位移）*/
                
            }
        }
    });
    

}

var downTime = function() {
    
}