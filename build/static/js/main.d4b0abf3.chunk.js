(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},23:function(e,t,n){e.exports=n.p+"static/media/lazi.1e4930e1.png"},26:function(e,t,n){e.exports=n.p+"static/media/up-arrow.07737735.svg"},30:function(e,t,n){e.exports=n(65)},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),c=n(5),i=n(20),o=n(21),s=n(27),u=n(22),l=n(28),d=n(0),p=n.n(d),h=n(6),f=n.n(h),w=n(7),v=n.n(w),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var b=n(2),x=n(3),y=n(23),k=n.n(y);function E(){var e=Object(b.a)(["\n  width: 100%;\n"]);return E=function(){return e},e}function O(){var e=Object(b.a)(["\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n"]);return O=function(){return e},e}var S=x.a.div(O()),j=x.a.img(E()),W=function(e){var t=e.handleSourceChange,n=e.sourceList;return p.a.createElement("nav",{className:"nav"},p.a.createElement(S,null,p.a.createElement(j,{src:k.a,alt:""})),n&&p.a.createElement("select",{onChange:t},n.map(function(e){return p.a.createElement("option",{key:e.id,value:e.id},e.name)})))},D=(n(10),function(e){var t=e.image,n=e.title,a=e.description,r=e.url;return p.a.createElement("div",{className:"news__item card"},p.a.createElement("div",{className:"card-image"},p.a.createElement("img",{src:t,alt:"news"}),p.a.createElement("a",{className:"btn-floating halfway-fab waves-effect waves-light red",href:r,target:"_blank",rel:"noopener noreferrer"},p.a.createElement("i",{className:"material-icons"},"arrow_forward"))),p.a.createElement("div",{className:"card-content"},p.a.createElement("span",{className:"card-title"},n),p.a.createElement("p",null,a)))});function N(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return N=function(){return e},e}var C=x.a.div(N()),A=function(e){var t=e.data;return p.a.createElement(C,null,t.map(function(e,t){return p.a.createElement(D,{image:e.urlToImage,title:e.title,description:e.description,url:e.url,key:t})}))},z=n(26),K=n.n(z);function R(){var e=Object(b.a)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 50%;\n  background-position: center;\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 8px;\n  top: -40px;\n  z-index: 57;\n  background-color: #a52a2a;\n  border-radius-left: 5px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]);return R=function(){return e},e}function T(){var e=Object(b.a)(["\n  display: block;\n"]);return T=function(){return e},e}function G(){var e=Object(b.a)(["\n  width: 40px;\n"]);return G=function(){return e},e}function L(){var e=Object(b.a)(["\n  display: inline-block;\n"]);return L=function(){return e},e}function P(){var e=Object(b.a)([""]);return P=function(){return e},e}function _(){var e=Object(b.a)(["\n  height: 0px;\n  color: white;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  background-color: #a52a2a;\n  z-index: 3;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-around;\n  transition: all 300ms ease;\n"]);return _=function(){return e},e}var I=x.a.div(_()),M=x.a.div(P()),U=x.a.span(L()),B=x.a.img(G()),H=x.a.span(T()),J=x.a.div(R(),K.a),q=function(e){var t=e.data,n=e.weatherWidgetOpen,a=e.clickHandler,r=t.list,c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=(new Date).getDay();return p.a.createElement(I,{style:n?{height:"70px"}:{height:"0"},onClick:a},r.map(function(e,t){return p.a.createElement(M,{key:e.dt},p.a.createElement(B,{src:"http://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),alt:"Weather icon"}),p.a.createElement(U,null,Math.floor(e.temp.day),"\u2103"),p.a.createElement(H,null,c[i++]))}),p.a.createElement(J,null))},F=(n(61),function(){return p.a.createElement("div",{className:"lds-ellipsis"},p.a.createElement("div",null),p.a.createElement("div",null),p.a.createElement("div",null),p.a.createElement("div",null))}),$=(n(63),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={apiKeyNews:"77aaa40707ae48e6913523b88e3bf60c",newsSelectedSource:"cnn",newsData:null,newsSources:null,apiKeyWeather:"f5cbece53f9805de76ff787b7dddb949",selectedCity:"novi beograd",weatherData:null,showGrid:!0,weatherWidgetOpen:!1},n.handleSourceChange=function(e){var t=e.target.value;n.setState({showGrid:!1}),Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=n,e.t1=t,e.next=5,n.getNewsData(t);case 5:e.t2=e.sent,e.t3={newsSelectedSource:e.t1,newsData:e.t2,showGrid:!0},e.t0.setState.call(e.t0,e.t3),e.next=13;break;case 10:e.prev=10,e.t4=e.catch(0),console.log("erorcina",e.t4);case 13:case"end":return e.stop()}},e,this,[[0,10]])}))()},n.handleWidget=function(e){n.setState(function(e,t){return{weatherWidgetOpen:!e.weatherWidgetOpen}})},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.newsData||Object(c.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=e,t.next=4,e.getNewsData();case 4:return t.t1=t.sent,t.next=7,e.getSource();case 7:return t.t2=t.sent,t.next=10,e.getWeatherData();case 10:t.t3=t.sent,t.t4={newsData:t.t1,newsSources:t.t2,weatherData:t.t3},t.t0.setState.call(t.t0,t.t4),t.next=18;break;case 15:t.prev=15,t.t5=t.catch(0),console.log("erorcina",t.t5);case 18:case"end":return t.stop()}},t,this,[[0,15]])}))()}},{key:"getSource",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://newsapi.org/v1/sources");case 2:return t=e.sent,e.next=5,t.data.sources;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getNewsData",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:this.state.newsSelectedSource,e.next=3,v()("https://newsapi.org/v2/top-headlines?sources=".concat(t,"&apiKey=").concat(this.state.apiKeyNews));case 3:return n=e.sent,e.next=6,n.data.articles;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getWeatherData",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a=arguments;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:this.state.selectedCity,e.next=3,v()("https://api.openweathermap.org/data/2.5/forecast/daily?q=".concat(t,"&units=metric&APPID=").concat(this.state.apiKeyWeather,"&cnt=3"));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return p.a.createElement("div",{className:"App"},p.a.createElement(W,{sourceList:this.state.newsSources,handleSourceChange:this.handleSourceChange}),p.a.createElement("div",{className:"container"},this.state.newsData&&this.state.showGrid?p.a.createElement(A,{data:this.state.newsData}):p.a.createElement(F,null)),this.state.weatherData&&p.a.createElement(q,{data:this.state.weatherData,weatherWidgetOpen:this.state.weatherWidgetOpen,clickHandler:this.handleWidget}))}}]),t}(p.a.Component)),Q=document.getElementById("root");f.a.render(p.a.createElement($,null),Q),function(e){if("serviceWorker"in navigator){if(new URL("/laziR",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/laziR","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):m(t,e)})}}()}},[[30,2,1]]]);
//# sourceMappingURL=main.d4b0abf3.chunk.js.map