/* ====== Quiz Data - أسئلة الاختبارات ====== */

const CHAPTERS = [
    { id: 1, name: "Chapter 1", title: "مقدمة في الشبكات", icon: "1" },
    { id: 2, name: "Chapter 2", title: "نموذج OSI", icon: "2" },
    { id: 3, name: "Chapter 3", title: "Physical Layer", icon: "3" },
    { id: 7, name: "Chapter 7", title: "Transmission Media", icon: "7" },
    { id: 9, name: "Chapter 9", title: "Data-Link Layer", icon: "9" },
    { id: 10, name: "Chapter 10", title: "Error Detection & Correction", icon: "10" },
    { id: 12, name: "Chapter 12", title: "Media Access Control", icon: "12" },
    { id: 13, name: "Chapter 13", title: "LANs & Ethernet", icon: "13" }
];

const QUESTIONS = {
    // ==================== Chapter 1: مقدمة في الشبكات (20 سؤال) ====================
    1: [
        {
            q: "ما هو تعريف الشبكة الحاسوبية؟",
            options: ["مجموعة أجهزة متصلة لتبادل البيانات", "برنامج لتحرير النصوص", "نوع من المعالجات", "لغة برمجة"],
            correct: 0
        },
        {
            q: "أي من التالي ليس من مكونات الشبكة؟",
            options: ["Router", "Switch", "Compiler", "Hub"],
            correct: 2
        },
        {
            q: "ما هي الشبكة التي تغطي مدينة كاملة؟",
            options: ["LAN", "PAN", "MAN", "WAN"],
            correct: 2
        },
        {
            q: "ما هو الـ Protocol؟",
            options: ["جهاز توجيه", "نوع كابل", "برنامج حماية", "قواعد اتصال متفق عليها"],
            correct: 3
        },
        {
            q: "أي طوبولوجيا تستخدم كابل واحد مشترك؟",
            options: ["Bus", "Star", "Ring", "Mesh"],
            correct: 0
        },
        {
            q: "ما هي الطوبولوجيا الأكثر موثوقية؟",
            options: ["Star", "Bus", "Ring", "Mesh"],
            correct: 3
        },
        {
            q: "ما وظيفة الـ Router؟",
            options: ["توصيل الطابعات", "تخزين الملفات", "توجيه البيانات بين الشبكات", "تشفير البيانات"],
            correct: 2
        },
        {
            q: "ما هو الـ Bandwidth؟",
            options: ["سرعة نقل البيانات القصوى", "نوع كابل", "بروتوكول أمان", "جهاز شبكة"],
            correct: 0
        },
        {
            q: "LAN تعني:",
            options: ["Large Area Network", "Long Area Network", "Local Area Network", "Logical Area Network"],
            correct: 2
        },
        {
            q: "ما الفرق بين Client و Server؟",
            options: ["لا فرق", "Server يطلب و Client يقدم", "Client يطلب و Server يقدم الخدمة", "كلاهما يقدم الخدمة"],
            correct: 2
        },
        {
            q: "ما هي شبكة الـ Peer-to-Peer؟",
            options: ["شبكة بدون أجهزة", "شبكة لاسلكية فقط", "شبكة حكومية", "كل جهاز client و server معًا"],
            correct: 3
        },
        {
            q: "أي مما يلي يمثل WAN؟",
            options: ["الإنترنت", "شبكة مكتب", "شبكة منزل", "شبكة غرفة"],
            correct: 0
        },
        {
            q: "ما هو الـ Node في الشبكة؟",
            options: ["نوع بروتوكول", "أي جهاز متصل بالشبكة", "كابل خاص", "برنامج حماية"],
            correct: 1
        },
        {
            q: "Throughput يقيس:",
            options: ["حجم الذاكرة", "عدد الأجهزة", "طول الكابل", "السرعة الفعلية لنقل البيانات"],
            correct: 3
        },
        {
            q: "ما هو الـ Latency؟",
            options: ["التأخير في وصول البيانات", "سرعة المعالج", "نوع كابل", "حجم الإطار"],
            correct: 0
        },
        {
            q: "ما هو Jitter في الشبكات؟",
            options: ["سرعة الاتصال", "نوع خطأ", "التذبذب في زمن وصول الحزم", "بروتوكول نقل"],
            correct: 2
        },
        {
            q: "Telecommunication تعني:",
            options: ["اتصال عن بُعد", "اتصال قريب", "اتصال سلكي فقط", "اتصال لاسلكي فقط"],
            correct: 0
        },
        {
            q: "ASCII يستخدم لتمثيل:",
            options: ["الصور", "الأصوات", "النصوص والأحرف", "الفيديو"],
            correct: 2
        },
        {
            q: "Simplex يعني اتصال في:",
            options: ["اتجاهين معًا", "اتجاه واحد فقط", "اتجاهين بالتناوب", "لا اتجاه"],
            correct: 1
        },
        {
            q: "Full-Duplex يعني:",
            options: ["اتجاه واحد", "اتجاهين بالتناوب", "لا اتصال", "اتجاهين في نفس الوقت"],
            correct: 3
        }
    ],

    // ==================== Chapter 2: نموذج OSI (20 سؤال) ====================
    2: [
        {
            q: "كم عدد طبقات نموذج OSI؟",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            q: "أي طبقة مسؤولة عن Routing؟",
            options: ["Network", "Physical", "Data-Link", "Transport"],
            correct: 0
        },
        {
            q: "ما هي الطبقة السابعة في OSI؟",
            options: ["Physical", "Session", "Presentation", "Application"],
            correct: 3
        },
        {
            q: "Encapsulation يحدث في أي اتجاه؟",
            options: ["من الأسفل للأعلى", "من الأعلى للأسفل", "أفقيًا", "عشوائيًا"],
            correct: 1
        },
        {
            q: "ما اسم وحدة البيانات في Network Layer؟",
            options: ["Packet", "Frame", "Segment", "Bit"],
            correct: 0
        },
        {
            q: "أي طبقة تتعامل مع MAC Address؟",
            options: ["Physical", "Network", "Data-Link", "Transport"],
            correct: 2
        },
        {
            q: "TCP يعمل في أي طبقة؟",
            options: ["Network", "Session", "Application", "Transport"],
            correct: 3
        },
        {
            q: "ما وظيفة Presentation Layer؟",
            options: ["التشفير وتنسيق البيانات", "التوجيه", "إدارة الجلسات", "نقل البتات"],
            correct: 0
        },
        {
            q: "Physical Layer تتعامل مع:",
            options: ["IP Addresses", "البروتوكولات", "البتات والإشارات", "التطبيقات"],
            correct: 2
        },
        {
            q: "ما هو PDU الخاص بـ Transport Layer؟",
            options: ["Bit", "Frame", "Packet", "Segment"],
            correct: 3
        },
        {
            q: "Session Layer مسؤولة عن:",
            options: ["إدارة الجلسات والحوار", "العنونة", "التشفير", "التوجيه"],
            correct: 0
        },
        {
            q: "De-encapsulation يحدث عند:",
            options: ["المرسل", "Router فقط", "المستقبل", "Switch فقط"],
            correct: 2
        },
        {
            q: "HTTP يعمل في أي طبقة؟",
            options: ["Transport", "Network", "Session", "Application"],
            correct: 3
        },
        {
            q: "ما الفرق بين OSI و TCP/IP؟",
            options: ["لا فرق", "OSI نظري و TCP/IP عملي", "TCP/IP أقدم", "OSI له 5 طبقات"],
            correct: 1
        },
        {
            q: "أي طبقة تحول البيانات لإشارات كهربائية؟",
            options: ["Physical", "Data-Link", "Network", "Transport"],
            correct: 0
        },
        {
            q: "IP Address يُستخدم في أي طبقة؟",
            options: ["Physical", "Data-Link", "Transport", "Network"],
            correct: 3
        },
        {
            q: "Port Number يُستخدم في أي طبقة؟",
            options: ["Network", "Application", "Transport", "Data-Link"],
            correct: 2
        },
        {
            q: "أي بروتوكول يعمل في Transport Layer؟",
            options: ["HTTP", "IP", "Ethernet", "UDP"],
            correct: 3
        },
        {
            q: "Segmentation تحدث في أي طبقة؟",
            options: ["Transport", "Network", "Application", "Data-Link"],
            correct: 0
        },
        {
            q: "أي طبقة تضيف Header و Trailer معاً؟",
            options: ["Physical", "Network", "Transport", "Data-Link"],
            correct: 3
        }
    ],

    // ==================== Chapter 3: Physical Layer (20 سؤال) ====================
    3: [
        {
            q: "ما هي أنواع الإشارات الأساسية؟",
            options: ["Digital فقط", "Analog فقط", "Digital و Analog", "لا توجد أنواع"],
            correct: 2
        },
        {
            q: "Bandwidth يُقاس بـ:",
            options: ["Hertz", "Bytes", "Meters", "Seconds"],
            correct: 0
        },
        {
            q: "ما هو Attenuation؟",
            options: ["تضخيم الإشارة", "تشفير البيانات", "ضعف الإشارة مع المسافة", "ضغط الملفات"],
            correct: 2
        },
        {
            q: "Noise يعني:",
            options: ["الإشارة الأصلية", "سرعة النقل", "نوع كابل", "التداخل غير المرغوب"],
            correct: 3
        },
        {
            q: "ما هو Bit Rate؟",
            options: ["عدد البتات في الثانية", "طول الكابل", "عدد الأجهزة", "حجم الذاكرة"],
            correct: 0
        },
        {
            q: "Baud Rate يقيس:",
            options: ["عدد البتات", "سرعة المعالج", "عدد تغيرات الإشارة في الثانية", "حجم الإطار"],
            correct: 2
        },
        {
            q: "في Baseband:",
            options: ["إشارات متعددة", "لا إشارات", "إشارة واحدة تستخدم كل النطاق", "إشارة لاسلكية"],
            correct: 2
        },
        {
            q: "Broadband يسمح بـ:",
            options: ["إشارة واحدة فقط", "إشارات متعددة متزامنة", "لا إشارات", "إشارة ضعيفة"],
            correct: 1
        },
        {
            q: "ما وظيفة Repeater؟",
            options: ["توجيه البيانات", "تشفير البيانات", "فلترة الإطارات", "تقوية الإشارة"],
            correct: 3
        },
        {
            q: "SNR يعني:",
            options: ["Signal to Noise Ratio", "Speed of Network Rate", "Secure Network Router", "Single Node Ring"],
            correct: 0
        },
        {
            q: "كلما زاد SNR:",
            options: ["جودة أسوأ", "جودة أفضل", "لا تأثير", "سرعة أقل"],
            correct: 1
        },
        {
            q: "ما هو Multiplexing؟",
            options: ["تقسيم البيانات", "تشفير", "دمج عدة إشارات في قناة واحدة", "ضغط"],
            correct: 2
        },
        {
            q: "FDM تعني:",
            options: ["Frequency Division Multiplexing", "Frame Data Mode", "Fast Digital Media", "Fixed Data Memory"],
            correct: 0
        },
        {
            q: "TDM تعني:",
            options: ["Total Data Management", "Transfer Data Mode", "Time Division Multiplexing", "Temporary Digital Media"],
            correct: 2
        },
        {
            q: "Simplex يعني:",
            options: ["اتجاه واحد فقط", "اتجاهين بالتناوب", "اتجاهين معًا", "لا اتجاه"],
            correct: 0
        },
        {
            q: "Half-Duplex يعني:",
            options: ["اتجاه واحد فقط", "اتجاهين في نفس الوقت", "لا اتصال", "اتجاهين بالتناوب"],
            correct: 3
        },
        {
            q: "NRZ تعني:",
            options: ["Non-Return to Zero", "New Rate Zone", "Network Router Zero", "Noise Reduction Zone"],
            correct: 0
        },
        {
            q: "Manchester Encoding يستخدم:",
            options: ["مستوى واحد", "لا انتقالات", "انتقال في منتصف كل bit", "موجات عشوائية"],
            correct: 2
        },
        {
            q: "Analog Signal تتغير:",
            options: ["فجائياً", "لا تتغير", "بشكل مستمر وسلس", "كل ثانية فقط"],
            correct: 2
        },
        {
            q: "Digital Signal لها:",
            options: ["قيم لا نهائية", "قيمة واحدة", "قيم محددة منفصلة", "لا قيم"],
            correct: 2
        }
    ],

    // ==================== Chapter 7: Transmission Media (20 سؤال) ====================
    7: [
        {
            q: "أي كابل يستخدم الضوء لنقل البيانات؟",
            options: ["Coaxial", "UTP", "Fiber Optic", "STP"],
            correct: 2
        },
        {
            q: "UTP يعني:",
            options: ["Unshielded Twisted Pair", "Universal Transfer Protocol", "Unified Transmission Path", "Ultra Thin Pair"],
            correct: 0
        },
        {
            q: "ما ميزة Fiber Optic؟",
            options: ["رخيص", "سهل التركيب", "قصير المسافة", "سرعة عالية ومقاومة للتداخل"],
            correct: 3
        },
        {
            q: "Coaxial Cable يتكون من:",
            options: ["أسلاك ملتوية", "موصل مركزي وعازل ودرع", "ألياف زجاجية", "أسلاك عادية"],
            correct: 1
        },
        {
            q: "أي فئة (Category) تدعم Gigabit Ethernet؟",
            options: ["Cat 3", "Cat 1", "Cat 5e/6", "Cat 5"],
            correct: 2
        },
        {
            q: "ما عيب Fiber Optic؟",
            options: ["مكلف وصعب التركيب", "بطيء", "ضعيف", "ثقيل"],
            correct: 0
        },
        {
            q: "STP يختلف عن UTP بـ:",
            options: ["عدد الأسلاك", "اللون", "وجود درع حماية", "الطول"],
            correct: 2
        },
        {
            q: "أقصى مسافة لـ UTP في Ethernet:",
            options: ["50 متر", "500 متر", "100 متر", "1000 متر"],
            correct: 2
        },
        {
            q: "الوسط اللاسلكي يستخدم:",
            options: ["كابلات", "أسلاك نحاسية", "ألياف بلاستيكية", "موجات راديو/ضوء"],
            correct: 3
        },
        {
            q: "Infrared يُستخدم في:",
            options: ["شبكات واسعة", "مسافات قصيرة ورؤية مباشرة", "تحت الماء", "الفضاء"],
            correct: 1
        },
        {
            q: "WiFi يستخدم أي نوع من الموجات؟",
            options: ["Infrared", "X-rays", "Radio Waves", "Sound Waves"],
            correct: 2
        },
        {
            q: "ما هو RJ-45؟",
            options: ["موصل UTP", "نوع كابل", "بروتوكول", "جهاز شبكة"],
            correct: 0
        },
        {
            q: "Multi-mode Fiber يُستخدم لـ:",
            options: ["مسافات طويلة جدًا", "الاتصالات الفضائية", "مسافات قصيرة داخل المباني", "تحت الماء"],
            correct: 2
        },
        {
            q: "Single-mode Fiber مناسب لـ:",
            options: ["مسافات قصيرة", "داخل الغرف", "مسافات طويلة جدًا", "التوصيلات المنزلية"],
            correct: 2
        },
        {
            q: "Crosstalk هو:",
            options: ["تداخل بين الأسلاك المتجاورة", "ضعف الإشارة", "تشفير", "ضغط البيانات"],
            correct: 0
        },
        {
            q: "EMI تعني:",
            options: ["Electronic Mail Interface", "Extended Media Input", "External Module Integration", "Electromagnetic Interference"],
            correct: 3
        },
        {
            q: "Cladding في الألياف الضوئية وظيفته:",
            options: ["نقل الضوء", "حماية الألياف من الخارج", "عكس الضوء للداخل", "توليد الضوء"],
            correct: 2
        },
        {
            q: "Total Internal Reflection يحدث في:",
            options: ["Fiber Optic", "Coaxial Cable", "UTP", "كل الكابلات"],
            correct: 0
        },
        {
            q: "أي تردد يستخدمه WiFi 5GHz؟",
            options: ["2.4 GHz", "60 GHz", "5 GHz", "1 GHz"],
            correct: 2
        },
        {
            q: "Guided Media تشمل:",
            options: ["الراديو فقط", "الأشعة تحت الحمراء", "الكابلات والألياف", "الأقمار الصناعية"],
            correct: 2
        }
    ],

    // ==================== Chapter 9: Data-Link Layer (20 سؤال) ====================
    9: [
        {
            q: "Data-Link Layer مقسمة إلى:",
            options: ["طبقة واحدة", "Physical و Network", "LLC و MAC", "TCP و UDP"],
            correct: 2
        },
        {
            q: "ما وظيفة Framing؟",
            options: ["تقسيم البيانات لإطارات", "التوجيه", "التشفير", "الضغط"],
            correct: 0
        },
        {
            q: "Error Detection تُستخدم لـ:",
            options: ["إخفاء الأخطاء", "تصحيح كل الأخطاء", "اكتشاف الأخطاء في الإطار", "منع الإرسال"],
            correct: 2
        },
        {
            q: "Flow Control يمنع:",
            options: ["التصادم", "فقدان الإشارة", "إغراق المستقبل بالبيانات", "التشفير"],
            correct: 2
        },
        {
            q: "ما هو MAC Address؟",
            options: ["العنوان الفيزيائي للجهاز", "عنوان IP", "عنوان البريد", "رقم المنفذ"],
            correct: 0
        },
        {
            q: "طول MAC Address:",
            options: ["32 bit", "64 bit", "48 bit", "128 bit"],
            correct: 2
        },
        {
            q: "Character Count طريقة لـ:",
            options: ["العنونة", "التشفير", "تحديد حدود الإطار", "الضغط"],
            correct: 2
        },
        {
            q: "Byte Stuffing تُستخدم مع:",
            options: ["Character Count", "Bit Stuffing", "CRC", "Flag Bytes"],
            correct: 3
        },
        {
            q: "Bit Stuffing تضيف:",
            options: ["bytes", "flags", "أرقام", "بت 0 بعد خمس 1s متتالية"],
            correct: 3
        },
        {
            q: "Stop-and-Wait ARQ:",
            options: ["يرسل بدون انتظار", "لا يستخدم ACK", "ينتظر ACK قبل الإرسال التالي", "يرسل كل شيء معًا"],
            correct: 2
        },
        {
            q: "Go-Back-N ARQ:",
            options: ["يعيد إطار واحد فقط", "يعيد من الإطار الخاطئ وما بعده", "لا يعيد شيء", "يوقف الشبكة"],
            correct: 1
        },
        {
            q: "Selective Repeat ARQ:",
            options: ["يعيد كل الإطارات", "لا يعيد شيء", "يوقف الإرسال", "يعيد الإطارات الخاطئة فقط"],
            correct: 3
        },
        {
            q: "Sliding Window يسمح بـ:",
            options: ["إطار واحد فقط", "إيقاف الشبكة", "إرسال عدة إطارات قبل الـ ACK", "حذف الإطارات"],
            correct: 2
        },
        {
            q: "Piggybacking يعني:",
            options: ["دمج ACK مع البيانات", "إرسال منفصل", "حذف ACK", "تكرار البيانات"],
            correct: 0
        },
        {
            q: "NAK تعني:",
            options: ["Positive Acknowledgment", "Network Access Key", "Node Address Key", "Negative Acknowledgment"],
            correct: 3
        },
        {
            q: "HDLC هو:",
            options: ["جهاز شبكة", "نوع كابل", "بروتوكول Data-Link", "طبقة في OSI"],
            correct: 2
        },
        {
            q: "PPP يعني:",
            options: ["Point-to-Point Protocol", "Peer Protocol Processor", "Primary Path Protocol", "Packet Passing Protocol"],
            correct: 0
        },
        {
            q: "LLC تقوم بـ:",
            options: ["العنونة الفيزيائية", "نقل البتات", "التوجيه", "التحكم بالتدفق ومعالجة الأخطاء"],
            correct: 3
        },
        {
            q: "Sequence Number يُستخدم لـ:",
            options: ["ترتيب الإطارات وكشف الفقدان", "التشفير", "الضغط", "العنونة"],
            correct: 0
        },
        {
            q: "Window Size يحدد:",
            options: ["حجم الإطار", "سرعة الشبكة", "عدد الإطارات المسموح إرسالها بدون ACK", "طول الكابل"],
            correct: 2
        }
    ],

    // ==================== Chapter 10: Error Detection & Correction (20 سؤال) ====================
    10: [
        {
            q: "ما هو Redundancy؟",
            options: ["حذف البيانات", "ضغط البيانات", "إضافة بتات زائدة للتحقق", "تشفير"],
            correct: 2
        },
        {
            q: "Single-Bit Error يعني:",
            options: ["كل البتات تالفة", "لا أخطاء", "بت واحد فقط تغير", "خطأ في العنوان"],
            correct: 2
        },
        {
            q: "Burst Error يعني:",
            options: ["بت واحد", "لا أخطاء", "عدة بتات متتالية تالفة", "خطأ في CRC فقط"],
            correct: 2
        },
        {
            q: "Parity Check يكتشف:",
            options: ["كل الأخطاء", "لا أخطاء", "الأخطاء الزوجية", "الأخطاء الفردية فقط"],
            correct: 3
        },
        {
            q: "CRC تعني:",
            options: ["Cyclic Redundancy Check", "Central Router Control", "Common Rate Calculation", "Checksum Repeat Code"],
            correct: 0
        },
        {
            q: "Hamming Distance تقيس:",
            options: ["طول الكابل", "سرعة النقل", "عدد البتات المختلفة بين كلمتين", "حجم الإطار"],
            correct: 2
        },
        {
            q: "لكشف s أخطاء نحتاج d_min:",
            options: ["= s", "≥ s - 1", "≥ s + 1", "= 2s"],
            correct: 2
        },
        {
            q: "لتصحيح t أخطاء نحتاج d_min:",
            options: ["= t", "≥ t + 1", "= t × 2", "≥ 2t + 1"],
            correct: 3
        },
        {
            q: "CRC-32 يستخدم في:",
            options: ["RAM فقط", "الطباعة", "Ethernet و ZIP", "الصوت"],
            correct: 2
        },
        {
            q: "Generator Polynomial في CRC:",
            options: ["يُختار عشوائيًا", "مصمم بعناية لكشف الأخطاء", "غير مهم", "ثابت دائمًا"],
            correct: 1
        },
        {
            q: "الباقي = 0 في CRC يعني:",
            options: ["خطأ", "إعادة الإرسال", "البيانات سليمة غالبًا", "تصادم"],
            correct: 2
        },
        {
            q: "Checksum أضعف من:",
            options: ["Parity", "لا شيء", "CRC", "كلاهما"],
            correct: 2
        },
        {
            q: "Forward Error Correction يعني:",
            options: ["كشف فقط", "إعادة إرسال دائمًا", "كشف وتصحيح بدون إعادة إرسال", "تجاهل الأخطاء"],
            correct: 2
        },
        {
            q: "Dataword + Redundant Bits =",
            options: ["Error", "Noise", "Codeword", "Signal"],
            correct: 2
        },
        {
            q: "Even Parity يجعل عدد الـ 1s:",
            options: ["فردي", "صفر", "زوجي", "عشوائي"],
            correct: 2
        },
        {
            q: "Hamming Code يستطيع:",
            options: ["كشف فقط", "تصحيح أي عدد", "تصحيح bit واحد", "لا شيء"],
            correct: 2
        },
        {
            q: "Block Code يعالج البيانات كـ:",
            options: ["تيار مستمر", "bit واحد", "byte واحد", "كتل منفصلة ثابتة الحجم"],
            correct: 3
        },
        {
            q: "Convolution Code يعالج البيانات كـ:",
            options: ["كتل منفصلة", "تيار مستمر", "إطارات", "حزم"],
            correct: 1
        },
        {
            q: "VRC تعني:",
            options: ["Vertical Redundancy Check", "Virtual Recovery Code", "Variable Rate Control", "Video Resolution Check"],
            correct: 0
        },
        {
            q: "LRC تعني:",
            options: ["Low Rate Connection", "Local Router Control", "Longitudinal Redundancy Check", "Linear Recovery Code"],
            correct: 2
        }
    ],

    // ==================== Chapter 12: Media Access Control (20 سؤال) ====================
    12: [
        {
            q: "ما المشكلة التي يحلها MAC؟",
            options: ["التشفير", "العنونة", "التصادم عند الوصول للوسط", "التوجيه"],
            correct: 2
        },
        {
            q: "Random Access يعني:",
            options: ["تحكم مركزي", "لا إرسال", "كل محطة تقرر بنفسها", "إرسال مجدول"],
            correct: 2
        },
        {
            q: "Pure ALOHA كفاءته:",
            options: ["50%", "36.8%", "90%", "18.4%"],
            correct: 3
        },
        {
            q: "Slotted ALOHA كفاءته:",
            options: ["18.4%", "50%", "36.8%", "90%"],
            correct: 2
        },
        {
            q: "CSMA تعني:",
            options: ["Carrier Sense Multiple Access", "Central System Main Access", "Common Signal Media Access", "Controlled System Multiple Access"],
            correct: 0
        },
        {
            q: "1-Persistent CSMA:",
            options: ["ترسل باحتمال p", "لا ترسل أبدًا", "ترسل فور خلو الوسط", "تنتظر عشوائيًا"],
            correct: 2
        },
        {
            q: "CSMA/CD تعني:",
            options: ["Collision Detection", "Collision Avoidance", "Central System", "Carrier Detection"],
            correct: 0
        },
        {
            q: "CSMA/CD يُستخدم في:",
            options: ["WiFi", "Bluetooth", "Ethernet السلكية", "الأقمار الصناعية"],
            correct: 2
        },
        {
            q: "CSMA/CA يُستخدم في:",
            options: ["Ethernet", "الكابلات", "Token Ring", "WiFi"],
            correct: 3
        },
        {
            q: "لماذا لا يعمل CD في اللاسلكي؟",
            options: ["الإشارة قوية جدًا", "لا توجد تصادمات", "لا يمكن الإرسال والاستقبال معًا", "الوسط سلكي"],
            correct: 2
        },
        {
            q: "Jam Signal في CSMA/CD:",
            options: ["يبدأ الإرسال", "ينهي الاتصال", "يعلن عن تصادم", "يشفر البيانات"],
            correct: 2
        },
        {
            q: "Binary Exponential Backoff:",
            options: ["انتظار ثابت", "لا انتظار", "انتظار عشوائي ثابت", "انتظار يتضاعف مع التصادمات"],
            correct: 3
        },
        {
            q: "Minimum Frame Size في Ethernet:",
            options: ["32 bytes", "128 bytes", "64 bytes", "256 bytes"],
            correct: 2
        },
        {
            q: "RTS/CTS يحل مشكلة:",
            options: ["Hidden Station", "التشفير", "العنونة", "التوجيه"],
            correct: 0
        },
        {
            q: "NAV يعني:",
            options: ["Network Access Verification", "Node Address Value", "Network Allocation Vector", "Noise Attenuation Value"],
            correct: 2
        },
        {
            q: "Token Passing:",
            options: ["تنافسي", "عشوائي", "مُتحكَّم - من يملك Token يرسل", "لا تحكم"],
            correct: 2
        },
        {
            q: "Polling يحتاج:",
            options: ["لا شيء خاص", "Token", "تصادمات", "محطة رئيسية"],
            correct: 3
        },
        {
            q: "عيب Polling الرئيسي:",
            options: ["سريع جدًا", "لا عيوب", "فشل الرئيسية = فشل الشبكة", "مكلف"],
            correct: 2
        },
        {
            q: "Vulnerable Time في Pure ALOHA:",
            options: ["Tfr", "Tfr / 2", "0", "2 × Tfr"],
            correct: 3
        },
        {
            q: "p-Persistent CSMA ترسل باحتمال:",
            options: ["100%", "0%", "p", "50%"],
            correct: 2
        }
    ],

    // ==================== Chapter 13: LANs & Ethernet (20 سؤال) ====================
    13: [
        {
            q: "LAN تعني:",
            options: ["Large Area Network", "Long Area Network", "Local Area Network", "Logical Area Network"],
            correct: 2
        },
        {
            q: "IEEE 802.3 هو معيار:",
            options: ["WiFi", "Bluetooth", "Ethernet", "Token Ring"],
            correct: 2
        },
        {
            q: "LLC تعني:",
            options: ["Local Link Control", "Large LAN Connection", "Logical Link Control", "Low Level Circuit"],
            correct: 2
        },
        {
            q: "MAC في Data-Link مسؤولة عن:",
            options: ["التوجيه", "التشفير", "التحكم في الوصول للوسط", "الضغط"],
            correct: 2
        },
        {
            q: "Ethernet بدأت في:",
            options: ["1990", "2000", "1976 في Xerox", "1960"],
            correct: 2
        },
        {
            q: "Standard Ethernet سرعتها:",
            options: ["1 Mbps", "100 Mbps", "10 Mbps", "1 Gbps"],
            correct: 2
        },
        {
            q: "Fast Ethernet سرعتها:",
            options: ["10 Mbps", "1 Gbps", "100 Mbps", "10 Gbps"],
            correct: 2
        },
        {
            q: "Gigabit Ethernet سرعتها:",
            options: ["100 Mbps", "10 Gbps", "1 Gbps", "100 Gbps"],
            correct: 2
        },
        {
            q: "10-Gigabit Ethernet سرعتها:",
            options: ["1 Gbps", "100 Gbps", "10 Gbps", "1 Tbps"],
            correct: 2
        },
        {
            q: "Preamble في Ethernet يُستخدم لـ:",
            options: ["التشفير", "العنونة", "المزامنة", "كشف الأخطاء"],
            correct: 2
        },
        {
            q: "SFD يعني:",
            options: ["Start Frame Delimiter", "Signal Frequency Division", "Secure Frame Data", "Standard Format Definition"],
            correct: 0
        },
        {
            q: "طول MAC Address:",
            options: ["32 bit", "64 bit", "128 bit", "48 bit"],
            correct: 3
        },
        {
            q: "Broadcast Address:",
            options: ["00:00:00:00:00:00", "11:11:11:11:11:11", "FF:FF:FF:FF:FF:FF", "AA:AA:AA:AA:AA:AA"],
            correct: 2
        },
        {
            q: "Minimum Frame Size:",
            options: ["32 bytes", "46 bytes", "128 bytes", "64 bytes"],
            correct: 3
        },
        {
            q: "Maximum Data في Ethernet Frame:",
            options: ["500 bytes", "1000 bytes", "2000 bytes", "1500 bytes"],
            correct: 3
        },
        {
            q: "Hub يعمل في أي طبقة؟",
            options: ["Physical", "Data-Link", "Network", "Transport"],
            correct: 0
        },
        {
            q: "Switch يعمل في أي طبقة؟",
            options: ["Physical", "Network", "Data-Link", "Transport"],
            correct: 2
        },
        {
            q: "الفرق بين Hub و Switch:",
            options: ["لا فرق", "Hub أسرع", "Switch يوجه للمنفذ الصحيح", "Switch أرخص"],
            correct: 2
        },
        {
            q: "Collision Domain في Switch:",
            options: ["واحد للكل", "لا يوجد", "منفصل لكل منفذ", "ثابت"],
            correct: 2
        },
        {
            q: "Full-Duplex يعني:",
            options: ["إرسال فقط", "استقبال فقط", "لا اتصال", "إرسال واستقبال معًا"],
            correct: 3
        }
    ]
};

