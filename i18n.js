const translations = {
    'ru': {
        'title': 'Туризм России 2026',
        'login': 'Войти',
        'start': 'Начать опрос',
        'language': 'Язык'
    },
    'en': {
        'title': 'Tourism of Russia 2026',
        'login': 'Login',
        'start': 'Start Survey',
        'language': 'Language'
    },
    'ar': {
        'title': 'سياحة روسيا 2026',
        'login': 'تسجيل الدخول',
        'start': 'ابدأ الاستطلاع',
        'language': 'اللغة'
    },
    'hi': {
        'title': 'रूस का पर्यटन 2026',
        'login': 'लॉग इन करें',
        'start': 'सर्वेक्षण शुरू करें',
        'language': 'भाषा'
    },
    'zh': {
        'title': '2026年俄罗斯旅游',
        'login': '登录',
        'start': '开始调查',
        'language': '语言'
    },
    'es': {
        'title': 'Turismo de Rusia 2026',
        'login': 'Iniciar sesión',
        'start': 'Iniciar encuesta',
        'language': 'Idioma'
    },
    'de': {
        'title': 'Tourismus in Russland 2026',
        'login': 'Anmelden',
        'start': 'Umfrage starten',
        'language': 'Sprache'
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ru';
    setLanguage(savedLang);
});
