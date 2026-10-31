/* =====================================================
   НАЛАШТУВАННЯ — усе, що варто змінити під себе, тут
   ===================================================== */

const CONFIG = {
  // Лічильники днів на головній (дата у форматі РРРР-ММ-ДД). showCounters: true — показати
  showCounters: false,
  counters: [
    { since: '2022-08-03', label: 'днів від першої зустрічі' },
    { since: '2022-09-11', label: 'днів від першого поцілунку і не тільки 😏' },
    { since: '2022-12-10', label: 'днів разом, і мені досі мало' },
  ],
};

// Фото галереї. Щоб додати нове — поклади файл у папку photos/ і додай рядок.
// caption — підпис-спогад, показується при перегляді фото (можна лишити порожнім).
const PHOTOS = [
  { src: 'photos/13.jpg', caption: '' },
  { src: 'photos/09.jpg', caption: '' },
  { src: 'photos/01.jpg', caption: '' },
  { src: 'photos/08.jpg', caption: '' },
  { src: 'photos/15.jpg', caption: '' },
  { src: 'photos/07.jpg', caption: '' },
  { src: 'photos/03.jpg', caption: '' },
  { src: 'photos/16.jpg', caption: '' },
  { src: 'photos/10.jpg', caption: '' },
  { src: 'photos/19.jpg', caption: '' },
  { src: 'photos/06.jpg', caption: '' },
  { src: 'photos/05.jpg', caption: '' },
  { src: 'photos/02.jpg', caption: '' },
  { src: 'photos/18.jpg', caption: '' },
  { src: 'photos/14.jpg', caption: '' },
  { src: 'photos/12.jpg', caption: '' },
  { src: 'photos/20.jpg', caption: '' },
  { src: 'photos/04.jpg', caption: '' },
  { src: 'photos/17.jpg', caption: '' },
  { src: 'photos/11.jpg', caption: '' },
];

// Зізнання: кожне починається з REASON_PREFIX
const REASON_PREFIX = 'Кохаю тебе і обожнюю';
const REASONS = [
  'твій сміх',
  'твої кучері',
  'твої очі',
  'твій носик',
  'твоє вміння бути поруч',
  'твою глибину',
  'як ти мене кохаєш',
  'твою справжність',
  'всю тебе',
];

// Чернетка листа — кожен рядок масиву окремий абзац
const LETTER = {
  greeting: 'Коханнячко,',
  paragraphs: [
    'З тобою мені легко, смішно і тепло. Ти найкраща на світі, і я досі трохи в шоці, що мені так пощастило)',
    'Цей сайт тепер твій пульт від наших побачень. Я придумав трохи різних + ти можеш згенерувати рандомні чи додати свої.',
    'Кохаю тебе дуже сильно, кохання моє найбільше на світі.',
  ],
  signature: 'Твій 💗',
};

// Сезони за місяцями. Сайт показує лише побачення поточного сезону + ті, що підходять завжди.
const SEASONS = {
  winter: { icon: '❄️', label: 'зима', title: 'Зима' },
  spring: { icon: '🌷', label: 'весна', title: 'Весна' },
  summer: { icon: '☀️', label: 'літо', title: 'Літо' },
  autumn: { icon: '🍂', label: 'осінь', title: 'Осінь' },
};

function currentSeason(date = new Date()) {
  const m = date.getMonth();
  if (m === 11 || m <= 1) return 'winter';
  if (m <= 4) return 'spring';
  if (m <= 7) return 'summer';
  return 'autumn';
}

