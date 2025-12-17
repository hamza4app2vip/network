/* ====== Data (Chapter 12: Media Access Control - MAC) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة MAC Layer",
        brief: "مشكلة الوصول للوسط المشترك وكيف نحلها؟",
        sections: [
            {
                h: "المشكلة الأساسية",
                bullets: [
                    "عندما تكون عدة محطات متصلة بوسط مشترك (Broadcast/Multipoint).",
                    "لا يمكن للجميع الإرسال في نفس الوقت!",
                    "إذا أرسلت محطتان معًا ← تصادم (Collision) ← ضياع البيانات.",
                    "نحتاج آلية تنظم من يرسل ومتى."
                ]
            },
            {
                h: "التشبيه — اجتماع عمل",
                bullets: [
                    "تخيل اجتماعًا فيه 10 أشخاص.",
                    "القواعد: لا يتكلم شخصان معًا، لا مقاطعة، لا احتكار.",
                    "نحتاج بروتوكول ينظم الكلام — نفس الفكرة في الشبكات!"
                ]
            },
            {
                h: "الحل — MAC Sublayer",
                bullets: [
                    "بروتوكولات تنتمي لطبقة فرعية اسمها Media Access Control (MAC).",
                    "جزء من Data-Link Layer.",
                    "تحدد من يحق له الإرسال ومتى.",
                    "أساس عمل Ethernet و WiFi."
                ]
            }
        ],
        keywords: ["MAC", "Media Access Control", "Collision", "تصادم", "Broadcast"]
    },

    {
        page: 2,
        title: "Random Access — الوصول العشوائي",
        brief: "Contention Methods — التنافس على الوسط.",
        sections: [
            {
                h: "ما هو Random Access؟",
                bullets: [
                    "لا توجد محطة رئيسية تتحكم.",
                    "كل محطة لها نفس الحق في الإرسال.",
                    "لا يوجد جدول زمني محدد.",
                    "كل محطة تقرر بنفسها متى ترسل."
                ]
            },
            {
                h: "آلية العمل",
                bullets: [
                    "المحطة تتحقق من حالة الوسط (Idle أو Busy).",
                    "إذا خامل ← ترسل.",
                    "إذا مشغول ← تنتظر (حسب البروتوكول).",
                    "كل محطة مستقلة في قرارها."
                ]
            },
            {
                h: "سبب التسمية",
                bullets: [
                    "Random: لا وقت محدد مسبقًا للإرسال.",
                    "Contention: المحطات تتنافس على الوسط.",
                    "المشكلة: إذا أرسلت محطتان معًا ← Collision!"
                ]
            }
        ],
        keywords: ["Random Access", "Contention", "Idle", "Busy", "تنافس"]
    },

    {
        page: 3,
        title: "تطور Random Access",
        brief: "من ALOHA إلى CSMA/CD و CSMA/CA.",
        sections: [
            {
                h: "البداية — ALOHA (جامعة هاواي 1970)",
                bullets: [
                    "أبسط بروتوكول وصول عشوائي.",
                    "إرسال مباشر بدون فحص الوسط!",
                    "النتيجة: تصادمات كثيرة جدًا.",
                    "الكفاءة: 18% فقط!"
                ]
            },
            {
                h: "التطوير — CSMA",
                bullets: [
                    "Carrier Sense Multiple Access.",
                    "الفكرة: استمع قبل أن تتكلم!",
                    "فحص الوسط قبل الإرسال.",
                    "تقليل التصادمات بشكل كبير."
                ]
            },
            {
                h: "التخصص",
                bullets: [
                    "CSMA/CD — Collision Detection: للشبكات السلكية (Ethernet).",
                    "CSMA/CA — Collision Avoidance: للشبكات اللاسلكية (WiFi).",
                    "كل نوع له آلية مختلفة للتعامل مع التصادم."
                ]
            }
        ],
        keywords: ["ALOHA", "CSMA", "CSMA/CD", "CSMA/CA", "تطور"]
    },

    {
        page: 4,
        title: "Pure ALOHA — أبسط بروتوكول",
        brief: "إرسال فوري بدون أي فحص!",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "كل محطة ترسل فورًا عند وجود إطار.",
                    "لا فحص للوسط — لا تنظيم!",
                    "النتيجة: تصادمات كثيرة جدًا."
                ]
            },
            {
                h: "نقطة مهمة جدًا",
                bullets: [
                    "حتى لو تصادم بت واحد فقط ← الإطار كله يُدمَّر!",
                    "لا يوجد إطار 'نصف صحيح'.",
                    "إما كله سليم أو كله تالف."
                ]
            },
            {
                h: "كيف تعرف المحطة أن الإطار فشل؟",
                bullets: [
                    "تنتظر ACK (إقرار) من المستقبل.",
                    "إذا لم يصل ACK خلال Time-out ← تفترض فشل.",
                    "تعيد الإرسال بعد انتظار عشوائي."
                ]
            }
        ],
        keywords: ["Pure ALOHA", "ACK", "Time-out", "إطار", "تصادم"]
    },

    {
        page: 5,
        title: "Binary Exponential Backoff",
        brief: "كيف ننتظر بعد التصادم؟",
        sections: [
            {
                h: "لماذا الانتظار العشوائي؟",
                bullets: [
                    "لو أعادت المحطتان الإرسال فورًا ← تصادم جديد!",
                    "الحل: كل محطة تنتظر وقتًا عشوائيًا مختلفًا.",
                    "هذا يقلل احتمال تصادم جديد."
                ]
            },
            {
                h: "خوارزمية Binary Exponential Backoff",
                bullets: [
                    "بعد كل تصادم: يزداد مجال الأرقام العشوائية.",
                    "TB = R × Tp (أو Tfr).",
                    "R ∈ {0, 1, 2, ..., 2^K − 1}.",
                    "K = عدد التصادمات المتتالية."
                ]
            },
            {
                h: "مثال عملي",
                bullets: [
                    "التصادم الأول (K=1): R ∈ {0, 1}.",
                    "التصادم الثاني (K=2): R ∈ {0, 1, 2, 3}.",
                    "التصادم الثالث (K=3): R ∈ {0, 1, ..., 7}.",
                    "Kmax = 15 عادة — بعده تتوقف المحطة مؤقتًا."
                ]
            }
        ],
        keywords: ["Backoff", "Binary Exponential", "انتظار عشوائي", "K", "Kmax"]
    },

    {
        page: 6,
        title: "Vulnerable Time & Throughput",
        brief: "متى يحدث التصادم؟ وما كفاءة النظام؟",
        sections: [
            {
                h: "Vulnerable Time — الزمن الحرج",
                bullets: [
                    "الزمن الذي إذا أرسلت فيه محطة أخرى ← يحدث تصادم.",
                    "في Pure ALOHA: Vulnerable Time = 2 × Tfr",
                    "السبب: لا يوجد تنظيم — يمكن الإرسال قبل أو بعد أي محطة."
                ]
            },
            {
                h: "Throughput — الكفاءة",
                bullets: [
                    "المعادلة: S = G × e^(−2G)",
                    "G = الحمل (عدد الإطارات المُرسلة/زمن الإطار).",
                    "أقصى Throughput عند G = 0.5",
                    "Smax = 18.4% فقط!"
                ]
            },
            {
                h: "ماذا يعني 18.4%؟",
                bullets: [
                    "أكثر من 80% من الإطارات تضيع بسبب التصادم!",
                    "كفاءة ضعيفة جدًا.",
                    "لذلك تم تطوير Slotted ALOHA."
                ]
            }
        ],
        keywords: ["Vulnerable Time", "Throughput", "كفاءة", "18.4%", "Tfr"]
    },

    {
        page: 7,
        title: "Slotted ALOHA — تحسين ALOHA",
        brief: "تقسيم الزمن إلى Slots.",
        sections: [
            {
                h: "التعديل العبقري",
                bullets: [
                    "تقسيم الزمن إلى فترات متساوية (Time Slots).",
                    "كل Slot = زمن إطار واحد (Tfr).",
                    "الإرسال فقط في بداية Slot — ممنوع في المنتصف!"
                ]
            },
            {
                h: "النتيجة",
                bullets: [
                    "Vulnerable Time = Tfr (نصف Pure ALOHA!).",
                    "تقليل التصادمات.",
                    "تنظيم أفضل للإرسال."
                ]
            },
            {
                h: "Throughput المحسّن",
                bullets: [
                    "المعادلة: S = G × e^(−G)",
                    "أقصى Throughput = 36.8% (ضعف Pure ALOHA!).",
                    "لكن لا يزال غير كافٍ للشبكات الحديثة."
                ]
            }
        ],
        keywords: ["Slotted ALOHA", "Time Slots", "36.8%", "تحسين", "Tfr"]
    },

    {
        page: 8,
        title: "CSMA — استمع قبل الإرسال",
        brief: "Carrier Sense Multiple Access — المنطق الذكي.",
        sections: [
            {
                h: "المبدأ الأساسي",
                bullets: [
                    "Listen Before Talk — استمع قبل أن تتكلم!",
                    "المحطة تستشعر الوسط قبل الإرسال.",
                    "إذا خامل (Idle) ← ترسل.",
                    "إذا مشغول (Busy) ← تنتظر."
                ]
            },
            {
                h: "الفائدة",
                bullets: [
                    "تقليل كبير في التصادمات.",
                    "أفضل بكثير من ALOHA.",
                    "لكن لا يمنع التصادم تمامًا!"
                ]
            },
            {
                h: "لماذا يبقى التصادم؟",
                bullets: [
                    "بسبب Propagation Delay!",
                    "محطة قد ترى الوسط خاملًا.",
                    "بينما إشارة محطة أخرى لم تصلها بعد.",
                    "Vulnerable Time = Tp (زمن الانتشار)."
                ]
            }
        ],
        keywords: ["CSMA", "Carrier Sense", "Listen", "Propagation Delay", "Tp"]
    },

    {
        page: 9,
        title: "Persistence Methods",
        brief: "ماذا تفعل المحطة إذا الوسط مشغول؟",
        sections: [
            {
                h: "السؤالان الأساسيان",
                bullets: [
                    "1. ماذا أفعل إذا الوسط خامل؟",
                    "2. ماذا أفعل إذا الوسط مشغول؟",
                    "كل بروتوكول يجيب بطريقة مختلفة."
                ]
            },
            {
                h: "1-Persistent CSMA",
                bullets: [
                    "إذا خامل ← إرسال فوري (احتمال 100%).",
                    "إذا مشغول ← انتظار حتى يصبح خاملًا ثم إرسال فوري.",
                    "مشكلة: تصادمات عالية إذا انتظرت محطات متعددة.",
                    "مستخدم في Ethernet."
                ]
            },
            {
                h: "Nonpersistent CSMA",
                bullets: [
                    "إذا خامل ← إرسال فوري.",
                    "إذا مشغول ← انتظار عشوائي ثم إعادة الفحص.",
                    "تصادم أقل لكن تأخير أعلى.",
                    "كفاءة أقل في الاستخدام."
                ]
            }
        ],
        keywords: ["Persistence", "1-Persistent", "Nonpersistent", "انتظار", "Ethernet"]
    },

    {
        page: 10,
        title: "p-Persistent CSMA",
        brief: "توازن ذكي بين الكفاءة والتصادم.",
        sections: [
            {
                h: "الفكرة",
                bullets: [
                    "مزيج بين 1-Persistent و Nonpersistent.",
                    "إذا الوسط خامل ← إرسال باحتمال p.",
                    "انتظار باحتمال (1 − p) ثم إعادة المحاولة."
                ]
            },
            {
                h: "الميزة",
                bullets: [
                    "توازن بين: التصادم (أقل) والكفاءة (أعلى).",
                    "يمكن ضبط p حسب الشبكة.",
                    "p صغير ← تصادم أقل لكن تأخير أعلى.",
                    "p كبير ← كفاءة أعلى لكن تصادم أكثر."
                ]
            },
            {
                h: "الاستخدام",
                bullets: [
                    "مستخدم في بعض الشبكات اللاسلكية.",
                    "يحتاج Time Slots لتطبيقه.",
                    "أفضل أداء نظريًا من 1-Persistent."
                ]
            }
        ],
        keywords: ["p-Persistent", "احتمال", "توازن", "Slot", "كفاءة"]
    },

    {
        page: 11,
        title: "CSMA/CD — اكتشاف التصادم",
        brief: "للشبكات السلكية — Ethernet.",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "CD = Collision Detection — اكتشاف التصادم.",
                    "المحطة ترسل وتراقب في نفس الوقت!",
                    "إذا اكتشفت تصادم ← توقف فورًا.",
                    "لا تنتظر نهاية الإطار — توفير للوقت والموارد."
                ]
            },
            {
                h: "كيف تكتشف التصادم؟",
                bullets: [
                    "تقارن الإشارة المُرسلة بالإشارة على الوسط.",
                    "إذا مختلفة ← تصادم!",
                    "أو: مراقبة مستوى الطاقة (طاقة عالية = تصادم)."
                ]
            },
            {
                h: "الإجراء بعد التصادم",
                bullets: [
                    "إرسال Jam Signal (48 bits) لإعلام الجميع.",
                    "توقف عن الإرسال.",
                    "انتظار Backoff ثم إعادة المحاولة.",
                    "ميزة: لا نحتاج انتظار ACK!"
                ]
            }
        ],
        keywords: ["CSMA/CD", "Collision Detection", "Jam Signal", "Ethernet", "مراقبة"]
    },

    {
        page: 12,
        title: "Minimum Frame Size — شرط أساسي",
        brief: "لماذا الحد الأدنى 64 bytes في Ethernet؟",
        sections: [
            {
                h: "المشكلة",
                bullets: [
                    "لكي يعمل CSMA/CD: يجب اكتشاف التصادم أثناء الإرسال!",
                    "إذا انتهى الإرسال قبل اكتشاف التصادم ← فشل الآلية.",
                    "لذلك: الإطار يجب أن يكون طويلًا بما يكفي."
                ]
            },
            {
                h: "القاعدة الذهبية",
                bullets: [
                    "Tfr ≥ 2 × Tp",
                    "زمن الإطار ≥ ضعف زمن الانتشار.",
                    "هذا يضمن أن التصادم يُكتشف قبل نهاية الإرسال."
                ]
            },
            {
                h: "التطبيق في Ethernet",
                bullets: [
                    "10 Mbps Ethernet: أقصى مسافة 2500m.",
                    "الحد الأدنى للإطار = 512 bits = 64 bytes.",
                    "إذا البيانات أقل ← يُضاف Padding.",
                    "هذا يفسر لماذا أصغر إطار Ethernet = 64 bytes!"
                ]
            }
        ],
        keywords: ["Minimum Frame", "64 bytes", "512 bits", "Tfr", "2Tp", "Padding"]
    },

    {
        page: 13,
        title: "CSMA/CD Throughput",
        brief: "كفاءة ممتازة مقارنة بـ ALOHA.",
        sections: [
            {
                h: "الأداء",
                bullets: [
                    "أفضل بكثير من ALOHA وSlotted ALOHA.",
                    "الكفاءة تعتمد على طريقة Persistence.",
                    "1-Persistent: حوالي 50%.",
                    "Nonpersistent: قد يصل 90%!"
                ]
            },
            {
                h: "العوامل المؤثرة",
                bullets: [
                    "طول الكابل (Propagation Delay).",
                    "سرعة الشبكة (Data Rate).",
                    "حجم الإطار.",
                    "عدد المحطات النشطة."
                ]
            },
            {
                h: "مستخدم في",
                bullets: [
                    "Ethernet (IEEE 802.3).",
                    "الشبكات السلكية فقط.",
                    "لا يعمل في اللاسلكي — لماذا؟ الصفحة التالية!"
                ]
            }
        ],
        keywords: ["Throughput", "50%", "90%", "Ethernet", "802.3", "كفاءة"]
    },

    {
        page: 14,
        title: "CSMA/CA — للشبكات اللاسلكية",
        brief: "لماذا لا يعمل CD في WiFi؟",
        sections: [
            {
                h: "المشكلة في اللاسلكي",
                bullets: [
                    "لا يمكن الإرسال والاستقبال في نفس الوقت على نفس التردد!",
                    "الإشارة المُرسلة أقوى بكثير من المُستقبلة.",
                    "لا يمكن اكتشاف التصادم أثناء الإرسال.",
                    "لذلك CD لا يعمل في WiFi."
                ]
            },
            {
                h: "الحل — Collision Avoidance",
                bullets: [
                    "CA = Collision Avoidance — تجنب التصادم.",
                    "بدلًا من اكتشاف التصادم ← نحاول منعه أصلًا!",
                    "استخدام تقنيات إضافية للتنسيق."
                ]
            },
            {
                h: "مستخدم في",
                bullets: [
                    "WiFi (IEEE 802.11).",
                    "جميع الشبكات اللاسلكية.",
                    "أكثر تعقيدًا من CSMA/CD."
                ]
            }
        ],
        keywords: ["CSMA/CA", "Collision Avoidance", "WiFi", "802.11", "لاسلكي"]
    },

    {
        page: 15,
        title: "IFS & Contention Window",
        brief: "آليات CSMA/CA الأساسية.",
        sections: [
            {
                h: "IFS — Interframe Space",
                bullets: [
                    "انتظار إجباري حتى لو الوسط خامل!",
                    "الهدف: إعطاء فرصة للإشارات البعيدة للوصول.",
                    "أنواع: SIFS (قصير)، DIFS (طويل).",
                    "SIFS للـ ACK، DIFS للبيانات."
                ]
            },
            {
                h: "Contention Window",
                bullets: [
                    "نافذة انتظار عشوائي بعد IFS.",
                    "تستخدم Binary Exponential Backoff.",
                    "كل محطة تختار رقمًا عشوائيًا ← تنتظر هذا العدد من Slots.",
                    "من ينتهي أولًا ← يرسل أولًا."
                ]
            },
            {
                h: "الفائدة",
                bullets: [
                    "تقليل احتمال التصادم.",
                    "توزيع عادل لفرص الإرسال.",
                    "تنظيم الوصول للوسط اللاسلكي."
                ]
            }
        ],
        keywords: ["IFS", "SIFS", "DIFS", "Contention Window", "Backoff"]
    },

    {
        page: 16,
        title: "RTS/CTS — حل Hidden Station",
        brief: "المصافحة الرباعية في WiFi.",
        sections: [
            {
                h: "مشكلة Hidden Station",
                bullets: [
                    "محطة A لا ترى محطة C.",
                    "كلاهما يرسل لـ B في نفس الوقت ← تصادم!",
                    "A ترى الوسط خاملًا لأنها لا تسمع C.",
                    "هذه مشكلة شائعة في اللاسلكي."
                ]
            },
            {
                h: "الحل — RTS/CTS",
                bullets: [
                    "RTS = Request To Send — طلب إرسال.",
                    "CTS = Clear To Send — موافقة على الإرسال.",
                    "المحطة ترسل RTS أولًا.",
                    "الهدف يرد بـ CTS.",
                    "جميع المحطات تسمع CTS ← تعرف أن الوسط مشغول."
                ]
            },
            {
                h: "التسلسل الكامل",
                bullets: [
                    "1. A → RTS → B",
                    "2. B → CTS → الجميع",
                    "3. A → DATA → B",
                    "4. B → ACK → A",
                    "هذا يمنع C من الإرسال أثناء نقل البيانات."
                ]
            }
        ],
        keywords: ["RTS", "CTS", "Hidden Station", "مصافحة", "WiFi"]
    },

    {
        page: 17,
        title: "NAV — Network Allocation Vector",
        brief: "المؤقت الصامت — Virtual Carrier Sensing.",
        sections: [
            {
                h: "ما هو NAV؟",
                bullets: [
                    "NAV = Network Allocation Vector.",
                    "مؤقت في كل محطة يحدد متى الوسط سيكون متاحًا.",
                    "يُضبط من معلومات في RTS/CTS/DATA."
                ]
            },
            {
                h: "كيف يعمل؟",
                bullets: [
                    "RTS يحتوي مدة الإرسال المتوقعة.",
                    "CTS يؤكد هذه المدة.",
                    "جميع المحطات تضبط NAV على هذه المدة.",
                    "خلال NAV: لا تستشعر الوسط — تنتظر فقط."
                ]
            },
            {
                h: "الفائدة",
                bullets: [
                    "Virtual Carrier Sensing — استشعار افتراضي.",
                    "توفير الطاقة (لا حاجة للاستشعار المستمر).",
                    "منع التصادم غير المباشر.",
                    "حل فعال لمشكلة Hidden Station."
                ]
            }
        ],
        keywords: ["NAV", "Network Allocation Vector", "Virtual", "مؤقت", "توفير طاقة"]
    },

    {
        page: 18,
        title: "Controlled Access — الوصول المُتحكَّم",
        brief: "لا أحد يرسل إلا بإذن!",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "عكس Random Access تمامًا!",
                    "لا تنافس — تنظيم مركزي.",
                    "كل محطة تنتظر دورها أو إذنها.",
                    "لا تصادمات — لكن overhead أعلى."
                ]
            },
            {
                h: "أنواع Controlled Access",
                bullets: [
                    "1. Reservation — حجز مسبق.",
                    "2. Polling — استفتاء من محطة رئيسية.",
                    "3. Token Passing — تمرير رمز."
                ]
            },
            {
                h: "متى نستخدمه؟",
                bullets: [
                    "عندما نحتاج ضمان عدم التصادم.",
                    "تطبيقات الوقت الحقيقي (Real-time).",
                    "شبكات صناعية حساسة.",
                    "لكنه أبطأ وأعقد من Random Access."
                ]
            }
        ],
        keywords: ["Controlled Access", "Reservation", "Polling", "Token", "تحكم"]
    },

    {
        page: 19,
        title: "Reservation & Polling",
        brief: "حجز مسبق واستفتاء مركزي.",
        sections: [
            {
                h: "Reservation — الحجز",
                bullets: [
                    "الزمن مقسم إلى فترات.",
                    "كل فترة تبدأ بـ Reservation Frame.",
                    "كل محطة لها minislot للحجز.",
                    "من يحجز ← يرسل في الفترة التالية."
                ]
            },
            {
                h: "Polling — الاستفتاء",
                bullets: [
                    "محطة رئيسية (Primary) تتحكم.",
                    "محطات ثانوية (Secondary) تنتظر.",
                    "الرئيسية ترسل Poll لكل محطة بالترتيب.",
                    "المحطة المُستفتاة ترسل أو ترد بـ NAK."
                ]
            },
            {
                h: "عيب Polling الكبير",
                bullets: [
                    "Single Point of Failure!",
                    "إذا فشلت المحطة الرئيسية ← الشبكة كلها تتوقف!",
                    "يحتاج آلية لاستبدال الرئيسية."
                ]
            }
        ],
        keywords: ["Reservation", "Polling", "Primary", "Secondary", "minislot"]
    },

    {
        page: 20,
        title: "Token Passing — تمرير الرمز",
        brief: "حلقة منطقية وToken يحدد من يرسل.",
        sections: [
            {
                h: "الفكرة",
                bullets: [
                    "المحطات مرتبة في حلقة منطقية.",
                    "Token (رمز) يدور بين المحطات.",
                    "من يملك Token ← يحق له الإرسال.",
                    "بعد الانتهاء ← يمرر Token للمحطة التالية."
                ]
            },
            {
                h: "المميزات",
                bullets: [
                    "لا تصادمات نهائيًا!",
                    "عدالة مضمونة — كل محطة تحصل على دورها.",
                    "مناسب للتطبيقات الحساسة للزمن."
                ]
            },
            {
                h: "العيوب",
                bullets: [
                    "إدارة Token معقدة.",
                    "ماذا لو ضاع Token؟ ← يجب إنشاء جديد.",
                    "ماذا لو أُضيفت/حُذفت محطة؟ ← تحديث الحلقة.",
                    "Overhead في الشبكات الخاملة."
                ]
            }
        ],
        keywords: ["Token Passing", "Token", "حلقة", "Ring", "عدالة"]
    },

    {
        page: 21,
        title: "الخلاصة — MAC Protocols",
        brief: "ملخص شامل لبروتوكولات التحكم في الوصول.",
        sections: [
            {
                h: "Random Access (تنافسي)",
                bullets: [
                    "ALOHA: بسيط جدًا، كفاءة ضعيفة (18-36%).",
                    "CSMA: استشعار قبل الإرسال، أفضل بكثير.",
                    "CSMA/CD: اكتشاف التصادم — Ethernet (سلكي).",
                    "CSMA/CA: تجنب التصادم — WiFi (لاسلكي)."
                ]
            },
            {
                h: "Controlled Access (مُتحكَّم)",
                bullets: [
                    "Reservation: حجز مسبق.",
                    "Polling: استفتاء مركزي — عيب: نقطة فشل واحدة.",
                    "Token Passing: تمرير رمز — لا تصادم لكن إدارة معقدة."
                ]
            },
            {
                h: "الاختيار يعتمد على",
                bullets: [
                    "نوع الوسط: سلكي ← CD، لاسلكي ← CA.",
                    "متطلبات التطبيق: وقت حقيقي ← Controlled.",
                    "تكلفة وتعقيد: Random أبسط وأرخص.",
                    "عدد المحطات وحجم الحركة."
                ]
            }
        ],
        keywords: ["خلاصة", "Summary", "MAC", "Random", "Controlled", "مقارنة"]
    },

    {
        page: 22,
        title: "IFS — Interframe Space (تفصيل)",
        brief: "لماذا ننتظر حتى لو الوسط خامل؟",
        sections: [
            {
                h: "ما هو IFS؟",
                bullets: [
                    "IFS = Interframe Space — الفراغ بين الإطارات.",
                    "فترة انتظار إجبارية قبل الإرسال.",
                    "حتى لو الوسط يبدو خاملًا — لا نرسل فورًا!",
                    "السبب: إعطاء فرصة للإشارات البعيدة للوصول."
                ]
            },
            {
                h: "أنواع IFS",
                bullets: [
                    "SIFS (Short IFS): أقصر فترة — للـ ACK و CTS.",
                    "DIFS (Distributed IFS): أطول — للبيانات العادية.",
                    "PIFS (PCF IFS): للوضع المُتحكَّم.",
                    "EIFS (Extended IFS): بعد استقبال إطار تالف.",
                    "الأقصر له أولوية أعلى!"
                ]
            },
            {
                h: "الترتيب حسب الأولوية",
                bullets: [
                    "SIFS < PIFS < DIFS < EIFS",
                    "ACK يُرسل بعد SIFS — أولوية قصوى.",
                    "البيانات العادية تنتظر DIFS — أولوية أقل.",
                    "هذا يضمن وصول ACK قبل أي إرسال جديد."
                ]
            }
        ],
        keywords: ["IFS", "SIFS", "DIFS", "PIFS", "EIFS", "أولوية", "انتظار"]
    },

    {
        page: 23,
        title: "Contention Window — نافذة التنافس",
        brief: "الانتظار العشوائي لتقليل التصادم.",
        sections: [
            {
                h: "ما هي Contention Window؟",
                bullets: [
                    "نافذة زمنية مقسمة إلى Slots.",
                    "كل محطة تختار رقمًا عشوائيًا ضمن النافذة.",
                    "تنتظر هذا العدد من Slots قبل الإرسال.",
                    "من ينتهي عداده أولًا — يرسل أولًا."
                ]
            },
            {
                h: "Binary Exponential Backoff",
                bullets: [
                    "CW = Contention Window.",
                    "في البداية: CW = CWmin (مثلًا 31 Slot).",
                    "بعد كل تصادم: CW = CW × 2",
                    "الحد الأقصى: CWmax (مثلًا 1023 Slot).",
                    "بعد نجاح الإرسال: CW يعود لـ CWmin."
                ]
            },
            {
                h: "لماذا هذا ذكي؟",
                bullets: [
                    "تصادمات كثيرة ← نافذة أكبر ← توزيع أفضل.",
                    "الشبكة هادئة ← نافذة صغيرة ← سرعة أعلى.",
                    "توازن تلقائي حسب حالة الشبكة.",
                    "عدالة: كل المحطات تستخدم نفس الخوارزمية."
                ]
            }
        ],
        keywords: ["Contention Window", "CW", "Backoff", "Slot", "CWmin", "CWmax"]
    },

    {
        page: 24,
        title: "RTS/CTS — التفاصيل الكاملة",
        brief: "المصافحة الرباعية لحل Hidden Station.",
        sections: [
            {
                h: "لماذا RTS/CTS؟",
                bullets: [
                    "مشكلة Hidden Station: A لا ترى C، كلاهما يرسل لـ B.",
                    "A تظن الوسط خالي — لكن C ترسل!",
                    "التصادم يحدث عند B — المستقبل.",
                    "الحل: تنسيق مسبق قبل إرسال البيانات."
                ]
            },
            {
                h: "خطوات المصافحة",
                bullets: [
                    "1. A ترسل RTS (Request To Send) لـ B.",
                    "   RTS يحتوي: مدة الإرسال المتوقعة.",
                    "2. B ترد بـ CTS (Clear To Send) للجميع.",
                    "   CTS يحتوي: نفس المدة.",
                    "3. A ترسل DATA بعد استلام CTS.",
                    "4. B ترد بـ ACK بعد استلام DATA بنجاح."
                ]
            },
            {
                h: "ماذا تفعل C؟",
                bullets: [
                    "C تسمع CTS من B (حتى لو لم تسمع RTS من A).",
                    "C تعرف أن الوسط مشغول — تضبط NAV.",
                    "C لا ترسل خلال هذه الفترة.",
                    "النتيجة: لا تصادم!"
                ]
            }
        ],
        keywords: ["RTS", "CTS", "Hidden Station", "مصافحة", "تنسيق", "DATA", "ACK"]
    },

    {
        page: 25,
        title: "NAV — التفاصيل الكاملة",
        brief: "Virtual Carrier Sensing — الاستشعار الافتراضي.",
        sections: [
            {
                h: "ما هو NAV بالتفصيل؟",
                bullets: [
                    "NAV = Network Allocation Vector.",
                    "مؤقت داخلي في كل محطة.",
                    "يحدد متى الوسط سيكون متاحًا.",
                    "يُضبط من Duration Field في RTS/CTS/DATA."
                ]
            },
            {
                h: "كيف يعمل NAV؟",
                bullets: [
                    "محطة تسمع RTS أو CTS.",
                    "تقرأ Duration Field — مثلًا 500 μs.",
                    "تضبط NAV = 500 μs.",
                    "خلال هذه الفترة: لا تحاول الإرسال.",
                    "لا تستشعر الوسط فيزيائيًا — توفير للطاقة."
                ]
            },
            {
                h: "Virtual vs Physical Carrier Sensing",
                bullets: [
                    "Physical: استشعار فعلي للإشارات على الهواء.",
                    "Virtual: NAV — مؤقت بناءً على معلومات.",
                    "المحطة ترسل فقط إذا: Physical AND Virtual كلاهما يقول 'خالي'.",
                    "هذا يمنع التصادم حتى مع Hidden Stations."
                ]
            }
        ],
        keywords: ["NAV", "Virtual Carrier Sensing", "Duration", "مؤقت", "Physical"]
    },

    {
        page: 26,
        title: "Controlled Access — مقدمة تفصيلية",
        brief: "التحكم المركزي في الوصول للوسط.",
        sections: [
            {
                h: "الفلسفة الأساسية",
                bullets: [
                    "في Random Access: كل محطة تقرر بنفسها.",
                    "في Controlled Access: جهة مركزية تقرر.",
                    "لا تنافس — لا تصادمات!",
                    "لكن: overhead إضافي للتنظيم."
                ]
            },
            {
                h: "متى نستخدم Controlled Access؟",
                bullets: [
                    "تطبيقات Real-time: صوت، فيديو.",
                    "شبكات صناعية: حيث التصادم غير مقبول.",
                    "عدد محطات كبير: Random يصبح غير فعال.",
                    "ضمان QoS: جودة خدمة محددة."
                ]
            },
            {
                h: "الأنواع الثلاثة",
                bullets: [
                    "1. Reservation: حجز مسبق للوقت.",
                    "2. Polling: استفتاء دوري.",
                    "3. Token Passing: تمرير رمز الإرسال.",
                    "كل نوع له استخداماته ومميزاته."
                ]
            }
        ],
        keywords: ["Controlled Access", "مركزي", "QoS", "Real-time", "تحكم"]
    },

    {
        page: 27,
        title: "Reservation — الحجز المسبق",
        brief: "كل محطة تحجز دورها قبل الإرسال.",
        sections: [
            {
                h: "كيف يعمل Reservation؟",
                bullets: [
                    "الزمن مقسم إلى Frames (فترات).",
                    "كل Frame يبدأ بـ Reservation Interval.",
                    "Reservation Interval مقسم إلى Minislots.",
                    "كل محطة لها Minislot خاص للحجز."
                ]
            },
            {
                h: "التسلسل الزمني",
                bullets: [
                    "1. Reservation Interval: المحطات تحجز.",
                    "2. Data Transmission: المحطات الحاجزة ترسل.",
                    "3. تنتهي الفترة — تبدأ فترة جديدة.",
                    "من لم يحجز — ينتظر الفترة التالية."
                ]
            },
            {
                h: "المميزات والعيوب",
                bullets: [
                    "ميزة: لا تصادمات في إرسال البيانات.",
                    "ميزة: عدالة — كل محطة لها Minislot.",
                    "عيب: overhead الحجز في كل فترة.",
                    "عيب: تأخير إذا الشبكة خاملة."
                ]
            }
        ],
        keywords: ["Reservation", "حجز", "Minislot", "Frame", "Interval"]
    },

    {
        page: 28,
        title: "Polling — الاستفتاء المركزي",
        brief: "المحطة الرئيسية تسأل كل محطة بالترتيب.",
        sections: [
            {
                h: "الهيكل",
                bullets: [
                    "Primary Station: المحطة الرئيسية — تتحكم.",
                    "Secondary Stations: المحطات الثانوية — تنتظر.",
                    "الرئيسية ترسل Poll لكل محطة.",
                    "المحطة المُستفتاة ترسل أو ترد NAK."
                ]
            },
            {
                h: "آلية العمل",
                bullets: [
                    "1. الرئيسية ترسل Poll لـ Station A.",
                    "2. A ترسل بياناتها (أو NAK إذا ليس لديها).",
                    "3. الرئيسية ترسل Poll لـ Station B.",
                    "4. وهكذا بالترتيب...",
                    "5. بعد آخر محطة — تعود للأولى."
                ]
            },
            {
                h: "العيب الكبير",
                bullets: [
                    "Single Point of Failure!",
                    "إذا فشلت الرئيسية ← الشبكة كلها تتوقف.",
                    "الحل: محطة رئيسية احتياطية (Backup).",
                    "أو: آلية انتخاب رئيسية جديدة.",
                    "overhead كبير في الشبكات الهادئة."
                ]
            }
        ],
        keywords: ["Polling", "Primary", "Secondary", "Poll", "NAK", "استفتاء"]
    },

    {
        page: 29,
        title: "Token Passing — التفاصيل الكاملة",
        brief: "Token يدور في حلقة ويحدد من يرسل.",
        sections: [
            {
                h: "الفكرة بالتفصيل",
                bullets: [
                    "المحطات مرتبة في حلقة منطقية (Logical Ring).",
                    "Token = رمز خاص يدور بين المحطات.",
                    "من يملك Token = له الحق في الإرسال.",
                    "بعد الانتهاء — يمرر Token للمحطة التالية."
                ]
            },
            {
                h: "Token Holding Time",
                bullets: [
                    "المحطة لا تحتفظ بـ Token للأبد!",
                    "THT = Token Holding Time — الحد الأقصى.",
                    "إذا انتهى الوقت — يجب تمرير Token.",
                    "هذا يضمن عدالة بين المحطات."
                ]
            },
            {
                h: "المشاكل والحلول",
                bullets: [
                    "مشكلة: Token ضاع (Lost Token).",
                    "   حل: مؤقت — إذا لم يصل Token خلاله، أنشئ جديد.",
                    "مشكلة: Token مُكرر (Duplicate Token).",
                    "   حل: كل Token له رقم تسلسلي.",
                    "مشكلة: محطة تنضم/تغادر.",
                    "   حل: بروتوكول لتحديث الحلقة."
                ]
            }
        ],
        keywords: ["Token Passing", "Token", "Ring", "THT", "Lost Token", "حلقة"]
    },

    {
        page: 30,
        title: "الخلاصة النهائية — Chapter 12",
        brief: "ملخص شامل لكل ما تعلمناه.",
        sections: [
            {
                h: "Random Access — التنافس",
                bullets: [
                    "ALOHA: بسيط، كفاءة ضعيفة (18-36%).",
                    "CSMA: استمع قبل الإرسال — أفضل بكثير.",
                    "CSMA/CD: اكتشف التصادم — Ethernet (سلكي).",
                    "CSMA/CA: تجنب التصادم — WiFi (لاسلكي).",
                    "IFS + Contention Window + RTS/CTS + NAV."
                ]
            },
            {
                h: "Controlled Access — التحكم",
                bullets: [
                    "Reservation: حجز مسبق — Minislots.",
                    "Polling: استفتاء مركزي — Primary/Secondary.",
                    "Token Passing: رمز يدور — عدالة مضمونة.",
                    "مشترك: لا تصادمات، لكن overhead أعلى."
                ]
            },
            {
                h: "القواعد الذهبية للحفظ",
                bullets: [
                    "سلكي ← CSMA/CD (اكتشاف).",
                    "لاسلكي ← CSMA/CA (تجنب).",
                    "Real-time ← Controlled Access.",
                    "Minimum Frame Size = 64 bytes في Ethernet.",
                    "WiFi يستخدم: DIFS + CW + RTS/CTS + NAV.",
                    "Token Ring: لا تصادم لكن إدارة معقدة."
                ]
            }
        ],
        keywords: ["خلاصة نهائية", "Chapter 12", "MAC", "Ethernet", "WiFi", "قواعد ذهبية"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
    done: "net_ch12_done_pages",
    last: "net_ch12_last_page"
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
    // Check for celebration popup on last page
    if (typeof checkAndCelebrate === 'function') {
        checkAndCelebrate(state.activePage, PAGES.length);
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
