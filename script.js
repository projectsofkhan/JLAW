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

        container.innerHTML = '';
        container.appendChild(wrapper);

        currentEl.textContent = index + 1;
        totalEl.textContent = pages.length;
        progressFill.style.width = (((index + 1) / pages.length) * 100) + '%';

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === pages.length - 1;

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goPrev = () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderPage(currentIndex);
        }
    };

    const goNext = () => {
        if (currentIndex < pages.length - 1) {
            currentIndex++;
            renderPage(currentIndex);
        }
    };

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'ArrowRight') goNext();
    });

    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('theme-dark');
        document.body.classList.toggle('theme-light', !isDark);
        themeIcon.textContent = isDark ? '☀' : '☾';
    });

    if (pages && pages.length) {
        renderPage(0);
    }
})();