// group: 'season' — сезонні (seasons: у які сезони доречне), 'home' — будь-коли, 'food' — кухні світу
const DATES = [
  // ----- Сезонні -----
  {
    group: 'season', seasons: ['autumn'], emoji: '🍂', title: 'Осіннє фотополювання',
    short: 'Гуляємо і фоткаємо одне одного)',
    bring: ['Телефон із вільною пам’яттю', 'Теплий шарф', 'Термос із какао'],
  },
  {
    group: 'season', seasons: ['autumn'], emoji: '🌲', title: 'Ліс із термосом',
    short: 'Йдемо в ліс з чайком',
    bring: ['Зручне взуття', 'Термос із чаєм', 'Бутерброди'],
  },
  {
    group: 'season', seasons: ['autumn'], emoji: '🥧', title: 'Печемо яблучний пиріг',
    short: 'Печемо пиріг, трохи бруднимось)',
    bring: ['Яблука й кориця', 'Рецепт (бабусин або з ютуба)', 'Морозиво до теплого пирога'],
  },
  {
    group: 'season', seasons: ['autumn'], emoji: '☔', title: 'Кав’ярні під дощем',
    short: 'Ховаємось від дощу в кав’ярнях',
    bring: ['Одна парасолька на двох', 'Список 3 нових кав’ярень', 'Апетит на десерти'],
  },
  {
    group: 'season', seasons: ['autumn', 'winter'], emoji: '🍷', title: 'Глінтвейн біля озера',
    short: 'Гріємось глінтвейном біля озера',
    bring: ['Теплі рукавички', 'Глінтвейн із собою', 'Одні навушники на двох'],
  },
  {
    group: 'season', seasons: ['autumn', 'winter'], emoji: '♨️', title: 'Чани або спа',
    short: 'Просто валяємось у гарячій воді',
    bring: ['Купальники', 'Халати й капці', 'Нуль планів на вечір'],
  },
  {
    group: 'season', seasons: ['winter'], emoji: '⛸️', title: 'Ковзанка',
    short: 'Катаємось, падаємо і сміємось',
    bring: ['Теплі шкарпетки', 'Рукавички', 'Какао після катання'],
  },
  {
    group: 'season', seasons: ['winter'], emoji: '☃️', title: 'Сніжні забави',
    short: 'Ліпимо сніговика і бісимось)',
    bring: ['Непромокальні рукавиці', 'Сухі шкарпетки на потім', 'Чайок після прогулянки'],
  },
  {
    group: 'season', seasons: ['winter'], emoji: '🛷', title: 'Санки з гірки',
    short: 'Летимо з гірки на санках',
    bring: ['Санки або «ватрушка»', 'Теплі штани', 'Термос із чаєм'],
  },
  {
    group: 'season', seasons: ['spring'], emoji: '🌸', title: 'Квітучий ботсад',
    short: 'Гуляємо серед квітів у ботсаду',
    bring: ['Фотоапарат або телефон', 'Легка куртка', 'Кава з собою'],
  },
  {
    group: 'season', seasons: ['spring', 'summer'], emoji: '🧺', title: 'Пікнік у парку',
    short: 'Плед, смаколики і сонечко',
    bring: ['Плед і кошик', 'Полуниця, сир, лимонад', 'Книжка'],
  },
  {
    group: 'season', seasons: ['spring', 'summer'], emoji: '🚲', title: 'Велопрогулянка',
    short: 'Катаємось і заїжджаємо на каву',
    bring: ['Велосипеди або прокат', 'Маршрут із 3–4 новими кав’ярнями', 'Зручне взуття'],
  },
  {
    group: 'season', seasons: ['spring', 'summer'], emoji: '🛼', title: 'Ролики біля озера',
    short: 'Катаємось на роликах біля озера',
    bring: ['Ролики або прокат', 'Захист на коліна', 'Морозиво після'],
  },
  {
    group: 'season', seasons: ['summer'], emoji: '🌅', title: 'Зустріч світанку',
    short: 'Встаємо рано, дивимось світанок',
    bring: ['Термос із кавою', 'Плед', 'Будильник, якому ми пробачимо'],
  },
  {
    group: 'season', seasons: ['summer'], emoji: '✨', title: 'Зоряна ніч',
    short: 'Лежимо і дивимось на зорі',
    bring: ['Плед і ліхтарики', 'Застосунок для зірок', 'Чай у термосі'],
  },
  {
    group: 'season', seasons: ['summer'], emoji: '🌇', title: 'Захід сонця біля води',
    short: 'Сидимо біля води на заході',
    bring: ['Плед', 'Щось смачне попити', 'Колонка з музикою'],
  },

  // ----- Будь-коли -----
  {
    group: 'home', emoji: '🎬', title: 'Кіновечір під пледом',
    short: 'Плед, попкорн і фільмик)',
    bring: ['Плед і всі подушки в домі', 'Попкорн і щось солодке', 'Фільм із нашого кіносписку'],
    movies: true,
  },
  {
    group: 'home', emoji: '🍳', title: 'Готуємо разом',
    short: 'Готуємо щось нове разом',
    bring: ['Новий рецепт', 'Свічки і гарний посуд', 'Плейлист для готування'],
  },
  {
    group: 'home', emoji: '🎨', title: 'Творчий вечір',
    short: 'Малюємо, ліпимо, творимо дичину)',
    bring: ['Фарби, пензлі або майстер-клас', 'Фартухи', 'Готовність сміятися з результату'],
  },
  {
    group: 'home', emoji: '🏓', title: 'Падел',
    short: 'Вчимося грати в падел разом',
    bring: ['Спортивна форма й кросівки', 'Вода', 'Бронь корту'],
  },
  {
    group: 'home', emoji: '🎾', title: 'Теніс',
    short: 'Ганяємо м’ячик по корту',
    bring: ['Спортивна форма', 'Ракетки (можна взяти в оренду)', 'Бронь корту'],
  },
  {
    group: 'home', emoji: '🥁', title: 'Гра на барабанах',
    short: 'Рєпка вже давно чекає',
    bring: ['Запис на пробний урок', 'Зручний одяг', 'Беруші, якщо що'],
  },
  {
    group: 'home', emoji: '🧗', title: 'Скелелазання',
    short: 'Лізем на стіну і страхуємо',
    bring: ['Спортивний одяг', 'Скельники (є в прокаті)', 'Інструктаж на початку'],
  },
  {
    group: 'home', emoji: '🎁', title: 'Побачення-сюрприз',
    short: 'Нічого не скажу, сюрприз)',
    bring: ['Довіра 😉', 'Гарний настрій', 'Решту я беру на себе'],
  },

  // ----- Смакуємо світ -----
  {
    group: 'food', emoji: '🍙', title: 'Японська кухня',
    short: 'Рамен, роли, моті',
    listTitle: 'Що замовляємо', bring: ['Рамен', 'Роли з авокадо й огірком', 'Моті на десерт'],
  },
  {
    group: 'food', emoji: '🍛', title: 'Індійська кухня',
    short: 'Палак панір, наан і ласі',
    listTitle: 'Що замовляємо', bring: ['Палак панір або дал', 'Часниковий наан', 'Манго ласі'],
  },
  {
    group: 'food', emoji: '🥟', title: 'Грузинська кухня',
    short: 'Хачапурі і сирні хінкалі)',
    listTitle: 'Що замовляємо', bring: ['Хінкалі з сиром або грибами', 'Хачапурі по-аджарськи', 'Пхалі'],
  },
  {
    group: 'food', emoji: '🍝', title: 'Італійська кухня',
    short: 'Паста, піца і тірамісу',
    listTitle: 'Що замовляємо', bring: ['Паста з песто', 'Маргарита з печі', 'Тірамісу'],
  },
  {
    group: 'food', emoji: '🥙', title: 'Кримськотатарська кухня',
    short: 'Янтики з сиром і пахлава',
    listTitle: 'Що замовляємо', bring: ['Янтики з сиром', 'Чебуреки з картоплею', 'Пахлава і кава'],
  },
  {
    group: 'food', emoji: '🥣', title: 'Українська кухня',
    short: 'Пісний борщик і вареники',
    listTitle: 'Що замовляємо', bring: ['Пісний борщ із пампушками', 'Вареники з картоплею і грибами', 'Наливка на спробу'],
  },
  {
    group: 'food', emoji: '🍜', title: 'Паназійська кухня',
    short: 'Том ям з тофу, бао',
    listTitle: 'Що замовляємо', bring: ['Том ям з тофу і грибами', 'Бао з овочами', 'Пад тай з тофу'],
  },
  {
    group: 'food', emoji: '🥯', title: 'Єврейська кухня',
    short: 'Хумус, фалафель і шакшука',
    listTitle: 'Що замовляємо', bring: ['Хумус', 'Фалафель', 'Шакшука'],
  },
];

// Генератор нових побачень: склеює випадкові «що робимо» + «умова» + «фінал».
// Сезонні варіанти теж беруться лише для поточного сезону.
const GENERATOR = {
  activities: {
    all: [
      ['🛍️', 'Блошиний ринок і вінтаж'],
      ['🎤', 'Караоке до хрипоти'],
      ['😂', 'Вечір стендапу'],
      ['💃', 'Пробний урок сальси'],
      ['🖼️', 'Музей або виставка'],
      ['🚋', 'Трамваєм до кінцевої'],
      ['☕', 'Пошук найкращого капучино в місті'],
      ['📸', 'Фотобудка й плівковий фотоапарат'],
      ['🍕', 'Піца власноруч удома'],
      ['🧩', 'Пазл на 1000 деталей'],
    ],
    autumn: [['🍁', 'Прогулянка осіннім парком'], ['📚', 'Книгарня і какао']],
    winter: [['🧤', 'Вечірня прогулянка під снігом'], ['🍫', 'Гаряча чоколяда в новій кав’ярні']],
    spring: [['🌷', 'Купуємо квіти одне одному'], ['🪁', 'Запускаємо повітряного змія']],
    summer: [['🏄', 'Сапи або каяки'], ['🍦', 'Тур найкращим морозивом міста']],
  },
  twists: [
    'без телефонів',
    'у рожевому дрес-коді',
    'по черзі обираємо кожен наступний крок',
    'бюджет до 500 грн на двох',
    'з таємним подарунком до 100 грн',
    'фоткаємо одне одного як для журналу',
    'кожен вигадує одне бажання',
    'тільки там, де ми ще не були',
  ],
  finales: [
    'десерт у новому місці',
    'танець на кухні',
    'обійми під пледом',
    'оцінка побачення за 10-бальною',
    'фото на пам’ять',
    'морозиво за будь-якої погоди',
  ],
};

