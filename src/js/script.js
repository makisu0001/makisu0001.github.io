!(function(win, doc) {
    appSize(); 
    function setFontSize() {
        var winWidth = window.innerWidth;
        var winHeight = window.innerHeight;
        doc.documentElement.style.fontSize = (winHeight /375) * 100 + 'px';
        var c = document.getElementById("myCanvas");
        c.width=document.body.clientWidth;
        c.height=document.body.clientHeight;
        draw();
    }
    var timer = null;
    win.addEventListener('resize', function() {
        clearTimeout(timer);
        appSize();
        timer = setTimeout(setFontSize, 0);
    }, false);
    setFontSize();
    var winWidth = window.innerWidth;
}(window, document));

function draw(){
    var waveWidth = parseInt(document.body.clientWidth/50+4)*50,
    offset = 0,
    waveHeight = 15,
    waveCount = 10,
    startX = -1*waveWidth / waveCount,
    startY = document.body.clientHeight/2,
    d2 = waveWidth / waveCount,
    d = d2 / 2,
    hd = d / 2,
    c = document.getElementById("myCanvas"),
    ctx = c.getContext("2d");

    c.width=document.body.clientWidth;
    c.height=document.body.clientHeight;
    function tick() {
        offset -= 1;
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
        ctx.lineTo(document.body.clientWidth, c.height);
        ctx.lineTo(startX, c.height);
        ctx.fillStyle = '#0FF'
        ctx.fill();

        requestAnimationFrame(tick);
    }

    tick();
}

$("#cocotree").on("tap",function(){
    console.log("coco")
})
$("#action").on("tap",function(){
    $("#action").hide(function(){
        $("#dialogue").show();
    })
})

//禁止横屏
function appSize(){
    if($(window).width()<$(window).height()){
        $(".appSize").show();
    }else{
        $(".appSize").hide();
    }
}