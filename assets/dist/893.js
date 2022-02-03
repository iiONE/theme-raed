(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[893],{2893:(e,t,n)=>{"use strict";n.r(t),n.d(t,{salla_branches:()=>o});var s=n(1208);let i=n(2195),r=n(8855),a=i.createStore(r);const o=class{constructor(e){(0,s.r)(this,e),this.open=!1,this.isOpenedBefore=a.get("branch-choosed-before"),this.displayAs="default",this.browseProductsFrom="all",this.branches=[{id:1,name:"فرع الرياض",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:2,name:"فرع جدة",open:!1,available:!1,limited:!1,tag:"غير متوفر"},{id:3,name:"فرع مكة",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:4,name:"فرع المدينة",open:!0,available:!0,limited:!1,tag:"متوفر"},{id:5,name:"فرع جازان",open:!0,available:!0,limited:!0,tag:"الكمية محدودة"}],this.current=1,this.currentBranch=e=>this.branches.filter((e=>e.id==this.current))[0][e],this.statusColor=(e=null)=>e?e.limited?"s-branches-color-red":e.available?"s-branches-color-green":"s-branches-color-gray":this.currentBranch("limited")?"s-branches-color-red":this.currentBranch("available")?"s-branches-color-green":"s-branches-color-gray",this.isChoiceable=()=>"all"!==this.browseProductsFrom&&"single"==this.position||"header"==this.position,this.formTitle=()=>this.isChoiceable()?"توفر المنتج في الفروع الآخرى":"التسوق من فرع آخر",salla.event.on("branches::show",(()=>this.show()))}async show(){return this.modal.show()}async hide(){return this.modal.hide()}handelChange(e){this.selected=e.target.value}handleSubmit(){this.btn.load().then((()=>{setTimeout((()=>location.reload()),2e3)})),a.set("branch-choosed-before",!0),this.show(),setTimeout((()=>{this.current=this.selected}),300)}render(){return(0,s.h)("salla-modal",{icon:"sicon-store-alt",title:"فرع الرياض","sub-title":"أنت الآن تتصفح المتجر من","sub-title-first":!0,"is-closable":this.isOpenedBefore||"popup"!=this.displayAs?"true":"false",ref:e=>this.modal=e,"modal-width":"sm",id:"s-branches-modal",class:"hidden"},(0,s.h)("h4",{class:"s-branches-title"},this.formTitle()),this.branches.length<=5?(0,s.h)("div",{class:"s-branches-space-v"},this.branches.map((e=>(0,s.h)("div",{class:"s-branches-input-wrap"},(0,s.h)("input",{id:this.position+"_branch_"+e.id,disabled:!e.open&&this.isChoiceable(),name:"lang",type:"radio",value:e.id,onChange:e=>this.handelChange(e),class:{"s-branches-input":!0,"opacity-50":!e.open,hidden:!this.isChoiceable()},checked:this.current==e.id}),(0,s.h)("label",{htmlFor:this.position+"_branch_"+e.id,class:{"s-branches-label":!0,"s-branches-clickable":this.isChoiceable()}},(0,s.h)("span",{class:{"s-branches-is-closed":!e.open}},e.name),this.isChoiceable()?(0,s.h)("small",{class:"s-branches-closed-badge"},e.open?"":"مُغلق"):(0,s.h)("span",{class:this.statusColor(e)},e.tag)))))):(0,s.h)("select",{class:"s-branches-select",onInput:e=>this.handelChange(e)},this.branches.map((e=>(0,s.h)("option",{value:e.id,disabled:!e.open,selected:this.selected==e.id},e.name," ",e.open?"":"- مُغلق")))),this.isChoiceable()?(0,s.h)("slot",{name:"footer"},(0,s.h)("salla-button",{ref:e=>this.btn=e,onClick:()=>this.handleSubmit(),class:"s-branches-submit",wide:!0},salla.lang.get("common.elements.ok"))):"")}componentDidRender(){this.isOpenedBefore||"popup"!=this.displayAs||this.show()}get host(){return(0,s.g)(this)}};o.style=":host{display:block}"},2195:(e,t,n)=>{var s=n(9078),i=s.slice,r=s.pluck,a=s.each,o=s.bind,c=s.create,l=s.isList,h=s.isFunction,u=s.isObject;e.exports={createStore:p};var d={version:"2.0.12",enabled:!1,get:function(e,t){var n=this.storage.read(this._namespacePrefix+e);return this._deserialize(n,t)},set:function(e,t){return void 0===t?this.remove(e):(this.storage.write(this._namespacePrefix+e,this._serialize(t)),t)},remove:function(e){this.storage.remove(this._namespacePrefix+e)},each:function(e){var t=this;this.storage.each((function(n,s){e.call(t,t._deserialize(n),(s||"").replace(t._namespaceRegexp,""))}))},clearAll:function(){this.storage.clearAll()},hasNamespace:function(e){return this._namespacePrefix=="__storejs_"+e+"_"},createStore:function(){return p.apply(this,arguments)},addPlugin:function(e){this._addPlugin(e)},namespace:function(e){return p(this.storage,this.plugins,e)}};function p(e,t,n){n||(n=""),e&&!l(e)&&(e=[e]),t&&!l(t)&&(t=[t]);var s=n?"__storejs_"+n+"_":"",p=n?new RegExp("^"+s):null;if(!/^[a-zA-Z0-9_\-]*$/.test(n))throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");var f={_namespacePrefix:s,_namespaceRegexp:p,_testStorage:function(e){try{var t="__storejs__test__";e.write(t,t);var n=e.read(t)===t;return e.remove(t),n}catch(e){return!1}},_assignPluginFnProp:function(e,t){var n=this[t];this[t]=function(){var t=i(arguments,0),s=this;function r(){if(n)return a(arguments,(function(e,n){t[n]=e})),n.apply(s,t)}var o=[r].concat(t);return e.apply(s,o)}},_serialize:function(e){return JSON.stringify(e)},_deserialize:function(e,t){if(!e)return t;var n="";try{n=JSON.parse(e)}catch(t){n=e}return void 0!==n?n:t},_addStorage:function(e){this.enabled||this._testStorage(e)&&(this.storage=e,this.enabled=!0)},_addPlugin:function(e){var t=this;if(l(e))a(e,(function(e){t._addPlugin(e)}));else if(!r(this.plugins,(function(t){return e===t}))){if(this.plugins.push(e),!h(e))throw new Error("Plugins must be function values that return objects");var n=e.call(this);if(!u(n))throw new Error("Plugins must return an object of function properties");a(n,(function(n,s){if(!h(n))throw new Error("Bad plugin property: "+s+" from plugin "+e.name+". Plugins should only return functions.");t._assignPluginFnProp(n,s)}))}},addStorage:function(e){!function(){var e="undefined"==typeof console?null:console;e&&(e.warn?e.warn:e.log).apply(e,arguments)}("store.addStorage(storage) is deprecated. Use createStore([storages])"),this._addStorage(e)}},b=c(f,d,{plugins:[]});return b.raw={},a(b,(function(e,t){h(e)&&(b.raw[t]=o(b,e))})),a(e,(function(e){b._addStorage(e)})),a(t,(function(e){b._addPlugin(e)})),b}},9078:(e,t,n)=>{var s=Object.assign?Object.assign:function(e,t,n,s){for(var i=1;i<arguments.length;i++)c(Object(arguments[i]),(function(t,n){e[n]=t}));return e},i=function(){if(Object.create)return function(e,t,n,i){var r=o(arguments,1);return s.apply(this,[Object.create(e)].concat(r))};{function e(){}return function(t,n,i,r){var a=o(arguments,1);return e.prototype=t,s.apply(this,[new e].concat(a))}}}(),r=String.prototype.trim?function(e){return String.prototype.trim.call(e)}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},a="undefined"!=typeof window?window:n.g;function o(e,t){return Array.prototype.slice.call(e,t||0)}function c(e,t){l(e,(function(e,n){return t(e,n),!1}))}function l(e,t){if(h(e)){for(var n=0;n<e.length;n++)if(t(e[n],n))return e[n]}else for(var s in e)if(e.hasOwnProperty(s)&&t(e[s],s))return e[s]}function h(e){return null!=e&&"function"!=typeof e&&"number"==typeof e.length}e.exports={assign:s,create:i,trim:r,bind:function(e,t){return function(){return t.apply(e,Array.prototype.slice.call(arguments,0))}},slice:o,each:c,map:function(e,t){var n=h(e)?[]:{};return l(e,(function(e,s){return n[s]=t(e,s),!1})),n},pluck:l,isList:h,isFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},isObject:function(e){return e&&"[object Object]"==={}.toString.call(e)},Global:a}},8855:(e,t,n)=>{var s=n(9078).Global;function i(){return s.sessionStorage}function r(e){return i().getItem(e)}e.exports={name:"sessionStorage",read:r,write:function(e,t){return i().setItem(e,t)},each:function(e){for(var t=i().length-1;t>=0;t--){var n=i().key(t);e(r(n),n)}},remove:function(e){return i().removeItem(e)},clearAll:function(){return i().clear()}}}}]);