// tag: 'our' — фільми, які ми хотіли глянути; 'rec' — порада.
// kind: 'серіал' — показується замість року; рандом «Серіал» бере саме їх.
// note — опис одним реченням.
// Можна дописувати сюди нові: вони з'являться на сайті навіть після того, як Катря вже щось відмітила.
const DEFAULT_MOVIES = [
  { title: 'Позамежжя', year: 2006, tag: 'our', note: 'Поранений каскадер у лікарні 1920-х розповідає маленькій дівчинці казку, яка оживає в неймовірно красивих кадрах.' },
  { title: 'Загублена', year: 2014, tag: 'our', note: 'У день п’ятої річниці весілля зникає дружина, і всі підозри падають на чоловіка.' },
  { title: 'Сім', year: 1995, tag: 'our', note: 'Двоє детективів вистежують серійного вбивцю, який карає своїх жертв за сім смертних гріхів.' },
  { title: 'Мисливець за розумом', kind: 'серіал', tag: 'our', note: 'Агенти ФБР у 1970-х розмовляють із серійними вбивцями, щоб зрозуміти, як вони думають.' },
  { title: 'Темна матерія', kind: 'серіал', tag: 'our', note: 'Фізика викрадають у паралельне життя, де він не створив сім’ю, і він шукає дорогу назад.' },
  { title: 'Жити', year: 1952, tag: 'our', note: 'Чиновник дізнається, що смертельно хворий, і вперше намагається прожити свої дні по-справжньому.' },
  { title: 'Мама', year: 2009, tag: 'our', note: 'Мати сама береться розслідувати вбивство, щоб довести невинуватість свого сина.' },
  { title: 'Любовний лист', year: 1995, tag: 'our', note: 'Жінка пише листа загиблому нареченому на його стару адресу і несподівано отримує відповідь.' },
  { title: 'Токіо-га', year: 1985, tag: 'our', note: 'Вім Вендерс їде в Токіо шукати сліди світу з фільмів Ясудзіро Одзу.' },
  { title: 'Таксист', year: 1976, tag: 'our', note: 'Самотній ветеран в’єтнамської війни ночами таксує Нью-Йорком і дедалі більше втрачає зв’язок із реальністю.' },
  { title: 'Володар Перснів', kind: 'трилогія', tag: 'our', note: 'Гобіт Фродо з друзями вирушає знищити Перстень Всевладдя, поки ним не заволодів Саурон.' },
  { title: 'Перед світанком', year: 1995, tag: 'rec', note: 'Американець і француженка знайомляться в потязі й проводять разом одну ніч у Відні, розмовляючи про все на світі.' },
  { title: 'Минулі життя', year: 2023, tag: 'rec', note: 'Двоє друзів дитинства з Сеула зустрічаються через двадцять років, коли їхні життя вже пішли різними шляхами.' },
  { title: 'Любовний настрій', year: 2000, tag: 'rec', note: 'У Гонконзі 1960-х двоє сусідів дізнаються про роман своїх подружжів, і між ними зароджується тихе почуття.' },
];

// Що ми вже подивились — одразу лежить у «Переглянули»
const DEFAULT_WATCHED = [
  { title: 'Тед Лассо', kind: 'серіал', tag: 'our', note: 'Американського тренера з футболу наймають тренувати англійський футбольний клуб, хоча в соккері він не тямить нічого.' },
  { title: 'Правдива терапія', kind: 'серіал', tag: 'our', note: 'Психотерапевт після смерті дружини починає казати пацієнтам усе, що думає, і це змінює життя всіх навколо.' },
  { title: 'Шуґар', kind: 'серіал', tag: 'our', note: 'Приватний детектив із Лос-Анджелеса, закоханий у класичне кіно, шукає зниклу онуку голлівудського продюсера.' },
  { title: 'Клинок, який знищує демонів', kind: 'аніме', tag: 'our', note: 'Хлопець стає мисливцем на демонів, щоб помститися за родину і повернути людську подобу сестрі, яку перетворили на демона.' },
];

// Старі англійські назви → українські (щоб у збереженому списку теж оновились)
const RENAMED = {
  'The Fall': 'Позамежжя', 'Seven': 'Сім', 'Mindhunter': 'Мисливець за розумом',
  'Love Letter': 'Любовний лист', 'Tokyo-Ga': 'Токіо-га',
};

// Емодзі на вибір для власних карток
const OWN_EMOJIS = ['💗', '🍓', '🎡', '🎭', '🏕️', '🎶', '🌊', '🍰', '📍', '🌙'];

/* =====================================================
   Далі — логіка сайту
   ===================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* приватний режим */ }
  },
};

function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ----- Тост ----- */
let toastTimer;
function toast(message, action) {
  const el = $('#toast');
  el.innerHTML = `<span>${esc(message)}</span>`;
  if (action) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = action.label;
    btn.addEventListener('click', () => { action.onClick(); el.classList.remove('is-visible'); });
    el.append(btn);
  }
  el.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-visible'), action ? 5000 : 2800);
}

function heartBurst(x, y) {
  if (reduceMotion) return;
  const symbols = ['💗', '💖', '💕', '🩵', '✨'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.textContent = symbols[i % symbols.length];
    const angle = (Math.PI * 2 * i) / 14;
    const dist = 70 + Math.random() * 60;
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    s.style.setProperty('--dy', `${Math.sin(angle) * dist - 30}px`);
    document.body.append(s);
    setTimeout(() => s.remove(), 1200);
  }
}

