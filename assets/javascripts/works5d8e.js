(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{291:function(t,e,s){s(25),s(16),s(292),s(20),t.exports=s(293)},292:function(t,e,s){"use strict";s.r(e);var o=s(0),a=s(2),i=s.n(a);s(64);o.a.fn.ajaxModal=i()(class{static get Defaults(){return{templateSelector:'script[type="text/template"]',endpoint:null,endpointMethod:"GET",endpointFormat:"json"}}constructor(t,e){this.options=o.a.extend({},this.constructor.Defaults,e);this.$container=t;const s=location.pathname.split("/");this.id=s[s.length-1],this.category=5==s.length&&s[2],this.noCategoryProject=4==s.length,this.ajaxLoad(this)}ajaxLoad(){var t=this.options.endpoint+this.id;this.category&&(t=this.options.endpoint+"?category="+this.category+"&slug="+this.id),this.noCategoryProject&&(t=this.options.endpoint+"?slug="+this.id),this.xhr=o.a.ajax({url:t,method:this.options.endpointMethod,dataType:this.options.endpointFormat}).done(this.handleLoadResponse.bind(this))}handleLoadResponse(t){this.$templates=this.$container.find(this.options.templateSelector),this.$templates.template({removeSiblings:!0}),this.$templates.template("replace",t.data),this.$container.trigger("loaded.ajaxlist").trigger("appear").trigger("resize"),localStorage.getItem("historyUrl")&&this.$container.find(".modal__close").attr("href",localStorage.getItem("historyUrl"))}})},293:function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return r}));var o=s(0),a=s(2),i=s.n(a),n=s(16);class r extends n.default{static get Defaults(){return o.a.extend({},n.default.Defaults,{slectorToggler:".js-modal-class-toggle",classToggler:"is-active"})}constructor(){super(...arguments),this.$elementToggler=Object(o.a)(this.options.slectorToggler),this.classToggler=this.options.classToggler}hide(){super.hide(),this.$elementToggler.removeClass("".concat(this.classToggler))}show(){super.show(),this.$elementToggler.addClass("".concat(this.classToggler))}}o.a.fn.modalClassToggler=i()(r)}},[[291,0]]]);