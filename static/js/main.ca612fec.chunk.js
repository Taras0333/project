(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/ar-icon.8d94767c.svg"},function(e,a,t){e.exports=t.p+"static/media/dots.5d14e7e5.svg"},function(e,a,t){e.exports=t.p+"static/media/smile.cbff422c.svg"},function(e,a,t){e.exports=t.p+"static/media/pet.dce15f4f.svg"},function(e,a,t){e.exports=t.p+"static/media/food.8bab732c.svg"},function(e,a,t){e.exports=t.p+"static/media/clothes.4b907907.svg"},function(e,a,t){e.exports=t.p+"static/media/health.e873ac6f.svg"},function(e,a,t){e.exports=t.p+"static/media/restor.f3f17d8d.svg"},function(e,a,t){e.exports=t.p+"static/media/transport.20581693.svg"},function(e,a,t){e.exports=t.p+"static/media/utility.7318d4c7.svg"},function(e,a,t){e.exports=t.p+"static/media/other.c5ab1714.svg"},,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(2),r=t.n(c),i=(t(23),t(24),t(3)),m=t(4),l=t(17),o=t(16),u=(t(25),t(5)),p=t.n(u),d=(t(26),function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header-left"},s.a.createElement("div",{className:"header-top"},s.a.createElement("span",{className:"header-charges"},"Charges"),s.a.createElement("span",{className:"header-incomes"},"Incomes")),s.a.createElement("div",{className:"header-bottom"},s.a.createElement("div",{className:"header-bottom-wrapper"},s.a.createElement("span",{className:"my-charges"},"My Charges /"),s.a.createElement("span",{className:"weaks"},"this week"),s.a.createElement("img",{className:"arrow-icon",src:p.a,alt:"arrow icon"})),s.a.createElement("hr",{className:"header-line"}))),s.a.createElement("div",{className:"balance"},s.a.createElement("span",{className:"balance-tittle"},"Balance"),s.a.createElement("span",{className:"sum"},"$",e.sum)))}),h=function(e){return s.a.createElement("div",{className:"menu-cont"},s.a.createElement("div",{className:"menu-wrapper"},s.a.createElement("span",{className:"menu-items"},"Category"),s.a.createElement("span",{className:"menu-items"},"Description"),s.a.createElement("span",{className:"menu-items"},"Date"),s.a.createElement("span",{className:"menu-items"},"Money"),s.a.createElement("span",{className:"menu-items"},"Action"),s.a.createElement("button",{className:"menu-btn"},"Add more")),s.a.createElement("hr",{className:"menu-line"}))},f=(t(27),t(28),t(6)),E=t.n(f),v=function(e){return s.a.createElement("div",{className:"table-row"},s.a.createElement("div",{className:"table-row-left"},s.a.createElement("img",{className:"table-icon table-items first-icon",src:e.img,alt:"icon"}),s.a.createElement("span",{className:"table-items table-span row-title"},e.title)),s.a.createElement("div",{className:"table-row-rigth"},s.a.createElement("span",{className:"table-items table-span"},"Aug 12, 2019"),s.a.createElement("span",{className:"table-items table-span"},"$",e.charges),s.a.createElement("img",{className:"table-icon table-items table-span last-icon",src:E.a,alt:"icon"})))},b=t(7),N=t.n(b),g=t(8),w=t.n(g),y=t(9),x=t.n(y),k=t(10),C=t.n(k),j=t(11),O=t.n(j),A=t(12),I=t.n(A),M=t(13),S=t.n(M),B=t(14),D=t.n(B),$=t(15),J=t.n($),T=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).state={char:[{fun:30,pets:65,food:200.9,clothes:154,health:85,restoraunts:86.57,transport:51,bils:134.5,other:90}],sum:0,titles:4,icons:[]},e.getIcons=function(){e.setState({icons:[N.a,w.a,x.a,C.a,O.a,I.a,S.a,D.a,J.a]})},e.sum=function(){var a=0;e.state.char.forEach((function(e){Object.values(e).map((function(e){a+=e}))})),e.setState({sum:a})},e.eachCharge=function(){var a=[];return e.state.char.map((function(e){a=Object.values(e)})),a},e.eachTitle=function(){var a=[];e.state.char.map((function(e){a=Object.keys(e)})),e.setState({titles:a})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.sum(),this.getIcons(),this.eachTitle()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"home-page"},s.a.createElement(d,{sum:this.state.sum}),s.a.createElement(h,null),s.a.createElement("div",{className:"table-cont"},this.eachCharge().map((function(a,t){return s.a.createElement(v,{charges:a,title:e.state.titles[t],img:e.state.icons[t]})}))))}}]),t}(n.Component),W=function(){return s.a.createElement("div",{className:"side-manu"},s.a.createElement("span",{className:"side-bar-items"},"Home"),s.a.createElement("span",{className:"side-bar-items"},"Charts"),s.a.createElement("span",{className:"side-bar-items"},"Categories"))};var H=function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(W,null),s.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.ca612fec.chunk.js.map