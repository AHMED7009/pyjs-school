const pathData = {
    'Python': {
        lessons: [
            { 
                title: "مقدمة في بايثون ودالة الطباعة", 
                detailed: "لغة بايثون هي لغة برمجة عالية المستوى تم إنشاؤها بواسطة جيدو فان روسوم وتم إصدارها لأول مرة في عام 1991. تتميز بساطة كتابتها وسهولة قراءتها مما يجعلها تشبه اللغة الإنجليزية بشكل كبير. تعتبر لغة بايثون اليوم هي اللغة المفضلة لمجالات الذكاء الاصطناعي، وتحليل البيانات، والبرمجة العلمية. دالة print() هي الأداة الأساسية التي نستخدمها للتواصل مع البرنامج وإظهار النتائج على الشاشة. يمكن لهذه الدالة طباعة نصوص، أرقام، أو حتى نتائج عمليات حسابية معقدة. إن تعلم هذه الدالة هو الخطوة الأولى في بناء أي تطبيق برمجي لأنها تساعد المبرمج على تتبع حالة برنامجه وفهم كيفية عمل الكود في كل خطوة.",
                summary: "بايثون لغة سهلة وقوية، ودالة print هي وسيلتنا لإخراج البيانات للمستخدم أو للكونسول.",
                code: 'print("Hello World!")\nprint(5 + 5)',
                output: 'Hello World!\n10'
            },
            // درس المتغيرات في بايثون
            { 
                title: "المتغيرات وأنواع البيانات الأساسية", 
                detailed: "المتغيرات في بايثون هي عبارة عن أسماء تُستخدم لتخزين القيم في ذاكرة الحاسوب للرجوع إليها لاحقاً. ما يميز بايثون هو أنها لغة ذات كتابة ديناميكية (Dynamic Typing)، مما يعني أنك لا تحتاج لتحديد نوع المتغير يدوياً مثل لغة C++ أو Java. عندما تكتب x = 5، تدرك بايثون تلقائياً أن x هو عدد صحيح (Integer). هناك أنواع بيانات أساسية يجب على كل مبرمج إتقانها: النصوص (Strings) التي تُحاط بعلامات تنصيص، الأعداد الصحيحة (Integers)، الأعداد العشرية (Floats)، والقيم المنطقية (Booleans) التي تكون إما True أو False. إدارة المتغيرات بشكل صحيح هي حجر الأساس لكتابة كود نظيف، حيث يجب اختيار أسماء معبرة تصف محتوى المتغير لتسهيل عملية قراءة الكود وتطويره من قبل مبرمجين آخرين.",
                summary: "المتغيرات هي مخازن للبيانات، وبايثون تحدد نوع البيانات تلقائياً بناءً على القيمة التي تضعها فيها.",
                code: 'name = "PyJS User"\nage = 25\nheight = 1.75\nis_student = True\nprint(name, age, is_student)',
                output: 'PyJS User 25 True'
            },
            { 
                title: "المتغيرات وأنواع البيانات", 
                detailed: "المتغيرات في بايثون تعمل كحاويات أو مخازن للقيم والمعلومات. ما يميز بايثون هو أنها لغة 'ديناميكية النوع'، وهذا يعني أنك لست مضطراً لتحديد نوع البيانات مسبقاً (مثل int أو string)، فالمفسر يفهم النوع من القيمة المسندة. هناك أنواع أساسية مثل الأعداد الصحيحة (Integers)، الأرقام العشرية (Floats)، والنصوص (Strings). عند تسمية المتغيرات يجب مراعاة أن تبدأ بحرف أو شرطة سفلية، وأن تكون الأسماء معبرة عن المحتوى لتسهيل قراءة الكود لاحقاً. يمكن تغيير قيمة المتغير ونوعه في أي وقت خلال تنفيذ البرنامج، مما يمنح المبرمج مرونة عالية جداً في التعامل مع البيانات المتغيرة باستمرار.",
                summary: "المتغيرات مخازن للقيم، وبايثون تحدد نوعها تلقائياً بناءً على القيمة التي تضعها بداخلها.",
                code: 'name = "Python"\nversion = 3.10\nprint(name + " version: " + str(version))',
                output: 'Python version: 3.10'
            },
            // يمكنك نسخ هذه الأجزاء ووضعها داخل مصفوفة lessonsData في ملف script.js
            { 
                title: "درس بايثون: القوائم (Lists) والتعامل مع البيانات المتسلسلة", 
                detailed: "تُعد القوائم في بايثون من أكثر هياكل البيانات استخداماً وأهمية على الإطلاق، فهي تتيح لك تخزين مجموعة من العناصر في متغير واحد. تتميز القوائم بأنها 'مرتبة' أي أن كل عنصر له مكان محدد (Index) يبدأ من الصفر، و'قابلة للتعديل' حيث يمكنك إضافة أو حذف العناصر بعد إنشاء القائمة. في هذا الدرس، نستكشف كيف يمكننا استخدام القوائم لتمثيل جداول البيانات أو سجلات المستخدمين. بايثون توفر لنا دوالاً قوية جداً للتعامل معها مثل append لإضافة عنصر في النهاية، و pop لحذف عنصر، و sort لترتيب العناصر أبجدياً أو رقمياً. إن فهم القوائم هو المفتاح الأساسي للدخول في عالم تحليل البيانات، لأن معظم البيانات التي ستتعامل معها مستقبلاً ستكون على شكل سلاسل أو قوائم من المعلومات المترابطة التي تحتاج للمعالجة والتصفية.",
                summary: "القوائم هي وسيلة لتخزين عناصر متعددة في متغير واحد، وهي مرنة للغاية حيث تسمح بتخزين أنواع بيانات مختلفة معاً.",
                code: 'fruits = ["تفاح", "موز", "برتقال"]\nfruits.append("مانجو")\nprint(f"عدد الفواكه: {len(fruits)}")\nprint(fruits)',
                output: 'عدد الفواكه: 4\n["تفاح", "موز", "برتقال", "مانجو"]'
            },
            { 
                title: "درس بايثون: حلقات التكرار (For Loops) ومعالجة البيانات", 
                detailed: "حلقات التكرار (Loops) هي الأداة التي تمنح البرمجة قوتها الحقيقية، فهي تسمح للحاسوب بتنفيذ مهمة مكررة آلاف المرات في أجزاء من الثانية دون كلل. في بايثون، تعتبر حلقة for الأداة المثالية للمرور على عناصر القوائم أو السلاسل النصية. بدلاً من كتابة أمر الطباعة لكل عنصر يدوياً، نستخدم for لتنفيذ العملية على كل عنصر بشكل آلي. هذا المفهوم لا يقتصر فقط على الطباعة، بل يمتد ليشمل العمليات الحسابية، وتصفية البيانات، والبحث عن معلومات محددة داخل مجموعات ضخمة. تعلم كيفية التحكم في الحلقات التكرارية واستخدامها بذكاء يقلل من عدد أسطر الكود ويجعل برنامجك أكثر كفاءة وسرعة في التنفيذ، خاصة عند التعامل مع ملفات كبيرة أو قواعد بيانات ضخمة.",
                summary: "تُستخدم حلقات for لتكرار تنفيذ كود معين على مجموعة من العناصر، مما يوفر الوقت والجهد ويجعل الكود أكثر احترافية.",
                code: 'numbers = [1, 2, 3, 4, 5]\nsum_total = 0\nfor n in numbers:\n    sum_total += n\nprint(f"مجموع الأرقام هو: {sum_total}")',
                output: 'مجموع الأرقام هو: 15'
            },
// درس الجمل الشرطية في بايثون
            { 
                title: "اتخاذ القرارات باستخدام جملة if", 
                detailed: "تعتبر الجمل الشرطية هي العقل المدبر لأي برنامج، فهي تتيح للكود اتخاذ قرارات بناءً على شروط معينة. في بايثون، نستخدم الكلمة المفتاحية if متبوعة بالشرط، ثم نقطتين رأسيتين (:). من الضروري جداً فهم مبدأ 'الإزاحة' (Indentation) في بايثون، حيث أن الكود الذي يقع تحت الشرط يجب أن يكون مزاحاً للداخل بمقدار 4 مسافات ليعرف البرنامج أنه تابع لهذا الشرط. يمكننا أيضاً استخدام elif لإضافة شروط إضافية، و else لتنفيذ كود في حال لم يتحقق أي من الشروط السابقة. هذه الهيكلية تسمح لنا ببناء برامج تفاعلية ذكية، مثل التحقق من كلمة مرور المستخدم أو تحديد ما إذا كان الطالب ناجحاً أم راسباً بناءً على درجاته.",
                summary: "تسمح جملة if للبرنامج بتنفيذ أوامر معينة فقط عند تحقق شرط منطقي، وتعتمد بايثون كلياً على الإزاحة لتنظيم هذا الكود.",
                code: 'score = 85\nif score >= 90:\n    print("امتياز")\nelif score >= 75:\n    print("جيد جداً")\nelse:\n    print("مقبول")',
                output: 'جيد جداً'
            }
            
        ],
        questions: [
            { q: "ما هي الدالة المستخدمة لعرض النتائج في بايثون؟", choices: ["display()", "print()", "show()"], a: 1 },
            { q: "أي مما يلي يمثل تسمية صحيحة لمتغير؟", choices: ["123user", "user_name", "user-name"], a: 1 }
        ]
    },
    'JavaScript': {
        lessons: [
            { 
                title: "عالم جافا سكريبت و console.log", 
                detailed: "جافا سكريبت هي لغة البرمجة التي جعلت صفحات الويب تنبض بالحياة بعد أن كانت مجرد نصوص ثابتة. تم تطويرها في الأصل لتعمل داخل المتصفح، لكنها اليوم تعمل في كل مكان بفضل Node.js. تُستخدم جافا سكريبت في بناء واجهات المستخدم التفاعلية، وتطبيقات الهاتف، وحتى برمجة الخوادم. الأداة الأساسية للمبرمج للتأكد من عمل الكود بشكل صحيح هي console.log(). هذه الدالة تقوم بإرسال البيانات إلى 'وحدة التحكم' في المتصفح، وهي مخصصة للمطورين وليس للمستخدم النهائي. تعلم كيفية استخدام الكونسول هو حجر الزاوية في مهارة تصحيح الأخطاء (Debugging) التي يحتاجها كل مطور ويب ناجح.",
                summary: "جافا سكريبت محرك الويب، و console.log هي أهم أداة للمطور لمراقبة كوده واختباره.",
                code: 'console.log("Welcome to JS!");\nconsole.log(20 * 5);',
                output: 'Welcome to JS!\n100'
            },
            { 
                title: "المتغيرات الحديثة: Let و Const", 
                detailed: "في السابق، كان يتم تعريف المتغيرات في جافا سكريبت باستخدام كلمة var، لكن المعايير الحديثة (ES6) قدمت let و const لتفادي مشاكل منطقية معقدة. كلمة let تُستخدم لتعريف متغيرات يمكن تغيير قيمتها لاحقاً خلال البرنامج، بينما const تُستخدم للثوابت التي لا تتغير قيمتها أبداً بعد التعريف الأول. هذا التقسيم يساعد في كتابة كود أكثر أماناً وأقل عرضة للأخطاء، حيث يمنع المتصفح تغيير قيم الثوابت عن طريق الخطأ. يُنصح دائماً باستخدام const كخيار افتراضي، واللجوء إلى let فقط عندما نكون متأكدين أننا سنحتاج لتعديل القيمة لاحقاً، وهذا جزء من كتابة الكود النظيف والمحترف.",
                summary: "استخدم let للمتغيرات القابلة للتغيير، و const للثوابت التي تظل ثابتة طوال عمر البرنامج.",
                code: 'const name = "JS";\nlet score = 50;\nscore = 100;\nconsole.log(name + ": " + score);',
                output: 'JS: 100'
            },
            { 
                title: "درس جافاسكربت: مصفوفات الكائنات (Array of Objects)", 
                detailed: "في مشاريع الويب الحقيقية، نادراً ما نتعامل مع نصوص بسيطة، بل نتعامل مع بيانات معقدة مثل 'قائمة مستخدمين' حيث كل مستخدم له اسم وعمر وبريد إلكتروني. هنا يأتي دور مصفوفات الكائنات في جافاسكربت. الكائن (Object) يمثل عنصراً واحداً بخصائص متعددة، والمصفوفة (Array) تجمع هذه الكائنات معاً. هذا الهيكل هو المحاكي الفعلي للبيانات التي تصلنا من 'قواعد البيانات' أو عبر الـ APIs بتنسيق JSON. تعلم كيفية الوصول إلى خاصية معينة داخل كائن موجود في مصفوفة، وكيفية تحديث هذه البيانات، هو المهارة الأساسية التي يحتاجها أي مطور واجهات (Frontend Developer) لبناء صفحات تعرض منتجات، أخبار، أو ملفات شخصية للمستخدمين بشكل ديناميكي وجذاب.",
                summary: "مصفوفة الكائنات هي الطريقة المثالية لتنظيم بيانات معقدة ومرتبطة، وهي الهيكل الأكثر استخداماً في تطوير تطبيقات الويب الحديثة.",
                code: 'const users = [\n  { id: 1, name: "أحمد" },\n  { id: 2, name: "سارة" }\n];\nconsole.log("المستخدم الأول: " + users[0].name);',
                output: 'المستخدم الأول: أحمد'
            },
            { 
                title: "درس جافاسكربت: معالجة الأحداث (Event Listeners)", 
                detailed: "جافاسكربت هي اللغة التي تجعل المواقع 'حية'، والسر في ذلك يكمن في 'الأحداث' (Events). الحدث هو أي فعل يقوم به المستخدم على الصفحة، مثل النقر على زر، تحريك الفأرة، أو الكتابة في حقل نصي. باستخدام addEventListener، يمكننا إخبار المتصفح أن 'ينصت' لحدث معين وينفذ كوداً برمجياً عند وقوعه. هذا الدرس يعلمك كيف تربط بين منطق البرمجة وبين أفعال المستخدم الحقيقية. تخيل زر 'أعجبني' أو قائمة منسدلة؛ كلها تعتمد كلياً على معالجة الأحداث. إتقان هذا المفهوم هو ما سيمكنك من بناء واجهات مستخدم تفاعلية (Interactive UIs) تستجيب لكل حركة يقوم بها الزائر، مما يوفر تجربة مستخدم سلسة واحترافية.",
                summary: "معالجة الأحداث تتيح لك تشغيل الأكواد بناءً على تفاعل المستخدم، وهي المحرك الأساسي لأي موقع ويب تفاعلي في العالم.",
                code: '// مثال تخيلي لربط زر بحدث\n// btn.addEventListener("click", () => {\nconsole.log("تم النقر على الزر بنجاح!");\n// });',
                output: 'تم النقر على الزر بنجاح!'
            },
            { 
                title: "الدوال (Functions) وإعادة استخدام الكود", 
                detailed: "الدوال هي عبارة عن حاويات للأكواد البرمجية التي تؤدي وظيفة معينة، والهدف الرئيسي منها هو 'عدم تكرار الكود' (DRY - Don't Repeat Yourself). بدلاً من كتابة نفس الأسطر عشر مرات، نكتبها داخل دالة ونقوم باستدعائها وقتما نشاء. في جافاسكربت الحديثة، لدينا عدة طرق لتعريف الدوال، منها الطريقة التقليدية باستخدام كلمة function، وطريقة 'دوال السهم' (Arrow Functions) التي أصبحت شائعة جداً لبساطتها. الدالة يمكنها استقبال مدخلات تُسمى (Parameters) وإعادة قيمة ناتجة باستخدام كلمة return. إن فهم الدوال بشكل عميق يسهل عليك بناء مشاريع كبيرة، حيث يمكنك تقسيم المشروع إلى قطع صغيرة (دوال) يسهل اختبارها وإصلاح أخطائها بشكل منفصل.",
                summary: "الدالة هي كتلة من الكود يتم تنفيذها عند استدعائها، وهي أساسية لتنظيم الكود ومنع التكرار في المشاريع.",
                code: 'function sayHello(name) {\n    return "أهلاً " + name;\n}\n\nconst msg = sayHello("أحمد");\nconsole.log(msg);',
                output: 'أهلاً أحمد'
            },
            // درس التفاعل مع DOM في جافاسكربت
            { 
                title: "التعامل مع DOM وتغيير محتوى الصفحة", 
                detailed: "تعتبر الـ DOM (Document Object Model) هي الجسر الرابط بين لغة جافاسكربت وصفحة الـ HTML. عندما تقوم المتصفحات بتحميل الصفحة، فإنها تحول كود HTML إلى شجرة من الكائنات يمكن لجافاسكربت الوصول إليها وتعديلها. باستخدام دوال مثل document.getElementById() أو querySelector()، يمكننا اختيار أي عنصر في الصفحة وتغيير نصه، لونه، أو حتى حذفه نهائياً. هذا هو السر وراء المواقع التفاعلية التي نراها اليوم؛ فبدلاً من إعادة تحميل الصفحة بالكامل، تقوم جافاسكربت بتحديث أجزاء صغيرة من الصفحة لحظياً. تعلم الـ DOM هو ما ينقل المبرمج من مجرد كاتب كود منطقي إلى مطور واجهات مستخدم حقيقي يستطيع بناء تطبيقات حية وتفاعلية.",
                summary: "الـ DOM هو تمثيل برمجي لصفحتك، وجافاسكربت تستخدمه لتغيير النصوص والألوان والتفاعل مع المستخدم دون إعادة تحميل الصفحة.",
                code: '// افترض وجود عنصر id="title"\nconst title = "مرحباً بكم في PyJS";\nconsole.log("تغيير العنوان إلى: " + title);',
                output: 'تغيير العنوان إلى: مرحباً بكم في PyJS'
            }
        ],
        questions: [
            { q: "أين تظهر نتائج console.log عادة؟", choices: ["في نافذة منبثقة", "في وحدة التحكم (Console)", "على الطابعة"], a: 1 },
            { q: "أي كلمة نستخدم لتعريف متغير ثابت لا يتغير؟", choices: ["var", "let", "const"], a: 2 }
        ]
    }
};

