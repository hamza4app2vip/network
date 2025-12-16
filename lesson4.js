/* ====== Data (ملخص صفحة بصفحة — Chapter 7: Transmission Media) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة الفصل — Transmission Media",
        brief: "كيف تنتقل الإشارة فعليًا من المرسل إلى المستقبل؟",
        sections: [
            {
                h: "فكرة الفصل",
                bullets: [
                    "الفصل السابع مخصص لدراسة وسائط الإرسال (Transmission Media).",
                    "كيف تنتقل الإشارة فعليًا من المرسل إلى المستقبل؟",
                    "هل عبر سلك؟ هواء؟ ألياف ضوئية؟",
                    "هذا الفصل يكمّل الفصل السابق (Data & Signals) بالتركيز على الوسط الفيزيائي نفسه."
                ]
            },
            {
                h: "أهمية الفصل",
                bullets: [
                    "فهم كيفية انتقال البيانات عبر الوسائط المختلفة.",
                    "معرفة مميزات وعيوب كل نوع من الكابلات.",
                    "اختيار الوسط المناسب لكل تطبيق."
                ]
            }
        ],
        keywords: ["Transmission Media", "وسائط الإرسال", "Physical Layer", "إشارة"]
    },

    {
        page: 2,
        title: "ما هو Transmission Medium؟",
        brief: "تعريف وسط الإرسال وعلاقته بالطبقة الفيزيائية.",
        sections: [
            {
                h: "موقع وسائط الإرسال",
                bullets: [
                    "وسائط الإرسال تقع أسفل الطبقة الفيزيائية (يسميها البعض Layer 0).",
                    "الطبقة الفيزيائية هي التي تتحكم مباشرة في هذه الوسائط."
                ]
            },
            {
                h: "تعريف Transmission Medium",
                bullets: [
                    "أي شيء يمكنه حمل الإشارة من المصدر إلى الوجهة.",
                    "مثل: الفراغ (الهواء)، الكابلات المعدنية، الألياف الضوئية."
                ]
            },
            {
                h: "التطور التاريخي",
                bullets: [
                    "التلغراف ← بداية الإشارات الكهربائية.",
                    "الهاتف ← مشاكل بسبب رداءة الأسلاك.",
                    "تطور الكابلات ← Twisted Pair, Coaxial.",
                    "الألياف الضوئية ← قفزة هائلة في السرعة والجودة."
                ]
            }
        ],
        keywords: ["Transmission Medium", "Layer 0", "Physical Layer", "التلغراف", "الهاتف"]
    },

    {
        page: 3,
        title: "تصنيف وسائط الإرسال",
        brief: "Guided vs Unguided Media — السلكية واللاسلكية.",
        sections: [
            {
                h: "Guided Media (وسائط موجهة – سلكية)",
                bullets: [
                    "الإشارة تسير داخل مسار محدد.",
                    "محكومة بحدود فيزيائية.",
                    "تشمل: Twisted Pair, Coaxial, Fiber Optic."
                ]
            },
            {
                h: "Unguided Media (غير موجهة – لاسلكية)",
                bullets: [
                    "الإشارة تنتقل في الفراغ.",
                    "مثل: WiFi, Radio, Microwave, Satellite.",
                    "لا تحتاج كابلات فيزيائية."
                ]
            },
            {
                h: "ملاحظة مهمة",
                bullets: [
                    "هذا التقسيم مهم جدًا في الامتحانات!",
                    "Guided = سلكية = موجهة",
                    "Unguided = لاسلكية = غير موجهة"
                ]
            }
        ],
        keywords: ["Guided Media", "Unguided Media", "سلكية", "لاسلكية", "WiFi"]
    },

    {
        page: 4,
        title: "Twisted-Pair Cable — البنية",
        brief: "أكثر وسط استخدامًا — سلكان نحاسيان ملتفان.",
        sections: [
            {
                h: "ما هو Twisted Pair؟",
                bullets: [
                    "سلكان نحاسيان.",
                    "كل سلك معزول بمادة عازلة.",
                    "ملتفان حول بعضهما (Twisted)."
                ]
            },
            {
                h: "لماذا اللف (Twisting)؟",
                bullets: [
                    "لتقليل الضوضاء (Noise).",
                    "لتقليل التداخل (Crosstalk).",
                    "الضوضاء تؤثر على السلكين بشكل متساوٍ.",
                    "عند حساب الفرق بينهما في المستقبل ← تلغى الإشارات غير المرغوبة.",
                    "💡 هذه فكرة عبقرية فيزيائيًا تسمى Differential Signaling."
                ]
            }
        ],
        keywords: ["Twisted Pair", "Noise", "Crosstalk", "نحاس", "لف"]
    },

    {
        page: 5,
        title: "UTP vs STP + تصنيفات CAT",
        brief: "الفرق بين الكابلات المحمية وغير المحمية.",
        sections: [
            {
                h: "UTP (Unshielded Twisted Pair)",
                bullets: [
                    "بدون غلاف معدني للحماية.",
                    "أرخص ثمنًا.",
                    "الأكثر استخدامًا في الشبكات المحلية."
                ]
            },
            {
                h: "STP (Shielded Twisted Pair)",
                bullets: [
                    "يحتوي غلاف معدني (Shield).",
                    "مقاومة أعلى للضوضاء والتداخل.",
                    "أغلى وأثقل وأصعب في التركيب."
                ]
            },
            {
                h: "تصنيفات UTP (Categories)",
                bullets: [
                    "كلما زاد الرقم ← زادت السرعة وقلّ Crosstalk.",
                    "CAT3 ← 10 Mbps (قديم).",
                    "CAT5 ← 100 Mbps.",
                    "CAT5e ← 1 Gbps.",
                    "CAT6 ← 200 Mbps - 1 Gbps.",
                    "CAT7 ← 600 Mbps - 10 Gbps."
                ]
            }
        ],
        keywords: ["UTP", "STP", "CAT5", "CAT6", "CAT7", "Shielded"]
    },

    {
        page: 6,
        title: "موصلات RJ45 + أداء الكابل",
        brief: "الموصل الأشهر وعوامل الأداء.",
        sections: [
            {
                h: "موصل RJ45",
                bullets: [
                    "أشهر موصل لكابلات UTP.",
                    "يستخدم في شبكات Ethernet.",
                    "لا يدخل إلا باتجاه واحد (Keyed) لمنع الخطأ.",
                    "يحتوي 8 أسلاك (4 أزواج)."
                ]
            },
            {
                h: "عوامل أداء Twisted Pair",
                bullets: [
                    "التوهين (Attenuation) — فقدان قوة الإشارة.",
                    "التردد (Frequency) — كلما زاد ← زاد التوهين.",
                    "المسافة — أقصى مسافة عادة 100 متر.",
                    "سُمك السلك (Gauge) — سلك أسمك ← توهين أقل."
                ]
            }
        ],
        keywords: ["RJ45", "Attenuation", "Gauge", "موصل", "Ethernet"]
    },

    {
        page: 7,
        title: "تطبيقات Twisted Pair",
        brief: "أين يُستخدم هذا الكابل؟",
        sections: [
            {
                h: "الاستخدامات الشائعة",
                bullets: [
                    "خطوط الهاتف التقليدية.",
                    "DSL (الإنترنت عبر خط الهاتف).",
                    "شبكات LAN (الشبكات المحلية).",
                    "10Base-T, 100Base-T, 1000Base-T."
                ]
            },
            {
                h: "لماذا انتشر كثيرًا؟",
                bullets: [
                    "رخيص الثمن مقارنة بالبدائل.",
                    "سهل التركيب والصيانة.",
                    "كافٍ للشبكات المحلية العادية.",
                    "متوفر في كل مكان."
                ]
            }
        ],
        keywords: ["DSL", "LAN", "10Base-T", "100Base-T", "هاتف"]
    },

    {
        page: 8,
        title: "Coaxial Cable — البنية",
        brief: "الكابل المحوري — بنية أكثر تعقيدًا.",
        sections: [
            {
                h: "مكونات الكابل المحوري",
                bullets: [
                    "موصل مركزي (Core) — سلك نحاسي.",
                    "عازل (Insulator) — يفصل الموصل عن الغلاف.",
                    "غلاف معدني (Shield) — للحماية من الضوضاء.",
                    "غلاف بلاستيكي خارجي (Jacket)."
                ]
            },
            {
                h: "ما الذي يميّزه؟",
                bullets: [
                    "الغلاف المعدني يحمي من الضوضاء الخارجية.",
                    "الغلاف يعمل أيضًا كموصل ثاني (Return Path).",
                    "بسبب هذه البنية ← يتحمل ترددات أعلى من Twisted Pair.",
                    "أكثر مقاومة للتداخل."
                ]
            }
        ],
        keywords: ["Coaxial", "محوري", "Shield", "Core", "موصل مركزي"]
    },

    {
        page: 9,
        title: "تصنيفات RG + موصلات BNC",
        brief: "أنواع الكابلات المحورية والموصلات.",
        sections: [
            {
                h: "تصنيفات RG (Radio Guide)",
                bullets: [
                    "RG-59 ← تلفاز الكابل (Cable TV).",
                    "RG-58 ← Thin Ethernet (10Base-2).",
                    "RG-11 ← Thick Ethernet (10Base-5).",
                    "كل نوع له سُمك ومقاومة مختلفة."
                ]
            },
            {
                h: "موصلات BNC",
                bullets: [
                    "BNC Connector — الموصل الأساسي.",
                    "BNC T-Connector — للتفريع.",
                    "BNC Terminator — مهم جدًا!",
                    "الـ Terminator يمنع انعكاس الإشارة عند نهاية الكابل.",
                    "بدونه ← تتشوه الإشارة."
                ]
            }
        ],
        keywords: ["RG-59", "RG-58", "RG-11", "BNC", "Terminator"]
    },

    {
        page: 10,
        title: "أداء وتطبيقات Coaxial",
        brief: "Bandwidth عالي لكن توهين سريع.",
        sections: [
            {
                h: "أداء الكابل المحوري",
                bullets: [
                    "Bandwidth عالي — يتحمل ترددات أعلى.",
                    "لكن الإشارة تضعف بسرعة مع المسافة.",
                    "يحتاج Repeater بكثرة للمسافات الطويلة.",
                    "أفضل من Twisted Pair في مقاومة الضوضاء."
                ]
            },
            {
                h: "التطبيقات",
                bullets: [
                    "شبكات التلفاز الكابلي (Cable TV).",
                    "شبكات الهاتف القديمة.",
                    "Ethernet القديم (10Base-2, 10Base-5).",
                    "توصيل الهوائيات."
                ]
            }
        ],
        keywords: ["Bandwidth", "Repeater", "Cable TV", "10Base-2", "10Base-5"]
    },

    {
        page: 11,
        title: "Ethernet باستخدام Coaxial",
        brief: "10Base-2 و 10Base-5 — تاريخ الشبكات.",
        sections: [
            {
                h: "10Base-2 (Thin Ethernet)",
                bullets: [
                    "يستخدم كابل RG-58.",
                    "أقصى مسافة: 185 متر.",
                    "سرعة: 10 Mbps.",
                    "يسمى Thinnet لأنه رفيع."
                ]
            },
            {
                h: "10Base-5 (Thick Ethernet)",
                bullets: [
                    "يستخدم كابل RG-11.",
                    "أقصى مسافة: 500 متر (5000 متر مع Repeaters).",
                    "سرعة: 10 Mbps.",
                    "يسمى Thicknet لأنه سميك."
                ]
            },
            {
                h: "ملاحظة تاريخية",
                bullets: [
                    "هذه الأنواع لم تعد مستخدمة اليوم.",
                    "استُبدلت بـ Twisted Pair و Fiber Optic.",
                    "لكنها مهمة للفهم النظري والامتحانات."
                ]
            }
        ],
        keywords: ["10Base-2", "10Base-5", "Thin Ethernet", "Thick Ethernet", "Thinnet"]
    },

    {
        page: 12,
        title: "Fiber-Optic — الأساس الفيزيائي",
        brief: "الإشارة هنا ضوء وليس كهرباء!",
        sections: [
            {
                h: "مبدأ عمل الألياف الضوئية",
                bullets: [
                    "الإشارة هنا: ضوء (Light) وليس كهرباء!",
                    "يعتمد على ظاهرتي الانكسار والانعكاس."
                ]
            },
            {
                h: "قانون الانكسار والانعكاس",
                bullets: [
                    "إذا كانت زاوية السقوط أقل من الحرجة ← انكسار.",
                    "إذا كانت مساوية للزاوية الحرجة ← يسير على السطح.",
                    "إذا كانت أكبر من الحرجة ← انعكاس كلي (Total Internal Reflection).",
                    "الانعكاس الكلي هو ما نريده لنقل الضوء داخل الليف."
                ]
            },
            {
                h: "لماذا الألياف الضوئية؟",
                bullets: [
                    "سرعة عالية جدًا.",
                    "توهين قليل جدًا.",
                    "مناعة كاملة ضد التداخل الكهرومغناطيسي."
                ]
            }
        ],
        keywords: ["Fiber Optic", "Light", "Refraction", "Reflection", "انعكاس كلي"]
    },

    {
        page: 13,
        title: "Multimode Fiber",
        brief: "أنماط متعددة — Step-Index و Graded-Index.",
        sections: [
            {
                h: "Multimode Step-Index",
                bullets: [
                    "كثافة Core ثابتة في كل مكان.",
                    "الضوء ينعكس بزوايا حادة.",
                    "تشويه أعلى (Dispersion).",
                    "مناسب للمسافات القصيرة."
                ]
            },
            {
                h: "Multimode Graded-Index",
                bullets: [
                    "كثافة Core متدرجة (أعلى في المركز).",
                    "الضوء ينحني تدريجيًا بدلاً من الانعكاس الحاد.",
                    "تقليل التشوه (Dispersion).",
                    "أداء أفضل من Step-Index."
                ]
            },
            {
                h: "متى نستخدم Multimode؟",
                bullets: [
                    "للمسافات القصيرة والمتوسطة.",
                    "داخل المباني والحرم الجامعي.",
                    "أرخص من Single-Mode."
                ]
            }
        ],
        keywords: ["Multimode", "Step-Index", "Graded-Index", "Dispersion", "تشوه"]
    },

    {
        page: 14,
        title: "Single-Mode Fiber",
        brief: "شعاع واحد — أداء استثنائي للمسافات الطويلة.",
        sections: [
            {
                h: "خصائص Single-Mode",
                bullets: [
                    "قطر Core صغير جدًا (حوالي 8-10 µm).",
                    "شعاع ضوء واحد تقريبًا (Single Ray).",
                    "تأخير شبه معدوم.",
                    "أقل تشوه ممكن."
                ]
            },
            {
                h: "المميزات",
                bullets: [
                    "مسافات طويلة جدًا (عشرات الكيلومترات).",
                    "سرعات عالية جدًا.",
                    "يستخدم في شبكات الاتصالات الرئيسية.",
                    "الكابلات البحرية بين القارات."
                ]
            },
            {
                h: "العيوب",
                bullets: [
                    "أغلى من Multimode.",
                    "يحتاج مصادر ضوء دقيقة (Laser).",
                    "صعوبة في التركيب والتوصيل."
                ]
            }
        ],
        keywords: ["Single-Mode", "Laser", "مسافات طويلة", "Core", "شعاع واحد"]
    },

    {
        page: 15,
        title: "أحجام الألياف + تركيب الكابل",
        brief: "Core/Cladding ومكونات الكابل.",
        sections: [
            {
                h: "تعريف أحجام الألياف",
                bullets: [
                    "يُعرّف الليف بـ: Core / Cladding (بالميكرومتر µm).",
                    "مثال: 62.5/125 ← Multimode شائع.",
                    "مثال: 50/125 ← Multimode حديث.",
                    "مثال: 8/125 أو 9/125 ← Single-Mode."
                ]
            },
            {
                h: "مكونات كابل الألياف",
                bullets: [
                    "Core — قلب الليف (ينقل الضوء).",
                    "Cladding — الغلاف العاكس.",
                    "Buffer — طبقة حماية.",
                    "Kevlar — ألياف للقوة الميكانيكية.",
                    "Jacket — الغلاف الخارجي."
                ]
            }
        ],
        keywords: ["Core", "Cladding", "Buffer", "Kevlar", "62.5/125", "9/125"]
    },

    {
        page: 16,
        title: "موصلات الألياف الضوئية",
        brief: "SC, ST, MT-RJ — أنواع مختلفة.",
        sections: [
            {
                h: "أنواع الموصلات",
                bullets: [
                    "SC (Subscriber Connector) — شائع في الشبكات.",
                    "ST (Straight Tip) — قفل بالدوران.",
                    "FC (Ferrule Connector) — دقة عالية.",
                    "MT-RJ — حجم صغير مثل RJ45.",
                    "LC (Lucent Connector) — حجم صغير وشائع."
                ]
            },
            {
                h: "خصائص الموصلات",
                bullets: [
                    "كل نوع له نظام قفل مختلف.",
                    "SC: Push-Pull (ضغط وسحب).",
                    "ST: Bayonet (دوران).",
                    "يجب تنظيف الموصلات بعناية.",
                    "الغبار والأوساخ تؤثر على الأداء."
                ]
            }
        ],
        keywords: ["SC", "ST", "FC", "MT-RJ", "LC", "موصل"]
    },

    {
        page: 17,
        title: "أداء وتطبيقات الألياف",
        brief: "توهين قليل وتطبيقات حديثة.",
        sections: [
            {
                h: "الأداء المتميز",
                bullets: [
                    "توهين قليل جدًا (0.5 dB/km أو أقل).",
                    "يحتاج عدد أقل من Repeaters (1/10 مقارنة بالنحاس).",
                    "Bandwidth ضخم (Terabits/sec ممكن).",
                    "لا يتأثر بالتداخل الكهرومغناطيسي."
                ]
            },
            {
                h: "التطبيقات",
                bullets: [
                    "شبكات LAN السريعة.",
                    "Fast Ethernet (100Base-FX).",
                    "Gigabit Ethernet (1000Base-SX, 1000Base-LX).",
                    "10 Gigabit Ethernet.",
                    "Cable TV Hybrid (HFC).",
                    "شبكات الاتصالات بين المدن والقارات."
                ]
            }
        ],
        keywords: ["Attenuation", "Repeater", "Gigabit", "Fast Ethernet", "HFC"]
    },

    {
        page: 18,
        title: "مزايا وعيوب الألياف الضوئية",
        brief: "الخلاصة — لماذا نستخدمها ومتى؟",
        sections: [
            {
                h: "المزايا",
                bullets: [
                    "Bandwidth عالي جدًا — سرعات هائلة.",
                    "توهين قليل — مسافات طويلة بدون مكررات.",
                    "مقاوم للتشويش الكهرومغناطيسي تمامًا.",
                    "خفيف الوزن — سهل النقل.",
                    "صعب التنصت عليه — أمان أعلى.",
                    "لا يتأثر بالبرق أو الكهرباء."
                ]
            },
            {
                h: "العيوب",
                bullets: [
                    "تكلفة عالية — الكابلات والمعدات غالية.",
                    "تركيب وصيانة صعبة — يحتاج متخصصين.",
                    "اتجاه واحد (Simplex) — نحتاج ليفين للاتجاهين.",
                    "هش — يمكن أن ينكسر بسهولة.",
                    "صعوبة في التفريع والتوصيل."
                ]
            },
            {
                h: "الخلاصة",
                bullets: [
                    "الألياف الضوئية هي مستقبل الاتصالات.",
                    "تستخدم للسرعات العالية والمسافات الطويلة.",
                    "Twisted Pair يبقى الخيار الاقتصادي للشبكات المحلية.",
                    "كل وسط له مكانه المناسب."
                ]
            }
        ],
        keywords: ["مزايا", "عيوب", "Bandwidth", "أمان", "تكلفة", "Simplex"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_ch7_theme",
    done: "net_ch7_done_pages",
    last: "net_ch7_last_page"
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
    if (el.drawerOverlay) el.drawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeDrawer() {
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
