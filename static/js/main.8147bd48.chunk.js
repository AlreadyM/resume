(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n(21),s=n.n(i),r=n(12),o=n(2),l=n(3),d=n(4),j=n(6),u=n(5),b=(n(28),n(29),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"head",children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(c.jsx)("a",{className:"navbar-brand",children:"\u7b80\u5386\u67e5\u770b"})})})}}]),n}(a.Component)),h=(n(30),n(31),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={title:"\u57fa\u672c\u6846\u4f53"},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"modlue-title",style:{paddingBottom:"16px"},children:this.props.title?this.props.title:this.state.title})}}]),n}(a.Component)),x=(n(32),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={name:"\u96f7\u6625\u534e",birthday:"1990-01-06",sex:"man",education_background:"\u5927\u4e13",education_endtime:"20120701",work_start_date:"2012-08-18",current_status:"\u79bb\u804c-\u968f\u65f6\u5230\u5c97",contact_number:"17896057893",email:"617054896@qq.com"},c}return Object(d.a)(n,[{key:"timegap",value:function(){var e=new Date,t=new Date(this.state.work_start_date),n=11-t.getMonth()+e.getMonth();return e.getFullYear()-t.getFullYear()+(n>11?1:0)}},{key:"componentDidMount",value:function(){console.log(this.timegap())}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"base-info module-content",children:[Object(c.jsx)(h,{title:"\u57fa\u672c\u4fe1\u606f"}),Object(c.jsxs)("div",{className:"baseinfo-content module-body",children:[Object(c.jsx)("div",{className:"flex",children:Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{className:"baseimfo-text",children:this.state.name}),Object(c.jsx)("div",{className:"baseimfo-text",children:"man"===this.state.sex?"\u7537":"\u5973"}),Object(c.jsx)("div",{className:"baseimfo-text",children:this.state.education_background}),Object(c.jsxs)("div",{className:"baseimfo-text",children:[this.timegap(),"\u5e74\u5de5\u4f5c\u7ecf\u9a8c"]}),Object(c.jsx)("div",{className:"baseimfo-text",children:this.state.current_status})]})}),Object(c.jsx)("div",{className:"flex",children:Object(c.jsx)("div",{className:"baseimfo-text",children:this.state.contact_number})})]})]})}}]),n}(a.Component)),m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={job_name:"Web \u524d\u7aef",desire_money_low:12,desire_money_high:15,industry:"\u4e0d\u9650",city:"\u6210\u90fd"},c}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state;return Object(c.jsxs)("div",{className:"expect-position module-content",children:[Object(c.jsx)(h,{title:"\u671f\u671b\u804c\u4f4d"}),Object(c.jsx)("div",{className:"flex module-body",children:Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{className:"baseimfo-text",children:e.job_name}),Object(c.jsxs)("div",{className:"baseimfo-text",children:["\u85aa\u8d44\uff1a",e.desire_money_low," - ",e.desire_money_high," k"]}),Object(c.jsxs)("div",{className:"baseimfo-text",children:["\u884c\u4e1a",e.industry]}),Object(c.jsxs)("div",{className:"baseimfo-text",children:["\u57ce\u5e02",e.city]})]})})]})}}]),n}(a.Component),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"advantage module-content",children:[Object(c.jsx)(h,{title:"\u4f18\u52bf"}),Object(c.jsx)("div",{className:"advantage-content module-body",children:"\u591a\u5e74\u72ec\u7acb\u7f51\u9875\u5f00\u53d1\uff0c\u4e0e\u540e\u7aef\u534f\u4f5c\u5f00\u53d1\uff0c\u4e0eIOS Android \u56e2\u961f\u534f\u4f5c\u5f00\u53d1\u7ecf\u9a8c\u3002\u81ea\u5b66\u80fd\u529b\u5f3a\uff0c\u80fd\u8f83\u5feb\u4e0a\u624b\u65b0\u6846\u67b6\u7f16\u5199\u6a21\u5f0f\u89c4\u8303\u3002"})]})}}]),n}(a.Component),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"work-experience module-content",children:[Object(c.jsx)(h,{title:"\u5de5\u4f5c\u7ecf\u5386"}),Object(c.jsx)("div",{className:"work-experience-content module-body",children:Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)("div",{className:"company",children:"\u5317\u4eac\u548c\u6c90\u5929\u6210\u6587\u5316\u4f20\u5a92\u6709\u9650\u516c\u53f8"}),Object(c.jsx)("div",{className:"time",children:"2015.04-2020.07"})]}),Object(c.jsx)("div",{className:"job",children:"Web\u524d\u7aef"}),Object(c.jsxs)("div",{className:"job-desc",children:[Object(c.jsx)("div",{className:"job-desc-title",children:"\u5185\u5bb9"}),Object(c.jsxs)("ol",{children:[Object(c.jsx)("li",{children:"\u4e0e\u754c\u9762\u8bbe\u8ba1\u5e08UE\u8bbe\u8ba1\u5e08\u5bf9\u63a5\u8bbe\u8ba1\u6210\u7a3f\uff0c\u5f00\u53d1\u9759\u6001\u5c55\u793a\u9875\u9762\u6216\u52a8\u6001\u4ea4\u4e92\u9875\u9762\u3002"}),Object(c.jsx)("li",{children:"\u4e0e\u540e\u7aef\uff08PHP\uff09\u5bf9\u63a5\u5f00\u53d1\u6570\u636e\u4ea4\u6362\u9875\u9762\u3002"}),Object(c.jsx)("li",{children:"\u4e0eAndroid \u548cIOS \u5f00\u53d1\u56e2\u961f\u914d\u5408\u5b8c\u6210\u7f51\u9875\u5185\u5d4c\u5165APP\u7684\u5de5\u4f5c\uff0c\u5b9e\u73b0\u4ea7\u54c1\u5feb\u901f\u8fed\u4ee3\u7684\u76ee\u7684\u3002"}),Object(c.jsx)("li",{children:"\u516c\u53f8\u4f7f\u7528SVN\u7ba1\u7406\u4ee3\u7801\u5f00\u53d1\u8fc7\u7a0b\u5e76\u914d\u5408FTP\u76f4\u63a5\u5904\u7406\u65e0\u9700\u56e2\u961f\u534f\u4f5c\u7684\u9879\u76ee\u5feb\u901f\u4e0a\u7ebf\uff0c\u4e2a\u4eba\u4f7f\u7528Git\u7ba1\u7406\u4e2a\u4eba\u4ee3\u7801\u3002"})]}),Object(c.jsx)("div",{className:"job-summarize",children:"\u4efb\u804c\u671f\u95f4\u4e3b\u8981\u4f7f\u7528BT\u6837\u5f0f\u6846\u67b6\uff0cJQ\u811a\u672c\u6846\u67b6\uff0cLayer UI \u6846\u67b6\uff0c\u4ed8\u8d39\u6388\u6743\u6846\u67b6\uff0cDatatable\uff0cJQWeUI,etc.\u5904\u7406\u5404\u9879\u76ee\u4e4b\u95f4\u7248\u5f0f\u4e00\u81f4\u6027\uff0c\u5f00\u53d1\u89c4\u8303\u6027\uff1bJS\u539f\u751f\u5904\u7406\u5c0f\u578b\u5316\u5355\u9875\u9762\u6765\u8fbe\u5230\u7f29\u51cf\u9875\u9762\u4f53\u79ef\u63d0\u5347\u54cd\u5e94\u901f\u5ea6\u7684\u76ee\u7684\u3002\u56e0\u516c\u53f8\u9879\u76ee\u9700\u8981\u7531\u540e\u7aefPHP\u6e32\u67d3\u9875\u9762\u5e76\u8fd4\u56de\u7ed9\u6d4f\u89c8\u5668\uff0c\u672a\u6d89\u53caVUE\uff0cAngular\uff0cReact\uff0cNodeJS\uff0cElementJS\uff0c\u7b49\u65f6\u4e0b\u70ed\u95e8\u6280\u672f\uff0c\u65e0\u5177\u4f53\u4e0a\u7ebf\u9879\u76ee\u6545\u65e0\u6cd5\u5c55\u793a\u3002"})]})]})})]})}}]),n}(a.Component),f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={},c}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(x,{}),Object(c.jsx)(v,{}),Object(c.jsx)(m,{}),Object(c.jsx)(O,{})]})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e={margin:"0px 10px"};return Object(c.jsxs)("div",{className:"footer",style:{fontSize:18,color:"#5555cd",textAlign:"center",paddingBottom:50},children:[Object(c.jsx)("p",{children:"\u672c\u9875\u9762\u4f7f\u7528ReactJS\u5236\u4f5c\u4ee5\u4f5c\u6f14\u793a\u3002"}),Object(c.jsx)(r.b,{className:"navlink",style:e,to:"/",children:"\u56de\u5230\u9996\u9875"}),Object(c.jsx)(r.b,{className:"navlink",style:e,to:"/show",children:"\u5730\u5740\u9009\u62e9\u5c55\u793a"})]})}}]),n}(a.Component);var p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){!function(){var e=document.querySelector("canvas"),t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight,t.lineWidth=.3,t.strokeStyle=new o(150).style;var n={x:30*e.width/100,y:30*e.height/100},c={nb:750,distance:50,d_radius:100,array:[]};function a(e){return Math.floor(255*Math.random()+e)}function i(e,t,n){return"rgba("+e+","+t+","+n+", 0.8)"}function s(e,t,n,c){return(e*t+n*c)/(t+c)}function r(e,t){var n=e.color,c=t.color,a=s(n.r,e.radius,c.r,t.radius),r=s(n.g,e.radius,c.g,t.radius),o=s(n.b,e.radius,c.b,t.radius);return i(Math.floor(a),Math.floor(r),Math.floor(o))}function o(e){e=e||0,this.r=a(e),this.g=a(e),this.b=a(e),this.style=i(this.r,this.g,this.b)}function l(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.radius=2*Math.random(),this.color=new o}function d(){for(var e=0;e<c.nb;e++)c.array.push(new l)}function j(){for(var t=0;t<c.nb;t++){var n=c.array[t];n.y<0||n.y>e.height?(n.vx=n.vx,n.vy=-n.vy):(n.x<0||n.x>e.width)&&(n.vx=-n.vx,n.vy=n.vy),n.x+=n.vx,n.y+=n.vy}}function u(){for(var e=0;e<c.nb;e++)for(var a=0;a<c.nb;a++){var i=c.array[e],s=c.array[a];i.x-s.x<c.distance&&i.y-s.y<c.distance&&i.x-s.x>-c.distance&&i.y-s.y>-c.distance&&i.x-n.x<c.d_radius&&i.y-n.y<c.d_radius&&i.x-n.x>-c.d_radius&&i.y-n.y>-c.d_radius&&(t.beginPath(),t.strokeStyle=r(i,s),t.moveTo(i.x,i.y),t.lineTo(s.x,s.y),t.stroke(),t.closePath())}}function b(){for(var e=0;e<c.nb;e++){c.array[e].draw()}}function h(){t.clearRect(0,0,e.width,e.height),j(),u(),b(),requestAnimationFrame(h)}l.prototype={draw:function(){t.beginPath(),t.fillStyle=this.color.style,t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fill()}};var x=document.querySelectorAll(".starry_sky")[0];x.addEventListener("mousemove",(function(e){n.x=e.pageX,n.y=e.pageY})),x.addEventListener("mouseleave",(function(t){n.x=e.width/2,n.y=e.height/2})),d(),requestAnimationFrame(h)}()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App container",children:[Object(c.jsx)("canvas",{className:"starry_sky"}),Object(c.jsx)(b,{}),Object(c.jsx)(f,{}),Object(c.jsx)(y,{})]})}}]),n}(a.Component),g=n(15),N=n(14),_=(n(38),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={options:["\u5929\u6d25","\u6c88\u9633","\u5927\u8fde","\u54c8\u5c14\u6ee8","\u6d4e\u5357","\u9752\u5c9b","\u5357\u4eac","\u4e0a\u6d77","\u676d\u5dde","\u6b66\u6c49","\u5e7f\u5dde","\u6df1\u5733","\u9999\u6e2f","\u6fb3\u95e8","\u91cd\u5e86","\u6210\u90fd","\u897f\u5b89"],selected_city:["\u5317\u4eac"]},c.selectCity=c.selectCity.bind(Object(N.a)(c)),c.deSelectCity=c.deSelectCity.bind(Object(N.a)(c)),c}return Object(d.a)(n,[{key:"selectCity",value:function(e){e.preventDefault();var t=e.target.getAttribute("index"),n=Object(g.a)(this.state.options),c=n[t];n.splice(t,1),this.setState({selected_city:[].concat(Object(g.a)(this.state.selected_city),[c]),options:n})}},{key:"deSelectCity",value:function(e){e.preventDefault();var t=e.target.getAttribute("index"),n=Object(g.a)(this.state.selected_city),c=n[t];n.splice(t,1),this.setState({selected_city:n,options:[].concat(Object(g.a)(this.state.options),[c])})}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"city-select container",children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsxs)("div",{className:"flex-item",children:[Object(c.jsx)("h3",{children:" \u53ef\u9009\u57ce\u5e02 "}),Object(c.jsx)("ul",{children:this.state.options.map((function(t,n){return Object(c.jsx)("li",{index:n,onClick:e.selectCity,children:t},n)}))})]}),Object(c.jsxs)("div",{className:"flex-item",children:[Object(c.jsx)("h3",{children:" \u5df2\u9009\u57ce\u5e02 "}),Object(c.jsx)("ul",{children:this.state.selected_city.map((function(t,n){return Object(c.jsx)("li",{index:n,onClick:e.deSelectCity,children:t},n)}))})]})]}),Object(c.jsx)(y,{})]})}}]),n}(a.Component)),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};n(39);s.a.render(Object(c.jsxs)(r.a,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:p}),Object(c.jsx)(o.a,{path:"/show",component:_})]}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.8147bd48.chunk.js.map