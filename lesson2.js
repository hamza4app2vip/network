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
                    "الوحدة الثانية تتناول نموذج OSI Reference Model (النموذج المرجعي للشبكات).",
                    "هذا النموذج هو الأساس لفهم كيفية عمل الشبكات وتواصل الأجهزة.",
                    "OSI = Open Systems Interconnection (الربط بين الأنظمة المفتوحة).",
                    "تم تطويره من قِبل ISO (المنظمة الدولية للمعايير) في الثمانينات."
                ]
            },
            {
                h: "لماذا نحتاج نموذج OSI؟",
                bullets: [
                    "توحيد التواصل بين الأجهزة من شركات مختلفة.",
                    "تقسيم المشكلة المعقدة (الشبكات) إلى أجزاء أصغر يسهل فهمها.",
                    "تسهيل التطوير والصيانة — يمكن تغيير طبقة دون التأثير على البقية.",
                    "توفير لغة مشتركة للمهندسين والمطورين حول العالم."
                ]
            }
        ],
        keywords: ["OSI", "Reference Model", "النموذج المرجعي", "ISO", "Open Systems Interconnection"]
    },

    {
        page: 2,
        title: "هيكلية الشبكات — مفهوم الطبقات (Layers)",
        brief: "لماذا نقسم الشبكة لطبقات؟ وكيف تتواصل الطبقات؟",
        sections: [
            {
                h: "تبسيط التصميم بالطبقات — Layered Architecture",
                bullets: [
                    "لتبسيط تصميم الشبكات، يتم تقسيمها إلى طبقات متخصصة.",
                    "كل طبقة لها وظيفة محددة ومستقلة.",
                    "كل طبقة تقدّم خدمة (Service) للطبقة الأعلى منها.",
                    "كل طبقة تستخدم خدمات الطبقة الأسفل منها.",
                    "هذا التصميم يُسمى Layered Architecture."
                ]
            },
            {
                h: "التواصل بين الطبقات",
                bullets: [
                    "Interface (الواجهة): نقطة التواصل بين طبقتين متجاورتين.",
                    "Protocol (البروتوكول): قواعد تواصل بين طبقتين متناظرتين في جهازين مختلفين.",
                    "N-Protocol: بروتوكول الطبقة رقم N (مثل: 3-Protocol لطبقة الشبكة).",
                    "Peer-to-Peer Communication: تواصل منطقي بين طبقات متناظرة."
                ]
            },
            {
                h: "مثال توضيحي — البريد العادي",
                bullets: [
                    "تخيل إرسال رسالة بالبريد:",
                    "   - أنت تكتب الرسالة (طبقة التطبيق).",
                    "   - تضعها في ظرف وتكتب العنوان (طبقة العرض/الجلسة).",
                    "   - مكتب البريد يوزعها جغرافيًا (طبقة الشبكة).",
                    "   - ساعي البريد يوصلها للمنزل (طبقة وصلة البيانات/الفيزيائية).",
                    "كل مرحلة تؤدي جزءًا من المهمة بشكل مستقل!"
                ]
            }
        ],
        keywords: ["Layers", "N-Protocol", "Interface", "Peer-to-Peer", "Layered Architecture", "طبقات"]
    },

    {
        page: 3,
        title: "ما هو نموذج OSI؟ ولماذا وُضع؟",
        brief: "منظمة ISO وأهداف النموذج + الطبقات السبعة.",
        sections: [
            {
                h: "خلفية النموذج — لماذا OSI؟",
                bullets: [
                    "في الماضي، كل شركة لها نظام شبكات خاص بها.",
                    "لم تستطع أجهزة IBM التواصل مع أجهزة Apple مثلاً!",
                    "ISO قدّمت نموذج OSI لربط أنظمة مختلفة بدون تعديل عتادها.",
                    "ملاحظة مهمة: OSI ليس بروتوكولًا — هو نموذج نظري لفهم الشبكات."
                ]
            },
            {
                h: "هيكل النموذج — 7 طبقات",
                bullets: [
                    "يتكون من 7 طبقات، من الأسفل للأعلى:",
                    "1. Physical Layer — الطبقة الفيزيائية",
                    "2. Data Link Layer — طبقة وصلة البيانات",
                    "3. Network Layer — طبقة الشبكة",
                    "4. Transport Layer — طبقة النقل",
                    "5. Session Layer — طبقة الجلسة",
                    "6. Presentation Layer — طبقة العرض",
                    "7. Application Layer — طبقة التطبيقات"
                ]
            },
            {
                h: "مبادئ تصميم الطبقات",
                bullets: [
                    "كل طبقة لها وظيفة واضحة ومحددة.",
                    "الحدود بين الطبقات تقلّل تبادل البيانات غير الضروري.",
                    "عدد الطبقات كافٍ لتجنب خلط وظائف مختلفة في طبقة واحدة.",
                    "عدد الطبقات ليس كثيرًا لتجنب التعقيد الزائد."
                ]
            }
        ],
        keywords: ["ISO", "7 Layers", "OSI Model", "سبع طبقات", "Physical", "Data Link", "Network", "Transport"]
    },

    {
        page: 4,
        title: "مسار الرسالة (Encapsulation) + الطبقة الفيزيائية",
        brief: "كيف تنتقل البيانات بين الطبقات؟ وبداية Physical Layer.",
        sections: [
            {
                h: "التغليف (Encapsulation) — مفهوم أساسي",
                bullets: [
                    "عندما ترسل بيانات، تمر عبر كل الطبقات من الأعلى للأسفل.",
                    "كل طبقة تضيف معلومات خاصة بها (Header أو Trailer).",
                    "هذه العملية تُسمى Encapsulation (التغليف).",
                    "مثال: رسالة ← مغلف (ظرف) ← طرد ← شاحنة ← سفينة.",
                    "في المستقبل: العكس يحدث — كل طبقة تفك التغليف الخاص بها."
                ]
            },
            {
                h: "الاتصال الحقيقي vs المنطقي",
                bullets: [
                    "الاتصال الفعلي: يحدث فقط في الطبقة الفيزيائية (bits ← إشارات).",
                    "الاتصال المنطقي: الطبقات العليا 'تظن' أنها تتواصل مباشرة.",
                    "في الحقيقة: البيانات تنزل للفيزيائية، تنتقل، ثم تصعد للطبقات العليا.",
                    "Interface: نقطة الاتصال بين طبقتين — تسمح بتغيير طبقة دون التأثير على المجاورة."
                ]
            },
            {
                h: "Physical Layer — الطبقة الفيزيائية (الطبقة 1)",
                bullets: [
                    "أدنى طبقة في النموذج — تتعامل مع الإشارات الفعلية.",
                    "تحوّل Bits (0 و 1) إلى إشارات كهربائية/ضوئية/راديوية.",
                    "تهتم بالمواصفات الفيزيائية: الفولت، التردد، نوع الكابل.",
                    "لا تفهم محتوى البيانات — فقط تنقل الإشارات."
                ]
            }
        ],
        keywords: ["Encapsulation", "Interface", "Physical Layer", "bits", "تغليف", "Header", "Trailer"]
    },

    {
        page: 5,
        title: "تفاصيل Physical + بداية Data Link",
        brief: "مواصفات الطبقة الفيزيائية + مقدمة طبقة وصلة البيانات.",
        sections: [
            {
                h: "Physical Layer — المواصفات الفيزيائية",
                bullets: [
                    "نوع الموصلات (Connectors): RJ-45، Fiber Optic، BNC...",
                    "ترميز البتات: كيف تُمثَّل 0 و 1 كهربائيًا/ضوئيًا.",
                    "المزامنة (Synchronization): ضبط التوقيت بين المرسل والمستقبل.",
                    "معدل البت (Bit Rate): سرعة نقل البتات (مثل 100 Mbps).",
                    "Transmission Mode: Simplex, Half-Duplex, Full-Duplex.",
                    "Line Configuration: Point-to-Point أو Multipoint."
                ]
            },
            {
                h: "ملاحظة مهمة عن الطبقة الفيزيائية",
                bullets: [
                    "لا تضيف أي Header أو Trailer للبيانات!",
                    "تستقبل Frame من Data Link وتحوّله لإشارات فقط.",
                    "لا تفهم العناوين أو الأخطاء — مجرد ناقل إشارات.",
                    "أمثلة: كابلات Ethernet، موجات Wi-Fi، كابلات الألياف الضوئية."
                ]
            },
            {
                h: "Data Link Layer — مقدمة (الطبقة 2)",
                bullets: [
                    "تقع فوق الطبقة الفيزيائية مباشرة.",
                    "هدفها: تقديم نقل 'شبه خالٍ من الأخطاء' لطبقة الشبكة.",
                    "تخفي مشاكل الطبقة الفيزيائية عن الطبقات العليا.",
                    "أهم وظائفها:",
                    "   - Framing: تحويل البتات إلى وحدات منظمة (Frames).",
                    "   - Physical Addressing: العنونة الفيزيائية (MAC Address).",
                    "   - Flow Control: منع المرسل السريع من إغراق المستقبل البطيء."
                ]
            }
        ],
        keywords: ["Connectors", "Bit Rate", "Synchronization", "Framing", "MAC Address", "Flow Control"]
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
    },

    {
        page: 11,
        title: "بروتوكولات كل طبقة — Layer Protocols",
        brief: "أهم البروتوكولات المستخدمة في كل طبقة من طبقات OSI",
        sections: [
            {
                h: "Layer 1 - Physical Protocols",
                bullets: [
                    "RS-232: واجهة تسلسلية للاتصال (Serial Communication).",
                    "USB: الناقل التسلسلي العام (Universal Serial Bus).",
                    "Ethernet Physical: معايير الكابلات (10BASE-T, 100BASE-TX).",
                    "DSL: خط المشترك الرقمي (Digital Subscriber Line).",
                    "Bluetooth PHY: الطبقة الفيزيائية للبلوتوث."
                ]
            },
            {
                h: "Layer 2 - Data-Link Protocols",
                bullets: [
                    "Ethernet (IEEE 802.3): الأكثر شيوعاً في الشبكات المحلية.",
                    "WiFi (IEEE 802.11): الشبكات اللاسلكية.",
                    "PPP (Point-to-Point Protocol): للاتصالات المباشرة.",
                    "HDLC: بروتوكول التحكم في الربط عالي المستوى.",
                    "ARP: يربط IP Address بـ MAC Address."
                ]
            },
            {
                h: "Layer 3 - Network Protocols",
                bullets: [
                    "IP (Internet Protocol): أساس التوجيه في الإنترنت.",
                    "ICMP: رسائل التحكم والأخطاء (مثل Ping).",
                    "OSPF/BGP: بروتوكولات التوجيه (Routing Protocols).",
                    "IPsec: تشفير على مستوى الشبكة."
                ]
            },
            {
                h: "Layer 4-7 Protocols",
                bullets: [
                    "Layer 4: TCP (موثوق) و UDP (سريع).",
                    "Layer 5: NetBIOS, RPC (Remote Procedure Call).",
                    "Layer 6: SSL/TLS, JPEG, MPEG (ترميز وتشفير).",
                    "Layer 7: HTTP, FTP, SMTP, DNS, DHCP."
                ]
            }
        ],
        keywords: ["RS-232", "Ethernet", "WiFi", "IP", "TCP", "UDP", "HTTP", "ARP", "ICMP"]
    },

    {
        page: 12,
        title: "الفرق بين Connection-Oriented و Connectionless",
        brief: "متى نحتاج اتصال موثوق ومتى نحتاج السرعة؟",
        sections: [
            {
                h: "Connection-Oriented (موجه الاتصال)",
                bullets: [
                    "يُنشئ اتصالاً قبل إرسال البيانات (Handshaking).",
                    "يضمن: ترتيب الوصول، عدم الفقدان، كشف الأخطاء.",
                    "أبطأ لكنه موثوق.",
                    "مثال: TCP — المكالمة الهاتفية (تتصل أولاً ثم تتحدث).",
                    "استخدامات: نقل الملفات، البريد، صفحات الويب."
                ]
            },
            {
                h: "Connectionless (بدون اتصال)",
                bullets: [
                    "يُرسل البيانات مباشرة بدون إنشاء اتصال مسبق.",
                    "لا يضمن الوصول أو الترتيب.",
                    "أسرع لكنه أقل موثوقية.",
                    "مثال: UDP — البريد العادي (ترسل بدون تأكيد).",
                    "استخدامات: البث المباشر، الألعاب، DNS."
                ]
            },
            {
                h: "Three-Way Handshake (TCP)",
                bullets: [
                    "طريقة TCP لإنشاء اتصال موثوق:",
                    "1. SYN: العميل يطلب الاتصال.",
                    "2. SYN-ACK: الخادم يوافق ويؤكد.",
                    "3. ACK: العميل يؤكد الموافقة.",
                    "الآن الاتصال جاهز لنقل البيانات!"
                ]
            }
        ],
        keywords: ["Connection-Oriented", "Connectionless", "TCP", "UDP", "Handshake", "SYN", "ACK", "Reliable"]
    },

    {
        page: 13,
        title: "Multiplexing و Demultiplexing",
        brief: "كيف تتعامل طبقة النقل مع عدة تطبيقات معاً؟",
        sections: [
            {
                h: "ما هو Multiplexing؟",
                bullets: [
                    "Multiplexing: دمج بيانات من عدة تطبيقات في تيار واحد.",
                    "يحدث عند المرسل — في طبقة النقل.",
                    "كل تطبيق له Port Number فريد.",
                    "البيانات تُجمع وتُرسل عبر اتصال شبكة واحد."
                ]
            },
            {
                h: "ما هو Demultiplexing؟",
                bullets: [
                    "Demultiplexing: فصل البيانات وتوزيعها على التطبيقات الصحيحة.",
                    "يحدث عند المستقبل — في طبقة النقل.",
                    "تقرأ Port Number الوجهة من الـ Segment.",
                    "توجّه البيانات للتطبيق المناسب."
                ]
            },
            {
                h: "مثال عملي",
                bullets: [
                    "جهازك يشغّل متصفح (Port 80) + Zoom (Port 8801) + تيليجرام.",
                    "كل تطبيق يُرسل ويستقبل بيانات.",
                    "Multiplexing يجمعها للإرسال.",
                    "عند الاستقبال، Demultiplexing يوزعها للتطبيق الصحيح."
                ]
            }
        ],
        keywords: ["Multiplexing", "Demultiplexing", "Port Number", "Transport Layer", "Socket"]
    },

    {
        page: 14,
        title: "Peer-to-Peer Communication",
        brief: "التواصل المنطقي بين الطبقات المتناظرة",
        sections: [
            {
                h: "ما معنى Peer-to-Peer في OSI؟",
                bullets: [
                    "كل طبقة في جهاز تتواصل 'منطقياً' مع نفس الطبقة في الجهاز الآخر.",
                    "التواصل الفعلي يمر عبر الطبقات السفلى.",
                    "لكن كل طبقة 'تتخيل' أنها تتحدث مباشرة لنظيرتها.",
                    "هذا يُسهّل التصميم — كل طبقة مستقلة!"
                ]
            },
            {
                h: "مثال: التواصل عبر الطبقات",
                bullets: [
                    "Application A تتواصل 'منطقياً' مع Application B.",
                    "البيانات تنزل: App → Transport → Network → Data-Link → Physical.",
                    "تنتقل فيزيائياً عبر الوسط الناقل.",
                    "تصعد في الجهاز الآخر: Physical → Data-Link → Network → Transport → App.",
                    "كل طبقة تقرأ Header الخاص بها فقط!"
                ]
            },
            {
                h: "Service Access Point (SAP)",
                bullets: [
                    "SAP: نقطة الوصول بين طبقتين متجاورتين.",
                    "مثل 'الباب' بين الطبقتين.",
                    "الطبقة العليا تطلب خدمة من الطبقة السفلى عبر SAP.",
                    "مثال: TSAP (Transport SAP), NSAP (Network SAP)."
                ]
            }
        ],
        keywords: ["Peer-to-Peer", "SAP", "Service Access Point", "Logical Communication", "Header"]
    },

    {
        page: 15,
        title: "Flow Control و Error Control",
        brief: "كيف تضمن الشبكة عدم إغراق المستقبل وسلامة البيانات؟",
        sections: [
            {
                h: "Flow Control (التحكم بالتدفق)",
                bullets: [
                    "المشكلة: المرسل قد يكون أسرع من المستقبل!",
                    "الحل: آلية Flow Control تنظم سرعة الإرسال.",
                    "Stop-and-Wait: انتظر تأكيد قبل الإرسال التالي.",
                    "Sliding Window: أرسل عدة إطارات ثم انتظر التأكيدات.",
                    "يُستخدم في Data-Link (إطارات) و Transport (مقاطع)."
                ]
            },
            {
                h: "Error Control (التحكم بالأخطاء)",
                bullets: [
                    "الهدف: اكتشاف الأخطاء وتصحيحها أو طلب إعادة الإرسال.",
                    "Error Detection: كشف الخطأ (CRC, Checksum).",
                    "ARQ (Automatic Repeat Request): طلب إعادة الإرسال تلقائياً.",
                    "ACK: تأكيد استلام صحيح.",
                    "NAK: تأكيد سلبي — هناك خطأ أعد الإرسال!"
                ]
            },
            {
                h: "Congestion Control (التحكم بالازدحام)",
                bullets: [
                    "المشكلة: الشبكة مزدحمة — كثير من البيانات!",
                    "الأعراض: تأخير عالي، فقدان حزم.",
                    "الحل: تقليل معدل الإرسال عند اكتشاف الازدحام.",
                    "TCP يستخدم: Slow Start, Congestion Avoidance.",
                    "الهدف: توازن بين السرعة وعدم إغراق الشبكة."
                ]
            }
        ],
        keywords: ["Flow Control", "Error Control", "Congestion Control", "ARQ", "ACK", "NAK", "Sliding Window"]
    },

    {
        page: 16,
        title: "ملخص OSI — القواعد الذهبية",
        brief: "أهم النقاط للحفظ والفهم في نموذج OSI",
        sections: [
            {
                h: "الطبقات السبعة — للحفظ السريع",
                bullets: [
                    "من الأسفل للأعلى: 'Please Do Not Throw Sausage Pizza Away'",
                    "Physical, Data-Link, Network, Transport, Session, Presentation, Application.",
                    "Layer 1-3: Media Layers (الوسط والنقل).",
                    "Layer 4-7: Host Layers (التطبيقات والخدمات)."
                ]
            },
            {
                h: "PDU لكل طبقة",
                bullets: [
                    "Physical: Bits (بتات).",
                    "Data-Link: Frame (إطار).",
                    "Network: Packet (حزمة).",
                    "Transport: Segment (مقطع).",
                    "Session/Presentation/Application: Data (بيانات)."
                ]
            },
            {
                h: "وظائف رئيسية لكل طبقة",
                bullets: [
                    "1. Physical: تحويل bits ↔ signals.",
                    "2. Data-Link: Framing, MAC, Error Detection.",
                    "3. Network: Routing, Logical Addressing (IP).",
                    "4. Transport: Segmentation, Flow Control, Reliability.",
                    "5. Session: Dialog Control, Synchronization.",
                    "6. Presentation: Encoding, Encryption, Compression.",
                    "7. Application: User Interface, Network Services."
                ]
            },
            {
                h: "أجهزة كل طبقة",
                bullets: [
                    "Layer 1: Hub, Repeater, Cables.",
                    "Layer 2: Switch, Bridge (MAC Address).",
                    "Layer 3: Router (IP Address).",
                    "Layer 4+: الأجهزة تعمل على مستوى البرمجيات."
                ]
            }
        ],
        keywords: ["Summary", "PDU", "Layers", "Devices", "OSI", "Functions", "Mnemonic"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
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

// Cross-tab theme synchronization
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
