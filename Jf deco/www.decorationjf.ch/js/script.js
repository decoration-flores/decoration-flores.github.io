function start(){	
	
};

function startF(){	
	setTimeout(function () {
		$('.splash').css({marginLeft:1000}).stop().delay(100).animate({marginLeft:0},800,'easeOutExpo');
		$('.man1').css({marginLeft:-1000}).stop().delay(700).animate({marginLeft:0},800,'easeOutExpo');
		$('.enter').css({opacity:0}).stop().delay(800).animate({opacity:1},800,'easeOutExpo');
		$('.paint').css({marginTop:-1000}).stop().delay(400).animate({marginTop:0},800,'easeOutExpo');
		$('header').css({marginTop:-1000}).stop().delay(300).animate({marginTop:0},800,'easeOutExpo');

	}, 200);
};

function showSplash(){
	setTimeout(function () {
		$('.item2').stop().delay(0).animate({marginLeft:-1000},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
		$('.item3').stop().delay(100).animate({marginLeft:1000},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
		$('.item1').stop().delay(200).animate({marginLeft:-1000},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
		$('.menu').stop().delay(300).animate({marginLeft:-1000},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
		$('.paint').stop().delay(500).animate({marginTop:0},500,'easeInOutExpo').animate({marginLeft:0},500,'easeOutExpo');
		$('header').stop().delay(500).animate({marginTop:0},500,'easeInOutExpo').animate({marginLeft:0},500,'easeOutExpo');
		$('.splash').css({visibility:'visible'}).stop().delay(700).animate({marginLeft:0},800,'easeOutExpo');
		$('.man1').css({display:'block'}).stop().delay(900).animate({marginLeft:0},800,'easeOutExpo');
		$('.enter').css({display:'block'}).stop().delay(900).animate({opacity:1},800,'easeOutExpo');
	}, 300);	
};
function hideSplash(){ 	
	$('.man1').stop().animate({marginLeft:-1000},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
	$('.splash').stop().delay(100).animate({marginLeft:1000},800,'easeInOutExpo', function(){ $(this).css({visibility:'hidden'}); });
	$('.paint').stop().animate({marginTop:-200},500,'easeInOutExpo').animate({marginLeft:-180},500,'easeInOutExpo');
	$('header').stop().animate({marginTop:-230},500,'easeInOutExpo').animate({marginLeft:-180},500,'easeInOutExpo');
	$('.enter').stop().animate({opacity:0},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
	$('.menu').css({display:'block'}).stop().delay(200).animate({marginLeft:0},800,'easeInOutExpo');
	$('.item1').css({display:'block'}).stop().delay(400).animate({marginLeft:0},800,'easeInOutExpo');
	$('.item2').css({display:'block'}).stop().delay(500).animate({marginLeft:0},800,'easeInOutExpo');
	$('.item3').css({display:'block'}).stop().delay(600).animate({marginLeft:0},800,'easeInOutExpo');

};
function hideSplashQ(){	
	$('.man1').css({marginLeft:-1000, display:'none'});
	$('.splash').css({marginLeft:1000, visibility:'hidden'});
	$('.paint').css({marginTop:-200, marginLeft:-180, });
	$('header').css({marginTop:-230, marginLeft:-180, });
	$('.enter').css({opacity:0, display:'none'});
	$('.menu').css({display:'block', marginLeft:0});
	$('.item1').css({display:'block', marginLeft:0});
	$('.item2').css({display:'block', marginLeft:0});
	$('.item3').css({display:'block', marginLeft:0});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	// slider
	$('.slider')._TMS({
			show:0,
			pauseOnHover:false,
			duration:800,
			preset:'simpleFade',
            easing:"easeOutExpo",
			pagination:true,//'.pagination',true,'<ul></ul>'
			pagNums:false,
			slideshow:5000,
			numStatus:false,
			banners:false,    // false 'fromLeft', 'fromRight', 'fromTop', 'fromBottom', 'fade'
			waitBannerAnimation:true,
			bannerEasing:'easeInOutExpo',
			bannerDuration:1000
	});

	/////// icons
	$(".enter").find(".txt2").css({marginTop:67, opacity:0});
	$(".enter").hover(function() {
		$(this).find(".txt1").stop().animate({marginTop:-67, opacity:0 }, 400, 'easeOutExpo');		    
		$(this).find(".txt2").stop().animate({marginTop:0, opacity:1 }, 400, 'easeOutExpo');
	},function(){
	    $(this).find(".txt1").stop().animate({marginTop:0, opacity:1 }, 400, 'easeOutExpo');		    
		$(this).find(".txt2").stop().animate({marginTop:67, opacity:0 }, 400, 'easeOutExpo');		   
	});

	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });	

	



	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 16,
		verticalDragMinHeight: 159,
		verticalDragMaxHeight: 159
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',left:2000});		   
		   $('.menu').css({marginLeft:-1000, display:'none'});
		   $('.item1').css({marginLeft:-1000, display:'none'});
		   $('.item2').css({marginLeft:-1000, display:'none'});
		   $('.item3').css({marginLeft:1000, display:'none'});
        },
        actFu:function(_){
			var Delay=200; // default
        	if( (_.pren == undefined) ){ // on reload
        		Delay=0;
        	}
        	if( (_.pren == 0) ){ // on click
        		Delay=600;
        	}
        	//console.log(_.pren, Delay);
			if(_.curr){
				_.curr.css({display:'block', left:2000}).stop().delay(Delay).animate({left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({left:2000},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);
			if ( (_.pren == undefined) && (_.n <= 0) ){                
                startF();
                //console.log("startF");
            }			
            if ( (_.n == 0) && (_.pren >= 0) ){
                showSplash();
                //console.log("showSplash");
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
                //console.log("hideSplash");  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
                //console.log("hideSplashQ");
            }
            //console.log("///////////////////////////");
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 
			//$('> a .over',li).stop(true).animate({top:0},400, 'easeOutExpo');
			$('> a .over',li).stop().animate({"backgroundColor":"#6f3397"},400, 'easeOutCubic');
			$('.txt1',li).stop().animate({top:60},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeInOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
     			$('.txt2',li).stop().animate({top:-60},400, 'easeOutExpo'); 
				$('> a .over',li).stop().animate({"backgroundColor":"#d5d5d5"},400, 'easeOutCubic');
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 200);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});