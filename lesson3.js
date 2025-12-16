/* ====== Data (ملخص صفحة بصفحة — Chapter 3: Physical Layer) ====== */
const PAGES = [
    {
        page: 1,
        title: "البيانات والإشارات — Data and Signals",
        brief: "لماذا نحتاج إشارات؟ وكيف تنتقل البيانات؟",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "الطبقة الفيزيائية (Physical Layer) لا تتبادل بيانات مباشرة، بل تتبادل إشارات.",
                    "البيانات يجب أن تتحول لشكل يمكن أن يسافر داخل وسط ناقل (سلك/هواء/ألياف)."
                ]
            },
            {
                h: "لماذا نحتاج إشارات؟",
                bullets: [
                    "الوسيط الناقل لا يفهم 'بيانات'.",
                    "هو ينقل تغيّر كهربائي/مغناطيسي/ضوئي.",
                    "هذا التغيّر هو معنى الإشارة (Signal)."
                ]
            }
        ],
        keywords: ["Physical Layer", "Signals", "Data", "إشارات", "بيانات"]
    },

    {
        page: 2,
        title: "بيانات Analog و Digital",
        brief: "الفرق بين البيانات التماثلية والرقمية.",
        sections: [
            {
                h: "Analog Data (البيانات التماثلية)",
                bullets: [
                    "معلومات مستمرة (Continuous).",
                    "مثل: الصوت الطبيعي، درجة الحرارة، الحركة.",
                    "مثال: الساعة ذات العقارب تعطي الوقت بشكل متصل (تتحرك بسلاسة)."
                ]
            },
            {
                h: "Digital Data (البيانات الرقمية)",
                bullets: [
                    "معلومات متقطعة (Discrete states).",
                    "قيم محددة مثل 0 و 1.",
                    "مثال: الساعة الرقمية تقفز من 8:05 إلى 8:06 فجأة."
                ]
            }
        ],
        keywords: ["Analog", "Digital", "Continuous", "Discrete", "تماثلي", "رقمي"]
    },

    {
        page: 3,
        title: "إشارات Analog و Digital",
        brief: "خصائص الإشارات التماثلية والرقمية.",
        sections: [
            {
                h: "الإشارة التماثلية (Analog Signal)",
                bullets: [
                    "لها عدد لا نهائي من مستويات الشدة عبر الزمن.",
                    "القيمة تتغير بسلاسة."
                ]
            },
            {
                h: "الإشارة الرقمية (Digital Signal)",
                bullets: [
                    "لها عدد محدود من القيم (غالبًا 0 و 1 أو مستويات محددة)."
                ]
            },
            {
                h: "ملاحظة مهمة",
                bullets: [
                    "ممكن البيانات رقمية لكن تُرسل بإشارة تماثلية (عبر التضمين Modulation).",
                    "ممكن البيانات تماثلية لكن تُحوّل لرقمية بالـ Sampling."
                ]
            }
        ],
        keywords: ["Analog Signal", "Digital Signal", "Modulation", "Sampling"]
    },

    {
        page: 4,
        title: "إشارات دورية وغير دورية — Periodic vs Nonperiodic",
        brief: "الفرق بين الإشارات الدورية وغير الدورية.",
        sections: [
            {
                h: "Periodic (دورية)",
                bullets: [
                    "تكمل نمطًا خلال زمن اسمه Period.",
                    "ثم تعيد نفس النمط مرارًا."
                ]
            },
            {
                h: "Nonperiodic (غير دورية)",
                bullets: [
                    "تتغير بدون نمط متكرر."
                ]
            },
            {
                h: "في الشبكات غالبًا",
                bullets: [
                    "نستخدم إشارة تماثلية دورية.",
                    "ونستخدم إشارة رقمية غير دورية."
                ]
            }
        ],
        keywords: ["Periodic", "Nonperiodic", "Period", "دورية"]
    },

    {
        page: 5,
        title: "موجة الجيب — Sine Wave",
        brief: "الموجة الجيبية وخصائصها الثلاث: السعة، التردد، الطور.",
        sections: [
            {
                h: "أنواع الإشارات التماثلية الدورية",
                bullets: [
                    "Simple (بسيطة): موجة جيبية Sine لا يمكن تفكيكها لأبسط منها.",
                    "Composite (مركّبة): مكوّنة من عدة موجات جيبية."
                ]
            },
            {
                h: "Peak Amplitude (السعة القصوى)",
                bullets: [
                    "أعلى شدة مطلقة للإشارة.",
                    "تتناسب مع الطاقة التي تحملها.",
                    "كلما زادت السعة → الإشارة أقوى."
                ]
            },
            {
                h: "Period و Frequency (الزمن الدوري والتردد)",
                bullets: [
                    "Period T: الزمن اللازم لإكمال دورة واحدة (بالثواني).",
                    "Frequency f: عدد الدورات في ثانية واحدة (Hz).",
                    "العلاقة عكسية: f = 1/T و T = 1/f",
                    "تغيّر سريع ⇒ تردد عالي | تغيّر بطيء ⇒ تردد منخفض"
                ]
            },
            {
                h: "Phase (الطور/الإزاحة)",
                bullets: [
                    "يصف 'موضع' الموجة بالنسبة للزمن (time 0).",
                    "يقاس بالدرجات أو الراديان.",
                    "360° = دورة كاملة | 180° = نصف دورة | 90° = ربع دورة"
                ]
            }
        ],
        keywords: ["Sine Wave", "Amplitude", "Frequency", "Period", "Phase", "Hz"]
    },

    {
        page: 6,
        title: "الطول الموجي والمجالات — Wavelength & Domains",
        brief: "الطول الموجي λ والمجال الزمني والترددي.",
        sections: [
            {
                h: "Wavelength (الطول الموجي λ)",
                bullets: [
                    "خاصية لإشارة تنتقل داخل وسط ناقل.",
                    "تربط التردد/الزمن الدوري بسرعة الانتشار في الوسط.",
                    "التردد لا يعتمد على الوسط.",
                    "الطول الموجي يعتمد على الوسط وعلى التردد.",
                    "التعريف: المسافة التي تقطعها الموجة خلال دورة واحدة."
                ]
            },
            {
                h: "Time Domain (المجال الزمني)",
                bullets: [
                    "رسم السعة مع الزمن (Amplitude vs Time)."
                ]
            },
            {
                h: "Frequency Domain (المجال الترددي)",
                bullets: [
                    "يوضح العلاقة بين السعة والتردد على شكل 'spikes'.",
                    "كل spike يمثل تردد وسعته.",
                    "ميزة: تشوف التردد والقيمة العظمى بسرعة.",
                    "موجة جيبية كاملة = 'قمة واحدة' spike."
                ]
            }
        ],
        keywords: ["Wavelength", "Time Domain", "Frequency Domain", "λ"]
    },

    {
        page: 7,
        title: "عرض النطاق — Bandwidth",
        brief: "تعريف Bandwidth وكيفية حسابه.",
        sections: [
            {
                h: "Bandwidth (عرض النطاق)",
                bullets: [
                    "هو مدى الترددات داخل إشارة مركبة.",
                    "يحسب: B = f_h - f_l",
                    "أي: أعلى تردد ناقص أقل تردد.",
                    "مثال: 900 − 100 = 800 Hz"
                ]
            },
            {
                h: "الإشارات الرقمية",
                bullets: [
                    "الإشارة الرقمية قد تكون أكثر من مستويين (ليس فقط 0 و 1).",
                    "قاعدة: إذا عدد المستويات = L",
                    "فعدد البتات لكل مستوى = log₂(L)"
                ]
            },
            {
                h: "Bit Rate (معدل البِت)",
                bullets: [
                    "لأن أغلب الإشارات الرقمية غير دورية، لا نستخدم Period/Frequency.",
                    "بدلاً من ذلك نستخدم bit rate.",
                    "التعريف: عدد البتات المرسلة في ثانية واحدة (bps)."
                ]
            }
        ],
        keywords: ["Bandwidth", "Bit Rate", "bps", "Hz", "عرض النطاق"]
    },

    {
        page: 8,
        title: "إرسال الإشارات — Baseband vs Broadband",
        brief: "طرق إرسال الإشارات الرقمية.",
        sections: [
            {
                h: "طريقتا الإرسال",
                bullets: [
                    "Baseband",
                    "Broadband"
                ]
            },
            {
                h: "Baseband Transmission (إرسال مباشر)",
                bullets: [
                    "إرسال الإشارة الرقمية كما هي دون تحويلها لإشارة تماثلية.",
                    "يحتاج قناة Low-pass يبدأ نطاقها من الصفر.",
                    "نقطة مهمة: عرض النطاق المطلوب يتناسب طرديًا مع bit rate.",
                    "يعني: كلما تريد إرسال أسرع ← تحتاج Bandwidth أكبر."
                ]
            }
        ],
        keywords: ["Baseband", "Broadband", "Low-pass", "Transmission"]
    },

    {
        page: 9,
        title: "تشوّه الإرسال — Transmission Impairment",
        brief: "Attenuation, Distortion, Noise وأنواعها.",
        sections: [
            {
                h: "مقدمة",
                bullets: [
                    "القنوات ليست مثالية.",
                    "الإشارة عند نهاية الوسط ليست نفسها عند بدايته."
                ]
            },
            {
                h: "Attenuation (التوهين)",
                bullets: [
                    "فقدان طاقة الإشارة أثناء انتقالها.",
                    "بسبب مقاومة الوسط، وبعض الطاقة تتحول لحرارة.",
                    "نستخدم Amplifiers للتعويض.",
                    "وحدة القياس: الديسيبل dB",
                    "dB سالب ⇒ توهين | dB موجب ⇒ تضخيم",
                    "القانون: dB = 10 log₁₀(P2/P1)"
                ]
            },
            {
                h: "Distortion (التشوه)",
                bullets: [
                    "شكل الإشارة يتغير.",
                    "يحدث كثير في الإشارات المركبة.",
                    "لأن كل تردد قد ينتشر بسرعة مختلفة ← يصل بتأخير مختلف.",
                    "يسبب اختلاف في الطور بين المكونات."
                ]
            },
            {
                h: "Noise (الضجيج/التشويش)",
                bullets: [
                    "إشارة غير مرغوبة تتداخل مع الأصلية.",
                    "Thermal noise: حركة الإلكترونات العشوائية.",
                    "Induced noise: من محركات/أجهزة كمصدر تداخل.",
                    "Crosstalk: تأثير سلك على سلك (تسرب إشارات).",
                    "Impulse noise: نبضات قوية لحظية (مثل البرق)."
                ]
            }
        ],
        keywords: ["Attenuation", "Distortion", "Noise", "dB", "Crosstalk", "Thermal", "التوهين"]
    },

    {
        page: 10,
        title: "حدود معدل نقل البيانات — Data Rate Limits",
        brief: "معادلات Nyquist و Shannon لحساب سعة القناة.",
        sections: [
            {
                h: "العوامل المؤثرة على معدل البيانات",
                bullets: [
                    "1. عرض النطاق المتاح (BW)",
                    "2. عدد مستويات الإشارة المستخدمة (L)",
                    "3. جودة القناة/الضجيج"
                ]
            },
            {
                h: "Nyquist (قناة بدون ضجيج)",
                bullets: [
                    "Bit Rate = 2 × BW × log₂(L)",
                    "ملاحظة: زيادة مستويات الإشارة قد تقلل الاعتمادية.",
                    "لأنه يصعب تمييز المستويات مع التشويش."
                ]
            },
            {
                h: "Shannon (قناة مع ضجيج)",
                bullets: [
                    "Capacity = BW × log₂(1 + SNR)",
                    "لا يوجد ذكر لمستويات الإشارة في شانون.",
                    "لا يمكن تتجاوز سعة القناة.",
                    "المعادلة تصف القناة وليس طريقة الإرسال."
                ]
            }
        ],
        keywords: ["Nyquist", "Shannon", "Capacity", "SNR", "Data Rate", "سعة القناة"]
    },

    {
        page: 11,
        title: "مفاهيم الأداء — Performance Concepts",
        brief: "Bandwidth بالنوعين، Throughput، Latency، Jitter.",
        sections: [
            {
                h: "Bandwidth نوعين",
                bullets: [
                    "بالهرتز (Hz): مدى الترددات التي تحتويها الإشارة أو تمررها القناة.",
                    "بالبت/ثانية (bps): عدد البتات التي يمكن للقناة نقلها في الثانية."
                ]
            },
            {
                h: "Throughput (الإنتاجية الفعلية)",
                bullets: [
                    "السرعة الفعلية التي ننقل بها بيانات فعليًا.",
                    "غالبًا أقل من الـ Bandwidth."
                ]
            },
            {
                h: "Latency (التأخير)",
                bullets: [
                    "الزمن اللازم لوصول 'الرسالة كاملة'.",
                    "من لحظة إرسال أول بت حتى وصول آخر بت.",
                    "يتكوّن من 4 أجزاء:",
                    "1. Propagation time = Distance / Speed",
                    "2. Transmission time = Message size / Bandwidth",
                    "3. Queuing time (يزيد عندما الشبكة مزدحمة)",
                    "4. Processing delay"
                ]
            },
            {
                h: "Jitter (تذبذب التأخير)",
                bullets: [
                    "اختلاف التأخير بين الحزم (Packets).",
                    "مهم جدًا في تطبيقات الصوت والفيديو."
                ]
            }
        ],
        keywords: ["Throughput", "Latency", "Jitter", "Propagation", "Transmission time"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_ch3_theme",
    done: "net_ch3_done_pages",
    last: "net_ch3_last_page"
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
    closeDrawer: document.getElementById("closeDrawer")
};

/* ====== Drawer ====== */
function openDrawer() {
    el.drawer.classList.add("open");
    el.drawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
    el.drawer.classList.remove("open");
    el.drawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

/* ====== Theme ====== */
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(LS.theme, theme);
    el.themeBtn.querySelector(".icon").textContent = (theme === "light") ? "☀" : "☾";
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
    if (el.drawerOverlay) el.drawerOverlay.addEventListener("click", closeDrawer);

    el.themeBtn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(cur === "dark" ? "light" : "dark");
    });

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
