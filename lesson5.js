/* ====== Data (ملخص صفحة بصفحة — Chapter 9: Data-Link Layer) ====== */
const PAGES = [
    {
        page: 1,
        title: "Introduction to Data-Link Layer",
        brief: "دور طبقة ربط البيانات داخل الإنترنت وكيف تتواصل العقد.",
        sections: [
            {
                h: "الفكرة الجوهرية",
                bullets: [
                    "الإنترنت ليس شبكة واحدة، بل مجموعة شبكات مربوطة ببعضها بواسطة Routers و Switches.",
                    "طبقة Data-Link تربط بين الأجهزة المتجاورة مباشرة (Node-to-Node).",
                    "كل Router أو Switch يمثل 'قفزة' (Hop) في مسار البيانات."
                ]
            },
            {
                h: "مسار الـ Packet من Alice إلى Bob",
                bullets: [
                    "طبقة Data-Link في Alice تتواصل مع Data-Link في الراوتر الأول.",
                    "ثم الراوتر الأول يتواصل مع الراوتر التالي... وهكذا.",
                    "حتى تصل البيانات أخيرًا إلى Bob."
                ]
            },
            {
                h: "نقطة مهمة جدًا — عدد طبقات Data-Link",
                bullets: [
                    "عند المصدر (Alice) والوجهة (Bob): توجد طبقة Data-Link واحدة فقط.",
                    "عند كل Router: توجد طبقتان Data-Link!",
                    "السبب: الراوتر يستقبل من شبكة (Interface 1) ويرسل إلى شبكة أخرى (Interface 2).",
                    "لذلك كل Router له واجهتان على الأقل، وكل واجهة لها Data-Link Layer خاص بها."
                ]
            }
        ],
        keywords: ["Data-Link Layer", "Router", "Node-to-Node", "Hop", "Internet", "طبقة ربط البيانات"]
    },

    {
        page: 2,
        title: "Nodes and Links — العقد والوصلات",
        brief: "تعريف المصطلحات الأساسية: Node و Link.",
        sections: [
            {
                h: "Node (العقدة)",
                bullets: [
                    "أي جهاز مشارك في عملية الاتصال.",
                    "قد يكون Host (حاسوب، هاتف، سيرفر).",
                    "أو Router (موجّه يربط بين شبكتين أو أكثر).",
                    "أو Switch (مبدّل ضمن الشبكة المحلية)."
                ]
            },
            {
                h: "Link (الوصلة)",
                bullets: [
                    "الشبكة أو الوسط الناقل الذي يربط بين عقدتين متجاورتين.",
                    "قد يكون سلكي (Ethernet Cable) أو لاسلكي (Wi-Fi).",
                    "كل Link له خصائصه الفيزيائية ومعدل نقل مختلف."
                ]
            },
            {
                h: "مفهوم أساسي — Node-to-Node Communication",
                bullets: [
                    "الاتصال في Data-Link Layer هو Node-to-Node وليس End-to-End.",
                    "أي: كل قفزة (Hop) بين عقدتين يتم التعامل معها بشكل مستقل تمامًا.",
                    "End-to-End Communication مسؤولية Transport Layer.",
                    "هذا يعني أن كل Link قد يستخدم بروتوكول مختلف!"
                ]
            }
        ],
        keywords: ["Node", "Link", "Host", "Router", "Switch", "Hop", "عقدة", "وصلة"]
    },

    {
        page: 3,
        title: "Services + Encapsulation — الخدمات والتغليف",
        brief: "الخدمات الأساسية لطبقة Data-Link وعملية التغليف.",
        sections: [
            {
                h: "موقع Data-Link Layer في النموذج",
                bullets: [
                    "تقع بين Physical Layer (أسفل) و Network Layer (أعلى).",
                    "تستقبل Datagram من Network Layer.",
                    "تحوّله إلى Frame وترسله عبر Physical Layer."
                ]
            },
            {
                h: "الوظيفة الرئيسية — التغليف (Encapsulation)",
                bullets: [
                    "استلام Datagram (الحزمة) من Network Layer.",
                    "تغليفه داخل Frame — إضافة Header و Trailer.",
                    "إرسال الـ Frame إلى العقدة التالية عبر الوسط الفيزيائي.",
                    "العقدة المستقبلة تقوم بـ Decapsulation (فك التغليف)."
                ]
            },
            {
                h: "لماذا نغلف ونفك التغليف في كل Router؟",
                bullets: [
                    "السبب الأول: كل Link قد يستخدم بروتوكول Data-Link مختلف.",
                    "مثال: الشبكة الأولى Ethernet، والثانية Wi-Fi، والثالثة Fiber.",
                    "السبب الثاني: عناوين Data-Link (MAC) تتغير من وصلة لأخرى.",
                    "عنوان IP يبقى ثابتًا، لكن MAC يتغير في كل Hop!"
                ]
            }
        ],
        keywords: ["Encapsulation", "Decapsulation", "Frame", "Datagram", "تغليف", "فك التغليف"]
    },

    {
        page: 4,
        title: "Framing — التأطير",
        brief: "كيف يتم وضع البيانات داخل Frame وأنواع الإطارات.",
        sections: [
            {
                h: "ما هو Framing؟",
                bullets: [
                    "Framing = وضع الـ Datagram داخل Frame قبل الإرسال.",
                    "الـ Frame هو وحدة البيانات في Data-Link Layer.",
                    "كما أن Packet وحدة Network Layer، و Segment وحدة Transport Layer."
                ]
            },
            {
                h: "مكونات الـ Frame",
                bullets: [
                    "Header: يحتوي عناوين المصدر والوجهة (MAC Addresses) ومعلومات التحكم.",
                    "Data/Payload: الـ Datagram القادم من Network Layer.",
                    "Trailer: غالبًا يحتوي CRC أو FCS لاكتشاف الأخطاء.",
                    "كل Data-Link Protocol له Frame Format مختلف (Ethernet, Wi-Fi, PPP...)."
                ]
            },
            {
                h: "وظيفة العقدة في Framing",
                bullets: [
                    "عند الإرسال (Sender): Encapsulation — إنشاء Frame جديد.",
                    "عند الاستقبال (Receiver): Decapsulation — استخراج Datagram من Frame.",
                    "في الـ Router: Decapsulate من واجهة، ثم Encapsulate لواجهة أخرى.",
                    "هذا يسمّى Store-and-Forward."
                ]
            }
        ],
        keywords: ["Framing", "Frame", "Header", "Trailer", "CRC", "FCS", "إطار", "تأطير"]
    },

    {
        page: 5,
        title: "Flow Control — التحكم في التدفق",
        brief: "مشكلة اختلاف سرعة المرسل والمستقبل وحلولها.",
        sections: [
            {
                h: "المشكلة — اختلاف السرعات",
                bullets: [
                    "إذا كان المرسل (Sender) سريعًا جدًا...",
                    "والمستقبل (Receiver) بطيئًا في المعالجة...",
                    "ستمتلئ الـ Buffers (ذاكرة التخزين المؤقت) لدى المستقبل.",
                    "النتيجة: ضياع Frames وإعادة إرسال غير ضرورية!"
                ]
            },
            {
                h: "الحلول الممكنة",
                bullets: [
                    "الحل السيء: إسقاط الـ Frames الزائدة (Frame Dropping) — غير مفضل!",
                    "الحل الجيد: Flow Control — إرسال Feedback للمرسل.",
                    "المرسل يبطئ أو يتوقف مؤقتًا حتى يستطيع المستقبل اللحاق.",
                    "أمثلة: Stop-and-Wait, Sliding Window Protocols."
                ]
            },
            {
                h: "ملاحظة مهمة — Flow Control في طبقات أخرى",
                bullets: [
                    "Flow Control موجود أيضًا في Transport Layer (TCP).",
                    "لكن في Data-Link Layer يكون Node-to-Node فقط.",
                    "في Transport Layer يكون End-to-End.",
                    "كل طبقة تعالج المشكلة من منظورها الخاص."
                ]
            }
        ],
        keywords: ["Flow Control", "Buffer", "Feedback", "Stop-and-Wait", "Sliding Window", "تحكم التدفق"]
    },

    {
        page: 6,
        title: "Error Control + Congestion Control",
        brief: "اكتشاف الأخطاء وتصحيحها، والتعامل مع الازدحام.",
        sections: [
            {
                h: "Error Control — التحكم في الأخطاء",
                bullets: [
                    "الأخطاء تحدث بسبب التشويش على الإشارات الكهرومغناطيسية.",
                    "أنواع الأخطاء: Single-bit Error, Burst Error.",
                    "الخطوة الأولى: اكتشاف الخطأ (Error Detection) باستخدام CRC أو Checksum.",
                    "الخطوة الثانية: إما تصحيح الخطأ (Forward Error Correction) أو طلب إعادة الإرسال (ARQ)."
                ]
            },
            {
                h: "طرق التصحيح وإعادة الإرسال",
                bullets: [
                    "Forward Error Correction (FEC): المستقبل يصحح الخطأ بنفسه.",
                    "يستخدم Redundant Bits (بتات إضافية) مثل Hamming Code.",
                    "Automatic Repeat Request (ARQ): المستقبل يطلب إعادة الإرسال.",
                    "ARQ أكثر شيوعًا في الشبكات لأنه أبسط وأكثر موثوقية."
                ]
            },
            {
                h: "Congestion Control — التحكم في الازدحام",
                bullets: [
                    "الازدحام يحدث عندما يتراكم عدد كبير من Frames في Router أو Switch.",
                    "يؤدي إلى: تأخير، فقدان Frames، تدهور الأداء.",
                    "في Data-Link Layer: غالبًا لا تُعالج مباشرة هنا.",
                    "تُعالج في Network Layer (Queue Management) أو Transport Layer (TCP Congestion Control)."
                ]
            }
        ],
        keywords: ["Error Control", "CRC", "Checksum", "ARQ", "FEC", "Congestion", "أخطاء", "ازدحام"]
    },

    {
        page: 7,
        title: "Two Categories of Links — تصنيف الروابط",
        brief: "Point-to-Point vs Broadcast Links وتأثير ذلك على البروتوكولات.",
        sections: [
            {
                h: "النوع الأول: Point-to-Point Link",
                bullets: [
                    "الرابط مخصص لجهازين فقط (Dedicated Link).",
                    "كل سعة الرابط (Bandwidth) متاحة لهما فقط.",
                    "لا يوجد تنافس على الوسط — لا نحتاج MAC Sublayer.",
                    "أمثلة: اتصال DSL بين منزلك ومزود الخدمة، PPP Protocol."
                ]
            },
            {
                h: "النوع الثاني: Broadcast Link (Shared Link)",
                bullets: [
                    "الرابط مشترك بين عدة أجهزة.",
                    "السعة موزعة بينهم — يتنافسون على الوصول للوسط.",
                    "نحتاج MAC Sublayer لتنظيم من يرسل ومتى.",
                    "أمثلة: شبكة Ethernet المشتركة، Wi-Fi."
                ]
            },
            {
                h: "أهمية هذا التقسيم",
                bullets: [
                    "يحدد نوع البروتوكول المستخدم في Data-Link Layer.",
                    "يؤثر على وجود أو عدم وجود طبقة MAC.",
                    "Point-to-Point: أبسط، أسرع، لكن أقل مرونة.",
                    "Broadcast: أكثر مرونة وقابلية للتوسع، لكن أكثر تعقيدًا."
                ]
            }
        ],
        keywords: ["Point-to-Point", "Broadcast", "Shared Link", "Dedicated", "PPP", "Ethernet"]
    },

    {
        page: 8,
        title: "Two Sublayers — DLC & MAC",
        brief: "تقسيم طبقة Data-Link إلى طبقتين فرعيتين.",
        sections: [
            {
                h: "لماذا التقسيم؟",
                bullets: [
                    "IEEE قامت بتقسيم Data-Link Layer إلى جزئين لتسهيل التصميم.",
                    "كل جزء له وظائف محددة ومستقلة.",
                    "هذا يسمح بإعادة استخدام البروتوكولات بمرونة أكبر."
                ]
            },
            {
                h: "الجزء الأول: Data Link Control (DLC)",
                bullets: [
                    "يتعامل مع: Framing (تأطير البيانات).",
                    "Flow Control (التحكم في التدفق).",
                    "Error Control (اكتشاف وتصحيح الأخطاء).",
                    "يعمل في كل أنواع الروابط: Point-to-Point و Broadcast."
                ]
            },
            {
                h: "الجزء الثاني: Media Access Control (MAC)",
                bullets: [
                    "يتعامل مع سؤال واحد: من يرسل؟ ومتى يرسل؟",
                    "يعمل فقط في Broadcast/Shared Networks.",
                    "لا نحتاجه في Point-to-Point لأن الرابط مخصص.",
                    "بروتوكولات MAC: CSMA/CD (Ethernet), CSMA/CA (Wi-Fi), Token Ring."
                ]
            }
        ],
        keywords: ["DLC", "MAC", "Data Link Control", "Media Access Control", "IEEE", "Sublayer"]
    },

    {
        page: 9,
        title: "Link-Layer Addressing — لماذا IP وحده غير كافٍ؟",
        brief: "شرح الحاجة لعناوين Data-Link بالإضافة لـ IP.",
        sections: [
            {
                h: "السؤال المهم: لماذا لا نكتفي بـ IP Address؟",
                bullets: [
                    "الإنترنت Connectionless — لا يوجد مسار ثابت للحزم.",
                    "كل Packet قد يسلك طريقًا مختلفًا للوصول للوجهة.",
                    "IP Address يحدد الوجهة النهائية (End-to-End).",
                    "لكن من يوصل الـ Packet للـ Router التالي؟ هنا يأتي دور MAC!"
                ]
            },
            {
                h: "القاعدة الذهبية",
                bullets: [
                    "IP Addresses لا تتغير طوال رحلة الـ Packet (Source IP → Destination IP ثابت).",
                    "Link-Layer Addresses (MAC) تتغير في كل Hop/Link!",
                    "في كل قفزة: Source MAC = العقدة المرسلة، Destination MAC = العقدة التالية.",
                    "هذا ما يجعل التوصيل المحلي ممكنًا."
                ]
            },
            {
                h: "مثال توضيحي",
                bullets: [
                    "Alice تريد إرسال لـ Bob عبر Router1 ثم Router2.",
                    "IP: Source=Alice, Dest=Bob — ثابت طوال الطريق.",
                    "من Alice لـ Router1: MAC Source=Alice, MAC Dest=Router1.",
                    "من Router1 لـ Router2: MAC Source=Router1, MAC Dest=Router2.",
                    "من Router2 لـ Bob: MAC Source=Router2, MAC Dest=Bob."
                ]
            }
        ],
        keywords: ["IP Address", "MAC Address", "Connectionless", "Hop", "عنونة"]
    },

    {
        page: 10,
        title: "Link-Layer Addresses (MAC Addresses)",
        brief: "تعريف عناوين MAC وخصائصها وتنسيقها.",
        sections: [
            {
                h: "أسماء عناوين Data-Link Layer",
                bullets: [
                    "Physical Address — لأنها مرتبطة بالـ Hardware.",
                    "Link Address — لأنها تعمل على مستوى الـ Link.",
                    "MAC Address — الاسم الأكثر شيوعًا (Media Access Control).",
                    "Hardware Address — مسجلة في الـ NIC (Network Interface Card)."
                ]
            },
            {
                h: "تنسيق MAC Address",
                bullets: [
                    "طولها 48 bits = 6 bytes = 12 رقم Hexadecimal.",
                    "مثال: A2:34:45:11:92:F1 أو A2-34-45-11-92-F1.",
                    "أول 3 bytes: OUI (Organizationally Unique Identifier) — تحدد الشركة المصنعة.",
                    "آخر 3 bytes: رقم تسلسلي فريد للجهاز."
                ]
            },
            {
                h: "عند التغليف — ترتيب العناوين في Frame",
                bullets: [
                    "Frame يحتوي: Destination MAC ثم Source MAC.",
                    "ملاحظة امتحانية مهمة: في IP Header المصدر أولًا!",
                    "في MAC Header الوجهة أولًا!",
                    "السبب: الهدف في Data-Link هو التوصيل المحلي السريع — نحتاج نعرف الوجهة فورًا."
                ]
            }
        ],
        keywords: ["MAC Address", "Physical Address", "OUI", "48-bit", "Hexadecimal", "NIC"]
    },

    {
        page: 11,
        title: "Types of MAC Addresses — أنواع العناوين",
        brief: "Unicast, Multicast, Broadcast وكيفية التمييز بينها.",
        sections: [
            {
                h: "النوع الأول: Unicast Address",
                bullets: [
                    "اتصال واحد إلى واحد (One-to-One).",
                    "الـ Frame موجه لجهاز واحد محدد فقط.",
                    "مثال: A2:34:45:11:92:F1",
                    "في Ethernet: ثاني رقم Hex يكون زوجي (Even) — مثل 2, 4, 6, 8, A, C, E."
                ]
            },
            {
                h: "النوع الثاني: Multicast Address",
                bullets: [
                    "اتصال واحد إلى مجموعة (One-to-Many).",
                    "الـ Frame موجه لمجموعة معينة من الأجهزة.",
                    "في Ethernet: ثاني رقم Hex يكون فردي (Odd) — مثل 1, 3, 5, 7, 9, B, D, F.",
                    "مثال: A3:34:45:11:92:F1 (لاحظ الـ 3 بدل 2)."
                ]
            },
            {
                h: "النوع الثالث: Broadcast Address",
                bullets: [
                    "اتصال واحد إلى الجميع (One-to-All).",
                    "الـ Frame موجه لكل الأجهزة على الشبكة المحلية.",
                    "دائمًا نفس العنوان: FF:FF:FF:FF:FF:FF",
                    "يستخدم في ARP Request وبعض بروتوكولات الاكتشاف."
                ]
            },
            {
                h: "كيف تتذكر الفرق؟",
                bullets: [
                    "Unicast: ثاني رقم Even → للفرد (جهاز واحد).",
                    "Multicast: ثاني رقم Odd → لمجموعة.",
                    "Broadcast: كل الـ Fs → للجميع."
                ]
            }
        ],
        keywords: ["Unicast", "Multicast", "Broadcast", "FF:FF:FF:FF:FF:FF", "Even", "Odd"]
    },

    {
        page: 12,
        title: "ARP – Address Resolution Protocol",
        brief: "كيف نحصل على MAC Address من IP Address؟",
        sections: [
            {
                h: "المشكلة — لدينا IP ولا نعرف MAC",
                bullets: [
                    "المرسل يعرف IP Address للجهاز المستهدف (من DNS أو التطبيق).",
                    "لكن لا يعرف MAC Address للوجهة!",
                    "الإرسال في Data-Link Layer يتطلب MAC Address.",
                    "كيف نحصل على MAC من IP؟ الجواب: ARP!"
                ]
            },
            {
                h: "ما هو ARP؟",
                bullets: [
                    "Address Resolution Protocol — بروتوكول تحليل العناوين.",
                    "يعمل Mapping (ربط) بين IP Address و MAC Address.",
                    "يعمل فقط داخل الشبكة المحلية (LAN).",
                    "لا يستخدم لعناوين خارج الشبكة — تُرسل للـ Default Gateway."
                ]
            },
            {
                h: "خطوات عمل ARP بالتفصيل",
                bullets: [
                    "1. المرسل يعرف IP الهدف لكن لا يعرف MAC.",
                    "2. يرسل ARP Request كـ Broadcast (FF:FF:FF:FF:FF:FF).",
                    "3. الرسالة تصل لكل الأجهزة على الشبكة.",
                    "4. كل جهاز يفحص: هل هذا IP الخاص بي؟",
                    "5. الجهاز المطلوب فقط يرد بـ ARP Reply (Unicast).",
                    "6. المرسل يستقبل MAC ويحفظه في الـ ARP Cache.",
                    "7. الآن يستطيع إرسال الـ Frame مباشرة!"
                ]
            },
            {
                h: "أنواع Mapping",
                bullets: [
                    "Static Mapping: إدخال يدوي للعناوين — غير عملي ولا يتكيف مع التغييرات.",
                    "Dynamic Mapping (ARP): تلقائي وفعال — الأكثر استخدامًا.",
                    "ARP Cache: جدول مؤقت يحفظ الـ Mappings لتجنب إعادة السؤال.",
                    "الـ Cache له Timeout — تُحذف الإدخالات القديمة تلقائيًا."
                ]
            },
            {
                h: "ملاحظات متقدمة عن ARP",
                bullets: [
                    "Gratuitous ARP: جهاز يعلن عن عنوانه حتى بدون طلب.",
                    "ARP Spoofing: هجوم أمني عبر إرسال ARP Reply مزيف.",
                    "Proxy ARP: Router يرد على ARP بالنيابة عن جهاز آخر.",
                    "RARP (Reverse ARP): العكس — معرفة IP من MAC (قديم، حل محله DHCP)."
                ]
            }
        ],
        keywords: ["ARP", "Address Resolution Protocol", "ARP Request", "ARP Reply", "Broadcast", "Cache", "Mapping"]
    },

    {
        page: 13,
        title: "HDLC — High-Level Data Link Control",
        brief: "بروتوكول أساسي للاتصالات Point-to-Point",
        sections: [
            {
                h: "ما هو HDLC؟",
                bullets: [
                    "High-Level Data Link Control — بروتوكول من ISO.",
                    "Bit-oriented Protocol — يتعامل مع البتات لا الأحرف.",
                    "يُستخدم في اتصالات Point-to-Point.",
                    "أساس لبروتوكولات أخرى مثل PPP و LAPB."
                ]
            },
            {
                h: "أنماط الاتصال في HDLC",
                bullets: [
                    "NRM (Normal Response Mode): Secondary لا ترسل إلا بإذن Primary.",
                    "ABM (Asynchronous Balanced Mode): كلا الطرفين متساويان.",
                    "ARM (Asynchronous Response Mode): Secondary ترسل بدون إذن."
                ]
            },
            {
                h: "هيكل Frame في HDLC",
                bullets: [
                    "Flag: 01111110 — بداية ونهاية الإطار.",
                    "Address: عنوان الوجهة.",
                    "Control: نوع الإطار والتحكم.",
                    "Information: البيانات (اختياري).",
                    "FCS: Frame Check Sequence للكشف عن الأخطاء.",
                    "Bit Stuffing: إضافة 0 بعد خمس 1s متتالية."
                ]
            }
        ],
        keywords: ["HDLC", "Bit-oriented", "NRM", "ABM", "Flag", "FCS", "Bit Stuffing"]
    },

    {
        page: 14,
        title: "PPP — Point-to-Point Protocol",
        brief: "البروتوكول الأكثر استخداماً للاتصالات المباشرة",
        sections: [
            {
                h: "ما هو PPP؟",
                bullets: [
                    "Point-to-Point Protocol — للاتصالات المباشرة.",
                    "يُستخدم في: DSL, Dial-up, VPN Tunnels.",
                    "يدعم عدة بروتوكولات Network Layer (IP, IPX).",
                    "يوفر: Authentication, Encryption, Compression."
                ]
            },
            {
                h: "مكونات PPP",
                bullets: [
                    "LCP (Link Control Protocol): إنشاء وإنهاء الاتصال.",
                    "NCP (Network Control Protocol): تهيئة بروتوكولات الشبكة.",
                    "Authentication: PAP (نص عادي) أو CHAP (مشفر).",
                    "Multilink PPP: دمج عدة روابط لزيادة السرعة."
                ]
            },
            {
                h: "هيكل PPP Frame",
                bullets: [
                    "Flag: 01111110 — مثل HDLC.",
                    "Address: دائماً 11111111 (Broadcast).",
                    "Control: دائماً 00000011 (Unnumbered).",
                    "Protocol: نوع البيانات المحمولة.",
                    "Payload: البيانات (حتى 1500 bytes).",
                    "FCS: 2 أو 4 bytes للكشف عن الأخطاء."
                ]
            }
        ],
        keywords: ["PPP", "LCP", "NCP", "PAP", "CHAP", "DSL", "VPN", "Authentication"]
    },

    {
        page: 15,
        title: "Ethernet Frame Format — تفاصيل",
        brief: "هيكل إطار Ethernet بالتفصيل",
        sections: [
            {
                h: "Ethernet Frame Fields",
                bullets: [
                    "Preamble: 7 bytes (10101010...) — للمزامنة.",
                    "SFD: 1 byte (10101011) — بداية الإطار.",
                    "Destination MAC: 6 bytes — عنوان الوجهة.",
                    "Source MAC: 6 bytes — عنوان المصدر.",
                    "Type/Length: 2 bytes — نوع البروتوكول أو الطول.",
                    "Data: 46-1500 bytes — الحمولة.",
                    "FCS: 4 bytes — CRC-32 للكشف عن الأخطاء."
                ]
            },
            {
                h: "قيود حجم الإطار",
                bullets: [
                    "Minimum Frame Size: 64 bytes (بدون Preamble/SFD).",
                    "Maximum Frame Size: 1518 bytes.",
                    "Minimum Data: 46 bytes — يُضاف Padding إذا أقل.",
                    "Maximum Data: 1500 bytes — MTU."
                ]
            },
            {
                h: "لماذا Minimum 64 bytes؟",
                bullets: [
                    "CSMA/CD يحتاج وقت للكشف عن التصادم.",
                    "الإطار يجب أن يكون طويلاً كفاية للكشف.",
                    "إذا كان أقصر، قد ينتهي قبل اكتشاف التصادم.",
                    "64 bytes تضمن كشف التصادم في كل الحالات."
                ]
            }
        ],
        keywords: ["Ethernet Frame", "Preamble", "SFD", "FCS", "CRC-32", "MTU", "Padding"]
    },

    {
        page: 16,
        title: "ملخص Data-Link Layer — للحفظ",
        brief: "أهم المفاهيم والمصطلحات للمراجعة السريعة",
        sections: [
            {
                h: "الوظائف الأساسية",
                bullets: [
                    "Framing: تقسيم البيانات لإطارات.",
                    "Addressing: عنونة MAC للتوصيل المحلي.",
                    "Error Detection: كشف الأخطاء (CRC).",
                    "Flow Control: منع إغراق المستقبل.",
                    "Media Access: تنظيم الوصول للوسط المشترك."
                ]
            },
            {
                h: "أنواع العناوين",
                bullets: [
                    "Unicast: لجهاز واحد — ثاني رقم Even.",
                    "Multicast: لمجموعة — ثاني رقم Odd.",
                    "Broadcast: للجميع — FF:FF:FF:FF:FF:FF."
                ]
            },
            {
                h: "البروتوكولات الرئيسية",
                bullets: [
                    "Ethernet (802.3): الأكثر شيوعاً في LAN.",
                    "WiFi (802.11): الشبكات اللاسلكية.",
                    "PPP: الاتصالات المباشرة.",
                    "HDLC: أساس PPP وغيره.",
                    "ARP: ربط IP بـ MAC."
                ]
            },
            {
                h: "قواعد ذهبية للامتحان",
                bullets: [
                    "MAC يتغير في كل Hop، IP ثابت.",
                    "Router له طبقتا Data-Link.",
                    "ARP Request = Broadcast، Reply = Unicast.",
                    "Minimum Ethernet Frame = 64 bytes."
                ]
            }
        ],
        keywords: ["Summary", "MAC", "Framing", "Error", "Ethernet", "WiFi", "ARP", "PPP"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
    done: "net_ch9_done_pages",
    last: "net_ch9_last_page"
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
