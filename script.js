// ─── Dark Mode Toggle ───
function toggleDark(){var c=document.documentElement.getAttribute('data-theme'),n=c==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);localStorage.setItem('theme',n);updateThemeButton()}
function updateThemeButton(){var b=document.getElementById('dark-btn');if(!b)return;var d=document.documentElement.getAttribute('data-theme')==='dark';b.textContent=d?'☀️ 日间模式':'🌙 夜间模式'}
(function(){var s=localStorage.getItem('theme'),p=window.matchMedia('(prefers-color-scheme:dark)').matches,t=s||(p?'dark':'light');document.documentElement.setAttribute('data-theme',t);if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',updateThemeButton)}else{updateThemeButton()}})();

// ─── Font Size Control ───
function changeFont(d){var c=parseFloat(getComputedStyle(document.documentElement).fontSize),n=Math.max(14,Math.min(22,c+d));document.documentElement.style.fontSize=n+'px';localStorage.setItem('fontSize',n)}
(function(){var s=localStorage.getItem('fontSize');if(s){document.documentElement.style.fontSize=s+'px'}})();

// ─── Scroll Progress ───
(function(){var bar=document.getElementById('scroll-bar');if(!bar)return;var ticking=false;window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(function(){var sc=window.scrollY,tot=document.documentElement.scrollHeight-window.innerHeight,pct=tot>0?(sc/tot)*100:0;bar.style.width=pct+'%';ticking=false});ticking=true}})})();

// ─── Menu Toggle ───
(function(){var mb=document.querySelector('.menu-btn'),ov=document.getElementById('nav-overlay');if(!mb||!ov)return;mb.addEventListener('click',function(e){e.stopPropagation();ov.classList.toggle('open')});ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open')});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('open'))ov.classList.remove('open')})})();

// ─── Remember Reading Position ───
(function(){var key='lastRead_'+location.pathname,saved=localStorage.getItem(key);if(saved&&!location.hash){var pos=parseInt(saved);if(pos>0)setTimeout(function(){window.scrollTo(0,pos)},100)}var st;window.addEventListener('scroll',function(){clearTimeout(st);st=setTimeout(function(){localStorage.setItem(key,window.scrollY)},500)})})();

// ─── Smooth Chapter Links ───
(function(){document.querySelectorAll('.ch-list a,.overlay-list a').forEach(function(link){link.addEventListener('click',function(){var ov=document.getElementById('nav-overlay');if(ov)ov.classList.remove('open')})})})();