let currentPath = '';
let usersDB = JSON.parse(localStorage.getItem('pyjs_users')) || [{ name: "تجربة", email: "test@test.com", pass: "123", points: 150 }];
let currentUser = JSON.parse(sessionStorage.getItem('pyjs_session')) || null;
let currentQuizIndex = 0;

function showSection(id) {
    const target = document.getElementById(id);
    if (!target) return;
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden-section'));
    target.classList.remove('hidden-section');
    target.classList.add('active-section');
    window.scrollTo(0,0);
}

function checkAuth() {
    if (currentUser) showSection('dashboard');
    else showSection('login');
}

function handleAuth(type) {
    if (type === 'reg') {
        const name = document.getElementById('rName').value;
        const email = document.getElementById('rEmail').value;
        const pass = document.getElementById('rPass').value;
        if(!name || !email || !pass) { alert("يرجى ملء كافة الحقول"); return; }
        currentUser = { name, email, pass, points: 0 };
        usersDB.push(currentUser);
        localStorage.setItem('pyjs_users', JSON.stringify(usersDB));
    } 
    else if (type === 'login') {
        const email = document.getElementById('lEmail').value;
        const pass = document.getElementById('lPass').value;
        const user = usersDB.find(u => u.email === email && u.pass === pass);
        if (user) currentUser = user;
        else { alert("البيانات غير صحيحة!"); return; }
    }
    sessionStorage.setItem('pyjs_session', JSON.stringify(currentUser));
    updateUI();
    showSection('dashboard');
}

