var r=document.querySelectorAll("tr"),e=[],l=[],t=!0,o=!1,n=void 0;try{for(var a,u=r[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var c=a.value,h=c.querySelectorAll("td, th");h.length>1&&(e.push(h[1]),l.push(c.lastElementChild))}}catch(r){o=!0,n=r}finally{try{t||null==u.return||u.return()}finally{if(o)throw n}}e.forEach(function(r,e){var t=r.cloneNode(!0);l[e].before(t)});
//# sourceMappingURL=index.2cd316a5.js.map
