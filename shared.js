// ── PALETTLY SHARED i18n + HEADER/FOOTER INJECTOR ─────────────

const LANGS = [
  { code:'en', flag:'🇬🇧', name:'EN', label:'English' },
  { code:'es', flag:'🇪🇸', name:'ES', label:'Español' },
  { code:'pt', flag:'🇧🇷', name:'PT', label:'Português' },
  { code:'fr', flag:'🇫🇷', name:'FR', label:'Français' },
  { code:'de', flag:'🇩🇪', name:'DE', label:'Deutsch' },
  { code:'it', flag:'🇮🇹', name:'IT', label:'Italiano' },
  { code:'zh', flag:'🇨🇳', name:'ZH', label:'中文' },
  { code:'ja', flag:'🇯🇵', name:'JA', label:'日本語' },
];

// Keys shared across ALL pages
const T_GLOBAL = {
  en: {
    nav_free:'Free forever',
    nav_all_tools:'All tools',
    footer_tagline:'Free design & developer tools. Built with care.',
    footer_privacy:'Privacy', footer_about:'About', footer_contact:'Contact',
    donate_title:'Enjoying Palettly? Buy me a coffee',
    donate_sub:'These tools are free and always will be. A small tip keeps them alive.',
    donate_btn:'Support via PayPal',
  },
  es: {
    nav_free:'Gratis para siempre',
    nav_all_tools:'Todas las herramientas',
    footer_tagline:'Herramientas de diseño y desarrollo gratuitas. Hechas con cariño.',
    footer_privacy:'Privacidad', footer_about:'Acerca de', footer_contact:'Contacto',
    donate_title:'¿Te gustó Palettly? Invitame un café',
    donate_sub:'Estas herramientas son gratuitas y siempre lo serán. Un pequeño aporte las mantiene vivas.',
    donate_btn:'Apoyar por PayPal',
  },
  pt: {
    nav_free:'Gratuito para sempre',
    nav_all_tools:'Todas as ferramentas',
    footer_tagline:'Ferramentas de design e desenvolvimento gratuitas. Feitas com carinho.',
    footer_privacy:'Privacidade', footer_about:'Sobre', footer_contact:'Contato',
    donate_title:'Gostou do Palettly? Me pague um café',
    donate_sub:'Estas ferramentas são gratuitas e sempre serão. Uma pequena contribuição as mantém vivas.',
    donate_btn:'Apoiar via PayPal',
  },
  fr: {
    nav_free:'Gratuit pour toujours',
    nav_all_tools:'Tous les outils',
    footer_tagline:'Outils de design et développement gratuits. Faits avec soin.',
    footer_privacy:'Confidentialité', footer_about:'À propos', footer_contact:'Contact',
    donate_title:'Vous aimez Palettly ? Offrez-moi un café',
    donate_sub:'Ces outils sont gratuits et le resteront. Un petit pourboire les maintient en vie.',
    donate_btn:'Soutenir via PayPal',
  },
  de: {
    nav_free:'Für immer kostenlos',
    nav_all_tools:'Alle Tools',
    footer_tagline:'Kostenlose Design- und Entwicklertools. Mit Sorgfalt gebaut.',
    footer_privacy:'Datenschutz', footer_about:'Über uns', footer_contact:'Kontakt',
    donate_title:'Gefällt dir Palettly? Kauf mir einen Kaffee',
    donate_sub:'Diese Tools sind kostenlos und bleiben es auch. Ein kleiner Tipp hält sie am Leben.',
    donate_btn:'Unterstützen via PayPal',
  },
  it: {
    nav_free:'Gratuito per sempre',
    nav_all_tools:'Tutti gli strumenti',
    footer_tagline:'Strumenti di design e sviluppo gratuiti. Costruiti con cura.',
    footer_privacy:'Privacy', footer_about:'Chi siamo', footer_contact:'Contatti',
    donate_title:'Ti piace Palettly? Offrimi un caffè',
    donate_sub:'Questi strumenti sono gratuiti e lo saranno sempre. Un piccolo contributo li mantiene in vita.',
    donate_btn:'Supporta via PayPal',
  },
  zh: {
    nav_free:'永久免费',
    nav_all_tools:'所有工具',
    footer_tagline:'免费设计与开发工具，用心打造。',
    footer_privacy:'隐私政策', footer_about:'关于我们', footer_contact:'联系我们',
    donate_title:'喜欢 Palettly？请我喝杯咖啡',
    donate_sub:'这些工具永久免费，一点小小的支持让它们持续运行。',
    donate_btn:'通过 PayPal 支持',
  },
  ja: {
    nav_free:'ずっと無料',
    nav_all_tools:'全ツール一覧',
    footer_tagline:'無料のデザイン・開発ツール。心を込めて制作。',
    footer_privacy:'プライバシー', footer_about:'概要', footer_contact:'お問い合わせ',
    donate_title:'Palettlyを気に入ってくれた？コーヒーを一杯どうぞ',
    donate_sub:'このツールはずっと無料です。小さなサポートが開発を支えます。',
    donate_btn:'PayPalで支援する',
  },
};