/* ----- Головна: сердечка й лічильник ----- */
function initHero() {
  const box = $('.hearts');
  if (!reduceMotion) {
    for (let i = 0; i < 16; i++) {
      const h = document.createElement('span');
      h.textContent = '♥';
      if (i % 3 === 0) h.className = 'blue';
      h.style.left = `${Math.random() * 100}%`;
      h.style.fontSize = `${10 + Math.random() * 22}px`;
      h.style.animationDuration = `${9 + Math.random() * 10}s`;
      h.style.animationDelay = `${-Math.random() * 18}s`;
      box.append(h);
    }
  }

  if (!CONFIG.showCounters) { $('#counters').hidden = true; return; }
  const counters = CONFIG.counters.map(c => ({
    ...c,
    days: Math.max(0, Math.floor((Date.now() - new Date(`${c.since}T00:00:00`)) / 86400000)),
  }));
  $('#counters').innerHTML = counters.map(c => `
    <div class="counter">
      <span class="counter-num">${reduceMotion ? c.days : 0}</span>
      <span class="counter-label">${esc(c.label)}</span>
    </div>`).join('');
  if (reduceMotion) return;

  const nums = [...document.querySelectorAll('.counter-num')];
  const t0 = performance.now();
  const step = now => {
    const p = Math.min(1, (now - t0) / 1600);
    const eased = 1 - Math.pow(1 - p, 3);
    nums.forEach((el, i) => { el.textContent = Math.round(counters[i].days * eased); });
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* ----- Галерея й лайтбокс ----- */
function initGallery() {
  const gallery = $('#gallery');
  gallery.innerHTML = PHOTOS.map((p, i) => `
    <button class="photo" type="button" data-index="${i}" aria-label="Відкрити фото ${i + 1}">
      <img src="${esc(p.src)}" alt="${esc(p.caption || 'Наше фото')}" loading="lazy" decoding="async">
    </button>`).join('');

  const lb = $('#lightbox');
  const img = $('#lb-img');
  const cap = $('#lb-caption');
  let current = 0;

  const show = i => {
    current = (i + PHOTOS.length) % PHOTOS.length;
    const p = PHOTOS[current];
    img.src = p.src;
    img.alt = p.caption || 'Наше фото';
    cap.textContent = p.caption;
    img.style.animation = 'none';
    void img.offsetWidth;
    img.style.animation = '';
  };

  gallery.addEventListener('click', e => {
    const btn = e.target.closest('.photo');
    if (!btn) return;
    show(Number(btn.dataset.index));
    lb.showModal();
  });
  $('.lb-prev').addEventListener('click', () => show(current - 1));
  $('.lb-next').addEventListener('click', () => show(current + 1));
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.closest('[data-close]')) lb.close();
  });

  let touchX = null;
  lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });
}

/* ----- Причини ----- */
function initReasons() {
  const grid = $('#reasons-grid');
  grid.innerHTML = REASONS.map((r, i) => `
    <button class="reason" type="button" aria-pressed="false">
      <span class="reason-inner">
        <span class="reason-face reason-front">
          <span class="reason-num">${i + 1}</span>
          <span class="reason-hint">💗</span>
        </span>
        <span class="reason-face reason-back">${esc(`${REASON_PREFIX} ${r}.`)}</span>
      </span>
    </button>`).join('');
  grid.addEventListener('click', e => {
    const card = e.target.closest('.reason');
    if (!card) return;
    const flipped = card.classList.toggle('is-flipped');
    card.setAttribute('aria-pressed', String(flipped));
  });
}

/* ----- Побачення ----- */
const modal = $('#date-modal');
const modalBody = $('#modal-body');
const season = currentSeason();
let chosenDate = store.get('katrya-chosen-date-v3', null);
let dateFilter = 'all';

// Власні побачення зберігаються в браузері (на тому пристрої, де їх додали)
const OWN_KEY = 'katrya-own-dates-v1';
let ownDates = store.get(OWN_KEY, []);
const allDates = () => [...DATES, ...ownDates];

const DATE_GROUPS = [
  { id: 'season', title: SEASONS[season].title, now: true },
  { id: 'home', title: 'Будь-коли: вдома й у залі' },
  { id: 'food', title: 'Смакуємо світ', wide: true },
  { id: 'own', title: 'Наші власні ідеї' },
];

function addOwnDate(date) {
  const own = { ...date, id: crypto.randomUUID?.() || String(Date.now()), group: 'own' };
  ownDates.push(own);
  store.set(OWN_KEY, ownDates);
  dateFilter = 'all';
  renderDates();
  const card = document.querySelector(`[data-own-id="${own.id}"]`);
  if (card) {
    card.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    card.classList.add('is-new');
    setTimeout(() => card.classList.remove('is-new'), 2400);
  }
  toast('Картку створено, Коханнячко 💗');
}

function deleteOwnDate(id) {
  const index = ownDates.findIndex(d => d.id === id);
  if (index < 0) return;
  const [removed] = ownDates.splice(index, 1);
  store.set(OWN_KEY, ownDates);
  renderDates();
  toast('Картку видалено', {
    label: 'Повернути',
    onClick() {
      ownDates.splice(index, 0, removed);
      store.set(OWN_KEY, ownDates);
      renderDates();
    },
  });
}

function isRelevant(d) {
  return d.group !== 'season' || d.seasons.includes(season);
}

function isVisible(d) {
  if (!isRelevant(d)) return false;
  if (dateFilter === 'season') return d.group === 'season';
  if (dateFilter === 'any') return d.group !== 'season';
  return true;
}

function badgeFor(d) {
  if (d.group === 'season') return { icon: SEASONS[season].icon, label: SEASONS[season].label };
  if (d.group === 'own') return { icon: '✍️', label: 'своє' };
  return { icon: '🏠', label: 'всі сезони' };
}

function renderFilters() {
  const s = SEASONS[season];
  const chips = [['all', 'Усі'], ['season', `${s.icon} ${s.title}`], ['any', '🏠 Всі сезони']];
  $('#date-filters').innerHTML = chips.map(([value, label]) =>
    `<button class="chip" type="button" data-filter="${value}" aria-pressed="${value === dateFilter}">${label}</button>`).join('');
}

function renderDates() {
  $('#dates-grid').innerHTML = DATE_GROUPS.map(group => {
    const cards = allDates().map((d, i) => ({ d, i })).filter(({ d }) => d.group === group.id && isVisible(d));
    if (!cards.length) return '';
    return `
      <div class="date-row">
        <h3 class="date-row-label">${esc(group.title)}${group.now ? '<span class="date-row-now">зараз сезон</span>' : ''}</h3>
        <div class="date-row-cards ${group.wide ? 'is-wide' : ''}">
          ${cards.map(({ d, i }) => {
            const badge = badgeFor(d);
            return `
            <button class="date-card" type="button" data-index="${i}"${d.id ? ` data-own-id="${esc(d.id)}"` : ''}>
              <span class="date-season" title="${esc(badge.label)}">${badge.icon}<span class="date-season-text"> ${esc(badge.label)}</span></span>
              ${chosenDate === d.title ? '<span class="date-chosen">обрано</span>' : ''}
              <span class="date-emoji" aria-hidden="true">${d.emoji}</span>
              <span class="date-title">${esc(d.title)}</span>
              <span class="date-short">${esc(d.short)}</span>
            </button>`;
          }).join('')}
        </div>
      </div>`;
  }).join('');
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.filter === dateFilter)));
}

