/* ============================================
   shared.js — Navbar, Footer, Data, Utils
   ============================================ */

// ─── EXPERIENCE DATA ────────────────────────────────────
const EXPERIENCES = [
  { id: 1, title: '清水斷崖獨木舟探險', region: '花蓮', category: '戶外', price: 1800, rating: 4.9, reviews: 312, img: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80', duration: '半天', tag: '戶外冒險', liked: false },
  { id: 2, title: '九份老街手捏陶藝體驗', region: '新北', category: '手作', price: 980, rating: 4.8, reviews: 205, img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80', duration: '3小時', tag: '手作工藝', liked: false },
  { id: 3, title: '台中市場私廚料理課', region: '台中', category: '美食', price: 1500, rating: 4.7, reviews: 189, img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80', duration: '4小時', tag: '美食料理', liked: false },
  { id: 4, title: '阿里山日出觀星嚮導', region: '嘉義', category: '戶外', price: 2200, rating: 5.0, reviews: 98, img: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&q=80', duration: '全天', tag: '自然探索', liked: false },
  { id: 5, title: '淡水老街藍染拼布工作坊', region: '新北', category: '手作', price: 1200, rating: 4.6, reviews: 147, img: 'https://images.unsplash.com/photo-1584992236310-6eeddc43f415?w=600&q=80', duration: '3小時', tag: '手作工藝', liked: false },
  { id: 6, title: '台南府城古蹟深度導覽', region: '台南', category: '文化', price: 800, rating: 4.9, reviews: 261, img: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&q=80', duration: '半天', tag: '文化歷史', liked: false },
  { id: 7, title: '宜蘭稻田生態農遊體驗', region: '宜蘭', category: '戶外', price: 1100, rating: 4.7, reviews: 173, img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80', duration: '半天', tag: '自然探索', liked: false },
  { id: 8, title: '高雄旗津老漁村料理日', region: '高雄', category: '美食', price: 1350, rating: 4.8, reviews: 142, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80', duration: '4小時', tag: '美食料理', liked: false },
  { id: 9, title: '太魯閣峽谷健行之旅', region: '花蓮', category: '戶外', price: 2500, rating: 4.9, reviews: 287, img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80', duration: '全天', tag: '戶外冒險', liked: false },
  { id: 10, title: '彰化扇形車庫鐵道文化探索', region: '彰化', category: '文化', price: 700, rating: 4.5, reviews: 118, img: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&q=80', duration: '2小時', tag: '文化歷史', liked: false },
  { id: 11, title: '墾丁珊瑚礁浮潛體驗', region: '屏東', category: '戶外', price: 1650, rating: 4.8, reviews: 234, img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', duration: '半天', tag: '戶外冒險', liked: false },
  { id: 12, title: '台北茶道文化靜心體驗', region: '台北', category: '文化', price: 1200, rating: 4.7, reviews: 196, img: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=600&q=80', duration: '2小時', tag: '文化歷史', liked: false },
];

// ─── LIKED ITEMS (localStorage) ─────────────────────────
function getLiked() {
  try { return JSON.parse(localStorage.getItem('it_liked') || '[]'); } catch { return []; }
}
function toggleLike(id) {
  const liked = getLiked();
  const idx = liked.indexOf(id);
  if (idx === -1) liked.push(id); else liked.splice(idx, 1);
  localStorage.setItem('it_liked', JSON.stringify(liked));
  return idx === -1;
}

// ─── RENDER NAVBAR ───────────────────────────────────────
function renderNavbar(activePage = '') {
  const pages = [
    { href: 'products.html', label: '探索體驗' },
    { href: 'about.html',    label: '關於我們' },
    { href: 'faq.html',      label: '常見問題' },
  ];
  return `
  <nav class="navbar transparent" id="navbar">
    <a href="index.html" class="navbar__logo">島嶼旅跡<span class="navbar__logo-dot">·</span></a>
    <ul class="navbar__links">
      ${pages.map(p => `<li><a href="${p.href}"${activePage===p.href?' style="color:#fff;font-weight:700;"':''}>${p.label}</a></li>`).join('')}
      <li><a href="profile.html">我的訂單</a></li>
      <li><a href="login.html" class="navbar__cta">登入 / 註冊</a></li>
    </ul>
  </nav>`;
}

// ─── RENDER FOOTER ───────────────────────────────────────
function renderFooter() {
  return `
  <footer class="footer">
    <div class="footer__grid">
      <div>
        <div class="footer__brand-name">島嶼旅跡<span>·</span></div>
        <p class="footer__tagline">深入台灣每一條小徑，<br>遇見最在地的感動體驗。<br>我們相信，旅行不只是到達目的地，<br>而是與這片土地真實相遇。</p>
      </div>
      <div>
        <div class="footer__col-title">探索</div>
        <ul class="footer__col-links">
          <li><a href="products.html">所有體驗</a></li>
          <li><a href="products.html">戶外冒險</a></li>
          <li><a href="products.html">手作工藝</a></li>
          <li><a href="products.html">美食料理</a></li>
          <li><a href="products.html">文化歷史</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">公司</div>
        <ul class="footer__col-links">
          <li><a href="about.html">關於我們</a></li>
          <li><a href="faq.html">常見問題</a></li>
          <li><a href="#">旅遊嚮導招募</a></li>
          <li><a href="#">媒體合作</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">支援</div>
        <ul class="footer__col-links">
          <li><a href="faq.html">退款政策</a></li>
          <li><a href="#">隱私政策</a></li>
          <li><a href="#">服務條款</a></li>
          <li><a href="profile.html">查看訂單</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2025 島嶼旅跡 IslandTrace. All rights reserved.</span>
      <span>用心丈量台灣每一寸土地</span>
    </div>
  </footer>`;
}

// ─── NAVBAR SCROLL EFFECT ────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.remove('transparent');
      nav.classList.add('scrolled');
    } else {
      nav.classList.add('transparent');
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── RENDER CARD ─────────────────────────────────────────
function renderCard(exp) {
  const liked = getLiked().includes(exp.id);
  const stars = '★'.repeat(Math.floor(exp.rating)) + (exp.rating % 1 >= .5 ? '½' : '');
  return `
  <div class="card" onclick="location.href='product-detail.html?id=${exp.id}'">
    <div class="card__img-wrap">
      <img class="card__img" src="${exp.img}" alt="${exp.title}" loading="lazy">
      <button class="card__heart ${liked?'active':''}" onclick="event.stopPropagation();heartClick(this,${exp.id})" aria-label="收藏">
        ${liked ? '❤️' : '🤍'}
      </button>
    </div>
    <div class="card__body">
      <span class="card__tag">${exp.tag}</span>
      <div class="card__title">${exp.title}</div>
      <div class="card__meta">📍 ${exp.region} · ⏱ ${exp.duration}</div>
      <div class="card__footer">
        <div class="card__price">NT$ ${exp.price.toLocaleString()} <span>/ 人起</span></div>
        <div class="card__stars">${stars} <span style="color:var(--gray-4);font-size:.8rem;">(${exp.reviews})</span></div>
      </div>
    </div>
  </div>`;
}
function heartClick(btn, id) {
  const now = toggleLike(id);
  btn.textContent = now ? '❤️' : '🤍';
  btn.classList.toggle('active', now);
}

// ─── PROGRESS STEPS ──────────────────────────────────────
function renderSteps(current) {
  const steps = ['選擇日期', '填寫資料', '預訂完成'];
  return `
  <div class="progress-steps">
    <div class="steps-wrapper">
      ${steps.map((s,i) => {
        const n = i+1;
        const cls = n < current ? 'done' : n === current ? 'active' : '';
        return `<div class="step-item ${cls}" style="min-width:80px;">
          <div class="step-circle">${n < current ? '✓' : n}</div>
          <div class="step-label">${s}</div>
        </div>`;
      }).join('<div style="flex:1;height:2px;background:var(--gray-2);margin-top:-16px;min-width:40px;"></div>')}
    </div>
  </div>`;
}
