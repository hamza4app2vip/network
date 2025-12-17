/* ====== Data (ملخص صفحة بصفحة) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة + الفرق بين المعلومات والبيانات",
        brief: "كيف تتم عملية الاتصال؟ وما معنى Information vs Data؟",
        sections: [
            {
                h: "الفكرة الأساسية — عناصر الاتصال",
                bullets: [
                    "أي عملية تواصل تحتاج ثلاثة عناصر أساسية:",
                    "1. مصدر (Source): الطرف الذي يبدأ الاتصال ويرسل المعلومة.",
                    "2. متلقي (Recipient): الطرف الذي يستقبل المعلومة ويفهمها.",
                    "3. وسط ناقل (Medium): القناة التي تنتقل عبرها المعلومة.",
                    "بدون أي عنصر من هذه العناصر، لا يمكن أن يحدث اتصال!"
                ]
            },
            {
                h: "أنواع الوسط الناقل",
                bullets: [
                    "الهواء: لنقل الموجات الصوتية (المحادثة العادية).",
                    "النشر والبريد: لنقل المعلومات المكتوبة (تقليدي).",
                    "شبكات الاتصالات: لتبادل البيانات إلكترونيًا (الأسرع والأكثر شيوعًا اليوم).",
                    "كل وسط له مميزاته وعيوبه من حيث السرعة والتكلفة والموثوقية."
                ]
            },
            {
                h: "Information vs Data — الفرق الجوهري",
                bullets: [
                    "المعلومة (Information): كل ما يحمل معنى وفائدة للمستقبل.",
                    "في سياق الاتصالات: إشارة منظمة تُتبادل بين طرفين وتؤدي غرضًا معينًا.",
                    "البيانات (Data): التمثيل الرقمي للمعلومة بأرقام/حروف/رموز.",
                    "مثال: 'درجة الحرارة 25°' معلومة، أما '25' وحدها بيانات خام.",
                    "البيانات تصبح معلومات عندما توضع في سياق يعطيها معنى."
                ]
            }
        ],
        keywords: ["Source", "Recipient", "Medium", "Information", "Data", "مصدر", "متلقي", "وسط ناقل"]
    },

    {
        page: 2,
        title: "Data Communications + خصائص النظام الفعّال",
        brief: "تعريف Telecommunication و Data communications + 4 خصائص مهمة.",
        sections: [
            {
                h: "التعريفات الأساسية",
                bullets: [
                    "Telecommunication: أي اتصال يحدث عن بُعد (Tele = بعيد).",
                    "يشمل: الهاتف، الراديو، التلفاز، الإنترنت، وغيرها.",
                    "Data Communications: تبادل البيانات بين جهازين عبر وسط ناقل.",
                    "الوسط قد يكون: كابل نحاسي، ألياف ضوئية، موجات لاسلكية.",
                    "نظام الاتصال الكامل = Hardware (المعدات) + Software (البرمجيات)."
                ]
            },
            {
                h: "الخصائص الأربع لنظام الاتصال الفعّال",
                bullets: [
                    "1. Delivery (التوصيل): البيانات تصل للوجهة الصحيحة فقط.",
                    "   - لا فائدة من إرسال بيانات إذا وصلت لجهاز خاطئ!",
                    "2. Accuracy (الدقة): البيانات تصل بدون أخطاء أو تغيير.",
                    "   - أي تشويه في البيانات قد يجعلها عديمة الفائدة.",
                    "3. Timeliness (التوقيت): البيانات تصل في الوقت المناسب.",
                    "   - التأخر الكبير يجعل البيانات غير مفيدة (خاصة في البث المباشر).",
                    "4. Jitter (التذبذب): ثبات زمن وصول الحزم المتتالية.",
                    "   - مهم جدًا للصوت والفيديو لتجنب التقطيع."
                ]
            },
            {
                h: "لماذا Jitter مهم؟",
                bullets: [
                    "تخيل مكالمة فيديو: إذا وصلت الحزم بفترات غير منتظمة...",
                    "ستسمع الصوت متقطعًا والصورة متجمدة.",
                    "Jitter = الفرق في زمن وصول الحزم المتتالية.",
                    "كلما كان Jitter أقل، كانت جودة البث أفضل."
                ]
            }
        ],
        keywords: ["Delivery", "Accuracy", "Timeliness", "Jitter", "Telecommunication", "Data Communications"]
    },

    {
        page: 3,
        title: "مكوّنات الاتصال + تمثيل البيانات",
        brief: "5 مكونات لأي نظام اتصال + كيف نمثل النص والأرقام والصور.",
        sections: [
            {
                h: "المكوّنات الخمسة لأي نظام اتصال",
                bullets: [
                    "1. Message (الرسالة): البيانات المراد إرسالها — نص، صورة، صوت، فيديو.",
                    "2. Sender (المرسل): الجهاز الذي يُنشئ الرسالة ويرسلها.",
                    "3. Receiver (المستقبل): الجهاز الذي يستقبل الرسالة ويعالجها.",
                    "4. Transmission Medium: المسار الفيزيائي الذي تنتقل عبره الرسالة.",
                    "5. Protocol (البروتوكول): مجموعة القواعد التي تنظم الاتصال.",
                    "⚠️ بدون Protocol: قد يتصل جهازان ولا يفهم أحدهما الآخر!"
                ]
            },
            {
                h: "تمثيل النص (Text Representation)",
                bullets: [
                    "النص يُمثل كنمط بتّات (Bit Pattern) — سلسلة من 0 و 1.",
                    "ASCII: أول معيار، يمثل 127 رمزًا (حروف إنجليزية + أرقام + رموز).",
                    "Unicode: المعيار الحديث، يدعم جميع لغات العالم.",
                    "ASCII هو أول 127 رمزًا في Unicode.",
                    "مثال: حرف 'A' = 01000001 في ASCII."
                ]
            },
            {
                h: "تمثيل الأرقام والصور",
                bullets: [
                    "Numbers: تُحوّل مباشرة للنظام الثنائي لتسهيل العمليات الحسابية.",
                    "مثال: الرقم 5 = 101 في الثنائي.",
                    "Images: تُمثل كمصفوفة من النقاط (Pixels).",
                    "كل Pixel نقطة صغيرة لها لون محدد.",
                    "كلما زاد عدد Pixels، زادت دقة الصورة وحجمها."
                ]
            }
        ],
        keywords: ["Protocol", "Unicode", "ASCII", "Pixels", "Message", "Sender", "Receiver"]
    },

    {
        page: 4,
        title: "ألوان الصور + Audio/Video + Data Flow",
        brief: "طرق تمثيل الألوان + تعريف الصوت والفيديو + أنماط الاتصال.",
        sections: [
            {
                h: "نماذج الألوان (Color Models)",
                bullets: [
                    "RGB (Red, Green, Blue): للشاشات والأجهزة الإلكترونية.",
                    "   - دمج الأحمر والأخضر والأزرق بنسب مختلفة ينتج كل الألوان.",
                    "   - مثال: أحمر كامل + أخضر كامل = أصفر.",
                    "YCM/CMYK (Yellow, Cyan, Magenta): للطباعة.",
                    "   - يُستخدم في الطابعات لأن الورق يعكس الضوء.",
                    "Resolution (الدقة): عدد Pixels في الصورة.",
                    "   - دقة أعلى = Pixels أكثر وأصغر = تفاصيل أوضح = حجم أكبر."
                ]
            },
            {
                h: "الوسائط المتعددة (Multimedia)",
                bullets: [
                    "Audio (الصوت): موجات صوتية تُحوّل لإشارات رقمية.",
                    "   - يُسجل بمعدل أخذ عينات (Sampling Rate) مثل 44.1 kHz.",
                    "Video (الفيديو): سلسلة من الصور (Frames) تُعرض بسرعة.",
                    "   - معدل الإطارات (Frame Rate): 24-60 إطار/ثانية.",
                    "   - الفيديو = صور متحركة + صوت مزامن.",
                    "كلما زادت الجودة، زاد حجم الملف وسرعة النقل المطلوبة."
                ]
            },
            {
                h: "Data Flow — أنماط تدفق البيانات",
                bullets: [
                    "كيف تنتقل البيانات بين جهازين؟ ثلاثة أنماط:",
                    "1. Simplex: اتجاه واحد فقط (مثل البث التلفزيوني).",
                    "2. Half-Duplex: اتجاهان لكن ليس بنفس الوقت (مثل اللاسلكي).",
                    "3. Full-Duplex: اتجاهان بنفس الوقت (مثل الهاتف).",
                    "سنشرح كل نمط بالتفصيل في الصفحة التالية."
                ]
            }
        ],
        keywords: ["RGB", "CMYK", "Audio", "Video", "Simplex", "Half-Duplex", "Full-Duplex", "Resolution"]
    },

    {
        page: 5,
        title: "أنماط الإرسال + تعريف الشبكات وأجهزتها",
        brief: "Simplex/Half/Full Duplex + ما هي Network؟ وما دور Router/Switch/Modem؟",
        sections: [
            {
                h: "Data Flow — أنماط تدفق البيانات بالتفصيل",
                bullets: [
                    "Simplex (أحادي الاتجاه):",
                    "   - الإرسال في اتجاه واحد فقط — مرسل واحد ومستقبل واحد.",
                    "   - المستقبل لا يستطيع الرد على المرسل.",
                    "   - مثال: لوحة المفاتيح ← الكمبيوتر، البث التلفزيوني.",
                    "Half-Duplex (نصف مزدوج):",
                    "   - كلا الطرفين يستطيع الإرسال والاستقبال، لكن ليس بنفس الوقت.",
                    "   - مثال: أجهزة اللاسلكي (Walkie-Talkie) — 'حوّل' عند الانتهاء.",
                    "Full-Duplex (مزدوج كامل):",
                    "   - الإرسال والاستقبال يحدثان بنفس الوقت في كلا الاتجاهين.",
                    "   - مثال: المكالمة الهاتفية — كلاكما يتحدث ويسمع بنفس الوقت."
                ]
            },
            {
                h: "ما هي الشبكة (Network)؟",
                bullets: [
                    "الشبكة: مجموعة أجهزة مترابطة قادرة على التواصل وتبادل البيانات.",
                    "الأجهزة نوعان:",
                    "   - Host (جهاز طرفي): كمبيوتر، هاتف، طابعة — مستخدم نهائي.",
                    "   - Connecting Devices (أجهزة ربط): تربط الأجهزة ببعضها."
                ]
            },
            {
                h: "أجهزة الربط الأساسية",
                bullets: [
                    "Router (الموجّه): يربط شبكة بشبكات أخرى، ويوجّه الحزم للمسار الصحيح.",
                    "Switch (المبدّل): يربط أجهزة داخل نفس الشبكة، أذكى من Hub.",
                    "Modem (المودم): يحوّل البيانات من رقمية لتماثلية والعكس.",
                    "   - ضروري للاتصال عبر خطوط الهاتف أو الكابل.",
                    "Hub (المجمّع): يربط الأجهزة لكنه يبث لكل الأجهزة (أقل ذكاءً)."
                ]
            }
        ],
        keywords: ["Simplex", "Half-Duplex", "Full-Duplex", "Router", "Switch", "Modem", "Hub", "Host"]
    },

    {
        page: 6,
        title: "Network Criteria (الأداء/الموثوقية/الأمن)",
        brief: "كيف نقيس جودة الشبكة؟ Throughput/Delay وTransit/Response time.",
        sections: [
            {
                h: "المعايير الثلاثة لجودة الشبكة",
                bullets: [
                    "1. Performance (الأداء): مدى سرعة وكفاءة نقل البيانات.",
                    "2. Reliability (الموثوقية): مدى ندرة الأعطال والأخطاء.",
                    "3. Security (الأمن): حماية البيانات من الوصول غير المصرح."
                ]
            },
            {
                h: "قياس الأداء — المصطلحات المهمة",
                bullets: [
                    "Transit Time: الزمن اللازم لانتقال رسالة كاملة من جهاز لآخر.",
                    "Response Time: الزمن بين إرسال الطلب واستقبال الرد.",
                    "   - يشمل: زمن المعالجة + زمن النقل + زمن الانتظار.",
                    "Throughput (معدل الإنتاجية): كمية البيانات المنقولة فعليًا في الثانية.",
                    "   - نريد Throughput أعلى ما يمكن!",
                    "Delay (التأخير): الزمن الضائع قبل وصول البيانات.",
                    "   - نريد Delay أقل ما يمكن!"
                ]
            },
            {
                h: "الموثوقية والأمان",
                bullets: [
                    "Reliability (الموثوقية):",
                    "   - تُقاس بتكرار الأعطال (MTBF - Mean Time Between Failures).",
                    "   - تُقاس أيضًا بسرعة الاستعادة (MTTR - Mean Time To Repair).",
                    "Security (الأمان):",
                    "   - حماية البيانات من الوصول غير المصرح (Unauthorized Access).",
                    "   - حماية البيانات من التلف أو التغيير (Data Integrity).",
                    "   - التشفير (Encryption) من أهم وسائل الحماية."
                ]
            }
        ],
        keywords: ["Throughput", "Delay", "Transit time", "Response time", "Security", "Reliability", "MTBF"]
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
    },

    {
        page: 17,
        title: "البروتوكولات — Protocols بالتفصيل",
        brief: "ما هو البروتوكول؟ عناصره ولماذا هو ضروري؟",
        sections: [
            {
                h: "تعريف البروتوكول — Protocol Definition",
                bullets: [
                    "Protocol: مجموعة قواعد متفق عليها تحكم عملية الاتصال.",
                    "يحدد: ماذا يُرسل؟ كيف يُرسل؟ ومتى يُرسل؟",
                    "بدون بروتوكول موحد: الأجهزة لا تفهم بعضها!",
                    "مثال: HTTP للويب، SMTP للبريد، FTP للملفات."
                ]
            },
            {
                h: "عناصر البروتوكول — Key Elements",
                bullets: [
                    "1. Syntax (التركيب): شكل البيانات وترتيبها.",
                    "   - مثال: ترتيب حقول العنوان والبيانات في الرسالة.",
                    "2. Semantics (الدلالة): معنى كل جزء من الرسالة.",
                    "   - مثال: هل هذا الحقل يعني عنوان المصدر أم الوجهة؟",
                    "3. Timing (التوقيت): متى يُرسل؟ وكم السرعة؟",
                    "   - مثال: معدل الإرسال وزمن الانتظار قبل إعادة المحاولة."
                ]
            },
            {
                h: "أهمية البروتوكولات في الشبكات",
                bullets: [
                    "تضمن التوافق (Interoperability) بين أجهزة مختلفة.",
                    "تحدد آليات كشف الأخطاء وتصحيحها.",
                    "تنظم تدفق البيانات (Flow Control).",
                    "تحدد كيفية بدء وإنهاء الاتصال."
                ]
            }
        ],
        keywords: ["Protocol", "Syntax", "Semantics", "Timing", "HTTP", "SMTP", "FTP", "Interoperability"]
    },

    {
        page: 18,
        title: "المعايير — Standards",
        brief: "لماذا نحتاج معايير؟ ومن يضعها؟",
        sections: [
            {
                h: "أهمية المعايير — Why Standards?",
                bullets: [
                    "Standards (المعايير): قواعد رسمية موحدة يلتزم بها الجميع.",
                    "تضمن التوافق بين منتجات شركات مختلفة.",
                    "تخلق سوقًا أكبر وتخفض التكلفة (منافسة).",
                    "تحمي المستخدم من الاحتكار (Vendor Lock-in)."
                ]
            },
            {
                h: "أنواع المعايير",
                bullets: [
                    "De Facto Standards (معايير فعلية):",
                    "   - انتشرت بالسوق بدون موافقة رسمية.",
                    "   - مثال: بروتوكولات TCP/IP انتشرت قبل توحيدها رسمياً.",
                    "De Jure Standards (معايير قانونية):",
                    "   - تُعتمد من هيئات رسمية.",
                    "   - مثال: معايير ISO، IEEE."
                ]
            },
            {
                h: "المنظمات المُصدرة للمعايير",
                bullets: [
                    "ISO: المنظمة الدولية للمعايير (OSI Model).",
                    "IEEE: معهد مهندسي الكهرباء والإلكترونيات (Ethernet, WiFi).",
                    "IETF: فريق هندسة الإنترنت (TCP/IP, HTTP).",
                    "ITU: الاتحاد الدولي للاتصالات (معايير الهاتف).",
                    "W3C: رابطة الويب العالمية (HTML, CSS)."
                ]
            }
        ],
        keywords: ["Standards", "De Facto", "De Jure", "ISO", "IEEE", "IETF", "ITU", "W3C"]
    },

    {
        page: 19,
        title: "TCP/IP Model — النموذج العملي",
        brief: "الفرق بين OSI و TCP/IP ولماذا TCP/IP أكثر استخدامًا",
        sections: [
            {
                h: "ما هو TCP/IP؟",
                bullets: [
                    "TCP/IP: مجموعة بروتوكولات تشغّل الإنترنت فعليًا.",
                    "طُوّر قبل OSI وأثبت نجاحه عمليًا.",
                    "يتكون من 4 أو 5 طبقات (حسب التصنيف).",
                    "OSI = نظري للتعليم، TCP/IP = عملي للتشغيل."
                ]
            },
            {
                h: "طبقات TCP/IP (النموذج المبسط)",
                bullets: [
                    "1. Network Access Layer: تُعادل Physical + Data-Link.",
                    "2. Internet Layer: تُعادل Network Layer (IP).",
                    "3. Transport Layer: TCP أو UDP.",
                    "4. Application Layer: تُعادل Session + Presentation + Application."
                ]
            },
            {
                h: "مقارنة OSI و TCP/IP",
                bullets: [
                    "OSI: 7 طبقات، نظري، طُوّر بعد TCP/IP.",
                    "TCP/IP: 4-5 طبقات، عملي، يشغّل الإنترنت.",
                    "OSI يُستخدم للتدريس والفهم.",
                    "TCP/IP يُستخدم في التطبيق الفعلي.",
                    "كلاهما يستخدم مفهوم الطبقات (Layering)."
                ]
            }
        ],
        keywords: ["TCP/IP", "OSI", "Internet Layer", "Transport Layer", "Application Layer", "IP", "TCP", "UDP"]
    },

    {
        page: 20,
        title: "عناوين الشبكة — Addressing",
        brief: "أنواع العناوين ولماذا نحتاج أكثر من نوع",
        sections: [
            {
                h: "لماذا نحتاج عناوين؟",
                bullets: [
                    "العنوان يحدد هوية الجهاز أو التطبيق بدقة.",
                    "بدون عنوان: لا يمكن توصيل الرسالة للوجهة الصحيحة!",
                    "الشبكة تستخدم أنواعًا مختلفة من العناوين."
                ]
            },
            {
                h: "أنواع العناوين — Address Types",
                bullets: [
                    "1. Physical Address (MAC Address):",
                    "   - عنوان فيزيائي محفور في كرت الشبكة.",
                    "   - 48 bit (6 bytes)، مثال: 00:1A:2B:3C:4D:5E",
                    "   - يُستخدم في الشبكة المحلية (LAN).",
                    "2. Logical Address (IP Address):",
                    "   - عنوان منطقي يمكن تغييره.",
                    "   - IPv4: 32 bit (مثال: 192.168.1.1).",
                    "   - IPv6: 128 bit (أحدث وأطول).",
                    "   - يُستخدم للتوجيه (Routing) بين الشبكات.",
                    "3. Port Number:",
                    "   - يحدد التطبيق داخل الجهاز.",
                    "   - 16 bit (0-65535).",
                    "   - مثال: HTTP = 80، HTTPS = 443."
                ]
            },
            {
                h: "تشبيه توضيحي",
                bullets: [
                    "IP Address = عنوان المبنى (الشارع والمنطقة).",
                    "MAC Address = رقم الشقة داخل المبنى.",
                    "Port Number = اسم الشخص داخل الشقة.",
                    "كل مستوى ضروري لتوصيل الرسالة بدقة!"
                ]
            }
        ],
        keywords: ["MAC Address", "IP Address", "Port Number", "IPv4", "IPv6", "Physical Address", "Logical Address"]
    },

    {
        page: 21,
        title: "Encapsulation و De-encapsulation",
        brief: "كيف تُغلّف البيانات وتُفك عند الإرسال والاستقبال",
        sections: [
            {
                h: "ما هو Encapsulation؟",
                bullets: [
                    "Encapsulation (التغليف): إضافة معلومات تحكم للبيانات.",
                    "كل طبقة تضيف Header (وأحياناً Trailer) خاص بها.",
                    "مثل وضع رسالة في ظرف، ثم الظرف في صندوق، ثم الصندوق في شاحنة!",
                    "البيانات تنزل من الطبقات العليا للسفلى وتُغلّف في كل مرحلة."
                ]
            },
            {
                h: "وحدات البيانات — PDU (Protocol Data Unit)",
                bullets: [
                    "كل طبقة تُسمي وحدة بياناتها باسم مختلف:",
                    "   - Application/Presentation/Session: Data (بيانات).",
                    "   - Transport: Segment (مقطع).",
                    "   - Network: Packet (حزمة).",
                    "   - Data-Link: Frame (إطار).",
                    "   - Physical: Bits (بتات)."
                ]
            },
            {
                h: "De-encapsulation (فك التغليف)",
                bullets: [
                    "العملية العكسية عند الاستقبال.",
                    "كل طبقة تقرأ Header الخاص بها وتزيله.",
                    "تمرر البيانات للطبقة الأعلى.",
                    "النتيجة: استعادة البيانات الأصلية التي أرسلها التطبيق."
                ]
            }
        ],
        keywords: ["Encapsulation", "De-encapsulation", "PDU", "Header", "Trailer", "Segment", "Packet", "Frame", "Bits"]
    },

    {
        page: 22,
        title: "ملخص Chapter 1 — المصطلحات الأساسية",
        brief: "جميع المفاهيم والمصطلحات الهامة للحفظ",
        sections: [
            {
                h: "المصطلحات الأساسية — Essential Terms",
                bullets: [
                    "Data: التمثيل الخام للمعلومات (أرقام، حروف، رموز).",
                    "Information: بيانات لها معنى وسياق.",
                    "Protocol: قواعد الاتصال المتفق عليها.",
                    "Bandwidth: أقصى سعة نقل للقناة.",
                    "Throughput: كمية البيانات المنقولة فعليًا.",
                    "Latency/Delay: زمن التأخير في وصول البيانات.",
                    "Jitter: التذبذب في زمن وصول الحزم."
                ]
            },
            {
                h: "أجهزة الشبكة — Network Devices",
                bullets: [
                    "Router: يوجّه الحزم بين الشبكات (Layer 3).",
                    "Switch: يربط الأجهزة في نفس الشبكة (Layer 2).",
                    "Hub: يبث لجميع الأجهزة (Layer 1).",
                    "Modem: يحوّل Analog ↔ Digital."
                ]
            },
            {
                h: "أنواع الشبكات والاتصالات",
                bullets: [
                    "LAN: شبكة محلية (مكتب/مبنى).",
                    "WAN: شبكة واسعة (مدينة/دولة/العالم).",
                    "MAN: شبكة تغطي مدينة.",
                    "Simplex: اتجاه واحد.",
                    "Half-Duplex: اتجاهان بالتناوب.",
                    "Full-Duplex: اتجاهان معًا."
                ]
            },
            {
                h: "الطوبولوجيات — Topologies",
                bullets: [
                    "Mesh: كل جهاز متصل بالجميع (موثوق لكن مكلف).",
                    "Star: كل الأجهزة متصلة بمركز (Hub/Switch).",
                    "Bus: كابل واحد مشترك (بسيط لكن هش).",
                    "Ring: حلقة مغلقة (Token للتحكم)."
                ]
            }
        ],
        keywords: ["Summary", "Terms", "Devices", "Topologies", "LAN", "WAN", "Router", "Switch", "Protocol"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
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
    el.markBtn.textContent = done ? "✓ هذه الصفحة مفهومة" : "✔︎ علّمها “مفهومة”";
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
        if (e.key === "ArrowLeft") setActive(state.activePage + 1);     // RTL: اليسار = التالي
        if (e.key === "ArrowRight") setActive(state.activePage - 1);    // RTL: اليمين = السابق
        if (e.key === "Escape") closeDrawer();
    });
}

init();
