const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body");let a=0,c=!0;t.addEventListener("click",(function(){if(c){const n=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3);a=n,c=!1,e.style.opacity="0.5",t.style.opacity="1"}})),e.addEventListener("click",(function(){clearInterval(a),c=!0,e.style.opacity="1",t.style.opacity="0.5"}));
//# sourceMappingURL=01-color-switcher.9befc83a.js.map