(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(p,e,a){},20:function(p,e,a){},22:function(p,e,a){"use strict";a.r(e);var c=a(0),t=a.n(c),i=a(5),l=a.n(i),n=(a(18),a(3)),w=a(8),o=a(26),r=function(p){var e=p.selectedImg,a=p.setSelectedImg;return t.a.createElement(o.a.div,{className:"backdrop",onClick:function(p){p.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},t.a.createElement(o.a.img,{src:e,alt:"modal-img",initial:{y:"-100vh"},animate:{y:0}}))},m=function(p){var e=p.filter,a=Object(c.useState)(null),i=Object(n.a)(a,2),l=i[0],w=i[1];return t.a.createElement("div",{className:"boo"},e.map(function(p){return t.a.createElement("div",{className:"container",key:p.id},t.a.createElement("img",{src:p.pic1,onClick:function(){return w(p.pic1)}}),t.a.createElement("img",{src:p.pic3,onClick:function(){return w(p.pic2)}}),t.a.createElement("img",{src:p.pic2,onClick:function(){return w(p.pic3)}}),t.a.createElement("img",{src:p.pic4,onClick:function(){return w(p.pic4)}}),t.a.createElement("img",{src:p.pic5,onClick:function(){return w(p.pic5)}}),t.a.createElement("img",{src:p.pic7,onClick:function(){return w(p.pic6)}}),t.a.createElement("img",{src:p.pic6,onClick:function(){return w(p.pic7)}}),t.a.createElement("img",{src:p.pic8,onClick:function(){return w(p.pic8)}}),t.a.createElement("img",{src:p.pic9,onClick:function(){return w(p.pic9)}}),t.a.createElement("img",{src:p.pic10,onClick:function(){return w(p.pic10)}}))}),l&&t.a.createElement(r,{selectedImg:l,setSelectedImg:w}))},s=a(6),g=function(){return t.a.createElement("div",null,s.map(function(p){return t.a.createElement("div",{className:"logocon",key:p.tho},t.a.createElement("img",{src:p.ironman,onClick:function(){window.open(p.iron)}}),t.a.createElement("img",{src:p.captainamerica,onClick:function(){window.open(p.cap)}}),t.a.createElement("img",{src:p.hulk,onClick:function(){window.open(p.hul)}}),t.a.createElement("img",{src:p.thor,onClick:function(){window.open(p.tho)}}),t.a.createElement("img",{src:p.blackwidow,onClick:function(){window.open(p.black)}}),t.a.createElement("img",{src:p.hawkeye,onClick:function(){window.open(p.hawk)}}))}))},h=a(7);a(20);var v=function(){var p=Object(c.useState)(""),e=Object(n.a)(p,2),a=e[0],i=e[1],l=h.filter(function(p){return p.id.includes(a.toLowerCase())||p.name.includes(a.toLowerCase())});return t.a.createElement("div",{className:"App"},t.a.createElement("header",{className:"head"},t.a.createElement("div",{className:"heading"}),t.a.createElement("div",{className:"search"},t.a.createElement("input",{type:"text",placeholder:"Search..",value:a,onChange:function(p){return i(p.target.value)},className:"input"}),t.a.createElement(w.a,{id:"sbtn"}))),a.length>0?t.a.createElement(m,{filter:l}):t.a.createElement(g,null))},u=function(p){p&&p instanceof Function&&a.e(1).then(a.bind(null,25)).then(function(e){var a=e.getCLS,c=e.getFID,t=e.getFCP,i=e.getLCP,l=e.getTTFB;a(p),c(p),t(p),i(p),l(p)})};l.a.createRoot(document.getElementById("root")).render(t.a.createElement(t.a.StrictMode,null,t.a.createElement(v,null))),u()},6:function(p){p.exports=[{id:"logos",blackwidow:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_log_def_06.png",hawkeye:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Hawkeye_TV_series_logo.png",thor:"https://image.tmdb.org/t/p/original/hvsMANAPu3dKlzocjwcrV3OfQh2.png",hulk:"https://pngimg.com/uploads/hulk/hulk_PNG35.png",captainamerica:"https://picfiles.alphacoders.com/581/58173.png",ironman:"https://logos-world.net/wp-content/uploads/2020/12/Iron-Man-Logo.png",iron:"https://en.wikipedia.org/wiki/Iron_Man",cap:"https://en.wikipedia.org/wiki/Captain_America",hul:"https://en.wikipedia.org/wiki/Hulk",tho:"https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)",black:"https://en.wikipedia.org/wiki/Black_Widow_(Marvel_Comics)",hawk:"https://en.wikipedia.org/wiki/Hawkeye_(Clint_Barton)",th:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_log_def_01.png"}]},7:function(p){p.exports=[{id:"ironman",name:"tony stark",pic1:"https://wallpapercave.com/dwp2x/wp3533791.jpg",pic2:"https://wallpapercave.com/wp/wp3703399.jpg",pic3:"https://wallpapercave.com/wp/wp123564.jpg",pic4:"https://wallpapercave.com/wp/wp3703403.jpg",pic5:"https://wallpapercave.com/wp/wp3703417.jpg",pic6:"https://wallpapercave.com/wp/wp3703420.jpg",pic7:"https://wallpapercave.com/wp/wp3703425.jpg",pic8:"https://wallpapercave.com/wp/wp3703429.jpg",pic9:"https://wallpapercave.com/wp/wp3703440.jpg",pic10:"https://wallpapercave.com/wp/wp3703439.jpg"},{id:"captain",name:"steve rogers",pic1:"https://wallpapercave.com/wp/wp5632184.jpg",pic2:"https://wallpapercave.com/wp/wp5117123.jpg",pic3:"https://wallpapercave.com/wp/wp9027864.jpg",pic4:"https://wallpapercave.com/wp/wp10739101.jpg",pic5:"https://wallpapercave.com/wp/wp6719565.jpg",pic6:"https://wallpapercave.com/wp/wp1808958.jpg",pic7:"https://wallpapercave.com/wp/wp11043404.jpg",pic8:"https://wallpapercave.com/wp/wp11161116.jpg",pic9:"https://wallpapercave.com/wp/wp7299442.jpg",pic10:"https://wallpapercave.com/wp/wp5485787.jpg"},{id:"hulk",name:"bruce banner",pic1:"https://wallpapercave.com/wp/wp10901937.jpg",pic2:"https://wallpapercave.com/wp/wp10901954.jpg",pic3:"https://wallpapercave.com/wp/wp6556154.jpg",pic4:"https://wallpapercave.com/wp/wp10791640.jpg",pic5:"https://wallpapercave.com/wp/wp9428880.jpg",pic6:"https://wallpapercave.com/wp/wp4309492.jpg",pic7:"https://wallpapercave.com/wp/wp10791741.jpg",pic8:"https://wallpapercave.com/wp/wp10791757.jpg",pic9:"https://wallpapercave.com/wp/wp8238410.jpg",pic10:"https://wallpapercave.com/wp/wp10791675.jpg"},{id:"thor",name:"odinson",pic1:"https://wallpapercave.com/wp/wp6679464.jpg",pic2:"https://wallpapercave.com/wp/wp5438745.jpg",pic3:"https://wallpapercave.com/wp/wp8404603.jpg",pic4:"https://wallpapercave.com/wp/wp6337212.jpg",pic5:"https://wallpapercave.com/wp/wp4360657.jpg",pic6:"https://wallpapercave.com/wp/wp8404643.jpg",pic7:"https://wallpapercave.com/wp/wp8404932.jpg",pic8:"https://wallpapercave.com/wp/wp8404949.jpg",pic9:"https://wallpapercave.com/wp/wp8404987.jpg",pic10:"https://wallpapercave.com/wp/wp8405069.jpg"},{id:"blackwidow",name:"natasha romanoff",pic1:"https://wallpapercave.com/wp/wp7945330.jpg",pic2:"https://wallpapercave.com/wp/wp4590037.jpg",pic3:"https://wallpapercave.com/wp/wp7945345.jpg",pic4:"https://wallpapercave.com/wp/wp7945357.jpg",pic5:"https://wallpapercave.com/wp/wp5234630.jpg",pic6:"https://wallpapercave.com/wp/wp7945965.jpg",pic7:"https://wallpapercave.com/wp/wp7945969.jpg",pic8:"https://wallpapercave.com/wp/wp7945984.jpg",pic9:"https://wallpapercave.com/wp/wp7945988.jpg",pic10:"https://wallpapercave.com/wp/wp7945997.jpg"},{id:"hawkeye",name:"clint barton",pic1:"https://wallpapercave.com/wp/wp7725430.jpg",pic2:"https://wallpapercave.com/wp/wp4311668.jpg",pic3:"https://wallpapercave.com/wp/wp9229352.jpg",pic4:"https://wallpapercave.com/wp/wp7954619.jpg",pic5:"https://wallpapercave.com/wp/wp8863601.jpg",pic6:"https://wallpapercave.com/wp/wp8890895.jpg",pic7:"https://wallpapercave.com/wp/wp6387505.jpg",pic8:"https://wallpapercave.com/wp/wp10058661.jpg",pic9:"https://wallpapercave.com/wp/wp10058728.jpg",pic10:"https://wallpapercave.com/wp/wp4311630.jpg"}]},9:function(p,e,a){p.exports=a(22)}},[[9,3,2]]]);
//# sourceMappingURL=main.d1974c03.chunk.js.map