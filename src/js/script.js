window.addEventListener('resize', function() {
    appSize();
}, false);
window.onload=function(){
    appSize();
    var waveWidth = 300,
    offset = 0,
    waveHeight = 8,
    waveCount = 5,
    startX = -100,
    startY = 104,
    d2 = waveWidth / waveCount,
    d = d2 / 2,
    hd = d / 2,
    c = document.getElementById("myCanvas"),
    ctx = c.getContext("2d");

    c.width=document.body.clientWidth;
    c.height=document.body.clientHeight;
    console.log(c.width,c.height)

    function tick() {
        offset -= 5;
        if (-1 * offset === d2) offset = 0;
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        var offsetY = startY;
        ctx.moveTo(startX - offset, offsetY);

        for (var i = 0; i < waveCount; i++) {
            var dx = i * d2;
            var offsetX = dx + startX - offset;
            ctx.quadraticCurveTo(offsetX + hd, offsetY + waveHeight, offsetX + d, offsetY);
            ctx.quadraticCurveTo(offsetX + hd + d, offsetY - waveHeight, offsetX + d2, offsetY);
        }
        ctx.lineTo(startX + waveWidth, 300);
        ctx.lineTo(startX, 300);
        ctx.fill();

        requestAnimationFrame(tick);
    }

    tick();
};
//禁止横屏
function appSize(){
    if($(window).width()<$(window).height()){
        $(".appSize").show();
    }else{
        $(".appSize").hide();
    }
}