(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0aef49":"18dea194"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t),o=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");s.type=n,s.request=o,r[1](s)}a[t]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("9f7b"),o=(r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),r("router-link",{attrs:{to:"/Comments"}},[t._v("Comments")])],1),r("router-view")],1)}),s=[],i=(r("5c0b"),r("2877")),c={},l=Object(i["a"])(c,o,s,!1,null,null,null),u=l.exports,f=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home container"},[r("Table")],1)},p=[],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{staticClass:"my-1",attrs:{md:"6"}},[r("b-form-group",{staticClass:"mb-0",attrs:{horizontal:"",label:"Поиск"}},[r("b-input-group",[r("b-form-input",{attrs:{placeholder:"Что будем искать?"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),r("b-input-group-append",[r("b-btn",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Очистить")])],1)],1)],1)],1)],1),r("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"actions",fn:function(e){return[r("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return r.stopPropagation(),t.info(e.item,e.index,r.target)}}},[t._v("\n        Подробнее\n      ")])]}},{key:"row-details",fn:function(e){return[r("b-card",[r("ul",t._l(e.item,function(e,n){return r("li",{key:n},[t._v(t._s(n)+": "+t._s(e))])}),0)])]}}])}),r("b-row",[r("b-col",{staticClass:"my-1"},[r("b-pagination",{staticClass:"my-0",attrs:{align:"center","total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),r("b-modal",{attrs:{id:"modalInfo",title:t.modalInfo.title,"ok-only":""},on:{hide:t.resetModal}},[r("b-list-group",t._l(t.modalInfo.item,function(e,n){return r("b-list-group-item",{key:n},[r("b",[t._v(t._s(n)+":")]),t._v(" "+t._s(e)+"\n      ")])}),1)],1),t.historyItems.length?r("b-table",{attrs:{items:t.historyItems,fields:t.historyFields,"caption-top":""}},[r("template",{slot:"table-caption"},[t._v("\n      Последние просмотренные корабли\n    ")])],2):t._e()],1)},m=[],b=(r("7f7f"),r("ac6a"),r("bc3a")),v=r.n(b),g={name:"Table",data:function(){return{items:[],errors:[],next:"https://swapi.co/api/starships",fields:[{key:"created",label:"Дата создания",sortable:!0,sortDirection:"desc"},{key:"name",label:"Название",sortable:!0,sortDirection:"desc"},{key:"starship_class",label:"Класс",sortable:!0,sortDirection:"desc"},{key:"cargo_capacity",label:"Вместимость",sortable:!0,sortDirection:"desc"},{key:"cost_in_credits",label:"Стоимость",sortable:!0,sortDirection:"desc"},{key:"actions",label:""}],currentPage:1,perPage:10,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,modalInfo:{title:"",item:{}},historyItems:this.$store.state.lastWatchedStarships,historyFields:[{key:"name",label:"Название"},{key:"watchTime",label:"Время просмотра"}]}},computed:{totalRows:function(){return this.items.length}},methods:{getStarships:function(){var t=this;v.a.get(this.next).then(function(e){var r=t;if(e.data.results.forEach(function(t){t.created=new Date(Date.parse(t.created)).toLocaleString("ru"),r.items.push(t)}),t.next=e.data.next,t.next)return t.getStarships()}).catch(function(e){t.errors.push(e)})},info:function(t,e,r){this.modalInfo.title="".concat(t.name),delete t.films,delete t.pilots,this.modalInfo.item=t,this.$root.$emit("bv::show::modal","modalInfo",r),this.$store.commit("addWatchedStarship",{starship:t,date:new Date})},resetModal:function(){this.modalInfo.title="",this.modalInfo.content=""}},created:function(){this.getStarships()}},y=g,w=Object(i["a"])(y,h,m,!1,null,null,null),_=w.exports,k={name:"Catalog",components:{Table:_}},S=k,D=Object(i["a"])(S,d,p,!1,null,null,null),x=D.exports;n["a"].use(f["a"]);var P=new f["a"]({routes:[{path:"/",name:"catalog",component:x},{path:"/comments",name:"comments",component:function(){return r.e("chunk-2d0aef49").then(r.bind(null,"0bef"))}}]}),T=(r("55dd"),r("2f62"));n["a"].use(T["a"]);var j=new T["a"].Store({state:{lastWatchedStarships:[]},mutations:{addWatchedStarship:function(t,e){var r;if(t.lastWatchedStarships.forEach(function(n){n.name===e.starship.name&&(n.watchTime=e.date.toLocaleString("ru"),t.lastWatchedStarships.sort(function(t,e){return Date.parse(t.watchTime)>Date.parse(e.watchTime)?1:Date.parse(t.watchTime)<Date.parse(e.watchTime)?-1:void 0}),r=!0)}),!r){var n={};n.name=e.starship.name,n.watchTime=e.date.toLocaleString("ru"),t.lastWatchedStarships.push(n),t.lastWatchedStarships.length>5&&t.lastWatchedStarships.shift()}}},actions:{}});n["a"].config.productionTip=!1,n["a"].use(a["a"]),new n["a"]({router:P,store:j,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){}});
//# sourceMappingURL=app.0d4b45a0.js.map