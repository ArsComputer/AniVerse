(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://api.tenrai.org/v1`;async function t(t,n){let r=await fetch(`${e}/anime?q=${t}`,{signal:n});if(!r.ok)throw Error(`Error: ${r.status}`);return await r.json()}function n(e,t){let n;return{setDebounce(...r){clearTimeout(n),n=setTimeout(()=>{e.apply(this,r)},t)},cancelDebounce(...t){clearTimeout(n),n=null,e.apply(this,t)}}}function r(e,t,...n){let{title:r,images:{webp:{image_url:i}}}=e,a=`
    <div class="${n.join(` `)}">
      <div class="${n[0]}__image">
        <img src="${i}" alt="${r}" />
      </div>

      <div class="${n[0]}__details">
        <span class="${n[0]}__title">${r}</span>
      </div>
    </div>
    `;t.insertAdjacentHTML(`beforeend`,a)}function i(e,t,...n){t.innerHTML=`
    <div class="${n.join(` `)}"
      >Terjadi Error: ${e}
    </div>
  `}function a(e,...t){e.innerHTML=`
    <div class="${t.join(` `)}">
      <div class="${t[0]}__spinner"></div>
    </div>
  `}function o(e,t,...n){let r=document.createElement(`div`),i=document.createElement(`p`);r.classList.add(...n),i.textContent=`Anime "${t}" Tidak Ditemukan :(`,r.appendChild(i),r.insertAdjacentHTML(`beforeend`,`
    <br>
    <p>Coba periksa ejaan atau gunakan kata kunci lain</p>
  `),e.appendChild(r)}function s(e,t=1e3){let n;return{setDelay(){clearTimeout(n),e.disabled=!0,n=setTimeout(()=>e.disabled=!1,t)},clearDelay(){clearTimeout(n),e.disabled=!1}}}document.querySelector(`#app`).innerHTML=`
<header>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <div class="logo">AniVerse</div>

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

<main>
  <div class="anime-container">
    <div class="judul-container">
      <h3>Hasil Pencarian</h3>
    </div>

    <div class="daftar-anime" id="daftar-anime">
      <div class="muted state"
        >Cari Anime Favoritmu di Kotak pencarian
      </div>
      <!-- Daftar anime akan ditampilkan secara dinamis di sini -->
    </div>
  </div>
</main>
`;var c=document.querySelector(`.form-cari`),l=document.querySelector(`#input-cari`),u=document.querySelector(`#btn-cari`),d=document.querySelector(`#daftar-anime`),f=n(h,500),p=s(u,1e4),m;async function h(e){if(!e||e.length<=2)return;m&&m.abort(),a(d,`loading`,`muted`,`state`),p.setDelay();let n=new AbortController;m=n;try{let i=await t(e,n.signal);if(console.log(i.data),d.innerHTML=``,i.data.length===0){o(d,e,`muted`,`state`);return}i.data.forEach(e=>{r(e,d,`anime-card`)})}catch(e){if(e.name===`AbortError`)return;console.error(`Gagal:`,e),i(e.message,d,`muted`,`state`)}finally{m===n&&p.clearDelay()}}l.addEventListener(`input`,e=>{e.preventDefault(),f.setDebounce(l.value.trim())}),c.addEventListener(`submit`,e=>{e.preventDefault(),f.cancelDebounce(l.value.trim())});var g=document.getElementById(`menu-cari`),_=document.querySelector(`.cari-wrapper`);g.addEventListener(`click`,()=>{_.classList.toggle(`cari-open`)});