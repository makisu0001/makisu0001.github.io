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

setShareInfo({
    title:          'Anonymous ME:I Control My Own Destiny', // 分享标题
    summary:        'Anonymous ME:I Control My Own Destiny', // 分享内容
    pic:            'http://static.ilongyuan.cn/ld/AnonymousMe/img/shareicon.jpg', // 分享图片
    url:            'anonymousme.jctest.ilongyuan.cn', // 分享链接
    // 微信权限验证配置信息，若不在微信传播，可忽略
    WXconfig: {
        swapTitleInWX: true, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
        appId: appId, // 公众号的唯一标识
        timestamp: timestamp, // 生成签名的时间戳
        nonceStr: nonceStr, // 生成签名的随机串
        signature: signature // 签名
    }
});