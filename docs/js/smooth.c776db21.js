(function(e){function t(t){for(var i,o,r=t[0],u=t[1],c=t[2],m=0,p=[];m<r.length;m++)o=r[m],a[o]&&p.push(a[o][0]),a[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={smooth:0,index:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-router-anchor-scroll-sample/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("034f"),n("2877")),r={},u=Object(o["a"])(r,a,s,!1,null,null,null),c=u.exports,l=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("\n  This is vue router anchor scroll sample!\n  "),n("h1",{attrs:{id:"section1"}},[e._v("section1")]),e._v("\n  Lorem ipsum litora lacinia phasellus aenean placerat phasellus, urna sed\n  cubilia convallis cubilia feugiat nec feugiat, diam eu proin feugiat\n  vulputate fusce porta quis dictum auctor phasellus posuere tempus convallis\n  vel tincidunt elit.\n  "),n("h1",{attrs:{id:"section2"}},[e._v("section2")]),e._v("\n  Diam at etiam tellus id scelerisque aliquam lacinia lacus, placerat habitant\n  faucibus sagittis eu platea dapibus sit, varius ut phasellus etiam amet\n  vehicula eleifend.\n  "),n("h1",{attrs:{id:"section3"}},[e._v("section3")]),e._v("\n  Mollis vehicula quis hac nunc id etiam vivamus iaculis primis, aenean\n  ultricies pretium torquent conubia adipiscing habitasse eget, aptent orci\n  quis odio et elementum praesent at nec eu posuere mauris ultricies.\n  "),n("h1",{attrs:{id:"section4"}},[e._v("section4")]),e._v("\n  Orci maecenas tincidunt ut sapien pretium phasellus volutpat eu lacus cursus\n  integer nostra aptent iaculis, lectus tellus aenean turpis erat senectus\n  rutrum feugiat tortor molestie himenaeos tristique diam scelerisque feugiat\n  semper conubia fames metus sollicitudin.\n  "),n("h1",{attrs:{id:"section5"}},[e._v("section5")]),e._v("\n  Nisi nullam ultrices auctor risus himenaeos vulputate commodo eros, augue\n  litora ad praesent dapibus luctus pellentesque quam, quisque ultrices\n  laoreet commodo ultrices enim nulla.\n  "),n("h1",{attrs:{id:"section6"}},[e._v("section6")]),e._v("\n  Est elementum semper diam odio venenatis scelerisque blandit elit orci,\n  aptent euismod interdum curae felis nisi taciti conubia, feugiat porta\n  posuere pellentesque massa at sapien bibendum.\n  "),n("div",{staticClass:"index"},[n("ul",e._l(e.anchors,function(t){return n("li",{key:t.id,staticClass:"index_item",on:{click:function(n){return e.goToAnchor(t)}}},[e._v("\n        "+e._s(t.id)+"\n      ")])}),0)])])},p=[],d=(n("7f7f"),n("75fc")),v={name:"home",data:function(){return{anchors:[]}},mounted:function(){this.anchors=Object(d["a"])(document.querySelectorAll("h1"))},methods:{goToAnchor:function(e){var t=this.$route.name,n="#"+e.id;this.$router.push({name:t,hash:n})}}},h=v,f=(n("9b65"),Object(o["a"])(h,m,p,!1,null,"5753028f",null)),_=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("\n  This is vue router anchor scroll sample!\n  "),n("h1",{attrs:{id:"section1"}},[e._v("section1")]),e._v("\n  Lorem ipsum litora lacinia phasellus aenean placerat phasellus, urna sed\n  cubilia convallis cubilia feugiat nec feugiat, diam eu proin feugiat\n  vulputate fusce porta quis dictum auctor phasellus posuere tempus convallis\n  vel tincidunt elit.\n  "),n("h1",{attrs:{id:"section2"}},[e._v("section2")]),e._v("\n  Diam at etiam tellus id scelerisque aliquam lacinia lacus, placerat habitant\n  faucibus sagittis eu platea dapibus sit, varius ut phasellus etiam amet\n  vehicula eleifend.\n  "),n("h1",{attrs:{id:"section3"}},[e._v("section3")]),e._v("\n  Mollis vehicula quis hac nunc id etiam vivamus iaculis primis, aenean\n  ultricies pretium torquent conubia adipiscing habitasse eget, aptent orci\n  quis odio et elementum praesent at nec eu posuere mauris ultricies.\n  "),n("h1",{attrs:{id:"section4"}},[e._v("section4")]),e._v("\n  Orci maecenas tincidunt ut sapien pretium phasellus volutpat eu lacus cursus\n  integer nostra aptent iaculis, lectus tellus aenean turpis erat senectus\n  rutrum feugiat tortor molestie himenaeos tristique diam scelerisque feugiat\n  semper conubia fames metus sollicitudin.\n  "),n("h1",{attrs:{id:"section5"}},[e._v("section5")]),e._v("\n  Nisi nullam ultrices auctor risus himenaeos vulputate commodo eros, augue\n  litora ad praesent dapibus luctus pellentesque quam, quisque ultrices\n  laoreet commodo ultrices enim nulla.\n  "),n("h1",{attrs:{id:"section6"}},[e._v("section6")]),e._v("\n  Est elementum semper diam odio venenatis scelerisque blandit elit orci,\n  aptent euismod interdum curae felis nisi taciti conubia, feugiat porta\n  posuere pellentesque massa at sapien bibendum.\n  "),n("div",{staticClass:"control_area"},[n("div",{staticClass:"control_section"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.where,expression:"where"}],staticClass:"control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.where=t.target.multiple?n:n[0]}}},e._l(e.anchors,function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v("\n          "+e._s(t.id)+"\n        ")])}),0)]),n("div",{staticClass:"control_section"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.how,expression:"how"}],staticClass:"control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.how=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"direct"}},[e._v("Direct")]),n("option",{attrs:{value:"speed"}},[e._v("Constant Speed")]),n("option",{attrs:{value:"frame"}},[e._v("Constant Frame")])])]),"speed"===e.how?n("div",{staticClass:"control_section speed"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.speed,expression:"speed"}],staticClass:"control",attrs:{type:"number"},domProps:{value:e.speed},on:{input:function(t){t.target.composing||(e.speed=t.target.value)}}})]):e._e(),"frame"===e.how?n("div",{staticClass:"control_section frame"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.frame,expression:"frame"}],staticClass:"control frame",attrs:{type:"number"},domProps:{value:e.frame},on:{input:function(t){t.target.composing||(e.frame=t.target.value)}}})]):e._e(),n("div",{staticClass:"control_section"},[n("button",{staticClass:"button",on:{click:e.goToAnchor}},[e._v("GO")])])])])},g=[],w=(n("7514"),{name:"home",data:function(){return{anchors:[],where:"section3",how:"direct",speed:5,frame:120}},computed:{selected:function(){var e=this;return this.anchors.find(function(t){return t.id===e.where})}},mounted:function(){this.anchors=Object(d["a"])(document.querySelectorAll("h1"))},methods:{goToAnchor:function(){"direct"===this.how?this.moveByDirect(this.selected):"speed"===this.how?this.moveByConstantSpeed(this.selected,this.speed):"frame"===this.how&&this.moveByConstantFrame(this.selected,this.frame)},moveByDirect:function(e){var t=e.offsetTop;window.scrollTo(0,t)},moveByConstantSpeed:function(e,t){var n=function n(i,a){var s=i-a,o=e.getBoundingClientRect().top;if(!(Math.abs(o)<=1)){if(o>0){var r=document.scrollingElement;if(r.scrollTop+r.clientHeight===r.scrollHeight)return;var u=Math.min(s*t,o);window.scrollBy(0,u)}else{if(0===document.scrollingElement.scrollTop)return;var c=Math.max(-s*t,o);window.scrollBy(0,c)}window.requestAnimationFrame(function(e){return n(e,i)})}};window.requestAnimationFrame(function(e){return n(e,window.performance.now())})},moveByConstantFrame:function(e,t){var n=Math.abs(e.getBoundingClientRect().top),i=n/t;this.moveByConstantSpeed(e,i)}}}),y=w,q=(n("9697"),Object(o["a"])(y,b,g,!1,null,"ab6f5e7a",null)),C=q.exports;i["a"].use(l["a"]);var x=new l["a"]({mode:"history",base:"/vue-router-anchor-scroll-sample/",routes:[{path:"/index",component:_},{path:"/smooth",component:C}],scrollBehavior:function(e,t,n){if(e.hash)return"#top"===e.hash?{x:0,y:0}:{selector:e.hash}}}),O=x;i["a"].config.productionTip=!1,new i["a"]({router:O,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,n){},9697:function(e,t,n){"use strict";var i=n("a08e"),a=n.n(i);a.a},"9b65":function(e,t,n){"use strict";var i=n("cd20"),a=n.n(i);a.a},a08e:function(e,t,n){},cd20:function(e,t,n){}});
//# sourceMappingURL=smooth.c776db21.js.map