function openDate(i, fromFate = false) {
  const d = allDates()[i];
  const badge = badgeFor(d);
  modalBody.innerHTML = `
    <div class="modal-emoji" aria-hidden="true">${d.emoji}</div>
    <p class="modal-kicker">${fromFate ? 'Доля обрала' : `${badge.icon} ${esc(badge.label)}`}</p>
    <h3 id="modal-title">${esc(d.title)}</h3>
    <p class="modal-text">${esc(d.short)}</p>
    ${d.bring?.length ? `
    <div class="modal-list">
      <p class="modal-list-title">${esc(d.listTitle || 'Що знадобиться')}</p>
      <ul>${d.bring.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
    </div>` : ''}
    <div class="modal-actions">
      <button class="btn btn-pink" type="button" data-choose="${i}">Хочу це! 💌</button>
      ${d.movies ? '<button class="btn btn-ghost" type="button" data-goto-movies>Обрати фільм 🎬</button>' : ''}
      ${fromFate ? '<button class="btn btn-ghost" type="button" data-again>Ще раз 🎲</button>' : ''}
      ${d.id ? `<button class="btn btn-ghost" type="button" data-delete="${esc(d.id)}">Видалити</button>` : ''}
    </div>`;
  if (!modal.open) modal.showModal();
}

function chooseDate(i, x, y) {
  const d = allDates()[i];
  chosenDate = d.title;
  store.set('katrya-chosen-date-v3', d.title);
  renderDates();
  heartBurst(x, y);
  modalBody.innerHTML = `
    <div class="modal-emoji" aria-hidden="true">💗</div>
    <p class="modal-kicker">Прийнято!</p>
    <h3 id="modal-title">${d.emoji} ${esc(d.title)}</h3>
    <p class="modal-note">Пиши мені, я все організую)</p>
    <div class="modal-actions">
      <button class="btn btn-pink" type="button" data-share="${esc(`${d.emoji} ${d.title}`)}">Повідомити коханого 💌</button>
      <button class="btn btn-ghost" type="button" data-close>Закрити</button>
    </div>`;
}

async function shareDate(what) {
  const text = `Я обрала наше наступне побачення: ${what}! Готуйся 😏`;
  if (navigator.share) {
    try { await navigator.share({ text }); return; } catch (err) { if (err.name === 'AbortError') return; }
  }
  try {
    await navigator.clipboard.writeText(text);
    toast('Скопійовано, Красуня, встав у наш чат 💗');
  } catch {
    toast(text);
  }
}

let spinning = false;
function spinDate() {
  if (spinning) return;
  if (modal.open) modal.close();
  const dates = allDates();
  const pool = dates.map((d, i) => i).filter(i => isVisible(dates[i]));
  const target = pool[Math.floor(Math.random() * pool.length)];
  const reel = $('#fate-reel');
  const showInReel = i => {
    reel.innerHTML = `<span class="fate-emoji" aria-hidden="true">${dates[i].emoji}</span><span class="fate-title">${esc(dates[i].title)}</span>`;
  };
  reel.hidden = false;
  reel.classList.remove('is-done');
  if (reduceMotion) { showInReel(target); openDate(target, true); return; }

  spinning = true;
  $('#fate').scrollIntoView({ behavior: 'smooth', block: 'center' });
  const totalSteps = 22;
  let step = 0;
  let last = -1;
  const tick = () => {
    let i = target;
    if (step < totalSteps) {
      do { i = pool[Math.floor(Math.random() * pool.length)]; } while (pool.length > 1 && i === last);
    }
    last = i;
    showInReel(i);
    if (step >= totalSteps) {
      reel.classList.add('is-done');
      setTimeout(() => { spinning = false; openDate(target, true); }, 700);
      return;
    }
    step++;
    setTimeout(tick, 55 + Math.pow(step / totalSteps, 3) * 360);
  };
  tick();
}

/* Генератор нового побачення */
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
let generated = null;

function generateDate() {
  const activities = [...GENERATOR.activities.all, ...(GENERATOR.activities[season] || [])];
  let next;
  do {
    const [emoji, what] = pick(activities);
    next = { emoji, what, twist: pick(GENERATOR.twists), finale: pick(GENERATOR.finales) };
  } while (generated && next.what === generated.what && activities.length > 1);
  generated = next;

  const box = $('#generated');
  box.hidden = false;
  box.innerHTML = `
    <div class="gen-emoji" aria-hidden="true">${generated.emoji}</div>
    <p class="gen-kicker">Нове побачення</p>
    <h3 class="gen-title">${esc(generated.what)}</h3>
    <dl class="gen-parts">
      <div><dt>Умова</dt><dd>${esc(generated.twist)}</dd></div>
      <div><dt>Фінал</dt><dd>${esc(generated.finale)}</dd></div>
    </dl>
    <div class="modal-actions">
      <button class="btn btn-pink" type="button" data-gen-choose>Хочу це! 💌</button>
      <button class="btn btn-ghost" type="button" data-gen-save>Зберегти картку 📌</button>
      <button class="btn btn-ghost" type="button" data-gen-again>Ще одне 🎲</button>
    </div>`;
  if (!reduceMotion) { box.style.animation = 'none'; void box.offsetWidth; box.style.animation = ''; }
}

function initDates() {
  renderFilters();
  renderDates();
  $('#dates-grid').addEventListener('click', e => {
    const card = e.target.closest('.date-card');
    if (card && !spinning) openDate(Number(card.dataset.index));
  });
  $('#date-filters').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip || spinning) return;
    dateFilter = chip.dataset.filter;
    renderDates();
  });
  $('#random-date').addEventListener('click', spinDate);

  $('#generate-date').addEventListener('click', generateDate);
  $('#generate-top').addEventListener('click', () => {
    generateDate();
    $('#generator').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  });
  $('#generated').addEventListener('click', e => {
    if (e.target.closest('[data-gen-again]')) { generateDate(); return; }
    if (e.target.closest('[data-gen-save]') && generated) {
      addOwnDate({
        emoji: generated.emoji,
        title: generated.what,
        short: `${generated.twist[0].toUpperCase()}${generated.twist.slice(1)}`,
        listTitle: 'Деталі',
        bring: [`Умова: ${generated.twist}`, `Фінал: ${generated.finale}`],
      });
      return;
    }
    const choose = e.target.closest('[data-gen-choose]');
    if (choose && generated) {
      const r = choose.getBoundingClientRect();
      heartBurst(r.left + r.width / 2, r.top + r.height / 2);
      shareDate(`${generated.emoji} ${generated.what}, умова: ${generated.twist}, фінал: ${generated.finale}`);
    }
  });

  const ownForm = $('#own-form');
  let ownEmoji = OWN_EMOJIS[0];
  $('#own-emojis').innerHTML = OWN_EMOJIS.map((em, i) =>
    `<button class="emoji-option" type="button" data-emoji="${em}" aria-pressed="${i === 0}" aria-label="Емодзі ${em}">${em}</button>`).join('');
  $('#own-emojis').addEventListener('click', e => {
    const btn = e.target.closest('.emoji-option');
    if (!btn) return;
    ownEmoji = btn.dataset.emoji;
    document.querySelectorAll('.emoji-option').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  });
  ownForm.addEventListener('submit', e => {
    e.preventDefault();
    const title = $('#own-title').value.trim();
    const short = $('#own-short').value.trim();
    if (!title) { $('#own-title').focus(); return; }
    addOwnDate({ emoji: ownEmoji, title, short, bring: [] });
    ownForm.reset();
  });

  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.closest('[data-close]')) { modal.close(); return; }
    const choose = e.target.closest('[data-choose]');
    if (choose) {
      const r = choose.getBoundingClientRect();
      chooseDate(Number(choose.dataset.choose), r.left + r.width / 2, r.top + r.height / 2);
      return;
    }
    const share = e.target.closest('[data-share]');
    if (share) { shareDate(share.dataset.share); return; }
    if (e.target.closest('[data-again]')) { spinDate(); return; }
    const del = e.target.closest('[data-delete]');
    if (del) { modal.close(); deleteOwnDate(del.dataset.delete); return; }
    if (e.target.closest('[data-goto-movies]')) {
      modal.close();
      $('#movies').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  });
}

