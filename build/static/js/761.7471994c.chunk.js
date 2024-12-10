"use strict";(self.webpackChunkreact_basic=self.webpackChunkreact_basic||[]).push([[761],{98986:(e,t,n)=>{n.d(t,{b:()=>o});const o=e=>e?"function"===typeof e?e():e:null},2761:(e,t,n)=>{n.d(t,{A:()=>N});var o=n(65043),r=n(98139),a=n.n(r),i=n(89635),l=n(13758),s=n(44320),c=n(35296),d=n(78887),p=n(89122),u=n(99598);const g=o.createContext({});var m=n(43944),v=n(94414),f=n(78855),b=n(78446);const y=e=>{const{antCls:t,componentCls:n,iconCls:o,avatarBg:r,avatarColor:a,containerSize:i,containerSizeLG:l,containerSizeSM:s,textFontSize:c,textFontSizeLG:d,textFontSizeSM:p,borderRadius:u,borderRadiusLG:g,borderRadiusSM:f,lineWidth:b,lineType:y}=e,h=(e,t,r)=>({width:e,height:e,borderRadius:"50%",[`&${n}-square`]:{borderRadius:r},[`&${n}-icon`]:{fontSize:t,[`> ${o}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.dF)(e)),{position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",overflow:"hidden",color:a,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:r,border:`${(0,m.zA)(b)} ${y} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),h(i,c,u)),{"&-lg":Object.assign({},h(l,d,g)),"&-sm":Object.assign({},h(s,p,f)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},h=e=>{const{componentCls:t,groupBorderColor:n,groupOverlapping:o,groupSpace:r}=e;return{[`${t}-group`]:{display:"inline-flex",[t]:{borderColor:n},"> *:not(:first-child)":{marginInlineStart:o}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:r}}}},x=(0,f.OF)("Avatar",(e=>{const{colorTextLightSolid:t,colorTextPlaceholder:n}=e,o=(0,b.oX)(e,{avatarBg:n,avatarColor:t});return[y(o),h(o)]}),(e=>{const{controlHeight:t,controlHeightLG:n,controlHeightSM:o,fontSize:r,fontSizeLG:a,fontSizeXL:i,fontSizeHeading3:l,marginXS:s,marginXXS:c,colorBorderBg:d}=e;return{containerSize:t,containerSizeLG:n,containerSizeSM:o,textFontSize:Math.round((a+i)/2),textFontSizeLG:l,textFontSizeSM:r,groupSpace:c,groupOverlapping:-s,groupBorderColor:d}}));var O=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const C=(e,t)=>{const[n,r]=o.useState(1),[m,v]=o.useState(!1),[f,b]=o.useState(!0),y=o.useRef(null),h=o.useRef(null),C=(0,l.K4)(t,y),{getPrefixCls:S,avatar:$}=o.useContext(c.QO),j=o.useContext(g),z=()=>{if(!h.current||!y.current)return;const t=h.current.offsetWidth,n=y.current.offsetWidth;if(0!==t&&0!==n){const{gap:o=4}=e;2*o<n&&r(n-2*o<t?(n-2*o)/t:1)}};o.useEffect((()=>{v(!0)}),[]),o.useEffect((()=>{b(!0),r(1)}),[e.src]),o.useEffect(z,[e.gap]);const E=()=>{const{onError:t}=e;!1!==(null===t||void 0===t?void 0:t())&&b(!1)},{prefixCls:w,shape:P,size:N,src:k,srcSet:A,icon:B,className:W,rootClassName:M,alt:R,draggable:L,children:F,crossOrigin:I}=e,T=O(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),G=(0,p.A)((e=>{var t,n;return null!==(n=null!==(t=null!==N&&void 0!==N?N:null===j||void 0===j?void 0:j.size)&&void 0!==t?t:e)&&void 0!==n?n:"default"})),D=Object.keys("object"===typeof G&&G||{}).some((e=>["xs","sm","md","lg","xl","xxl"].includes(e))),H=(0,u.A)(D),X=o.useMemo((()=>{if("object"!==typeof G)return{};const e=s.ye.find((e=>H[e])),t=G[e];return t?{width:t,height:t,fontSize:t&&(B||F)?t/2:18}:{}}),[H,G]);const _=S("avatar",w),V=(0,d.A)(_),[K,Q,J]=x(_,V),q=a()({[`${_}-lg`]:"large"===G,[`${_}-sm`]:"small"===G}),U=o.isValidElement(k),Y=P||(null===j||void 0===j?void 0:j.shape)||"circle",Z=a()(_,q,null===$||void 0===$?void 0:$.className,`${_}-${Y}`,{[`${_}-image`]:U||k&&f,[`${_}-icon`]:!!B},J,V,W,M,Q),ee="number"===typeof G?{width:G,height:G,fontSize:B?G/2:18}:{};let te;if("string"===typeof k&&f)te=o.createElement("img",{src:k,draggable:L,srcSet:A,onError:E,alt:R,crossOrigin:I});else if(U)te=k;else if(B)te=B;else if(m||1!==n){const e=`scale(${n})`,t={msTransform:e,WebkitTransform:e,transform:e};te=o.createElement(i.A,{onResize:z},o.createElement("span",{className:`${_}-string`,ref:h,style:Object.assign({},t)},F))}else te=o.createElement("span",{className:`${_}-string`,style:{opacity:0},ref:h},F);return delete T.onError,delete T.gap,K(o.createElement("span",Object.assign({},T,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ee),X),null===$||void 0===$?void 0:$.style),T.style),className:Z,ref:C}),te))};const S=o.forwardRef(C);var $=n(62149),j=n(12701),z=n(36282);const E=e=>{const{size:t,shape:n}=o.useContext(g),r=o.useMemo((()=>({size:e.size||t,shape:e.shape||n})),[e.size,e.shape,t,n]);return o.createElement(g.Provider,{value:r},e.children)},w=e=>{var t,n,r;const{getPrefixCls:i,direction:l}=o.useContext(c.QO),{prefixCls:s,className:p,rootClassName:u,style:g,maxCount:m,maxStyle:v,size:f,shape:b,maxPopoverPlacement:y,maxPopoverTrigger:h,children:O,max:C}=e;const w=i("avatar",s),P=`${w}-group`,N=(0,d.A)(w),[k,A,B]=x(w,N),W=a()(P,{[`${P}-rtl`]:"rtl"===l},B,N,p,u,A),M=(0,$.A)(O).map(((e,t)=>(0,j.Ob)(e,{key:`avatar-key-${t}`}))),R=(null===C||void 0===C?void 0:C.count)||m,L=M.length;if(R&&R<L){const e=M.slice(0,R),i=M.slice(R,L),l=(null===C||void 0===C?void 0:C.style)||v,s=(null===(t=null===C||void 0===C?void 0:C.popover)||void 0===t?void 0:t.trigger)||h||"hover",c=(null===(n=null===C||void 0===C?void 0:C.popover)||void 0===n?void 0:n.placement)||y||"top",d=Object.assign(Object.assign({content:i},null===C||void 0===C?void 0:C.popover),{overlayClassName:a()(`${P}-popover`,null===(r=null===C||void 0===C?void 0:C.popover)||void 0===r?void 0:r.overlayClassName),placement:c,trigger:s});return e.push(o.createElement(z.A,Object.assign({key:"avatar-popover-key",destroyTooltipOnHide:!0},d),o.createElement(S,{style:l},"+"+(L-R)))),k(o.createElement(E,{shape:b,size:f},o.createElement("div",{className:W,style:g},e)))}return k(o.createElement(E,{shape:b,size:f},o.createElement("div",{className:W,style:g},M)))},P=S;P.Group=w;const N=P},34382:(e,t,n)=>{n.d(t,{Ay:()=>g,hJ:()=>p});var o=n(65043),r=n(98139),a=n.n(r),i=n(17659),l=n(98986),s=n(35296),c=n(24892),d=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const p=e=>{let{title:t,content:n,prefixCls:r}=e;return t||n?o.createElement(o.Fragment,null,t&&o.createElement("div",{className:`${r}-title`},t),n&&o.createElement("div",{className:`${r}-inner-content`},n)):null},u=e=>{const{hashId:t,prefixCls:n,className:r,style:s,placement:c="top",title:d,content:u,children:g}=e,m=(0,l.b)(d),v=(0,l.b)(u),f=a()(t,n,`${n}-pure`,`${n}-placement-${c}`,r);return o.createElement("div",{className:f,style:s},o.createElement("div",{className:`${n}-arrow`}),o.createElement(i.z,Object.assign({},e,{className:t,prefixCls:n}),g||o.createElement(p,{prefixCls:n,title:m,content:v})))},g=e=>{const{prefixCls:t,className:n}=e,r=d(e,["prefixCls","className"]),{getPrefixCls:i}=o.useContext(s.QO),l=i("popover",t),[p,g,m]=(0,c.A)(l);return p(o.createElement(u,Object.assign({},r,{prefixCls:l,hashId:g,className:a()(n,m)})))}},36282:(e,t,n)=>{n.d(t,{A:()=>b});var o=n(65043),r=n(98139),a=n.n(r),i=n(28678),l=n(25001),s=n(98986),c=n(83290),d=n(12701),p=n(35296),u=n(96651),g=n(34382),m=n(24892),v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const f=o.forwardRef(((e,t)=>{var n,r;const{prefixCls:f,title:b,content:y,overlayClassName:h,placement:x="top",trigger:O="hover",children:C,mouseEnterDelay:S=.1,mouseLeaveDelay:$=.1,onOpenChange:j,overlayStyle:z={}}=e,E=v(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:w}=o.useContext(p.QO),P=w("popover",f),[N,k,A]=(0,m.A)(P),B=w(),W=a()(h,k,A),[M,R]=(0,i.A)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(r=e.defaultOpen)&&void 0!==r?r:e.defaultVisible}),L=(e,t)=>{R(e,!0),null===j||void 0===j||j(e,t)},F=(0,s.b)(b),I=(0,s.b)(y);return N(o.createElement(u.A,Object.assign({placement:x,trigger:O,mouseEnterDelay:S,mouseLeaveDelay:$,overlayStyle:z},E,{prefixCls:P,overlayClassName:W,ref:t,open:M,onOpenChange:e=>{L(e)},overlay:F||I?o.createElement(g.hJ,{prefixCls:P,title:F,content:I}):null,transitionName:(0,c.b)(B,"zoom-big",E.transitionName),"data-popover-inject":!0}),(0,d.Ob)(C,{onKeyDown:e=>{var t,n;o.isValidElement(C)&&(null===(n=null===C||void 0===C?void 0:(t=C.props).onKeyDown)||void 0===n||n.call(t,e)),(e=>{e.keyCode===l.A.ESC&&L(!1,e)})(e)}})))}));f._InternalPanelDoNotUseOrYouWillBeFired=g.Ay;const b=f},24892:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(94414),r=n(85814),a=n(16208),i=n(82094),l=n(62979),s=n(78855),c=n(78446);const d=e=>{const{componentCls:t,popoverColor:n,titleMinWidth:r,fontWeightStrong:i,innerPadding:l,boxShadowSecondary:s,colorTextHeading:c,borderRadiusLG:d,zIndexPopup:p,titleMarginBottom:u,colorBgElevated:g,popoverBg:m,titleBorderBottom:v,innerContentPadding:f,titlePadding:b}=e;return[{[t]:Object.assign(Object.assign({},(0,o.dF)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"--antd-arrow-background-color":g,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:m,backgroundClip:"padding-box",borderRadius:d,boxShadow:s,padding:l},[`${t}-title`]:{minWidth:r,marginBottom:u,color:c,fontWeight:i,borderBottom:v,padding:b},[`${t}-inner-content`]:{color:n,padding:f}})},(0,a.Ay)(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},p=e=>{const{componentCls:t}=e;return{[t]:l.s.map((n=>{const o=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}}))}},u=(0,s.OF)("Popover",(e=>{const{colorBgElevated:t,colorText:n}=e,o=(0,c.oX)(e,{popoverBg:t,popoverColor:n});return[d(o),p(o),(0,r.aB)(o,"zoom-big")]}),(e=>{const{lineWidth:t,controlHeight:n,fontHeight:o,padding:r,wireframe:l,zIndexPopupBase:s,borderRadiusLG:c,marginXS:d,lineType:p,colorSplit:u,paddingSM:g}=e,m=n-o,v=m/2,f=m/2-t,b=r;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},(0,i.n)(e)),(0,a.Ke)({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:l?0:12,titleMarginBottom:l?0:d,titlePadding:l?`${v}px ${b}px ${f}px`:0,titleBorderBottom:l?`${t}px ${p} ${u}`:"none",innerContentPadding:l?`${g}px ${b}px`:0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
//# sourceMappingURL=761.7471994c.chunk.js.map