// Per-page translations (page-specific text keys)
const T_PAGES = {
  // ── index (hub) ──
  index: {
    en:{ hero_title:'<em>Design tools</em> that just work', hero_sub:'A growing suite of fast, browser-based tools for designers and developers.', meta1:'Everything runs in your browser', meta2:'Your files never leave your device', meta3:'6 tools and growing', eyebrow:'No sign-up · No backend · 100% free' },
    es:{ hero_title:'<em>Herramientas de diseño</em> que simplemente funcionan', hero_sub:'Una suite creciente de herramientas rápidas para diseñadores y desarrolladores.', meta1:'Todo corre en tu navegador', meta2:'Tus archivos nunca salen de tu dispositivo', meta3:'6 herramientas y creciendo', eyebrow:'Sin registro · Sin backend · 100% gratis' },
    pt:{ hero_title:'<em>Ferramentas de design</em> que simplesmente funcionam', hero_sub:'Uma suíte crescente de ferramentas rápidas para designers e desenvolvedores.', meta1:'Tudo roda no seu navegador', meta2:'Seus arquivos nunca saem do seu dispositivo', meta3:'6 ferramentas e crescendo', eyebrow:'Sem cadastro · Sem backend · 100% gratuito' },
    fr:{ hero_title:'<em>Des outils de design</em> qui fonctionnent', hero_sub:'Une suite grandissante d\'outils rapides pour designers et développeurs.', meta1:'Tout tourne dans votre navigateur', meta2:'Vos fichiers ne quittent jamais votre appareil', meta3:'6 outils et plus à venir', eyebrow:'Sans inscription · Sans backend · 100% gratuit' },
    de:{ hero_title:'<em>Design-Tools</em>, die einfach funktionieren', hero_sub:'Eine wachsende Suite schneller Browser-Tools für Designer und Entwickler.', meta1:'Alles läuft in deinem Browser', meta2:'Deine Dateien verlassen nie dein Gerät', meta3:'6 Tools und mehr kommen', eyebrow:'Ohne Anmeldung · Ohne Backend · 100% kostenlos' },
    it:{ hero_title:'<em>Strumenti di design</em> che funzionano', hero_sub:'Una suite crescente di strumenti veloci per designer e sviluppatori.', meta1:'Tutto gira nel tuo browser', meta2:'I tuoi file non lasciano mai il tuo dispositivo', meta3:'6 strumenti e crescendo', eyebrow:'Senza registrazione · Senza backend · 100% gratuito' },
    zh:{ hero_title:'<em>设计工具</em>，开箱即用', hero_sub:'一套不断扩展的浏览器端快速工具，专为设计师和开发者打造。', meta1:'一切在您的浏览器中运行', meta2:'您的文件不会离开您的设备', meta3:'6个工具，持续增加', eyebrow:'无需注册 · 无后端 · 100% 免费' },
    ja:{ hero_title:'<em>デザインツール</em>、すぐ使える', hero_sub:'デザイナーと開発者向けの、ブラウザで動く高速ツールスイート。', meta1:'すべてブラウザ内で動作', meta2:'ファイルはデバイスから外に出ません', meta3:'6つのツール、増え続けています', eyebrow:'登録不要 · バックエンドなし · 100% 無料' },
  },
  // ── gradient ──
  gradient: {
    en:{ tool_title:'CSS gradient generator', lbl_type:'Type', lbl_angle:'Angle', lbl_stops:'Color stops', lbl_css:'Generated CSS', btn_add:'+ Add stop' },
    es:{ tool_title:'Generador de gradientes CSS', lbl_type:'Tipo', lbl_angle:'Ángulo', lbl_stops:'Paradas de color', lbl_css:'CSS generado', btn_add:'+ Agregar parada' },
    pt:{ tool_title:'Gerador de gradientes CSS', lbl_type:'Tipo', lbl_angle:'Ângulo', lbl_stops:'Paradas de cor', lbl_css:'CSS gerado', btn_add:'+ Adicionar parada' },
    fr:{ tool_title:'Générateur de dégradés CSS', lbl_type:'Type', lbl_angle:'Angle', lbl_stops:'Arrêts de couleur', lbl_css:'CSS généré', btn_add:'+ Ajouter un arrêt' },
    de:{ tool_title:'CSS-Verlauf-Generator', lbl_type:'Typ', lbl_angle:'Winkel', lbl_stops:'Farbstopps', lbl_css:'Generiertes CSS', btn_add:'+ Stop hinzufügen' },
    it:{ tool_title:'Generatore di gradienti CSS', lbl_type:'Tipo', lbl_angle:'Angolo', lbl_stops:'Stop di colore', lbl_css:'CSS generato', btn_add:'+ Aggiungi stop' },
    zh:{ tool_title:'CSS 渐变生成器', lbl_type:'类型', lbl_angle:'角度', lbl_stops:'颜色节点', lbl_css:'生成的 CSS', btn_add:'+ 添加节点' },
    ja:{ tool_title:'CSSグラデーションジェネレーター', lbl_type:'タイプ', lbl_angle:'角度', lbl_stops:'カラーストップ', lbl_css:'生成されたCSS', btn_add:'+ ストップを追加' },
  },
  // ── color-convert ──
  'color-convert': {
    en:{ tool_title:'Color format converter' },
    es:{ tool_title:'Conversor de formato de color' },
    pt:{ tool_title:'Conversor de formato de cor' },
    fr:{ tool_title:'Convertisseur de format de couleur' },
    de:{ tool_title:'Farbformat-Konverter' },
    it:{ tool_title:'Convertitore di formato colore' },
    zh:{ tool_title:'颜色格式转换器' },
    ja:{ tool_title:'カラーフォーマット変換ツール' },
  },
  // ── palette-generator ──
  'palette-generator': {
    en:{ tool_title:'Palette from base color', lbl_shades:'Shades of base color', lbl_export:'Export CSS' },
    es:{ tool_title:'Paleta desde color base', lbl_shades:'Variaciones del color base', lbl_export:'Exportar CSS' },
    pt:{ tool_title:'Paleta a partir de cor base', lbl_shades:'Tons da cor base', lbl_export:'Exportar CSS' },
    fr:{ tool_title:'Palette depuis une couleur de base', lbl_shades:'Nuances de la couleur de base', lbl_export:'Exporter CSS' },
    de:{ tool_title:'Palette aus Basisfarbe', lbl_shades:'Abstufungen der Basisfarbe', lbl_export:'CSS exportieren' },
    it:{ tool_title:'Palette dal colore base', lbl_shades:'Sfumature del colore base', lbl_export:'Esporta CSS' },
    zh:{ tool_title:'从基础颜色生成调色板', lbl_shades:'基础颜色的色阶', lbl_export:'导出 CSS' },
    ja:{ tool_title:'ベースカラーからパレット生成', lbl_shades:'ベースカラーのシェード', lbl_export:'CSSをエクスポート' },
  },
  // ── units ──
  units: {
    en:{ tool_title:'CSS unit converter', lbl_base:'Base font size', lbl_vpw:'Viewport width', lbl_vph:'Viewport height', lbl_ref:'Common values reference' },
    es:{ tool_title:'Conversor de unidades CSS', lbl_base:'Tamaño de fuente base', lbl_vpw:'Ancho del viewport', lbl_vph:'Alto del viewport', lbl_ref:'Referencia de valores comunes' },
    pt:{ tool_title:'Conversor de unidades CSS', lbl_base:'Tamanho de fonte base', lbl_vpw:'Largura do viewport', lbl_vph:'Altura do viewport', lbl_ref:'Referência de valores comuns' },
    fr:{ tool_title:'Convertisseur d\'unités CSS', lbl_base:'Taille de police de base', lbl_vpw:'Largeur du viewport', lbl_vph:'Hauteur du viewport', lbl_ref:'Valeurs de référence courantes' },
    de:{ tool_title:'CSS-Einheiten-Konverter', lbl_base:'Basis-Schriftgröße', lbl_vpw:'Viewport-Breite', lbl_vph:'Viewport-Höhe', lbl_ref:'Häufige Referenzwerte' },
    it:{ tool_title:'Convertitore unità CSS', lbl_base:'Dimensione font base', lbl_vpw:'Larghezza viewport', lbl_vph:'Altezza viewport', lbl_ref:'Valori di riferimento comuni' },
    zh:{ tool_title:'CSS 单位转换器', lbl_base:'基础字体大小', lbl_vpw:'视口宽度', lbl_vph:'视口高度', lbl_ref:'常用值参考表' },
    ja:{ tool_title:'CSS単位変換ツール', lbl_base:'基本フォントサイズ', lbl_vpw:'ビューポート幅', lbl_vph:'ビューポート高さ', lbl_ref:'よく使う値の参考表' },
  },
  // ── compress ──
  compress: {
    en:{ tool_title:'Image compressor', drop_title:'Drop your image here', drop_sub:'JPG, PNG, WEBP — images never leave your device', drop_or:'or', drop_btn:'Browse files', lbl_quality:'Quality', lbl_orig:'Original', lbl_comp:'Compressed', lbl_savings:'Savings', btn_download:'Download compressed', btn_reset:'← Try another image' },
    es:{ tool_title:'Compresor de imágenes', drop_title:'Arrastrá tu imagen acá', drop_sub:'JPG, PNG, WEBP — las imágenes nunca salen de tu dispositivo', drop_or:'o', drop_btn:'Elegir archivo', lbl_quality:'Calidad', lbl_orig:'Original', lbl_comp:'Comprimida', lbl_savings:'Ahorro', btn_download:'Descargar comprimida', btn_reset:'← Probar con otra imagen' },
    pt:{ tool_title:'Compressor de imagens', drop_title:'Solte sua imagem aqui', drop_sub:'JPG, PNG, WEBP — as imagens nunca saem do seu dispositivo', drop_or:'ou', drop_btn:'Escolher arquivo', lbl_quality:'Qualidade', lbl_orig:'Original', lbl_comp:'Comprimida', lbl_savings:'Economia', btn_download:'Baixar comprimida', btn_reset:'← Tentar outra imagem' },
    fr:{ tool_title:'Compresseur d\'images', drop_title:'Déposez votre image ici', drop_sub:'JPG, PNG, WEBP — vos images ne quittent jamais votre appareil', drop_or:'ou', drop_btn:'Parcourir les fichiers', lbl_quality:'Qualité', lbl_orig:'Original', lbl_comp:'Compressé', lbl_savings:'Économie', btn_download:'Télécharger compressé', btn_reset:'← Essayer une autre image' },
    de:{ tool_title:'Bildkompressor', drop_title:'Bild hier ablegen', drop_sub:'JPG, PNG, WEBP — Bilder verlassen nie dein Gerät', drop_or:'oder', drop_btn:'Datei auswählen', lbl_quality:'Qualität', lbl_orig:'Original', lbl_comp:'Komprimiert', lbl_savings:'Einsparung', btn_download:'Komprimiert herunterladen', btn_reset:'← Anderes Bild versuchen' },
    it:{ tool_title:'Compressore di immagini', drop_title:'Trascina qui la tua immagine', drop_sub:'JPG, PNG, WEBP — le immagini non lasciano mai il tuo dispositivo', drop_or:'oppure', drop_btn:'Sfoglia file', lbl_quality:'Qualità', lbl_orig:'Originale', lbl_comp:'Compressa', lbl_savings:'Risparmio', btn_download:'Scarica compressa', btn_reset:'← Prova un\'altra immagine' },
    zh:{ tool_title:'图片压缩工具', drop_title:'将图片拖放到此处', drop_sub:'JPG、PNG、WEBP — 图片不会离开您的设备', drop_or:'或者', drop_btn:'浏览文件', lbl_quality:'质量', lbl_orig:'原始', lbl_comp:'压缩后', lbl_savings:'节省', btn_download:'下载压缩图片', btn_reset:'← 尝试其他图片' },
    ja:{ tool_title:'画像圧縮ツール', drop_title:'ここに画像をドロップ', drop_sub:'JPG・PNG・WEBP — 画像はデバイスから外に出ません', drop_or:'または', drop_btn:'ファイルを選択', lbl_quality:'品質', lbl_orig:'元のサイズ', lbl_comp:'圧縮後', lbl_savings:'削減量', btn_download:'圧縮画像をダウンロード', btn_reset:'← 別の画像を試す' },
  },
  // ── fonts ──
  fonts: {
    en:{ tool_title:'Google Fonts picker', lbl_preview:'Preview text', lbl_size:'Size', lbl_category:'Category', lbl_sort:'Sort by', lbl_fonts:'Fonts — click to select', btn_more:'Load more fonts', lbl_embed:'Embed code' },
    es:{ tool_title:'Selector de Google Fonts', lbl_preview:'Texto de vista previa', lbl_size:'Tamaño', lbl_category:'Categoría', lbl_sort:'Ordenar por', lbl_fonts:'Fuentes — hacé click para seleccionar', btn_more:'Cargar más fuentes', lbl_embed:'Código de inserción' },
    pt:{ tool_title:'Seletor de Google Fonts', lbl_preview:'Texto de prévia', lbl_size:'Tamanho', lbl_category:'Categoria', lbl_sort:'Ordenar por', lbl_fonts:'Fontes — clique para selecionar', btn_more:'Carregar mais fontes', lbl_embed:'Código de incorporação' },
    fr:{ tool_title:'Sélecteur Google Fonts', lbl_preview:'Texte d\'aperçu', lbl_size:'Taille', lbl_category:'Catégorie', lbl_sort:'Trier par', lbl_fonts:'Polices — cliquez pour sélectionner', btn_more:'Charger plus de polices', lbl_embed:'Code d\'intégration' },
    de:{ tool_title:'Google Fonts Picker', lbl_preview:'Vorschautext', lbl_size:'Größe', lbl_category:'Kategorie', lbl_sort:'Sortieren nach', lbl_fonts:'Schriften — klicken zum Auswählen', btn_more:'Mehr Schriften laden', lbl_embed:'Einbettungscode' },
    it:{ tool_title:'Selettore Google Fonts', lbl_preview:'Testo di anteprima', lbl_size:'Dimensione', lbl_category:'Categoria', lbl_sort:'Ordina per', lbl_fonts:'Font — clicca per selezionare', btn_more:'Carica altri font', lbl_embed:'Codice di incorporamento' },
    zh:{ tool_title:'Google 字体选择器', lbl_preview:'预览文本', lbl_size:'大小', lbl_category:'类别', lbl_sort:'排序方式', lbl_fonts:'字体 — 点击选择', btn_more:'加载更多字体', lbl_embed:'嵌入代码' },
    ja:{ tool_title:'Google フォントピッカー', lbl_preview:'プレビューテキスト', lbl_size:'サイズ', lbl_category:'カテゴリ', lbl_sort:'並び替え', lbl_fonts:'フォント — クリックして選択', btn_more:'もっと読み込む', lbl_embed:'埋め込みコード' },
  },
};

