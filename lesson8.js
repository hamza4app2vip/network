/* ====== Data (Chapter 13: Local Area Networks - LANs / Ethernet) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة الفصل — Local Area Networks",
        brief: "ما هي الشبكات المحلية؟ ولماذا Ethernet؟",
        sections: [
            {
                h: "ما هي LAN؟",
                bullets: [
                    "LAN = Local Area Network — شبكة محلية.",
                    "شبكة حواسيب ضمن نطاق جغرافي محدود.",
                    "أمثلة: مبنى، كلية، شركة، حرم جامعي.",
                    "تربط الأجهزة في مساحة صغيرة نسبيًا."
                ]
            },
            {
                h: "أهداف LAN",
                bullets: [
                    "مشاركة الموارد: ملفات، طابعات، إنترنت.",
                    "تقليل التكلفة: بدل شراء موارد لكل جهاز.",
                    "رفع الكفاءة: تواصل سريع بين الأجهزة.",
                    "الأمان: تحكم مركزي في الوصول."
                ]
            },
            {
                h: "تقنيات LAN عبر التاريخ",
                bullets: [
                    "Ethernet — الأكثر انتشارًا (موضوع الفصل).",
                    "Token Ring — من IBM، انقرضت تقريبًا.",
                    "FDDI — ألياف ضوئية، للربط بين المباني.",
                    "ATM LAN — سريعة لكنها معقدة.",
                    "النتيجة: Ethernet هيمنت وما زالت!"
                ]
            }
        ],
        keywords: ["LAN", "Local Area Network", "شبكة محلية", "Ethernet", "Token Ring"]
    },

    {
        page: 2,
        title: "معايير IEEE 802",
        brief: "لماذا نحتاج معايير؟ وما علاقتها بـ OSI؟",
        sections: [
            {
                h: "ما هي IEEE 802؟",
                bullets: [
                    "IEEE = Institute of Electrical and Electronics Engineers.",
                    "802 = مجموعة معايير للشبكات المحلية.",
                    "تضمن توافق الأجهزة من شركات مختلفة.",
                    "بدونها: كل شركة تصنع بطريقتها!"
                ]
            },
            {
                h: "علاقة IEEE 802 مع OSI",
                bullets: [
                    "IEEE لم تطبق OSI حرفيًا.",
                    "ركزت على: Physical Layer + Data-Link Layer.",
                    "قسّمت Data-Link إلى طبقتين فرعيتين:",
                    "   1. LLC — Logical Link Control.",
                    "   2. MAC — Media Access Control."
                ]
            },
            {
                h: "أهم معايير IEEE 802",
                bullets: [
                    "802.3 — Ethernet (الأهم!).",
                    "802.5 — Token Ring.",
                    "802.11 — WiFi (اللاسلكي).",
                    "802.15 — Bluetooth.",
                    "802.16 — WiMAX."
                ]
            }
        ],
        keywords: ["IEEE 802", "معايير", "OSI", "LLC", "MAC", "802.3"]
    },

    {
        page: 3,
        title: "طبقة LLC — Logical Link Control",
        brief: "الطبقة الموحّدة لكل أنواع LAN.",
        sections: [
            {
                h: "ما هي LLC؟",
                bullets: [
                    "LLC = Logical Link Control.",
                    "الجزء العلوي من Data-Link Layer.",
                    "موحّدة لكل أنواع LAN.",
                    "تخفي اختلافات MAC عن الطبقات العليا."
                ]
            },
            {
                h: "وظائف LLC",
                bullets: [
                    "1. Framing — تأطير البيانات.",
                    "2. Flow Control — التحكم في التدفق.",
                    "3. Error Control — التحكم في الأخطاء.",
                    "4. Multiplexing — دعم بروتوكولات متعددة."
                ]
            },
            {
                h: "ملاحظة عملية مهمة",
                bullets: [
                    "عند استخدام TCP/IP:",
                    "لا نحتاج كل وظائف LLC عمليًا!",
                    "TCP يتولى Flow Control و Error Control.",
                    "لكن LLC موجودة لضمان التوافق العام.",
                    "في Ethernet الحديثة: غالبًا لا نستخدم LLC Header."
                ]
            }
        ],
        keywords: ["LLC", "Logical Link Control", "Framing", "Flow Control", "Error Control"]
    },

    {
        page: 4,
        title: "طبقة MAC — Media Access Control",
        brief: "التحكم في الوصول للوسط الفيزيائي.",
        sections: [
            {
                h: "ما هي MAC؟",
                bullets: [
                    "MAC = Media Access Control.",
                    "الجزء السفلي من Data-Link Layer.",
                    "تختلف حسب نوع الشبكة.",
                    "تتعامل مباشرة مع الوسط الفيزيائي."
                ]
            },
            {
                h: "وظائف MAC",
                bullets: [
                    "1. التحكم في الوصول للوسط المشترك.",
                    "2. تأطير البيانات (جزء من Framing).",
                    "3. عنونة الأجهزة (MAC Address).",
                    "4. كشف الأخطاء (CRC)."
                ]
            },
            {
                h: "بروتوكولات MAC حسب النوع",
                bullets: [
                    "Ethernet → CSMA/CD.",
                    "WiFi → CSMA/CA.",
                    "Token Ring → Token Passing.",
                    "كل نوع له طريقته في تجنب التصادم."
                ]
            }
        ],
        keywords: ["MAC", "Media Access Control", "CSMA/CD", "MAC Address", "CRC"]
    },

    {
        page: 5,
        title: "Ethernet — النشأة والتطور",
        brief: "من Xerox 1976 إلى 10 Gigabit.",
        sections: [
            {
                h: "تاريخ Ethernet",
                bullets: [
                    "1976: اختُرعت في Xerox PARC.",
                    "1980: معيار DIX (DEC, Intel, Xerox).",
                    "1983: معيار IEEE 802.3 الرسمي.",
                    "منذ ذلك الحين: تطور مستمر في السرعة."
                ]
            },
            {
                h: "أجيال Ethernet",
                bullets: [
                    "10 Mbps — Standard Ethernet (الأصلية).",
                    "100 Mbps — Fast Ethernet.",
                    "1 Gbps — Gigabit Ethernet.",
                    "10 Gbps — 10-Gigabit Ethernet.",
                    "الآن: 40/100/400 Gbps!"
                ]
            },
            {
                h: "الفكرة العبقرية",
                bullets: [
                    "نفس المفهوم الأساسي... سرعات أعلى!",
                    "نفس تنسيق الإطار (Frame Format).",
                    "نفس بنية العنوان (MAC Address).",
                    "توافق رجعي (Backward Compatible).",
                    "هذا سر نجاح Ethernet!"
                ]
            }
        ],
        keywords: ["Ethernet", "تاريخ", "Xerox", "IEEE 802.3", "تطور"]
    },

    {
        page: 6,
        title: "بروتوكول CSMA/CD",
        brief: "قلب Ethernet التقليدية.",
        sections: [
            {
                h: "ما هو CSMA/CD؟",
                bullets: [
                    "Carrier Sense Multiple Access / Collision Detection.",
                    "استمع قبل الإرسال + اكتشف التصادم.",
                    "البروتوكول الأساسي في Ethernet.",
                    "يعمل في Half-Duplex فقط."
                ]
            },
            {
                h: "خطوات CSMA/CD",
                bullets: [
                    "1. فحص الوسط — هل خالي؟",
                    "2. إذا خالي → إرسال.",
                    "3. أثناء الإرسال → مراقبة التصادم.",
                    "4. إذا تصادم → إيقاف + Jam Signal.",
                    "5. انتظار Backoff → إعادة المحاولة."
                ]
            },
            {
                h: "ملاحظة مهمة",
                bullets: [
                    "CSMA/CD لم يعد مستخدمًا في الشبكات الحديثة!",
                    "السبب: Switches + Full-Duplex.",
                    "كل جهاز له قناة مستقلة = لا تصادم.",
                    "لكنه مهم للفهم التاريخي والامتحانات."
                ]
            }
        ],
        keywords: ["CSMA/CD", "Collision Detection", "Jam Signal", "Backoff", "Half-Duplex"]
    },

    {
        page: 7,
        title: "الحد الأدنى لإطار Ethernet",
        brief: "لماذا 64 Bytes؟ القيمة الشهيرة!",
        sections: [
            {
                h: "المشكلة",
                bullets: [
                    "لكي يعمل CSMA/CD بشكل صحيح:",
                    "يجب اكتشاف التصادم أثناء الإرسال!",
                    "إذا انتهى الإرسال قبل اكتشاف التصادم ← مشكلة.",
                    "لذلك: الإطار يجب أن يكون طويلًا بما يكفي."
                ]
            },
            {
                h: "القاعدة الذهبية",
                bullets: [
                    "زمن الإطار (Tfr) ≥ 2 × زمن الانتشار (Tp).",
                    "في 10 Mbps Ethernet: أقصى مسافة 2500m.",
                    "Round-Trip Time ≈ 51.2 μs.",
                    "الحد الأدنى = 512 bits = 64 Bytes."
                ]
            },
            {
                h: "التطبيق العملي",
                bullets: [
                    "إذا البيانات أقل من 46 Bytes:",
                    "   يُضاف Padding لإكمال الحد الأدنى.",
                    "Ethernet Header = 14 Bytes + CRC = 4 Bytes.",
                    "إذن: 14 + 46 + 4 = 64 Bytes.",
                    "هذه قيمة شهيرة جدًا — احفظها!"
                ]
            }
        ],
        keywords: ["64 Bytes", "Minimum Frame", "512 bits", "Padding", "RTT"]
    },

    {
        page: 8,
        title: "صيغة إطار Ethernet",
        brief: "مكونات الإطار بالتفصيل.",
        sections: [
            {
                h: "مكونات الإطار",
                bullets: [
                    "1. Preamble (7 Bytes): للمزامنة.",
                    "2. SFD (1 Byte): بداية الإطار.",
                    "3. Destination Address (6 Bytes): عنوان الوجهة.",
                    "4. Source Address (6 Bytes): عنوان المصدر.",
                    "5. Length/Type (2 Bytes): طول أو نوع.",
                    "6. Data (46-1500 Bytes): البيانات.",
                    "7. CRC (4 Bytes): كشف الأخطاء."
                ]
            },
            {
                h: "Preamble و SFD",
                bullets: [
                    "Preamble = 7 bytes من 10101010.",
                    "للمزامنة بين المرسل والمستقبل.",
                    "SFD = 10101011 — يحدد بداية الإطار.",
                    "الـ 11 في النهاية تقول: 'الآن يبدأ الإطار!'"
                ]
            },
            {
                h: "ملاحظة مهمة",
                bullets: [
                    "Ethernet غير موثوقة ذاتيًا!",
                    "لا تضمن وصول الإطار.",
                    "لا تعيد الإرسال عند الخطأ.",
                    "الاعتماد على الطبقات العليا (TCP).",
                    "CRC يكتشف الخطأ لكن لا يصححه."
                ]
            }
        ],
        keywords: ["Frame", "Preamble", "SFD", "CRC", "إطار", "مكونات"]
    },

    {
        page: 9,
        title: "عنوان MAC — MAC Address",
        brief: "48 bit فريد لكل جهاز في العالم.",
        sections: [
            {
                h: "ما هو MAC Address؟",
                bullets: [
                    "MAC = Media Access Control Address.",
                    "العنوان الفيزيائي لكارت الشبكة (NIC).",
                    "طوله 48 bit = 6 Bytes.",
                    "مكتوب بالـ Hexadecimal.",
                    "مثال: 00:1A:2B:3C:4D:5E"
                ]
            },
            {
                h: "تركيب MAC Address",
                bullets: [
                    "أول 24 bit = OUI (معرّف الشركة المصنّعة).",
                    "آخر 24 bit = رقم تسلسلي فريد.",
                    "النتيجة: كل NIC في العالم له عنوان فريد!",
                    "يُحرق في الـ ROM عند التصنيع."
                ]
            },
            {
                h: "أنواع العناوين",
                bullets: [
                    "Unicast: عنوان جهاز واحد محدد.",
                    "Multicast: مجموعة من الأجهزة.",
                    "Broadcast: جميع الأجهزة (FF:FF:FF:FF:FF:FF).",
                    "التمييز: أقل بت في أول Byte.",
                    "   0 = Unicast، 1 = Multicast."
                ]
            }
        ],
        keywords: ["MAC Address", "48 bit", "OUI", "Unicast", "Broadcast", "Multicast"]
    },

    {
        page: 10,
        title: "الطبقة الفيزيائية — 10Base",
        brief: "أنواع كابلات Ethernet الأصلية.",
        sections: [
            {
                h: "تسمية 10Base-X",
                bullets: [
                    "10 = السرعة (10 Mbps).",
                    "Base = Baseband (إشارة واحدة).",
                    "X = نوع الكابل أو المسافة.",
                    "مثال: 10Base5, 10Base2, 10Base-T."
                ]
            },
            {
                h: "10Base5 — Thick Ethernet",
                bullets: [
                    "كابل محوري سميك (Thick Coaxial).",
                    "أقصى مسافة: 500 متر.",
                    "صعب التركيب والثني.",
                    "قديم جدًا — انقرض."
                ]
            },
            {
                h: "10Base2 — Thin Ethernet",
                bullets: [
                    "كابل محوري رفيع (Thin Coaxial).",
                    "أقصى مسافة: 185 متر.",
                    "أرخص وأسهل من 10Base5.",
                    "انقرض أيضًا."
                ]
            },
            {
                h: "10Base-T — الأكثر انتشارًا",
                bullets: [
                    "UTP = Unshielded Twisted Pair.",
                    "أقصى مسافة: 100 متر.",
                    "طوبولوجيا نجمية (Star) مع Hub.",
                    "سهل التركيب ورخيص.",
                    "ما زال مفهومه مستخدمًا (100Base-TX, 1000Base-T)."
                ]
            }
        ],
        keywords: ["10Base", "Thick", "Thin", "UTP", "Coaxial", "طوبولوجيا"]
    },

    {
        page: 11,
        title: "Hub vs Switch",
        brief: "الفرق الجوهري وتأثيره على الأداء.",
        sections: [
            {
                h: "Hub — الموزع البسيط",
                bullets: [
                    "جهاز Physical Layer.",
                    "يكرر الإشارة لجميع المنافذ!",
                    "Collision Domain واحد لكل المنافذ.",
                    "إذا أرسل جهازان معًا ← تصادم.",
                    "رخيص لكن أداء ضعيف."
                ]
            },
            {
                h: "Switch — المحول الذكي",
                bullets: [
                    "جهاز Data-Link Layer.",
                    "يقرأ MAC Address ويوجه الإطار للمنفذ الصحيح.",
                    "كل منفذ = Collision Domain مستقل.",
                    "لا تصادمات بين المنافذ!",
                    "أداء أعلى بكثير من Hub."
                ]
            },
            {
                h: "لماذا انتقلنا للـ Switch؟",
                bullets: [
                    "Hub: كل الأجهزة تتشارك نفس الـ Bandwidth.",
                    "Switch: كل جهاز له Bandwidth كامل.",
                    "مع Switch: لا نحتاج CSMA/CD!",
                    "Full-Duplex ممكن = إرسال واستقبال معًا.",
                    "النتيجة: Ethernet أصبحت أسرع وأكفأ."
                ]
            }
        ],
        keywords: ["Hub", "Switch", "Collision Domain", "Full-Duplex", "موزع", "محول"]
    },

    {
        page: 12,
        title: "Bridges — الجسور",
        brief: "تقسيم الشبكة وتقليل التصادم.",
        sections: [
            {
                h: "ما هو Bridge؟",
                bullets: [
                    "جهاز Data-Link Layer.",
                    "يربط بين شبكتين أو أكثر.",
                    "يقسم Collision Domain.",
                    "يتعلم MAC Addresses تلقائيًا."
                ]
            },
            {
                h: "كيف يعمل Bridge؟",
                bullets: [
                    "يستقبل إطار من منفذ.",
                    "يقرأ Source MAC ← يحفظه في جدول.",
                    "يقرأ Destination MAC:",
                    "   - إذا في نفس المنفذ ← لا يمرره.",
                    "   - إذا في منفذ آخر ← يمرره.",
                    "   - إذا غير معروف ← يمرره للجميع (Flood)."
                ]
            },
            {
                h: "الفوائد",
                bullets: [
                    "تقليل التصادمات.",
                    "زيادة Bandwidth الفعلي.",
                    "تحسين الأداء.",
                    "Switch = Bridge متعدد المنافذ!"
                ]
            }
        ],
        keywords: ["Bridge", "جسر", "MAC Table", "Collision Domain", "Flood"]
    },

    {
        page: 13,
        title: "Fast Ethernet — 100 Mbps",
        brief: "عشرة أضعاف السرعة، نفس المفهوم.",
        sections: [
            {
                h: "ما هي Fast Ethernet؟",
                bullets: [
                    "IEEE 802.3u — معيار 1995.",
                    "السرعة: 100 Mbps (10x أسرع).",
                    "نفس تنسيق الإطار!",
                    "نفس MAC Protocol.",
                    "توافق رجعي مع 10 Mbps."
                ]
            },
            {
                h: "التغييرات",
                bullets: [
                    "الوقت أقصر ← المسافة أقل.",
                    "أقصى مسافة للكابل: 100 متر.",
                    "أقصى قطر للشبكة: 200 متر.",
                    "Minimum Frame لم يتغير (64 Bytes)."
                ]
            },
            {
                h: "أنواع Fast Ethernet",
                bullets: [
                    "100Base-TX: UTP Category 5.",
                    "100Base-FX: Fiber Optic (ألياف).",
                    "100Base-T4: UTP Category 3 (4 أزواج).",
                    "الأكثر شيوعًا: 100Base-TX."
                ]
            }
        ],
        keywords: ["Fast Ethernet", "100 Mbps", "802.3u", "100Base-TX", "100Base-FX"]
    },

    {
        page: 14,
        title: "Gigabit Ethernet — 1 Gbps",
        brief: "ثورة السرعة مع تحديات جديدة.",
        sections: [
            {
                h: "ما هي Gigabit Ethernet؟",
                bullets: [
                    "IEEE 802.3z / 802.3ab — معيار 1998/1999.",
                    "السرعة: 1000 Mbps = 1 Gbps.",
                    "10x أسرع من Fast Ethernet.",
                    "نفس تنسيق الإطار!"
                ]
            },
            {
                h: "تحديات جديدة",
                bullets: [
                    "السرعة عالية ← الإطار ينتهي بسرعة.",
                    "مشكلة: 64 Bytes غير كافية لـ CSMA/CD.",
                    "حلان:",
                    "   1. Carrier Extension — تمديد الإرسال.",
                    "   2. Frame Bursting — إرسال إطارات متتالية."
                ]
            },
            {
                h: "الحل العملي",
                bullets: [
                    "معظم Gigabit Ethernet تستخدم Full-Duplex!",
                    "Full-Duplex = لا CSMA/CD أصلًا!",
                    "مع Switch: كل اتصال مستقل.",
                    "النتيجة: الحلول النظرية نادرًا ما تُستخدم عمليًا."
                ]
            },
            {
                h: "أنواع Gigabit Ethernet",
                bullets: [
                    "1000Base-SX: ألياف قصيرة (Short Wavelength).",
                    "1000Base-LX: ألياف طويلة (Long Wavelength).",
                    "1000Base-T: UTP Category 5e/6 (الأشهر!)."
                ]
            }
        ],
        keywords: ["Gigabit Ethernet", "1 Gbps", "Full-Duplex", "1000Base-T", "Carrier Extension"]
    },

    {
        page: 15,
        title: "10-Gigabit Ethernet — 10 Gbps",
        brief: "للشبكات الكبيرة والربط بين المواقع.",
        sections: [
            {
                h: "ما هي 10-Gigabit Ethernet؟",
                bullets: [
                    "IEEE 802.3ae — معيار 2002.",
                    "السرعة: 10 Gbps (10x Gigabit).",
                    "نفس تنسيق الإطار!",
                    "لكن: تغييرات جوهرية في الطبقة الفيزيائية."
                ]
            },
            {
                h: "ماذا تغيّر؟",
                bullets: [
                    "لا CSMA/CD نهائيًا!",
                    "Full-Duplex فقط.",
                    "مصممة للألياف الضوئية أساسًا.",
                    "لكن: 10GBase-T تدعم UTP (مكلفة)."
                ]
            },
            {
                h: "الاستخدامات",
                bullets: [
                    "الربط بين Switches الكبيرة.",
                    "مراكز البيانات (Data Centers).",
                    "Metropolitan Area Networks (MAN).",
                    "حتى Wide Area Networks (WAN)!",
                    "Ethernet خرجت من LAN للعالم الأوسع."
                ]
            }
        ],
        keywords: ["10-Gigabit", "10 Gbps", "802.3ae", "Full-Duplex", "Data Center", "MAN"]
    },

    {
        page: 16,
        title: "الخلاصة النهائية — Chapter 13",
        brief: "ملخص شامل لكل ما تعلمناه عن LANs.",
        sections: [
            {
                h: "المفاهيم الأساسية",
                bullets: [
                    "LAN = شبكة محلية في نطاق جغرافي محدود.",
                    "IEEE 802 = معايير توحّد الشبكات.",
                    "LLC + MAC = تقسيم Data-Link Layer.",
                    "Ethernet = التقنية المهيمنة على LANs."
                ]
            },
            {
                h: "تطور Ethernet",
                bullets: [
                    "10 Mbps → 100 Mbps → 1 Gbps → 10 Gbps.",
                    "نفس المفهوم... سرعات أعلى!",
                    "نفس Frame Format → توافق رجعي.",
                    "CSMA/CD اختفى مع Switches و Full-Duplex."
                ]
            },
            {
                h: "القواعد الذهبية للحفظ",
                bullets: [
                    "Minimum Frame = 64 Bytes = 512 bits.",
                    "MAC Address = 48 bits = 6 Bytes.",
                    "Broadcast = FF:FF:FF:FF:FF:FF.",
                    "Hub = Collision Domain واحد.",
                    "Switch = كل منفذ Collision Domain مستقل.",
                    "Full-Duplex = لا CSMA/CD."
                ]
            },
            {
                h: "لماذا نجحت Ethernet؟",
                bullets: [
                    "بسيطة ورخيصة.",
                    "معايير مفتوحة.",
                    "توافق رجعي.",
                    "تطور مستمر دون كسر التوافق.",
                    "أداء ممتاز بتكلفة منخفضة."
                ]
            }
        ],
        keywords: ["خلاصة", "Summary", "LAN", "Ethernet", "قواعد ذهبية", "Chapter 13"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
    done: "net_ch13_done_pages",
    last: "net_ch13_last_page"
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

window.addEventListener("storage", (e) => {
    if (e.key === LS.theme && e.newValue) {
        applyTheme(e.newValue);
    }
});

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
    // Smooth scroll to top of content
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

    if (el.menuBtn) el.menuBtn.addEventListener("click", openDrawer);
    if (el.closeDrawer) el.closeDrawer.addEventListener("click", closeDrawer);
    if (el.drawerOverlay) el.drawerOverlay.addEventListener("click", (e) => {
        if (e.target === el.drawerOverlay) closeDrawer();
    });

    el.themeBtn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(cur === "dark" ? "light" : "dark");
    });

    if (el.drawerThemeBtn) {
        el.drawerThemeBtn.addEventListener("click", () => {
            const cur = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(cur === "dark" ? "light" : "dark");
        });
    }

    el.resetBtn.addEventListener("click", resetProgress);
    el.q.addEventListener("input", () => { state.q = el.q.value; renderList(); renderActive(); });
    el.clearBtn.addEventListener("click", () => { el.q.value = ""; state.q = ""; renderList(); renderActive(); el.q.focus(); });
    el.prevBtn.addEventListener("click", () => setActive(state.activePage - 1));
    el.nextBtn.addEventListener("click", () => setActive(state.activePage + 1));
    el.markBtn.addEventListener("click", toggleDone);
    el.copyBtn.addEventListener("click", copySummary);

    document.addEventListener("keydown", (e) => {
        if (e.target.tagName === "INPUT") return;
        if (e.key === "ArrowLeft") setActive(state.activePage + 1);
        if (e.key === "ArrowRight") setActive(state.activePage - 1);
    });
}

init();