/* ----- Кіносписок ----- */
const MOVIES_KEY = 'katrya-movies-v3';
let movies;
let activeTab = 'toWatch';

function loadMovies() {
  const saved = store.get(MOVIES_KEY, null);
  const state = saved || { toWatch: [], watched: [], removed: [], tonight: null };
  [...state.toWatch, ...state.watched].forEach(m => { if (RENAMED[m.title]) m.title = RENAMED[m.title]; });
  state.removed = state.removed.map(t => RENAMED[t] || t);
  // Додаємо нові фільми з DEFAULT_MOVIES і DEFAULT_WATCHED, яких ще немає в жодному списку
  const known = new Set([...state.toWatch, ...state.watched].map(m => m.title).concat(state.removed));
  const newId = () => crypto.randomUUID?.() || String(Math.random());
  DEFAULT_MOVIES.forEach(m => { if (!known.has(m.title)) state.toWatch.push({ ...m, id: newId() }); });
  DEFAULT_WATCHED.forEach(m => { if (!known.has(m.title)) state.watched.push({ ...m, id: newId() }); });
  // Опис, рік і тип для стандартних фільмів завжди беремо з дефолтів (раптом їх оновили)
  const defaults = new Map([...DEFAULT_MOVIES, ...DEFAULT_WATCHED].map(m => [m.title, m]));
  [...state.toWatch, ...state.watched].forEach(m => {
    const d = defaults.get(m.title);
    if (d) Object.assign(m, { note: d.note, year: d.year, kind: d.kind });
  });
  return state;
}

function saveMovies() { store.set(MOVIES_KEY, movies); }

const TAG_LABELS = { our: 'від нас', rec: 'порада', added: 'додано' };

function movieItem(m, list) {
  const tag = m.tag ? `<span class="movie-tag ${m.tag}">${TAG_LABELS[m.tag]}</span>` : '';
  const meta = m.year || m.kind;
  const year = meta ? ` <span class="movie-year">· ${esc(meta)}</span>` : '';
  const note = m.loading ? '<p class="movie-note">Шукаю опис…</p>'
    : (m.note ? `<p class="movie-note">${esc(m.note)}</p>` : '');
  const watchedOn = (m.watchedAt
    ? `<p class="movie-note movie-watched-on">Переглянули ${new Date(m.watchedAt).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long' })}</p>`
    : '') + note;
  const actions = list === 'toWatch'
    ? `<button class="icon-btn" type="button" data-act="pick" title="Обрати на сьогодні" aria-label="Обрати на сьогодні">🎬</button>
       <button class="icon-btn blue" type="button" data-act="watched" title="Переглянули" aria-label="Позначити як переглянутий">✓</button>
       <button class="icon-btn muted" type="button" data-act="remove" title="Видалити" aria-label="Видалити">✕</button>`
    : `<button class="icon-btn blue" type="button" data-act="back" title="Повернути до списку" aria-label="Повернути до списку">↩</button>
       <button class="icon-btn muted" type="button" data-act="remove" title="Видалити" aria-label="Видалити">✕</button>`;
  return `
    <li class="movie ${movies.tonight === m.id ? 'is-tonight' : ''}" data-id="${esc(m.id)}">
      <div class="movie-main">
        ${tag}
        <h3 class="movie-title">${esc(m.title)}${year}</h3>
        ${watchedOn}
      </div>
      <div class="movie-actions">${actions}</div>
    </li>`;
}

function renderMovies() {
  const list = movies[activeTab];
  $('#movie-list').innerHTML = list.length
    ? list.map(m => movieItem(m, activeTab)).join('')
    : `<li class="movie-empty">${activeTab === 'toWatch' ? 'Список порожній. Додай фільм вище 🍿' : 'Ще нічого не переглянули разом. Саме час почати 💗'}</li>`;
  $('#count-toWatch').textContent = movies.toWatch.length;
  $('#count-watched').textContent = movies.watched.length;
  document.querySelectorAll('.tab').forEach(t => t.setAttribute('aria-selected', String(t.dataset.tab === activeTab)));

  const tonight = movies.toWatch.find(m => m.id === movies.tonight);
  $('#tonight').hidden = !tonight;
  if (tonight) $('#tonight-title').textContent = tonight.title;
}

function findMovie(id) {
  for (const list of ['toWatch', 'watched']) {
    const index = movies[list].findIndex(m => m.id === id);
    if (index > -1) return { list, index, movie: movies[list][index] };
  }
  return null;
}

function markWatched(id) {
  const found = findMovie(id);
  if (!found || found.list !== 'toWatch') return;
  movies.toWatch.splice(found.index, 1);
  movies.watched.unshift({ ...found.movie, watchedAt: Date.now() });
  if (movies.tonight === id) movies.tonight = null;
  saveMovies();
  renderMovies();
  toast(`«${found.movie.title}» тепер у переглянутих 💗`);
}

// Шукає фільм або серіал в українській Вікіпедії і бере перше речення статті як опис
async function fetchMovieInfo(title) {
  const ask = async query => {
    const params = new URLSearchParams({
      action: 'query', format: 'json', origin: '*', generator: 'search', gsrsearch: query, gsrlimit: '5',
      prop: 'description|extracts', exintro: '1', explaintext: '1', exsentences: '2', exlimit: '5',
    });
    const res = await fetch(`https://uk.wikipedia.org/w/api.php?${params}`);
    const data = await res.json();
    const pages = Object.values(data.query?.pages || {}).sort((a, b) => a.index - b.index);
    return pages.find(p => /фільм|серіал|мультфільм|аніме|мінісеріал/i.test(`${p.description || ''} ${p.extract || ''}`.slice(0, 300)));
  };
  const page = (await ask(title)) || (await ask(`${title} фільм`));
  if (!page?.extract) return null;

  let text = page.extract.replace(/\u0301/g, '');
  // Спершу прибираємо дужки (англ. …, кор. …), бо в них крапки ламають пошук кінця речення
  while (/\([^()]*\)/.test(text)) text = text.replace(/\s*\([^()]*\)/g, '');
  const sentences = text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s+/);
  let sentence = sentences[0];
  // Надто коротке перше речення доповнюємо другим, щоб був хоч якийсь сюжет
  if (sentence.length < 70 && sentences[1]) sentence += ` ${sentences[1]}`;
  const dash = sentence.search(/ [—–-] /);
  if (dash > -1 && dash < 90) sentence = sentence.slice(dash + 3);
  sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
  if (sentence.length > 220) sentence = `${sentence.slice(0, 217).trimEnd()}…`;

  const about = `${page.description || ''} ${page.extract}`;
  const isSeries = /серіал/i.test(page.description || sentence);
  const year = (about.match(/\b(19[0-9]{2}|20[0-9]{2})\b/) || [])[1];
  return { note: sentence, kind: isSeries ? 'серіал' : undefined, year: !isSeries && year ? Number(year) : undefined };
}

