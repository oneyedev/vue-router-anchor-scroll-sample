(function(e){function t(t){for(var i,u,s=t[0],o=t[1],c=t[2],p=0,d=[];p<s.length;p++)u=s[p],a[u]&&d.push(a[u][0]),a[u]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},a={index:0},r=[];function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-router-anchor-scroll-sample/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],u=(n("034f"),n("2877")),s={},o=Object(u["a"])(s,a,r,!1,null,null,null),c=o.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("\n  This is vue router anchor scroll sample!\n  "),n("h1",{attrs:{id:"section1"}},[e._v("section1")]),e._v("\n  Lorem ipsum litora lacinia phasellus aenean placerat phasellus, urna sed\n  cubilia convallis cubilia feugiat nec feugiat, diam eu proin feugiat\n  vulputate fusce porta quis dictum auctor phasellus posuere tempus convallis\n  vel tincidunt elit.\n  "),n("h1",{attrs:{id:"section2"}},[e._v("section2")]),e._v("\n  Diam at etiam tellus id scelerisque aliquam lacinia lacus, placerat habitant\n  faucibus sagittis eu platea dapibus sit, varius ut phasellus etiam amet\n  vehicula eleifend.\n  "),n("h1",{attrs:{id:"section3"}},[e._v("section3")]),e._v("\n  Mollis vehicula quis hac nunc id etiam vivamus iaculis primis, aenean\n  ultricies pretium torquent conubia adipiscing habitasse eget, aptent orci\n  quis odio et elementum praesent at nec eu posuere mauris ultricies.\n  "),n("h1",{attrs:{id:"section4"}},[e._v("section4")]),e._v("\n  Orci maecenas tincidunt ut sapien pretium phasellus volutpat eu lacus cursus\n  integer nostra aptent iaculis, lectus tellus aenean turpis erat senectus\n  rutrum feugiat tortor molestie himenaeos tristique diam scelerisque feugiat\n  semper conubia fames metus sollicitudin.\n  "),n("h1",{attrs:{id:"section5"}},[e._v("section5")]),e._v("\n  Nisi nullam ultrices auctor risus himenaeos vulputate commodo eros, augue\n  litora ad praesent dapibus luctus pellentesque quam, quisque ultrices\n  laoreet commodo ultrices enim nulla.\n  "),n("h1",{attrs:{id:"section6"}},[e._v("section6")]),e._v("\n  Est elementum semper diam odio venenatis scelerisque blandit elit orci,\n  aptent euismod interdum curae felis nisi taciti conubia, feugiat porta\n  posuere pellentesque massa at sapien bibendum.\n  "),n("div",{staticClass:"index"},[n("ul",e._l(e.anchors,function(t){return n("li",{key:t.id,staticClass:"index_item",on:{click:function(n){return e.goToAnchor(t)}}},[e._v("\n        "+e._s(t.id)+"\n      ")])}),0)])])},d=[],f=(n("7f7f"),n("75fc")),m={name:"home",data:function(){return{anchors:[]}},mounted:function(){this.anchors=[{id:"top"}].concat(Object(f["a"])(document.querySelectorAll("h1")))},methods:{goToAnchor:function(e){var t=this.$route.name,n="#"+e.id;this.$router.push({name:t,hash:n})}}},h=m,v=(n("8555"),Object(u["a"])(h,p,d,!1,null,"69dd2da0",null)),b=v.exports;i["a"].use(l["a"]);var _=new l["a"]({mode:"history",base:"/vue-router-anchor-scroll-sample/",routes:[{path:"/",name:"home",component:b}],scrollBehavior:function(e,t,n){if(e.hash)return"#top"===e.hash?{x:0,y:0}:{selector:e.hash}}}),g=_;i["a"].config.productionTip=!1,new i["a"]({router:g,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},8193:function(e,t,n){},8555:function(e,t,n){"use strict";var i=n("8193"),a=n.n(i);a.a}});
//# sourceMappingURL=index.318c28ee.js.map