import{B as k,s as w,f as S,c,o as p,a as $,m as g,r as z,d as y,b as o,e as i,g as h,w as m,F as j,h as P,i as _,u as d,j as B,k as D,l as N,n as C,t as L}from"./app-C1nWRGf0.js";/* empty css            */var R=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,V={root:function(t){var e=t.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},E={root:function(t){var e=t.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},T=k.extend({name:"divider",style:R,classes:E,inlineStyles:V}),A={name:"BaseDivider",extends:w,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:T,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function v(n){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(n)}function b(n,t,e){return(t=M(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function M(n){var t=F(n,"string");return v(t)=="symbol"?t:t+""}function F(n,t){if(v(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var a=e.call(n,t);if(v(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}var x={name:"Divider",extends:A,inheritAttrs:!1,computed:{dataP:function(){return S(b(b(b({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},I=["aria-orientation","data-p"],K=["data-p"];function Q(n,t,e,a,l,r){return p(),c("div",g({class:n.cx("root"),style:n.sx("root"),role:"separator","aria-orientation":n.layout,"data-p":r.dataP},n.ptmi("root")),[n.$slots.default?(p(),c("div",g({key:0,class:n.cx("content"),"data-p":r.dataP},n.ptm("content")),[z(n.$slots,"default")],16,K)):$("",!0)],16,I)}x.render=Q;const U={class:"p-3 border-r border-r-surface-200 dark:border-r-surface-800 w-72 bg-white dark:bg-surface-950"},q={class:"flex justify-center flex-col gap-1.5"},H=y({__name:"BaseNavigation",setup(n){const t=B(),e=[{name:"organization",label:"Bo'limlar ro'yhati",icon:"pi pi-building"},{name:"cause",label:"Asoslar ro'yhati",icon:"pi pi-list"},{name:"work_environment",label:"Mehnat sharoitlari",icon:"pi pi-bullseye"},{name:"education_level",label:"Ta'lim darajasi",icon:"pi pi-graduation-cap"},{name:"disability_type",label:"Nogironlik turlari",icon:"pi pi-clone"},{name:"quot_type",label:"Kvota turlari",icon:"pi pi-bookmark"}];return(a,l)=>{const r=_,s=h("RouterLink"),f=x;return p(),c("nav",U,[l[2]||(l[2]=o("div",{class:"flex items-center gap-3 mb-8 px-2"},[o("img",{src:"/logo.svg",class:"w-12 dark:invert"}),o("span",{class:"text-lg font-semibold text-surface-700 dark:text-surface-300 leading-3 font-[Trickster]"}," QabulHR ")],-1)),o("div",q,[l[0]||(l[0]=o("p",{class:"text-xs text-surface-600 dark:text-surface-400 px-3"}," Asosiy bo'lim ",-1)),i(s,{class:"w-full",to:{name:"dashboard-page"}},{default:m(()=>[i(r,{severity:d(t).name=="dashboard-page"?"primary":"contrast",class:"w-full justify-start! border border-surface-300",variant:"text",label:"Dashboard",icon:"pi pi-home",size:"small"},null,8,["severity"])]),_:1}),i(s,{class:"w-full",to:{name:"crud-page",params:{entity:"employes"}}},{default:m(()=>[i(r,{severity:d(t).name=="employes-page"?"primary":"contrast",class:"w-full justify-start! border border-surface-300",variant:"text",label:"Xodimlar",icon:"pi pi-users",size:"small"},null,8,["severity"])]),_:1}),i(f),l[1]||(l[1]=o("p",{class:"text-xs text-surface-600 dark:text-surface-400 px-3"}," Qo'llanmalar ",-1)),(p(),c(j,null,P(e,u=>i(s,{class:"w-full",to:{name:"crud-page",params:{entity:u.name}},key:u.name},{default:m(()=>[i(r,{class:"w-full justify-start! border border-surface-300",variant:"text",severity:d(t).params.entity==u.name?"primary":"contrast",label:u.label,icon:u.icon,size:"small"},null,8,["severity","label","icon"])]),_:2},1032,["to"])),64))])])}}}),O={class:"h-14 flex justify-between items-center bg-white dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800 px-4"},X={class:"text-surface-900 flex items-center dark:text-white uppercase gap-4"},G={class:"flex items-center gap-4"},J=y({__name:"BaseNavbar",setup(n){const t=D(),e=N(!1);function a(){document.documentElement.classList.toggle("dark"),e.value=document.documentElement.classList.contains("dark")}return(l,r)=>{const s=_;return p(),c("nav",O,[o("span",X,[r[2]||(r[2]=o("i",{class:"pi pi-user"},null,-1)),C(" "+L(d(t).user?.login),1)]),o("aside",G,[i(s,{variant:"text",rounded:"",icon:e.value?"pi pi-sun":"pi pi-moon",severity:"contrast",onClick:r[0]||(r[0]=f=>a())},null,8,["icon"]),i(s,{icon:"pi pi-sign-out",severity:"contrast",variant:"text",loading:d(t).logoutLoading,rounded:"","aria-label":"Star",onClick:r[1]||(r[1]=f=>d(t).logout())},null,8,["loading"])])])}}}),W={class:"flex w-full"},Y={class:"flex-1 flex flex-col"},Z={class:"bg-surface-50 dark:bg-surface-900 grow relative"},ee={class:"absolute inset-0 overflow-y-scroll px-16 py-10"},re=y({__name:"SiteLayout",setup(n){return(t,e)=>{const a=h("RouterView");return p(),c("section",W,[i(H),o("main",Y,[i(J),o("div",Z,[o("section",ee,[i(a)])])])])}}});export{re as default};
