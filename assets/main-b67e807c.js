import{S as f,N as m,K as p,M as h,E as g,P as v}from"./vendor-221df7bb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const r=document.querySelector(".menu-toggle"),o=document.querySelector("#modal-nav"),s=document.querySelector(".close-modal"),c=document.querySelector(".header-content"),e=document.querySelectorAll(".nav-link a");function t(){o.classList.remove("open"),c.classList.remove("header-content-blue-bg")}r&&o&&s&&c?(r.addEventListener("click",n=>{n.stopPropagation(),o.classList.toggle("open"),c.classList.toggle("header-content-blue-bg",o.classList.contains("open"))}),s.addEventListener("click",t),e.forEach(n=>{n.addEventListener("click",a=>{a.preventDefault(),e.forEach(d=>d.parentElement.classList.remove("active")),n.parentElement.classList.add("active");const l=n.getAttribute("href").substring(1),i=document.getElementById(l);if(i){const d=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:d,behavior:"smooth"})}t()})}),document.addEventListener("click",n=>{o.classList.contains("open")&&!o.contains(n.target)&&n.target!==r&&t()}),window.addEventListener("resize",()=>{window.innerWidth>=1200&&t()}),window.addEventListener("scroll",()=>{e.forEach(n=>n.parentElement.classList.remove("active"))})):console.warn("Not all items are found on this page. Check the HTML structure.")});new f(".swiper",{modules:[m,p,h,g,v],direction:"horizontal",slidesPerView:1,centeredSlides:!0,speed:300,loop:!0,grabCursor:!0,allowTouchMove:!0,edgeSwipeDetection:!0,edgeSwipeThreshold:10,coverflowEffect:{rotate:0,stretch:1,depth:200,modifier:1,slideShadows:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:"24px"},1200:{slidesPerView:5,spaceBetween:"24px"}},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:{enabled:!0},keyboard:{enabled:!0}});document.addEventListener("DOMContentLoaded",function(){const r=document.querySelectorAll("section"),o=document.querySelectorAll(".nav-link a");function s(){let c=document.documentElement.scrollTop||document.body.scrollTop;r.forEach(e=>{const t=e.offsetTop,n=e.clientHeight,a=120;if(c>=t-a&&c<t+n-a){const l=e.getAttribute("id");o.forEach(i=>{i.classList.remove("active"),i.getAttribute("href")===`#${l}`&&i.classList.add("active")})}})}window.addEventListener("scroll",s)});const b=document.querySelectorAll(".bubble");b.forEach(r=>{const o=Math.random()*3;r.style.animationDelay=`${o}s`});function w(r){r.forEach(o=>{o.isIntersecting?o.target.querySelectorAll(".bubble").forEach(s=>{s.classList.add("active")}):o.target.querySelectorAll(".bubble").forEach(s=>{s.classList.remove("active")})})}const L=new IntersectionObserver(w,{threshold:.1}),u=document.querySelector(".how-to-play-container");u&&L.observe(u);
//# sourceMappingURL=main-b67e807c.js.map