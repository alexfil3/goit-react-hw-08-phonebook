"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{539:function(e,n,a){a.r(n),a.d(n,{default:function(){return d}});var t=a(9434),i=a(5822),r=a(4238),s="LoginForm_form__gPEx5",c="LoginForm_label__F7sLE",l="LoginForm_input__aQRtt",o=a(3329),u=function(){var e=(0,t.I0)();return(0,o.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault();var a=n.currentTarget;e((0,i.Ib)({email:a.elements.email.value,password:a.elements.password.value}))},autoComplete:"off",children:[(0,o.jsxs)("label",{className:c,children:["Email",(0,o.jsx)("input",{className:l,type:"email",name:"email"})]}),(0,o.jsxs)("label",{className:c,children:["Password",(0,o.jsx)("input",{className:l,type:"password",name:"password"})]}),(0,o.jsx)(r.z,{type:"submit",colorScheme:"telegram",variant:"ghost",size:"md",children:"Log In"})]})},m="LoginPage_wrapper__ewWJj";function d(){return(0,o.jsx)("div",{className:m,children:(0,o.jsx)(u,{})})}},4238:function(e,n,a){a.d(n,{z:function(){return I}});var t=a(4925),i=a(1413),r=a(9439),s=a(2791);var c=(0,a(9886).k)({strict:!1,name:"ButtonGroupContext"}),l=(0,r.Z)(c,2),o=(l[0],l[1]),u=a(5113),m=a(6992),d=a(3329),p=["children","className"];function f(e){var n=e.children,a=e.className,r=(0,t.Z)(e,p),c=(0,s.isValidElement)(n)?(0,s.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,m.cx)("chakra-button__icon",a);return(0,d.jsx)(u.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:l,children:c}))}f.displayName="ButtonIcon";var h=a(4942),g=a(2577),v=["label","placement","spacing","children","className","__css"];function _(e){var n=e.label,a=e.placement,r=e.spacing,c=void 0===r?"0.5rem":r,l=e.children,o=void 0===l?(0,d.jsx)(g.$,{color:"currentColor",width:"1em",height:"1em"}):l,p=e.className,f=e.__css,_=(0,t.Z)(e,v),x=(0,m.cx)("chakra-button__spinner",p),b="start"===a?"marginEnd":"marginStart",Z=(0,s.useMemo)((function(){var e;return(0,i.Z)((e={display:"flex",alignItems:"center",position:n?"relative":"absolute"},(0,h.Z)(e,b,n?c:0),(0,h.Z)(e,"fontSize","1em"),(0,h.Z)(e,"lineHeight","normal"),e),f)}),[f,n,b,c]);return(0,d.jsx)(u.m.div,(0,i.Z)((0,i.Z)({className:x},_),{},{__css:Z,children:o}))}function x(e,n){if(null!=e)if("function"!==typeof e)try{e.current=n}catch(a){throw new Error("Cannot assign value '".concat(n,"' to ref '").concat(e,"'"))}else e(n)}function b(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return function(e){n.forEach((function(n){x(n,e)}))}}function Z(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return(0,s.useMemo)((function(){return b.apply(void 0,n)}),n)}_.displayName="ButtonSpinner";var j=a(5597),N=a(2481),y=a(2996),w=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],I=(0,j.G)((function(e,n){var a=o(),c=(0,N.mq)("Button",(0,i.Z)((0,i.Z)({},a),e)),l=(0,y.Lr)(e),p=l.isDisabled,f=void 0===p?null==a?void 0:a.isDisabled:p,h=l.isLoading,g=l.isActive,v=l.children,x=l.leftIcon,b=l.rightIcon,j=l.loadingText,I=l.iconSpacing,k=void 0===I?"0.5rem":I,E=l.type,L=l.spinner,B=l.spinnerPlacement,C=void 0===B?"start":B,P=l.className,z=l.as,A=(0,t.Z)(l,w),F=(0,s.useMemo)((function(){var e=(0,i.Z)((0,i.Z)({},null==c?void 0:c._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},c),!!a&&{_focus:e})}),[c,a]),T=function(e){var n=(0,s.useState)(!e),a=(0,r.Z)(n,2),t=a[0],i=a[1];return{ref:(0,s.useCallback)((function(e){e&&i("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(z),D=T.ref,M=T.type,G={rightIcon:b,leftIcon:x,iconSpacing:k,children:v};return(0,d.jsxs)(u.m.button,(0,i.Z)((0,i.Z)({ref:Z(n,D),as:z,type:null!=E?E:M,"data-active":(0,m.PB)(g),"data-loading":(0,m.PB)(h),__css:F,className:(0,m.cx)("chakra-button",P)},A),{},{disabled:f||h,children:[h&&"start"===C&&(0,d.jsx)(_,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:k,children:L}),h?j||(0,d.jsx)(u.m.span,{opacity:0,children:(0,d.jsx)(S,(0,i.Z)({},G))}):(0,d.jsx)(S,(0,i.Z)({},G)),h&&"end"===C&&(0,d.jsx)(_,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:k,children:L})]}))}));function S(e){var n=e.leftIcon,a=e.rightIcon,t=e.children,i=e.iconSpacing;return(0,d.jsxs)(d.Fragment,{children:[n&&(0,d.jsx)(f,{marginEnd:i,children:n}),t,a&&(0,d.jsx)(f,{marginStart:i,children:a})]})}I.displayName="Button"}}]);
//# sourceMappingURL=539.42910062.chunk.js.map