// ── ENGINE ────────────────────────────────────────────────────
let _currentLang = 'en';
let _pageKey = 'index';

function detectLang() {
  const saved = localStorage.getItem('palettly_lang');
  if (saved && T_GLOBAL[saved]) return saved;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('pt')) return 'pt';
  if (nav.startsWith('fr')) return 'fr';
  if (nav.startsWith('de')) return 'de';
  if (nav.startsWith('it')) return 'it';
  if (nav.startsWith('zh')) return 'zh';
  if (nav.startsWith('ja')) return 'ja';
  return 'en';
}

function getT(code) {
  const global = T_GLOBAL[code] || T_GLOBAL.en;
  const page   = (T_PAGES[_pageKey] && T_PAGES[_pageKey][code]) || {};
  return Object.assign({}, global, page);
}

function applyLang(code) {
  _currentLang = code;
  const t = getT(code);
  document.documentElement.lang = code;
  localStorage.setItem('palettly_lang', code);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const lang = LANGS.find(l => l.code === code) || LANGS[0];
  const flagEl = document.getElementById('lang-current-flag');
  const nameEl = document.getElementById('lang-current-name');
  if (flagEl) flagEl.textContent = lang.flag;
  if (nameEl) nameEl.textContent = lang.name;

  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.code === code);
  });

  // fire custom event so page-specific JS can react
  document.dispatchEvent(new CustomEvent('langchange', { detail: { code, t } }));
}

