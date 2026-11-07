/*
 * Здесь творят красоту — сайт массажиста Левона.
 * Содержимое каталога и курсов синхронизировано с обновлённым прайсом сайта.
 */
const SITE_DATA = {
  specialistName: 'Левон',
  videoSrc: 'assets/welcome-love.mp4',                  // Например: 'assets/intro.mp4'
  portraitSrc: 'assets/levon-portrait.jpg'

};

const services = [
  {
    id: 'back', title: 'Массаж спины', category: 'restoration', categoryLabel: 'ВОССТАНОВЛЕНИЕ',
    duration: 40, price: 4500, teaser: 'Внимание к мышцам спины после длительного сидения и привычной нагрузки.',
    description: 'Локальная процедура, направленная на мягкую проработку мышц спины и создание ощущения расслабления.',
    suitableFor: ['Ощущение скованности после рабочего дня', 'Желание расслабить мышцы спины', 'Предпочтение локальной процедуре'],
    effect: 'Может способствовать временному уменьшению субъективного ощущения напряжения и улучшению общего комфорта.',
    process: 'Перед началом обсуждаются пожелания и интенсивность воздействия. Затем специалист работает с мышцами спины, корректируя давление по обратной связи.'
  },
  {
    id: 'neck', title: 'Шейно-воротниковый массаж', category: 'targeted', categoryLabel: 'ЛОКАЛЬНЫЕ ТЕХНИКИ',
    duration: 30, price: 2500, teaser: 'Короткая практика для зоны плеч и шеи, когда хочется выдохнуть.',
    description: 'Процедура с фокусом на мягкие ткани плечевого пояса и задней поверхности шеи.',
    suitableFor: ['Напряжение в плечах после работы за компьютером', 'Запрос на короткий сеанс', 'Желание уделить внимание верхней части спины'],
    effect: 'Может помочь почувствовать расслабление и временно снизить ощущение мышечной скованности.',
    process: 'Обсуждается комфортное положение тела, после чего используются мягкие техники без резких манипуляций с шеей.'
  },
  {
    id: 'full', title: 'Общий массаж тела', category: 'restoration', categoryLabel: 'ВОССТАНОВЛЕНИЕ',
    duration: 60, price: 5500, teaser: 'Целостная процедура для отдыха, расслабления и ощущения баланса.',
    description: 'Последовательная работа с основными мышечными группами в согласованном с клиентом объёме.',
    suitableFor: ['Потребность в комплексном расслаблении', 'Усталость после повседневной активности', 'Знакомство с классическими техниками'],
    effect: 'Направлен на создание ощущения общего расслабления и телесного комфорта.',
    process: 'Последовательность зон и интенсивность обсуждаются до сеанса. Специалист уточняет ощущения и при необходимости корректирует программу.'
  },
  {
    id: 'relax', title: 'Расслабляющий массаж', category: 'relaxation', categoryLabel: 'РАССЛАБЛЕНИЕ',
    duration: 75, price: 5000, teaser: 'Медленный ритм, плавные движения и время без спешки.',
    description: 'Комфортная процедура с акцентом на спокойный темп, мягкие движения и атмосферу отдыха.',
    suitableFor: ['Желание отдохнуть от повседневной нагрузки', 'Предпочтение деликатного воздействия', 'Потребность выделить время для себя'],
    effect: 'Может способствовать субъективному ощущению спокойствия, отдыха и расслабления.',
    process: 'После короткой беседы выбираются комфортный темп, зоны воздействия и пожелания к давлению.'
  },
  {
    id: 'feet', title: 'Массаж стоп', category: 'relaxation', categoryLabel: 'РАССЛАБЛЕНИЕ',
    duration: 30, price: 2000, teaser: 'Небольшая расслабляющая процедура для стоп после насыщенного дня.',
    description: 'Мягкая локальная процедура с акцентом на стопы и индивидуальные ощущения комфорта.',
    suitableFor: ['Желание уделить внимание стопам', 'Потребность в коротком расслабляющем сеансе', 'Усталость после длительной ходьбы'],
    effect: 'Может способствовать ощущению отдыха и расслабления.',
    process: 'Перед началом уточняются пожелания и ограничения. Продолжительность — ориентировочно 30 минут.'
  }
];

const programs = [
  { id: 'back-course', title: 'Массаж спины', subtitle: 'Курс процедур', itemIds: ['back'], price: 23000, label: 'ЗА КУРС', icon: '✳', description: 'В курс входят горячие камни, БЭМ и ручной точечный массаж. Количество встреч и длительность согласуются перед записью.' },
  { id: 'body-course', title: 'Коррекция фигуры', subtitle: 'Курс процедур', itemIds: [], price: 30000, label: 'ЗА КУРС', icon: '✧', description: 'Комплекс процедур по коррекции фигуры. Содержание и количество сеансов уточняются индивидуально.' },
  { id: 'body-lipo-course', title: 'Коррекция фигуры + Liposonix', subtitle: 'Комбинированный курс', itemIds: [], price: 40000, label: 'ЗА КУРС', icon: '◈', description: 'Курс коррекции фигуры с Liposonix. Состав и возможность сочетания методик обсуждаются заранее.' }
];

