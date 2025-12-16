/* ====== Advanced Exam Data — الاختبار الشامل المتقدم ====== */

const EXAM_DATA = {
    totalPoints: 150,
    duration: 180, // minutes
    sections: {
        A: {
            name: "القسم A - اختيار من متعدد",
            type: "mcq",
            points: 50,
            pointsPerQuestion: 2,
            description: "25 سؤال × 2 درجة — اختر الإجابة الأدق",
            questions: [
                {
                    q: "المقصود بـ <strong>Encapsulation</strong> هو:",
                    options: ["حذف الترويسات", "إضافة ترويسات/Trailer عبر الطبقات", "تغيير الوسط", "التشفير"],
                    correct: 1
                },
                {
                    q: "الـ <strong>Throughput</strong> يختلف عن Bandwidth لأنه:",
                    options: ["أكبر دائمًا", "هو الأداء الفعلي المتحقق", "يقاس بالهرتز فقط", "لا يتأثر بالازدحام"],
                    correct: 1
                },
                {
                    q: "الإشارة <strong>Periodic</strong> تعني:",
                    options: ["تتكرر بنمط ثابت", "لا تتكرر", "رقمية دائمًا", "بلا تردد"],
                    correct: 0
                },
                {
                    q: "العلاقة بين Frequency و Period:",
                    options: ["f = T", "f = 1/T", "T = log(f)", "f = T²"],
                    correct: 1
                },
                {
                    q: "التمثيل في <strong>Frequency Domain</strong> يفيد أكثر في:",
                    options: ["رؤية التغير الزمني فقط", "معرفة مكوّنات التردد وBandwidth", "قياس الطول", "اكتشاف MAC"],
                    correct: 1
                },
                {
                    q: "Bandwidth لإشارة مركبة يساوي:",
                    options: ["f_high + f_low", "f_high − f_low", "1/T", "عدد البتات"],
                    correct: 1
                },
                {
                    q: "زيادة عدد المستويات L في الإشارة الرقمية غالبًا:",
                    options: ["تقلل Bit rate دائمًا", "تزيد bits per symbol لكنها تزيد حساسية الضوضاء", "تمنع الضوضاء تمامًا", "تلغي الحاجة لBandwidth"],
                    correct: 1
                },
                {
                    q: "<strong>Baseband</strong> يعني:",
                    options: ["تضمين على حامل", "إرسال مباشر ضمن قناة low-pass", "إرسال ضوئي فقط", "إرسال بث عام"],
                    correct: 1
                },
                {
                    q: "<strong>Broadband</strong> يعني غالبًا:",
                    options: ["لا يوجد modulation", "channel low-pass فقط", "modulation على carrier", "لا يوجد تردد"],
                    correct: 2
                },
                {
                    q: "أي مما يلي يُعد <strong>Noise</strong> شديد الخطورة على البيانات؟",
                    options: ["Thermal فقط", "Impulse", "Crosstalk فقط", "لا شيء"],
                    correct: 1
                },
                {
                    q: "SNR يُكتب بالديسيبل لأن:",
                    options: ["يجعل الحساب أصعب", "يسهّل تمثيل نسب كبيرة/صغيرة جدًا", "يلغي الضوضاء", "يساوي Bandwidth"],
                    correct: 1
                },
                {
                    q: "قانون Shannon Capacity:",
                    options: ["2B log₂(L)", "B log₂(1+SNR)", "B × SNR", "log₂(B/SNR)"],
                    correct: 1
                },
                {
                    q: "قانون Nyquist (Noiseless):",
                    options: ["B log₂(1+SNR)", "2B log₂(L)", "B/2", "2B/SNR"],
                    correct: 1
                },
                {
                    q: "Latency يتكون من:",
                    options: ["Transmission فقط", "Propagation + Transmission + Queuing + Processing", "Bandwidth فقط", "IP فقط"],
                    correct: 1
                },
                {
                    q: "أفضل وسط ضد EMI:",
                    options: ["UTP", "Coaxial", "Fiber", "زوجي ملتف غير محمي"],
                    correct: 2
                },
                {
                    q: "سبب لفّ Twisted Pair هو:",
                    options: ["للزينة", "تقليل Crosstalk/Noise عبر إلغاء التأثيرات", "زيادة MAC addresses", "جعل التردد ثابتًا"],
                    correct: 1
                },
                {
                    q: "موصل Coaxial الشائع:",
                    options: ["RJ45", "BNC", "SC", "ST"],
                    correct: 1
                },
                {
                    q: "في Data-Link الاتصال يكون:",
                    options: ["End-to-End", "Node-to-Node", "Process-to-Process", "Internet-wide"],
                    correct: 1
                },
                {
                    q: "تقسيم Data-Link إلى DLC وMAC يكون مهمًا لأن:",
                    options: ["MAC يعمل فقط في point-to-point", "MAC ينظم الوصول في الوسط المشترك", "DLC لا يعمل", "IP يغني عن MAC"],
                    correct: 1
                },
                {
                    q: "عنوان Broadcast في Ethernet:",
                    options: ["00:00:00:00:00:00", "FF:FF:FF:FF:FF:FF", "255.255.255.255", "127.0.0.1"],
                    correct: 1
                },
                {
                    q: "ARP وظيفته:",
                    options: ["تحويل MAC إلى IP عبر الإنترنت", "تحويل IP إلى MAC داخل نفس الشبكة المحلية", "تصحيح أخطاء CRC", "تشفير Frames"],
                    correct: 1
                },
                {
                    q: "الخطأ الذي يصيب مجموعة بتات متتالية يسمى:",
                    options: ["Single-bit", "Burst", "Phase", "Delay"],
                    correct: 1
                },
                {
                    q: "CRC يعتمد على:",
                    options: ["جمع عشري", "قسمة Modulo-2 (XOR)", "ضرب عادي", "تشفير AES"],
                    correct: 1
                },
                {
                    q: "CSMA/CD مناسب لـ:",
                    options: ["WiFi", "Ethernet shared medium (قديم/Hub)", "Fiber فقط", "Bluetooth"],
                    correct: 1
                },
                {
                    q: "العنوان 192.168.0.0/16 هو:",
                    options: ["Public", "Private", "Multicast", "Loopback"],
                    correct: 1
                }
            ]
        },
        B: {
            name: "القسم B - صح/خطأ مع التصحيح",
            type: "truefalse",
            points: 20,
            pointsPerQuestion: 2,
            description: "10 عبارات × 2 درجة — صح/خطأ ثم صحّح الخطأ",
            questions: [
                {
                    q: "Throughput دائمًا يساوي Bandwidth.",
                    correct: false,
                    correction: "Throughput هو الأداء الفعلي وغالبًا أقل من Bandwidth بسبب الازدحام والأخطاء"
                },
                {
                    q: "الإشارة الرقمية غالبًا غير دورية.",
                    correct: true,
                    correction: ""
                },
                {
                    q: "زيادة Bandwidth لا تؤثر على Capacity في Shannon.",
                    correct: false,
                    correction: "زيادة Bandwidth تزيد Capacity حسب قانون Shannon: C = B log₂(1+SNR)"
                },
                {
                    q: "Coaxial أكثر حماية من UTP بسبب الـShield.",
                    correct: true,
                    correction: ""
                },
                {
                    q: "Fiber ينقل كهرباء بدل الضوء.",
                    correct: false,
                    correction: "Fiber ينقل الضوء (Light) وليس الكهرباء"
                },
                {
                    q: "في Data-Link يتم بناء Frame من Datagram القادم من Network Layer.",
                    correct: true,
                    correction: ""
                },
                {
                    q: "MAC address لا يتغير من وصلة لأخرى أثناء مرور Packet عبر Routers.",
                    correct: false,
                    correction: "MAC address يتغير عند كل hop/وصلة، بينما IP يبقى ثابتًا"
                },
                {
                    q: "Parity يكتشف كل الأخطاء دائمًا.",
                    correct: false,
                    correction: "Parity يكتشف الأخطاء الفردية فقط ولا يكتشف الأخطاء الزوجية"
                },
                {
                    q: "CSMA/CA يتجنب التصادم بدل اكتشافه.",
                    correct: true,
                    correction: ""
                },
                {
                    q: "/27 يعني أن عدد بتات الشبكة = 27.",
                    correct: true,
                    correction: ""
                }
            ]
        },
        C: {
            name: "القسم C - أكمل الفراغات",
            type: "fillblank",
            points: 15,
            pointsPerQuestion: 1,
            description: "15 فراغ × 1 درجة — اكتب الإجابة الصحيحة",
            questions: [
                { q: "التردد يقاس بوحدة ________.", answer: ["هرتز", "Hz", "Hertz"] },
                { q: "العلاقة: f = ________.", answer: ["1/T", "1/t"] },
                { q: "Bandwidth لإشارة مركبة: B = ________ − ________.", answer: ["f_high - f_low", "fmax-fmin", "f_max - f_min"] },
                { q: "نسبة الإشارة إلى الضوضاء: SNR = Signal/________.", answer: ["Noise", "noise", "ضوضاء"] },
                { q: "SNR(dB) = 10 log₁₀( ________ ).", answer: ["SNR", "P_signal/P_noise", "signal/noise"] },
                { q: "قانون Nyquist: BitRate = ________ × B × log₂(L).", answer: ["2", "٢"] },
                { q: "قانون Shannon: C = B × log₂(1 + ________).", answer: ["SNR", "snr"] },
                { q: "عنوان broadcast في Ethernet هو ________.", answer: ["FF:FF:FF:FF:FF:FF", "ff:ff:ff:ff:ff:ff"] },
                { q: "ARP يحول ________ إلى MAC.", answer: ["IP", "ip", "عنوان IP"] },
                { q: "الخطأ المتتالي يسمى ________ Error.", answer: ["Burst", "burst", "انفجاري"] },
                { q: "CRC يستخدم عمليات ________ بدل القسمة العادية.", answer: ["XOR", "Modulo-2", "modulo-2", "xor"] },
                { q: "في IPv4 الطول = ________ بت.", answer: ["32", "٣٢"] },
                { q: "255.255.255.255 يسمى ________ broadcast.", answer: ["Limited", "limited", "محدود"] },
                { q: "127.0.0.1 يسمى ________.", answer: ["Loopback", "loopback", "localhost"] },
                { q: "عدد العناوين في /n يساوي 2^(________).", answer: ["32-n", "32 - n", "32−n"] }
            ]
        },
        D: {
            name: "القسم D - أسئلة نظرية قصيرة",
            type: "essay",
            points: 25,
            pointsPerQuestion: 5,
            description: "5 أسئلة × 5 درجات — أجب بشكل واضح ومختصر",
            questions: [
                {
                    q: "اشرح الفرق بين: <strong>Analog data vs Digital data</strong> مع مثال لكل واحد.",
                    hint: "تحدث عن طبيعة البيانات والأمثلة العملية"
                },
                {
                    q: "اشرح: <strong>Time domain vs Frequency domain</strong> ولماذا نحتاج الاثنين؟",
                    hint: "ما الذي يظهر في كل تمثيل؟"
                },
                {
                    q: "اذكر وشرح بإيجاز: <strong>Attenuation / Distortion / Noise</strong> (سطرين لكل واحد).",
                    hint: "ما سبب كل منها وتأثيره؟"
                },
                {
                    q: "اذكر وظائف Data-Link Layer الأساسية (على الأقل 5 نقاط).",
                    hint: "Framing, Error detection, Flow control, etc."
                },
                {
                    q: "اشرح الفرق بين <strong>IP address و MAC address</strong> من حيث: (المجال، الثبات، ماذا يحدث عند الراوتر).",
                    hint: "أين يُستخدم كل منهما؟"
                }
            ]
        },
        E: {
            name: "القسم E - تحليل ومقارنة",
            type: "essay",
            points: 20,
            pointsPerQuestion: 10,
            description: "سؤالين × 10 درجات — قارن بالتفصيل",
            questions: [
                {
                    q: "قارن بين <strong>UTP vs Coaxial vs Fiber</strong> من حيث:<br>Bandwidth، التوهين، مقاومة التشويش، التكلفة، الاستخدامات.",
                    hint: "استخدم جدول أو نقاط واضحة"
                },
                {
                    q: "قارن بين <strong>ALOHA / Slotted ALOHA / CSMA / CSMA/CD / CSMA/CA</strong> من حيث:<br>الفكرة، سبب التصادم، كيف تُعالج المشكلة، وأين تُستخدم عمليًا.",
                    hint: "اذكر الكفاءة إن أمكن"
                }
            ]
        },
        F: {
            name: "القسم F - مسائل حسابية",
            type: "calculation",
            points: 50,
            description: "5 مسائل — اكتب القوانين والخطوات بوضوح",
            questions: [
                {
                    id: "F1",
                    title: "Shannon + SNR (10 درجات)",
                    q: `قناة Bandwidth = 4 kHz، و SNR = 24 dB.<br><br>
                    <strong>المطلوب:</strong><br>
                    1. حوّل SNR إلى قيمة خطية.<br>
                    2. احسب Capacity باستخدام Shannon.<br>
                    3. اكتب استنتاجًا: هل رفع Bandwidth أم رفع SNR يفيد أكثر هنا؟ ولماذا (جملة–جملتين).`,
                    points: 10,
                    parts: [
                        { label: "1. SNR Linear", placeholder: "SNR = 10^(24/10) = ..." },
                        { label: "2. Capacity", placeholder: "C = B × log₂(1 + SNR) = ..." },
                        { label: "3. الاستنتاج", placeholder: "..." }
                    ]
                },
                {
                    id: "F2",
                    title: "Nyquist (10 درجات)",
                    q: `قناة <strong>Noiseless</strong> لها Bandwidth = 3 MHz وتستخدم L = 8 مستويات.<br><br>
                    <strong>المطلوب:</strong><br>
                    1. احسب bits per symbol.<br>
                    2. احسب أقصى Bit rate باستخدام Nyquist.<br>
                    3. ماذا يحدث لو زادت L إلى 16 من ناحية (السرعة/الحساسية للضوضاء)؟`,
                    points: 10,
                    parts: [
                        { label: "1. Bits per symbol", placeholder: "bits = log₂(L) = log₂(8) = ..." },
                        { label: "2. Max Bit Rate", placeholder: "BitRate = 2 × B × log₂(L) = ..." },
                        { label: "3. تأثير L=16", placeholder: "..." }
                    ]
                },
                {
                    id: "F3",
                    title: "Latency (10 درجات)",
                    q: `رسالة حجمها 8 Mbits تُرسل على خط سرعته 4 Mbps، والمسافة 2000 km، وسرعة الانتشار 2×10⁸ m/s، وQueuing+Processing = 15 ms.<br><br>
                    <strong>المطلوب:</strong><br>
                    1. Transmission time<br>
                    2. Propagation time<br>
                    3. Total latency`,
                    points: 10,
                    parts: [
                        { label: "1. Transmission Time", placeholder: "T_trans = L/B = 8Mb / 4Mbps = ..." },
                        { label: "2. Propagation Time", placeholder: "T_prop = d/v = ..." },
                        { label: "3. Total Latency", placeholder: "Total = T_trans + T_prop + 15ms = ..." }
                    ]
                },
                {
                    id: "F4",
                    title: "CRC (10 درجات)",
                    q: `افترض Dataword = <code>1101011011</code><br>
                    و Generator = <code>10011</code><br><br>
                    <strong>المطلوب:</strong><br>
                    1. أضف الأصفار المناسبة.<br>
                    2. نفّذ القسمة Mod-2 (XOR) واحسب remainder.<br>
                    3. اكتب Codeword النهائي.`,
                    points: 10,
                    parts: [
                        { label: "1. Dataword + Zeros", placeholder: "1101011011 + 0000 = ..." },
                        { label: "2. Remainder (XOR)", placeholder: "اكتب خطوات القسمة والباقي..." },
                        { label: "3. Codeword", placeholder: "Dataword + Remainder = ..." }
                    ]
                },
                {
                    id: "F5",
                    title: "IPv4 Subnetting (10 درجات)",
                    q: `أُعطي IP: <code>172.16.35.200/20</code><br><br>
                    <strong>المطلوب:</strong><br>
                    1. اكتب Subnet mask.<br>
                    2. احسب Network address.<br>
                    3. احسب Broadcast address.<br>
                    4. احسب usable range (أول/آخر عنوان صالح).<br>
                    5. احسب عدد الأجهزة الممكنة.`,
                    points: 10,
                    parts: [
                        { label: "1. Subnet Mask", placeholder: "255.255.?.0" },
                        { label: "2. Network Address", placeholder: "172.16.?.0" },
                        { label: "3. Broadcast Address", placeholder: "172.16.?.255" },
                        { label: "4. Usable Range", placeholder: "First: ... — Last: ..." },
                        { label: "5. عدد الأجهزة", placeholder: "2^? - 2 = ..." }
                    ]
                }
            ]
        },
        G: {
            name: "القسم G - سيناريو واقعي",
            type: "scenario",
            points: 20,
            description: "سؤال واحد شامل (20 درجة)",
            questions: [
                {
                    q: `لديك جهاز A يريد إرسال بيانات إلى جهاز B عبر راوترين R1 و R2.<br><br>
                    • A في شبكة <code>192.168.1.0/24</code><br>
                    • B في شبكة <code>10.10.0.0/16</code><br>
                    افترض أن الـMAC يتغير عند كل وصلة.<br><br>
                    <strong>المطلوب:</strong><br>
                    1. اشرح "ما الذي يتغير" وما الذي "لا يتغير" أثناء انتقال البيانات من A إلى B بالنسبة لـ:<br>
                       &nbsp;&nbsp;• IP header<br>
                       &nbsp;&nbsp;• MAC header<br>
                       &nbsp;&nbsp;• Frame vs Packet<br><br>
                    2. اشرح خطوة ARP في شبكة A: متى نحتاج ARP؟ ولماذا يكون broadcast؟<br><br>
                    3. لو حدث خطأ في Frame بين A و R1، من المسؤول غالبًا عن اكتشافه: Data-Link أم Network؟ ولماذا؟`,
                    parts: [
                        { label: "1. ما يتغير / لا يتغير", placeholder: "IP: ...\nMAC: ...\nFrame vs Packet: ..." },
                        { label: "2. خطوة ARP", placeholder: "متى ولماذا broadcast..." },
                        { label: "3. مسؤولية اكتشاف الخطأ", placeholder: "Data-Link لأن..." }
                    ]
                }
            ]
        }
    }
};

