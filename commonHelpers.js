import{a as S,S as w,i as E}from"./assets/vendor-95dc692e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function H(r,a,s){const P={key:"39362116-97c7d5619fee8bb7db7b12f12",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15};try{return(await S.get("https://pixabay.com/api/",{params:P})).data}catch(g){console.log(g.message)}}function q(r){return r.map(({webformatURL:a,largeImageURL:s,tags:o,likes:e,views:t,comments:n,downloads:m})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${s}">
      <img class="gallery-image"  src="${a}" alt="${o}">
      <ul class="descr-list">
        <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${e}</span></li>
        <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${t}</span></li>
        <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${n}</span></li>
        <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${m}</span></li>
      </ul>
      </a>
    </li>`).join(" ")}const b=document.querySelector(".search-form"),y=b.elements.search,p=document.querySelector(".gallery");let L;const O=document.querySelector(".loader"),i=document.querySelector(".js-loadbtn"),$=new w(".gallery-item a",{captionsData:"alt",captionDelay:250,showCounter:!1});function l(){O.classList.toggle("hidden")}function T(){i.classList.add("hidden")}function A(){u<h?i.classList.remove("hidden"):(i.classList.add("hidden"),c("We're sorry, but you've reached the end of search results."))}function M(){d=1,u=15}function B(){p.innerHTML&&(p.innerHTML="")}function D(){L=document.querySelector(".gallery-item");const r=L.getBoundingClientRect().height;window.scrollBy({top:3*r,behavior:"smooth"})}function c(r){E.error({title:"Error",message:`${r}`})}let d=1,u=15,f,h;async function v(r,a){try{const s=await H(r,a);if(h=s.totalHits,!s.hits.length){c("Sorry, there are no images matching your search query. Please try again!"),T();return}p.insertAdjacentHTML("beforeend",q(s.hits)),$.refresh(),A()}catch(s){c("Sorry, something wrong happened while fetching."),console.error(s)}finally{l()}}b.addEventListener("submit",I);function I(r){if(r.preventDefault(),B(),l(),!y.value.trim()){l(),c("Please enter something!");return}f=y.value,v(f,d)}i.addEventListener("click",_);function _(){if(u>=h){M();return}d+=1,u+=15,l(),v(f,d).then(()=>{D()})}
//# sourceMappingURL=commonHelpers.js.map
