(() => {
  'use strict';
  const $ = window.jQuery;
  const text = {
    ru: {
      skip:'Перейти к содержимому',navHome:'Главная',navProjects:'Проекты',navContact:'Обсудить проект',backTop:'Наверх ↑',footerLine:'Цифровые решения для бизнеса.',originNote:'адаптация пресетов',
      heroTitle:'Разрабатываем<br><em>цифровые решения</em><br>для бизнеса<span class="hero-period">.</span>',heroText:'От сайта до внутренней системы: проектируем понятные интерфейсы и собираем работающий продукт.',viewWork:'Смотреть проекты',workInMotion:'Работа в движении',heroLineA:'Сайты',heroLineB:'Платформы',heroLineC:'Интерфейсы',
      aboutSide:'Что мы делаем',aboutTitle:'Сложное внутри.<br><span>Простое в работе.</span>',aboutText:'Хорошее цифровое решение помогает команде действовать быстрее. Мы соединяем структуру, дизайн и разработку в один понятный процесс.',serviceWeb:'Сайты и веб-приложения',serviceSystems:'Внутренние системы',serviceUX:'Интерфейсы и UX',workTitle:'Работы, за которыми<br>стоят задачи.',allWork:'Все проекты',taxiSummary:'Веб-система для автомобилей, водителей, аренд, финансов, задач и документов.',productSystem:'Продуктовая система',webProject:'Веб-проект',processSide:'Как работаем',processTitle:'От задачи до<br>готового продукта',step1:'Разбираемся',step1Text:'Собираем цели, ограничения и реальные сценарии пользователей.',step2:'Проектируем',step2Text:'Проверяем структуру, логику и ключевые экраны до разработки.',step3:'Запускаем',step3Text:'Собираем, тестируем и передаём готовое решение.',ctaTitle:'Есть задача?<br>Давайте действовать.',ctaButton:'Заполнить бриф',
      projectsTitle:'Наши<br><span>проекты.</span>',projectsIntro:'Сайты и системы с разными задачами. Откройте проект, чтобы увидеть, что находится за названием.',filterAll:'Все',filterSystems:'Системы',filterSites:'Сайты',searchPlaceholder:'Найти проект',loadingProjects:'Загружаем проекты…',emptyProjects:'Ничего не найдено. Попробуйте другое название или категорию.',loadError:'Не удалось загрузить проекты. Обновите страницу.',openProject:'Открыть проект',
      contactTitle:'Начнём<br><span>с задачи.</span>',contactIntro:'Опишите проект своими словами. Несколько ответов помогут нам понять задачу и подготовиться к разговору.',briefTitle:'Расскажите о проекте',briefIntro:'Достаточно того, что известно сейчас. Детали уточним в переписке.',nameLabel:'Как к вам обращаться',companyLabel:'Компания или проект <span class="optional">(необязательно)</span>',companyPlaceholder:'Название или сфера бизнеса',typeLabel:'Что хотите создать',typeWebsite:'Сайт',typeSystem:'Внутреннюю систему',typeInterface:'Интерфейс',goalLabel:'Какую задачу должен решить проект?',goalPlaceholder:'Например: клиентам сложно записываться, хотим принимать заявки через сайт',audienceLabel:'Кто будет пользоваться?',audiencePlaceholder:'Клиенты, сотрудники, партнёры…',featuresLabel:'Что обязательно должно работать?',featuresPlaceholder:'Например: каталог, личный кабинет, онлайн-оплата, отчёты',timelineLabel:'Когда нужен запуск?',budgetLabel:'Бюджет <span class="optional">(необязательно)</span>',selectOption:'Пока не знаю',timelineMonth:'В течение месяца',timelineQuarter:'В течение 3 месяцев',timelineFlexible:'Срок гибкий',budgetUnder500:'До 500 000 ₸',budget500to1500:'500 000–1 500 000 ₸',budgetAbove1500:'Более 1 500 000 ₸',formNote:'Откроется WhatsApp с готовым сообщением для areket.studio. Проверьте текст и нажмите «Отправить» в WhatsApp.',sendBrief:'Продолжить в WhatsApp',nameError:'Укажите имя (не менее 2 символов).',goalError:'Опишите задачу хотя бы в 20 символах.',audienceError:'Укажите, кто будет пользоваться продуктом.',featuresError:'Перечислите нужные функции (не менее 10 символов).'
    },
    en: {
      skip:'Skip to content',navHome:'Home',navProjects:'Projects',navContact:'Discuss a project',backTop:'Back to top ↑',footerLine:'Digital solutions for business.',originNote:'preset adaptation',
      heroTitle:'We build<br><em>digital solutions</em><br>for business<span class="hero-period">.</span>',heroText:'From a website to an internal system: we design clear interfaces and build working products.',viewWork:'Explore projects',workInMotion:'Work in motion',heroLineA:'Websites',heroLineB:'Platforms',heroLineC:'Interfaces',
      aboutSide:'What we do',aboutTitle:'Complex inside.<br><span>Simple to use.</span>',aboutText:'A useful digital product helps a team move faster. We bring structure, design and development into one clear process.',serviceWeb:'Websites and web apps',serviceSystems:'Internal systems',serviceUX:'Interfaces and UX',workTitle:'Work shaped<br>by real tasks.',allWork:'All projects',taxiSummary:'A web system for vehicles, drivers, rentals, finances, tasks and documents.',productSystem:'Product system',webProject:'Web project',processSide:'Our process',processTitle:'From brief to<br>working product',step1:'Discover',step1Text:'We collect goals, constraints and real user scenarios.',step2:'Design',step2Text:'We test structure, logic and key screens before development.',step3:'Launch',step3Text:'We build, test and hand over the finished product.',ctaTitle:'Have a project?<br>Let’s act.',ctaButton:'Fill out a brief',
      projectsTitle:'Selected<br><span>projects.</span>',projectsIntro:'Websites and systems built around different tasks. Open a project to see what stands behind its name.',filterAll:'All',filterSystems:'Systems',filterSites:'Websites',searchPlaceholder:'Find a project',loadingProjects:'Loading projects…',emptyProjects:'No projects found. Try another name or category.',loadError:'Projects could not be loaded. Refresh the page.',openProject:'Visit project',
      contactTitle:'Start with<br><span>the task.</span>',contactIntro:'Describe the project in your own words. A few answers will help us understand the task before we talk.',briefTitle:'Tell us about the project',briefIntro:'Share what you know so far. We can clarify the details in chat.',nameLabel:'Your name',companyLabel:'Company or project <span class="optional">(optional)</span>',companyPlaceholder:'Name or business area',typeLabel:'What would you like to create?',typeWebsite:'Website',typeSystem:'Internal system',typeInterface:'Interface',goalLabel:'What problem should it solve?',goalPlaceholder:'For example: customers need an easier way to book online',audienceLabel:'Who will use it?',audiencePlaceholder:'Customers, staff, partners…',featuresLabel:'What must it be able to do?',featuresPlaceholder:'For example: catalogue, account, online payment, reports',timelineLabel:'When do you need to launch?',budgetLabel:'Budget <span class="optional">(optional)</span>',selectOption:'Not sure yet',timelineMonth:'Within a month',timelineQuarter:'Within 3 months',timelineFlexible:'Flexible',budgetUnder500:'Under ₸500,000',budget500to1500:'₸500,000–1,500,000',budgetAbove1500:'Over ₸1,500,000',formNote:'WhatsApp will open with a prepared message to areket.studio. Review it and tap Send in WhatsApp.',sendBrief:'Continue in WhatsApp',nameError:'Enter a name of at least 2 characters.',goalError:'Describe the task in at least 20 characters.',audienceError:'Tell us who will use the product.',featuresError:'List the needed features in at least 10 characters.'
    }
  };
  Object.assign(text.ru, {projectSearch:'Поиск проектов',openMenu:'Открыть меню',closeMenu:'Закрыть меню',closeDialog:'Закрыть окно',nameLabel:'Имя и фамилия',namePlaceholder:'Например: Айжан Садыкова',nameError:'Укажите имя и фамилию.',historyTitle:'История запросов',historyNote:'Заявки сохраняются только в этом браузере. Показаны пять последних.',historyEmpty:'Пока нет сохранённых запросов.',historyOverflow:'Более ранние запросы скрыты, но остаются в этом браузере.',historyOpenWhatsApp:'Открыть в WhatsApp',historySaved:'Запрос сохранён в истории. Отправку подтвердите в WhatsApp.',historySaveError:'Не удалось сохранить запрос в этом браузере. Проверьте настройки хранилища и попробуйте снова.'});
  Object.assign(text.en, {projectSearch:'Search projects',openMenu:'Open menu',closeMenu:'Close menu',closeDialog:'Close dialog',nameLabel:'First and last name',namePlaceholder:'For example: Aizhan Sadykova',nameError:'Enter your first and last name.',historyTitle:'Request history',historyNote:'Requests are saved only in this browser. The latest five are shown.',historyEmpty:'No saved requests yet.',historyOverflow:'Older requests are hidden but remain in this browser.',historyOpenWhatsApp:'Open in WhatsApp',historySaved:'Request saved here. Confirm sending in WhatsApp.',historySaveError:'Could not save the request in this browser. Check storage settings and try again.'});
  const safeGet = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const safeSet = (key, value) => { try { localStorage.setItem(key, value); return true; } catch { return false; } };
  let lang = safeGet('areket-language') === 'en' ? 'en' : 'ru';
  let projects = [];
  let filter = 'all';
  const t = key => text[lang][key] || key;
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
    renderBriefHistory();
  }
  function applyTheme() {
    const theme = safeGet('areket-theme') === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('.theme-toggle').forEach(el => el.setAttribute('aria-label', lang === 'ru' ? (theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему') : (theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')));
  }
  function escapeHTML(value) { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function readBriefHistory() {
    try {
      const data = JSON.parse(safeGet('areket-brief-history') || '[]');
      return Array.isArray(data) ? data.filter(item => item && typeof item.name === 'string' && typeof item.goal === 'string') : [];
    } catch { return []; }
  }
  function briefWhatsAppUrl(brief) {
    const typeKeys = {website:'typeWebsite',system:'typeSystem',interface:'typeInterface'};
    const timelineKeys = {month:'timelineMonth',quarter:'timelineQuarter',flexible:'timelineFlexible'};
    const budgetKeys = {under500:'budgetUnder500','500to1500':'budget500to1500',above1500:'budgetAbove1500'};
    const lines = [
      `*${lang === 'ru' ? 'Новый запрос с areket.studio' : 'New enquiry from areket.studio'}*`,
      `${t('nameLabel')}: ${brief.name}`,
      brief.company && `${lang === 'ru' ? 'Компания / проект' : 'Company / project'}: ${brief.company}`,
      `${t('typeLabel')}: ${t(typeKeys[brief.type] || 'typeWebsite')}`,
      `${t('goalLabel')}\n${brief.goal}`,
      `${t('audienceLabel')} ${brief.audience}`,
      `${t('featuresLabel')}\n${brief.features}`,
      `${t('timelineLabel')} ${t(timelineKeys[brief.timeline] || 'selectOption')}`,
      brief.budget && budgetKeys[brief.budget] && `${lang === 'ru' ? 'Бюджет' : 'Budget'}: ${t(budgetKeys[brief.budget])}`
    ].filter(Boolean);
    return `https://wa.me/77478032383?text=${encodeURIComponent(lines.join('\n\n'))}`;
  }
  function renderBriefHistory() {
    const target = document.getElementById('brief-history-list');
    if (!target) return;
    const history = readBriefHistory();
    target.innerHTML = history.length ? history.slice(0,5).map(brief => {
      const type = {website:'typeWebsite',system:'typeSystem',interface:'typeInterface'}[brief.type] || 'typeWebsite';
      const timeline = {month:'timelineMonth',quarter:'timelineQuarter',flexible:'timelineFlexible'}[brief.timeline];
      const budget = {under500:'budgetUnder500','500to1500':'budget500to1500',above1500:'budgetAbove1500'}[brief.budget];
      const date = new Date(brief.createdAt);
      const dateText = Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US');
      return `<details class="history-entry"><summary><span><strong>${escapeHTML(brief.name)}</strong><span class="history-entry-type">${escapeHTML(t(type))}</span></span><time>${escapeHTML(dateText)}</time></summary><div class="history-entry-body">${brief.company ? `<p>${escapeHTML(brief.company)}</p>` : ''}<p><b>${escapeHTML(t('goalLabel'))}</b> ${escapeHTML(brief.goal)}</p><p><b>${escapeHTML(t('audienceLabel'))}</b> ${escapeHTML(brief.audience || '')}</p><p><b>${escapeHTML(t('featuresLabel'))}</b> ${escapeHTML(brief.features || '')}</p><p><b>${escapeHTML(t('timelineLabel'))}</b> ${escapeHTML(t(timeline || 'selectOption'))}</p>${budget ? `<p><b>${lang === 'ru' ? 'Бюджет' : 'Budget'}:</b> ${escapeHTML(t(budget))}</p>` : ''}<a href="${briefWhatsAppUrl(brief)}" target="_blank" rel="noopener noreferrer">${escapeHTML(t('historyOpenWhatsApp'))} ↗</a></div></details>`;
    }).join('') + (history.length > 5 ? `<p class="history-overflow">${escapeHTML(t('historyOverflow'))}</p>` : '') : `<p class="history-empty">${escapeHTML(t('historyEmpty'))}</p>`;
  }
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
  function initBrief() {
    if (!$) return;
    $('#brief-form').on('submit', function(event) {
      event.preventDefault();
      const name = $('#brief-name').val().toString().trim();
      const company = $('#brief-company').val().toString().trim();
      const goal = $('#brief-goal').val().toString().trim();
      const audience = $('#brief-audience').val().toString().trim();
      const features = $('#brief-features').val().toString().trim();
      const type = $('input[name="type"]:checked').val();
      const timeline = $('#brief-timeline').val();
      const budget = $('#brief-budget').val();
      const errors = {
        name: name.split(/\s+/).filter(Boolean).length >= 2 ? '' : t('nameError'),
        goal: goal.length >= 20 ? '' : t('goalError'),
        audience: audience.length >= 2 ? '' : t('audienceError'),
        features: features.length >= 10 ? '' : t('featuresError')
      };
      Object.entries(errors).forEach(([key,value]) => { $(`#${key}-error`).text(value); $(`#brief-${key}`).attr('aria-invalid',Boolean(value)); });
      const firstInvalid = Object.keys(errors).find(key => errors[key]);
      if (firstInvalid) { $(`#brief-${firstInvalid}`).trigger('focus'); return; }
      const brief = {name,company,type,goal,audience,features,timeline,budget,createdAt:new Date().toISOString()};
      const history = readBriefHistory();
      if (!safeSet('areket-brief-history',JSON.stringify([brief,...history]))) {
        $('#form-save-error').text(t('historySaveError')).prop('hidden',false);
        return;
      }
      $('#form-save-error').prop('hidden',true);
      renderBriefHistory();
      this.reset();
      window.location.href = briefWhatsAppUrl(brief);
    });
    $('#brief-form input,#brief-form textarea').on('input',function(){ const key = this.name; if (['name','goal','audience','features'].includes(key)) { $(`#${key}-error`).text(''); $(this).removeAttr('aria-invalid'); } });
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
    const loadProjects = location.protocol === 'file:'
      ? Promise.resolve(window.areketProjects)
      : fetch('data/projects.json').then(response => { if (!response.ok) throw Error('projects'); return response.json(); }).catch(() => window.areketProjects);
    loadProjects.then(data => {
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
