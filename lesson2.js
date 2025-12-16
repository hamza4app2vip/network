/* ====== Data (ملخص صفحة بصفحة — الوحدة الثانية: OSI) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة الوحدة الثانية — نموذج OSI",
        brief: "تعريف النموذج المرجعي OSI Reference Model.",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "الوحدة الثانية تتناول مقدّمة للـ OSI Reference Model (النموذج المرجعي للشبكات).",
                    "هذا النموذج هو الأساس لفهم كيفية عمل الشبكات وتواصل الأجهزة."
                ]
            }
        ],
        keywords: ["OSI", "Reference Model", "النموذج المرجعي"]
    },

    {
        page: 2,
        title: "هيكلية الشبكات — مفهوم الطبقات (Layers)",
        brief: "لماذا نقسم الشبكة لطبقات؟ وكيف تتواصل الطبقات؟",
        sections: [
            {
                h: "تبسيط التصميم بالطبقات",
                bullets: [
                    "لتبسيط تصميم الشبكات يتم تقسيمها إلى طبقات (Layers).",
                    "كل طبقة تقدّم خدمة للطبقة الأعلى منها.",
                    "كل طبقة تتواصل مع نظيرتها في الطرف الآخر عبر بروتوكول (N-Protocol)."
                ]
            },
            {
                h: "مثال توضيحي",
                bullets: [
                    "تشبيه البريد العادي: كل مرحلة (تغليف/نقل/تسليم) تشبه طبقة تؤدي جزءًا من المهمة.",
                    "الطبقات تعمل بشكل متكامل لإتمام عملية الاتصال."
                ]
            }
        ],
        keywords: ["Layers", "N-Protocol", "طبقات", "بروتوكول"]
    },

    {
        page: 3,
        title: "ما هو نموذج OSI؟ ولماذا وُضع؟",
        brief: "منظمة ISO وأهداف النموذج + الطبقات السبعة.",
        sections: [
            {
                h: "خلفية النموذج",
                bullets: [
                    "منظمة ISO قدّمت نموذج OSI لربط أنظمة مختلفة بدون تعديل عتادها/برمجياتها.",
                    "OSI ليس بروتوكولًا؛ هو نموذج لفهم وتصميم الشبكات بشكل مرن وقابل للتوسع."
                ]
            },
            {
                h: "هيكل النموذج",
                bullets: [
                    "يتكون من 7 طبقات، كل طبقة تنفّذ جزءًا من نقل المعلومات.",
                    "مبادئ التصميم: كل طبقة وظيفة واضحة، وحدود تقلّل تبادل البيانات.",
                    "عدد طبقات كافٍ لتجنب خلط وظائف مختلفة في طبقة واحدة."
                ]
            }
        ],
        keywords: ["ISO", "7 Layers", "OSI Model", "سبع طبقات"]
    },

    {
        page: 4,
        title: "مسار الرسالة (Encapsulation) + الطبقة الفيزيائية",
        brief: "كيف تنتقل البيانات بين الطبقات؟ وبداية Physical Layer.",
        sections: [
            {
                h: "التغليف (Encapsulation)",
                bullets: [
                    "الاتصال \"فعليًا\" مباشر فقط في الطبقة الفيزيائية (بتّات تتحول لإشارة).",
                    "الطبقات العليا تمر نزولًا عبر طبقات المرسل ثم صعودًا في المستقبل.",
                    "كل طبقة في المرسل تضيف معلوماتها للرسالة (تغليف)، والمستقبل يفك التغليف طبقة بطبقة.",
                    "يوجد Interface بين كل طبقتين حتى يمكن تغيير تنفيذ طبقة دون كسر الطبقات المجاورة."
                ]
            },
            {
                h: "Physical Layer — الطبقة الفيزيائية",
                bullets: [
                    "تهتم بنقل الـbits وبالمواصفات الكهربائية/الميكانيكية.",
                    "تشمل: الفولت، زمن البت، ونوع الإرسال."
                ]
            }
        ],
        keywords: ["Encapsulation", "Interface", "Physical Layer", "bits", "تغليف"]
    },

    {
        page: 5,
        title: "تفاصيل Physical + بداية Data Link",
        brief: "مواصفات الطبقة الفيزيائية + مقدمة طبقة وصلة البيانات.",
        sections: [
            {
                h: "Physical Layer — تفاصيل إضافية",
                bullets: [
                    "نوع الموصلات (Connectors).",
                    "ترميز البتات كهربائيًا/ضوئيًا.",
                    "المزامنة (Clock/bit sync).",
                    "إعداد الخط: نقطة-لنقطة أو متعدد النقاط.",
                    "تحديد الطوبولوجيا الفيزيائية.",
                    "ملاحظة مهمة: الطبقة الفيزيائية لا تضيف ترويسة للأطر القادمة من طبقة وصلة البيانات."
                ]
            },
            {
                h: "Data Link Layer — مقدمة",
                bullets: [
                    "هدفها إخفاء مشاكل الفيزيائية وتقديم نقل \"شبه خالٍ من الأخطاء\" لطبقة الشبكة.",
                    "أهم وظائفها: Framing (تحويل بتات إلى Frames).",
                    "Physical addressing (العنونة الفيزيائية).",
                    "Flow control (التحكم بالتدفق)."
                ]
            }
        ],
        keywords: ["Connectors", "Clock sync", "Framing", "Physical addressing", "Flow control"]
    },

    {
        page: 6,
        title: "تكملة Data Link + Network Layer",
        brief: "Error/Access control + مهام طبقة الشبكة.",
        sections: [
            {
                h: "Data Link Layer — تكملة",
                bullets: [
                    "Error control: اكتشاف الأخطاء، إعادة إرسال، كشف التكرار.",
                    "Access control: تحديد من يرسل على وسط مشترك.",
                    "وصلة البيانات تضيف Header + Trailer لبيانات طبقة الشبكة."
                ]
            },
            {
                h: "Network Layer — طبقة الشبكة",
                bullets: [
                    "مسؤولة عن توصيل الطرود عبر عدة شبكات وسيطة.",
                    "Logical addressing (العنونة المنطقية مثل IP).",
                    "Routing: توجيه الحزم بمسارات Static أو Dynamic.",
                    "تجزئة/إعادة تجميع (Fragmentation/Reassembly).",
                    "Congestion control: التحكم بالازدحام وقت الذروة."
                ]
            }
        ],
        keywords: ["Error control", "Access control", "Header", "Trailer", "Routing", "Fragmentation", "Congestion"]
    },

    {
        page: 7,
        title: "معنى الخدمات + Transport Layer",
        brief: "Node-to-Node vs End-to-End + طبقة النقل.",
        sections: [
            {
                h: "أنواع الخدمات",
                bullets: [
                    "Node-to-Node: وثوقية بين عقدتين متتاليتين فقط.",
                    "End-to-End: توصيل للوجهة النهائية بغض النظر عن العقد الوسيطة."
                ]
            },
            {
                h: "Transport Layer — طبقة النقل",
                bullets: [
                    "تنقل الرسالة كاملة بشكل موثوق \"Process-to-Process\".",
                    "تضمن الترتيب والسلامة (بعكس الشبكة التي تتعامل مع كل طرد منفصل).",
                    "Port/SAP: لتحديد التطبيق المقصود.",
                    "Segmentation/Reassembly: تقسيم وإعادة تجميع مع أرقام تسلسلية."
                ]
            }
        ],
        keywords: ["Node-to-Node", "End-to-End", "Process-to-Process", "Port", "SAP", "Segmentation"]
    },

    {
        page: 8,
        title: "تكملة Transport + Session Layer",
        brief: "Connection control + إدارة الجلسات.",
        sections: [
            {
                h: "Transport Layer — تكملة",
                bullets: [
                    "Connection control: قد تكون Connection-oriented (تأسيس اتصال ثم إرسال ثم إنهاء).",
                    "أو Connectionless (كل Segment مستقل).",
                    "Flow/Error control هنا End-to-End (من المصدر للوجهة)."
                ]
            },
            {
                h: "Session Layer — طبقة الجلسة",
                bullets: [
                    "خدمات للتطبيقات مثل إدارة الحوار.",
                    "Dialog control: Simplex أو Half-Duplex أو Full-Duplex.",
                    "نقاط تزامن/عودة (Synchronization points) لاستئناف الإرسال من آخر نقطة بدل الإعادة من البداية."
                ]
            }
        ],
        keywords: ["Connection-oriented", "Connectionless", "Session", "Dialog", "Synchronization"]
    },

    {
        page: 9,
        title: "Presentation + Application Layers",
        brief: "الترميز والتشفير + طبقة التطبيقات.",
        sections: [
            {
                h: "Session Layer — ملاحظة",
                bullets: [
                    "طبقة الجلسة تضيف ترويسة ونقاط مزامنة (Checkpoints).",
                    "تساعد في استعادة الاتصال عند انقطاعه."
                ]
            },
            {
                h: "Presentation Layer — طبقة العرض",
                bullets: [
                    "تهتم بـ Syntax/Semantic: ترجمة الترميزات بين الأنظمة.",
                    "Encryption: التشفير لحماية البيانات.",
                    "Compression: الضغط لتقليل حجم البيانات."
                ]
            },
            {
                h: "Application Layer — طبقة التطبيقات",
                bullets: [
                    "طبقة تطبيقات المستخدم.",
                    "البريد الإلكتروني (Email).",
                    "نقل الملفات وإدارتها (File Transfer).",
                    "برمجيات البحث واستخلاص المعلومات."
                ]
            }
        ],
        keywords: ["Checkpoints", "Encryption", "Compression", "Syntax", "Application", "Email"]
    },

    {
        page: 10,
        title: "أمثلة معايير طبقة التطبيقات",
        brief: "X.400 / FTAM / X.500 وخدمات الدليل.",
        sections: [
            {
                h: "معايير مهمة",
                bullets: [
                    "X.400: معيار للبريد الإلكتروني.",
                    "FTAM (File Transfer, Access and Management): نقل/ولوج/إدارة الملفات.",
                    "X.500: خدمات الدليل (Directory Services) للبحث عن الموارد."
                ]
            },
            {
                h: "ملخص الطبقات السبع",
                bullets: [
                    "Physical: نقل البتات كإشارات.",
                    "Data Link: الإطارات والتحكم بالأخطاء.",
                    "Network: التوجيه والعنونة المنطقية.",
                    "Transport: النقل الموثوق Process-to-Process.",
                    "Session: إدارة الجلسات والحوار.",
                    "Presentation: الترميز والتشفير والضغط.",
                    "Application: واجهة المستخدم والتطبيقات."
                ]
            }
        ],
        keywords: ["X.400", "FTAM", "X.500", "Directory Services", "ملخص"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_ch2_theme",
    done: "net_ch2_done_pages",
    last: "net_ch2_last_page"
};

let state = {
    q: "",
    activePage: Number(localStorage.getItem(LS.last) || 1),
    done: new Set(JSON.parse(localStorage.getItem(LS.done) || "[]"))
};

/* ====== Elements ====== */
const el = {
    themeBtn: document.getElementById("themeBtn"),
    resetBtn: document.getElementById("resetBtn"),
    q: document.getElementById("q"),
    clearBtn: document.getElementById("clearBtn"),
    pagesList: document.getElementById("pagesList"),
    counter: document.getElementById("counter"),
    pageKicker: document.getElementById("pageKicker"),
    pageTitle: document.getElementById("pageTitle"),
    summary: document.getElementById("summary"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    markBtn: document.getElementById("markBtn"),
    copyBtn: document.getElementById("copyBtn"),
    progressFill: document.getElementById("progressFill"),
    progressText: document.getElementById("progressText"),
    menuBtn: document.getElementById("menuBtn"),
    drawer: document.getElementById("drawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    closeDrawer: document.getElementById("closeDrawer"),
    drawerThemeBtn: document.getElementById("drawerThemeBtn")
};

/* ====== Drawer ====== */
function openDrawer() {
    if (el.drawer) el.drawer.classList.add("open");
    if (el.drawerOverlay) el.drawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    if (el.drawer) el.drawer.classList.remove("open");
    if (el.drawerOverlay) el.drawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

/* ====== Theme ====== */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LS.theme, theme);
    el.themeBtn.querySelector(".icon").textContent = (theme === "light") ? "☀" : "☾";
    // Update drawer theme button if exists
    if (el.drawerThemeBtn) {
        const icon = el.drawerThemeBtn.querySelector(".drawer-icon");
        if (icon) icon.textContent = (theme === "light") ? "☀" : "☾";
    }
}
function initTheme() {
    const saved = localStorage.getItem(LS.theme);
    if (saved) { applyTheme(saved); return; }
    const preferLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(preferLight ? "light" : "dark");
}

/* ====== Helpers ====== */
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
function byPage(p) { return PAGES.find(x => x.page === p); }
function escapeHtml(s) {
    return s.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
}
function highlight(text, q) {
    if (!q) return escapeHtml(text);
    const safe = escapeHtml(text);
    const re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return safe.replace(re, (m) => `<span class="hl">${m}</span>`);
}

function calcProgress() {
    const pct = Math.round((state.done.size / PAGES.length) * 100);
    el.progressFill.style.width = `${pct}%`;
    el.progressText.textContent = `${pct}%`;
    el.progressFill.parentElement.setAttribute("aria-valuenow", String(pct));
}

/* ====== Render List ====== */
function matchesQuery(p, q) {
    if (!q) return true;
    const hay = [
        p.title, p.brief,
        ...(p.keywords || []),
        ...(p.sections || []).flatMap(s => [s.h, ...(s.bullets || [])])
    ].join(" ").toLowerCase();
    return hay.includes(q.toLowerCase());
}

function renderList() {
    const q = state.q.trim();
    const items = PAGES.filter(p => matchesQuery(p, q));
    el.counter.textContent = `${items.length}/${PAGES.length}`;
    el.pagesList.innerHTML = "";

    items.forEach(p => {
        const div = document.createElement("div");
        div.className = "pageItem" +
            (p.page === state.activePage ? " active" : "") +
            (state.done.has(p.page) ? " done" : "");
        div.setAttribute("role", "listitem");
        div.tabIndex = 0;

        div.innerHTML = `
      <div class="badge">${p.page}</div>
      <div>
        <div class="pTitle">${highlight(p.title, q)}</div>
        <div class="pSub">${highlight(p.brief, q)}</div>
      </div>
      <div class="tick" aria-hidden="true">✔</div>
    `;

        div.addEventListener("click", () => setActive(p.page));
        div.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(p.page); }
        });

        el.pagesList.appendChild(div);
    });
}

