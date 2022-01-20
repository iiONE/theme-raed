"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[707],{8825:(s,t,e)=>{e.d(t,{H:()=>l});class i extends salla.AppHelpers{setHost(s){this.host=s}getElement(s){return this.host.querySelector(s)}getAttribute(s,t){var e;return null===(e=this.getElement(s))||void 0===e?void 0:e.getAttribute(t)}val(s){return this.getAttribute(s,"value")}isUser(){return!!salla.config.is_user}}const l=new i},707:(s,t,e)=>{e.r(t),e.d(t,{salla_modal:()=>o});var i=e(4634),l=e(8825);const o=class{constructor(s){var t;(0,i.r)(this,s),this.ready=(0,i.f)(this,"ready",7),this.close=(0,i.f)(this,"close",7),this.error=!1,this.success=!1,this.isClosable=!0,this.modalWidth="w-96",this.visible=!1,this.subTitleFirst=!1,this.subTitle="",this.icon="",this.imageIcon="",l.H.setHost(this.host),salla.event.on("modal::open",(s=>s.dataset.target==this.host.id&&this.show())),salla.event.on("modal::close",(s=>s.dataset.target==this.host.id&&this.hide())),this.title=this.host.title,this.host.removeAttribute("title"),null===(t=l.H.getElement("[slot=body]"))||void 0===t||t.classList.add("s-modal-body")}handleVisible(s){if(!s)return this.toggleModal(!1),void this.close.emit();this.host.classList.remove("hidden"),setTimeout((()=>this.toggleModal(!0))),this.ready.emit()}async show(){return this.host.setAttribute("visible",""),this.host}async hide(){return this.host.removeAttribute("visible"),this.host}async setTitle(s){return this.title=s,this.host}toggleModal(s){l.H.toggleElement(this.host.querySelector(".s-modal-body"),"s-modal-entering","s-modal-leaving",(()=>s)).toggleElement(this.host.querySelector("[slot=body]"),"s-modal-entering","s-modal-leaving",(()=>s)).toggleElement(this.overlay,"s-modal-entering","s-modal-overlay-leaving",(()=>s)).toggleElement(document.body,"modal-is-open","modal-is-closed",(()=>s)),s||setTimeout((()=>this.host.classList.add("hidden")),350)}closeModal(){this.isClosable&&this.host.removeAttribute("visible")}render(){return this.host.id=this.host.id||"salla-modal",(0,i.h)(i.e,{class:"s-modal-container hidden","aria-modal":"true",role:"dialog"},(0,i.h)("div",{class:"s-modal-wrapper"},(0,i.h)("div",{class:"s-modal-overlay",ref:s=>this.overlay=s,onClick:()=>this.closeModal()}),(0,i.h)("span",{class:"s-modal-spacer"},"​"),(0,i.h)("slot",{name:"body"},(0,i.h)("div",{class:"s-modal-body "+this.modalWidth},(0,i.h)("div",{class:{"s-modal-header":!0,"s-modal-is-center":""!=this.icon||""!=this.imageIcon}},this.isClosable?(0,i.h)("button",{class:"s-modal-close cursor-pointer",onClick:()=>this.closeModal(),type:"button"},(0,i.h)("span",{class:"sicon-cancel"})):"",this.error||this.success||this.icon?(0,i.h)("div",{class:{"s-modal-icon":!0,"s-modal-bg-error":this.error,"s-modal-bg-success":this.success,"s-modal-bg-normal":!this.error&&!this.success}},(0,i.h)("i",{class:{[this.icon]:!0,"s-modal-text-error":this.error,"s-modal-text-success":this.success}})):this.imageIcon?(0,i.h)("img",{class:"s-modal-header-img",src:this.imageIcon}):"",this.title||this.subTitle?(0,i.h)("div",{class:"s-modal-header-content"},(0,i.h)("div",{class:{"s-modal-title":!0,"s-modal-title-below":this.subTitleFirst},innerHTML:this.title}),(0,i.h)("p",{class:{"s-modal-sub-title":!0},innerHTML:this.subTitle})):""),(0,i.h)("slot",null),(0,i.h)("slot",{name:"footer"})))))}get host(){return(0,i.g)(this)}static get watchers(){return{visible:["handleVisible"]}}}}}]);