/* ====== State ====== */
const LS = {
    theme: "net_global_theme",
    examAnswers: "net_advanced_exam_answers",
    examScores: "net_advanced_exam_scores"
};

let state = {
    currentSection: "A",
    answers: {},
    scores: {},
    timerInterval: null,
    remainingTime: EXAM_DATA.duration * 60, // seconds
    examStarted: false,
    examSubmitted: false
};

/* ====== Elements ====== */
const el = {
    themeBtn: document.getElementById("themeBtn"),
    menuBtn: document.getElementById("menuBtn"),
    drawer: document.getElementById("drawer"),
    drawerOverlay: document.getElementById("drawerOverlay"),
    closeDrawer: document.getElementById("closeDrawer"),
    drawerThemeBtn: document.getElementById("drawerThemeBtn"),
    examIntro: document.getElementById("examIntro"),
    examContainer: document.getElementById("examContainer"),
    examResults: document.getElementById("examResults"),
    startExam: document.getElementById("startExam"),
    examTimer: document.getElementById("examTimer"),
    currentSection: document.getElementById("currentSection"),
    progressPercent: document.getElementById("progressPercent"),
    examProgressFill: document.getElementById("examProgressFill"),
    currentScore: document.getElementById("currentScore"),
    questionsContainer: document.getElementById("questionsContainer"),
    prevSection: document.getElementById("prevSection"),
    nextSection: document.getElementById("nextSection"),
    submitExam: document.getElementById("submitExam"),
    sectionNavBtns: document.querySelectorAll(".section-nav-btn"),
    finalScore: document.getElementById("finalScore"),
    finalPercentage: document.getElementById("finalPercentage"),
    resultMessage: document.getElementById("resultMessage"),
    resultsBadge: document.getElementById("resultsBadge"),
    sectionScores: document.getElementById("sectionScores"),
    scoreRing: document.getElementById("scoreRing"),
    reviewAnswers: document.getElementById("reviewAnswers"),
    retakeExam: document.getElementById("retakeExam")
};