function buildLangDropdown() {
  const dd = document.getElementById('lang-dropdown');
  if (!dd) return;
  LANGS.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lang-opt';
    btn.dataset.code = l.code;
    btn.innerHTML = `<span class="lang-flag">${l.flag}</span>${l.label}`;
    btn.onclick = () => { applyLang(l.code); closeLangMenu(); };
    dd.appendChild(btn);
  });
}

function closeLangMenu() {
  const w = document.getElementById('lang-wrap');
  if (w) w.classList.remove('open');
}

function initI18n(pageKey) {
  _pageKey = pageKey || 'index';

  const btn = document.getElementById('lang-btn');
  if (btn) {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      document.getElementById('lang-wrap').classList.toggle('open');
    });
  }
  document.addEventListener('click', closeLangMenu);

  buildLangDropdown();
  applyLang(detectLang());
}

// expose globals
window.PALETTLY = { initI18n, applyLang, getT, LANGS, T_GLOBAL, T_PAGES, get currentLang(){ return _currentLang; } };

// ── ADBLOCK DETECTOR ─────────────────────────────────────────
(function() {
  const STORAGE_KEY = 'palettly_adblock_dismissed';
  const COOLDOWN_DAYS = 7;

  function wasDismissedRecently() {
    const ts = localStorage.getItem(STORAGE_KEY);
    if (!ts) return false;
    return (Date.now() - parseInt(ts)) < COOLDOWN_DAYS * 24 * 60 * 60 * 1000;
  }

  function injectStyles() {
    if (document.getElementById('palettly-adblock-style')) return;
    const style = document.createElement('style');
    style.id = 'palettly-adblock-style';
    style.textContent = `
      #palettly-adblock-banner {
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        width: min(640px, calc(100vw - 32px));
        background: #fff;
        border: 1px solid #e5e3dc;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,.12);
        padding: 18px 20px;
        display: flex;
        align-items: flex-start;
        gap: 14px;
        animation: palettly-slide-up .3s ease;
        font-family: 'DM Sans', system-ui, sans-serif;
      }
      @keyframes palettly-slide-up {
        from { opacity:0; transform: translateX(-50%) translateY(16px); }
        to   { opacity:1; transform: translateX(-50%) translateY(0); }
      }
      #palettly-adblock-banner .ab-icon {
        width: 38px; height: 38px; border-radius: 10px;
        background: #f0faf3; border: 1px solid #aee6c3;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
      }
      #palettly-adblock-banner .ab-body { flex: 1; min-width: 0; }
      #palettly-adblock-banner .ab-title {
        font-size: 14px; font-weight: 500; color: #181714;
        margin-bottom: 4px; line-height: 1.4;
      }
      #palettly-adblock-banner .ab-text {
        font-size: 13px; color: #6b6860; line-height: 1.5; margin-bottom: 12px;
      }
      #palettly-adblock-banner .ab-text strong { color: #181714; font-weight: 500; }
      #palettly-adblock-banner .ab-actions {
        display: flex; gap: 8px; flex-wrap: wrap;
      }
      #palettly-adblock-banner .ab-btn-kofi {
        font-family: inherit; font-size: 13px; font-weight: 500;
        background: #FF5E5B; color: #fff; border: none;
        padding: 7px 16px; border-radius: 8px; cursor: pointer;
        text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
        transition: background .15s;
      }
      #palettly-adblock-banner .ab-btn-kofi:hover { background: #e54f4c; }
      #palettly-adblock-banner .ab-btn-dismiss {
        font-family: inherit; font-size: 13px;
        background: none; color: #a09d93;
        border: 1px solid #e5e3dc; padding: 7px 14px;
        border-radius: 8px; cursor: pointer;
        transition: all .15s;
      }
      #palettly-adblock-banner .ab-btn-dismiss:hover { background: #f3f2ee; color: #181714; }
      #palettly-adblock-banner .ab-close {
        background: none; border: none; cursor: pointer;
        color: #a09d93; font-size: 18px; line-height: 1;
        padding: 2px 4px; flex-shrink: 0; transition: color .15s;
      }
      #palettly-adblock-banner .ab-close:hover { color: #181714; }
    `;
    document.head.appendChild(style);
  }

  function showBanner() {
    if (document.getElementById('palettly-adblock-banner')) return;
    injectStyles();

    const lang = localStorage.getItem('palettly_lang') || 'en';
    const msgs = {
      en: {
        title: 'We noticed you\'re using an adblocker',
        text: '<strong>Palettly will never put an ad between you and your work.</strong> Our ads are always peripheral — never popups, never interstitials. They\'re what keeps everything here free.',
        kofi: 'Support on Ko-fi',
        dismiss: 'I\'ll whitelist the site',
        close: 'Maybe later',
      },
      es: {
        title: 'Notamos que usás un bloqueador de anuncios',
        text: '<strong>Palettly nunca va a poner un anuncio entre vos y tu trabajo.</strong> Nuestros anuncios son siempre periféricos — nunca popups, nunca intersticiales. Son lo que mantiene todo esto gratuito.',
        kofi: 'Apoyar en Ko-fi',
        dismiss: 'Voy a poner en whitelist el sitio',
        close: 'Quizás después',
      },
      pt: {
        title: 'Notamos que você está usando um bloqueador de anúncios',
        text: '<strong>O Palettly nunca vai colocar um anúncio entre você e seu trabalho.</strong> Nossos anúncios são sempre periféricos — nunca popups, nunca intersticiais. Eles mantêm tudo gratuito.',
        kofi: 'Apoiar no Ko-fi',
        dismiss: 'Vou colocar o site na whitelist',
        close: 'Talvez depois',
      },
      fr: {
        title: 'Nous avons détecté un bloqueur de publicités',
        text: '<strong>Palettly ne mettra jamais une publicité entre vous et votre travail.</strong> Nos annonces sont toujours périphériques — jamais de popups, jamais d\'interstitiels. C\'est ce qui garde tout gratuit.',
        kofi: 'Soutenir sur Ko-fi',
        dismiss: 'Je vais mettre le site en liste blanche',
        close: 'Peut-être plus tard',
      },
      de: {
        title: 'Wir haben einen Werbeblocker erkannt',
        text: '<strong>Palettly wird nie eine Werbung zwischen dich und deine Arbeit schalten.</strong> Unsere Anzeigen sind immer peripher — keine Popups, keine Interstitials. Sie halten alles kostenlos.',
        kofi: 'Auf Ko-fi unterstützen',
        dismiss: 'Ich werde die Seite auf die Whitelist setzen',
        close: 'Vielleicht später',
      },
      it: {
        title: 'Abbiamo rilevato un adblocker',
        text: '<strong>Palettly non metterà mai una pubblicità tra te e il tuo lavoro.</strong> I nostri annunci sono sempre periferici — mai popup, mai interstitial. Sono ciò che mantiene tutto gratuito.',
        kofi: 'Supporta su Ko-fi',
        dismiss: 'Aggiungerò il sito alla whitelist',
        close: 'Forse dopo',
      },
      zh: {
        title: '我们检测到您正在使用广告拦截器',
        text: '<strong>Palettly 永远不会在您和您的工作之间插入广告。</strong>我们的广告始终位于页面边缘——从不弹窗，从不全屏。正是它们让一切保持免费。',
        kofi: '在 Ko-fi 上支持我们',
        dismiss: '我会将网站加入白名单',
        close: '也许以后',
      },
      ja: {
        title: '広告ブロッカーを検出しました',
        text: '<strong>Palettlyはあなたの作業を妨げる広告を絶対に表示しません。</strong>広告は常にページの周辺部にあり、ポップアップや全画面広告は一切ありません。広告がこのサービスを無料で維持しています。',
        kofi: 'Ko-fiでサポート',
        dismiss: 'サイトをホワイトリストに追加します',
        close: 'あとで',
      },
    };

    const m = msgs[lang] || msgs.en;

    const banner = document.createElement('div');
    banner.id = 'palettly-adblock-banner';
    banner.innerHTML = `
      <div class="ab-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e7d44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
        </svg>
      </div>
      <div class="ab-body">
        <p class="ab-title">${m.title}</p>
        <p class="ab-text">${m.text}</p>
        <div class="ab-actions">
          <a class="ab-btn-kofi" href="https://ko-fi.com/palettly" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.69-.929-1.201-2.224-.43-3.41.7-1.1 2.297-1.501 3.422-.503l.028.023.032-.024c1.143-1.019 2.791-.602 3.472.439.733 1.09.491 2.422-.061 3.52z"/></svg>
            ${m.kofi}
          </a>
          <button class="ab-btn-dismiss" id="ab-dismiss">${m.dismiss}</button>
          <button class="ab-btn-dismiss ab-close" id="ab-close">${m.close}</button>
        </div>
      </div>
      <button class="ab-close" id="ab-x">×</button>
    `;

    document.body.appendChild(banner);

    function dismiss() {
      localStorage.setItem(STORAGE_KEY, Date.now().toString());
      banner.style.animation = 'none';
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(16px)';
      banner.style.transition = 'opacity .25s, transform .25s';
      setTimeout(() => banner.remove(), 300);
    }

    document.getElementById('ab-dismiss').addEventListener('click', dismiss);
    document.getElementById('ab-close').addEventListener('click', dismiss);
    document.getElementById('ab-x').addEventListener('click', dismiss);
  }

  function detectAdblock() {
    if (wasDismissedRecently()) return;

    // Method: inject a fake ad element and check if it gets hidden/removed
    const trap = document.createElement('div');
    trap.className = 'ad ads adsbox ad-banner pub_300x250 pub_300x250m pub_728x90 text-ad textAd';
    trap.style.cssText = 'position:absolute;left:-9999px;height:1px;width:1px;pointer-events:none';
    trap.innerHTML = '&nbsp;';
    document.body.appendChild(trap);

    setTimeout(() => {
      const blocked =
        trap.offsetHeight === 0 ||
        trap.offsetParent === null ||
        window.getComputedStyle(trap).display === 'none' ||
        window.getComputedStyle(trap).visibility === 'hidden';

      trap.remove();
      if (blocked) showBanner();
    }, 150);
  }

  // Run after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectAdblock);
  } else {
    setTimeout(detectAdblock, 500);
  }
})();
