/*
 * Здесь творят красоту — сайт массажиста Левона.
 * НАСТРОЙКИ: заполните SITE_DATA, замените массивы services / programs / certificates.
 * Указанные цены 5 000 / 7 000 / 23 000 / 30 000 / 40 000 ₽ получены от владельца; другие расценки уточняются.
 */
const SITE_DATA = {
  specialistName: 'Левон',
  videoSrc: 'assets/welcome-love.mp4',                  // Например: 'assets/intro.mp4'
  portraitSrc: 'assets/levon-portrait.jpg',               // Например: 'assets/specialist.jpg'
  phone: '',                     // Например: '+7 999 123-45-67'
  email: '',                     // Например: 'hello@example.ru'
  messengerLabel: '',           // Например: 'Telegram'
  messengerUrl: '',             // Например: 'https://t.me/yourname'
  primaryAddress: '',
  secondaryAddress: '',
  hours: '',                     // Например: 'Пн–Сб, 10:00–20:00'
  mapEmbedUrl: ''                // Только готовый URL для встраивания карты
};

const services = [
  {
    id: 'back', title: 'Массаж спины', category: 'restoration', categoryLabel: 'ВОССТАНОВЛЕНИЕ',
    duration: 40, price: null, teaser: 'Внимание к мышцам спины после длительного сидения и привычной нагрузки.',
    description: 'Локальная процедура, направленная на мягкую проработку мышц спины и создание ощущения расслабления.',
    suitableFor: ['Ощущение скованности после рабочего дня', 'Желание расслабить мышцы спины', 'Предпочтение локальной процедуре'],
    effect: 'Может способствовать временному уменьшению субъективного ощущения напряжения и улучшению общего комфорта.',
    process: 'Перед началом обсуждаются пожелания и интенсивность воздействия. Затем специалист работает с мышцами спины, корректируя давление по обратной связи.'
  },
  {
    id: 'neck', title: 'Шейно-воротниковая зона', category: 'targeted', categoryLabel: 'ЛОКАЛЬНЫЕ ТЕХНИКИ',
    duration: 30, price: null, teaser: 'Короткая практика для зоны плеч и шеи, когда хочется выдохнуть.',
    description: 'Процедура с фокусом на мягкие ткани плечевого пояса и задней поверхности шеи.',
    suitableFor: ['Напряжение в плечах после работы за компьютером', 'Запрос на короткий сеанс', 'Желание уделить внимание верхней части спины'],
    effect: 'Может помочь почувствовать расслабление и временно снизить ощущение мышечной скованности.',
    process: 'Обсуждается комфортное положение тела, после чего используются мягкие техники без резких манипуляций с шеей.'
  },
  {
    id: 'full', title: 'Общий массаж тела', category: 'restoration', categoryLabel: 'ВОССТАНОВЛЕНИЕ',
    duration: 60, price: 7000, teaser: 'Целостная процедура для отдыха, расслабления и ощущения баланса.',
    description: 'Последовательная работа с основными мышечными группами в согласованном с клиентом объёме.',
    suitableFor: ['Потребность в комплексном расслаблении', 'Усталость после повседневной активности', 'Знакомство с классическими техниками'],
    effect: 'Направлен на создание ощущения общего расслабления и телесного комфорта.',
    process: 'Последовательность зон и интенсивность обсуждаются до сеанса. Специалист уточняет ощущения и при необходимости корректирует программу.'
  },
  {
    id: 'relax', title: 'Расслабляющий массаж', category: 'relaxation', categoryLabel: 'РАССЛАБЛЕНИЕ',
    duration: 75, price: null, teaser: 'Медленный ритм, плавные движения и время без спешки.',
    description: 'Комфортная процедура с акцентом на спокойный темп, мягкие движения и атмосферу отдыха.',
    suitableFor: ['Желание отдохнуть от повседневной нагрузки', 'Предпочтение деликатного воздействия', 'Потребность выделить время для себя'],
    effect: 'Может способствовать субъективному ощущению спокойствия, отдыха и расслабления.',
    process: 'После короткой беседы выбираются комфортный темп, зоны воздействия и пожелания к давлению.'
  },
  {
    id: 'feet', title: 'Массаж ног', category: 'targeted', categoryLabel: 'ЛОКАЛЬНЫЕ ТЕХНИКИ',
    duration: 30, price: null, teaser: 'Внимание к ногам после прогулок, тренировок и насыщенного дня.',
    description: 'Локальная процедура для мышц ног с учётом уровня активности и индивидуального комфорта.',
    suitableFor: ['Ощущение усталости ног', 'Активный образ жизни', 'Предпочтение локального массажа'],
    effect: 'Может дарить ощущение отдыха и временного уменьшения субъективного мышечного напряжения.',
    process: 'Уточняются ограничения и пожелания, затем проводится массаж согласованных зон с комфортной интенсивностью.'
  },
  {
    id: 'head', title: 'Массаж головы', category: 'relaxation', categoryLabel: 'РАССЛАБЛЕНИЕ',
    duration: 30, price: null, teaser: 'Мягкая практика, позволяющая отвлечься и переключить внимание.',
    description: 'Неспешные мягкие техники в области волосистой части головы и по согласованию прилегающих зон.',
    suitableFor: ['Запрос на мягкий расслабляющий сеанс', 'Желание восстановить ощущение спокойствия', 'Небольшой перерыв в насыщенном расписании'],
    effect: 'Может способствовать ощущению расслабления и отдыха; не предназначен для лечения головной боли или иных заболеваний.',
    process: 'Обсуждаются комфортное положение и особенности чувствительности. Процедура проводится без болезненного воздействия.'
  }
];