function updateUI() {
    if (currentUser) {
        document.getElementById('userStatus').classList.remove('hidden');
        document.getElementById('userStatus').classList.add('flex');
        document.getElementById('navLinks').classList.remove('hidden');
        document.getElementById('navLinks').classList.add('flex');
        document.getElementById('uName').innerText = currentUser.name;
        document.getElementById('uPoints').innerText = currentUser.points;
    }
}

function openPath(lang) {
    currentPath = lang;
    const data = pathData[lang];
    document.getElementById('pathTitle').innerText = "مسار " + lang;
    const list = document.getElementById('lessonsList');
    list.innerHTML = '';
    data.lessons.forEach((lesson, index) => {
        list.innerHTML += `
            <div onclick="loadLesson(${index})" class="glass p-5 rounded-2xl cursor-pointer hover:bg-white/5 flex justify-between items-center transition border-r-4 border-transparent hover:border-accent">
                <span>${index + 1}. ${lesson.title}</span>
                <i class="fas fa-book-open text-accent"></i>
            </div>
        `;
    });
    document.getElementById('quizBtnContainer').innerHTML = `
        <div onclick="showQuiz()" class="bg-accent/10 border border-accent p-5 rounded-2xl cursor-pointer hover:bg-accent hover:text-black transition flex justify-between items-center group">
            <span class="font-bold text-lg text-right">بدء الاختبار الشامل لمسار ${lang}</span>
            <i class="fas fa-vial group-hover:rotate-12 transition"></i>
        </div>
    `;
    showSection('pathMenu');
}