/* ====== Render Content ====== */
function renderActive() {
    const p = byPage(state.activePage);
    if (!p) return;

    localStorage.setItem(LS.last, String(state.activePage));

    el.pageKicker.textContent = `صفحة ${p.page} من ${PAGES.length}`;
    el.pageTitle.textContent = p.title;

    const q = state.q.trim();
    const html = (p.sections || []).map(sec => {
        const bullets = (sec.bullets || []).map(b => `<li>${highlight(b, q)}</li>`).join("");
        return `
      <div class="section">
        <div class="sectionTitle">${highlight(sec.h, q)}</div>
        <ul>${bullets}</ul>
      </div>
    `;
    }).join("");

    el.summary.innerHTML = html || `<div class="hint">لا يوجد محتوى.</div>`;

    el.prevBtn.disabled = state.activePage <= 1;
    el.nextBtn.disabled = state.activePage >= PAGES.length;

    const done = state.done.has(p.page);
    el.markBtn.textContent = done ? "✓ هذه الصفحة مفهومة" : "✔︎ علّمها 'مفهومة'";
}

/* ====== Actions ====== */
function setActive(page) {
    state.activePage = clamp(page, 1, PAGES.length);
    renderList();
    renderActive();
}

function toggleDone() {
    const p = state.activePage;
    if (state.done.has(p)) state.done.delete(p);
    else state.done.add(p);

    localStorage.setItem(LS.done, JSON.stringify([...state.done]));
    calcProgress();
    renderList();
    renderActive();
}

