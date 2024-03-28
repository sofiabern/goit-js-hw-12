import{a as m,S as h,i as g}from"./assets/vendor-95dc692e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();async function y(t){const s={key:"39362116-97c7d5619fee8bb7db7b12f12",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get("https://pixabay.com/api/",{params:s})).data}catch(a){console.log(a.message)}}function L(t){return t.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:s,comments:a,downloads:f})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${n}">
      <img class="gallery-image"  src="${r}" alt="${o}">
      <ul class="descr-list">
        <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${e}</span></li>
        <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${s}</span></li>
        <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${a}</span></li>
        <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${f}</span></li>
      </ul>
      </a>
    </li>`).join(" ")}const p=document.querySelector(".search-form"),u=p.elements.search,c=document.querySelector(".gallery"),b=document.querySelector(".loader"),d=new h(".gallery-item a",{captionsData:"alt",captionDelay:250,showCounter:!1});function i(){b.classList.toggle("hidden")}function P(){c.innerHTML&&(c.innerHTML="")}function l(t){g.error({title:"Error",message:`${t}`})}async function v(t){const r=await y(t);if(!r.hits.length){l("Sorry, there are no images matching your search query. Please try again!");return}c.innerHTML=L(r.hits)}p.addEventListener("submit",w);function w(t){if(t.preventDefault(),P(),i(),!u.value.trim()){i(),l("Please enter something!");return}try{v(u.value),d&&d.refresh()}catch(r){l("Sorry, something wrong happened while fetching."),console.log(r)}i()}
//# sourceMappingURL=commonHelpers.js.map
