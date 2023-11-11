(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[10],{116:function(e,t,n){var o={"./About":[75,0,2],"./About.jsx":[75,0,2],"./Education":[71,9,4],"./Education.jsx":[71,9,4],"./Experience":[72,0,1,5],"./Experience.jsx":[72,0,1,5],"./FallbackSpinner":[25],"./FallbackSpinner.jsx":[25],"./Header":[67,8],"./Header.jsx":[67,8],"./Home":[37],"./Home.jsx":[37],"./NavBar":[33],"./NavBar.jsx":[33],"./Projects":[73,0,3],"./Projects.jsx":[73,0,3],"./Skills":[74,0,7],"./Skills.jsx":[74,0,7],"./Social":[38],"./Social.jsx":[38],"./ThemeToggler":[34],"./ThemeToggler.jsx":[34],"./projects/ProjectCard":[70,0,6],"./projects/ProjectCard.jsx":[70,0,6]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id=116,e.exports=r},117:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(13),l=n.n(c),a=(n(80),n(69),n(81),n(27)),i=n(16),s=n(56),d=n(40),j=n(6),u=n(25),h=n(33),b=n(37),f=n(20),v=n(1);var m,x=function(){const[e,t]=Object(o.useState)(null);return Object(o.useEffect)((()=>{fetch(f.a.routes,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]),Object(v.jsxs)("div",{className:"MainApp",children:[Object(v.jsx)(h.default,{}),Object(v.jsx)("main",{className:"main",children:Object(v.jsx)(j.c,{children:Object(v.jsxs)(o.Suspense,{fallback:Object(v.jsx)(u.default,{}),children:[Object(v.jsx)(j.a,{exact:!0,path:"/",component:b.default}),e&&e.sections.map((e=>{const t=r.a.lazy((()=>n(116)("./"+e.component)));return Object(v.jsx)(j.a,{path:e.path,component:()=>Object(v.jsx)(t,{header:e.headerTitle})},e.headerTitle)}))]})})})]})},O=n(28);var g=Object(i.c)(m||(m=Object(O.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(e=>{let{theme:t}=e;return t.background}),(e=>{let{theme:t}=e;return t.color}));const p={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},k={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var C=function(){window.matchMedia=null;const e=Object(s.a)(!0);return Object(v.jsx)(d.a.Provider,{value:{darkMode:e},children:Object(v.jsxs)(i.b,{theme:e.value?k:p,children:[Object(v.jsx)(g,{}),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(a.a,{children:Object(v.jsx)(x,{})})})]})})};var y=e=>{e&&e instanceof Function&&n.e(13).then(n.bind(null,159)).then((t=>{let{getCLS:n,getFID:o,getFCP:r,getLCP:c,getTTFB:l}=t;n(e),o(e),r(e),c(e),l(e)}))};l.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),y()},20:function(e,t,n){"use strict";t.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},25:function(e,t,n){"use strict";n.r(t);n(0);var o=n(118),r=n(1);const c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};t.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},33:function(e,t,n){"use strict";n.r(t);var o,r,c=n(28),l=n(42),a=n(119),i=n(66),s=n(0),d=n(6),j=n(27),u=n(16),h=n(20),b=n(34),f=n(1);const v={logoStyle:{width:50,height:40}},m=u.d.a(o||(o=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor)),x=Object(u.d)(j.b)(r||(r=Object(c.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(e=>e.theme.navbarTheme.linkColor),(e=>e.theme.navbarTheme.linkHoverColor),(e=>e.theme.accentColor),(e=>e.theme.navbarTheme.linkActiveColor)),O=Object(d.f)((()=>{var e,t,n,o,r,c;const d=Object(s.useContext)(u.a),[j,O]=Object(s.useState)(null),[g,p]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{fetch(h.a.navbar,{method:"GET"}).then((e=>e.json())).then((e=>O(e))).catch((e=>e))}),[]),Object(f.jsx)(l.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:g,children:Object(f.jsxs)(a.a,{children:[(null===j||void 0===j?void 0:j.logo)&&Object(f.jsx)(l.a.Brand,{href:"/#",children:Object(f.jsx)("img",{src:null===j||void 0===j||null===(e=j.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==j&&void 0!==j&&null!==(t=j.logo)&&void 0!==t&&t.height&&null!==j&&void 0!==j&&null!==(n=j.logo)&&void 0!==n&&n.width?{height:null===j||void 0===j||null===(o=j.logo)||void 0===o?void 0:o.height,width:null===j||void 0===j||null===(r=j.logo)||void 0===r?void 0:r.width}:v.logoStyle})}),Object(f.jsx)(l.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:()=>p(!g)}),Object(f.jsxs)(l.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsx)(i.a,{className:"me-auto"}),Object(f.jsx)(i.a,{children:j&&(null===(c=j.sections)||void 0===c?void 0:c.map(((e,t)=>"link"===(null===e||void 0===e?void 0:e.type)?Object(f.jsx)(m,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:()=>p(!1),className:"navbar__link",theme:d,children:e.title},e.title):Object(f.jsx)(x,{onClick:()=>p(!1),exact:0===t,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title))))}),Object(f.jsx)(b.default,{onClick:()=>p(!1)})]})]})})}));t.default=O},34:function(e,t,n){"use strict";n.r(t);n(0);var o=n(58),r=n.n(o),c=n(40),l=n(1);function a(e){const{onClick:t}=e;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(c.a.Consumer,{children:e=>Object(l.jsx)("div",{style:{marginBottom:8},children:Object(l.jsx)(r.a,{onChange:()=>(e.darkMode.toggle(),void t()),checked:e.darkMode.value,size:50})})})})}a.defaultProps={onClick:()=>{}},t.default=a},37:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(63),c=n.n(r),l=n(51),a=n.n(l),i=n(20),s=n(38),d=n(25),j=n(1);const u={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}};t.default=function(){const[e,t]=Object(o.useState)(null);return Object(o.useEffect)((()=>{fetch(i.a.home,{method:"GET"}).then((e=>e.json())).then((e=>t(e))).catch((e=>e))}),[]),e?Object(j.jsx)(a.a,{children:Object(j.jsxs)("div",{style:u.mainContainer,children:[Object(j.jsx)("h1",{style:u.nameStyle,children:null===e||void 0===e?void 0:e.name}),Object(j.jsxs)("div",{style:{flexDirection:"row"},children:[Object(j.jsx)("h2",{style:u.inlineChild,children:"I'm\xa0"}),Object(j.jsx)(c.a,{options:{loop:!0,autoStart:!0,strings:null===e||void 0===e?void 0:e.roles}})]}),Object(j.jsx)(s.default,{})]})}):Object(j.jsx)(d.default,{})}},38:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(64),c=n(16),l=n(20),a=n(1);const i={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};t.default=function(){const e=Object(o.useContext)(c.a),[t,n]=Object(o.useState)(null);return Object(o.useEffect)((()=>{fetch(l.a.social,{method:"GET"}).then((e=>e.json())).then((e=>n(e))).catch((e=>e))}),[]),Object(a.jsx)("div",{className:"social",children:t?t.social.map((t=>Object(a.jsx)(r.SocialIcon,{style:i.iconStyle,url:t.href,network:t.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},t.network))):null})}},40:function(e,t,n){"use strict";var o=n(0);const r=n.n(o).a.createContext();t.a=r},69:function(e,t,n){},80:function(e,t,n){}},[[117,11,12]]]);
//# sourceMappingURL=main.ba53d09a.chunk.js.map