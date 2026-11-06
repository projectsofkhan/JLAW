(function () {
    const container = document.getElementById('pages-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentEl = document.getElementById('page-current');
    const totalEl = document.getElementById('page-total');
    const progressFill = document.getElementById('progress-fill');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    let currentIndex = 0;

    const THEMES = [
        { name: 'theme-light',   icon: '☾' },
        { name: 'theme-rainbow', icon: '🌈' },
        { name: 'theme-dark',    icon: '☀' }
    ];
    let themeIndex = 0;

    const applyTheme = (i) => {
        THEMES.forEach(t => document.body.classList.remove(t.name));
        document.body.classList.add(THEMES[i].name);
        themeIcon.textContent = THEMES[i].icon;
    };

    const buildDots = () => {
        const dots = document.createElement('div');
        dots.className = 'rainbow-dots';
        for (let i = 0; i < 7; i++) dots.appendChild(document.createElement('span'));
        return dots;
    };

    const renderPage = (index) => {
        const page = pages[index];
        if (!page) return;

        const wrapper = document.createElement('article');
        wrapper.className = 'page';
        wrapper.id = 'page-' + (index + 1);

        if (index === 0) wrapper.classList.add('cover-page');
        if (index === pages.length - 1) wrapper.classList.add('outro-page');

        const title = document.createElement('h2');
        title.className = 'page-title';
        title.textContent = page.title;

        const content = document.createElement('div');
        content.className = 'page-content';
        content.textContent = page.content;

        wrapper.appendChild(title);
        wrapper.appendChild(content);

        if (wrapper.classList.contains('cover-page') || wrapper.classList.contains('outro-page')) {
            wrapper.appendChild(buildDots());
        }

        container.innerHTML = '';
        container.appendChild(wrapper);

        currentEl.textContent = index + 1;
        totalEl.textContent = pages.length;
        progressFill.style.width = (((index + 1) / pages.length) * 100) + '%';

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === pages.length - 1;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goPrev = () => { if (currentIndex > 0) { currentIndex--; renderPage(currentIndex); } };
    const goNext = () => { if (currentIndex < pages.length - 1) { currentIndex++; renderPage(currentIndex); } };

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'ArrowRight') goNext();
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.bottom-nav')) return;
        if (e.target.closest('.theme-toggle')) return;

        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1700);
    });

    themeToggle.addEventListener('click', () => {
        themeIndex = (themeIndex + 1) % THEMES.length;
        applyTheme(themeIndex);
    });

    applyTheme(0);

    if (pages && pages.length) renderPage(0);
})();