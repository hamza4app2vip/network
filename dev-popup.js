// Developer Popup Functionality
(function () {
    // Create and inject popup HTML
    function createDevPopup() {
        const popupHTML = `
        <div id="devPopupOverlay" class="dev-popup-overlay">
            <div class="dev-popup-card">
                <button id="closeDevPopup" class="dev-popup-close">&times;</button>
                <div class="dev-popup-content">
                    <div class="dev-popup-avatar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 1 0-16 0" />
                        </svg>
                    </div>
                    <div class="dev-popup-title">المطور</div>
                    <div class="dev-popup-name">AI Developer</div>
                    <div class="dev-popup-subtitle">نحن نستمتع في تطوير المواقع والتطبيقات ونبدع في تصميم ادق التفاصيل</div>
                    <div class="dev-popup-divider"></div>
                    <div class="dev-popup-info">
                        <p>تم تطوير هذا المشروع التعليمي لمساعدة الطلاب في دراسة مادة شبكات الحاسوب بطريقة تفاعلية وممتعة.</p>
                    </div>
                    <div class="dev-popup-social">
                        <a href="#" class="dev-social-btn" title="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="#" class="dev-social-btn" title="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="#" class="dev-social-btn" title="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                    <div class="dev-popup-coming-soon">قريباً</div>
                </div>
            </div>
        </div>`;


        document.body.insertAdjacentHTML('beforeend', popupHTML);
    }

    // Add About Developer button to drawer
    function addDevButton() {
        const drawerThemeBtn = document.getElementById('drawerThemeBtn');
        if (!drawerThemeBtn) return;

        // Check if button already exists
        if (document.getElementById('aboutDevBtn')) return;

        const devBtnHTML = `
        <button id="aboutDevBtn" class="drawer-item">
            <div class="drawer-item-inner">
                <span class="drawer-icon">👨‍💻</span>
                <div class="drawer-item-text">
                    <div class="drawer-item-title">عن المطور</div>
                </div>
            </div>
        </button>`;

        drawerThemeBtn.insertAdjacentHTML('afterend', devBtnHTML);
    }

    // Initialize popup functionality
    function initDevPopup() {
        const aboutDevBtn = document.getElementById("aboutDevBtn");
        const devPopupOverlay = document.getElementById("devPopupOverlay");
        const closeDevPopup = document.getElementById("closeDevPopup");

        if (aboutDevBtn && devPopupOverlay) {
            aboutDevBtn.addEventListener("click", () => {
                // Close drawer
                const drawerOverlay = document.getElementById("drawerOverlay");
                if (drawerOverlay) {
                    drawerOverlay.classList.remove("open");
                }
                // Show popup after short delay
                setTimeout(() => {
                    devPopupOverlay.classList.add("active");
                    document.body.style.overflow = "hidden";
                }, 200);
            });
        }

        if (closeDevPopup) {
            closeDevPopup.addEventListener("click", () => {
                devPopupOverlay.classList.remove("active");
                document.body.style.overflow = "";
            });
        }

        if (devPopupOverlay) {
            devPopupOverlay.addEventListener("click", (e) => {
                if (e.target === devPopupOverlay) {
                    devPopupOverlay.classList.remove("active");
                    document.body.style.overflow = "";
                }
            });
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addDevButton();
            createDevPopup();
            initDevPopup();
        });
    } else {
        addDevButton();
        createDevPopup();
        initDevPopup();
    }
})();