const certificates = [
  { id: 'liposonix-training', title: 'Сертификат о прохождении курса по работе на аппарате Liposonix', caption: 'Учебный центр «Бьюти Инструмент» · 28.04.2024', image: 'assets/certificate-liposonix.jpg' }
];

const rubles = price => price == null ? 'По запросу' : new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
let selectedBuilderIds = new Set();
let modalOpener = null;

function openDialog(dialog) {
  if (!dialog) return;
  modalOpener = document.activeElement;
  dialog.showModal();
  document.body.classList.add('modal-open');
}
function closeDialog(dialog) {
  if (!dialog?.open) return;
  dialog.close();
}
function setupDialogs() {
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
      document.body.classList.toggle('modal-open', $$('dialog').some(item => item.open));
      if (dialog.id === 'videoDialog') {
        const video = dialog.querySelector('video');
        video?.pause();
      }
      modalOpener?.focus?.();
    });
    dialog.addEventListener('click', event => {
      if (event.target === dialog) closeDialog(dialog);
    });
  });
  $$('[data-close-dialog]').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
}
function renderServices(filter = 'all') {
  const displayed = services.filter(service => filter === 'all' || service.category === filter);
  $('#servicesGrid').innerHTML = displayed.map((item, index) => `
    <article class="service-card">
      <div class="service-card-top"><span class="service-tag">${item.categoryLabel} / 0${services.indexOf(item) + 1}</span><span class="service-mark" aria-hidden="true">✳</span></div>
      <h3>${item.title}</h3><p>${item.teaser}</p>
      <div class="service-card-bottom"><div class="service-price"><strong>${rubles(item.price)}</strong><span>Ориентировочно ${item.duration} мин</span></div><button class="circle-arrow" type="button" aria-label="Подробнее: ${item.title}" data-service-id="${item.id}">↗</button></div>
    </article>`).join('');
  $$('[data-service-id]').forEach(button => button.addEventListener('click', () => showService(button.dataset.serviceId)));
}
function setupFilters() {
  $$('.filter').forEach(button => button.addEventListener('click', () => {
    $$('.filter').forEach(filter => { filter.classList.remove('is-active'); filter.setAttribute('aria-pressed', 'false'); });
    button.classList.add('is-active');
    button.setAttribute('aria-pressed', 'true');
    renderServices(button.dataset.filter);
  }));
}
function showService(id) {
  const item = services.find(service => service.id === id);
  if (!item) return;
  $('#serviceDialogCategory').textContent = item.categoryLabel;
  $('#serviceDialogTitle').textContent = item.title;
  $('#serviceDialogDuration').textContent = `Ориентировочно ${item.duration} минут`;
  $('#serviceDialogPrice').textContent = rubles(item.price);
  $('#serviceDialogDescription').textContent = item.description;
  $('#serviceDialogFor').replaceChildren(...item.suitableFor.map(value => {const li = document.createElement('li'); li.textContent = value; return li;}));
  $('#serviceDialogEffect').textContent = item.effect;
  $('#serviceDialogProcess').textContent = item.process;
  openDialog($('#serviceDialog'));
}
function renderPrograms() {
  $('#programGrid').innerHTML = programs.map((program, index) => `
    <article class="program-card"><div class="program-card-top"><span>КУРС ПРОЦЕДУР / 0${index + 1}</span><span class="program-icon" aria-hidden="true">${program.icon}</span></div><div class="program-card-main"><span class="micro-label">${program.subtitle.toUpperCase()}</span><h3>${program.title}</h3><p>${program.description}</p></div><div class="program-card-bottom"><div><strong>${rubles(program.price)}</strong><small>${program.label}</small></div><button class="program-link" type="button" data-program-id="${program.id}">Выбрать <span aria-hidden="true">↗</span></button></div></article>`).join('');
  $$('[data-program-id]').forEach(button => button.addEventListener('click', scrollToContacts));
}
function renderBuilder() {
  $('#builderOptions').innerHTML = services.map(service => `
    <label class="builder-option"><input type="checkbox" value="${service.id}" aria-label="Включить ${service.title}"><span class="builder-option-text"><span>${service.title}</span><small>${rubles(service.price)} · ~${service.duration} мин</small></span></label>`).join('');
  $$('#builderOptions input').forEach(input => input.addEventListener('change', () => {
    if (input.checked) selectedBuilderIds.add(input.value); else selectedBuilderIds.delete(input.value);
    updateBuilder();
  }));
  $('#builderBook').addEventListener('click', scrollToContacts);
  updateBuilder();
}
function updateBuilder() {
  const selected = services.filter(service => selectedBuilderIds.has(service.id));
  $('#builderTotal').textContent = selected.length && selected.every(service => service.price != null) ? rubles(selected.reduce((sum, service) => sum + service.price, 0)) : 'По запросу';
  $('#builderCount').textContent = selected.length ? `${selected.length} ${pluralProcedures(selected.length)} · ${selected.reduce((sum, service) => sum + service.duration, 0)} мин суммарно` : 'Выберите процедуры';
  $('#builderBook').disabled = selected.length === 0;
}
function pluralProcedures(number) { return number % 10 === 1 && number % 100 !== 11 ? 'процедура' : [2,3,4].includes(number % 10) && ![12,13,14].includes(number % 100) ? 'процедуры' : 'процедур'; }
function renderCredentials() {
  const container = $('#certDialogContent');
  if (!container) return;
  container.innerHTML = `
    <span class="micro-label">ОБУЧЕНИЕ И ДОКУМЕНТЫ</span>
    <h2 id="certDialogTitle">Сертификат и документы</h2>
    <p class="cert-modal-lead">Здесь собраны подтверждение обучения мастера и отдельные документы на аппарат Liposonix.</p>
    <article class="cert-modal-card">
      <div class="cert-modal-heading"><div><span class="micro-label">СЕРТИФИКАТ МАСТЕРА</span><h3>${certificates[0].title}</h3><p>${certificates[0].caption}</p></div></div>
      <div class="cert-modal-image-wrap"><img src="${certificates[0].image}" alt="${certificates[0].title}"></div>
    </article>
    <article class="equipment-doc-card">
      <div><span class="micro-label">ДОКУМЕНТЫ НА ОБОРУДОВАНИЕ</span><h3>Документы соответствия аппарата Liposonix</h3><p>Декларация о соответствии, сертификат соответствия и приложение к нему. Это документы на оборудование, а не диплом о квалификации мастера.</p></div>
      <a class="btn btn-outline" href="assets/liposonix-equipment-documents.pdf" target="_blank" rel="noopener noreferrer">Открыть PDF · 3 страницы ↗</a>
    </article>`;
}
function setupCredentials() {
  const dialog = $('#certDialog');
  const open = () => openDialog(dialog);
  $('#openCredentials')?.addEventListener('click', open);
  $('#openCredentialsPreview')?.addEventListener('click', open);
}
function scrollToContacts() {
  const openedDialog = $$('dialog').find(dialog => dialog.open);
  if (openedDialog) closeDialog(openedDialog);
  $('#contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function setupBooking() {
  $$('[data-book]').forEach(button => button.addEventListener('click', scrollToContacts));
  $('#serviceDialogBook')?.addEventListener('click', scrollToContacts);
}

function setupVideo() {
  const heroVideo = $('#heroVideoFile');
  if (SITE_DATA.videoSrc) {
    heroVideo.src = SITE_DATA.videoSrc;
    heroVideo.hidden = false;
    $('.hero-video-background').hidden = true;
    $('.hero-media-caption').querySelector('strong').innerHTML = 'Нажмите ▶<br>для просмотра со звуком';
    heroVideo.play().catch(() => {});
  }
  $$('[data-video-open]').forEach(button => button.addEventListener('click', () => {
    const content = $('#videoDialogContent');
    if (SITE_DATA.videoSrc) {
      content.replaceChildren();
      const label = document.createElement('span'); label.className = 'micro-label'; label.textContent = 'ЗДЕСЬ ТВОРЯТ КРАСОТУ';
      const video = document.createElement('video'); video.src = SITE_DATA.videoSrc; video.controls = true; video.autoplay = true; video.playsInline = true; video.poster = 'assets/welcome-master-scene.jpg'; video.volume = 0.6;
      const title = document.createElement('h2'); title.id = 'videoDialogTitle'; title.textContent = 'Массаж — это про любовь к себе';
      content.append(label, title, video);
    }
    openDialog($('#videoDialog'));
  }));
}
function setupProfileAndContacts() {
  const specialist = $('.specialist-name');
  if (specialist) specialist.firstChild.textContent = SITE_DATA.specialistName + ' ';
  if (SITE_DATA.portraitSrc) {
    const portrait = $('.portrait-frame');
    const img = portrait?.querySelector('.master-portrait-img');
    if (img && img.getAttribute('src') !== SITE_DATA.portraitSrc) img.src = SITE_DATA.portraitSrc;
    $('.portrait-placeholder')?.setAttribute('hidden', '');
  }
}

function setupMobileMenu() {
  const button = $('#menuToggle'), menu = $('#mobileMenu');
  function closeMenu() { button.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.setAttribute('aria-label','Открыть меню'); menu.hidden = true; }
  button.addEventListener('click', () => { const opening = menu.hidden; menu.hidden = !opening; button.classList.toggle('open',opening); button.setAttribute('aria-expanded',String(opening)); button.setAttribute('aria-label',opening?'Закрыть меню':'Открыть меню'); });
  menu.querySelectorAll('a,button').forEach(item => item.addEventListener('click', closeMenu));
  window.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 980 && !menu.hidden) closeMenu(); });
}
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  setupDialogs();
  setupMobileMenu();
  setupFilters();
  renderServices();
  renderPrograms();
  renderBuilder();
  setupBooking();
  renderCredentials();
  setupCredentials();
  setupVideo();
  setupProfileAndContacts();
});