async function describeMovie(id) {
  let info = null;
  try { info = await fetchMovieInfo(findMovie(id)?.movie.title || ''); } catch { /* немає інтернету — лишаємо без опису */ }
  const found = findMovie(id);
  if (!found) return;
  delete found.movie.loading;
  if (info) Object.assign(found.movie, info);
  saveMovies();
  renderMovies();
  if (!info) toast('Опис не знайшовся, але фільм у списку 🍿');
}

/* Генератор нового фільму чи серіалу — ідеї під те, що нам уже подобається */
const MOVIE_IDEAS = {
  film: [
    { title: 'Зодіак', year: 2007, by: 'Девід Фінчер', like: ['Сім', 'Загублена'], note: 'Карикатурист і журналісти роками полюють на вбивцю Зодіака, який дражнить поліцію шифрованими листами.' },
    { title: 'Полонянки', year: 2013, by: 'Дені Вільнев', like: ['Сім', 'Мама'], note: 'Батько, в якого зникла донька, береться шукати викрадача сам, коли поліція заходить у глухий кут.' },
    { title: 'Спогади про вбивство', year: 2003, by: 'Пон Джун Хо', like: ['Мама', 'Сім'], note: 'Двоє детективів у корейському селі 1980-х шукають серійного вбивцю без жодних сучасних методів.' },
    { title: 'Олдбой', year: 2003, by: 'Пак Чхан Ук', like: ['Мама', 'Таксист'], note: 'Чоловіка п’ятнадцять років тримають замкненим без пояснень, а потім відпускають і дають п’ять днів знайти кривдника.' },
    { title: 'Мовчання ягнят', year: 1991, by: 'Джонатан Демме', like: ['Сім', 'Мисливець за розумом'], note: 'Молода курсантка ФБР радиться з ув’язненим психіатром-канібалом, щоб упіймати іншого серійного вбивцю.' },
    { title: 'Бійцівський клуб', year: 1999, by: 'Девід Фінчер', like: ['Сім', 'Таксист'], note: 'Офісний працівник із безсонням разом із дивним продавцем мила створює підпільний клуб бійок.' },
    { title: 'Драйв', year: 2011, by: 'Ніколас Віндінг Рефн', like: ['Таксист'], note: 'Мовчазний каскадер, який підробляє водієм для пограбувань, вплутується в небезпечну історію, захищаючи сусідку та її сина.' },
    { title: 'Токійська повість', year: 1953, by: 'Ясудзіро Одзу', like: ['Токіо-га', 'Жити'], note: 'Літнє подружжя приїздить у Токіо до дорослих дітей, яким на них постійно бракує часу.' },
    { title: 'Ідеальні дні', year: 2023, by: 'Вім Вендерс', like: ['Токіо-га', 'Жити'], note: 'Прибиральник токійських туалетів живе простим розміреним життям і вміє радіти кожній дрібниці.' },
    { title: 'Париж, Техас', year: 1984, by: 'Вім Вендерс', like: ['Токіо-га', 'Таксист'], note: 'Чоловік, який чотири роки блукав пустелею, повертається, щоб знайти сина і колишню дружину.' },
    { title: 'Сім самураїв', year: 1954, by: 'Акіра Куросава', like: ['Жити', 'Володар Перснів'], note: 'Бідне селище наймає сімох самураїв, щоб захиститися від бандитів, які щороку забирають урожай.' },
    { title: 'Віднесені привидами', year: 2001, by: 'Хаяо Міядзакі', like: ['Позамежжя', 'Володар Перснів'], note: 'Дівчинка потрапляє у світ духів і мусить врятувати батьків, яких перетворили на свиней.' },
    { title: 'Лабіринт Фавна', year: 2006, by: 'Гільєрмо дель Торо', like: ['Позамежжя', 'Володар Перснів'], note: 'Дівчинка в Іспанії 1944 року тікає від жорстокого вітчима в казковий світ, де мусить виконати три завдання.' },
    { title: 'Твоє ім’я', year: 2016, by: 'Макото Сінкай', like: ['Любовний лист'], note: 'Хлопець із Токіо і дівчина з провінції, які ніколи не бачились, раптом починають прокидатися в тілах одне одного.' },
    { title: 'Труднощі перекладу', year: 2003, by: 'Софія Коппола', like: ['Любовний лист', 'Токіо-га'], note: 'Втомлений актор і молода дружина фотографа знайомляться в токійському готелі й рятують одне одного від самотності.' },
    { title: 'Прибуття', year: 2016, by: 'Дені Вільнев', like: ['Жити', 'Любовний лист'], note: 'Лінгвістка вчиться розмовляти з прибульцями, і це змінює те, як вона бачить час і власне життя.' },
  ],
  series: [
    { title: 'Розрив', year: 2022, like: ['Темна матерія'], note: 'Працівникам корпорації розділяють пам’ять на робочу й особисту, і на роботі вони нічого не знають про власне життя.' },
    { title: 'Таємниця бункера', year: 2023, like: ['Темна матерія'], note: 'Люди століттями живуть у величезному підземному бункері, а інженерка Джульєтт з’ясовує, що від них приховують.' },
    { title: 'Темрява', year: 2017, like: ['Темна матерія'], note: 'Зникнення дітей у німецькому містечку відкриває подорожі в часі, які переплели долі чотирьох родин.' },
    { title: 'Заради всього людства', year: 2019, like: ['Темна матерія'], note: 'Що було б, якби СРСР першим висадився на Місяць і космічні перегони ніколи не закінчились.' },
    { title: '11.22.63', year: 2016, like: ['Темна матерія'], note: 'Учитель через портал потрапляє в 1958 рік, щоб запобігти вбивству Кеннеді.' },
    { title: 'Добрі передвісники', year: 2019, like: ['Тед Лассо', 'Темна матерія'], note: 'Ангел і демон, які за тисячі років звикли до життя на Землі, разом намагаються скасувати апокаліпсис.' },
    { title: 'У кращому світі', year: 2016, like: ['Тед Лассо', 'Правдива терапія'], note: 'Егоїстка після смерті помилково потрапляє в рай і потай вчиться бути хорошою людиною, поки її не викрили.' },
    { title: 'Шиттс Крік', year: 2015, like: ['Тед Лассо'], note: 'Багата родина банкрутує і переїжджає в крихітне містечко, яке колись купила як жарт.' },
    { title: 'Початкова школа «Ебботт»', year: 2021, like: ['Тед Лассо'], note: 'Вчителі бідної школи у Філадельфії з гумором і майже без грошей намагаються дати дітям найкраще.' },
    { title: 'Ведмідь', year: 2022, like: ['Правдива терапія'], note: 'Молодий шеф із ресторанів високої кухні повертається в Чикаго рятувати сендвічну покійного брата.' },
    { title: 'Убивства в одній будівлі', year: 2021, like: ['Тед Лассо', 'Правдива терапія'], note: 'Троє сусідів, фанатів тру-крайму, розслідують убивство у своєму будинку і записують про це подкаст.' },
    { title: 'Fleabag', year: 2016, like: ['Правдива терапія'], note: 'Дотепна лондонка намагається впоратись із горем, родиною і коханням, постійно підморгуючи глядачу.' },
  ],
};

