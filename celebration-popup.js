/* ====== Celebration Popup - JavaScript ====== */

/**
 * Lesson to Quiz Chapter Mapping
 * Maps lesson file names to their corresponding quiz chapter IDs
 */
const LESSON_QUIZ_MAP = {
    'index': { chapterId: 1, chapterName: 'Chapter 1 — مقدمة في الشبكات' },
    'lesson2': { chapterId: 2, chapterName: 'Chapter 2 — نموذج OSI' },
    'lesson3': { chapterId: 3, chapterName: 'Chapter 3 — Physical Layer' },
    'lesson4': { chapterId: 7, chapterName: 'Chapter 7 — Transmission Media' },
    'lesson5': { chapterId: 9, chapterName: 'Chapter 9 — Data-Link Layer' },
    'lesson6': { chapterId: 10, chapterName: 'Chapter 10 — Error Detection' },
    'lesson7': { chapterId: 12, chapterName: 'Chapter 12 — Media Access Control' },
    'lesson8': { chapterId: 13, chapterName: 'Chapter 13 — LANs & Ethernet' },
    'lesson9': { chapterId: null, chapterName: 'IPv4 Addressing' } // No quiz for this
};

/**
 * Get current lesson from URL
 */
function getCurrentLesson() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '');
    return filename || 'index';
}

/**
 * Create confetti elements - Site colors only
 */
function createConfetti(container) {
    const colors = ['#6366f1', '#818cf8', '#06b6d4', '#22d3ee'];

    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(confetti);
    }
}

/**
 * Show celebration popup
 */
function showCelebrationPopup() {
    const lesson = getCurrentLesson();
    const lessonData = LESSON_QUIZ_MAP[lesson];

    if (!lessonData) return;

    // Check if popup was already shown for this lesson in this session
    const shownKey = `celebration_shown_${lesson}`;
    if (sessionStorage.getItem(shownKey)) return;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    overlay.id = 'celebrationOverlay';

    // Trophy SVG icon
    const trophySVG = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
            <path d="M4 22h16"/>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
        </svg>
    `;

    // Quiz button icon
    const quizSVG = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
    `;

    // Create popup content
    const hasQuiz = lessonData.chapterId !== null;
    const quizLink = hasQuiz ? `./quiz.html?chapter=${lessonData.chapterId}` : null;

    overlay.innerHTML = `
        <div class="celebration-popup">
            <div class="confetti-container" id="confettiContainer"></div>
            
            <div class="celebration-icon">${trophySVG}</div>
            
            <h2 class="celebration-title">أحسنت!</h2>
            
            <p class="celebration-message">
                لقد أنهيت هذه الملزمة بنجاح
            </p>
            
            <div class="celebration-chapter">${lessonData.chapterName}</div>
            
            <div class="celebration-buttons">
                ${hasQuiz ? `
                    <a href="${quizLink}" class="celebration-btn-quiz">
                        ${quizSVG}
                        <span>اختبر نفسك الآن</span>
                    </a>
                ` : `
                    <a href="./quiz.html" class="celebration-btn-quiz">
                        ${quizSVG}
                        <span>انتقل للاختبارات</span>
                    </a>
                `}
                <button class="celebration-btn-later" onclick="closeCelebrationPopup()">
                    لاحقاً
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Create confetti
    const confettiContainer = overlay.querySelector('#confettiContainer');
    createConfetti(confettiContainer);

    // Show popup with animation
    requestAnimationFrame(() => {
        overlay.classList.add('show');

        // Start confetti animation
        const confettiElements = confettiContainer.querySelectorAll('.confetti');
        confettiElements.forEach(c => c.classList.add('show'));
    });

    // Mark as shown
    sessionStorage.setItem(shownKey, 'true');

    // Close on overlay click (outside popup)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeCelebrationPopup();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeCelebrationPopup();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

/**
 * Close celebration popup
 */
function closeCelebrationPopup() {
    const overlay = document.getElementById('celebrationOverlay');
    if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => {
            overlay.remove();
        }, 400);
    }
}

/**
 * Check if user is on the last page and trigger celebration
 * This is called from the lesson JS files
 */
function checkAndCelebrate(currentPage, totalPages) {
    if (currentPage === totalPages) {
        // Delay to let the page content render first
        setTimeout(() => {
            showCelebrationPopup();
        }, 800);
    }
}

// Also support URL parameter for quiz chapter auto-selection
(function () {
    // Check if we're on quiz.html and have a chapter parameter
    if (window.location.pathname.includes('quiz.html')) {
        const params = new URLSearchParams(window.location.search);
        const chapterId = params.get('chapter');

        if (chapterId) {
            // Wait for quiz.js to initialize, then auto-select chapter
            window.addEventListener('load', () => {
                setTimeout(() => {
                    // Try to find and click the chapter card
                    const chapterCards = document.querySelectorAll('.chapter-card');
                    chapterCards.forEach(card => {
                        if (card.dataset.chapter === chapterId) {
                            card.click();
                        }
                    });
                }, 300);
            });
        }
    }
})();
