(function () {
    const container = document.getElementById('pages-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentEl = document.getElementById('page-current');
    const totalEl = document.getElementById('page-total');
    const progressFill = document.getElementById('progress-fill');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const colorBurstHost = document.getElementById('color-burst');

    let currentIndex = 0;

    const COLOURS = ['#ffe27a', '#ffb3c8', '#a8e0b8', '#c9b6ff', '#ffc4a1'];

    const fireBurst = () => {
        const layer = document.createElement('div');
        layer.className = 'page-transition';
        const count = 5;
        for (let i = 0; i < count; i++) {
            const span = document.createElement('span');
            const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
            const distance = 90 + Math.random() * 70;
            span.style.left = '50%';
            span.style.top = '40%';
            span.style.background = COLOURS[i % COLOURS.length];
            span.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
            span.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
            span.style.animationDelay = (i * 0.08) + 's';
            span.style.width = span.style.height = (16 + Math.random() * 14) + 'px';
            span.style.borderRadius = Math.random() > 0.5 ? '50%' : '6px';
            layer.appendChild(span);
        }
        document.body.appendChild(layer);
        setTimeout(() => layer.remove(), 3400);
    };

    const buildFrame = (wrapper) => {
        const frame = document.createElement('div');
        if (wrapper.classList.contains('cover-page')) frame.className = 'cover-frame';
        else if (wrapper.classList.contains('outro-page')) frame.className = 'outro-frame';
        else return;
        wrapper.appendChild(frame);
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
        buildFrame(wrapper);

        container.innerHTML = '';
        container.appendChild(wrapper);

        currentEl.textContent = index + 1;
        totalEl.textContent = pages.length;
        progressFill.style.width = (((index + 1) / pages.length) * 100) + '%';

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === pages.length - 1;

        fireBurst();
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

    document.addEventListener('click', (e) => {
        if (e.target.closest('.bottom-nav')) return;
        const size = 180 + Math.random() * 80;
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1500);
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
