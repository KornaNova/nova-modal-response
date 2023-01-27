(()=>{"use strict";var e={744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}(()=>{const e=Vue;var t=["innerHTML"],n=["textContent"],r={class:"flex items-center ml-auto"};const l={name:"ModalActionResponse",props:["data"],methods:{handleClose:function(){this.$emit("close")},handleConfirm:function(){this.$emit("confirm")}}};const a=(0,o(744).Z)(l,[["render",function(o,l,a,c,d,i){var s=(0,e.resolveComponent)("ModalHeader"),u=(0,e.resolveComponent)("ModalContent"),m=(0,e.resolveComponent)("CancelButton"),p=(0,e.resolveComponent)("ModalFooter"),C=(0,e.resolveComponent)("Modal");return(0,e.openBlock)(),(0,e.createBlock)(C,{onModalClose:i.handleClose,tabindex:"-1",role:"dialog",size:"2xl"},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",{onSubmit:l[1]||(l[1]=(0,e.withModifiers)((function(){return i.handleConfirm&&i.handleConfirm.apply(i,arguments)}),["prevent"])),"slot-scope":"props",class:"bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 space-y-6"},[(0,e.createVNode)(s,{textContent:(0,e.toDisplayString)(a.data.title)},null,8,["textContent"]),(0,e.createVNode)(u,null,{default:(0,e.withCtx)((function(){return[a.data.html?((0,e.openBlock)(),(0,e.createElementBlock)("code",{key:0,innerHTML:a.data.html},null,8,t)):(0,e.createCommentVNode)("",!0),a.data.body?((0,e.openBlock)(),(0,e.createElementBlock)("code",{key:1,textContent:(0,e.toDisplayString)(a.data.body)},null,8,n)):(0,e.createCommentVNode)("",!0)]})),_:1}),(0,e.createVNode)(p,null,{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("div",r,[(0,e.createVNode)(m,{component:"button",type:"button",dusk:"cancel-action-button",class:"ml-auto mr-3",onClick:l[0]||(l[0]=function(e){return o.$emit("close")})},{default:(0,e.withCtx)((function(){return[(0,e.createTextVNode)(" Cancel ")]})),_:1})])]})),_:1})],32)]})),_:1},8,["onModalClose"])}]]);Nova.booting((function(e){e.component("modal-response",a)}))})()})();