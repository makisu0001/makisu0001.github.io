$(function(){
	init.start();
});
var init = {
	data:{
		diamond:100,
		energy:1
	},
	start:function(){
		$(".start").on("touchstart",function(){
			init.reset();
			$(this).hide();
			$(".cover").show();
			$(".gamepop").show();
			$(".hook").addClass("swing").hide();
		});
		$(".close").on("touchstart",function(){
			$(".hook").removeClass("swing").show();
			$(".cover").hide();
			$(".gamepop").hide();
			$(".start").show();
		});
		$(".exchange").on("touchstart",function(){
			$(".cover").hide();
			$(".gamepop").hide();
			$(".hook").show().animate({
				"height": "5.42rem",
    			"background-position-y": '0rem'
			},3000,"linear",function(){
				$(this).hide();
				$(".cover").show();
				$(".reward i").html(init.data.diamond)
				$(".congrats").show();
				$(".hook").css({
					"height": "3.50rem",
	    			"background-position-y": "-1.92rem"
				})
			});
		});
		$(".congrats").on("touchstart",function(){
			$(".hook").removeClass("swing").show();
			$(".cover").hide();
			$(this).hide();
			$(".start").show();
		});
		$(".minus").on("touchstart",function(){
			var dataset = init.data;
			dataset.energy = dataset.energy > 1 ? dataset.energy - 1 : dataset.energy;
			init.getDiamond();
			init.popRender();
		});
		$(".plus").on("touchstart",function(){
			var dataset = init.data;
			dataset.energy += 1;
			init.getDiamond();
			init.popRender();
		});
		$(".diamond input").on("input",function(e){
			var tapIn = e.originalEvent.data||e.target.value;
			var diamond = parseInt($(".diamond input").val().replace(/,/g,""))
    		var numReg = /^[0-9]*$/;
    		var dataset = init.data;
    		if(diamond>100){
    			dataset.diamond = diamond;
    			dataset.energy = parseInt(dataset.diamond/100);
    			init.popRender()
    		}else{
    			dataset.energy = 1;
    			init.getDiamond();
    			init.popRender();
    		}  		
		});
		$(".diamond input").on("blur",function(){
			init.getDiamond();
			init.popRender();
		})
	},
	getDiamond:function(){
		var dataset = init.data;
		dataset.diamond = dataset.energy * 100;
	},
	popRender:function(){
		var dataset = init.data;
		var diamond = init.numberWithCommas(dataset.diamond)
		$(".diamond input").val(diamond);
		$(".amount").html(dataset.energy);
	},
	numberWithCommas:function(x){
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	reset:function(){
		init.data.energy = 1;
		init.getDiamond();
		init.popRender();
	}
}