/* ====== State ====== */
const LS = {
    theme: "net_global_theme",
    scores: "net_quiz_scores"
};

let state = {
    currentChapter: null,
    currentQuestion: 0,
    score: 0,
    answered: false,
    selectedAnswer: null,
    quizMode: false,
    scores: JSON.parse(localStorage.getItem(LS.scores) || "{}")
};

/* ====== Elements ====== */
const el = {
    themeBtn: document.getElementById("themeBtn"),
    menuBtn: document.getElementById("menuBtn"),
    drawer: document.getElementById("drawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    closeDrawer: document.getElementById("closeDrawer"),
    drawerThemeBtn: document.getElementById("drawerThemeBtn"),
    chaptersGrid: document.getElementById("chaptersGrid"),
    quizContainer: document.getElementById("quizContainer"),
    chapterSelection: document.getElementById("chapterSelection"),
    quizHeader: document.getElementById("quizHeader"),
    quizContent: document.getElementById("quizContent"),
    questionCounter: document.getElementById("questionCounter"),
    questionText: document.getElementById("questionText"),
    optionsContainer: document.getElementById("optionsContainer"),
    feedback: document.getElementById("feedback"),
    nextBtn: document.getElementById("nextBtn"),
    backToChapters: document.getElementById("backToChapters"),
    progressFill: document.getElementById("quizProgressFill"),
    currentChapterTitle: document.getElementById("currentChapterTitle"),
    finalScore: document.getElementById("finalScore"),
    finalScoreText: document.getElementById("finalScoreText"),
    restartQuiz: document.getElementById("restartQuiz"),
    backFromResults: document.getElementById("backFromResults")
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
    if (el.themeBtn) {
        const icon = el.themeBtn.querySelector(".icon");
        if (icon) icon.textContent = (theme === "light") ? "☀" : "☾";
    }
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

/* ====== Render Chapters ====== */
function renderChapters() {
    el.chaptersGrid.innerHTML = "";

    CHAPTERS.forEach(ch => {
        const questions = QUESTIONS[ch.id] || [];
        const savedScore = state.scores[ch.id];
        const scoreText = savedScore !== undefined ? `${savedScore}/${questions.length}` : "لم يُختبر";

        const card = document.createElement("div");
        card.className = "chapter-card";
        card.innerHTML = `
            <div class="chapter-icon">${ch.icon}</div>
            <div class="chapter-info">
                <div class="chapter-name">${ch.name}</div>
                <div class="chapter-title">${ch.title}</div>
                <div class="chapter-meta">
                    <span class="question-count">${questions.length} سؤال</span>
                    <span class="score-badge ${savedScore !== undefined ? 'has-score' : ''}">${scoreText}</span>
                </div>
            </div>
        `;

        card.addEventListener("click", () => startQuiz(ch.id));
        el.chaptersGrid.appendChild(card);
    });
}

/* ====== Start Quiz ====== */
function startQuiz(chapterId) {
    const chapter = CHAPTERS.find(c => c.id === chapterId);
    if (!chapter || !QUESTIONS[chapterId]) return;

    state.currentChapter = chapterId;
    state.currentQuestion = 0;
    state.score = 0;
    state.answered = false;
    state.selectedAnswer = null;
    state.quizMode = true;

    el.chapterSelection.style.display = "none";
    el.quizContainer.style.display = "block";
    el.finalScore.style.display = "none";
    el.quizContent.style.display = "block";

    el.currentChapterTitle.textContent = `${chapter.name}: ${chapter.title}`;

    renderQuestion();
}

/* ====== Render Question ====== */
function renderQuestion() {
    const questions = QUESTIONS[state.currentChapter];
    const q = questions[state.currentQuestion];

    el.questionCounter.textContent = `السؤال ${state.currentQuestion + 1} من ${questions.length}`;
    el.questionText.textContent = q.q;

    const progress = ((state.currentQuestion) / questions.length) * 100;
    el.progressFill.style.width = `${progress}%`;

    el.optionsContainer.innerHTML = "";
    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span class="option-text">${opt}</span>`;
        btn.addEventListener("click", () => selectAnswer(i));
        el.optionsContainer.appendChild(btn);
    });

    el.feedback.style.display = "none";
    el.feedback.className = "feedback";
    el.nextBtn.style.display = "none";
    state.answered = false;
    state.selectedAnswer = null;
}

/* ====== Select Answer ====== */
function selectAnswer(index) {
    if (state.answered) return;

    state.answered = true;
    state.selectedAnswer = index;

    const questions = QUESTIONS[state.currentChapter];
    const q = questions[state.currentQuestion];
    const isCorrect = index === q.correct;

    if (isCorrect) state.score++;

    const options = el.optionsContainer.querySelectorAll(".option-btn");
    options.forEach((opt, i) => {
        opt.classList.add("disabled");
        if (i === q.correct) {
            opt.classList.add("correct");
        } else if (i === index && !isCorrect) {
            opt.classList.add("wrong");
        }
    });

    el.feedback.style.display = "block";
    el.feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    el.feedback.innerHTML = isCorrect
        ? '<span class="feedback-icon">✓</span> إجابة صحيحة!'
        : `<span class="feedback-icon">✗</span> إجابة خاطئة! الإجابة الصحيحة: ${q.options[q.correct]}`;

    el.nextBtn.style.display = "block";
    el.nextBtn.textContent = state.currentQuestion < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة";
}

/* ====== Next Question ====== */
function nextQuestion() {
    const questions = QUESTIONS[state.currentChapter];

    if (state.currentQuestion < questions.length - 1) {
        state.currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

/* ====== Show Results ====== */
function showResults() {
    const questions = QUESTIONS[state.currentChapter];
    const percentage = Math.round((state.score / questions.length) * 100);

    state.scores[state.currentChapter] = state.score;
    localStorage.setItem(LS.scores, JSON.stringify(state.scores));

    el.quizContent.style.display = "none";
    el.finalScore.style.display = "block";

    let message;
    if (percentage >= 90) {
        message = "ممتاز! أداء رائع!";
    } else if (percentage >= 70) {
        message = "جيد جدًا! استمر!";
    } else if (percentage >= 50) {
        message = "جيد، لكن راجع المادة أكثر";
    } else {
        message = "تحتاج مراجعة! لا تستسلم!";
    }

    el.finalScoreText.innerHTML = `
        <div class="result-score">${state.score} / ${questions.length}</div>
        <div class="result-percentage">${percentage}%</div>
        <div class="result-message">${message}</div>
    `;

    el.progressFill.style.width = "100%";
}

/* ====== Back to Chapters ====== */
function backToChapters() {
    state.quizMode = false;
    state.currentChapter = null;

    el.quizContainer.style.display = "none";
    el.chapterSelection.style.display = "block";

    renderChapters();
}

/* ====== Restart Quiz ====== */
function restartQuiz() {
    startQuiz(state.currentChapter);
}

/* ====== Init ====== */
function init() {
    initTheme();
    renderChapters();

    if (el.menuBtn) el.menuBtn.addEventListener("click", openDrawer);
    if (el.closeDrawer) el.closeDrawer.addEventListener("click", closeDrawer);
    if (el.drawerOverlay) el.drawerOverlay.addEventListener("click", (e) => {
        if (e.target === el.drawerOverlay) closeDrawer();
    });

    if (el.themeBtn) {
        el.themeBtn.addEventListener("click", () => {
            const cur = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(cur === "dark" ? "light" : "dark");
        });
    }

    if (el.drawerThemeBtn) {
        el.drawerThemeBtn.addEventListener("click", () => {
            const cur = document.documentElement.getAttribute("data-theme") || "dark";
            applyTheme(cur === "dark" ? "light" : "dark");
        });
    }

    if (el.nextBtn) el.nextBtn.addEventListener("click", nextQuestion);
    if (el.backToChapters) el.backToChapters.addEventListener("click", backToChapters);
    if (el.restartQuiz) el.restartQuiz.addEventListener("click", restartQuiz);
    if (el.backFromResults) el.backFromResults.addEventListener("click", backToChapters);
}

init();