const programs = [
  { id: 'back-course', title: 'Массаж спины', subtitle: 'Курс процедур', itemIds: ['back'], price: 23000, label: 'ЗА КУРС', icon: '✳', description: 'Курс с акцентом на область спины. Количество встреч и длительность согласуются перед записью.' },
  { id: 'body-course', title: 'Коррекция фигуры', subtitle: 'Курс процедур', itemIds: [], price: 30000, label: 'ЗА КУРС', icon: '✧', description: 'Комплекс процедур по коррекции фигуры. Содержание и количество сеансов уточняются индивидуально.' },
  { id: 'body-lipo-course', title: 'Коррекция фигуры + Liposonix', subtitle: 'Комбинированный курс', itemIds: [], price: 40000, label: 'ЗА КУРС', icon: '◈', description: 'Курс коррекции фигуры с Liposonix. Состав и возможность сочетания методик обсуждаются заранее.' }
];

const certificates = [
  { id: 'cert1', title: 'Основное образование', caption: 'Диплом · документ для добавления', year: '01', image: '' },
  { id: 'cert2', title: 'Профессиональная подготовка', caption: 'Сертификат · документ для добавления', year: '02', image: '' },
  { id: 'cert3', title: 'Дополнительное обучение', caption: 'Удостоверение · документ для добавления', year: '03', image: '' }
];

