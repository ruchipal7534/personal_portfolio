const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const copyEmailBtn = document.getElementById('copyEmail');
const copyToast = document.getElementById('copyToast');
const email = 'ruchipal7534@gmail.com';

// initial theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  root.classList.add('dark');
}

// toggle theme
themeToggle?.addEventListener('click', () => {
  root.classList.toggle('dark');
  const mode = root.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
  themeToggle.innerHTML = root.classList.contains('dark') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
});

// mobile menu
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// copy email
copyEmailBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyToast.classList.remove('hidden');
    setTimeout(() => copyToast.classList.add('hidden'), 2000);
  } catch (e) {
    alert('Unable to copy email');
  }
});

// year
document.getElementById('year').textContent = new Date().getFullYear();
