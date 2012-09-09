document.addEventListener("touchmove",function(a){a.preventDefault()},!1);
var SlidingView=function(a,b){window.slidingView=this;this.gestureStarted=!1;this.bodyOffset=0;this.sidebarWidth=250;this.sidebar=$("#"+a);this.body=$("#"+b);this.sidebar.addClass("slidingview_sidebar");this.body.addClass("slidingview_body");var c=this;$(window).resize(function(){c.resizeContent()});$(this.parent).resize(function(){c.resizeContent()});"onorientationchange"in window&&$(window).bind("onorientationchange",function(){c.resizeContent()});this.resizeContent();this.setupEventHandlers()};
SlidingView.prototype.setupEventHandlers=function(){this.START_EVENT=(this.touchSupported="ontouchstart"in window)?"touchstart":"mousedown";this.MOVE_EVENT=this.touchSupported?"touchmove":"mousemove";this.END_EVENT=this.touchSupported?"touchend":"mouseup";var a=this;this.body.get()[0].addEventListener(this.START_EVENT,function(b){a.onTouchStart(b)},!1)};
SlidingView.prototype.onTouchStart=function(a){this.gestureStartPosition=this.getTouchCoordinates(a);var b=this;this.touchMoveHandler=function(a){b.onTouchMove(a)};this.touchUpHandler=function(a){b.onTouchEnd(a)};this.body.get()[0].addEventListener(this.MOVE_EVENT,this.touchMoveHandler,!1);this.body.get()[0].addEventListener(this.END_EVENT,this.touchUpHandler,!1);this.body.stop()};
SlidingView.prototype.onTouchMove=function(a){var b=this.getTouchCoordinates(a);if(this.gestureStarted)a.preventDefault(),a.stopPropagation(),this.updateBasedOnTouchPoints(b);else if(Math.abs(b.y-this.gestureStartPosition.y)>50)this.unbindEvents();else if(Math.abs(b.x-this.gestureStartPosition.x)>50)this.gestureStarted=!0,a.preventDefault(),a.stopPropagation(),this.updateBasedOnTouchPoints(b)};
SlidingView.prototype.onTouchEnd=function(){this.gestureStarted&&this.snapToPosition();this.gestureStarted=!1;this.unbindEvents()};
SlidingView.prototype.updateBasedOnTouchPoints=function(a){var b=this.bodyOffset+(a.x-this.gestureStartPosition.x),b=Math.max(b,0);this.bodyOffset=b=Math.min(b,this.sidebarWidth);this.body.css("left")!="0px"&&this.body.css("left","0px");this.body.css("-webkit-transform","translate3d("+b+"px,0,0)");this.body.css("-moz-transform","translate3d("+b+"px,0,0)");this.body.css("transform","translate3d("+b+"px,0,0)");this.sidebar.trigger("slidingViewProgress",{current:b,max:this.sidebarWidth});this.gestureStartPosition=
a};SlidingView.prototype.snapToPosition=function(){this.body.css("left","0px");var a=this.bodyOffset,b;this.bodyOffset=b=a<this.sidebarWidth/2?0:this.sidebarWidth;a!=b&&(this.body.stop(!0,!1).animate({left:b,avoidTransforms:!1,useTranslate3d:!0},100),this.sidebar.trigger("slidingViewProgress",{current:b,max:this.sidebarWidth}))};
SlidingView.prototype.unbindEvents=function(){this.body.get()[0].removeEventListener(this.MOVE_EVENT,this.touchMoveHandler,!1);this.body.get()[0].removeEventListener(this.END_EVENT,this.touchUpHandler,!1)};SlidingView.prototype.getTouchCoordinates=function(a){return this.touchSupported?(a=a.touches[0],{x:a.pageX,y:a.pageY}):{x:a.screenX,y:a.screenY}};SlidingView.prototype.resizeContent=function(){var a=$(window),b=a.width();a.height();this.body.width(b)};
