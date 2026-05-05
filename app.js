// app.js

const CATS = ["cause","consequence","but","temps","condition","comparaison","concession","opposition"];
const ADMIN_CODE = "admin2026"; // Change this!

let allData = loadData();
let currentCat = "all";
let currentSearch = "";
let isAdmin = false;

// ===== RENDER TABLE =====
function renderTable() {
  const tbody = document.getElementById("tableBody");
  const noResult = document.getElementById("noResult");
  const search = currentSearch.toLowerCase().trim();

  const filtered = allData.filter(item => {
    const matchCat = currentCat === "all" || item.cats.includes(currentCat);
    const matchSearch = !search || item.word.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  // Update count
  document.getElementById("totalCount").textContent = allData.length;

  if (filtered.length === 0) {
    tbody.innerHTML = "";
    noResult.classList.remove("hidden");
    return;
  }
  noResult.classList.add("hidden");

  tbody.innerHTML = filtered.map(item => {
    const cells = CATS.map(cat => {
      const has = item.cats.includes(cat);
      return `<td class="${!has ? 'td-row-dim' : ''}">${has ? `<span class="dot dot-${cat}"></span>` : '–'}</td>`;
    }).join("");
    return `<tr><td class="td-word">${escHtml(item.word)}</td>${cells}</tr>`;
  }).join("");
}

function escHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

// ===== FILTERS =====
document.querySelectorAll(".pill").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    currentCat = btn.dataset.cat;
    renderTable();
  });
});

document.getElementById("searchInput").addEventListener("input", e => {
  currentSearch = e.target.value;
  renderTable();
});

// ===== ADMIN MODAL =====
const overlay   = document.getElementById("modalOverlay");
const loginView = document.getElementById("loginView");
const adminView = document.getElementById("adminView");

document.getElementById("adminBtn").addEventListener("click", () => {
  overlay.classList.remove("hidden");
  if (isAdmin) {
    loginView.classList.add("hidden");
    adminView.classList.remove("hidden");
  } else {
    loginView.classList.remove("hidden");
    adminView.classList.add("hidden");
    document.getElementById("adminCode").value = "";
    document.getElementById("loginError").classList.add("hidden");
  }
});

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });

function closeModal() {
  overlay.classList.add("hidden");
}

document.getElementById("loginSubmit").addEventListener("click", () => {
  const code = document.getElementById("adminCode").value;
  if (code === ADMIN_CODE) {
    isAdmin = true;
    loginView.classList.add("hidden");
    adminView.classList.remove("hidden");
    document.getElementById("loginError").classList.add("hidden");
  } else {
    document.getElementById("loginError").classList.remove("hidden");
  }
});

document.getElementById("adminCode").addEventListener("keydown", e => {
  if (e.key === "Enter") document.getElementById("loginSubmit").click();
});

document.getElementById("addWord").addEventListener("click", () => {
  const word = document.getElementById("newWord").value.trim();
  const cats = [...document.querySelectorAll('input[name="cats"]:checked')].map(cb => cb.value);
  const successMsg = document.getElementById("addSuccess");

  if (!word || cats.length === 0) {
    alert("Veuillez entrer un subordonnant et sélectionner au moins une catégorie.");
    return;
  }

  const item = { word, cats };
  saveExtra(item);
  allData = loadData();
  renderTable();

  document.getElementById("newWord").value = "";
  document.querySelectorAll('input[name="cats"]').forEach(cb => cb.checked = false);
  successMsg.classList.remove("hidden");
  setTimeout(() => successMsg.classList.add("hidden"), 2500);
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  isAdmin = false;
  closeModal();
});

// ===== INIT =====
renderTable();

// Animate count
function animateCount(el, target, duration = 1200) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.textContent = Math.floor(progress * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}
window.addEventListener("load", () => {
  animateCount(document.getElementById("totalCount"), allData.length);
});
