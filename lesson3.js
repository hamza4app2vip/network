/* ====== Data (ملخص صفحة بصفحة — Chapter 3: Physical Layer) ====== */
const PAGES = [
    {
        page: 1,
        title: "البيانات والإشارات — Data and Signals",
        brief: "لماذا نحتاج إشارات؟ وكيف تنتقل البيانات؟",
        sections: [
            {
                h: "الفكرة الأساسية — البيانات تحتاج تحويل",
                bullets: [
                    "الطبقة الفيزيائية (Physical Layer) لا تتبادل بيانات مباشرة!",
                    "البيانات (0 و 1) يجب أن تتحول لإشارات تسافر عبر الوسط الناقل.",
                    "الوسط الناقل قد يكون: سلك نحاسي، ألياف ضوئية، هواء (لاسلكي).",
                    "كل وسط له طريقة مختلفة لنقل الإشارات."
                ]
            },
            {
                h: "لماذا نحتاج إشارات؟",
                bullets: [
                    "الوسيط الناقل لا يفهم 'بيانات' كمفهوم مجرد.",
                    "ما ينقله فعلياً هو تغيّر فيزيائي:",
                    "   - كهربائي: في الكابلات النحاسية (تغيّر الجهد الكهربائي).",
                    "   - ضوئي: في الألياف الضوئية (ومضات ضوء).",
                    "   - كهرومغناطيسي: في اللاسلكي (موجات راديو).",
                    "هذا التغيّر الفيزيائي هو الإشارة (Signal)."
                ]
            },
            {
                h: "مثال توضيحي",
                bullets: [
                    "تريد إرسال الرقم 5 (Binary: 101) لصديقك.",
                    "الكمبيوتر يحوّله لإشارات: جهد عالي ← جهد منخفض ← جهد عالي.",
                    "الإشارات تسافر عبر الكابل.",
                    "كمبيوتر صديقك يستقبل الإشارات ويحوّلها لـ 101 مجدداً."
                ]
            }
        ],
        keywords: ["Physical Layer", "Signals", "Data", "إشارات", "بيانات", "Voltage", "Electromagnetic"]
    },

    {
        page: 2,
        title: "بيانات Analog و Digital",
        brief: "الفرق بين البيانات التماثلية والرقمية.",
        sections: [
            {
                h: "Analog Data (البيانات التماثلية)",
                bullets: [
                    "معلومات مستمرة (Continuous) — تتغير بسلاسة بلا قفزات.",
                    "لها عدد لا نهائي من القيم الممكنة.",
                    "أمثلة من الحياة:",
                    "   - الصوت الطبيعي: ذبذبات متصلة في الهواء.",
                    "   - درجة الحرارة: ترتفع وتنخفض بشكل تدريجي.",
                    "   - الموجات الصوتية: متصلة بلا انقطاع.",
                    "مثال: الساعة ذات العقارب — تتحرك بسلاسة."
                ]
            },
            {
                h: "Digital Data (البيانات الرقمية)",
                bullets: [
                    "معلومات متقطعة (Discrete) — قيم محددة فقط.",
                    "غالباً قيمتان: 0 و 1 (Binary).",
                    "تقفز من قيمة لأخرى بدون قيم وسطى.",
                    "أمثلة:",
                    "   - أي ملف على الكمبيوتر (صورة، فيديو، نص).",
                    "   - الرموز المكتوبة (حروف، أرقام).",
                    "مثال: الساعة الرقمية — تقفز من 8:05 إلى 8:06 فجأة."
                ]
            },
            {
                h: "أيهما أفضل؟",
                bullets: [
                    "Digital: أسهل في المعالجة والتخزين والنسخ بدون فقدان جودة.",
                    "Analog: أقرب للواقع الطبيعي (الصوت الحقيقي مثلاً).",
                    "في الشبكات الحديثة: نستخدم Digital لأنها أكثر دقة وثباتًا."
                ]
            }
        ],
        keywords: ["Analog", "Digital", "Continuous", "Discrete", "تماثلي", "رقمي", "Binary"]
    },

    {
        page: 3,
        title: "إشارات Analog و Digital",
        brief: "خصائص الإشارات التماثلية والرقمية.",
        sections: [
            {
                h: "الإشارة التماثلية (Analog Signal)",
                bullets: [
                    "تتغير بشكل سلس ومستمر عبر الزمن.",
                    "لها عدد لا نهائي من مستويات الشدة.",
                    "مثل موجة في الماء — ترتفع وتنخفض بسلاسة.",
                    "مثال: إشارة الراديو FM، إشارة الصوت الطبيعي."
                ]
            },
            {
                h: "الإشارة الرقمية (Digital Signal)",
                bullets: [
                    "تتغير بشكل متقطع — قفزات بين مستويات محددة.",
                    "غالباً مستويان: High (1) و Low (0).",
                    "مثل درج السلم — تقفز من درجة لأخرى.",
                    "مثال: إشارة كابل Ethernet، إشارة USB."
                ]
            },
            {
                h: "ملاحظة مهمة — التحويل بين الأنواع",
                bullets: [
                    "البيانات الرقمية يمكن إرسالها بإشارة تماثلية!",
                    "   - يُسمى هذا التضمين (Modulation) — يستخدمه الـ Modem.",
                    "البيانات التماثلية يمكن تحويلها لرقمية!",
                    "   - يُسمى هذا أخذ العينات (Sampling) — يستخدمه الميكروفون الرقمي.",
                    "المرونة في التحويل أساس عمل الاتصالات الحديثة."
                ]
            }
        ],
        keywords: ["Analog Signal", "Digital Signal", "Modulation", "Sampling", "Modem"]
    },

    {
        page: 4,
        title: "إشارات دورية وغير دورية — Periodic vs Nonperiodic",
        brief: "الفرق بين الإشارات الدورية وغير الدورية.",
        sections: [
            {
                h: "Periodic Signal (الإشارة الدورية)",
                bullets: [
                    "تكمل نمطًا معينًا خلال فترة زمنية تُسمى Period (T).",
                    "ثم تُعيد نفس النمط بالضبط مراراً وتكراراً.",
                    "مثال: موجة الجيب (Sine Wave) — نفس الشكل يتكرر.",
                    "مثال من الحياة: نبضات القلب المنتظمة.",
                    "الوحدة: Period يُقاس بالثواني (s)."
                ]
            },
            {
                h: "Nonperiodic Signal (الإشارة غير الدورية)",
                bullets: [
                    "تتغير بدون نمط متكرر يمكن التنبؤ به.",
                    "كل جزء منها مختلف عن الآخر.",
                    "مثال: صوت المحادثة — كل كلمة مختلفة.",
                    "مثال: بيانات الإنترنت — كل حزمة مختلفة."
                ]
            },
            {
                h: "في الشبكات — القاعدة العملية",
                bullets: [
                    "الإشارات التماثلية الدورية: تُستخدم كـ 'حامل' (Carrier).",
                    "الإشارات الرقمية غير الدورية: تُستخدم لنقل البيانات الفعلية.",
                    "السبب: البيانات الحقيقية نادراً ما تتكرر بنفس النمط.",
                    "Periodic + Analog → للحامل (مثل موجة الراديو FM).",
                    "Nonperiodic + Digital → للبيانات (مثل حزم الإنترنت)."
                ]
            }
        ],
        keywords: ["Periodic", "Nonperiodic", "Period", "Carrier", "دورية", "غير دورية"]
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
    },

    {
        page: 12,
        title: "طرق التشفير الخطي — Line Encoding Schemes",
        brief: "كيف نحول البتات لإشارات كهربائية؟",
        sections: [
            {
                h: "ما هو Line Encoding؟",
                bullets: [
                    "Line Encoding: تحويل البيانات الرقمية لإشارة رقمية.",
                    "Digital Data → Digital Signal",
                    "يحدد كيف نمثل 0 و 1 كإشارات كهربائية.",
                    "مهم جداً لنقل البيانات عبر الكابلات."
                ]
            },
            {
                h: "Unipolar Encoding",
                bullets: [
                    "يستخدم مستوى جهد واحد (موجب فقط).",
                    "0 = لا جهد، 1 = جهد موجب.",
                    "مشكلة: DC Component (مركبة مستمرة) تسبب مشاكل.",
                    "غير مستخدم عملياً في الشبكات الحديثة."
                ]
            },
            {
                h: "Polar Encoding — NRZ",
                bullets: [
                    "NRZ-L (Level): 0 = موجب، 1 = سالب (أو العكس).",
                    "NRZ-I (Invert): 1 = انتقال، 0 = بقاء (أو العكس).",
                    "مشكلة NRZ: سلسلة من 0s أو 1s تفقد التزامن.",
                    "لا توجد انتقالات = لا توجد ساعة للمزامنة."
                ]
            },
            {
                h: "Manchester Encoding",
                bullets: [
                    "انتقال في منتصف كل Bit — للمزامنة!",
                    "Manchester: Low→High = 1، High→Low = 0.",
                    "Differential Manchester: انتقال في البداية = 0.",
                    "ميزة: Self-clocking (مزامنة ذاتية).",
                    "عيب: يحتاج ضعف Bandwidth من NRZ."
                ]
            }
        ],
        keywords: ["Line Encoding", "NRZ", "Manchester", "Unipolar", "Polar", "Self-clocking", "DC Component"]
    },

    {
        page: 13,
        title: "Bipolar و Multi-Level Encoding",
        brief: "طرق متقدمة للتشفير مع كفاءة أعلى",
        sections: [
            {
                h: "Bipolar AMI (Alternate Mark Inversion)",
                bullets: [
                    "يستخدم 3 مستويات: +V، 0، -V.",
                    "0 = لا جهد (0 volts).",
                    "1 = تناوب بين +V و -V.",
                    "ميزة: لا DC Component.",
                    "مشكلة: سلسلة 0s طويلة = فقدان التزامن."
                ]
            },
            {
                h: "B8ZS و HDB3",
                bullets: [
                    "B8ZS: تستبدل 8 أصفار متتالية برمز خاص.",
                    "HDB3: تستبدل 4 أصفار متتالية.",
                    "الهدف: ضمان وجود انتقالات للمزامنة.",
                    "تُستخدم في خطوط T1/E1."
                ]
            },
            {
                h: "Multi-Level — MLT-3 و 2B1Q",
                bullets: [
                    "MLT-3: 3 مستويات، يتنقل بينها بترتيب.",
                    "يُستخدم في Fast Ethernet (100BASE-TX).",
                    "2B1Q: 2 bits تُمثل بـ 1 رمز (4 مستويات).",
                    "يُستخدم في DSL.",
                    "كفاءة أعلى: bits أكثر في نفس Bandwidth."
                ]
            }
        ],
        keywords: ["Bipolar", "AMI", "B8ZS", "HDB3", "MLT-3", "2B1Q", "Multi-Level"]
    },

    {
        page: 14,
        title: "التعديل — Modulation",
        brief: "تحويل البيانات الرقمية لإشارة تماثلية",
        sections: [
            {
                h: "لماذا نحتاج Modulation؟",
                bullets: [
                    "بعض الوسائط تنقل إشارات Analog فقط (الراديو، الهاتف).",
                    "Digital Data → Analog Signal",
                    "نُغير خصائص موجة حاملة (Carrier Wave).",
                    "الموجة الحاملة: إشارة بتردد عالي ثابت."
                ]
            },
            {
                h: "أنواع التعديل الأساسية",
                bullets: [
                    "ASK (Amplitude Shift Keying):",
                    "   - نُغير السعة (Amplitude) حسب البيانات.",
                    "   - 0 = سعة منخفضة، 1 = سعة عالية.",
                    "FSK (Frequency Shift Keying):",
                    "   - نُغير التردد (Frequency) حسب البيانات.",
                    "   - 0 = تردد منخفض، 1 = تردد عالي.",
                    "PSK (Phase Shift Keying):",
                    "   - نُغير الطور (Phase) حسب البيانات.",
                    "   - 0 = طور 0°، 1 = طور 180°."
                ]
            },
            {
                h: "QAM — Quadrature Amplitude Modulation",
                bullets: [
                    "يجمع ASK و PSK معاً!",
                    "نُغير السعة والطور معاً.",
                    "كفاءة عالية جداً — bits أكثر في كل رمز.",
                    "يُستخدم في: WiFi، Cable Modems، LTE."
                ]
            }
        ],
        keywords: ["Modulation", "ASK", "FSK", "PSK", "QAM", "Carrier Wave", "Amplitude", "Frequency", "Phase"]
    },

    {
        page: 15,
        title: "Analog to Digital Conversion",
        brief: "كيف نحوّل الصوت الطبيعي لبيانات رقمية؟",
        sections: [
            {
                h: "لماذا نحتاج التحويل؟",
                bullets: [
                    "الصوت الطبيعي إشارة Analog مستمرة.",
                    "الكمبيوتر يفهم Digital فقط (0 و 1).",
                    "التحويل: Analog → Digital باستخدام ADC.",
                    "ADC = Analog-to-Digital Converter."
                ]
            },
            {
                h: "PCM — Pulse Code Modulation",
                bullets: [
                    "أشهر طريقة للتحويل — 3 خطوات:",
                    "1. Sampling: أخذ عينات من الإشارة.",
                    "   - Sampling Rate: عدد العينات/ثانية.",
                    "   - Nyquist: Rate ≥ 2 × أعلى تردد.",
                    "2. Quantization: تقريب قيمة العينة لأقرب مستوى.",
                    "3. Encoding: تحويل المستوى لرقم ثنائي."
                ]
            },
            {
                h: "مثال: الصوت الهاتفي",
                bullets: [
                    "أعلى تردد للصوت = 4000 Hz.",
                    "Sampling Rate = 8000 Hz (ضعف التردد).",
                    "8 bits لكل عينة = 256 مستوى.",
                    "Bit Rate = 8000 × 8 = 64 Kbps.",
                    "هذا هو معيار PCM للهاتف!"
                ]
            }
        ],
        keywords: ["PCM", "Sampling", "Quantization", "Encoding", "ADC", "Nyquist", "Bit Rate"]
    },

    {
        page: 16,
        title: "ملخص Physical Layer — القواعد الذهبية",
        brief: "أهم المفاهيم والمعادلات للحفظ",
        sections: [
            {
                h: "المعادلات الأساسية",
                bullets: [
                    "Nyquist (بدون ضوضاء): Bit Rate = 2 × BW × log₂(L)",
                    "Shannon (مع ضوضاء): Capacity = BW × log₂(1 + SNR)",
                    "Propagation Time = Distance / Speed",
                    "Transmission Time = Message Size / Bandwidth",
                    "SNR(dB) = 10 × log₁₀(Signal/Noise)"
                ]
            },
            {
                h: "أنواع الإشارات",
                bullets: [
                    "Analog: مستمرة، قيم لا نهائية.",
                    "Digital: متقطعة، قيم محددة.",
                    "Periodic: تتكرر بنمط ثابت.",
                    "Non-periodic: لا تتكرر."
                ]
            },
            {
                h: "طرق التشفير — للحفظ",
                bullets: [
                    "NRZ-L: مستوى يحدد قيمة البت.",
                    "NRZ-I: انتقال يحدد 1.",
                    "Manchester: انتقال في المنتصف (Self-clocking).",
                    "AMI: تناوب +V/-V للـ 1s، صفر للـ 0s."
                ]
            },
            {
                h: "طرق التعديل — للحفظ",
                bullets: [
                    "ASK: تغيير السعة.",
                    "FSK: تغيير التردد.",
                    "PSK: تغيير الطور.",
                    "QAM: تغيير السعة والطور معاً."
                ]
            }
        ],
        keywords: ["Summary", "Formulas", "Nyquist", "Shannon", "Encoding", "Modulation", "Physical Layer"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
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
    closeDrawer: document.getElementById("closeDrawer"),
    drawerThemeBtn: document.getElementById("drawerThemeBtn")
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
