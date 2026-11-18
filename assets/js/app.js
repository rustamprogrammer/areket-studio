(() => {
  'use strict';
  const $ = window.jQuery;
  const text = {
    ru: {
      skip:'Перейти к содержимому',navHome:'Главная',navProjects:'Проекты',navContact:'Обсудить проект',backTop:'Наверх ↑',footerLine:'Цифровые решения для бизнеса.',originNote:'адаптация пресетов',
      heroTitle:'Разрабатываем<br><em>цифровые решения</em><br>для бизнеса<span class="hero-period">.</span>',heroText:'От сайта до внутренней системы: проектируем понятные интерфейсы и собираем работающий продукт.',viewWork:'Смотреть проекты',workInMotion:'Работа в движении',heroLineA:'Сайты',heroLineB:'Платформы',heroLineC:'Интерфейсы',
      aboutSide:'Что мы делаем',aboutTitle:'Сложное внутри.<br><span>Простое в работе.</span>',aboutText:'Хорошее цифровое решение помогает команде действовать быстрее. Мы соединяем структуру, дизайн и разработку в один понятный процесс.',serviceWeb:'Сайты и веб-приложения',serviceSystems:'Внутренние системы',serviceUX:'Интерфейсы и UX',workTitle:'Работы, за которыми<br>стоят задачи.',allWork:'Все проекты',taxiSummary:'Веб-система для автомобилей, водителей, аренд, финансов, задач и документов.',productSystem:'Продуктовая система',webProject:'Веб-проект',processSide:'Как работаем',processTitle:'От задачи до<br>готового продукта',step1:'Разбираемся',step1Text:'Собираем цели, ограничения и реальные сценарии пользователей.',step2:'Проектируем',step2Text:'Проверяем структуру, логику и ключевые экраны до разработки.',step3:'Запускаем',step3Text:'Собираем, тестируем и передаём готовое решение.',ctaTitle:'Есть задача?<br>Давайте действовать.',ctaButton:'Заполнить бриф',
      projectsTitle:'Наши<br><span>проекты.</span>',projectsIntro:'Сайты и системы с разными задачами. Откройте проект, чтобы увидеть, что находится за названием.',filterAll:'Все',filterSystems:'Системы',filterSites:'Сайты',searchPlaceholder:'Найти проект',loadingProjects:'Загружаем проекты…',emptyProjects:'Ничего не найдено. Попробуйте другое название или категорию.',loadError:'Не удалось загрузить проекты. Обновите страницу.',openProject:'Открыть проект',
      contactTitle:'Начнём<br><span>с задачи.</span>',contactIntro:'Расскажите, что хотите создать. Интерактивный бриф поможет собрать вводные в одном месте.',briefTitle:'Короткий бриф',nameLabel:'Как к вам обращаться',emailLabel:'Электронная почта',typeLabel:'Что вам нужно',typeWebsite:'Сайт',typeSystem:'Внутренняя система',typeInterface:'Интерфейс',messageLabel:'Расскажите о задаче',formNote:'Это учебная демонстрация: бриф сохраняется только в вашем браузере и никуда не отправляется.',saveBrief:'Сохранить бриф',nameError:'Укажите имя (не менее 2 символов).',emailError:'Укажите корректный адрес электронной почты.',messageError:'Опишите задачу хотя бы в 20 символах.',saved:'Бриф сохранён в этом браузере.',savedLabel:'Последний сохранённый бриф',storageError:'Не удалось сохранить бриф в браузере.'
    },
    en: {
      skip:'Skip to content',navHome:'Home',navProjects:'Projects',navContact:'Discuss a project',backTop:'Back to top ↑',footerLine:'Digital solutions for business.',originNote:'preset adaptation',
      heroTitle:'We build<br><em>digital solutions</em><br>for business<span class="hero-period">.</span>',heroText:'From a website to an internal system: we design clear interfaces and build working products.',viewWork:'Explore projects',workInMotion:'Work in motion',heroLineA:'Websites',heroLineB:'Platforms',heroLineC:'Interfaces',
      aboutSide:'What we do',aboutTitle:'Complex inside.<br><span>Simple to use.</span>',aboutText:'A useful digital product helps a team move faster. We bring structure, design and development into one clear process.',serviceWeb:'Websites and web apps',serviceSystems:'Internal systems',serviceUX:'Interfaces and UX',workTitle:'Work shaped<br>by real tasks.',allWork:'All projects',taxiSummary:'A web system for vehicles, drivers, rentals, finances, tasks and documents.',productSystem:'Product system',webProject:'Web project',processSide:'Our process',processTitle:'From brief to<br>working product',step1:'Discover',step1Text:'We collect goals, constraints and real user scenarios.',step2:'Design',step2Text:'We test structure, logic and key screens before development.',step3:'Launch',step3Text:'We build, test and hand over the finished product.',ctaTitle:'Have a project?<br>Let’s act.',ctaButton:'Fill out a brief',
      projectsTitle:'Selected<br><span>projects.</span>',projectsIntro:'Websites and systems built around different tasks. Open a project to see what stands behind its name.',filterAll:'All',filterSystems:'Systems',filterSites:'Websites',searchPlaceholder:'Find a project',loadingProjects:'Loading projects…',emptyProjects:'No projects found. Try another name or category.',loadError:'Projects could not be loaded. Refresh the page.',openProject:'Visit project',
      contactTitle:'Start with<br><span>the task.</span>',contactIntro:'Tell us what you want to create. This interactive brief helps collect the essentials in one place.',briefTitle:'Short brief',nameLabel:'Your name',emailLabel:'Email address',typeLabel:'What do you need?',typeWebsite:'Website',typeSystem:'Internal system',typeInterface:'Interface',messageLabel:'Tell us about the task',formNote:'This is a course demo: the brief is saved only in your browser and is not sent anywhere.',saveBrief:'Save brief',nameError:'Enter a name of at least 2 characters.',emailError:'Enter a valid email address.',messageError:'Describe the task in at least 20 characters.',saved:'Brief saved in this browser.',savedLabel:'Last saved brief',storageError:'Could not save the brief in this browser.'
    }
  };
  Object.assign(text.ru, {projectSearch:'Поиск проектов',openMenu:'Открыть меню',closeMenu:'Закрыть меню',closeDialog:'Закрыть окно'});
  Object.assign(text.en, {projectSearch:'Search projects',openMenu:'Open menu',closeMenu:'Close menu',closeDialog:'Close dialog'});
  const safeGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } };
  let lang = safeGet('areket-language') === 'en' ? 'en' : 'ru';
  let projects = [];
  let filter = 'all';
  let toastTimer;
  const t = key => text[lang][key] || key;
  function showToast(message) {
    const notice = document.querySelector('.toast-notice');
    if (!notice) return;
    notice.textContent = message;
    notice.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => notice.classList.remove('is-visible'), 3200);
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll('[data-placeholder]').forEach(el => { el.placeholder = t(el.dataset.placeholder); });
    document.querySelectorAll('.lang-toggle').forEach(el => { el.textContent = lang === 'ru' ? 'EN' : 'RU'; el.setAttribute('aria-label',lang === 'ru' ? 'Switch to English' : 'Переключить на русский'); });
    document.getElementById('project-search')?.setAttribute('aria-label',t('projectSearch'));
    document.querySelector('.dialog-close')?.setAttribute('aria-label',t('closeDialog'));
    const navToggle = document.querySelector('.nav-toggle');
    navToggle?.setAttribute('aria-label',t(navToggle.getAttribute('aria-expanded') === 'true' ? 'closeMenu' : 'openMenu'));
    if (projects.length) renderProjects();
    renderSavedBrief();
  }
  function applyTheme() {
    const theme = safeGet('areket-theme') === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('.theme-toggle').forEach(el => el.setAttribute('aria-label', lang === 'ru' ? (theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')));
  }
  function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function renderProjects() {
    if (!$) return;
    const query = ($('#project-search').val() || '').toString().trim().toLocaleLowerCase();
    const visible = projects.filter(p => (filter === 'all' || p.category === filter) && (p.name.toLocaleLowerCase().includes(query) || p.description[lang].toLocaleLowerCase().includes(query) || p.tags.join(' ').toLocaleLowerCase().includes(query)));
    const html = visible.map((p,i) => `<article class="project-row" id="${p.id}"><span class="count">${String(i+1).padStart(2,'0')}</span><h2>${escapeHTML(p.name)}</h2><span class="category">${escapeHTML(p.categoryLabel[lang])}</span><span class="row-arrow" aria-hidden="true">↗</span><button type="button" data-project="${p.id}" aria-label="${lang === 'ru' ? 'Подробнее о проекте' : 'More about'} ${escapeHTML(p.name)}"></button></article>`).join('');
    $('#project-results').stop(true,true).fadeTo(120,0,() => { $('#project-results').html(html || `<p class="project-empty">${t('emptyProjects')}</p>`).fadeTo(170,1); });
  }
  function openProject(id) {
    const p = projects.find(item => item.id === id);
    const dialog = document.getElementById('project-dialog');
    if (!p || !dialog) return;
    document.getElementById('dialog-title').textContent = p.name;
    document.getElementById('dialog-description').textContent = p.description[lang];
    document.getElementById('dialog-tags').innerHTML = p.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
    const visual = document.getElementById('dialog-visual');
    visual.className = 'dialog-visual ' + p.visual;
    visual.innerHTML = p.visual === 'taxipark' ? '<img src="assets/images/taxipark-preview.svg" alt="TaxiPark document review screen">' : `<strong>${escapeHTML(p.name)}</strong>`;
    const link = document.getElementById('dialog-link');
    link.hidden = !p.url;
    if (p.url) link.href = p.url; else link.removeAttribute('href');
    dialog.showModal();
  }
  function renderSavedBrief() {
    const target = document.getElementById('saved-brief');
    if (!target) return;
    let brief;
    try { brief = JSON.parse(safeGet('areket-brief') || 'null'); } catch { brief = null; }
    if (!brief || !brief.name || !brief.type) { target.hidden = true; return; }
    target.hidden = false;
    const typeKey = {website:'typeWebsite',system:'typeSystem',interface:'typeInterface'}[brief.type];
    target.textContent = `${t('savedLabel')}: ${brief.name} · ${typeKey ? t(typeKey) : brief.type}`;
  }
  function initBrief() {
    if (!$) return;
    $('#brief-form').on('submit', function(event) {
      event.preventDefault();
      const name = $('#brief-name').val().toString().trim();
      const email = $('#brief-email').val().toString().trim();
      const message = $('#brief-message').val().toString().trim();
      const type = $('input[name="type"]:checked').val();
      const errors = {
        name: name.length >= 2 ? '' : t('nameError'),
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : t('emailError'),
        message: message.length >= 20 ? '' : t('messageError')
      };
      Object.entries(errors).forEach(([key,value]) => { $(`#${key}-error`).text(value); $(`#brief-${key}`).attr('aria-invalid',Boolean(value)); });
      const firstInvalid = Object.keys(errors).find(key => errors[key]);
      if (firstInvalid) { $(`#brief-${firstInvalid}`).trigger('focus'); return; }
      const brief = { name, email, type, message, savedAt: new Date().toISOString() };
      if (!safeSet('areket-brief',JSON.stringify(brief))) { showToast(t('storageError')); return; }
      this.reset();
      renderSavedBrief();
      showToast(t('saved'));
    });
    $('#brief-form input,#brief-form textarea').on('input',function(){ const key = this.name; if (['name','email','message'].includes(key)) { $(`#${key}-error`).text(''); $(this).removeAttr('aria-invalid'); } });
  }
  function initDirectionHover() {
    if (!$) return;
    document.querySelectorAll('.service-list a > span:first-child').forEach(label => {
      const key = label.dataset.i18n;
      if (!key) return;
      label.className = 'direction-word';
      label.removeAttribute('data-i18n');
      label.innerHTML = `<span class="direction-stack"><span aria-hidden="true" data-i18n="${key}">${t(key)}</span><span data-i18n="${key}">${t(key)}</span><span aria-hidden="true" data-i18n="${key}">${t(key)}</span></span>`;
    });
    $('.service-list a').on('mouseenter',function(event) {
      const rect = this.getBoundingClientRect();
      this.classList.toggle('is-top',event.clientY - rect.top < rect.height / 2);
      this.classList.toggle('is-bottom',event.clientY - rect.top >= rect.height / 2);
    }).on('mouseleave',function() { this.classList.remove('is-top','is-bottom'); });
  }
  function initProjects() {
    if (!$ || !document.getElementById('project-results')) return;
    fetch('data/projects.json').then(response => { if (!response.ok) throw Error('projects'); return response.json(); }).then(data => {
      if (!Array.isArray(data)) throw Error('projects');
      projects = data;
      follower.innerHTML = `<div class="follower-reel">${projects.map(p => `<div class="follower-slide ${p.visual}">${p.visual === 'taxipark' ? '<img src="assets/images/taxipark-preview.svg" alt="">' : `<strong>${escapeHTML(p.name)}</strong>`}</div>`).join('')}</div>`;
      renderProjects();
      const hash = location.hash.slice(1);
      if (hash) setTimeout(() => openProject(hash),250);
    }).catch(() => { $('#project-results').html(`<p class="project-empty">${t('loadError')}</p>`); });
    $('.filter-button').on('click',function(){ filter = this.dataset.filter; $('.filter-button').removeClass('is-active').attr('aria-pressed','false'); $(this).addClass('is-active').attr('aria-pressed','true'); renderProjects(); });
    $('#project-search').on('input',renderProjects);
    $('#project-results').on('click','[data-project]',function(){ openProject(this.dataset.project); });
    $('.dialog-close').on('click',() => document.getElementById('project-dialog').close());
    $('#project-dialog').on('click',function(event){ if (event.target === this) this.close(); });
    // Adapted from OriginKit Hover Image Reveal: the preview reel follows the active row.
    const follower = document.createElement('div'); follower.className = 'project-follower'; follower.setAttribute('aria-hidden','true'); document.body.appendChild(follower);
    $('#project-results').on('mousemove','.project-row',function(event){ if (matchMedia('(pointer: fine)').matches) { const index = projects.findIndex(item => item.id === this.id); if (index >= 0) { follower.classList.add('is-visible'); follower.style.setProperty('--active',index); follower.style.left = Math.min(event.clientX + 32,innerWidth - 250) + 'px'; follower.style.top = Math.min(event.clientY - 55,innerHeight - 145) + 'px'; } } }).on('mouseleave','.project-row',() => follower.classList.remove('is-visible'));
  }
  // Inspired by OriginKit Ribbon Glow, Variant 1: broad light bands bend toward the pointer.
  function initRibbonFields() {
    const staticMotion = matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches;
    const tracks = [
      [[-220,810],[120,630],[420,130],[900,-120],1],
      [[-280,650],[180,540],[650,360],[1160,-100],-.65],
      [[100,840],[360,660],[530,160],[1190,100],.5]
    ];
    document.querySelectorAll('[data-ribbon-field]').forEach((field,index) => {
      const hero = field.classList.contains('hero-visual');
      const id = `ribbon-${index}`;
      const colors = hero ? ['#86cfff','#f6fbff'] : ['#ffb496','#ffe0c2'];
      const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.classList.add('ribbon-field');
      svg.setAttribute('viewBox','0 0 1000 700');
      svg.setAttribute('preserveAspectRatio','none');
      svg.setAttribute('aria-hidden','true');
      svg.setAttribute('focusable','false');
      svg.innerHTML = `<defs><linearGradient id="${id}" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="${colors[0]}"/><stop offset=".55" stop-color="${colors[1]}"/><stop offset="1" stop-color="${colors[0]}"/></linearGradient><filter id="${id}-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="25"/></filter></defs>${tracks.map(() => `<g><path fill="none" stroke="url(#${id})" stroke-width="125" stroke-linecap="round" opacity=".45" filter="url(#${id}-blur)"/><path fill="none" stroke="url(#${id})" stroke-width="30" stroke-linecap="round" opacity=".22"/><path fill="none" stroke="${colors[1]}" stroke-width="3" stroke-linecap="round" opacity=".23"/></g>`).join('')}`;
      field.prepend(svg);
      const groups = [...svg.querySelectorAll('g')];
      let x = .5, y = .5, targetX = .5, targetY = .5, presence = 0, targetPresence = 0, frame = 0;
      function draw() {
        const bendX = (x - .5) * 280 * presence;
        const bendY = (y - .5) * 220 * presence;
        tracks.forEach(([start,controlA,controlB,end,weight],i) => {
          const path = `M ${start[0]} ${start[1]} C ${controlA[0] + bendX * weight} ${controlA[1] + bendY * weight}, ${controlB[0] + bendX * (1 - weight / 2)} ${controlB[1] + bendY * (1 - weight / 2)}, ${end[0]} ${end[1]}`;
          groups[i].querySelectorAll('path').forEach(line => line.setAttribute('d',path));
        });
      }
      function step() {
        frame = 0;
        if (document.hidden) return;
        x += (targetX - x) * .14;
        y += (targetY - y) * .14;
        presence += (targetPresence - presence) * .12;
        draw();
        if (Math.abs(x - targetX) + Math.abs(y - targetY) + Math.abs(presence - targetPresence) > .003) schedule();
      }
      function schedule() {
        if (!frame && !document.hidden) frame = requestAnimationFrame(step);
      }
      draw();
      if (staticMotion) return;
      field.addEventListener('pointermove',event => {
        const box = field.getBoundingClientRect();
        targetX = Math.max(0,Math.min(1,(event.clientX - box.left) / box.width));
        targetY = Math.max(0,Math.min(1,(event.clientY - box.top) / box.height));
        targetPresence = 1;
        schedule();
      });
      field.addEventListener('pointerleave',() => { targetX = .5; targetY = .5; targetPresence = 0; schedule(); });
      document.addEventListener('visibilitychange',() => { if (!document.hidden) schedule(); });
    });
  }
  document.addEventListener('DOMContentLoaded',() => {
    initRibbonFields();
    initDirectionHover();
    applyTheme(); applyLanguage();
    document.querySelector('.lang-toggle')?.addEventListener('click',() => { lang = lang === 'ru' ? 'en' : 'ru'; safeSet('areket-language',lang); applyLanguage(); applyTheme(); });
    document.querySelector('.theme-toggle')?.addEventListener('click',() => { safeSet('areket-theme',document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); applyTheme(); });
    const navToggle = document.querySelector('.nav-toggle');
    navToggle?.addEventListener('click',() => { const open = navToggle.getAttribute('aria-expanded') !== 'true'; navToggle.setAttribute('aria-expanded',String(open)); navToggle.setAttribute('aria-label',t(open ? 'closeMenu' : 'openMenu')); document.getElementById('nav-links').classList.toggle('is-open',open); });
    initProjects(); initBrief();
  });
})();
