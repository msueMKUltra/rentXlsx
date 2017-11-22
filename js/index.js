"use strict";$(function(){function t(t,e){t.find("li").hover(function(){$(this).addClass(e)},function(){$(this).removeClass(e)})}function e(t,e){return d3.map(t,function(t){return t.id}).get(e)}function n(){a(".roller-svg-001",C),a(".roller-svg-002",b),a(".roller-svg-003",A),a(".roller-svg-004",T)}function a(t,e){var n=e.data,a={width:$(".roller-piece").eq(2).width()-30,height:100},r=d3.select(".roller-card-zone").select(t);r.selectAll("*").remove();var o=r.append("svg").attr("width",a.width).attr("height",a.height),i=n.map(function(t){return t.month}),l=n.map(function(t){return t.people}),s=d3.max(l),p={top:14,right:20,bottom:20,left:40},d={width:d3.scaleBand().domain(i).range([0,a.width-p.left-p.right]).padding(.5),height:d3.scaleLinear().domain([0,s]).range([a.height-p.top-p.bottom,0])};o.selectAll("rect").data(n).enter().append("rect").attr("fill","skyblue").attr("x",function(t){return d.width(t.month)+p.left}).attr("y",function(t){return d.height(t.people)+p.top}).attr("width",d.width.bandwidth()).attr("height",function(t){return a.height-p.top-p.bottom-d.height(t.people)}),o.selectAll("text").data(n).enter().append("text").attr("fill","deepskyblue").attr("font-size","10px").attr("text-anchor","middle").attr("x",function(t){return d.width(t.month)+p.left}).attr("y",function(t){return d.height(t.people)+p.top}).attr("dx",d.width.bandwidth()/2).attr("dy",-4).text(function(t){return t.people});o.append("g").call(d3.axisBottom(d.width)).attr("transform","translate("+p.left+","+(a.height-p.bottom)+")"),o.append("g").call(d3.axisLeft(d.height).ticks(3).tickFormat(function(t){return t+"人"})).attr("transform","translate("+p.left+","+p.top+")")}function r(t,e){var n=d3.map(t,function(t){return t.id}).get(e),a=0;n.data.map(function(t){a+=t.gameCount});var r=d3.map(n);r=r.set("total",a);var o=0,i=[];n.data.map(function(t){var e=o+t.gameCount;i.push({startAngle:Math.PI*o/a*2,endAngle:Math.PI*e/a*2}),o=e});var l={};return(r=r.set("angle",i)).each(function(t,e){l[e]=t}),l}function o(t,e){var n={width:200,height:100},a={top:10,bottom:10,left:12,right:20},r={inner:0,outer:(n.height-a.top-a.bottom)/2},o={width:12,height:12},i=z.select(t);i.selectAll("*").remove();var l=i.append("svg").attr("width",n.width).attr("height",n.height),s=e.angle,p=e.data.map(function(t){return t.gameCount}),d=e.data.map(function(t){return t.sportType}),c=d3.arc().innerRadius(r.inner).outerRadius(r.outer),u=(d3.scaleOrdinal(d3.schemeCategory10),d3.range(p.length)),h=d3.scaleOrdinal().domain(u).range(["#E4B54E","#96CFDB","#D1427F"]);l.append("text").attr("x",n.width).attr("y",n.height).attr("text-anchor","end").attr("fill","white").text("本月參與人次").classed("roller-text-shadow",!0).attr("transform","translate( -10, -10)");var m=l.append("g").classed("cilcle",!0);m.selectAll("path").data(s).enter().append("path").attr("transform","translate("+(a.left+r.outer)+","+(a.top+r.outer)+")").attr("d",function(t){return c(t)}).attr("fill",function(t,e){return h(e)}).attr("opacity",.6),m.selectAll("text").data(s).enter().append("text").attr("text-anchor","middle").attr("fill","white").attr("font-size","10px").attr("y",4).attr("transform",function(t){return"translate("+(a.left+r.outer)+","+(a.top+r.outer)+")translate("+c.centroid(t)+")"}).data(p).text(function(t){return t});var g=l.append("g").classed("tag",!0);g.selectAll("rect").data(s).enter().append("rect").attr("width",o.width).attr("height",o.height).attr("x",3*r.outer-12).attr("y",function(t,e){return 20*e+a.top}).attr("fill",function(t,e){return h(e)}).attr("opacity",.7),g.selectAll("text").data(d).enter().append("text").attr("font-size","12px").attr("fill","white").attr("x",3*r.outer-12).attr("y",function(t,e){return 20*e+a.top}).attr("transform","translate("+(o.width+4)+","+(o.height-2)+")").text(function(t){return t})}function i(t,e,n,a,r,o,i){this.svg={width:t,height:e},this.files={json:n,shp:a},this.projection={center:[r,o],scale:i}}function l(t){d3.json(t.files.json,function(e){function n(){var e=($(".roller-map").width()-30)/t.svg.width;e=e>1?1:e,i.attr("transform","scale("+e+")");var n=R.selectAll("button");return n.empty()||n.data(t.btn).style("transform",function(t){return"translate("+t.x*e+"px,"+t.y*e+"px)"}),e}var a=topojson.feature(e,e.objects[t.files.shp]).features,r=d3.geoMercator().center(t.projection.center).scale(t.projection.scale),o=d3.geoPath().projection(r),i=R.append("svg").attr("width",t.svg.width).attr("height",t.svg.height);!function(){i.selectAll("path").data(a).enter().append("path").attr("d",o);var e=n();R.selectAll("button").data(t.btn).enter().append("button").attr("class","roller-point btn btn-lg btn-primary rounded-circle").attr("type","button").attr("data-toggle","popover").attr("data-placement","top").attr("title",function(t){return t.title}).attr("data-content",function(t){return t.content}).transition().duration(2e3).style("transform",function(t){return"translate("+t.x*e+"px,"+t.y*e+"px)"}),$('[data-toggle="popover"]').popover()}(),j.on("window:resize",function(){n()})})}function s(t){c(t,""!=t.val())}function p(t){c(t,0!=t.find("option:selected").index())}function d(t){u(t,t.prop("checked"))}function c(t,e){var n=document.createElement("i");e?t.siblings(".roller-label").empty().append(n).find("i").addClass("fa fa-thumbs-o-up").closest(".roller-tip").addClass("has-success").removeClass("has-danger"):t.siblings(".roller-label").empty().append(n).find("i").addClass("fa fa-hand-o-left").closest(".roller-tip").addClass("has-danger").removeClass("has-success")}function u(t,e){var n=document.createElement("i"),a=t.closest(".roller-tip");a.find("i").remove(),e?a.prepend(n).find("i").addClass("custom-control mr-1 fa fa-thumbs-o-up").end().removeClass("has-danger"):a.prepend(n).find("i").addClass("custom-control mr-1 fa fa-hand-o-right").end().addClass("has-danger")}var h=$(".roller-list"),m=$(".roller-taiwan"),g=$(".roller-forein"),f=($(".roller-map"),$(".roller-game-taiwan")),v=$(".roller-game-asia"),w=$(".roller-game-america"),y=$(".roller-game-europe");h.hover(function(){h.removeClass("col-md-6 col-md-2 col-md-3"),$(this).addClass("col-md-6").siblings(".roller-list").addClass("col-md-2")},function(){h.removeClass("col-md-6 col-md-2").addClass("col-md-3")}),t(f,"list-group-item-warning"),t(v,"list-group-item-danger"),t(w,"list-group-item-info"),t(y,"list-group-item-success");var x=[{id:"001",data:[{month:"Aug",people:10},{month:"Sep",people:6},{month:"Oct",people:17},{month:"Nov",people:12}]},{id:"002",data:[{month:"Aug",people:50},{month:"Sep",people:77},{month:"Oct",people:43},{month:"Nov",people:99}]},{id:"003",data:[{month:"Aug",people:81},{month:"Sep",people:71},{month:"Oct",people:69},{month:"Nov",people:54}]},{id:"004",data:[{month:"Aug",people:4},{month:"Sep",people:7},{month:"Oct",people:15},{month:"Nov",people:22}]}],C=e(x,"001"),b=e(x,"002"),A=e(x,"003"),T=e(x,"004"),j=$(window);j.resize(function(){j.trigger("window:resize")}),n(),j.on("window:resize",function(){n()});var k=[{id:"001",data:[{sportType:"Running",gameCount:10},{sportType:"Swimming",gameCount:6},{sportType:"Cycling",gameCount:17}]},{id:"002",data:[{sportType:"Running",gameCount:50},{sportType:"Swimming",gameCount:77},{sportType:"Cycling",gameCount:43}]},{id:"003",data:[{sportType:"Running",gameCount:81},{sportType:"Swimming",gameCount:71},{sportType:"Cycling",gameCount:69}]},{id:"004",data:[{sportType:"Running",gameCount:4},{sportType:"Swimming",gameCount:7},{sportType:"Cycling",gameCount:15}]}],z=d3.select(".roller-list-zone"),S=r(k,"001"),O=r(k,"002"),_=r(k,"003"),N=r(k,"004");o(".roller-svg-001",S),o(".roller-svg-002",O),o(".roller-svg-003",_),o(".roller-svg-004",N);var R=d3.select(".roller-jumbotron-zone .roller-svg"),E=new i(300,400,"map/taiwan/taiwan.json","COUNTY_MOI_1060525",124,23.3,6e3),M=new i(600,400,"map/world/world.json","ne_110m_admin_0_countries_lakes",120,20,90);E.btn=[{title:"北部據點",content:"大佳河濱公園",x:40,y:-150},{title:"中部據點",content:"圳前仁愛公園",x:-50,y:-30},{title:"南部據點",content:"巴克禮紀念公園",x:-70,y:80},{title:"東部據點",content:"台東森林公園",x:50,y:50}],M.btn=[{title:"北美洲據點",content:"黃石國家公園",x:-200,y:-40},{title:"南美洲據點",content:"泰羅那國家公園",x:-110,y:90},{title:"歐洲據點",content:"迷你歐洲公園",x:10,y:-10},{title:"非洲據點",content:"克留格爾國家公園",x:40,y:100},{title:"亞洲據點",content:"張家界國家森林公園",x:150,y:20},{title:"大洋洲據點",content:"努沙國家公園",x:220,y:120}],l(E),m.click(function(){$(this).find("a").hasClass("active")||($('[data-toggle="popover"]').popover("hide"),R.selectAll("*").remove(),l(E))}),g.click(function(){$(this).find("a").hasClass("active")||($('[data-toggle="popover"]').popover("hide"),R.selectAll("*").remove(),l(M))});var B=$("#inputName"),D=$("#inputEmail"),F=$("#selectSubject"),I=$("#textareaMessage"),P=$("#inputCheck");$("#buttonSubmit").click(function(t){t.preventDefault(),s(B),s(D),s(I),d(P),p(F)})});
//# sourceMappingURL=index.js.map
