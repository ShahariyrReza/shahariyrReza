(function() {
  "use strict";

  /**
   * Theme Switcher
   */
  const themeToggleCheck = document.getElementById('theme-toggle-check');
  const body = document.body;

  // Check for saved theme
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  body.setAttribute('data-theme', savedTheme);
  
  if (savedTheme === 'dark') {
    themeToggleCheck.checked = true;
  }

  themeToggleCheck.addEventListener('change', () => {
    const newTheme = themeToggleCheck.checked ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });

  /**
   * Language Switcher
   */
  const langToggleCheck = document.getElementById('lang-toggle-check');

  const translations = {
    'en': {
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-skills': 'Skills',
      'nav-resume': 'Resume',
      'nav-projects': 'Projects',
      'nav-testimonials': 'Testimonials',
      'nav-contact': 'Contact',
      'hero-title': 'Shahariyr Reza',
      'hero-typed': 'Java Developer, Spring Boot Enthusiast',
      'about-title': 'About',
      'about-subtitle': 'Java Developer & backend specialist curious about building clean systems.',
      'projects-title': 'Projects'
    },
    'bn': {
      'nav-home': 'মূল পাতা',
      'nav-about': 'সম্পর্কে',
      'nav-skills': 'দক্ষতা',
      'nav-resume': 'জীবনবৃত্তান্ত',
      'nav-projects': 'প্রকল্পসমূহ',
      'nav-testimonials': 'প্রশংসাপত্র',
      'nav-contact': 'যোগাযোগ',
      'hero-title': 'শাহরিয়ার রেজা',
      'hero-typed': 'জাভা ডেভেলপার, স্প্রিং বুট অনুরাগী',
      'about-title': 'সম্পর্কে',
      'about-subtitle': 'সবসময় পরিচ্ছন্ন সিস্টেম তৈরিতে আগ্রহী জাভা ডেভেলপার এবং ব্যাকেন্ড বিশেষজ্ঞ।',
      'projects-title': 'প্রকল্পসমূহ'
    }
  };

  let currentLang = localStorage.getItem('portfolio-lang') || 'en';
  
  if (currentLang === 'bn') {
    langToggleCheck.checked = true;
  }
  
  applyLanguage(currentLang);

  langToggleCheck.addEventListener('change', () => {
    currentLang = langToggleCheck.checked ? 'bn' : 'en';
    applyLanguage(currentLang);
    localStorage.setItem('portfolio-lang', currentLang);
  });

  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Update typed effect
    const typedElt = document.querySelector('.typed');
    if (typedElt) {
      typedElt.setAttribute('data-typed-items', translations[lang]['hero-typed']);
    }

    body.setAttribute('data-lang', lang);
  }

  /**
   * Hide on Scroll logic
   */
  const controls = document.querySelector('.theme-lang-controls');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      controls.classList.add('vanished');
    } else {
      controls.classList.remove('vanished');
    }
  });

})();
