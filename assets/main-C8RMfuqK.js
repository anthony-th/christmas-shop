(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const e=(t,o=[],n="",a={},s=!1)=>{const r=document.createElement(t);o.length>0&&r.classList.add(...o),s?r.innerHTML=n:n&&(r.textContent=n);for(const[i,l]of Object.entries(a))r.setAttribute(i,l);return r},de=navigator.userAgent.toLowerCase().includes("firefox"),_=(t,o)=>{t&&de?o==="ctaBtn"?(document.documentElement.style.scrollBehavior="unset",p.scrollIntoView(),document.onscrollend=()=>{document.documentElement.style.scrollBehavior="smooth"}):o==="heroButton"&&window.scrollTo(0,0):window.scrollTo(0,0)},pe=[{textContent:"gifts",url:"/gifts"},{textContent:"about",url:"/#about"},{textContent:"best",url:"/#best"},{textContent:"contacts",url:"/#contacts"}],H=pe.map(t=>{const o=e("a",["header__nav-link","user-select-none"],t.textContent,{href:t.url});return o.onclick=n=>he(n,t),o}),he=(t,o)=>{t.preventDefault();const n=window.location.pathname==="/",a=window.location.pathname==="/gifts",s=o.textContent,r=o.url,i=l=>{history.pushState(null,null,l),me({url:l})};switch(s){case"gifts":a?history.pushState(null,null,r):(w("/gifts"),_());break;case"contacts":a?(i(r),history.pushState(null,null,"/gifts#contacts")):n&&i(r);break;case"about":case"best":n?i(r):a&&(w("/"),i(r));break}},me=t=>{if(t.url.startsWith("/#")){const o=t.url.slice(2);window[o]&&window[o].scrollIntoView()}else x(t.url)},ue=()=>H.map(t=>{const o=e("li",["header__nav-item"]);return o.append(t),o}),x=t=>{H.forEach(o=>{const n=o.getAttribute("href"),a=n===t||t.startsWith("/gifts")&&n==="/gifts";o.classList.toggle("link-active",a)})},p=e("header",["header"]),f=e("a",["header__logo-container"],"",{href:"./"}),ge=e("svg",["header__logo-icon"],`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_3011_865)">
    <path d="M18.2942 14.8224L17.4727 14.3481L19.674 13.7583L19.3102 12.4006L15.7512 13.3542L14.0725 12.385C14.0957 12.26 14.1084 12.1315 14.1084 12C14.1084 11.8684 14.0957 11.7398 14.0725 11.6149L15.7512 10.6457L19.3102 11.5994L19.674 10.2416L17.4727 9.65177L18.2942 9.17747L21.8194 8.96588L22.3385 6.03095L19.5373 5.01305L17.5914 7.96016L16.7699 8.43446L17.3598 6.23317L16.002 5.86939L15.0484 9.42842L13.3687 10.3982C13.1741 10.2315 12.949 10.0997 12.7028 10.0124V8.0742L15.3082 5.46879L14.3143 4.47488L12.7028 6.08633V5.13772L14.2772 1.98876L12 0L9.72271 1.98886L11.2972 5.13782V6.08642L9.68569 4.47497L8.69178 5.46889L11.2971 8.0743V10.0125C11.051 10.0998 10.8259 10.2316 10.6312 10.3983L8.95154 9.42852L7.99792 5.86949L6.64018 6.23326L7.23003 8.43456L6.40854 7.96025L4.46269 5.01314L1.66148 6.03104L2.18058 8.96597L5.70578 9.17757L6.52727 9.65187L4.32597 10.2417L4.6898 11.5994L8.24882 10.6458L9.92746 11.615C9.90431 11.74 9.89157 11.8685 9.89157 12C9.89157 12.1316 9.90427 12.2602 9.92746 12.3851L8.24882 13.3543L4.6898 12.4006L4.32597 13.7584L6.52727 14.3482L5.70578 14.8225L2.18058 15.034L1.66148 17.969L4.46274 18.9869L6.40859 16.0397L7.23012 15.5654L6.64028 17.7667L7.99801 18.1306L8.95163 14.5715L10.6313 13.6018C10.826 13.7684 11.0511 13.9003 11.2972 13.9875V15.9258L8.69187 18.5311L9.68579 19.525L11.2973 17.9135V18.8621L9.7228 22.0111L12.0001 24L14.2774 22.0111L12.7029 18.8621V17.9135L14.3144 19.525L15.3083 18.5311L12.7029 15.9258V13.9875C12.9491 13.9003 13.1742 13.7684 13.3689 13.6018L15.0485 14.5715L16.0022 18.1306L17.3599 17.7667L16.7701 15.5654L17.5916 16.0397L19.5374 18.9869L22.3387 17.969L21.8196 15.034L18.2942 14.8224Z" fill="#FF4646"/>
  </g>
  <defs>
    <clipPath id="clip0_3011_865">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>`,{},!0),fe=e("h3",["header__logo-title","user-select-none"],"the gifts"),M=e("nav",["header__nav"]),ve=()=>{const t=e("ul",["header__nav-list"]);return ue().forEach(o=>{t.append(o)}),t};f.append(ge,fe);M.append(ve());p.append(f,M);const d=e("main",["main"]),F=e("section",["section","hero"]),T=e("div",["hero__container"]),we=e("h3",["hero__caption"],"Merry Christmas"),ye=e("h1",["hero__title"],"Gift yourself the magic of new possibilities",{},!0),B=e("a",["hero__button","user-select-none"],"Explore Magical Gifts",{href:"/gifts"}),_e=e("h2",["hero__subcaption"],"and Happy New Year");T.append(we,ye,B,_e);F.append(T);const S=e("section",["section","about"],"",{id:"about"}),E=e("div",["about__container"]),P=e("div",["about__text-container"]),V=e("div",["about__text-block"]),Le=e("h3",["about__caption"],"About"),be=e("h2",["about__title"],"Unleash your inner superhero!"),ke=e("p",["about__paragraph"],"This New Year marks the beginning of your journey to inner harmony and new strengths. We offer unique gifts that will help you improve your life."),Ce=e("div",["about__img-container"]);V.append(Le,be,ke);P.append(V);E.append(P,Ce);S.append(E);const He="/christmas-shop/assets/snowman-C8t-9mJ3.avif",xe="/christmas-shop/assets/christmas-trees-CV5NPHb6.avif",Me="/christmas-shop/assets/christmas-tree-ball-D687V1hm.avif",Fe="/christmas-shop/assets/fairytale-house-DC0JnW7k.avif",W=e("section",["section","slider"]),I=e("div",["slider__container"]),A=e("div",["slider__text-container"]),Te=e("h3",["slider__caption"],"Become Happier!"),Be=e("h2",["slider__title"],"in the new 2025"),j=e("div",["sliders"]),D=e("div",["slider__navigation"]),N=(t,o,n,a=!1,s={})=>{const r={...s,...a?{disabled:!0}:{}},i=e("button",t,"",r),l=e("svg",o,n,{},!0);return i.append(l),i},Se=N(["slider__button"],["slider__icon","inactive-arrow"],`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,!0,{"aria-label":"Prev slide"}),Ee=N(["slider__button","cursor-pointer"],["slider__icon"],`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
     <path d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>`,!1,{"aria-label":"Next slide"}),Pe=["Live","create","Love","dream"],Ve=[He,xe,Me,Fe],We=(t,o)=>{t.forEach((n,a)=>{const s=e("figure",["slider-item"]),r=e("img",["slider__image"],"",{src:o[a],alt:"slider image"}),i=e("figcaption",["slider__text"],n);s.append(r,i),j.append(s)})};We(Pe,Ve);A.append(Te,Be);D.append(Se,Ee);I.append(A,j,D);W.append(I);const Ie="/christmas-shop/assets/gift-for-harmony-CoKvsqGj.avif",Ae="/christmas-shop/assets/gift-for-health-BJxe7gao.avif",je="/christmas-shop/assets/gift-for-work-Y-wMV-Rz.avif",De={"for-harmony":Ie,"for-health":Ae,"for-work":je},G=({category:t,name:o})=>{const n=e("li",["card-item","cursor-pointer"]),a=e("article",["card","cursor-pointer"]),s=e("button",["card__button","cursor-pointer"],"",{"aria-label":"Open card"}),r=e("div",["card__image-container"]),i=e("div",["card__text-container"]),l=t.toLowerCase().replace(/\s+/g,"-"),h=e("img",["card__image"],"",{src:De[l],alt:o}),m=`card__subtitle--${t.toLowerCase().replace(/\s+/g,"-")}`,u=e("h4",["card__subtitle",m],t),y=e("h3",["card__title"],o);return i.append(u,y),r.append(h),a.append(r,i,s),n.append(a),n},c=[{name:"Bug Magnet",description:"Able to find bugs in code like they were placed there on purpose.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Console.log Guru",description:"Uses console.log like a crystal ball to find any issue.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Shortcut Cheater",description:"Knows every keyboard shortcut like they were born with them.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+200"}},{name:"Merge Master",description:"Merges branches in Git without conflicts, like a wizard during an exam.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Async Tamer",description:"Handles asynchronous code and promises like well-trained pets.",category:"For Work",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+300"}},{name:"CSS Tamer",description:"Can make Flexbox and Grid work together like they were always best friends.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Time Hacker",description:"Writes code at the last moment but always meets the deadline.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Layout Master",description:"Creates perfect layouts on the first try, like they can read the designer's mind.",category:"For Work",superpowers:{live:"+500",create:"+300",love:"+200",dream:"+200"}},{name:"Documentation Whisperer",description:"Understands cryptic documentation as if they wrote it themselves.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+100"}},{name:"Feedback Master",description:"Accepts client revisions with the Zen calm of Buddha.",category:"For Work",superpowers:{live:"+300",create:"+500",love:"+300",dream:"+400"}},{name:"Code Minimalist",description:"Writes code so concise that one line does more than a whole file.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Pixel-Perfect Magician",description:"Aligns elements to the last pixel, even when the design looks abstract.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+400"}},{name:"Posture Levitation",description:"Can sit for hours, but maintains perfect posture like a ballerina.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+400"}},{name:"Step Master",description:"Gets 10,000 steps a day even while sitting at the computer.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+400"}},{name:"Snack Resister",description:"Ignoring desktop snacks like a strict dietician.",category:"For Health",superpowers:{live:"+400",create:"+100",love:"+200",dream:"+400"}},{name:"Hydration Bot",description:"Drinks the recommended 2 liters of water a day like a health-programmed robot.",category:"For Health",superpowers:{live:"+500",create:"+300",love:"+500",dream:"+500"}},{name:"Sleep Overlord",description:"Sleeps 6 hours but feels like they had 10.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+500"}},{name:"Break Guru",description:"Takes a stretch break every hour without forgetting, no matter how focused.",category:"For Health",superpowers:{live:"+300",create:"+300",love:"+300",dream:"+400"}},{name:"Eye Protector",description:"Can work all day at the monitor without feeling like their eyes are on fire.",category:"For Health",superpowers:{live:"+100",create:"+300",love:"+500",dream:"+400"}},{name:"Stress Dodger",description:"Masters meditation right at the keyboard.",category:"For Health",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+400"}},{name:"Yoga Coder",description:"Easily switches from coding to yoga and back.",category:"For Health",superpowers:{live:"+400",create:"+400",love:"+400",dream:"+400"}},{name:"Healthy Snacker",description:"Always picks fruit, even when chocolate is within arm’s reach.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+200",dream:"+400"}},{name:"Chair Exerciser",description:"Manages to work out without leaving the chair.",category:"For Health",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+400"}},{name:"Caffeine Filter",description:"Drinks coffee at night and still falls asleep with no problem.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+200"}},{name:"Joy Charger",description:"Finds joy in the little things—even in a build that finishes unexpectedly fast.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Error Laugher",description:"Laughs at code errors like they’re jokes instead of getting angry.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Bug Acceptance Guru",description:"Accepts bugs as part of the journey to perfection — it’s just another task.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Spontaneous Coding Philosopher",description:"Philosophically accepts any client suggestion after a long refactor.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Deadline Sage",description:"Remains zen even when the deadline is close and the project manager is stressed.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+300",dream:"+500"}},{name:"Inspiration Maestro",description:"Finds inspiration on an empty screen as if masterpieces are already there.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+400",dream:"+100"}},{name:"Peace Keeper",description:"Maintains inner calm even in moments of intense crisis.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Empathy Guru",description:"Feels the team’s mood and can lift everyone’s spirits.",category:"For Harmony",superpowers:{live:"+500",create:"+200",love:"+500",dream:"+500"}},{name:"Laughter Generator",description:"Can lighten any tense situation with a joke that even bugs laugh at.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+200",dream:"+500"}},{name:"Pause Master",description:"Knows when to just step back from the keyboard and breathe.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+100",dream:"+100"}},{name:"Coder Healer",description:"Can support a colleague in their darkest hour, even if it’s a 500 error.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Music Code Curator",description:"Creates work playlists so good, even deadlines follow the rhythm.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+300",dream:"+200"}}],O=e("section",["section","best"],"",{id:"best"}),R=e("div",["best__container"]),U=e("div",["best__text-container"]),Ne=e("h3",["best__caption"],"Best Gifts"),Ge=e("h3",["best__title"],"especially for you"),Z=e("ul",["cards-container"]),Oe=[c[1],c[15],c[3],c[27]];Z.append(...Oe.map(G));U.append(Ne,Ge);R.append(U,Z);O.append(R);const K=e("section",["section","cta"]),J=e("div",["cta__container"]),Y=e("div",["cta__content"]),Re=e("h2",["cta__title"],"Ready to start your journey to a better version of yourself?"),L=e("a",["cta__btn","user-select-none"],"Explore Magical Gifts",{href:"/gifts"}),z=e("div",["cta__timer-container"]),Ue=e("h3",["cta__caption"],"The New Year is Coming Soon..."),Ze=(t,o,n,a)=>{const s=e("div",["timer"]),r=(ae,ie)=>{const k=e("div",["timer__item"]),ce=e("span",["timer__title"],ae),le=e("span",["timer__description"],ie);return k.append(ce,le),k},i=r(t,"days"),l=r(o,"hours"),h=r(n,"minutes"),m=r(a,"seconds"),u=e("span",["timer__separator"]),y=e("span",["timer__separator"]),se=e("span",["timer__separator"]);return s.append(i,u,l,y,h,se,m),s},Ke=Ze("47","5","34","12");z.append(Ue,Ke);Y.append(Re,L,z);J.append(Y);K.append(J);const Je=()=>{document.title="Christmas-shop",d.prepend(F,S,W,O,K)},q=e("section",["section","gift-section"]),$=e("div",["gift-container"]),Q=e("div",["title-container"]),Ye=e("h1",["title","gift-title"],"Achieve health, harmony, and inner strength"),X=e("ul",["tabs-container"]),ee=e("ul",["cards-container"]),ze=[{name:"All",filter:"all"},{name:"for work",filter:"work"},{name:"for health",filter:"health"},{name:"for harmony",filter:"harmony"}],qe=[c[1],c[13],c[0],c[2],c[12],c[26],c[14],c[25],c[15],c[3],c[24],c[27]];ze.forEach((t,o)=>{const n=e("li",["tabs-item"]),a=e("button",["tabs-btn","user-select-none","cursor-pointer"],t.name);o===0&&a.classList.add("active-tab"),n.append(a),X.append(n)});ee.append(...qe.map(G));Q.append(Ye);$.append(Q);q.append($,X,ee);const $e=()=>{document.title="Christmas-shop | Gifts",d.prepend(q)},Qe="/christmas-shop/assets/santa-claus-DTbVeNVy.svg",Xe="/christmas-shop/assets/christmas-tree-DZ94NEhb.svg",et="/christmas-shop/assets/snake-D6zQIxV2.svg",v=e("footer",["footer"],"",{id:"contacts"}),te=e("div",["footer__container"]),oe=e("ul",["footer__contacts-container"]),re=e("div",["footer__socials-container"]),ne=e("ul",["socials"]),tt=(t,o,n,a,s="",r="")=>{const i=e("li",["contacts-item"]),l=e("a",["contact-card","cursor-pointer","user-select-none"],"",{href:o,target:s,rel:r}),h=e("img",["contact-card__icon"],"",{src:t,alt:""}),m=e("p",["contact-card__link"],n),u=e("p",["contact-card__text"],a);return l.append(h,m,u),i.append(l),i},ot=[{icon:Qe,href:"tel:+375291112233",text:"+375 (29) 111-22-33",description:"Call Us"},{icon:Xe,href:"https://maps.app.goo.gl/emac7cSMKEP3SRuP8",text:"Magic forest",description:"Meet Us",target:"_blank",rel:"noreferrer noopener"},{icon:et,href:"mailto:gifts@magic.com",text:"gifts@magic.com",description:"Write Us"}];ot.forEach(t=>{const{icon:o,href:n,text:a,description:s,target:r,rel:i}=t,l=tt(o,n,a,s,r,i);oe.append(l)});const g={telegram:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,facebook:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="#181C29" stroke-width="1.5"/>
    <path d="M17.5 6.51L17.51 6.49889" stroke="#181C29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,twitter:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z" stroke="#181C29" stroke-width="1.5"/>
    <path d="M20 3L4 21" stroke="#181C29" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`},rt=[{icon:g.telegram,href:"https://web.telegram.org/"},{icon:g.facebook,href:"https://www.facebook.com/"},{icon:g.instagram,href:"https://www.instagram.com/"},{icon:g.twitter,href:"https://twitter.com/"}];rt.forEach(({icon:t,href:o})=>{const n=e("li",["social-link-item"]),a=e("a",["social-link"],t,{href:o,target:"_blank",rel:"noreferrer noopener","aria-label":"Social link"},!0);n.append(a),ne.append(n)});const nt=e("p",["footer__paragraph"],"© Copyright 2025, All Rights Reserved"),st=e("a",["footer__caption"],"Made in Rolling Scopes School",{href:"https://rs.school/",target:"_blank",rel:"noreferrer noopener"});re.append(ne,nt,st);te.append(oe,re);v.append(te);const at=()=>{document.title="404",d.innerHTML="",v.innerHTML="";const t=e("h2",["page-404__title"],"404"),o=e("h3",["page-404__subtitle"],"Page not found"),n=e("a",["page-404__link","cursor-pointer"],"HOME",{href:"/"});d.className="main main-404",document.body.className="page-404",d.append(t,o,n),document.body.append(d)},C={404:at,"/":Je,"/gifts":$e},it=t=>{t&&!document.body.contains(p)?(document.body.prepend(v),document.body.prepend(d),document.body.prepend(p)):!t&&document.body.contains(p)&&(p.remove(),d.remove(),v.remove())},b=()=>{const t=window.location.pathname,o=C[t]||C[404];it(t==="/"||t==="/gifts"),d.innerHTML="",o(),x(t)},w=t=>{history.pushState(null,null,t),b()},ct=()=>{[B,L].forEach(o=>{o&&(o.onclick=n=>{n.preventDefault();const a=window.location.pathname==="/";_(a,o===L?"ctaBtn":"heroButton"),w("/gifts")})}),f&&(f.onclick=o=>{o.preventDefault(),_(),w("/")})};window.onpopstate=b;window.addEventListener("DOMContentLoaded",()=>{b(),ct()});
//# sourceMappingURL=main-C8RMfuqK.js.map