/* ====== Utility Functions ====== */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

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

/* ====== Timer ====== */
function startTimer() {
    state.timerInterval = setInterval(() => {
        state.remainingTime--;
        el.examTimer.textContent = formatTime(state.remainingTime);

        // Warning colors
        if (state.remainingTime <= 300) { // 5 minutes
            el.examTimer.style.color = "#ef4444";
            el.examTimer.style.animation = "pulse 1s infinite";
        } else if (state.remainingTime <= 900) { // 15 minutes
            el.examTimer.style.color = "#f59e0b";
        }

        if (state.remainingTime <= 0) {
            clearInterval(state.timerInterval);
            submitExam();
        }
    }, 1000);
}

function stopTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
    }
}

/* ====== Start Exam ====== */
function startExam() {
    state.examStarted = true;
    state.answers = {};
    state.scores = {};
    state.remainingTime = EXAM_DATA.duration * 60;

    el.examIntro.style.display = "none";
    el.examContainer.style.display = "block";
    el.examResults.style.display = "none";

    startTimer();
    renderSection("A");
    updateProgress();
}

/* ====== Render Section ====== */
function renderSection(sectionId) {
    state.currentSection = sectionId;
    const section = EXAM_DATA.sections[sectionId];

    // Update nav buttons
    el.sectionNavBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.section === sectionId) {
            btn.classList.add("active");
        }
    });

    // Update section label
    el.currentSection.textContent = section.name.split(" - ")[0];

    // Update navigation buttons
    const sectionKeys = Object.keys(EXAM_DATA.sections);
    const currentIndex = sectionKeys.indexOf(sectionId);
    el.prevSection.disabled = currentIndex === 0;

    if (currentIndex === sectionKeys.length - 1) {
        el.nextSection.style.display = "none";
        el.submitExam.style.display = "flex";
    } else {
        el.nextSection.style.display = "flex";
        el.submitExam.style.display = "none";
    }

    // Render questions
    let html = `
        <div class="section-header">
            <div class="section-icon">${sectionId}</div>
            <div class="section-info">
                <h2>${section.name}</h2>
                <div class="section-meta">
                    <span>📝 ${section.questions.length} ${section.type === "calculation" ? "مسألة" : "سؤال"}</span>
                    <span>⭐ ${section.points} درجة</span>
                </div>
            </div>
        </div>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">${section.description}</p>
    `;

    switch (section.type) {
        case "mcq":
            html += renderMCQSection(section, sectionId);
            break;
        case "truefalse":
            html += renderTrueFalseSection(section, sectionId);
            break;
        case "fillblank":
            html += renderFillBlankSection(section, sectionId);
            break;
        case "essay":
            html += renderEssaySection(section, sectionId);
            break;
        case "calculation":
            html += renderCalculationSection(section, sectionId);
            break;
        case "scenario":
            html += renderScenarioSection(section, sectionId);
            break;
    }

    el.questionsContainer.innerHTML = html;

    // Restore saved answers
    restoreAnswers(sectionId);

    // Add event listeners
    attachEventListeners(sectionId);

    // Scroll to top
    el.questionsContainer.scrollTop = 0;
}

