var $lis=$('.swiper-slide a');
var $p_abouts=$('.p_about');
$lis.click(function(){
    var index=$(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $p_abouts.eq(index).addClass('about').siblings().removeClass('about');
    
});
