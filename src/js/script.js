window.addEventListener('resize', function() {
    appSize();
}, false);
window.onload=function(){
    appSize();
};
//禁止横屏
function appSize(){
    if($(window).width()<$(window).height()){
        $(".appSize").show();
    }else{
        $(".appSize").hide();
    }
}