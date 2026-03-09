/**
 * Основной JavaScript-файл проекта
 * Стиль: повторяет пример из example.txt
 * Основано на курсе Stepik "Основы Git и GitHub"
 */

// ========================================
// Эффект печати текста
// ========================================
function initTypingEffect(elementId, textToType, delay = 800) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    let index = 0;
    textElement.innerHTML = '';

    function typeWriter() {
        if (index < textToType.length) {
            textElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, Math.random() * 100 + 50);
        }
    }

    setTimeout(typeWriter, delay);
}

// ========================================
// Модальное окно сертификатов
// ========================================
function initModal() {
    const modal = document.getElementById('cert-modal');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');
    const certImages = document.querySelectorAll('.cert-image');

    if (!modal || !modalImage || !modalClose) return;

    certImages.forEach(img => {
        img.addEventListener('click', function() {
            const src = this.getAttribute('src');
            modalImage.setAttribute('src', src);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ========================================
// Активная ссылка в навигации
// ========================================
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ========================================
// Сообщения печати для разных страниц
// ========================================
function initPageMessages() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        initTypingEffect('typing-text', 'Добро пожаловать в Git Learning Project...', 800);
    } else if (currentPage === 'detail.html') {
        initTypingEffect('typing-text', 'Загрузка информации о курсе...', 800);
    }
}

// ========================================
// Сообщение в консоли (пасхалка)
// ========================================
function initConsoleEasterEgg() {
    console.log('%c🐙 GIT LEARNING PROJECT', 'font-size: 20px; color: #B8D935; font-weight: bold;');
    console.log('%cСоздано после прохождения курса на Stepik', 'font-size: 12px; color: #B8D935;');
    console.log('%cРепозиторий: https://github.com/arushinofu/git-learning', 'font-size: 12px; color: #B8D935;');
    console.log('%c\nИспользуй git commit -m "сообщение" для коммитов!', 'font-size: 10px; color: #B8D935;');
}

// ========================================
// Генератор сообщений для коммитов
// ========================================
function generateCommitMessage(changeType) {
    const messages = {
        'feat': 'feat: добавить новую функциональность',
        'fix': 'fix: исправить ошибку',
        'docs': 'docs: обновить документацию',
        'style': 'style: форматирование кода',
        'refactor': 'refactor: рефакторинг кода',
        'test': 'test: добавить тесты',
        'chore': 'chore: обновить зависимости'
    };

    return messages[changeType] || 'chore: обновить проект';
}

// Делаем функцию доступной глобально
window.generateCommitMessage = generateCommitMessage;

// ========================================
// Запуск после загрузки страницы
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initModal();
    initNavigation();
    initPageMessages();
    initConsoleEasterEgg();

    console.log('%c✓ Система загружена', 'color: #B8D935;');
});