function loadLesson(index) {
    const lesson = pathData[currentPath].lessons[index];
    document.getElementById('lTitle').innerText = lesson.title;
    document.getElementById('lDetailed').innerText = lesson.detailed;
    document.getElementById('lSummary').innerText = lesson.summary;
    document.getElementById('lCode').innerText = lesson.code;
    document.getElementById('lOutput').innerText = lesson.output;
    showSection('lessonContent');
}

function showQuiz() {
    currentQuizIndex = 0;
    loadQuestion();
    showSection('quizSystem');
}

function loadQuestion() {
    const data = pathData[currentPath].questions[currentQuizIndex];
    document.getElementById('quizProgress').innerText = `السؤال ${currentQuizIndex + 1} من ${pathData[currentPath].questions.length}`;
    document.getElementById('qQuestion').innerText = data.q;
    const choicesDiv = document.getElementById('qChoices');
    choicesDiv.innerHTML = '';
    data.choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-choice';
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(index);
        choicesDiv.appendChild(btn);
    });
}

function checkAnswer(index) {
    const correct = pathData[currentPath].questions[currentQuizIndex].a;
    if (index === correct) {
        currentUser.points += 20;
        alert("إجابة صحيحة! +20 نقطة");
    } else {
        alert("إجابة خاطئة! راجع الشرح التفصيلي.");
    }
    currentQuizIndex++;
    if (currentQuizIndex < pathData[currentPath].questions.length) {
        loadQuestion();
    } else {
        alert(`أنهيت الاختبار! رصيدك: ${currentUser.points}`);
        saveUserData();
        showSection('dashboard');
    }
    updateUI();
}

function saveUserData() {
    usersDB = usersDB.map(u => u.email === currentUser.email ? currentUser : u);
    localStorage.setItem('pyjs_users', JSON.stringify(usersDB));
    sessionStorage.setItem('pyjs_session', JSON.stringify(currentUser));
}

function logout() {
    sessionStorage.clear();
    location.reload();
}

window.onload = updateUI;