/* ====== Render MCQ Section ====== */
function renderMCQSection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        const answered = state.answers[`${sectionId}_${i}`] !== undefined;
        html += `
            <div class="question-card ${answered ? 'answered' : ''}" data-question="${i}">
                <div class="question-number">${i + 1}</div>
                <div class="question-text">${q.q}</div>
                <div class="mcq-options">
                    ${q.options.map((opt, j) => `
                        <div class="mcq-option" data-question="${i}" data-option="${j}">
                            <span class="option-letter">${String.fromCharCode(65 + j)}</span>
                            <span class="option-text">${opt}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    });
    return html;
}

/* ====== Render True/False Section ====== */
function renderTrueFalseSection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        const answered = state.answers[`${sectionId}_${i}`] !== undefined;
        html += `
            <div class="question-card ${answered ? 'answered' : ''}" data-question="${i}">
                <div class="question-number">${i + 1}</div>
                <div class="question-text">${q.q}</div>
                <div class="tf-options">
                    <div class="tf-option true" data-question="${i}" data-value="true">✓ صح</div>
                    <div class="tf-option false" data-question="${i}" data-value="false">✗ خطأ</div>
                </div>
                <input type="text" class="correction-input" data-question="${i}" 
                    placeholder="إذا كانت الإجابة خطأ، اكتب التصحيح هنا..." />
            </div>
        `;
    });
    return html;
}