const rubles = price => price == null ? 'По запросу' : new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const toDateLocal = date => [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
let selectedBuilderIds = new Set();
let activeServiceId = '';
let toastTimeout;
let modalOpener = null;

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 3800);
}
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
  activeServiceId = id;
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
  $$('[data-program-id]').forEach(button => button.addEventListener('click', () => openBooking('program:' + button.dataset.programId)));
}
function renderBuilder() {
  $('#builderOptions').innerHTML = services.map(service => `
    <label class="builder-option"><input type="checkbox" value="${service.id}" aria-label="Включить ${service.title}"><span class="builder-option-text"><span>${service.title}</span><small>${rubles(service.price)} · ~${service.duration} мин</small></span></label>`).join('');
  $$('#builderOptions input').forEach(input => input.addEventListener('change', () => {
    if (input.checked) selectedBuilderIds.add(input.value); else selectedBuilderIds.delete(input.value);
    updateBuilder();
  }));
  $('#builderBook').addEventListener('click', () => {
    if (selectedBuilderIds.size) openBooking('custom');
  });
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
  $('#credentialsGrid').innerHTML = certificates.map(cert => `
    <button class="cert-card" type="button" data-cert-id="${cert.id}" aria-label="Рассмотреть: ${cert.title}">
      <div class="cert-preview">${cert.image ? `<img src="${cert.image}" alt="${cert.title}" loading="lazy">` : `<div class="cert-paper"><span class="cert-sun" aria-hidden="true">✳</span><span class="cert-line"></span><span class="cert-label">Место для диплома</span><span class="cert-line short"></span></div>`}<span class="cert-zoom" aria-hidden="true">↗</span></div>
      <div class="cert-info"><div><h3>${cert.title}</h3><p>${cert.caption}</p></div><span>${cert.year}</span></div>
    </button>`).join('');
  $$('[data-cert-id]').forEach(button => button.addEventListener('click', () => showCertificate(button.dataset.certId)));
}
function showCertificate(id) {
  const cert = certificates.find(item => item.id === id);
  if (!cert) return;
  const container = $('#certDialogContent');
  container.replaceChildren();
  const title = document.createElement('h2'); title.id = 'certDialogTitle'; title.textContent = cert.title;
  const description = document.createElement('p'); description.textContent = cert.image ? cert.caption : 'Это место подготовлено для фотографии настоящего диплома или сертификата. После добавления файла он откроется здесь в крупном размере.';
  container.append(title, description);
  if (cert.image) { const image = document.createElement('img'); image.src = cert.image; image.alt = cert.title; container.append(image); }
  else { const paper = document.createElement('div'); paper.className = 'cert-paper'; paper.innerHTML = '<span class="cert-sun" aria-hidden="true">✳</span><span class="cert-line"></span><span class="cert-label">Документ появится здесь</span><span class="cert-line short"></span>'; container.append(paper); }
  openDialog($('#certDialog'));
}
function setupBooking() {
  const selector = $('#bookingService');
  services.forEach(service => selector.add(new Option(`${service.title} · ${service.duration} мин${service.price != null ? ' · ' + rubles(service.price) : ''}`, 'service:' + service.id)));
  programs.forEach(program => selector.add(new Option(`Курс «${program.title}» · ${rubles(program.price)}`, 'program:' + program.id)));
  selector.add(new Option('Разовое посещение · 5 000 ₽', 'price:single'));
  selector.add(new Option('Прессотерапия', 'service:pressotherapy'));
  selector.add(new Option('Liposonix — аппаратная коррекция', 'service:liposonix'));
  selector.add(new Option('Подарочный сертификат на массаж', 'gift'));
  selector.add(new Option('Мой комплекс · выбранные процедуры', 'custom'));
  $('#bookingDate').min = toDateLocal(new Date());
  $$('[data-book]').forEach(button => button.addEventListener('click', () => openBooking(button.dataset.choice || '')));
  $('#serviceDialogBook').addEventListener('click', () => { closeDialog($('#serviceDialog')); setTimeout(() => openBooking('service:' + activeServiceId), 70); });
  $('#bookingForm').addEventListener('submit', async event => {
    event.preventDefault();
    const contact = $('#bookingContact').value.trim();
    const name = $('#bookingName').value.trim();
    if (!contact || !name || !$('#bookingConsent').checked) { showToast('Укажите имя, контакт и подтвердите согласие.'); return; }
    const rawChoice = selector.value;
    let serviceName = selector.selectedOptions[0]?.textContent || 'Помогите с выбором';
    if (rawChoice === 'custom') {
      const selected = services.filter(service => selectedBuilderIds.has(service.id));
      serviceName = selected.length ? `Мой комплекс: ${selected.map(service => service.title).join(', ')} (стоимость уточняется)` : 'Помогите подобрать комплекс';
    }
    const date = $('#bookingDate').value ? $('#bookingDate').value.split('-').reverse().join('.') : 'обсудим';
    const note = $('#bookingComment').value.trim() || 'нет';
    const message = `Здравствуйте, Левон! Хочу уточнить возможность записи / оформления сертификата.\n\nИмя: ${name}\nКонтакт: ${contact}\nУслуга: ${serviceName}\nДата: ${date}\nВремя: ${$('#bookingTime').value || 'обсудим'}\nПожелания: ${note}\n\nПодскажите, пожалуйста, доступное время и детали выбранной услуги или курса.`;
    $('#bookingGenerated').value = message;
    $('#bookingOutput').hidden = false;
    const copied = await copyText(message);
    showToast(copied ? 'Запрос скопирован. Отправьте его специалисту через выбранный канал связи.' : 'Текст запроса готов ниже — выделите и скопируйте его.');
    $('#bookingOutput').scrollIntoView({behavior:'smooth',block:'nearest'});
  });
  $('#copyAgain').addEventListener('click', async () => showToast(await copyText($('#bookingGenerated').value) ? 'Текст запроса скопирован.' : 'Выделите текст и скопируйте вручную.'));
}
async function copyText(message) {
  try {
    if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(message); return true; }
  } catch (error) { /* Fallback to selection below. */ }
  const field = $('#bookingGenerated');
  field.focus(); field.select();
  try { return document.execCommand('copy'); } catch (error) { return false; }
}
function openBooking(choice) {
  const form = $('#bookingForm');
  $('#bookingOutput').hidden = true;
  $('#bookingGenerated').value = '';
  $('#bookingService').value = choice || '';
  if ($('#bookingService').selectedIndex < 0) $('#bookingService').value = '';
  openDialog($('#bookingDialog'));
  setTimeout(() => $('#bookingName').focus(), 50);
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
      const video = document.createElement('video'); video.src = SITE_DATA.videoSrc; video.controls = true; video.autoplay = true; video.playsInline = true; video.poster = 'assets/welcome-poster.jpg'; video.volume = 0.6;
      const title = document.createElement('h2'); title.id = 'videoDialogTitle'; title.textContent = 'Массаж — это про любовь к себе';
      content.append(label, title, video);
    }
    openDialog($('#videoDialog'));
  }));
}
function setupProfileAndContacts() {
  $('.specialist-name').firstChild.textContent = SITE_DATA.specialistName + ' ';
  if (SITE_DATA.portraitSrc) {
    const portrait = $('.portrait-frame');
    let img = portrait.querySelector('.master-portrait-img');
    if (!img) {
      img = document.createElement('img');
      img.className = 'master-portrait-img';
      img.alt = 'Левон — мастер массажа';
      portrait.prepend(img);
    }
    if (img.getAttribute('src') !== SITE_DATA.portraitSrc) img.src = SITE_DATA.portraitSrc;
    $('.portrait-placeholder').hidden = true;
  }
  if (SITE_DATA.phone) {
    $('#phoneDisplay').textContent = '';
    const phone = document.createElement('a'); phone.href = 'tel:' + SITE_DATA.phone.replace(/[^+\d]/g,''); phone.textContent = SITE_DATA.phone;
    $('#phoneDisplay').append(phone);
  }
  if (SITE_DATA.email) {
    $('#emailDisplay').textContent = '';
    const email = document.createElement('a'); email.href = 'mailto:' + SITE_DATA.email; email.textContent = SITE_DATA.email;
    $('#emailDisplay').append(email);
  }
  if (SITE_DATA.messengerUrl) {
    $('#messengerDisplay').textContent = '';
    const messenger = document.createElement('a'); messenger.href = SITE_DATA.messengerUrl;
    messenger.textContent = SITE_DATA.messengerLabel || 'Написать'; messenger.target = '_blank'; messenger.rel = 'noopener noreferrer';
    $('#messengerDisplay').append(messenger);
  }
  const addressLabels = $$('.contact-card:first-child .placeholder-text');
  if (SITE_DATA.primaryAddress) addressLabels[0].textContent = SITE_DATA.primaryAddress;
  if (SITE_DATA.secondaryAddress) addressLabels[1].textContent = SITE_DATA.secondaryAddress;
  if (SITE_DATA.hours) $('#hoursDisplay').textContent = SITE_DATA.hours;
  if (SITE_DATA.mapEmbedUrl) {
    const map = $('.map-placeholder');
    if (!map) return;
    const frame = document.createElement('iframe');
    frame.src = SITE_DATA.mapEmbedUrl; frame.title = 'Карта расположения массажного кабинета'; frame.loading = 'lazy';
    frame.referrerPolicy = 'no-referrer-when-downgrade';
    Object.assign(frame.style,{position:'absolute',inset:'0',width:'100%',height:'100%',border:'0',zIndex:'2'});
    map.append(frame);
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
function setupFaq() {
  $$('.faq-list details').forEach(item => item.addEventListener('toggle', () => { if (!item.open) return; $$('.faq-list details').forEach(other => { if (other !== item) other.open = false; }); }));
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
  setupVideo();
  setupProfileAndContacts();
  setupFaq();
});