function copySummary() {
    const p = byPage(state.activePage);
    if (!p) return;

    const lines = [];
    lines.push(`صفحة ${p.page}: ${p.title}`);
    lines.push(`— ${p.brief}`);
    lines.push("");
    (p.sections || []).forEach(s => {
        lines.push(`• ${s.h}`);
        (s.bullets || []).forEach(b => lines.push(`  - ${b}`));
        lines.push("");
    });

    navigator.clipboard.writeText(lines.join("\n")).then(() => {
        el.copyBtn.textContent = "✅ تم النسخ";
        setTimeout(() => el.copyBtn.textContent = "نسخ الملخص", 900);
    }).catch(() => {
        alert("تعذر النسخ. جرّب من المتصفح (Chrome) أو اسمح بالـClipboard.");
    });
}

function resetProgress() {
    if (!confirm("هل تريد تصفير التقدّم والعلامات؟")) return;
    state.done = new Set();
    localStorage.removeItem(LS.done);
    calcProgress();
    renderList();
    renderActive();
}

/* ====== Init ====== */
function init() {
    initTheme();
    calcProgress();
    renderList();
    setActive(state.activePage);

    // Drawer events
    if (el.menuBtn) el.menuBtn.addEventListener("click", openDrawer);
    if (el.closeDrawer) el.closeDrawer.addEventListener("click", closeDrawer);
    if (el.drawerOverlay) el.drawerOverlay.addEventListener("click", (e) => {
        if (e.target === el.drawerOverlay) closeDrawer();
    });

    el.themeBtn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(cur === "dark" ? "light" : "dark");
    });

    // Drawer theme toggle button
    if (el.drawerThemeBtn) {
        el.drawerThemeBtn.addEventListener("click", () => {
            const cur = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(cur === "dark" ? "light" : "dark");
        });
    }

    el.resetBtn.addEventListener("click", resetProgress);

    el.q.addEventListener("input", (e) => {
        state.q = e.target.value || "";
        renderList();
        renderActive();
    });

    el.clearBtn.addEventListener("click", () => {
        state.q = "";
        el.q.value = "";
        renderList();
        renderActive();
    });

    el.prevBtn.addEventListener("click", () => setActive(state.activePage - 1));
    el.nextBtn.addEventListener("click", () => setActive(state.activePage + 1));
    el.markBtn.addEventListener("click", toggleDone);
    el.copyBtn.addEventListener("click", copySummary);

    document.addEventListener("keydown", (e) => {
        if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;
        if (e.key === "ArrowLeft") setActive(state.activePage + 1);
        if (e.key === "ArrowRight") setActive(state.activePage - 1);
        if (e.key === "Escape") closeDrawer();
    });
}

init();