let movieIdea = null;
function generateMovie(type) {
  const taken = new Set([...movies.toWatch, ...movies.watched].map(m => m.title.toLowerCase()).concat(movies.removed.map(t => t.toLowerCase())));
  const pool = MOVIE_IDEAS[type].filter(m => !taken.has(m.title.toLowerCase()) && m !== movieIdea);
  const box = $('#movie-generated');
  if (!pool.length) {
    toast(type === 'series' ? 'Серіали-ідеї закінчились, Кохання, додавай свої 📺' : 'Фільми-ідеї закінчились, Кохання, додавай свої 🎬');
    return;
  }
  movieIdea = { ...pick(pool), type };
  const isSeries = type === 'series';
  box.hidden = false;
  box.innerHTML = `
    <div class="gen-emoji" aria-hidden="true">${isSeries ? '📺' : '🎬'}</div>
    <p class="gen-kicker">${isSeries ? 'Новий серіал для нас' : 'Новий фільм для нас'}</p>
    <h3 class="gen-title">${esc(movieIdea.title)}</h3>
    <p class="movie-gen-meta">${isSeries ? `серіал · ${movieIdea.year}` : `${movieIdea.year} · ${esc(movieIdea.by)}`}</p>
    <p class="movie-gen-note">${esc(movieIdea.note)}</p>
    <p class="movie-gen-like">Бо нам зайшло: ${movieIdea.like.map(esc).join(', ')}</p>
    <div class="modal-actions">
      <button class="btn btn-pink" type="button" data-idea-add>Додати в список 🍿</button>
      <button class="btn btn-ghost" type="button" data-idea-again>Ще варіант 🎲</button>
    </div>`;
  if (!reduceMotion) { box.style.animation = 'none'; void box.offsetWidth; box.style.animation = ''; }
}

function pickTonight(id) {
  movies.tonight = id;
  saveMovies();
  renderMovies();
  $('#tonight').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
}

function initMovies() {
  movies = loadMovies();
  saveMovies();
  renderMovies();
  movies.toWatch.filter(m => m.loading).forEach(m => describeMovie(m.id));

  document.querySelector('.tabs').addEventListener('click', e => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    activeTab = tab.dataset.tab;
    renderMovies();
  });

  $('#movie-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#movie-input');
    const title = input.value.trim();
    if (!title) return;
    const id = crypto.randomUUID?.() || String(Math.random());
    movies.toWatch.unshift({ id, title, tag: 'added', loading: true });
    movies.removed = movies.removed.filter(t => t !== title);
    input.value = '';
    activeTab = 'toWatch';
    saveMovies();
    renderMovies();
    describeMovie(id);
  });

  $('#movie-random').addEventListener('click', () => {
    if (!movies.toWatch.length) { toast('Спершу додай кілька фільмів, Коханнячко 🍿'); return; }
    activeTab = 'toWatch';
    pickTonight(pick(movies.toWatch).id);
  });

  document.querySelector('.movie-gen-buttons').addEventListener('click', e => {
    const btn = e.target.closest('[data-movie-gen]');
    if (btn) generateMovie(btn.dataset.movieGen);
  });

  $('#movie-generated').addEventListener('click', e => {
    if (e.target.closest('[data-idea-again]') && movieIdea) { generateMovie(movieIdea.type); return; }
    if (e.target.closest('[data-idea-add]') && movieIdea) {
      const { title, year, note, type } = movieIdea;
      movies.toWatch.unshift({ id: crypto.randomUUID?.() || String(Math.random()), title, note, tag: 'rec', ...(type === 'series' ? { kind: 'серіал' } : { year }) });
      movies.removed = movies.removed.filter(t => t !== title);
      activeTab = 'toWatch';
      saveMovies();
      renderMovies();
      $('#movie-generated').hidden = true;
      movieIdea = null;
      toast(`«${title}» у нашому списку 🍿`);
    }
  });

  $('#movie-list').addEventListener('click', e => {
    const btn = e.target.closest('[data-act]');
    if (!btn) return;
    const id = btn.closest('.movie').dataset.id;
    const act = btn.dataset.act;

    if (act === 'pick') pickTonight(id);
    if (act === 'watched') markWatched(id);
    if (act === 'back') {
      const found = findMovie(id);
      movies.watched.splice(found.index, 1);
      const { watchedAt, ...movie } = found.movie;
      movies.toWatch.unshift(movie);
      saveMovies();
      renderMovies();
    }
    if (act === 'remove') {
      const found = findMovie(id);
      movies[found.list].splice(found.index, 1);
      movies.removed.push(found.movie.title);
      if (movies.tonight === id) movies.tonight = null;
      saveMovies();
      renderMovies();
      toast('Фільм видалено', {
        label: 'Повернути',
        onClick() {
          movies[found.list].splice(found.index, 0, found.movie);
          movies.removed = movies.removed.filter(t => t !== found.movie.title);
          saveMovies();
          renderMovies();
        },
      });
    }
  });

  $('#tonight-done').addEventListener('click', () => markWatched(movies.tonight));
  $('#tonight-clear').addEventListener('click', () => {
    movies.tonight = null;
    saveMovies();
    renderMovies();
    $('#movie-list').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
  });
}

/* ----- Лист ----- */
function initLetter() {
  $('#letter-text').innerHTML = `
    <p class="greeting">${esc(LETTER.greeting)}</p>
    ${LETTER.paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}
    <p class="signature">${esc(LETTER.signature)}</p>`;

  const env = $('#envelope');
  env.addEventListener('click', () => {
    if (env.classList.contains('is-open')) return;
    env.classList.add('is-open');
    env.setAttribute('aria-expanded', 'true');
    const r = env.getBoundingClientRect();
    heartBurst(r.left + r.width / 2, r.top + r.height / 2);
    setTimeout(() => {
      const letter = $('#letter-body');
      letter.hidden = false;
      letter.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }, reduceMotion ? 0 : 900);
  });
}

initHero();
initGallery();
initReasons();
initDates();
initMovies();
initLetter();
