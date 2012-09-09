(function(d,z,A){function E(a,b,h,c){if(h!="d"){var f=F.exec(b),e=a.css(h)==="auto"?0:a.css(h),e=typeof e=="string"?w(e):e;typeof b=="string"&&w(b);var c=c===!0?0:e,d=a.is(":hidden"),i=a.translation();h=="left"&&(c=parseInt(e,10)+i.x);h=="right"&&(c=parseInt(e,10)+i.x);h=="top"&&(c=parseInt(e,10)+i.y);h=="bottom"&&(c=parseInt(e,10)+i.y);!f&&b=="show"?(c=1,d&&a.css({display:"block",opacity:0})):!f&&b=="hide"&&(c=0);return f?(a=parseFloat(f[2]),f[1]&&(a=(f[1]==="-="?-1:1)*a+parseInt(c,10)),a):c}}function G(a,
b,h,c,f,e,g,i){var j=a.data(q),j=j&&!u(j)?j:d.extend(!0,{},H),n=f;if(d.inArray(b,x)>-1){var o=j.meta,m=w(a.css(b))||0,l=b+"_o",n=f-m;o[b]=n;o[l]=a.css(b)=="auto"?0+n:m+n||0;j.meta=o;g&&n===0&&(n=0-o[l],o[b]=n,o[l]=0)}return a.data(q,I(a,j,b,h,c,n,e,g,i))}function I(a,b,d,c,f,e,g,i,j){var n=!1,g=g===!0&&i===!0,b=b||{};if(!b.original)b.original={},n=!0;b.properties=b.properties||{};b.secondary=b.secondary||{};for(var i=b.meta,o=b.original,m=b.properties,q=b.secondary,p=l.length-1;p>=0;p--){var k=l[p]+
"transition-property",r=l[p]+"transition-duration",s=l[p]+"transition-timing-function",d=g?l[p]+"transform":d;n&&(o[k]=a.css(k)||"",o[r]=a.css(r)||"",o[s]=a.css(s)||"");q[d]=g?(j===!0||y===!0&&j!==!1)&&B?"translate3d("+i.left+"px, "+i.top+"px, 0)":"translate("+i.left+"px,"+i.top+"px)":e;m[k]=(m[k]?m[k]+",":"")+d;m[r]=(m[r]?m[r]+",":"")+c+"ms";m[s]=(m[s]?m[s]+",":"")+f}return b}function J(a){for(var b in a)if((b=="width"||b=="height")&&(a[b]=="show"||a[b]=="hide"||a[b]=="toggle"))return!0;return!1}
function u(a){for(var b in a)return!1;return!0}function w(a){return parseFloat(a.replace(/px/i,""))}function K(a,b,h){var c=d.inArray(a,L)>-1;if((a=="width"||a=="height")&&b===parseFloat(h.css(a)))c=!1;return c}var L="top,right,bottom,left,opacity,height,width".split(","),x=["top","right","bottom","left"],l=["","-webkit-","-moz-","-o-"],M=["avoidTransforms","useTranslate3d","leaveTransforms"],F=/^([+-]=)?([\d+-.]+)(.*)$/,N=/([A-Z])/g,H={secondary:{},meta:{top:0,right:0,bottom:0,left:0}},q="jQe",C=
null,t=(document.body||document.documentElement).style,v=t.WebkitTransition!==void 0?"webkitTransitionEnd":t.OTransition!==void 0?"oTransitionEnd":"transitionend",D=t.WebkitTransition!==void 0||t.MozTransition!==void 0||t.OTransition!==void 0||t.transition!==void 0,B="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,y=B;if(d.expr&&d.expr.filters)C=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")[v]?!0:C.call(this,a)};d.extend({toggle3DByDefault:function(){y=
!y}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var d=l.length-1;d>=0;d--){var c=a.getPropertyValue(l[d]+"transform");if(c&&/matrix/i.test(c)){a=c.replace(/^matrix\(/i,"").split(/, |\)$/g);b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b};d.fn.animate=function(a,b,h,c){var a=a||{},f=!(typeof a.bottom!=="undefined"||typeof a.right!=="undefined"),e=d.speed(b,h,c),g=this,i=0,j=function(){i--;i===0&&typeof e.complete===
"function"&&e.complete.apply(g[0],arguments)};return a.avoidCSSTransitions===!0||!D||u(a)||J(a)||e.duration<=0||d.fn.animate.defaults.avoidTransforms===!0&&a.avoidTransforms!==!1?z.apply(this,arguments):this[e.queue===!0?"queue":"each"](function(){var b=d(this),c=d.extend({},e),g=function(){var c=b.data(q)||{original:{}},d={};if(a.leaveTransforms!==!0){for(var e=l.length-1;e>=0;e--)d[l[e]+"transform"]="";if(f&&typeof c.meta!=="undefined")for(var e=0,g;g=x[e];++e)d[g]=c.meta[g+"_o"]+"px"}b.unbind(v).css(c.original).css(d).data(q,
null);a.opacity==="hide"&&b.css({display:"none",opacity:""});j.call(b)},h={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",
easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",
easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},p={},h=h[c.easing||"swing"]?h[c.easing||"swing"]:c.easing||"swing",k;for(k in a)if(d.inArray(k,M)===
-1){var r=d.inArray(k,x)>-1,s=E(b,a[k],k,r&&a.avoidTransforms!==!0);a.avoidTransforms!==!0&&K(k,s,b)?G(b,k,c.duration,h,r&&a.avoidTransforms===!0?s+"px":s,r&&a.avoidTransforms!==!0,f,a.useTranslate3d===!0):p[k]=a[k]}b.unbind(v);if((k=b.data(q))&&!u(k)&&!u(k.secondary)){i++;b.css(k.properties);var t=k.secondary;setTimeout(function(){b.bind(v,g).css(t)})}else c.queue=!1;u(p)||(i++,z.apply(b,[p,{duration:c.duration,easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:j,queue:c.queue}]));
return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,h){if(!D)return A.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var c=d(this),f=c.data(q);if(f&&!u(f)){var e,g={};if(b){if(g=f.secondary,!h&&typeof f.meta.left_o!==void 0||typeof f.meta.top_o!==void 0){g.left=typeof f.meta.left_o!==void 0?f.meta.left_o:"auto";g.top=typeof f.meta.top_o!==void 0?f.meta.top_o:"auto";for(e=l.length-1;e>=0;e--)g[l[e]+"transform"]=""}}else if(!u(f.secondary)){var i=window.getComputedStyle(c[0],null);
if(i)for(var j in f.secondary)if(f.secondary.hasOwnProperty(j)&&(j=j.replace(N,"-$1").toLowerCase(),g[j]=i.getPropertyValue(j),!h&&/matrix/i.test(g[j]))){e=g[j].replace(/^matrix\(/i,"").split(/, |\)$/g);g.left=parseFloat(e[4])+parseFloat(c.css("left"))+"px"||"auto";g.top=parseFloat(e[5])+parseFloat(c.css("top"))+"px"||"auto";for(e=l.length-1;e>=0;e--)g[l[e]+"transform"]=""}}c.unbind(v).css(f.original).css(g).data(q,null)}else A.apply(c,[a,b])});return this}})(jQuery,jQuery.fn.animate,jQuery.fn.stop);
