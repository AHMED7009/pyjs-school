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
            },
            {
                title: "القواميس (Dictionaries) - تخزين البيانات بذكاء",
                detailed: "القواميس (Dictionaries) في بايثون هي طريقة لتخزين البيانات على شكل أزواج من 'مفتاح' و 'قيمة' (Key-Value Pairs). تخيل القاموس كأنه دفتر عناوين: الاسم هو المفتاح، ورقم الهاتف هو القيمة. القواميس سريعة جداً في استرجاع البيانات لأنها لا تعتمد على الترتيب مثل القوائم، بل تعتمد على المفاتيح. تُكتب القواميس داخل أقواس متعرجة {}، وهي أداة أساسية عند التعامل مع بيانات JSON أو قواعد البيانات غير العلائقية.",
                summary: "القاموس يخزن البيانات كأزواج (مفتاح: قيمة)، مما يسمح بالوصول السريع للمعلومة باستخدام مفتاحها الخاص.",
                code: 'student = {"name": "Omar", "grade": 95, "passed": True}\nprint(student["name"])\nstudent["grade"] = 98\nprint(student)',
                output: 'Omar\n{"name": "Omar", "grade": 98, "passed": True}'
            },
            {
                title: "التعامل مع مدخلات المستخدم (Input)",
                detailed: "حتى الآن كانت برامجنا تعمل ببيانات ثابتة، لكن البرامج الحقيقية تتفاعل مع المستخدم. دالة input() هي بوابتك لهذا التفاعل، حيث توقف البرنامج وتنتظر من المستخدم كتابة شيء ما ثم الضغط على Enter. ملاحظة هامة جداً: دالة input تعيد دائماً البيانات كـ 'نص' (String)، حتى لو كتب المستخدم أرقاماً. لذا إذا أردت إجراء عمليات حسابية، يجب عليك تحويل المدخلات باستخدام int() أو float().",
                summary: "دالة input() تسمح للمستخدم بإدخال بيانات للبرنامج، وتُخزن دائماً كنصوص ما لم يتم تحويلها.",
                code: 'name = "Ali" # محاكاة للإدخال\n# name = input("ما اسمك؟")\nprint(f"مرحباً بك يا {name} في عالم بايثون")',
                output: 'مرحباً بك يا Ali في عالم بايثون'
            },
            {
                title: "الدوال (Functions) - تنظيم الكود",
                detailed: "الدوال هي كتل برمجية قابلة لإعادة الاستخدام تؤدي مهمة محددة. بدلاً من تكرار نفس الكود، يمكنك وضعه داخل دالة واستدعائها بالاسم. هذا يجعل الكود أكثر تنظيماً وسهولة في الصيانة. يمكن للدوال أن تستقبل بيانات (معاملات - parameters) وتعيد نتائج (return value).",
                summary: "الدوال تنظم الكود وتمنع التكرار، ويمكنها استقبال بيانات وإعادة نتائج.",
                code: 'def calculate_area(width, height):\n    return width * height\n\narea = calculate_area(10, 5)\nprint(f"المساحة هي: {area}")',
                output: 'المساحة هي: 50'
            },
            {
                title: "التعامل مع الملفات (File I/O)",
                detailed: "تتيح لك بايثون قراءة البيانات من الملفات النصية والكتابة فيها بسهولة. نستخدم الدالة open() لفتح ملف مع تحديد الوضع (قراءة 'r', كتابة 'w', أو إضافة 'a'). من الأفضل دائمًا استخدام جملة with عند التعامل مع الملفات لضمان إغلاق الملف تلقائيًا بعد الانتهاء منه، حتى لو حدث خطأ.",
                summary: "استخدم with open() لقراءة الملفات والكتابة فيها بأمان.",
                code: '# الكتابة في ملف\nwith open("notes.txt", "w", encoding="utf-8") as f:\n    f.write("مرحباً بالعالم")\n\n# القراءة من ملف\nwith open("notes.txt", "r", encoding="utf-8") as f:\n    content = f.read()\nprint(content)',
                output: 'مرحباً بالعالم'
            },
            {
                title: "مقدمة في البرمجة الكائنية (Classes)",
                detailed: "البرمجة كائنية التوجه (OOP) هي طريقة لتنظيم الكود حول 'الكائنات' (Objects) التي تمثل أشياء من العالم الحقيقي. الـ Class هو المخطط أو القالب، والكائن هو نسخة فعلية من هذا القالب. كل كائن له خصائص (attributes) وسلوكيات (methods). هذا الأسلوب يساعد في بناء برامج معقدة وقابلة للتطوير.",
                summary: "الـ Class هو قالب، والكائن (Object) هو نسخة من هذا القالب له خصائص وسلوكيات.",
                code: 'class Car:\n    def __init__(self, brand):\n        self.brand = brand\n\nmy_car = Car("Toyota")\nprint(my_car.brand)',
                output: 'Toyota'
            },
            {
                title: "معالجة الأخطاء (Try...Except)",
                detailed: "أثناء تشغيل البرنامج، قد تحدث أخطاء غير متوقعة (Exceptions) مثل القسمة على صفر أو محاولة فتح ملف غير موجود. بدلاً من ترك البرنامج ينهار، يمكننا استخدام try...except للتعامل مع هذه الأخطاء بأمان. نضع الكود الذي قد يسبب خطأ داخل كتلة try، ونضع الكود الذي يتعامل مع الخطأ داخل كتلة except.",
                summary: "استخدم try...except لالتقاط الأخطاء ومنع البرنامج من التوقف المفاجئ.",
                code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("لا يمكن القسمة على صفر!")',
                output: 'لا يمكن القسمة على صفر!'
            },
            {
                title: "الوحدات (Modules) والمكتبات",
                detailed: "قوة بايثون الحقيقية تكمن في مكتبتها القياسية الضخمة والمجتمع الذي يوفر آلاف المكتبات الخارجية. الـ Module هو ملف بايثون يحتوي على دوال ومتغيرات. نستخدم كلمة import لاستيراد هذه الوحدات واستخدام محتوياتها في برنامجنا، مما يوفر علينا إعادة كتابة أكواد شائعة مثل العمليات الرياضية المعقدة أو توليد أرقام عشوائية.",
                summary: "استخدم import لاستيراد مكتبات جاهزة وتوسيع قدرات برنامجك.",
                code: 'import math\n\nprint(math.sqrt(16))\nprint(math.pi)',
                output: '4.0\n3.141592653589793'
            }
            
        ],
        questions: [
            { q: "ما هي الدالة المستخدمة لعرض النتائج في بايثون؟", choices: ["display()", "print()", "show()"], a: 1 },
            { q: "أي مما يلي يمثل تسمية صحيحة لمتغير؟", choices: ["123user", "user_name", "user-name"], a: 1 },
            { q: "ما هو الرمز المستخدم لتعريف القائمة (List)؟", choices: ["{}", "[]", "()"], a: 1 },
            { q: "ما هو الرمز المستخدم لتعريف القاموس (Dictionary)؟", choices: ["{}", "[]", "()"], a: 0 },
            { q: "ناتج دالة len('Python') هو؟", choices: ["5", "6", "7"], a: 1 },
            { q: "كيف نضيف عنصراً جديداً في نهاية قائمة `fruits`؟", choices: ["fruits.add('item')", "fruits.append('item')", "fruits.push('item')"], a: 1 },
            { q: "ما الكلمة المفتاحية لتعريف دالة في بايثون؟", choices: ["function", "def", "fun"], a: 1 },
            { q: "ماذا تفعل جملة 'with open'؟", choices: ["تفتح الملف وتغلقه تلقائياً", "تطبع محتوى الملف", "تحذف الملف"], a: 0 },
            { q: "في البرمجة الكائنية، ما هو الـ 'Class'؟", choices: ["كائن فعلي", "مخطط أو قالب للكائن", "دالة داخل الكائن"], a: 1 },
            { q: "ما هي الكتلة التي نستخدمها لالتقاط الأخطاء المحتملة؟", choices: ["try", "catch", "except"], a: 0 },
            { q: "كيف نستورد مكتبة الرياضيات في بايثون؟", choices: ["include math", "import math", "using math"], a: 1 },
            { q: "أي نوع بيانات لا يمكن تعديل عناصره بعد إنشائه؟", choices: ["List", "Dictionary", "Tuple"], a: 2 },
            { q: "ماذا تعيد دالة input() دائماً؟", choices: ["نص (String)", "رقم (Integer)", "قيمة منطقية (Boolean)"], a: 0 },
            { q: "ما هو العامل المستخدم للأس (Power) في بايثون؟", choices: ["^", "**", "pow()"], a: 1 },
            { q: "ماذا تطبع `print(list(range(3)))`؟", choices: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]"], a: 0 }
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
            },
            {
                title: "الجمل الشرطية (If Statements) والمنطق",
                detailed: "المنطق الشرطي في جافاسكربت يشبه بايثون لكن مع اختلاف في الكتابة (Syntax). نستخدم if (...) { ... } لتنفيذ كود إذا تحقق الشرط. الجدير بالذكر في جافاسكربت هو وجود نوعين من المساواة: '==' التي تقارن القيمة فقط (5 == '5' صحيح)، و '===' التي تقارن القيمة والنوع معاً (5 === '5' خطأ). يُنصح دائماً بتبني '===' لتجنب أخطاء غير متوقعة. هذه الجمل هي التي تسمح لك بإخفاء عناصر أو إظهار رسائل تنبيه بناءً على تفاعل المستخدم.",
                summary: "استخدم if/else لاتخاذ قرارات، واعتمد دائماً على === للمقارنة الدقيقة بين القيم.",
                code: 'let age = 18;\nif (age >= 18) {\n    console.log("مسموح بالدخول");\n} else {\n    console.log("ممنوع");\n}',
                output: 'مسموح بالدخول'
            },
            {
                title: "حلقات التكرار (Loops) في جافاسكربت",
                detailed: "كما في بايثون، نحتاج أحياناً لتكرار كود معين. أشهر الحلقات في جافاسكربت هي for loop التقليدية و for...of الحديثة. الحلقة التقليدية تمنحك تحكماً كاملاً بالعداد (Counter)، بينما for...of رائعة للمرور على المصفوفات بسهولة. هناك أيضاً دوال متقدمة للمصفوفات مثل .map() و .forEach() التي تعتبر البديل العصري للحلقات وتستخدم بكثرة في مكتبات مثل React.",
                summary: "الحلقات التكرارية تسمح بتنفيذ الكود عدة مرات، وتعتبر for...of و forEach الطرق الأحدث للتعامل مع المصفوفات.",
                code: 'const colors = ["Red", "Green", "Blue"];\nfor (const color of colors) {\n    console.log(color);\n}',
                output: 'Red\nGreen\nBlue'
            },
            {
                title: "البرمجة غير المتزامنة (Async/Await)",
                detailed: "جافاسكربت تعمل بخيط واحد (Single-threaded)، مما يعني أنها لا تستطيع القيام بمهمتين في نفس الوقت. ولكن ماذا لو أردنا جلب بيانات من الإنترنت؟ هل سيتجمد الموقع؟ هنا يأتي دور البرمجة غير المتزامنة. الـ Promises و Async/Await هي طرق حديثة للتعامل مع العمليات التي تستغرق وقتاً دون إيقاف البرنامج. Async/Await هي مجرد طريقة أسهل لقراءة وكتابة الـ Promises.",
                summary: "استخدم Async/Await لجلب البيانات أو تنفيذ عمليات طويلة دون تجميد واجهة المستخدم.",
                code: 'async function fetchData() {\n    // const response = await fetch("url");\n    // const data = await response.json();\n    console.log("تم جلب البيانات بنجاح (محاكاة)");\n}\nfetchData();',
                output: 'تم جلب البيانات بنجاح (محاكاة)'
            },
            {
                title: "استخدام Fetch API لجلب البيانات",
                detailed: "Fetch API هي الواجهة الحديثة في المتصفحات لإجراء طلبات الشبكة (مثل طلبات HTTP). إنها بديل أحدث وأقوى لـ XMLHttpRequest. باستخدام fetch، يمكنك بسهولة إرسال طلبات GET لجلب البيانات، أو POST لإرسال بيانات إلى الخادم. تعيد دالة fetch كائن Promise يمكنك التعامل معه باستخدام .then() أو await.",
                summary: "Fetch API هي الطريقة العصرية لإجراء طلبات HTTP لجلب أو إرسال البيانات عبر الشبكة.",
                code: '// fetch("https://api.example.com/data")\n// .then(res => res.json())\n// .then(data => console.log(data));\nconsole.log("طلب بيانات باستخدام Fetch API (محاكاة)");',
                output: 'طلب بيانات باستخدام Fetch API (محاكاة)'
            },
            {
                title: "التعامل مع بيانات JSON",
                detailed: "JSON (JavaScript Object Notation) هو تنسيق خفيف لتبادل البيانات، وهو اليوم المعيار الفعلي للاتصال بين الخوادم وتطبيقات الويب. بناء JSON يشبه تماماً بناء الكائنات (Objects) في جافاسكربت. عندما تستقبل بيانات من خادم، فإنها عادة ما تكون نص JSON، ونستخدم JSON.parse() لتحويلها إلى كائن جافاسكربت. وعندما نريد إرسال بيانات، نستخدم JSON.stringify() لتحويل الكائن إلى نص.",
                summary: "JSON هو تنسيق البيانات القياسي للويب. استخدم JSON.parse() و JSON.stringify() للتحويل بين النص والكائن.",
                code: 'const user = { name: "Ali", id: 10 };\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString);\nconst userObject = JSON.parse(jsonString);\nconsole.log(userObject.name);',
                output: '{"name":"Ali","id":10}\nAli'
            },
            {
                title: "دوال المصفوفات المتقدمة (map, filter)",
                detailed: "توفر جافاسكربت دوالاً قوية جداً للمصفوفات تتجاوز الحلقات التكرارية التقليدية. دالة .map() تقوم بإنشاء مصفوفة جديدة عن طريق تطبيق دالة على كل عنصر في المصفوفة الأصلية. دالة .filter() تقوم بإنشاء مصفوفة جديدة تحتوي فقط على العناصر التي تحقق شرطاً معيناً. هذه الدوال تجعل الكود أقصر وأكثر قابلية للقراءة.",
                summary: "استخدم .map() لتحويل كل عنصر، و .filter() لتصفية العناصر في مصفوفة.",
                code: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens);',
                output: '[2, 4, 6, 8]\n[2, 4]'
            },
            {
                title: "التخزين المحلي (Local Storage)",
                detailed: "Local Storage هي ميزة في المتصفح تسمح لك بتخزين البيانات (على شكل نص) بشكل دائم حتى بعد إغلاق المتصفح. هذا مفيد جداً لحفظ تفضيلات المستخدم (مثل الوضع المظلم) أو حفظ بيانات عربة التسوق. البيانات تُخزن كأزواج مفتاح-قيمة. استخدم setItem لتخزين البيانات، و getItem لاسترجاعها.",
                summary: "Local Storage يحفظ البيانات في المتصفح بشكل دائم.",
                code: 'localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");\nconsole.log(`الوضع المحفوظ هو: ${theme}`);',
                output: 'الوضع المحفوظ هو: dark'
            }
        ],
        questions: [
            { q: "أين تظهر نتائج console.log عادة؟", choices: ["في نافذة منبثقة", "في وحدة التحكم (Console)", "على الطابعة"], a: 1 },
            { q: "أي كلمة نستخدم لتعريف متغير ثابت لا يتغير؟", choices: ["var", "let", "const"], a: 2 },
            { q: "ما الفرق الدقيق بين '==' و '==='؟", choices: ["لا يوجد فرق", "=== تقارن القيمة والنوع", "== أسرع"], a: 1 },
            { q: "أي خاصية تستخدم لمعرفة طول المصفوفة `arr`؟", choices: ["arr.size()", "arr.length", "arr.count()"], a: 1 },
            { q: "كيف نكتب دالة سهمية (Arrow Function)؟", choices: ["() => {}", "function() {}", "-> {}"], a: 0 },
            { q: "ما هي الدالة المستخدمة لربط حدث بعنصر HTML؟", choices: ["onEvent", "listen()", "addEventListener"], a: 2 },
            { q: "ماذا تعيد دالة `fetch()`؟", choices: ["بيانات JSON مباشرة", "كائن Promise", "نص HTML"], a: 1 },
            { q: "ما هي الدالة التي تحول نص JSON إلى كائن JavaScript؟", choices: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()"], a: 0 },
            { q: "أي دالة مصفوفات تنشئ مصفوفة جديدة من نتائج استدعاء دالة على كل عنصر؟", choices: ["forEach", "map", "filter"], a: 1 },
            { q: "أي دالة مصفوفات تنشئ مصفوفة جديدة بالعناصر التي تجتاز اختباراً معيناً؟", choices: ["forEach", "map", "filter"], a: 2 },
            { q: "كيف نخزن قيمة 'dark' تحت مفتاح 'theme' في Local Storage؟", choices: ["localStorage.set('theme', 'dark')", "localStorage.setItem('theme', 'dark')", "localStorage.add('theme', 'dark')"], a: 1 },
            { q: "ما هي الكلمة المفتاحية التي توقف تنفيذ دالة async حتى يكتمل Promise؟", choices: ["wait", "await", "pause"], a: 1 },
            { q: "كيف تختار عنصراً من الصفحة باستخدام الـ ID الخاص به؟", choices: ["getElement('myId')", "document.find('#myId')", "document.getElementById('myId')"], a: 2 },
            { q: "ما ناتج `typeof 42`؟", choices: ["'int'", "'number'", "'integer'"], a: 1 },
            { q: "ما هو الاختصار لـ DOM؟", choices: ["Document Object Model", "Data Object Model", "Document Order Model"], a: 0 }
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
