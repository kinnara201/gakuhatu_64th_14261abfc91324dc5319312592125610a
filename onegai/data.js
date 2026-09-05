// -----------------------------------
// 1. スライドショー処理
// -----------------------------------
let slideIndex = 1;
let slideTimer = null;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (slides.length === 0) return; // 要素がない場合の安全対策
  
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide();
}

function startAutoSlide() {
  slideTimer = setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}


// -----------------------------------
// 2. DOM読み込み完了後に実行する処理 (ハンバーガー & スクロールアニメ)
// -----------------------------------
document.addEventListener("DOMContentLoaded", function() {
  
  // --- スライドショー初期化 ---
  showSlides(slideIndex);
  startAutoSlide();
  // --- フッターアコーディオン開閉処理 ---
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      const content = this.nextElementSibling;

      // タップされた項目を開閉
      if (item.classList.contains('is-open')) {
        item.classList.remove('is-open');
        content.style.maxHeight = null;
      } else {
        item.classList.add('is-open');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // --- スクロールアニメーション (Intersection Observer) ---
// --- スクロールアニメーション (Intersection Observer) ---
  const targets = document.querySelectorAll('.fade-in-target');

  if (targets.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-show');
          observer.unobserve(entry.target); // 一度表示されたら監視終了
        }
      });
    }, {
      // 画面下から100px以上入ってきたら発火させる（ロード即発火を防ぐ）
      rootMargin: '0px 0px -250px 0px',
      threshold: 0.1 // 要素が10%以上見えたら反応
    });

    targets.forEach(target => {
      observer.observe(target);
    });
  }

  // --- ハンバーガーメニューの処理 ---
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const menuOverlay = document.getElementById("menuOverlay");
  const drawerMenu = document.getElementById("drawerMenu");

  function openMenu() {
    if (drawerMenu && menuOverlay) {
      drawerMenu.classList.add("is-open");
      menuOverlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  function closeMenu() {
    if (drawerMenu && menuOverlay) {
      drawerMenu.classList.remove("is-open");
      menuOverlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  }

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (menuOverlay) menuOverlay.addEventListener("click", closeMenu);
});

document.addEventListener('DOMContentLoaded', () => {
  const langDropdown = document.querySelector('.lang-dropdown');
  const langBtn = document.getElementById('lang-btn');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('is-open');
    });

    // 画面のどこかをタップしたらメニューを閉じる
    document.addEventListener('click', () => {
      langDropdown.classList.remove('is-open');
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const noResults = document.getElementById('no-results');

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      searchResults.innerHTML = ''; // 一旦結果をクリア

      if (query === '') {
        noResults.style.display = 'none';
        return;
      }

      // keywords配列のいずれかに「入力文字」が含まれているか判定
      const filtered = searchData.filter(item => {
        return item.keywords.some(keyword => 
          keyword.toLowerCase().includes(query)
        );
      });

      // 該当がある場合はリストを生成（近畿運輸局などはkeywordsに無いため弾かれます）
      if (filtered.length > 0) {
        noResults.style.display = 'none';
        filtered.forEach(item => {
          const li = document.createElement('li');
          li.className = 'search-item';
          li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
          searchResults.appendChild(li);
        });
      } else {
        noResults.style.display = 'block';
      }
    });
  }
});