/* ====== Render Fill Blank Section ====== */
function renderFillBlankSection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        const answered = state.answers[`${sectionId}_${i}`] !== undefined;
        html += `
            <div class="question-card ${answered ? 'answered' : ''}" data-question="${i}">
                <div class="question-number">${i + 1}</div>
                <div class="question-text">${q.q.replace("________", `<input type="text" class="blank-input" data-question="${i}" placeholder="أكمل..." />`)}</div>
            </div>
        `;
    });
    return html;
}

/* ====== Render Essay Section ====== */
function renderEssaySection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        const answered = state.answers[`${sectionId}_${i}`];
        html += `
            <div class="question-card ${answered ? 'answered' : ''}" data-question="${i}">
                <div class="question-number">${i + 1}</div>
                <div class="question-text">${q.q}</div>
                ${q.hint ? `<p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 16px;">💡 تلميح: ${q.hint}</p>` : ""}
                <textarea class="essay-textarea" data-question="${i}" placeholder="اكتب إجابتك هنا...">${answered || ""}</textarea>
            </div>
        `;
    });
    return html;
}

/* ====== Render Calculation Section ====== */
function renderCalculationSection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        html += `
            <div class="question-card" data-question="${i}">
                <div class="question-number">${q.id}</div>
                <h3 style="color: var(--primary-light); margin-bottom: 12px;">${q.title}</h3>
                <div class="question-text">${q.q}</div>
                <div class="calculation-section">
                    ${q.parts.map((part, j) => `
                        <div style="margin-bottom: 16px;">
                            <div class="calc-label">${part.label}</div>
                            <input type="text" class="calc-input" data-question="${i}" data-part="${j}" placeholder="${part.placeholder}" />
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    });
    return html;
}

/* ====== Render Scenario Section ====== */
function renderScenarioSection(section, sectionId) {
    let html = "";
    section.questions.forEach((q, i) => {
        html += `
            <div class="question-card" data-question="${i}">
                <div class="question-number">G</div>
                <div class="question-text">${q.q}</div>
                ${q.parts.map((part, j) => `
                    <div class="calculation-section" style="margin-top: 20px;">
                        <div class="calc-label">${part.label}</div>
                        <textarea class="essay-textarea" data-question="${i}" data-part="${j}" placeholder="${part.placeholder}" style="min-height: 120px;"></textarea>
                    </div>
                `).join("")}
            </div>
        `;
    });
    return html;
}

/* ====== Attach Event Listeners ====== */
function attachEventListeners(sectionId) {
    const section = EXAM_DATA.sections[sectionId];

    switch (section.type) {
        case "mcq":
            document.querySelectorAll(".mcq-option").forEach(opt => {
                opt.addEventListener("click", function () {
                    const qIndex = this.dataset.question;
                    const optIndex = parseInt(this.dataset.option);

                    // Remove selected from siblings
                    document.querySelectorAll(`.mcq-option[data-question="${qIndex}"]`).forEach(o => {
                        o.classList.remove("selected");
                    });

                    // Mark selected
                    this.classList.add("selected");

                    // Save answer
                    state.answers[`${sectionId}_${qIndex}`] = optIndex;

                    // Mark question as answered
                    document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.add("answered");

                    updateProgress();
                });
            });
            break;

        case "truefalse":
            document.querySelectorAll(".tf-option").forEach(opt => {
                opt.addEventListener("click", function () {
                    const qIndex = this.dataset.question;
                    const value = this.dataset.value === "true";

                    // Remove selected from siblings
                    document.querySelectorAll(`.tf-option[data-question="${qIndex}"]`).forEach(o => {
                        o.classList.remove("selected");
                    });

                    this.classList.add("selected");

                    // Save answer
                    if (!state.answers[`${sectionId}_${qIndex}`]) {
                        state.answers[`${sectionId}_${qIndex}`] = {};
                    }
                    state.answers[`${sectionId}_${qIndex}`].value = value;

                    document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.add("answered");
                    updateProgress();
                });
            });

            document.querySelectorAll(".correction-input").forEach(input => {
                input.addEventListener("input", function () {
                    const qIndex = this.dataset.question;
                    if (!state.answers[`${sectionId}_${qIndex}`]) {
                        state.answers[`${sectionId}_${qIndex}`] = {};
                    }
                    state.answers[`${sectionId}_${qIndex}`].correction = this.value;
                });
            });
            break;

        case "fillblank":
            document.querySelectorAll(".blank-input").forEach(input => {
                input.addEventListener("input", function () {
                    const qIndex = this.dataset.question;
                    state.answers[`${sectionId}_${qIndex}`] = this.value;

                    if (this.value.trim()) {
                        this.classList.add("filled");
                        document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.add("answered");
                    } else {
                        this.classList.remove("filled");
                        document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.remove("answered");
                    }
                    updateProgress();
                });
            });
            break;

        case "essay":
            document.querySelectorAll(".essay-textarea").forEach(textarea => {
                textarea.addEventListener("input", function () {
                    const qIndex = this.dataset.question;
                    state.answers[`${sectionId}_${qIndex}`] = this.value;

                    if (this.value.trim().length > 20) {
                        document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.add("answered");
                    } else {
                        document.querySelector(`.question-card[data-question="${qIndex}"]`).classList.remove("answered");
                    }
                    updateProgress();
                });
            });
            break;

        case "calculation":
        case "scenario":
            document.querySelectorAll(".calc-input, .essay-textarea[data-part]").forEach(input => {
                input.addEventListener("input", function () {
                    const qIndex = this.dataset.question;
                    const partIndex = this.dataset.part;

                    if (!state.answers[`${sectionId}_${qIndex}`]) {
                        state.answers[`${sectionId}_${qIndex}`] = {};
                    }
                    state.answers[`${sectionId}_${qIndex}`][`part_${partIndex}`] = this.value;
                    updateProgress();
                });
            });
            break;
    }
}

/* ====== Restore Answers ====== */
function restoreAnswers(sectionId) {
    const section = EXAM_DATA.sections[sectionId];

    switch (section.type) {
        case "mcq":
            Object.keys(state.answers).forEach(key => {
                if (key.startsWith(`${sectionId}_`)) {
                    const qIndex = key.split("_")[1];
                    const optIndex = state.answers[key];
                    const opt = document.querySelector(`.mcq-option[data-question="${qIndex}"][data-option="${optIndex}"]`);
                    if (opt) opt.classList.add("selected");
                }
            });
            break;

        case "truefalse":
            Object.keys(state.answers).forEach(key => {
                if (key.startsWith(`${sectionId}_`)) {
                    const qIndex = key.split("_")[1];
                    const answer = state.answers[key];
                    if (answer && answer.value !== undefined) {
                        const opt = document.querySelector(`.tf-option[data-question="${qIndex}"][data-value="${answer.value}"]`);
                        if (opt) opt.classList.add("selected");
                    }
                    if (answer && answer.correction) {
                        const input = document.querySelector(`.correction-input[data-question="${qIndex}"]`);
                        if (input) input.value = answer.correction;
                    }
                }
            });
            break;

        case "fillblank":
            Object.keys(state.answers).forEach(key => {
                if (key.startsWith(`${sectionId}_`)) {
                    const qIndex = key.split("_")[1];
                    const input = document.querySelector(`.blank-input[data-question="${qIndex}"]`);
                    if (input) {
                        input.value = state.answers[key];
                        if (state.answers[key]) input.classList.add("filled");
                    }
                }
            });
            break;

        case "essay":
            Object.keys(state.answers).forEach(key => {
                if (key.startsWith(`${sectionId}_`)) {
                    const qIndex = key.split("_")[1];
                    const textarea = document.querySelector(`.essay-textarea[data-question="${qIndex}"]`);
                    if (textarea) textarea.value = state.answers[key];
                }
            });
            break;

        case "calculation":
        case "scenario":
            Object.keys(state.answers).forEach(key => {
                if (key.startsWith(`${sectionId}_`)) {
                    const qIndex = key.split("_")[1];
                    const answer = state.answers[key];
                    if (answer && typeof answer === "object") {
                        Object.keys(answer).forEach(partKey => {
                            const partIndex = partKey.split("_")[1];
                            const input = document.querySelector(`[data-question="${qIndex}"][data-part="${partIndex}"]`);
                            if (input) input.value = answer[partKey];
                        });
                    }
                }
            });
            break;
    }
}

/* ====== Update Progress ====== */
function updateProgress() {
    let totalQuestions = 0;
    let answeredQuestions = 0;

    Object.keys(EXAM_DATA.sections).forEach(sectionId => {
        const section = EXAM_DATA.sections[sectionId];
        totalQuestions += section.questions.length;

        section.questions.forEach((q, i) => {
            const answer = state.answers[`${sectionId}_${i}`];
            if (answer !== undefined && answer !== "") {
                if (typeof answer === "object") {
                    if (answer.value !== undefined || Object.keys(answer).length > 0) {
                        answeredQuestions++;
                    }
                } else {
                    answeredQuestions++;
                }
            }
        });
    });

    const percent = Math.round((answeredQuestions / totalQuestions) * 100);
    el.progressPercent.textContent = `${percent}%`;
    el.examProgressFill.style.width = `${percent}%`;

    // Update section nav buttons
    el.sectionNavBtns.forEach(btn => {
        const sectionId = btn.dataset.section;
        const section = EXAM_DATA.sections[sectionId];
        let sectionAnswered = 0;

        section.questions.forEach((q, i) => {
            if (state.answers[`${sectionId}_${i}`]) sectionAnswered++;
        });

        if (sectionAnswered > 0) {
            btn.classList.add("has-answers");
        }
        if (sectionAnswered === section.questions.length) {
            btn.classList.add("completed");
        }
    });
}

/* ====== Calculate Score ====== */
function calculateScore() {
    let totalScore = 0;

    // Section A - MCQ
    const sectionA = EXAM_DATA.sections.A;
    let scoreA = 0;
    sectionA.questions.forEach((q, i) => {
        if (state.answers[`A_${i}`] === q.correct) {
            scoreA += sectionA.pointsPerQuestion;
        }
    });
    state.scores.A = { earned: scoreA, total: sectionA.points };
    totalScore += scoreA;

    // Section B - True/False (simplified - just check the T/F part)
    const sectionB = EXAM_DATA.sections.B;
    let scoreB = 0;
    sectionB.questions.forEach((q, i) => {
        const answer = state.answers[`B_${i}`];
        if (answer && answer.value === q.correct) {
            scoreB += 1; // 1 point for correct T/F
            // Could add another point for correction if needed
            if (q.correct === false && answer.correction && answer.correction.length > 5) {
                scoreB += 1;
            } else if (q.correct === true) {
                scoreB += 1;
            }
        }
    });
    state.scores.B = { earned: scoreB, total: sectionB.points };
    totalScore += scoreB;

    // Section C - Fill Blank
    const sectionC = EXAM_DATA.sections.C;
    let scoreC = 0;
    sectionC.questions.forEach((q, i) => {
        const answer = state.answers[`C_${i}`];
        if (answer && q.answer.some(a =>
            answer.toLowerCase().trim().includes(a.toLowerCase()) ||
            a.toLowerCase().includes(answer.toLowerCase().trim())
        )) {
            scoreC += sectionC.pointsPerQuestion;
        }
    });
    state.scores.C = { earned: scoreC, total: sectionC.points };
    totalScore += scoreC;

    // Sections D, E, F, G - Essay/Calculation (give partial credit based on answer length)
    ["D", "E", "F", "G"].forEach(sectionId => {
        const section = EXAM_DATA.sections[sectionId];
        let sectionScore = 0;

        section.questions.forEach((q, i) => {
            const answer = state.answers[`${sectionId}_${i}`];
            const pointsPerQ = section.pointsPerQuestion || (q.points ? q.points : section.points / section.questions.length);

            if (answer) {
                if (typeof answer === "object") {
                    // For calculation/scenario with parts
                    const partAnswers = Object.values(answer).filter(v => v && v.length > 5);
                    const totalParts = q.parts ? q.parts.length : 3;
                    sectionScore += (partAnswers.length / totalParts) * pointsPerQ;
                } else if (answer.length > 30) {
                    // Give partial credit based on answer length
                    if (answer.length > 200) {
                        sectionScore += pointsPerQ;
                    } else if (answer.length > 100) {
                        sectionScore += pointsPerQ * 0.8;
                    } else if (answer.length > 50) {
                        sectionScore += pointsPerQ * 0.5;
                    } else {
                        sectionScore += pointsPerQ * 0.3;
                    }
                }
            }
        });

        state.scores[sectionId] = { earned: Math.round(sectionScore), total: section.points };
        totalScore += Math.round(sectionScore);
    });

    return Math.round(totalScore);
}

/* ====== Submit Exam ====== */
function submitExam() {
    stopTimer();
    state.examSubmitted = true;

    const totalScore = calculateScore();
    const percentage = Math.round((totalScore / EXAM_DATA.totalPoints) * 100);

    // Save to localStorage
    localStorage.setItem(LS.examScores, JSON.stringify({
        score: totalScore,
        percentage: percentage,
        scores: state.scores,
        timestamp: Date.now()
    }));

    // Show results
    el.examContainer.style.display = "none";
    el.examResults.style.display = "block";

    // Animate score
    el.finalScore.textContent = "0";
    el.finalPercentage.textContent = "0%";

    // Determine badge and message
    let badge, message;
    if (percentage >= 90) {
        badge = "🏆";
        message = "ممتاز! أداء استثنائي!";
    } else if (percentage >= 80) {
        badge = "🥇";
        message = "رائع جداً! عمل متميز!";
    } else if (percentage >= 70) {
        badge = "🥈";
        message = "جيد جداً! استمر في التقدم!";
    } else if (percentage >= 60) {
        badge = "🥉";
        message = "جيد! لكن راجع المادة أكثر";
    } else if (percentage >= 50) {
        badge = "📚";
        message = "تحتاج مراجعة! لا تستسلم!";
    } else {
        badge = "💪";
        message = "حاول مرة أخرى! المثابرة مفتاح النجاح!";
    }

    el.resultsBadge.textContent = badge;
    el.resultMessage.textContent = message;

    // Animate score number
    let currentScore = 0;
    const scoreInterval = setInterval(() => {
        currentScore++;
        el.finalScore.textContent = currentScore;
        el.finalPercentage.textContent = Math.round((currentScore / EXAM_DATA.totalPoints) * 100) + "%";

        if (currentScore >= totalScore) {
            clearInterval(scoreInterval);
        }
    }, 20);

    // Animate ring
    setTimeout(() => {
        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (percentage / 100) * circumference;
        el.scoreRing.style.strokeDashoffset = offset;
    }, 100);

    // Render section scores
    renderSectionScores();
}

/* ====== Render Section Scores ====== */
function renderSectionScores() {
    let html = "";
    Object.keys(state.scores).forEach(sectionId => {
        const score = state.scores[sectionId];
        const section = EXAM_DATA.sections[sectionId];
        html += `
            <div class="section-score-item">
                <div class="section-score-name">
                    <span class="section-score-letter">${sectionId}</span>
                    <span>${section.name.split(" - ")[1] || section.name}</span>
                </div>
                <div class="section-score-value">${score.earned}/${score.total}</div>
            </div>
        `;
    });
    el.sectionScores.innerHTML = html;
}

/* ====== Navigation ====== */
function goToNextSection() {
    const sectionKeys = Object.keys(EXAM_DATA.sections);
    const currentIndex = sectionKeys.indexOf(state.currentSection);
    if (currentIndex < sectionKeys.length - 1) {
        renderSection(sectionKeys[currentIndex + 1]);
    }
}

function goToPrevSection() {
    const sectionKeys = Object.keys(EXAM_DATA.sections);
    const currentIndex = sectionKeys.indexOf(state.currentSection);
    if (currentIndex > 0) {
        renderSection(sectionKeys[currentIndex - 1]);
    }
}

/* ====== Retake Exam ====== */
function retakeExam() {
    state.answers = {};
    state.scores = {};
    state.remainingTime = EXAM_DATA.duration * 60;
    state.examSubmitted = false;

    el.examResults.style.display = "none";
    el.examIntro.style.display = "block";

    // Reset nav buttons
    el.sectionNavBtns.forEach(btn => {
        btn.classList.remove("active", "completed", "has-answers");
    });
}

/* ====== Initialize ====== */
function init() {
    initTheme();

    // Drawer events
    if (el.menuBtn) el.menuBtn.addEventListener("click", openDrawer);
    if (el.closeDrawer) el.closeDrawer.addEventListener("click", closeDrawer);
    if (el.drawerOverlay) {
        el.drawerOverlay.addEventListener("click", (e) => {
            if (e.target === el.drawerOverlay) closeDrawer();
        });
    }

    // Theme toggle
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

    // Exam events
    if (el.startExam) el.startExam.addEventListener("click", startExam);
    if (el.nextSection) el.nextSection.addEventListener("click", goToNextSection);
    if (el.prevSection) el.prevSection.addEventListener("click", goToPrevSection);
    if (el.submitExam) el.submitExam.addEventListener("click", () => {
        if (confirm("هل أنت متأكد من تسليم الاختبار؟\nلن تتمكن من تعديل إجاباتك بعد التسليم.")) {
            submitExam();
        }
    });
    if (el.retakeExam) el.retakeExam.addEventListener("click", retakeExam);
    if (el.reviewAnswers) {
        el.reviewAnswers.addEventListener("click", () => {
            alert("ميزة مراجعة الإجابات قيد التطوير.\nستتمكن قريباً من مراجعة إجاباتك والإجابات الصحيحة.");
        });
    }

    // Section nav buttons
    el.sectionNavBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (state.examStarted && !state.examSubmitted) {
                renderSection(btn.dataset.section);
            }
        });
    });

    // Add SVG gradient definition
    const svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svgDefs.innerHTML = `
        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#6366f1"/>
            <stop offset="50%" style="stop-color:#06b6d4"/>
            <stop offset="100%" style="stop-color:#10b981"/>
        </linearGradient>
    `;
    document.querySelector(".score-ring")?.appendChild(svgDefs);
}

// Start
init();
