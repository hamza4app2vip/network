/* ====== Data (ملخص صفحة بصفحة) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة + الفرق بين المعلومات والبيانات",
        brief: "كيف تتم عملية الاتصال؟ وما معنى Information vs Data؟",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "أي عملية تواصل تحتاج: مصدر (Source) + متلقي (Recipient) + وسط ناقل (Medium).",
                    "الوسط قد يكون: هواء (موجات صوتية) أو نشر/بريد أو شبكات اتصالات لتبادل إلكتروني."
                ]
            },
            {
                h: "Information & Data",
                bullets: [
                    "المعلومة: كل ما يحمل معنى، و(في الاتصالات) قد تُفهم كإشارة منظمة تُتبادل بين طرفين.",
                    "البيانات: تمثيل بالأرقام/الحروف/رموز يحمل معنى محدد."
                ]
            }
        ],
        keywords: ["Source", "Recipient", "Medium", "Information", "Data"]
    },

    {
        page: 2,
        title: "Data Communications + خصائص النظام الفعّال",
        brief: "تعريف Telecommunication و Data communications + 4 خصائص مهمة.",
        sections: [
            {
                h: "تعريفات سريعة",
                bullets: [
                    "Telecommunication: اتصال عن بعد.",
                    "Data communications: تبادل بيانات بين جهازين عبر وسط ناقل (مثل كابل).",
                    "نظام الاتصال = Hardware + Software."
                ]
            },
            {
                h: "خصائص النجاح",
                bullets: [
                    "Delivery: توصيل للوجهة الصحيحة.",
                    "Accuracy: بدون أخطاء.",
                    "Timeliness: في الوقت المناسب.",
                    "Jitter: تذبذب زمن وصول الحزم (مهم للصوت/الفيديو)."
                ]
            }
        ],
        keywords: ["Delivery", "Accuracy", "Timeliness", "Jitter"]
    },

    {
        page: 3,
        title: "مكوّنات الاتصال + تمثيل البيانات (Text/Numbers/Images)",
        brief: "5 مكونات لأي نظام اتصال + كيف نمثل النص والأرقام والصور.",
        sections: [
            {
                h: "مكوّنات نظام الاتصال (5)",
                bullets: [
                    "Message الرسالة: البيانات المراد إرسالها.",
                    "Sender المرسل / Receiver المستقبل.",
                    "Transmission medium: المسار الفيزيائي للرسالة.",
                    "Protocol: قواعد تنظم الاتصال (بدونه قد يتصل جهازان ولا يتبادلان البيانات)."
                ]
            },
            {
                h: "Representation",
                bullets: [
                    "Text: يمثل كنمط بتّات (Bit pattern) — الشائع اليوم Unicode، وASCII أول 127 رمزًا منه.",
                    "Numbers: تمثل أيضًا ببتّات، وغالبًا تُحوّل مباشرة لثنائي لتسهيل العمليات.",
                    "Images: مصفوفة Pixels، وكل Pixel نقطة صغيرة."
                ]
            }
        ],
        keywords: ["Protocol", "Unicode", "ASCII", "Pixels"]
    },

    {
        page: 4,
        title: "ألوان الصور + Audio/Video + بداية Data Flow",
        brief: "طرق تمثيل الألوان + تعريف الصوت والفيديو + تمهيد أنماط الاتصال.",
        sections: [
            {
                h: "ألوان الصور",
                bullets: [
                    "RGB: دمج الأحمر/الأخضر/الأزرق.",
                    "YCM: دمج الأصفر/السماوي/الأرجواني.",
                    "الدقة الأعلى تعني Pixels أكثر/أصغر → تحتاج تخزين أكثر."
                ]
            },
            {
                h: "وسائط أخرى",
                bullets: [
                    "Audio: تسجيل/بث صوت أو موسيقى.",
                    "Video: تسجيل/بث صورة أو فيلم."
                ]
            },
            {
                h: "Data Flow (تمهيد)",
                bullets: [
                    "الاتصال بين جهازين قد يكون: Simplex أو Half-Duplex أو Full-Duplex."
                ]
            }
        ],
        keywords: ["RGB", "YCM", "Audio", "Video", "Data Flow"]
    },

    {
        page: 5,
        title: "أنماط الإرسال + تعريف الشبكات وأجهزتها",
        brief: "Simplex/Half/Full Duplex + ما هي Network؟ وما دور Router/Switch/Modem؟",
        sections: [
            {
                h: "Data Flow",
                bullets: [
                    "Simplex: اتجاه واحد فقط (مرسل واحد/مستقبل واحد).",
                    "Half-Duplex: إرسال/استقبال لكن ليس بنفس اللحظة.",
                    "Full-Duplex: إرسال واستقبال بالتزامن."
                ]
            },
            {
                h: "Networks",
                bullets: [
                    "الشبكة: ترابط مجموعة أجهزة قادرة على التواصل.",
                    "Host (جهاز طرفي) مثل الكمبيوتر، أو أجهزة ربط: Router / Switch / Modem.",
                    "Router: يربط شبكة بشبكات أخرى. Switch: يربط الأجهزة ببعضها. Modem: يغيّر شكل البيانات."
                ]
            }
        ],
        keywords: ["Simplex", "Half-Duplex", "Full-Duplex", "Router", "Switch", "Modem"]
    },

    {
        page: 6,
        title: "Network Criteria (الأداء/الموثوقية/الأمن)",
        brief: "كيف نقيس جودة الشبكة؟ Throughput/Delay وTransit/Response time.",
        sections: [
            {
                h: "المعايير الأهم",
                bullets: ["Performance (الأداء)", "Reliability (الاعتمادية)", "Security (الحماية)"]
            },
            {
                h: "الأداء بالتحديد",
                bullets: [
                    "Transit time: زمن انتقال الرسالة من جهاز لآخر.",
                    "Response time: الزمن بين الطلب والرد.",
                    "مقاييس شائعة: Throughput (معدل نقل) و Delay (تأخير) — نريد Throughput أعلى و Delay أقل."
                ]
            },
            {
                h: "Reliability & Security",
                bullets: [
                    "Reliability: تُقاس بتكرار الأعطال.",
                    "Security: حماية البيانات من الوصول غير المصرح + من التلف/التغيير."
                ]
            }
        ],
        keywords: ["Throughput", "Delay", "Transit time", "Response time", "Security"]
    },

    {
        page: 7,
        title: "Physical Structures + Types of Connection",
        brief: "Point-to-Point vs Multipoint (Multidrop).",
        sections: [
            {
                h: "الفكرة",
                bullets: [
                    "الشبكة = جهازين أو أكثر متصلين عبر Links (مسارات اتصال تنقل البيانات).",
                    "نوعا الاتصال: Point-to-Point و Multipoint."
                ]
            },
            {
                h: "Point-to-Point",
                bullets: [
                    "Link مخصص بين جهازين فقط.",
                    "سعة الرابط كاملة محجوزة لهذين الجهازين."
                ]
            },
            {
                h: "Multipoint",
                bullets: [
                    "أكثر من جهازين يشتركون في رابط واحد.",
                    "سعة القناة مشتركة بين الجميع."
                ]
            }
        ],
        keywords: ["Point-to-Point", "Multipoint", "Link"]
    },

    {
        page: 8,
        title: "Physical Topology + Mesh",
        brief: "ما معنى Topology؟ ولماذا Mesh قوية لكنها مكلفة؟",
        sections: [
            {
                h: "Topology",
                bullets: [
                    "Physical topology: شكل توزيع الشبكة فعليًا.",
                    "الأنواع الأساسية: Mesh, Star, Bus, Ring."
                ]
            },
            {
                h: "Mesh",
                bullets: [
                    "كل جهاز مرتبط مباشرة بكل الأجهزة الأخرى (روابط Point-to-Point).",
                    "عدد الروابط المطلوب: n(n−1)/2 (Duplex links).",
                    "مزايا: حمل بيانات مستقل لكل وصلة، Robust، خصوصية أعلى، سهولة تحديد/عزل الأعطال.",
                    "عيوب: كابلات كثيرة + منافذ I/O كثيرة، والتركيب/إعادة التوصيل صعبة."
                ]
            }
        ],
        keywords: ["Topology", "Mesh", "n(n−1)/2", "Robust"]
    },

    {
        page: 9,
        title: "Star + بداية Bus",
        brief: "Star تعتمد على Hub + Bus تستخدم Backbone مع Drop lines/Taps.",
        sections: [
            {
                h: "Star",
                bullets: [
                    "كل جهاز يتصل بمتحكم مركزي (عادة Hub).",
                    "مزايا: توصيل أسهل (للمركز فقط)، تعطل وصلة يؤثر عليها وحدها، سهولة عزل الأعطال.",
                    "عيب كبير: سقوط الـHub يعني سقوط الشبكة كلها."
                ]
            },
            {
                h: "Bus (تمهيد)",
                bullets: [
                    "كابل طويل يعمل كـBackbone يربط جميع الأجهزة.",
                    "الأجهزة تتصل عبر Drop lines و Taps (نقاط تفرّع)."
                ]
            }
        ],
        keywords: ["Star", "Hub", "Bus", "Backbone", "Tap", "Drop line"]
    },

    {
        page: 10,
        title: "Bus (مزايا/عيوب) + Ring (تعريف)",
        brief: "حدود Bus + Terminator لمنع الانعكاس + Ring باتجاه واحد مع Repeater.",
        sections: [
            {
                h: "Bus",
                bullets: [
                    "هناك حد لعدد الأجهزة والمسافات لأن الإشارة تضعف كلما قطعت مسافة أكبر.",
                    "مزايا: تركيب سهل + كابلات أقل من Mesh/Star.",
                    "عيوب: صعوبة إعادة التوصيل وعزل الأعطال، إضافة جهاز قد تتطلب تعديل الـBackbone، قطع الكابل يوقف النقل كله.",
                    "لتجنب انعكاس الإشارة: استخدام Terminal (Terminator) لامتصاص الإشارة."
                ]
            },
            {
                h: "Ring (تعريف)",
                bullets: [
                    "كل جهاز متصل بجهازين فقط (يمين/يسار).",
                    "الإشارة تمر باتجاه واحد حتى تصل للوجهة.",
                    "كل جهاز يحتوي Repeater يعيد توليد البتّات ويمررها."
                ]
            }
        ],
        keywords: ["Terminator", "Reflection", "Ring", "Repeater"]
    },

    {
        page: 11,
        title: "Ring (Token) + LAN/WAN (مقدمة)",
        brief: "Token يدور دائمًا + إنذار عند انقطاع الإشارة + تعريف LAN/WAN.",
        sections: [
            {
                h: "Ring",
                bullets: [
                    "ميزة: تركيب/إعادة تهيئة أسهل + عزل أعطال أسهل.",
                    "عيب: قطع الحلقة يعطّل الشبكة.",
                    "Token: إشارة تدور دائمًا؛ الجهاز يحجزها ليرسل البيانات ثم يعيدها بعد انتهاء الإرسال.",
                    "إن لم تصل إشارة خلال مدة محددة: الجهاز يطلق إنذار يحدد المشكلة ومكانها.",
                    "حل العيب: Dual ring أو Switch يعزل مكان القطع."
                ]
            },
            {
                h: "Network Types",
                bullets: [
                    "حسب التغطية الجغرافية: LAN (محلية) و WAN (واسعة).",
                    "LAN: ملكية خاصة وتربط أجهزة داخل مكتب/مبنى.",
                    "كل Host داخل LAN له معرف وعناوين (مثل MAC و IP) والحزم تحمل عنوان المصدر والوجهة."
                ]
            }
        ],
        keywords: ["Token", "Dual ring", "LAN", "WAN", "MAC", "IP"]
    },

    {
        page: 12,
        title: "Hub vs Switch + WAN (أنواعها)",
        brief: "Hub يبث للجميع، Switch يتعلم العناوين + Point-to-Point WAN و Switched WAN.",
        sections: [
            {
                h: "Hub vs Switch",
                bullets: [
                    "Hub: يرسل الرسالة لكل الأجهزة المتصلة؛ المستهدف فقط يحتفظ بها والبقية تهملها.",
                    "Switch: في البداية يتصرف كـHub ليتعلم العناوين، ثم يرسل لاحقًا للجهاز المقصود فقط."
                ]
            },
            {
                h: "WAN",
                bullets: [
                    "تُدار غالبًا عبر شركات اتصالات وتُؤجر للمنظمات.",
                    "تغطي مساحة أكبر (مدينة/دولة/العالم).",
                    "LAN تربط Hosts؛ WAN تربط أجهزة ربط مثل Routers/Switches/Modems.",
                    "Point-to-Point WAN: طرفان عبر وسط (هواء/كابل).",
                    "Switched WAN: أكثر من طرفين (مجموعة Point-to-Point مرتبطة بسويتشات)."
                ]
            }
        ],
        keywords: ["Hub", "Switch", "Point-to-Point WAN", "Switched WAN"]
    },

    {
        page: 13,
        title: "Internetwork + Switching (Circuit vs Packet)",
        brief: "ربط شبكتين أو أكثر + نوعان شائعان للشبكات المُبدّلة.",
        sections: [
            {
                h: "Internetwork",
                bullets: [
                    "عند ربط شبكتين أو أكثر (مثل LAN مع WAN) نحصل على Internetwork (Internet)."
                ]
            },
            {
                h: "Switching",
                bullets: [
                    "الإنترنت شبكة مُبدّلة: Switch يربط رابطين أو أكثر.",
                    "أشهر نوعين: Circuit-switched و Packet-switched."
                ]
            }
        ],
        keywords: ["Internetwork", "Switching", "Circuit-switched", "Packet-switched"]
    },

    {
        page: 14,
        title: "Circuit-Switched vs Packet-Switched (خصائص + Delay)",
        brief: "Analog vs Digital + الحجز المسبق للقنوات + التأخير المسموح للبيانات/الصوت/الفيديو.",
        sections: [
            {
                h: "Circuit-Switched",
                bullets: [
                    "اتصال مخصص (Circuit) متاح دائمًا بين الطرفين، والسويتش يفعّله/يعطله.",
                    "نقل تناظري (Analog).",
                    "القنوات محجوزة (عيب: قد لا تُستغل بالكامل).",
                    "Delay أقل (ميزة) — مناسب للصوت.",
                    "رابط السويتش-سويتش قد يحتاج سعة مضاعفة."
                ]
            },
            {
                h: "Packet-Switched",
                bullets: [
                    "التواصل يتم على شكل حزم Packets (نقل رقمي Digital).",
                    "القناة تُشارك بين الأجهزة (ميزة اقتصادية).",
                    "Delay أعلى (عيب) وقد يتم التخزين ثم الإرسال لاحقًا.",
                    "Packet أرخص/أكثر اقتصادية من Circuit."
                ]
            },
            {
                h: "التأخير المسموح (Max)",
                bullets: [
                    "Data: 250ms",
                    "Voice: 40ms",
                    "Video: 50ms"
                ]
            }
        ],
        keywords: ["Analog", "Digital", "Packets", "Delay 250ms", "40ms", "50ms"]
    },

    {
        page: 15,
        title: "The Internet (Backbones/Providers/Customers) + Dial-up",
        brief: "مكونات الإنترنت + معنى ISP + اتصال الهاتف Dial-up.",
        sections: [
            {
                h: "مكونات الإنترنت",
                bullets: [
                    "Backbones + Provider networks + Customer networks.",
                    "Backbones شبكات ضخمة مرتبطة بنقاط Peering؛ Providers أصغر وتستخدم خدمات Backbones.",
                    "Backbones و Providers يُسمّون ISPs (عالمي/محلي أو إقليمي)."
                ]
            },
            {
                h: "Accessing the Internet (Telephone)",
                bullets: [
                    "اتصال WAN نقطة-إلى-نقطة عبر شبكات الهاتف.",
                    "Dial-up: بطيء ويستخدم قناة واحدة؛ إذا استخدمت الإنترنت لا يمكنك استخدام الهاتف بنفس الوقت."
                ]
            }
        ],
        keywords: ["Backbone", "Peering", "ISP", "Dial-up"]
    },

    {
        page: 16,
        title: "DSL + طرق وصول أخرى",
        brief: "فلتر يفصل الصوت عن البيانات + Cable/Wireless/Direct.",
        sections: [
            {
                h: "DSL Service",
                bullets: [
                    "مودم يربط المستخدم بمودم خارجي للإنترنت.",
                    "يمتلك Filter يفصل الصوت عن البيانات:",
                    "الصوت عبر Circuit-switched، والبيانات عبر Packet-switched."
                ]
            },
            {
                h: "طرق وصول أخرى",
                bullets: [
                    "Using Cable Networks (سلكية).",
                    "Using Wireless Networks (لاسلكية).",
                    "Direct Connection: مؤسسة كبيرة قد تصبح ISP محلي وتتصل مباشرة بالإنترنت."
                ]
            }
        ],
        keywords: ["DSL", "Filter", "Circuit-switched", "Packet-switched", "Wireless"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_ch1_theme",
    done: "net_ch1_done_pages",
    last: "net_ch1_last_page"
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
    el.markBtn.textContent = done ? "✓ هذه الصفحة مفهومة" : "✔︎ علّمها “مفهومة”";
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
        if (e.key === "ArrowLeft") setActive(state.activePage + 1);     // RTL: اليسار = التالي
        if (e.key === "ArrowRight") setActive(state.activePage - 1);    // RTL: اليمين = السابق
        if (e.key === "Escape") closeDrawer();
    });
}

init();
