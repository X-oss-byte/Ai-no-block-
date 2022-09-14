(()=>{var e,t={1781:(e,t,r)=>{"use strict";const o=window.wp.blocks,l=window.wp.i18n,a=window.wp.element;var n=r(4184),i=r.n(n);const s=JSON.parse('{"u2":"ainoblocks/button","Y4":{"url":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"title":{"type":"string","source":"attribute","selector":"a","attribute":"title"},"text":{"type":"string","source":"html","selector":"a"},"linkTarget":{"type":"string","source":"attribute","selector":"a","attribute":"target"},"rel":{"type":"string","source":"attribute","selector":"a","attribute":"rel"},"placeholder":{"type":"string"},"size":{"type":"string","default":"size__m"},"borderRadius":{"type":"number","default":0},"borderWidth":{"type":"number"},"uppercase":{"type":"boolean","default":false},"gradient":{"type":"string"},"label":{"type":"string"},"backgroundColor":{"type":"string"},"textColor":{"type":"string"}}}'),c=window.wp.blockEditor,u=[{attributes:{...s.Y4,linkBackgroundColor:{type:"string"},linkTextColor:{type:"string"},backgroundColor:{type:"string"},textColor:{type:"string"},url:{type:"string",source:"attribute",selector:"a",attribute:"href"},title:{type:"string",source:"attribute",selector:"a",attribute:"title"},text:{type:"string",source:"html",selector:"a"},linkTarget:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},placeholder:{type:"string"},size:{type:"string",default:"size__m"},borderRadius:{type:"number",default:0},borderWidth:{type:"number"},uppercase:{type:"boolean",default:!1},gradient:{type:"string"},label:{type:"string"}},save(e){let{attributes:t}=e;const{linkBackgroundColor:r,linkTextColor:o,backgroundColor:l,textColor:n,url:s,label:u,linkTarget:b,rel:p,size:d,borderRadius:g,borderWidth:k,uppercase:v}=t,_=i()("wp-block-ainoblocks-button__link",d,g,{"has-custom-background":l,"has-custom-text-color":n,"has-link-bg":r,"is-uppercase":v,"no-border-radius":0===g,"no-border":0===k}),m={backgroundColor:l,color:n,borderRadius:g?g+"px":void 0,borderWidth:k?k+"px":void 0},h={backgroundColor:r,borderRadius:g?g+"px":void 0},x=i()(i(),{}),y=c.useBlockProps.save({className:x,style:h});return(0,a.createElement)("div",y,(0,a.createElement)(c.RichText.Content,{tagName:"a",className:_,href:s,style:m,value:u,target:b,rel:p}))}}],{SVG:b}=wp.components,p=(0,a.createElement)(b,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,a.createElement)("path",{fill:"#8134fe",d:"M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12z"})),d=window.wp.components,{Path:g,SVG:k}=wp.components,v={};v.link=(0,a.createElement)(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(g,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),v.linkOff=(0,a.createElement)(k,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(g,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"}));const _=v,m="noreferrer noopener";(0,o.registerBlockType)(s.u2,{icon:p,example:{name:"ainoblocks/button",attributes:{className:"is-style-primary",label:(0,l.__)("Call to Action","ainoblocks"),borderRadius:200,size:"size__m"}},edit:function(e){let{attributes:t,setAttributes:r,className:o,isSelected:n,opensInNewTab:s}=e;const{label:u,url:b,linkTarget:p,rel:g,size:k,borderRadius:v,borderWidth:h,uppercase:x}=t,y=[{value:"size__xxxs",label:(0,l.__)("3XS","ainoblocks")},{value:"size__xxs",label:(0,l.__)("XXS","ainoblocks")},{value:"size__xs",label:(0,l.__)("XS","ainoblocks")},{value:"size__s",label:(0,l.__)("S","ainoblocks")},{value:"size__m",label:(0,l.__)("M","ainoblocks")},{value:"size__l",label:(0,l.__)("L","ainoblocks")},{value:"size__xl",label:(0,l.__)("XL","ainoblocks")},{value:"size__xxl",label:(0,l.__)("XXL","ainoblocks")},{value:"size__xxxl",label:(0,l.__)("3XL","ainoblocks")},{value:"size__xxxxl",label:(0,l.__)("4XL","ainoblocks")}],f={borderRadius:v?v+"px":void 0},w={borderRadius:v?v+"px":void 0,borderWidth:h?h+"px":void 0},C=(0,a.useCallback)((e=>{r({rel:e})}),[r]),E=(0,a.useCallback)((e=>{const t=e?"_blank":void 0;let o=g;t&&!g?o=m:t||g!==m||(o=void 0),r({linkTarget:t,rel:o})}),[g,r]),[T,z]=(0,a.useState)(!1),R=!!b,N=R&&n,B=(T||N)&&(0,a.createElement)(d.Popover,{position:"bottom center",onClose:()=>z(!1)},(0,a.createElement)(c.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:b,opensInNewTab:s},onChange:e=>{let{url:t="",opensInNewTab:o}=e;r({url:t}),s!==o&&E(o)}})),O=i()(o,{}),S=(0,c.useBlockProps)({className:O,style:w});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c.BlockControls,null,(0,a.createElement)(d.ToolbarGroup,null,!R&&(0,a.createElement)(d.ToolbarButton,{name:"link",icon:(0,a.createElement)(c.BlockIcon,{icon:_.link}),title:(0,l.__)("Link","ainoblocks"),onClick:()=>(z(!0),!1)}),N&&(0,a.createElement)(d.ToolbarButton,{name:"link",icon:(0,a.createElement)(c.BlockIcon,{icon:_.linkOff}),title:(0,l.__)("Unlink","ainoblocks"),onClick:()=>{r({url:void 0,linkTarget:void 0,rel:void 0}),z(!1)},isActive:!0}))),B,(0,a.createElement)(c.InspectorControls,null,(0,a.createElement)(d.PanelBody,{title:(0,l.__)("Button Settings","ainoblocks")},(0,a.createElement)(d.SelectControl,{label:(0,l.__)("Size","ainoblocks"),value:k,options:y,onChange:e=>r({size:e})}),(0,a.createElement)(d.RangeControl,{label:(0,l.__)("Border Radius","ainoblocks"),value:v,onChange:e=>r({borderRadius:e}),min:0,max:200,initialPosition:0,allowReset:!0}),(0,a.createElement)(d.RangeControl,{label:(0,l.__)("Border Width","ainoblocks"),value:h,onChange:e=>r({borderWidth:e}),min:0,max:20,initialPosition:0,allowReset:!0}),(0,a.createElement)(d.ToggleControl,{label:(0,l.__)("Uppercase Text","ainoblocks"),checked:!!x,onChange:()=>r({uppercase:!x}),help:x?(0,l.__)("Uppercase text is used.","ainoblocks"):(0,l.__)("Toggle for uppercase text.","ainoblocks")}))),(0,a.createElement)(c.InspectorAdvancedControls,null,(0,a.createElement)(d.TextControl,{label:(0,l.__)("Link rel"),value:g||"",onChange:C})),(0,a.createElement)("div",S,(0,a.createElement)(c.RichText,{placeholder:(0,l.__)("Add text…","ainoblocks"),value:u,tagName:"div",className:i()("wp-block-ainoblocks-button__link",k,v,{"is-uppercase":x,"no-border-radius":0===v,"no-border":0===h}),style:f,onChange:e=>{r({label:e})},formattingControls:["bold","italic"],rel:"noopener noreferrer",opensInNewTab:"_blank"===p,onToggleOpenInNewTab:E})))},save:function(e){let{attributes:t}=e;const{url:r,label:o,linkTarget:l,rel:n,size:s,borderRadius:u,borderWidth:b,uppercase:p}=t,d=i()("wp-block-ainoblocks-button__link",s,u,{"is-uppercase":p,"no-border-radius":0===u,"no-border":0===b}),g={borderRadius:u?u+"px":void 0},k={borderRadius:u?u+"px":void 0,borderWidth:b?b+"px":void 0},v=i()(i(),{}),_=c.useBlockProps.save({className:v,style:k});return(0,a.createElement)("div",_,(0,a.createElement)(c.RichText.Content,{tagName:"a",className:d,href:r,style:g,value:o,target:l,rel:n}))},deprecated:u})},4184:(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var n=l.apply(null,r);n&&e.push(n)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)o.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()}},r={};function o(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,l,a)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,l,a]=e[u],i=!0,s=0;s<r.length;s++)(!1&a||n>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(i=!1,a<n&&(n=a));if(i){e.splice(u--,1);var c=l();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,l,a]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={910:0,515:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[n,i,s]=r,c=0;if(n.some((t=>0!==e[t]))){for(l in i)o.o(i,l)&&(o.m[l]=i[l]);if(s)var u=s(o)}for(t&&t(r);c<n.length;c++)a=n[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=o.O(void 0,[515],(()=>o(1781)));l=o.O(l)})();