(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://api.tenrai.org/v1`;async function t(t,n){let r=await fetch(`${e}/anime?q=${t}`,{signal:n});if(!r.ok)throw Error(`Error: ${r.status}`);return await r.json()}function n(e,t){let n;return{setDebounce(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)},cancelDebounce(...t){clearTimeout(n),n=null,e.apply(this,t)}}}function r(e,t=35){return e.length<=t?e:e.substring(0,t)+`...`}function i(e,t,...n){let{mal_id:i,title:a,name:o,images:{webp:{image_url:s}}}=e,c=`
    <a class="${n.join(` `)}" href="/AniVerse/anime/${i}">
      <div class="${n[0]}__image">
        <img src="${s}" alt="${a||o}" />
      </div>

      <div class="${n[0]}__details">
        <h3 class="${n[0]}__title">${r(a||o)}</h3>
      </div>
    </a>
  `;t.insertAdjacentHTML(`beforeend`,c)}function a(e,t,...n){t.innerHTML=`
    <div class="${n.join(` `)}"
      >Terjadi Error: ${e}
    </div>
  `}function o(e,...t){e.innerHTML=`
    <div class="${t.join(` `)}">
      <div class="${t[0]}__spinner"></div>
    </div>
  `}function s(e,t,...n){let r=document.createElement(`div`),i=document.createElement(`p`);r.classList.add(...n),i.textContent=`Anime "${t}" Tidak Ditemukan :(`,r.appendChild(i),r.insertAdjacentHTML(`beforeend`,`
    <br>
    <p>Coba periksa ejaan atau gunakan kata kunci lain</p>
  `),e.appendChild(r)}function c(e,t=1e3){let n;return{setDelay(){clearTimeout(n),e.disabled=!0,n=setTimeout(()=>e.disabled=!1,t)},clearDelay(){clearTimeout(n),e.disabled=!1}}}function l(){return`
    <div class="anime-container">
      <div class="judul-container">
        <h2>Hasil Pencarian</h2>
      </div>
  
      <div class="daftar-anime" id="daftar-anime">
        <div class="muted state"
          >Cari Anime Favoritmu di Kotak pencarian
        </div>
        <!-- Daftar anime akan ditampilkan secara dinamis di sini -->
      </div>
    </div>
  `}async function u(e){let t=await fetch(`https://api.tenrai.org/v1/anime/${e}/full`),n=await t.json();if(!t.ok)throw Error(`Error: ${t.status}`);return n.data}async function d(e){let{title:t,score:n,status:r,episodes:i,type:a,studios:o,synopsis:s,broadcast:c,images:{webp:{image_url:l}}}=await u(e);return`
  <div class="anime-container">
    <div class="judul-container">
      <h2>Detail Anime</h2>
    </div>

    <div class="detail-container">
      <div class="detail-head">
        <div class="detail__image">
          <img src="${l}">
        </div>

        <div class="detail__info">
          <h2>${t}</h2>
          <p><b>Type:</b> ${a}</p>
          <p><b>Studio:</b> ${o.map(e=>e.name).join(`, `)}</p>
          <p><b>Score:</b> ${n}</p>
          <p><b>Episodes Aired:</b> ${i}</p>
          <p><b>Status:</b> ${r}</p>
          <p><b>Update:</b> ${c.day}</p>
        </div>
      </div>

      <div class="detail-synopsis">
        <h3>Sinopsis</h3>
        <p>${s}</p>
      </div>
    </div>
  </div>
  `}function f(){return`
    <div style='
      margin: 4rem auto;
      max-width: max-content;
      text-align: center;'
    > <h1>404</h1>
      <p>Page Not Found :(</p>
    </div>
  `}async function p(e,t){o(t,`loading`,`loading--page`,`page-state`,`anime-container`,`muted`);try{switch(e.type){case`home`:t.innerHTML=l();break;case`animeDetail`:t.innerHTML=await d(e.id);break;default:t.innerHTML=f()}}catch(e){a(e.message,t,`loading`,`loading--page`,`page-state`,`anime-container`,`muted`)}}window.location.pathname;function m(e=document.querySelector(`main`)){return{init(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);if(!n.startsWith(`/`))return;e.preventDefault();let r=this.getRoute(n);this.navigateTo(r)}),window.addEventListener(`popstate`,e=>{let t=this.getRoute();this.navigateTo(t,!1)})},getRoute(e=window.location.pathname){let t=e.split(`/`);return t[2]===`anime`&&t[3]?{type:`animeDetail`,id:+t[3],targetUrl:e}:t[1]===`AniVerse`&&!t[2]?{type:`home`,targetUrl:e}:{type:`notfound`,targetUrl:e}},navigateTo(t,n=!0){let r=t.targetUrl;n&&history.pushState({},``,r),p(t,e)}}}document.querySelector(`#app`).innerHTML=`
<header>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <h1 class="logo">AniVerse</h1>

      <div class="cari-container">
        <label for="input-cari" class="icon" id="menu-cari">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        </label>

        <div class="cari-wrapper">
          <form class="form-cari" role="search">
            <input
              type="text"
              placeholder="Cari Anime..."
              class="input-cari" id="input-cari"
              aria-label="Cari Anime"
            />

            <button type="submit" class="btn-cari" id="btn-cari">Cari</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</header>

<main id='main'></main>
`;var h=m(document.querySelector(`#main`));h.init(),h.navigateTo(h.getRoute());var g=document.querySelector(`.form-cari`),_=document.querySelector(`#input-cari`),v=document.querySelector(`#btn-cari`),y=n(S,500),b=c(v,1e4),x;async function S(e){if(!e||e.length<=2)return;let n=document.querySelector(`#daftar-anime`);x&&x.abort(),o(n,`loading`,`muted`,`state`),b.setDelay();let r=new AbortController;x=r;try{let a=await t(e,r.signal);if(console.log(a.data),n.innerHTML=``,a.data.length===0){s(n,e,`muted`,`state`);return}a.data.forEach(e=>{i(e,n,`anime-card`)})}catch(e){if(e.name===`AbortError`)return;console.error(`Gagal:`,e),a(e.message,n,`muted`,`state`)}finally{x===r&&b.clearDelay()}}_.addEventListener(`input`,e=>{e.preventDefault(),h.getRoute().type===`home`&&y.setDebounce(_.value.trim())}),g.addEventListener(`submit`,e=>{e.preventDefault(),h.navigateTo(h.getRoute(`/AniVerse/`)),y.cancelDebounce(_.value.trim())});var C=document.getElementById(`menu-cari`),w=document.querySelector(`.cari-wrapper`);C.addEventListener(`click`,()=>{w.classList.toggle(`cari-open`)});