import{q as w,j as _}from"./scheduler.55e65758.js";function B(){const e=window.matchMedia("(prefers-reduced-motion: reduce)");return!e||e.matches}function C(e){const o=e-1;return o*o*o+1}function j(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}function v(e){return--e*e*e*e*e+1}function I({fallback:e,...o}){const g=new Map,l=new Map;function m(c,r,d){const{delay:s=0,duration:t=n=>Math.sqrt(n)*30,easing:f=C}=w(w({},o),d),i=c.getBoundingClientRect(),u=r.getBoundingClientRect(),a=i.left-u.left,h=i.top-u.top,q=i.width/u.width,$=i.height/u.height,R=Math.sqrt(a*a+h*h),y=getComputedStyle(r),k=y.transform==="none"?"":y.transform,x=+y.opacity;return{delay:s,duration:_(t)?t(R):t,easing:f,css:(n,M)=>`
				opacity: ${n*x};
				transform-origin: top left;
				transform: ${k} translate(${M*a}px,${M*h}px) scale(${n+(1-n)*q}, ${n+(1-n)*$});
			`}}function p(c,r,d){return(s,t)=>(c.set(t.key,s),()=>{if(r.has(t.key)){const f=r.get(t.key);return r.delete(t.key),m(f,s,t)}return c.delete(t.key),e&&e(s,t,d)})}return[p(l,g,!1),p(g,l,!0)]}export{v as a,I as c,B as p,j as q};