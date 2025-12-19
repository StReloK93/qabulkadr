import{C as B,D as T,E as q,c as b,o as i,G as p,H as g,I as z,J as u,K as D,a as E,z as _,d as V,L as N,k as v,g as j,b as s,T as Y,r as H,w as d,y as K,u as M,s as R,n as I}from"./app-22CsOHYg.js";import{_ as O,s as A}from"./BaseCrudBlock.vue_vue_type_script_setup_true_lang-D8VtAExh.js";import{_ as F,a as G}from"./PrintQabulVaraqa.vue_vue_type_script_setup_true_lang-DdCmErhz.js";import{C as h}from"./CrudConfig-Djh6K98y.js";import{h as J}from"./moment-BLMuvzoS.js";/* empty css            */import"./index-su6AJTKB.js";import"./index-CRb8ESbB.js";import"./index-B34dr1lM.js";import"./index-B6rJMH0a.js";import"./index-1TzBq56K.js";var L=`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,U={root:function(n){var t=n.props;return["p-tag p-component",{"p-tag-info":t.severity==="info","p-tag-success":t.severity==="success","p-tag-warn":t.severity==="warn","p-tag-danger":t.severity==="danger","p-tag-secondary":t.severity==="secondary","p-tag-contrast":t.severity==="contrast","p-tag-rounded":t.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Q=B.extend({name:"tag",style:L,classes:U}),W={name:"BaseTag",extends:T,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Q,provide:function(){return{$pcTag:this,$parentInstance:this}}};function c(e){"@babel/helpers - typeof";return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(e)}function X(e,n,t){return(n=Z(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Z(e){var n=x(e,"string");return c(n)=="symbol"?n:n+""}function x(e,n){if(c(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n);if(c(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var $={name:"Tag",extends:W,inheritAttrs:!1,computed:{dataP:function(){return q(X({rounded:this.rounded},this.severity,this.severity))}}},ee=["data-p"];function ne(e,n,t,o,m,y){return i(),b("span",u({class:e.cx("root"),"data-p":y.dataP},e.ptmi("root")),[e.$slots.icon?(i(),p(D(e.$slots.icon),u({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(i(),b("span",u({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):g("",!0),e.value!=null||e.$slots.default?z(e.$slots,"default",{key:2},function(){return[E("span",u({class:e.cx("label")},e.ptm("label")),_(e.value),17)]}):g("",!0)],16,ee)}$.render=ne;const te={class:"relative",id:"employe-page"},me=V({__name:"EmployePage",setup(e){const n=N({yoriqnomalar:null,kadrBoss:null}),t=v(null),o=v(null),m=v();function y(a){return a==null?"secondary":["secondary","success","info","warn","danger","contrast"][a.id]}async function k({page:a,employe:l}){o.value=l,t.value=a,await I(),window.print()}return j(async()=>{window.onafterprint=function(){t.value=null},n.yoriqnomalar=await new h("yoriqnoma").all();const a=await new h("rahbar").all();n.kadrBoss=a[2]}),(a,l)=>{const P=H("RouterView"),f=A,C=$,w=R;return i(),b("section",te,[(i(),p(Y,{to:"body"},[o.value&&t.value==1?(i(),p(F,{key:0,employe:o.value},null,8,["employe"])):g("",!0),o.value&&t.value==2?(i(),p(G,{key:1,employe:o.value,qabul:n},null,8,["employe","qabul"])):g("",!0)])),s(P,{onUpdateEmploye:l[0]||(l[0]=r=>m.value?.loadData()),onOnPrintPage:k}),s(O,{ref_key:"baseCrudBlock",ref:m,entity:"employes",withSearch:!0,withFilter:!0},{column:d(()=>[s(f,{header:"Kiritilgan vaqt"},{body:d(({data:r})=>[K(_(M(J)(r.created_at).format("DD-MM-YYYY HH:mm")),1)]),_:1}),s(f,null,{body:d(({data:r})=>[s(C,{value:r.status?.name,severity:y(r.status)},null,8,["value","severity"])]),_:1}),s(f,null,{body:d(({data:r})=>[s(w,{icon:"pi pi-eye",text:"",rounded:"",onClick:S=>a.$router.push({name:"employe-id-page",params:{id:r.id}})},null,8,["onClick"]),s(w,{icon:"pi pi-print",text:"",rounded:"",onClick:S=>k({page:2,employe:r})},null,8,["onClick"])]),_:1})]),_:1},512)])}}});export{me as default};
