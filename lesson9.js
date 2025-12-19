/* ====== Data (عناوين IPv4: IPv4 Addressing - العنونة المنطقية) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة العنونة المنطقية IPv4",
        brief: "ما هو عنوان IP؟ ولماذا نحتاجه؟",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "عنوان IP هو عنوان منطقي (Logical Address) يعرّف اتصال الجهاز بالشبكة.",
                    "العنوان مرتبط بالـ Interface (واجهة الشبكة) وليس بالجهاز نفسه.",
                    "إذا كان للجهاز أكثر من واجهة (Wi-Fi + Ethernet) ← يحتاج عنوان IP لكل واجهة!",
                    "العنوان المنطقي يختلف عن العنوان الفيزيائي (MAC Address)."
                ]
            },
            {
                h: "خصائص عنوان IPv4",
                bullets: [
                    "طول العنوان: 32 بت (4 bytes).",
                    "فريد عالميًا في نفس اللحظة الزمنية.",
                    "لا يمكن لجهازين على الإنترنت امتلاك نفس العنوان في نفس الوقت.",
                    "يمكن إعادة استخدام العنوان بعد تحريره."
                ]
            },
            {
                h: "لماذا نحتاج عنوان منطقي؟",
                bullets: [
                    "MAC Address محلي فقط — لا يصلح للتوجيه عبر الشبكات.",
                    "IP Address هرمي — يحدد الشبكة والجهاز معًا.",
                    "يسهّل التوجيه (Routing) بين الشبكات المختلفة.",
                    "أساس عمل طبقة الشبكة (Network Layer)."
                ]
            }
        ],
        keywords: ["IPv4", "IP Address", "عنوان منطقي", "Interface", "32-bit"]
    },

    {
        page: 2,
        title: "فضاء العنونة Address Space",
        brief: "كم عنوان متاح في IPv4؟",
        sections: [
            {
                h: "حساب العناوين المتاحة",
                bullets: [
                    "العنوان 32 بت ← 2³² عنوان ممكن.",
                    "2³² = 4,294,967,296 عنوان (حوالي 4.3 مليار).",
                    "هذا هو Address Space الكامل لـ IPv4.",
                    "يبدو كبيرًا لكنه لم يكفِ لعدد الأجهزة المتزايد!"
                ]
            },
            {
                h: "مشكلة الهدر التاريخية",
                bullets: [
                    "لم يُستثمر هذا العدد بشكل جيد في البداية.",
                    "العنونة الصفية (Classful) أهدرت ملايين العناوين.",
                    "الحجز المسبق للعناوين الخاصة والمحفوظة.",
                    "القيود التاريخية في توزيع العناوين."
                ]
            },
            {
                h: "النتيجة",
                bullets: [
                    "نفاد العناوين العامة (IPv4 Exhaustion).",
                    "ظهور حلول مؤقتة: NAT, Private Addresses.",
                    "تطوير IPv6 بـ 128 بت (عناوين لا نهائية تقريبًا).",
                    "لكن IPv4 لا يزال الأكثر استخدامًا!"
                ]
            }
        ],
        keywords: ["Address Space", "4.3 billion", "2^32", "IPv4 Exhaustion", "NAT"]
    },

    {
        page: 3,
        title: "طرق كتابة العنوان",
        brief: "Binary vs Dotted Decimal Notation",
        sections: [
            {
                h: "التدوين الثنائي Binary Notation",
                bullets: [
                    "العنوان كسلسلة من 32 بت (0 و 1).",
                    "مثال: 01110101.10010101.00011101.00000010",
                    "صعب القراءة للبشر — مستخدم داخليًا فقط.",
                    "مهم لفهم العمليات على العناوين (AND, OR)."
                ]
            },
            {
                h: "التدوين العشري المنقط Dotted Decimal",
                bullets: [
                    "العنوان مقسم إلى 4 أجزاء (Octets).",
                    "كل جزء = 1 بايت = 8 بت = قيمة من 0 إلى 255.",
                    "الأجزاء مفصولة بنقاط.",
                    "مثال: 117.149.29.2"
                ]
            },
            {
                h: "التحويل بين الطريقتين",
                bullets: [
                    "كل octet يُحوَّل منفصلًا.",
                    "مثال: 01110101 = 117",
                    "مثال: 10010101 = 149",
                    "التحويل مهارة أساسية في الشبكات!"
                ]
            }
        ],
        keywords: ["Binary", "Dotted Decimal", "Octet", "8-bit", "تحويل"]
    },

    {
        page: 4,
        title: "العنونة الصفية Classful Addressing",
        brief: "التقسيم التاريخي لعناوين IPv4 إلى 5 صفوف.",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "في البداية، قُسمت العناوين إلى 5 صفوف: A, B, C, D, E.",
                    "كل صف له حجم ثابت لا يتغير.",
                    "التقسيم بناءً على البتات الأولى من العنوان.",
                    "هذا النظام أصبح قديمًا لكنه مهم للفهم!"
                ]
            },
            {
                h: "كيف نعرف الصف؟",
                bullets: [
                    "من البتات الأولى للعنوان:",
                    "Class A: يبدأ بـ 0 (0.0.0.0 → 127.255.255.255)",
                    "Class B: يبدأ بـ 10 (128.0.0.0 → 191.255.255.255)",
                    "Class C: يبدأ بـ 110 (192.0.0.0 → 223.255.255.255)"
                ]
            },
            {
                h: "المشكلة الجوهرية",
                bullets: [
                    "كل صف له حجم ثابت — لا مرونة!",
                    "Class A ضخم جدًا — معظم العناوين مهدورة.",
                    "Class C صغير جدًا — لا يكفي معظم الشركات.",
                    "أدى إلى هدر هائل للعناوين."
                ]
            }
        ],
        keywords: ["Classful", "Class A", "Class B", "Class C", "صفوف", "هدر"]
    },

    {
        page: 5,
        title: "تفاصيل الصفوف الخمسة",
        brief: "خصائص كل صف ومشاكله.",
        sections: [
            {
                h: "Class A — الشبكات الضخمة",
                bullets: [
                    "البتات الأولى: 0xxxxxxx (البايت الأول: 0-127).",
                    "1 بايت للشبكة + 3 بايتات للمضيفين.",
                    "عدد الشبكات: 128 شبكة فقط!",
                    "عدد المضيفين: 16,777,214 لكل شبكة — ضخم جدًا!"
                ]
            },
            {
                h: "Class B — الشبكات المتوسطة",
                bullets: [
                    "البتات الأولى: 10xxxxxx (البايت الأول: 128-191).",
                    "2 بايت للشبكة + 2 بايت للمضيفين.",
                    "عدد الشبكات: 16,384 شبكة.",
                    "عدد المضيفين: 65,534 لكل شبكة."
                ]
            },
            {
                h: "Class C — الشبكات الصغيرة",
                bullets: [
                    "البتات الأولى: 110xxxxx (البايت الأول: 192-223).",
                    "3 بايتات للشبكة + 1 بايت للمضيفين.",
                    "عدد الشبكات: 2,097,152 شبكة.",
                    "عدد المضيفين: 254 لكل شبكة فقط!"
                ]
            },
            {
                h: "Class D & E — خاصة",
                bullets: [
                    "Class D (224-239): Multicast — لا تُخصص للأجهزة.",
                    "Class E (240-255): محفوظة للتجارب والأبحاث.",
                    "لا تُستخدم في العنونة العادية."
                ]
            }
        ],
        keywords: ["Class A", "Class B", "Class C", "Multicast", "عدد المضيفين"]
    },

    {
        page: 6,
        title: "NetID و HostID",
        brief: "بنية عنوان IP: جزء الشبكة وجزء المضيف.",
        sections: [
            {
                h: "تقسيم العنوان",
                bullets: [
                    "كل عنوان IP ينقسم إلى جزأين:",
                    "Network ID (NetID): يحدد الشبكة.",
                    "Host ID (HostID): يحدد الجهاز داخل الشبكة.",
                    "التقسيم ضروري للتوجيه (Routing)!"
                ]
            },
            {
                h: "التقسيم حسب الصف",
                bullets: [
                    "Class A: 1 بايت شبكة + 3 بايتات مضيف.",
                    "Class B: 2 بايت شبكة + 2 بايت مضيف.",
                    "Class C: 3 بايتات شبكة + 1 بايت مضيف.",
                    "هذه البنية ثابتة في العنونة الصفية!"
                ]
            },
            {
                h: "مثال عملي",
                bullets: [
                    "العنوان 192.168.1.100 (Class C):",
                    "NetID = 192.168.1 (3 بايتات).",
                    "HostID = 100 (1 بايت).",
                    "جميع الأجهزة في نفس الشبكة لها نفس NetID!"
                ]
            }
        ],
        keywords: ["NetID", "HostID", "Network ID", "Host ID", "تقسيم العنوان"]
    },

    {
        page: 7,
        title: "قناع الشبكة Subnet Mask",
        brief: "كيف نحدد أي جزء للشبكة وأي جزء للمضيف؟",
        sections: [
            {
                h: "ما هو Subnet Mask؟",
                bullets: [
                    "عدد 32 بت يحدد بنية العنوان.",
                    "البتات = 1 ← جزء الشبكة (Network).",
                    "البتات = 0 ← جزء المضيف (Host).",
                    "الواحدات دائمًا متتالية من اليسار!"
                ]
            },
            {
                h: "الأقنعة الافتراضية (Default Masks)",
                bullets: [
                    "Class A: /8 ← 255.0.0.0",
                    "Class B: /16 ← 255.255.0.0",
                    "Class C: /24 ← 255.255.255.0",
                    "الرقم بعد / = عدد الواحدات في القناع."
                ]
            },
            {
                h: "استخدام القناع",
                bullets: [
                    "عملية AND بين العنوان والقناع تعطي عنوان الشبكة.",
                    "مثال: 192.168.1.100 AND 255.255.255.0 = 192.168.1.0",
                    "هذا يسمح للراوتر بمعرفة وجهة الحزمة.",
                    "أساس عملية التوجيه!"
                ]
            }
        ],
        keywords: ["Subnet Mask", "قناع", "/24", "/16", "/8", "AND"]
    },

    {
        page: 8,
        title: "تدوين CIDR",
        brief: "الطريقة الحديثة لكتابة العناوين مع أقنعتها.",
        sections: [
            {
                h: "ما هو CIDR؟",
                bullets: [
                    "CIDR = Classless Inter-Domain Routing.",
                    "طريقة مختصرة لكتابة العنوان مع القناع.",
                    "الصيغة: IP/n حيث n = عدد بتات الشبكة.",
                    "مثال: 192.168.1.0/24"
                ]
            },
            {
                h: "أمثلة على CIDR",
                bullets: [
                    "/8 ← 255.0.0.0 (8 واحدات).",
                    "/16 ← 255.255.0.0 (16 واحدة).",
                    "/24 ← 255.255.255.0 (24 واحدة).",
                    "/28 ← 255.255.255.240 (28 واحدة)."
                ]
            },
            {
                h: "حساب عدد العناوين",
                bullets: [
                    "عدد العناوين = 2^(32 - n)",
                    "/24 ← 2^8 = 256 عنوان.",
                    "/28 ← 2^4 = 16 عنوان.",
                    "/30 ← 2^2 = 4 عناوين (للروابط Point-to-Point)."
                ]
            }
        ],
        keywords: ["CIDR", "Classless", "/n", "prefix", "عدد العناوين"]
    },

    {
        page: 9,
        title: "الشبكات الجزئية Subnetting",
        brief: "تقسيم شبكة كبيرة إلى شبكات أصغر.",
        sections: [
            {
                h: "لماذا Subnetting؟",
                bullets: [
                    "الشبكات الصفية كبيرة جدًا ومهدرة.",
                    "نحتاج تقسيمها إلى أجزاء أصغر حسب الحاجة.",
                    "تحسين الأداء والأمان والإدارة.",
                    "الحل: استعارة بتات من HostID!"
                ]
            },
            {
                h: "آلية العمل",
                bullets: [
                    "نأخذ بتات من جزء المضيف (HostID).",
                    "نحولها إلى جزء الشبكة الفرعية (SubnetID).",
                    "البنية الجديدة: NetID + SubnetID + HostID.",
                    "القناع يصبح أطول (أكثر واحدات)."
                ]
            },
            {
                h: "فوائد Subnetting",
                bullets: [
                    "تقسيم منطقي حسب الأقسام أو المباني.",
                    "تقليل حركة البث (Broadcast Traffic).",
                    "أمان أعلى — عزل الشبكات عن بعضها.",
                    "إدارة أسهل للشبكة."
                ]
            }
        ],
        keywords: ["Subnetting", "شبكات جزئية", "SubnetID", "تقسيم", "استعارة بتات"]
    },

    {
        page: 10,
        title: "العنونة اللاصفية Classless Addressing",
        brief: "الثورة الحقيقية في عنونة الإنترنت.",
        sections: [
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "إلغاء نظام الصفوف (Classes) تمامًا!",
                    "لا أحجام ثابتة — مرونة كاملة.",
                    "التوزيع حسب الحاجة الفعلية فقط.",
                    "القناع يحدد حجم الشبكة، وليس الصف!"
                ]
            },
            {
                h: "التخصيص بالكتل (Blocks)",
                bullets: [
                    "العناوين تُوزع على شكل كتل (Blocks).",
                    "حجم الكتلة يعتمد على احتياج المؤسسة.",
                    "منزل ← 2 عنوان.",
                    "شركة صغيرة ← 64 عنوان.",
                    "ISP ← آلاف العناوين."
                ]
            },
            {
                h: "المزايا",
                bullets: [
                    "استثمار أفضل لفضاء العناوين.",
                    "تقليل الهدر إلى أدنى حد.",
                    "مرونة في التخصيص والتوسع.",
                    "هذا هو النظام المستخدم حاليًا!"
                ]
            }
        ],
        keywords: ["Classless", "CIDR", "Blocks", "مرونة", "لاصفي"]
    },

    {
        page: 11,
        title: "قواعد كتل العناوين",
        brief: "ثلاث قواعد ذهبية لتخصيص العناوين.",
        sections: [
            {
                h: "القاعدة الأولى: التتابع",
                bullets: [
                    "العناوين في الكتلة يجب أن تكون متتابعة.",
                    "لا فجوات بين العناوين.",
                    "مثال: 192.168.1.0 → 192.168.1.15 (16 عنوان متتالي).",
                    "هذا يسهّل التوجيه والإدارة."
                ]
            },
            {
                h: "القاعدة الثانية: قوة العدد 2",
                bullets: [
                    "عدد العناوين في الكتلة = قوة للعدد 2.",
                    "أحجام مقبولة: 2, 4, 8, 16, 32, 64, 128, 256...",
                    "لا يمكن طلب 50 عنوان — نأخذ 64!",
                    "السبب: تبسيط عمليات القناع والتوجيه."
                ]
            },
            {
                h: "القاعدة الثالثة: قابلية القسمة",
                bullets: [
                    "أول عنوان في الكتلة يجب أن يقبل القسمة على حجم الكتلة.",
                    "مثال: كتلة بـ 16 عنوان تبدأ من 192.168.1.0 أو .16 أو .32...",
                    "لا يمكن أن تبدأ من 192.168.1.5!",
                    "هذا يضمن محاذاة صحيحة للقناع."
                ]
            }
        ],
        keywords: ["Block", "قوة 2", "قابلية القسمة", "تتابع", "alignment"]
    },

    {
        page: 12,
        title: "حساب أول وآخر عنوان في الكتلة",
        brief: "كيف نحدد حدود الكتلة؟",
        sections: [
            {
                h: "أول عنوان (Network Address)",
                bullets: [
                    "يُحسب بتصفير جميع بتات المضيف.",
                    "عملية AND بين العنوان والقناع.",
                    "مثال: 192.168.1.100/28 ← أول عنوان = 192.168.1.96",
                    "هذا العنوان يُسمى Network Address — لا يُعطى لأي جهاز!"
                ]
            },
            {
                h: "آخر عنوان (Broadcast Address)",
                bullets: [
                    "يُحسب بجعل جميع بتات المضيف = 1.",
                    "مثال: 192.168.1.100/28 ← آخر عنوان = 192.168.1.111",
                    "هذا العنوان للبث (Broadcast) — لا يُعطى لأي جهاز!",
                    "العناوين القابلة للاستخدام = بينهما."
                ]
            },
            {
                h: "حساب عدد العناوين القابلة للاستخدام",
                bullets: [
                    "عدد العناوين الكلي = 2^(32 - n)",
                    "العناوين القابلة للاستخدام = الكلي - 2",
                    "نطرح: عنوان الشبكة + عنوان البث.",
                    "مثال: /28 ← 16 - 2 = 14 عنوان قابل للاستخدام."
                ]
            }
        ],
        keywords: ["Network Address", "Broadcast Address", "أول عنوان", "آخر عنوان", "قابل للاستخدام"]
    },

    {
        page: 13,
        title: "الهرمية في العنونة",
        brief: "مستويات التقسيم: Prefix و Suffix.",
        sections: [
            {
                h: "هرمية من مستويين (أساسية)",
                bullets: [
                    "Prefix: جزء الشبكة — يحدد الشبكة.",
                    "Suffix: جزء المضيف — يحدد الجهاز.",
                    "القناع يفصل بين الجزأين.",
                    "هذا هو التقسيم الأساسي لأي عنوان IP."
                ]
            },
            {
                h: "هرمية من ثلاث مستويات (مع Subnetting)",
                bullets: [
                    "Network: معرف الشبكة الرئيسية.",
                    "Subnet: معرف الشبكة الفرعية.",
                    "Host: معرف الجهاز.",
                    "هذا يتيح تقسيمًا أدق داخل المؤسسة."
                ]
            },
            {
                h: "فائدة الهرمية",
                bullets: [
                    "تبسيط جداول التوجيه (Routing Tables).",
                    "تجميع العناوين (Aggregation).",
                    "تقليل حجم المعلومات المتبادلة بين الراوترات.",
                    "أساس قابلية التوسع في الإنترنت!"
                ]
            }
        ],
        keywords: ["Prefix", "Suffix", "Hierarchy", "هرمية", "Aggregation"]
    },

    {
        page: 14,
        title: "الجهات المسؤولة عن توزيع العناوين",
        brief: "من يوزع عناوين IP؟",
        sections: [
            {
                h: "ICANN — القمة",
                bullets: [
                    "Internet Corporation for Assigned Names and Numbers.",
                    "الجهة العليا المسؤولة عن توزيع العناوين عالميًا.",
                    "توزع كتلًا ضخمة على المنظمات الإقليمية.",
                    "مقرها: كاليفورنيا، الولايات المتحدة."
                ]
            },
            {
                h: "RIRs — المنظمات الإقليمية",
                bullets: [
                    "Regional Internet Registries.",
                    "ARIN: أمريكا الشمالية.",
                    "RIPE NCC: أوروبا والشرق الأوسط.",
                    "APNIC: آسيا والمحيط الهادئ.",
                    "AFRINIC: أفريقيا. LACNIC: أمريكا اللاتينية."
                ]
            },
            {
                h: "ISPs — مزودو الخدمة",
                bullets: [
                    "يحصلون على كتل من RIRs.",
                    "يوزعون على المؤسسات والأفراد.",
                    "يديرون العناوين في نطاقهم.",
                    "المستخدم النهائي يحصل على عنوان من ISP."
                ]
            }
        ],
        keywords: ["ICANN", "RIR", "ARIN", "RIPE", "ISP", "توزيع"]
    },

    {
        page: 15,
        title: "العناوين الخاصة Private Addresses",
        brief: "عناوين للاستخدام الداخلي فقط.",
        sections: [
            {
                h: "ما هي العناوين الخاصة؟",
                bullets: [
                    "عناوين محجوزة للشبكات الداخلية.",
                    "غير معترف بها على الإنترنت العام!",
                    "يمكن استخدامها بحرية داخل أي مؤسسة.",
                    "تُستخدم مع NAT للوصول للإنترنت."
                ]
            },
            {
                h: "النطاقات المحجوزة",
                bullets: [
                    "Class A: 10.0.0.0/8 ← 16 مليون عنوان!",
                    "Class B: 172.16.0.0/12 ← مليون عنوان.",
                    "Class C: 192.168.0.0/16 ← 65 ألف عنوان.",
                    "هذه النطاقات الأكثر شيوعًا في الشبكات المنزلية."
                ]
            },
            {
                h: "لماذا نستخدمها؟",
                bullets: [
                    "توفير العناوين العامة (نادرة ومكلفة).",
                    "أمان أعلى — العناوين الداخلية مخفية.",
                    "حرية التصميم الداخلي بدون تنسيق خارجي.",
                    "NAT يترجم بين الخاص والعام."
                ]
            }
        ],
        keywords: ["Private", "10.0.0.0", "172.16.0.0", "192.168.0.0", "NAT", "خاص"]
    },

    {
        page: 16,
        title: "عنوان Loopback",
        brief: "العنوان الذي لا يغادر الجهاز أبدًا!",
        sections: [
            {
                h: "ما هو Loopback؟",
                bullets: [
                    "النطاق المحجوز: 127.0.0.0/8",
                    "أشهر عنوان: 127.0.0.1 (localhost).",
                    "الحزم المرسلة لهذا العنوان لا تخرج من الجهاز!",
                    "تعود مباشرة للنظام المُرسل."
                ]
            },
            {
                h: "استخداماته",
                bullets: [
                    "اختبار بروتوكول TCP/IP على الجهاز.",
                    "تشغيل خدمات محلية (web server, database).",
                    "تطوير واختبار التطبيقات.",
                    "الأمر: ping 127.0.0.1 للتحقق من عمل الشبكة."
                ]
            },
            {
                h: "ملاحظات مهمة",
                bullets: [
                    "كل الـ 16 مليون عنوان في 127.0.0.0/8 محجوزة!",
                    "لا يُمكن استخدامها لأي غرض آخر.",
                    "اسم localhost يُترجم إلى 127.0.0.1",
                    "موجود في كل نظام تشغيل."
                ]
            }
        ],
        keywords: ["Loopback", "127.0.0.1", "localhost", "اختبار", "محلي"]
    },

    {
        page: 17,
        title: "عناوين البث Broadcast Addresses",
        brief: "إرسال لجميع الأجهزة في الشبكة.",
        sections: [
            {
                h: "Limited Broadcast",
                bullets: [
                    "العنوان: 255.255.255.255",
                    "يصل لجميع الأجهزة في الشبكة المحلية فقط.",
                    "لا يمر عبر الراوتر إلى شبكات أخرى!",
                    "مستخدم في DHCP Discovery."
                ]
            },
            {
                h: "Directed Broadcast",
                bullets: [
                    "آخر عنوان في أي شبكة.",
                    "مثال: 192.168.1.255 لشبكة 192.168.1.0/24",
                    "يصل لجميع الأجهزة في تلك الشبكة المحددة.",
                    "يمكن أن يمر عبر الراوتر (إذا سُمح)."
                ]
            },
            {
                h: "ملاحظات أمنية",
                bullets: [
                    "Directed Broadcast يُستخدم في هجمات Smurf!",
                    "معظم الراوترات تمنعه افتراضيًا.",
                    "يجب الحذر من تفعيله.",
                    "البث يستهلك موارد جميع الأجهزة!"
                ]
            }
        ],
        keywords: ["Broadcast", "255.255.255.255", "Limited", "Directed", "بث"]
    },

    {
        page: 18,
        title: "عناوين Multicast",
        brief: "إرسال لمجموعة محددة من الأجهزة.",
        sections: [
            {
                h: "ما هو Multicast؟",
                bullets: [
                    "إرسال لمجموعة مشتركين محددة.",
                    "ليس لكل الأجهزة (Broadcast) ولا لجهاز واحد (Unicast).",
                    "النطاق: 224.0.0.0 إلى 239.255.255.255 (Class D).",
                    "الأجهزة المهتمة تنضم للمجموعة."
                ]
            },
            {
                h: "استخداماته",
                bullets: [
                    "بث الفيديو والصوت (IPTV, Video Conferencing).",
                    "تحديثات البرامج لمجموعة أجهزة.",
                    "بروتوكولات التوجيه (OSPF, RIP).",
                    "توفير كبير في عرض النطاق!"
                ]
            },
            {
                h: "عناوين مشهورة",
                bullets: [
                    "224.0.0.1: جميع المضيفين في الشبكة المحلية.",
                    "224.0.0.2: جميع الراوترات في الشبكة المحلية.",
                    "224.0.0.5: OSPF Routers.",
                    "224.0.0.9: RIPv2 Routers."
                ]
            }
        ],
        keywords: ["Multicast", "224.0.0.0", "Class D", "مجموعة", "IGMP"]
    },

    {
        page: 19,
        title: "حساب Subnetting — الخطوات",
        brief: "كيف نقسم شبكة إلى شبكات فرعية؟",
        sections: [
            {
                h: "الخطوة 1: تحديد المتطلبات",
                bullets: [
                    "كم شبكة فرعية نحتاج؟",
                    "كم مضيف في كل شبكة فرعية؟",
                    "نختار الأكبر: حسب الشبكات أو حسب المضيفين.",
                    "نحسب عدد البتات المطلوبة."
                ]
            },
            {
                h: "الخطوة 2: حساب القناع الجديد",
                bullets: [
                    "بتات الشبكات الفرعية = ⌈log₂(عدد الشبكات)⌉",
                    "القناع الجديد = القناع الأصلي + بتات الشبكات الفرعية.",
                    "مثال: /24 نحتاج 4 شبكات ← /26 (أضفنا 2 بت).",
                    "التحقق: 2² = 4 شبكات ✓"
                ]
            },
            {
                h: "الخطوة 3: حساب النطاقات",
                bullets: [
                    "حجم كل شبكة فرعية = 2^(32 - القناع الجديد).",
                    "مثال: /26 ← كل شبكة = 64 عنوان.",
                    "الشبكات: .0-.63، .64-.127، .128-.191، .192-.255",
                    "كل شبكة لها Network Address و Broadcast Address."
                ]
            }
        ],
        keywords: ["Subnetting", "حساب", "قناع جديد", "نطاقات", "خطوات"]
    },

    {
        page: 20,
        title: "مثال عملي على Subnetting",
        brief: "تقسيم شبكة 192.168.10.0/24 إلى 4 شبكات.",
        sections: [
            {
                h: "المعطيات",
                bullets: [
                    "الشبكة الأصلية: 192.168.10.0/24",
                    "المطلوب: 4 شبكات فرعية متساوية.",
                    "بتات مطلوبة: ⌈log₂(4)⌉ = 2 بت.",
                    "القناع الجديد: /24 + 2 = /26"
                ]
            },
            {
                h: "الشبكات الناتجة",
                bullets: [
                    "Subnet 1: 192.168.10.0/26 (0-63)",
                    "Subnet 2: 192.168.10.64/26 (64-127)",
                    "Subnet 3: 192.168.10.128/26 (128-191)",
                    "Subnet 4: 192.168.10.192/26 (192-255)"
                ]
            },
            {
                h: "تفاصيل كل شبكة",
                bullets: [
                    "Network Address: أول عنوان (مثل .0، .64)",
                    "Broadcast: آخر عنوان (مثل .63، .127)",
                    "عناوين قابلة للاستخدام: 64 - 2 = 62 عنوان.",
                    "First Usable: .1، .65، .129، .193"
                ]
            }
        ],
        keywords: ["مثال", "192.168.10.0", "/26", "4 شبكات", "عملي"]
    },

    {
        page: 21,
        title: "VLSM — Variable Length Subnet Mask",
        brief: "شبكات فرعية بأحجام مختلفة.",
        sections: [
            {
                h: "المشكلة مع Subnetting التقليدي",
                bullets: [
                    "جميع الشبكات الفرعية بنفس الحجم.",
                    "إذا احتجنا أحجامًا مختلفة ← هدر!",
                    "مثال: قسم بـ 100 جهاز وقسم بـ 10 أجهزة.",
                    "لا يمكن تلبية الاحتياجين بكفاءة!"
                ]
            },
            {
                h: "الحل — VLSM",
                bullets: [
                    "Variable Length Subnet Mask.",
                    "كل شبكة فرعية بقناع مختلف!",
                    "تخصيص حسب الحاجة الفعلية.",
                    "استخدام أفضل للعناوين."
                ]
            },
            {
                h: "كيفية التطبيق",
                bullets: [
                    "نبدأ بأكبر شبكة فرعية مطلوبة.",
                    "نخصص لها القناع المناسب.",
                    "ننتقل للأصغر ونقسم المتبقي.",
                    "نستمر حتى تُلبى جميع الاحتياجات."
                ]
            }
        ],
        keywords: ["VLSM", "Variable Length", "أحجام مختلفة", "مرونة", "كفاءة"]
    },

    {
        page: 22,
        title: "Supernetting — تجميع الشبكات",
        brief: "دمج عدة شبكات في كتلة واحدة.",
        sections: [
            {
                h: "ما هو Supernetting؟",
                bullets: [
                    "عكس Subnetting!",
                    "دمج عدة شبكات متتابعة في كتلة واحدة.",
                    "تقصير القناع بدلًا من إطالته.",
                    "يُسمى أيضًا Route Aggregation أو Summarization."
                ]
            },
            {
                h: "الشروط",
                bullets: [
                    "الشبكات يجب أن تكون متتابعة.",
                    "عددها قوة للعدد 2 (2, 4, 8...).",
                    "أول شبكة قابلة للقسمة على العدد الكلي.",
                    "القناع الناتج = القناع الأصلي - log₂(العدد)."
                ]
            },
            {
                h: "الفائدة",
                bullets: [
                    "تبسيط جداول التوجيه.",
                    "تقليل عدد الإدخالات في الراوترات.",
                    "تحسين أداء التوجيه.",
                    "مستخدم بكثافة في الإنترنت."
                ]
            }
        ],
        keywords: ["Supernetting", "Aggregation", "Summarization", "تجميع", "تقصير القناع"]
    },

    {
        page: 23,
        title: "العناوين الخاصة الأخرى",
        brief: "عناوين محجوزة لأغراض خاصة.",
        sections: [
            {
                h: "Link-Local Addresses",
                bullets: [
                    "النطاق: 169.254.0.0/16",
                    "تُخصص تلقائيًا إذا فشل DHCP!",
                    "APIPA في Windows.",
                    "صالحة للاتصال المحلي فقط — لا توجيه."
                ]
            },
            {
                h: "Documentation Addresses",
                bullets: [
                    "192.0.2.0/24 (TEST-NET-1)",
                    "198.51.100.0/24 (TEST-NET-2)",
                    "203.0.113.0/24 (TEST-NET-3)",
                    "للاستخدام في الأمثلة والوثائق فقط!"
                ]
            },
            {
                h: "عناوين أخرى محجوزة",
                bullets: [
                    "0.0.0.0/8: هذه الشبكة (This Network).",
                    "100.64.0.0/10: Carrier-Grade NAT.",
                    "192.0.0.0/24: IETF Protocol Assignments.",
                    "240.0.0.0/4: للاستخدام المستقبلي (Class E)."
                ]
            }
        ],
        keywords: ["Link-Local", "169.254", "APIPA", "TEST-NET", "محجوزة"]
    },

    {
        page: 24,
        title: "NAT — ترجمة العناوين",
        brief: "كيف تتصل الشبكات الخاصة بالإنترنت؟",
        sections: [
            {
                h: "ما هو NAT؟",
                bullets: [
                    "Network Address Translation — ترجمة عناوين الشبكة.",
                    "يحول العناوين الخاصة إلى عناوين عامة.",
                    "يعمل في الراوتر أو الجدار الناري.",
                    "يسمح لعدة أجهزة بمشاركة عنوان عام واحد!"
                ]
            },
            {
                h: "أنواع NAT",
                bullets: [
                    "Static NAT: عنوان خاص ↔ عنوان عام (1:1).",
                    "Dynamic NAT: مجموعة عناوين عامة مشتركة.",
                    "PAT/NAT Overload: عنوان عام واحد + منافذ مختلفة.",
                    "PAT هو الأكثر شيوعًا في المنازل!"
                ]
            },
            {
                h: "فوائد NAT",
                bullets: [
                    "توفير العناوين العامة.",
                    "أمان — إخفاء البنية الداخلية.",
                    "مرونة في تغيير العناوين الداخلية.",
                    "أساسي لعمل الشبكات المنزلية!"
                ]
            }
        ],
        keywords: ["NAT", "PAT", "ترجمة", "عام", "خاص", "Overload"]
    },

    {
        page: 25,
        title: "الخلاصة — IPv4 Addressing",
        brief: "ملخص شامل لعنونة IPv4.",
        sections: [
            {
                h: "المفاهيم الأساسية",
                bullets: [
                    "IPv4: 32 بت = 4.3 مليار عنوان.",
                    "العنوان = NetID + HostID.",
                    "Subnet Mask يحدد التقسيم.",
                    "CIDR: الطريقة الحديثة للعنونة."
                ]
            },
            {
                h: "أنواع العناوين",
                bullets: [
                    "Public: للإنترنت العام.",
                    "Private: للشبكات الداخلية (10.x, 172.16.x, 192.168.x).",
                    "Loopback: 127.x.x.x — للاختبار المحلي.",
                    "Broadcast: للإرسال للجميع."
                ]
            },
            {
                h: "مهارات أساسية",
                bullets: [
                    "تحديد الصف والقناع الافتراضي.",
                    "حساب Subnetting و VLSM.",
                    "إيجاد Network Address و Broadcast.",
                    "فهم NAT والعناوين الخاصة."
                ]
            },
            {
                h: "التطبيقات",
                bullets: [
                    "تصميم الشبكات.",
                    "إعداد DHCP وتوزيع العناوين.",
                    "حل مشاكل الاتصال.",
                    "التحضير لـ IPv6!"
                ]
            }
        ],
        keywords: ["خلاصة", "Summary", "IPv4", "Subnetting", "NAT", "مراجعة"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
    done: "net_ch19_done_pages",
    last: "net_ch19_last_page"
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
    if (done) {
        el.markBtn.style.display = 'none';
        let checkEl = document.getElementById('markDoneCheck');
        if (!checkEl) {
            checkEl = document.createElement('div');
            checkEl.id = 'markDoneCheck';
            checkEl.className = 'mark-done-check';
            checkEl.innerHTML = '<span class="check-icon">✓</span><span>تم الفهم</span>';
            checkEl.style.cursor = 'pointer';
            checkEl.addEventListener('click', toggleDone);
            el.markBtn.parentNode.insertBefore(checkEl, el.markBtn);
        }
        checkEl.style.display = 'flex';
    } else {
        el.markBtn.style.display = '';
        el.markBtn.textContent = "✔︎ علّمها 'مفهومة'";
        const checkEl = document.getElementById('markDoneCheck');
        if (checkEl) checkEl.style.display = 'none';
    }
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

