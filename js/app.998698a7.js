(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],v=0,u=[];v<o.length;v++)n=o[v],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"flex bg-white items-center justify-between flex-wrap shadow-md p-6"},[t._m(0),r("form",{staticClass:"relative navbar-form",on:{submit:function(e){return e.preventDefault(),t.getResults(e)}}},[r("svg",{staticClass:"absolute navbar-form-search",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18.81",height:"18.814",viewBox:"0 0 18.81 18.814"}},[r("path",{attrs:{id:"search-solid",d:"M18.555,16.266,14.891,12.6a.881.881,0,0,0-.625-.257h-.6a7.639,7.639,0,1,0-1.323,1.323v.6a.881.881,0,0,0,.257.625l3.663,3.663a.878.878,0,0,0,1.246,0l1.04-1.04A.886.886,0,0,0,18.555,16.266ZM7.642,12.345a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,7.642,12.345Z",fill:"#818994"}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"transition focus:outline-0 border border-transparent\n      focus:bg-white placeholder-gray-00 rounded-lg\n      bg-gray-200 py-2 pr-4 pl-10 block w-full\n      appearance-none leading-normal",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchTerm},on:{input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}})]),r("div",{staticClass:"block flex-grow"},[r("a",{staticClass:"float-right hover:text-white navbar-github ",attrs:{href:"https://github.com/AssemblyWeb/vue-api",target:"_blank"}},[r("svg",{staticClass:"svg-inline--fa fa-github fa-w-16",attrs:{height:"45","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"}},[r("path",{staticClass:"transition",attrs:{fill:"#3AB982",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}})])])])]),r("div",{staticClass:"flex flex-grow mt-5 container mx-auto"},[r("div",{staticClass:"w-3/4"},[t.error?r("div",{staticClass:" text-center py-4 lg:px-4"},[r("div",{staticClass:"p-2 bg-red-600 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex",attrs:{role:"alert"}},[r("span",{staticClass:"flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3"},[t._v("Oops!")]),r("span",{staticClass:"font-semibold mr-2 text-left flex-auto"},[t._v(t._s(t.error))])])]):t._e(),this.results.length?r("div",{staticClass:"font-primary"},[t._v(" "+t._s(this.results.length)+" matching results in "),r("span",{staticClass:"font-bold"},[t._v('"'+t._s(this.searchTerm)+'"')])]):t._e(),r("div",{staticClass:"container flex flex-wrap float-right m-2"},t._l(t.results,(function(e){return r("movie",{key:e.id,staticClass:"w-1/3 mb-4",attrs:{movie:e,addFav:t.addFav,removeFav:t.removeFav}})})),1)]),r("div",{staticClass:"w-1/4"},[this.favs.length?r("div",{staticClass:"ml-3 font-bold font-primary"},[t._v(" Movies to see: "+t._s(this.favs.length)+" ")]):t._e(),r("div",t._l(t.favs,(function(e){return r("minicard",{key:e.id,staticClass:"flex w-3/3 m-2",attrs:{movie:e,removeFav:t.removeFav}})})),1)])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6"},[s("span",{staticClass:"font-semibold text-xl tracking-tight"},[s("img",{attrs:{src:r("9b19"),alt:""}})])])}],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-2"},[r("div",{staticClass:"rounded border shadow-lg bg-white h-auto relative overflow-hidden"},[r("img",{staticClass:"object-cover w-full movie-card-img",attrs:{src:t.getImgUrl(t.movie.Poster),alt:t.movie.Title}}),r("div",{staticClass:"absolute inline-block text-xs font-bold movie-card-category bg-green-200 uppercase text-green-500 rounded-full px-3 "},[t._v(t._s(t.movie.Type))]),r("div",{staticClass:"px-6 py-4 h-32 relative"},[r("div",{staticClass:"mb-4 movie-card-title"},[r("span",{staticClass:"font-bold"},[t._v(t._s(t.movie.Title))]),t._v(" ("+t._s(t.movie.Year)+") ")]),r("div",{staticClass:"absolute movie-card-buttons h-10"},[r("div",{staticClass:"inline-block uppercase hover:border-transparent border-green-500 border bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition cursor-pointer",attrs:{href:"https://www.imdb.com/title/"+t.movie.imdbID,target:"_blank"}},[t._v(" More info ")]),r("div",{staticClass:"inline-block movie-card-heart bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white\n        border border-red-500 hover:border-transparent rounded py-2 px-4 ml-2 cursor-pointer transition",on:{click:function(e){return t.addFav(t.movie)}}},[r("svg",{staticClass:"inline",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24.25",height:"21.218",viewBox:"0 0 24.25 21.218"}},[r("path",{staticClass:"transition",attrs:{id:"heart-solid",d:"M21.884,33.418a6.477,6.477,0,0,0-8.838.644l-.933.961-.933-.961a6.476,6.476,0,0,0-8.838-.644,6.8,6.8,0,0,0-.469,9.847l9.164,9.463a1.485,1.485,0,0,0,2.145,0l9.164-9.463a6.8,6.8,0,0,0-.464-9.847Z",transform:"translate(0.012 -31.967)",fill:"#f54d4d"}})])])])])])])},o=[],l={props:["movie","addFav"],methods:{getImgUrl(t){return"N/A"===t?"apimovie-missing.png":this.movie.Poster}}},c=l,d=(r("c098"),r("2877")),v=Object(d["a"])(c,n,o,!1,null,null,null),u=v.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full border-solid border-1 rounded shadow-lg"},[r("div",{staticClass:"h-auto w-32 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center bg-white overflow-hidden",style:"background-image: url("+t.getImgUrl(t.movie.Poster)+")",attrs:{title:"Woman holding a mug"}}),r("div",{staticClass:"w-full bg-white p-4 flex flex-col justify-between leading-normal"},[r("div",{staticClass:"mb-8"},[r("div",{staticClass:"movie-card-title font-bold"},[t._v(t._s(t.movie.Title))]),r("div",{staticClass:"inline-block text-xs font-bold movie-card-category bg-green-200 uppercase text-green-500 rounded-full px-3"},[t._v(t._s(t.movie.Type))])]),r("div",{staticClass:"flex items-center"},[r("a",{staticClass:"bg-red-500 text-red-700 font-semibold border-red-500 movie-card-trash\n        py-2 px-4 border hover:bg-transparent hover:border-red-500 rounded transition cursor-pointer",on:{click:function(e){return t.removeFav(t.movie)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18.359",height:"20.982",viewBox:"0 0 18.359 20.982"}},[r("path",{staticClass:"transition",attrs:{id:"trash-alt-regular",d:"M10.983,17.048h.984a.492.492,0,0,0,.492-.492V7.7a.492.492,0,0,0-.492-.492h-.984a.492.492,0,0,0-.492.492v8.852A.492.492,0,0,0,10.983,17.048ZM17.7,3.278H14.326L12.933.955A1.967,1.967,0,0,0,11.245,0H7.114A1.967,1.967,0,0,0,5.427.955L4.033,3.278H.656A.656.656,0,0,0,0,3.934V4.59a.656.656,0,0,0,.656.656h.656V19.015a1.967,1.967,0,0,0,1.967,1.967h11.8a1.967,1.967,0,0,0,1.967-1.967V5.245H17.7a.656.656,0,0,0,.656-.656V3.934A.656.656,0,0,0,17.7,3.278ZM7.042,2.086a.246.246,0,0,1,.211-.119h3.852a.246.246,0,0,1,.211.119l.716,1.192H6.327Zm8.039,16.928H3.278V5.245h11.8ZM6.393,17.048h.984a.492.492,0,0,0,.492-.492V7.7a.492.492,0,0,0-.492-.492H6.393A.492.492,0,0,0,5.9,7.7v8.852A.492.492,0,0,0,6.393,17.048Z",transform:"translate(0 0)",fill:"#fff"}})])])])])])},h=[],p={props:["movie","removeFav"],methods:{getImgUrl(t){return"N/A"===t?"apimovie-missing.png":this.movie.Poster}}},m=p,g=(r("d4b4"),Object(d["a"])(m,f,h,!1,null,null,null)),b=g.exports;const w="https://omdb-api.now.sh/?s=";var x={name:"app",components:{Movie:u,Minicard:b},data:()=>({error:"",searchTerm:"",results:[],favs:[]}),methods:{async getResults(){const t=`${w}${this.searchTerm}`,e=await fetch(t),r=await e.json();r.Error?(this.results=[],this.error=r.Error):"mandalorian"===this.searchTerm?(this.results=r.Search,this.error="This is the way"):(this.results=r.Search,this.error="")},addFav(t){!1===this.favs.includes(t)&&this.favs.push(t)},removeFav(t){const e=this.favs.indexOf(t);this.favs.splice(e,1)}}},C=x,_=(r("034f"),Object(d["a"])(C,a,i,!1,null,null,null)),y=_.exports;r("5aea");s["a"].config.productionTip=!1,new s["a"]({render(t){return t(y)}}).$mount("#app")},"5aea":function(t,e,r){},"67c9":function(t,e,r){},"85ec":function(t,e,r){},"9a16":function(t,e,r){},"9b19":function(t,e,r){t.exports=r.p+"img/logo.1b2931c7.svg"},c098:function(t,e,r){"use strict";var s=r("9a16"),a=r.n(s);a.a},d4b4:function(t,e,r){"use strict";var s=r("67c9"),a=r.n(s);a.a}});
//# sourceMappingURL=app.998698a7.js.map