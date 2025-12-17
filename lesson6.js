/* ====== Data (ملخص صفحة بصفحة — Chapter 10: Error Detection and Correction) ====== */
const PAGES = [
    {
        page: 1,
        title: "مقدمة الفصل — Error Detection and Correction",
        brief: "كيف نكتشف الأخطاء؟ وكيف نصححها؟",
        sections: [
            {
                h: "الفكرة الأساسية — لماذا هذا الفصل مهم؟",
                bullets: [
                    "الإرسال في الشبكات غير مضمون 100%!",
                    "لا يوجد وسط نقل مثالي — الضوضاء موجودة دائمًا.",
                    "البيانات قد تتغير أثناء النقل (0 ↔ 1).",
                    "لذلك نحتاج آليات ذكية لاكتشاف وتصحيح الأخطاء.",
                    "هذا الفصل يشرح الأساس الرياضي والمنطقي لهذه الآليات."
                ]
            },
            {
                h: "أهمية الفصل",
                bullets: [
                    "من أهم فصول الشبكات — يشرح كيف نثق بالبيانات.",
                    "مستخدم في كل بروتوكولات الشبكات الحديثة.",
                    "أساس عمل Ethernet, WiFi, TCP, وغيرها.",
                    "بدونه، لن نستطيع الوثوق بأي بيانات تصلنا!"
                ]
            }
        ],
        keywords: ["Error Detection", "Error Correction", "كشف الأخطاء", "تصحيح الأخطاء", "Noise"]
    },

    {
        page: 2,
        title: "أنواع الأخطاء — Types of Errors",
        brief: "Single-Bit Error vs Burst Error — ما الفرق؟",
        sections: [
            {
                h: "لماذا تحدث الأخطاء أصلًا؟",
                bullets: [
                    "السبب الرئيسي: Interference (التداخل الكهرومغناطيسي).",
                    "الضوضاء تغيّر شكل الإشارة الكهربائية.",
                    "المستقبل يفسر الإشارة المشوهة بشكل خاطئ.",
                    "النتيجة: بت 0 يُقرأ كـ 1 أو العكس."
                ]
            },
            {
                h: "Single-Bit Error (خطأ البت الواحد)",
                bullets: [
                    "بت واحد فقط يتغير في الرسالة.",
                    "مثال: 10110001 ← 10110101 (البت الخامس تغير).",
                    "نادر الحدوث في الواقع!",
                    "السبب: الضوضاء عادة تستمر أطول من زمن بت واحد."
                ]
            },
            {
                h: "Burst Error (خطأ الاندفاع)",
                bullets: [
                    "أكثر من بت متتالي يتغير.",
                    "الأكثر شيوعًا في الشبكات الحقيقية!",
                    "السبب: الضوضاء تستمر لفترة زمنية.",
                    "خلال هذه الفترة تمر عدة بتات فتتلف جميعها.",
                    "عدد البتات التالفة يعتمد على: Data Rate + مدة الضوضاء."
                ]
            }
        ],
        keywords: ["Single-Bit Error", "Burst Error", "Interference", "Noise", "ضوضاء"]
    },

    {
        page: 3,
        title: "Redundancy — مفهوم التكرار",
        brief: "كيف نكتشف الخطأ؟ بإضافة معلومات زائدة!",
        sections: [
            {
                h: "الفكرة الجوهرية",
                bullets: [
                    "لا يمكن كشف الأخطاء بدون معلومات إضافية!",
                    "إذا أرسلت '101' فقط، كيف يعرف المستقبل أنها صحيحة؟",
                    "الحل: نضيف Redundant Bits (بتات زائدة).",
                    "هذه البتات ليست جزءًا من البيانات الأصلية.",
                    "لكنها تساعد المستقبل في التحقق من صحة البيانات."
                ]
            },
            {
                h: "كيف يعمل Redundancy؟",
                bullets: [
                    "المرسل: يحسب البتات الزائدة ويضيفها للرسالة.",
                    "المستقبل: يستخدم البتات الزائدة للتحقق.",
                    "إذا كانت العلاقة سليمة ← البيانات صحيحة (غالبًا).",
                    "إذا اختلت العلاقة ← يوجد خطأ!",
                    "بعد التحقق: المستقبل يحذف البتات الزائدة."
                ]
            },
            {
                h: "مثال بسيط",
                bullets: [
                    "أرسل الرقم 5 (Binary: 101).",
                    "أضف بت التحقق: 1011 (البت الأخير يجعل عدد الـ1s زوجي).",
                    "المستقبل يتحقق: هل عدد الـ1s زوجي؟",
                    "نعم ← غالبًا سليم. لا ← يوجد خطأ!"
                ]
            }
        ],
        keywords: ["Redundancy", "Redundant Bits", "تكرار", "بتات زائدة", "Parity"]
    },

    {
        page: 4,
        title: "Detection vs Correction — الفرق الجوهري",
        brief: "كشف الخطأ أسهل بكثير من تصحيحه!",
        sections: [
            {
                h: "Error Detection (كشف الأخطاء)",
                bullets: [
                    "السؤال: هل يوجد خطأ؟ نعم أو لا.",
                    "لا نحتاج معرفة عدد البتات التالفة.",
                    "لا نحتاج معرفة موقع الخطأ.",
                    "أسهل وأسرع في التنفيذ.",
                    "يكفي أن نعرف أن شيئًا خاطئًا حدث."
                ]
            },
            {
                h: "Error Correction (تصحيح الأخطاء)",
                bullets: [
                    "السؤال: كم عدد البتات التالفة؟ وأين موقعها؟",
                    "أصعب بكثير من الكشف!",
                    "يحتاج معلومات زائدة أكثر.",
                    "يحتاج خوارزميات أعقد.",
                    "لكنه ضروري في بعض التطبيقات (مثل الأقراص الصلبة)."
                ]
            },
            {
                h: "نقطة مهمة جدًا!",
                bullets: [
                    "خطأ بت واحد وخطأ اندفاع متشابهان في الكشف.",
                    "لكنهما مختلفان تمامًا في التصحيح!",
                    "التصحيح يحتاج معرفة دقيقة بموقع كل خطأ.",
                    "لذلك معظم الشبكات تستخدم: Detection + إعادة الإرسال."
                ]
            }
        ],
        keywords: ["Detection", "Correction", "كشف", "تصحيح", "Retransmission"]
    },

    {
        page: 5,
        title: "Coding — الترميز",
        brief: "كيف نحقق Redundancy عمليًا؟",
        sections: [
            {
                h: "ما معنى Coding؟",
                bullets: [
                    "Coding = إنشاء علاقة رياضية بين البيانات والبتات الزائدة.",
                    "هذه العلاقة يفهمها المرسل والمستقبل.",
                    "المرسل: يحسب البتات الزائدة بناءً على العلاقة.",
                    "المستقبل: يفحص العلاقة — إذا اختلت = خطأ."
                ]
            },
            {
                h: "عوامل قوة أي كود",
                bullets: [
                    "1. نسبة البتات الزائدة: أكثر = كشف أفضل لكن overhead أعلى.",
                    "2. متانة العلاقة الرياضية: علاقة قوية = كشف أكثر أنواع الأخطاء.",
                    "3. سهولة الحساب: مهمة للسرعة والتنفيذ.",
                    "4. القدرة على التصحيح: بعض الأكواد تكشف فقط، وبعضها يصحح."
                ]
            },
            {
                h: "أنواع Coding الرئيسية",
                bullets: [
                    "1. Block Coding: تقسيم البيانات لكتل وإضافة بتات لكل كتلة.",
                    "2. Convolution Coding: أكثر تعقيدًا، خارج نطاق هذا الفصل.",
                    "التركيز في هذه الملزمة: Block Coding."
                ]
            }
        ],
        keywords: ["Coding", "Block Coding", "Convolution", "ترميز", "Overhead"]
    },

    {
        page: 6,
        title: "Block Coding — الفكرة العامة",
        brief: "Datawords و Codewords — ما الفرق؟",
        sections: [
            {
                h: "كيف يعمل Block Coding؟",
                bullets: [
                    "نقسم الرسالة إلى كتل صغيرة تُسمى Datawords.",
                    "كل Dataword طولها k bits (البيانات الأصلية).",
                    "نضيف r bits زائدة لكل Dataword.",
                    "الناتج: Codeword بطول n = k + r bits."
                ]
            },
            {
                h: "الحساب الرياضي",
                bullets: [
                    "عدد Datawords الممكنة = 2^k",
                    "عدد Codewords الممكنة = 2^n",
                    "بما أن n > k، فإن 2^n > 2^k",
                    "إذن: توجد Codewords غير مستخدمة (Invalid)!",
                    "هنا تكمن حيلة كشف الأخطاء!"
                ]
            },
            {
                h: "الفكرة العبقرية",
                bullets: [
                    "نختار فقط 2^k Codewords صحيحة (Valid).",
                    "الباقي (2^n - 2^k) غير صحيحة (Invalid).",
                    "إذا استقبلنا Invalid Codeword ← نعرف أن هناك خطأ!",
                    "المشكلة: إذا تحول Valid إلى Valid آخر ← لا نكتشف الخطأ."
                ]
            }
        ],
        keywords: ["Block Coding", "Dataword", "Codeword", "Valid", "Invalid"]
    },

    {
        page: 7,
        title: "Hamming Distance — مفهوم محوري",
        brief: "كيف نقيس 'المسافة' بين كلمتين؟",
        sections: [
            {
                h: "تعريف Hamming Distance",
                bullets: [
                    "Hamming Distance = عدد البتات المختلفة بين كلمتين بنفس الطول.",
                    "نرمز لها بـ d(x, y) أو d.",
                    "مثال: d(10110, 10011) = 2 (البت 2 و 3 مختلفان).",
                    "مثال: d(000, 111) = 3 (كل البتات مختلفة)."
                ]
            },
            {
                h: "لماذا Hamming Distance مهمة؟",
                bullets: [
                    "المسافة بين ما أُرسل وما استُقبل = عدد الأخطاء!",
                    "إذا أرسلت 101 واستقبلت 111 ← d = 1 ← خطأ واحد.",
                    "كلما زادت المسافة بين Codewords الصحيحة ← كشف أفضل.",
                    "الأخطاء تقرّب الكلمة من كلمة أخرى."
                ]
            },
            {
                h: "حساب Hamming Distance",
                bullets: [
                    "قارن البتات واحدة واحدة.",
                    "احسب عدد المواقع المختلفة.",
                    "أو: XOR الكلمتين، ثم احسب عدد الـ1s في الناتج.",
                    "مثال: 101 XOR 110 = 011 ← عدد الـ1s = 2 ← d = 2."
                ]
            }
        ],
        keywords: ["Hamming Distance", "مسافة هامنج", "XOR", "بتات مختلفة"]
    },

    {
        page: 8,
        title: "Minimum Hamming Distance — d_min",
        brief: "أصغر مسافة تحدد قوة الكود!",
        sections: [
            {
                h: "تعريف d_min",
                bullets: [
                    "d_min = أصغر Hamming Distance بين أي زوج Codewords صحيحة.",
                    "هذا الرقم يحدد قوة الكود في كشف وتصحيح الأخطاء.",
                    "كلما زاد d_min ← الكود أقوى."
                ]
            },
            {
                h: "قاعدة ذهبية — كشف الأخطاء",
                bullets: [
                    "لكشف s أخطاء، نحتاج: d_min ≥ s + 1",
                    "مثال: لكشف خطأ واحد ← d_min ≥ 2",
                    "مثال: لكشف خطأين ← d_min ≥ 3",
                    "السبب: الخطأ يقرّب الكلمة، لكنها تبقى Invalid."
                ]
            },
            {
                h: "قاعدة ذهبية — تصحيح الأخطاء",
                bullets: [
                    "لتصحيح t أخطاء، نحتاج: d_min ≥ 2t + 1",
                    "مثال: لتصحيح خطأ واحد ← d_min ≥ 3",
                    "مثال: لتصحيح خطأين ← d_min ≥ 5",
                    "السبب: الكلمة الخاطئة تبقى أقرب للأصلية من أي Valid أخرى."
                ]
            }
        ],
        keywords: ["d_min", "Minimum Distance", "كشف", "تصحيح", "قاعدة ذهبية"]
    },

    {
        page: 9,
        title: "Parity-Check Code — أبسط كود",
        brief: "إضافة بت واحد للتحقق من الأخطاء.",
        sections: [
            {
                h: "فكرة Parity Check",
                bullets: [
                    "أبسط كود كشف أخطاء على الإطلاق!",
                    "نضيف بت واحد فقط (Parity Bit).",
                    "هذا البت يجعل عدد الـ1s في الكلمة:",
                    "   - زوجي (Even Parity) — الأكثر شيوعًا.",
                    "   - أو فردي (Odd Parity)."
                ]
            },
            {
                h: "مثال Even Parity",
                bullets: [
                    "البيانات: 1011001 (عدد الـ1s = 4 = زوجي).",
                    "Parity Bit = 0 (لأن العدد زوجي أصلًا).",
                    "الكلمة المرسلة: 10110010.",
                    "البيانات: 1011000 (عدد الـ1s = 3 = فردي).",
                    "Parity Bit = 1 (لجعل العدد زوجي).",
                    "الكلمة المرسلة: 10110001."
                ]
            },
            {
                h: "قدرات Parity Check",
                bullets: [
                    "d_min = 2 (أي تغيير يجعل العدد فردي/زوجي).",
                    "يكتشف كل الأخطاء الفردية (1, 3, 5, ...).",
                    "يفشل مع الأخطاء الزوجية (2, 4, 6, ...)!",
                    "لا يستطيع تحديد موقع الخطأ.",
                    "لا يستطيع التصحيح — فقط الكشف."
                ]
            }
        ],
        keywords: ["Parity Check", "Even Parity", "Odd Parity", "بت التحقق"]
    },

    {
        page: 10,
        title: "Cyclic Codes — مقدمة",
        brief: "أكواد خاصة بخاصية الدوران!",
        sections: [
            {
                h: "ما هي Cyclic Codes؟",
                bullets: [
                    "نوع خاص من Linear Block Codes.",
                    "لها خاصية عبقرية: الدوران!",
                    "إذا دُوّرت Codeword صحيحة ← الناتج Codeword صحيحة أيضًا.",
                    "مثال: 1011000 صحيحة ← 0101100 صحيحة ← 0010110 صحيحة..."
                ]
            },
            {
                h: "لماذا هذه الخاصية مفيدة؟",
                bullets: [
                    "تسمح باستخدام القسمة بدل جداول البحث!",
                    "القسمة أسرع وأسهل في التنفيذ.",
                    "تستخدم عمليات XOR البسيطة.",
                    "مناسبة جدًا للتنفيذ في Hardware."
                ]
            },
            {
                h: "أشهر Cyclic Code",
                bullets: [
                    "CRC — Cyclic Redundancy Check.",
                    "الأكثر استخدامًا في الشبكات الحديثة!",
                    "مستخدم في: Ethernet, WiFi, USB, ZIP files, وغيرها."
                ]
            }
        ],
        keywords: ["Cyclic Codes", "Rotation", "دوران", "CRC", "Linear Codes"]
    },

    {
        page: 11,
        title: "CRC — Cyclic Redundancy Check",
        brief: "أهم تقنية كشف أخطاء في الشبكات!",
        sections: [
            {
                h: "ما هو CRC؟",
                bullets: [
                    "Cyclic Redundancy Check — فحص التكرار الدوري.",
                    "أقوى وأشهر تقنية كشف أخطاء في الشبكات.",
                    "يستخدم الرياضيات (Polynomial Division).",
                    "سريع جدًا — يُنفذ في Hardware بسهولة."
                ]
            },
            {
                h: "أين يُستخدم CRC؟",
                bullets: [
                    "Ethernet — كل Frame يحتوي CRC.",
                    "WiFi (802.11) — نفس الفكرة.",
                    "USB — للتحقق من صحة البيانات.",
                    "ملفات ZIP/RAR — للتأكد من سلامة الضغط.",
                    "الأقراص الصلبة — للتحقق من القطاعات."
                ]
            },
            {
                h: "الفكرة الأساسية",
                bullets: [
                    "نمثل البتات كـ Polynomial (كثير حدود).",
                    "نقسم على Generator Polynomial معروف.",
                    "الباقي (Remainder) = Check Bits.",
                    "نضيف الباقي للبيانات الأصلية.",
                    "المستقبل يقسم ويتحقق: باقي = 0 ← سليم."
                ]
            }
        ],
        keywords: ["CRC", "Cyclic Redundancy Check", "Polynomial", "Generator", "Ethernet"]
    },

    {
        page: 12,
        title: "CRC — التشفير (Encoder)",
        brief: "كيف يعمل المرسل؟",
        sections: [
            {
                h: "خطوات CRC Encoding",
                bullets: [
                    "1. أضف أصفار في نهاية البيانات (بعدد درجة Generator - 1).",
                    "2. قسّم الناتج على Generator Polynomial.",
                    "3. استخدم قسمة Modulo-2 (XOR بدل الطرح).",
                    "4. تجاهل خارج القسمة — نحتاج الباقي فقط.",
                    "5. أضف الباقي للبيانات الأصلية = Codeword."
                ]
            },
            {
                h: "مثال عملي",
                bullets: [
                    "البيانات: 1010 (4 bits)",
                    "Generator: 1011 (درجة 3 ← نضيف 3 أصفار).",
                    "البيانات بعد الأصفار: 1010000",
                    "نقسم 1010000 ÷ 1011 باستخدام XOR.",
                    "الباقي: 101 (3 bits).",
                    "Codeword = 1010101 (البيانات + الباقي)."
                ]
            },
            {
                h: "ملاحظة مهمة — قسمة Modulo-2",
                bullets: [
                    "في Modulo-2: الجمع = الطرح = XOR!",
                    "لا يوجد حمل (Carry) أو استعارة (Borrow).",
                    "0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0.",
                    "هذا يجعل العمليات بسيطة وسريعة جدًا."
                ]
            }
        ],
        keywords: ["CRC Encoder", "Modulo-2", "XOR", "Division", "Remainder", "باقي"]
    },

    {
        page: 13,
        title: "CRC — فك التشفير (Decoder)",
        brief: "كيف يتحقق المستقبل من صحة البيانات؟",
        sections: [
            {
                h: "خطوات CRC Decoding",
                bullets: [
                    "1. استقبل الـ Codeword كاملة.",
                    "2. قسّمها على نفس Generator Polynomial.",
                    "3. افحص الباقي (Remainder).",
                    "4. إذا الباقي = 0 ← البيانات سليمة (غالبًا).",
                    "5. إذا الباقي ≠ 0 ← يوجد خطأ!"
                ]
            },
            {
                h: "لماذا الباقي = 0 يعني سليم؟",
                bullets: [
                    "Codeword = البيانات المزاحة + الباقي.",
                    "رياضيًا: Codeword قابلة للقسمة على Generator بدون باقي.",
                    "إذا حدث خطأ ← الكلمة لم تعد قابلة للقسمة بدون باقي.",
                    "لذلك الباقي ≠ 0."
                ]
            },
            {
                h: "ملاحظة — ليس 100% مضمون!",
                bullets: [
                    "هناك احتمال ضئيل جدًا للخطأ غير المكتشف.",
                    "يحدث إذا تحولت الكلمة لـ Codeword صحيحة أخرى.",
                    "الاحتمال ≈ 1/(2^r) حيث r = عدد Check Bits.",
                    "مع CRC-32: الاحتمال ≈ 1 في 4 مليار!"
                ]
            }
        ],
        keywords: ["CRC Decoder", "Remainder", "باقي صفر", "Verification", "تحقق"]
    },

    {
        page: 14,
        title: "تحليل قدرات CRC",
        brief: "ما الذي يكتشفه CRC؟ وما الذي قد يفلت؟",
        sections: [
            {
                h: "الأخطاء التي يكتشفها CRC قطعًا",
                bullets: [
                    "1. كل Single-Bit Errors (أخطاء البت الواحد).",
                    "2. كل Double-Bit Errors (خطأين منفصلين).",
                    "3. كل الأخطاء الفردية العدد (1, 3, 5, ...).",
                    "4. كل Burst Errors بطول ≤ r (عدد Check Bits).",
                    "5. معظم Burst Errors الأطول (باحتمال عالٍ جدًا)."
                ]
            },
            {
                h: "لماذا CRC قوي جدًا؟",
                bullets: [
                    "Generator Polynomial مصمم بعناية.",
                    "يحتوي العامل (x + 1) لكشف الأخطاء الفردية.",
                    "لا يقسم x^t + 1 لأي t صغير.",
                    "يحتوي أكثر من حد واحد.",
                    "هذه الشروط تجعله يكتشف معظم أنماط الأخطاء."
                ]
            },
            {
                h: "Generator Polynomials الشائعة",
                bullets: [
                    "CRC-8: x^8 + x^2 + x + 1 (8 Check Bits).",
                    "CRC-16: x^16 + x^15 + x^2 + 1 (16 Check Bits).",
                    "CRC-32: مستخدم في Ethernet و ZIP (32 Check Bits).",
                    "CRC-32 يكتشف 99.99999998% من الأخطاء!"
                ]
            }
        ],
        keywords: ["CRC Analysis", "Generator Polynomial", "CRC-32", "Burst Error", "Single-Bit"]
    },

    {
        page: 15,
        title: "شروط Generator Polynomial الجيد",
        brief: "كيف نختار Generator قوي؟",
        sections: [
            {
                h: "الشروط الأساسية",
                bullets: [
                    "1. يجب أن يحتوي أكثر من حد واحد.",
                    "2. آخر بت (x^0) يجب أن يكون 1.",
                    "3. يجب ألا يقسم x^t + 1 لأي t ≤ n (طول الكلمة).",
                    "4. يجب أن يحتوي العامل (x + 1) — لكشف الأخطاء الفردية.",
                    "5. كلما زادت درجته ← كشف أفضل لكن overhead أكثر."
                ]
            },
            {
                h: "لماذا هذه الشروط؟",
                bullets: [
                    "الشرط 1: لضمان أن الأخطاء لا تُلغى عند القسمة.",
                    "الشرط 2: لضمان كشف الأخطاء في آخر بت.",
                    "الشرط 3: لكشف بعض أخطاء الاندفاع.",
                    "الشرط 4: لأن (x + 1) يكشف أي عدد فردي من الأخطاء.",
                    "الشرط 5: موازنة بين القوة والكفاءة."
                ]
            },
            {
                h: "أمثلة على Generators القياسية",
                bullets: [
                    "CRC-12: للأنظمة القديمة.",
                    "CRC-16: لـ USB و Modbus.",
                    "CRC-CCITT: للاتصالات اللاسلكية.",
                    "CRC-32: المعيار في Ethernet و ZIP و PNG.",
                    "هذه مختارة بعناية من قِبل خبراء الرياضيات."
                ]
            }
        ],
        keywords: ["Generator Polynomial", "شروط", "CRC-12", "CRC-16", "CRC-CCITT"]
    },

    {
        page: 16,
        title: "تنفيذ CRC في Hardware",
        brief: "لماذا CRC سريع جدًا في التطبيق؟",
        sections: [
            {
                h: "التنفيذ باستخدام Shift Registers",
                bullets: [
                    "CRC يُنفذ بدوائر بسيطة جدًا!",
                    "المكونات: Shift Registers + XOR Gates.",
                    "Shift Register: يخزن البتات ويزيحها.",
                    "XOR Gates: لعمليات القسمة.",
                    "النتيجة: حساب CRC بسرعة الـ Hardware!"
                ]
            },
            {
                h: "لماذا هذا مهم؟",
                bullets: [
                    "السرعة: يُحسب أثناء استقبال البيانات.",
                    "لا يحتاج انتظار كل البيانات — يحسب بالتوازي.",
                    "بسيط: عدد قليل من البوابات المنطقية.",
                    "رخيص: لا يحتاج معالج قوي.",
                    "لهذا CRC موجود في كل كارت شبكة!"
                ]
            },
            {
                h: "التنفيذ في Software",
                bullets: [
                    "ممكن أيضًا باستخدام Lookup Tables.",
                    "جداول محسوبة مسبقًا للسرعة.",
                    "أبطأ من Hardware لكنه مرن أكثر.",
                    "مستخدم في: ZIP, PNG, تطبيقات البرمجيات."
                ]
            }
        ],
        keywords: ["Hardware", "Shift Register", "XOR Gates", "Software", "Lookup Table"]
    },

    {
        page: 17,
        title: "مقارنة تقنيات كشف الأخطاء",
        brief: "Parity vs CRC vs Checksum — أيهما أفضل؟",
        sections: [
            {
                h: "Parity Check",
                bullets: [
                    "المزايا: بسيط جدًا، سريع، overhead قليل (بت واحد).",
                    "العيوب: يكتشف الأخطاء الفردية فقط.",
                    "الاستخدام: ذاكرة RAM، بعض البروتوكولات البسيطة.",
                    "القوة: ضعيف — d_min = 2."
                ]
            },
            {
                h: "Checksum",
                bullets: [
                    "المزايا: أفضل من Parity، سهل الحساب.",
                    "العيوب: لا يكتشف بعض أنماط الأخطاء.",
                    "الاستخدام: IP Header, TCP, UDP.",
                    "القوة: متوسط."
                ]
            },
            {
                h: "CRC (Cyclic Redundancy Check)",
                bullets: [
                    "المزايا: قوي جدًا، يكتشف معظم الأخطاء.",
                    "العيوب: أعقد قليلاً، overhead أكبر.",
                    "الاستخدام: Ethernet, WiFi, USB, ZIP, الأقراص.",
                    "القوة: ممتاز — يكتشف 99.999%+ من الأخطاء مع CRC-32!"
                ]
            }
        ],
        keywords: ["Parity", "Checksum", "CRC", "مقارنة", "Comparison"]
    },

    {
        page: 18,
        title: "الخلاصة — Error Detection and Correction",
        brief: "ما الذي تعلمناه في هذا الفصل؟",
        sections: [
            {
                h: "النقاط الأساسية",
                bullets: [
                    "الأخطاء حتمية في أي وسط نقل — لا مفر منها!",
                    "Redundancy هو المفتاح — نضيف بتات زائدة للتحقق.",
                    "الكشف أسهل من التصحيح — معظم الشبكات تعتمد على إعادة الإرسال.",
                    "Hamming Distance يحدد قوة الكود.",
                    "CRC هو الأقوى والأكثر استخدامًا في الشبكات."
                ]
            },
            {
                h: "القواعد الذهبية للحفظ",
                bullets: [
                    "لكشف s أخطاء: d_min ≥ s + 1",
                    "لتصحيح t أخطاء: d_min ≥ 2t + 1",
                    "Parity: d_min = 2 ← يكتشف خطأ واحد.",
                    "CRC: قوي جدًا ← يكتشف معظم الأخطاء.",
                    "CRC-32 يُستخدم في Ethernet — 32 Check Bits."
                ]
            },
            {
                h: "التطبيق العملي",
                bullets: [
                    "كل Frame في Ethernet يحتوي CRC في نهايته.",
                    "إذا فشل الفحص ← الـ Frame يُحذف ويُطلب إعادة الإرسال.",
                    "هذا يضمن أن البيانات التي تصل صحيحة (بنسبة عالية جدًا).",
                    "بدون هذه التقنيات، الإنترنت لن يعمل!"
                ]
            }
        ],
        keywords: ["خلاصة", "Summary", "Hamming", "CRC", "Ethernet", "قواعد ذهبية"]
    }
];

/* ====== State & Storage ====== */
const LS = {
    theme: "net_global_theme",
    done: "net_ch10_done_pages",
    last: "net_ch10_last_page"
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
