(()=>{var e,t={347:(e,t,o)=>{"use strict";const n=window.wp.blocks,r=window.wp.i18n,l=window.wp.element,{SVG:i}=wp.components,a=(0,l.createElement)(i,{className:"components-ainoblocks-svg","aria-hidden":!0,role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},(0,l.createElement)("path",{fill:"#5b53ff",d:"M15.907 18h8.093c0-6.627-5.373-12-12-12s-12 5.373-12 12h8.093c0-2.158 1.749-3.907 3.907-3.907s3.907 1.749 3.907 3.907z"}));var s=o(4184),c=o.n(s);const v=window.wp.blockEditor,p=window.wp.components,m=window.wp.primitives,h=(0,l.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(m.Path,{d:"M9 9v6h11V9H9zM4 20h1.5V4H4v16z"})),u=(0,l.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(m.Path,{d:"M4 15h11V9H4v6zM18.5 4v16H20V4h-1.5z"})),w=(0,l.createElement)(m.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(m.Path,{d:"M20 9h-7.2V4h-1.6v5H4v6h7.2v5h1.6v-5H20z"})),b=JSON.parse('{"u2":"ainoblocks/timeline"}');(0,n.registerBlockType)(b.u2,{icon:a,edit:function(e){let{attributes:t,setAttributes:o,className:n}=e;const{eventPosition:i,eventOverlap:a,markerPosition:s}=t,m=[{value:"marker-top",label:(0,r.__)("top","ainoblocks")},{value:"marker-center",label:(0,r.__)("center","ainoblocks")},{value:"marker-bottom",label:(0,r.__)("bottom","ainoblocks")}],b=c()(n,i,s,{overlap:a}),k=(0,v.useBlockProps)({className:b});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v.BlockControls,{group:"block"},(0,l.createElement)(p.ToolbarButton,{icon:h,title:(0,r.__)("Show event on right"),isActive:"right"===i,onClick:()=>o({eventPosition:"right"})}),(0,l.createElement)(p.ToolbarButton,{icon:u,title:(0,r.__)("Show event on left"),isActive:"left"===i,onClick:()=>o({eventPosition:"left"})}),(0,l.createElement)(p.ToolbarButton,{icon:w,title:(0,r.__)("Show event center"),isActive:"center"===i,onClick:()=>o({eventPosition:"center"})})),(0,l.createElement)(v.InspectorControls,null,(0,l.createElement)(p.PanelBody,{title:(0,r.__)("Timeline settings","ainoblocks")},(0,l.createElement)(p.ToggleControl,{label:(0,r.__)("Event overlap","ainoblocks"),checked:!!a,onChange:()=>o({eventOverlap:!a}),help:a?(0,r.__)("Event overlaps timeline.","ainoblocks"):(0,r.__)("Toggle for event to overlap timeline.","ainoblocks")}),(0,l.createElement)(p.SelectControl,{label:(0,r.__)("Marker Position","ainoblocks"),value:s,options:m,onChange:e=>o({markerPosition:e})}))),(0,l.createElement)("div",k,(0,l.createElement)(v.InnerBlocks,{template:[["ainoblocks/timeline-event"]]})))},save:function(e){let{attributes:t}=e;const{eventPosition:o,eventOverlap:n,markerPosition:r,markerStyle:i}=t,a=c()(c(),o,r,{overlap:n}),s=v.useBlockProps.save({className:a});return(0,l.createElement)("div",s,(0,l.createElement)(v.InnerBlocks.Content,null))}})},4184:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var i=r.apply(null,o);i&&e.push(i)}}else if("object"===l)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,o,r,l)=>{if(!o){var i=1/0;for(v=0;v<e.length;v++){for(var[o,r,l]=e[v],a=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(v--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var v=e.length;v>0&&e[v-1][2]>l;v--)e[v]=e[v-1];e[v]=[o,r,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={724:0,592:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var r,l,[i,a,s]=o,c=0;if(i.some((t=>0!==e[t]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var v=s(n)}for(t&&t(o);c<i.length;c++)l=i[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(v)},o=globalThis.webpackChunkainoblocks=globalThis.webpackChunkainoblocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=n.O(void 0,[592],(()=>n(347)));r=n.O(r)})();