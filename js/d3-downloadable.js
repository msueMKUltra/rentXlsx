"use strict";function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),btoa=window.btoa,toDataURL=function(n){return"data:image/svg+xml;charset=utf-8;base64,"+btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g,function(n,t){return String.fromCharCode("0x"+t)}))},initCanvas=function(n,t,e){return new Promise(function(a,o){var r=document.createElement("canvas"),i=r.getContext("2d"),l=new window.Image;r.width=t,r.height=e,l.onload=function(){i.drawImage(l,0,0),a(r)},l.src=n})},privates=new WeakMap,getSVGDataURL=function(n){return privates.get(n).svgDataURL},getCanvas=function(n){return privates.get(n).canvas},SVGConverter=function(){function n(t,e){_classCallCheck(this,n),privates.set(this,{svgDataURL:t,canvas:e})}return _createClass(n,null,[{key:"load",value:function(t,e,a){var o=toDataURL(t);return initCanvas(o,e,a).then(function(t){return new n(o,t)})}},{key:"loadFromElement",value:function(t){var e=t.getBoundingClientRect(),a=e.width,o=e.height,r=t.cloneNode(!0);return r.setAttributeNS(null,"version","1.1"),r.setAttributeNS(null,"width",a),r.setAttributeNS(null,"height",o),r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns","http://www.w3.org/2000/svg"),r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.load(r.outerHTML,a,o)}}]),_createClass(n,[{key:"svgDataURL",value:function(){return getSVGDataURL(this)}},{key:"pngDataURL",value:function(){return getCanvas(this).toDataURL("image/png")}},{key:"jpegDataURL",value:function(){return getCanvas(this).toDataURL("image/jpeg")}}]),n}(),css=".download-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: inline-block;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0,0,0,.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n  background-clip: padding-box;\n}\n\n.download-menu>li>a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: 400;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n  text-decoration: none;\n  background: 0 0;\n}\n\n.download-menu>li>a:hover, .download-menu>li>a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5;\n}",createMenu=function(n,t,e){var a=d3.select("body").append("ul").classed("download-menu",!0).style("left",n[0]+"px").style("top",n[1]+"px").on("mouseleave",function(){a.remove()}),o=a.append("li");o.append("a").text("Save as SVG").attr("download",t+".svg").attr("href",e.svgDataURL()),o.append("a").text("Save as PNG").attr("download",t+".png").attr("href",e.pngDataURL()),o.append("a").text("Save as JPG").attr("download",t+".jpeg").attr("href",e.jpegDataURL())},downloadable=function(){var n="image",t=function(t){d3.select("#downloadable-css").empty()&&d3.select("head").append("style").attr("id","downloadable-css").text(css),t.on("contextmenu",function(){var e=d3.mouse(document.body);SVGConverter.loadFromElement(t.node()).then(function(t){createMenu(e,n,t)}),d3.event.preventDefault()})};return t.filename=function(){return 0===arguments.length?n:(n=arguments[0],t)},t};
//# sourceMappingURL=d3-downloadable.js.map
