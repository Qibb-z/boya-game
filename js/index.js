
        // 获取元素对象
        // 获得carousel容器
        var $carousel =  $('#carousel');
        // 图片
        var $imgs=$('#img li');
        // 小圆点
        var $circles=$('#circles li');
        // 获取所有图片长度
        var length=$imgs.length;
        // 信号量
        var idx=0;
        
        // 小圆点事件
        $circles.click(function(){
            // 防流氓-停止所有动画
            $imgs.stop(true,true);
            // 当前图片淡出
            $imgs.eq(idx).fadeOut(400);
            // 对应小圆点的图片淡入
            // 获取当前小圆点的索引
            var index=$(this).index();
            // 更改信号量
            idx=index;
            // 去对应的集合找到对应的元素
            $imgs.eq(idx).fadeIn(400);
            // 小圆点变白
            changeWhite(idx);
        });
        // 封装一个函数，小圆点变白
        function changeWhite(index){
            // 当前idx索引对应的小圆点变白，其他小圆点变橙色
            $circles.eq(index).addClass('active').siblings().removeClass('active');
        };
          // 给carousel绑定鼠标移入事件和移出事件
    // 移入
        $carousel.mouseenter(function() {
        console.log(111);
        clearInterval(timer);
    });

    // 移出
    $carousel.mouseleave(function() {
        timer = setInterval(function() {
         // 防流氓
         if ($imgs.is(':animated')) {
            return;
        }
        // 当前图片淡出
        $imgs.eq(idx).fadeOut(400);
        // 改变信号量
        idx++;
        // 判断边界
        if (idx > length - 1) {
            // 重置信号量
            idx = 0;
        }
        // 下一张图片淡入
        $imgs.eq(idx).fadeIn(400);
        // 对应的小圆点变白
        changeWhite(idx);
    }, 2000);
    });
    
    

    // 定时器
    var timer = setInterval(function() {
         // 防流氓
         if ($imgs.is(':animated')) {
            return;
        }
        // 当前图片淡出
        $imgs.eq(idx).fadeOut(400);
        // 改变信号量
        idx++;
        // 判断边界
        if (idx > length - 1) {
            // 重置信号量
            idx = 0;
        }
        // 下一张图片淡入
        $imgs.eq(idx).fadeIn(400);
        // 对应的小圆点变白
        changeWhite(idx);
    }, 2000);