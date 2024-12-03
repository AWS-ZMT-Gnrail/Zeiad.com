window.addEventListener('scroll', function() {
    const courses = document.querySelectorAll('.course');
    const sections = document.querySelectorAll('.section-header h2');
    
    courses.forEach(course => {
        if (window.scrollY + window.innerHeight > course.offsetTop + course.offsetHeight / 2) {
            course.classList.add('show');
        }
    });

    sections.forEach(section => {
        if (window.scrollY + window.innerHeight > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('visible');
        }
    });
});

window.addEventListener('scroll', function() {
    const headerImage = document.getElementById('header-image');
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 100) {
        headerImage.classList.add('small');
        navbar.classList.add('small');
    } else {
        headerImage.classList.remove('small');
        navbar.classList.remove('small');
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    const audio = new Audio('audio/2.mp3');  
    audio.play();

    audio.onended = function() {
        window.location.href = 'login.html';  
    };
});


function openChatBot() {
    document.getElementById("chat-container").classList.add("show");
}

function closeChatBot() {
    document.getElementById("chat-container").classList.remove("show");
}

function sendMessage(event) {
    if (event.key === "Enter") {
        const userMessage = document.getElementById("user-input").value.trim();
        if (userMessage) {
            displayUserMessage(userMessage);
            document.getElementById("user-input").value = "";
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => {
                displayBotResponse(botResponse);
                speakMessage(botResponse);  
            }, 500);
        }
    }
}

function displayUserMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("user-message");
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);
    setTimeout(() => {
        userMessageDiv.classList.add("show");
    }, 100);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function displayBotResponse(response) {
    const chatBox = document.getElementById("chat-box");
    const botMessageDiv = document.createElement("div");
    botMessageDiv.classList.add("bot-message");
    botMessageDiv.textContent = response;
    chatBox.appendChild(botMessageDiv);
    setTimeout(() => {
        botMessageDiv.classList.add("show");
    }, 100);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function speakMessage(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = 'ar-SA'; 
    synth.speak(utterance);
}

function redirectToPayment() {
    window.location.href = "https://www.stripe.com";  
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes('السلام عليكم') || userMessage.includes('مرحبا') || userMessage.includes('اهلا')) {
        return "وعليكم السلام! كيف يمكنني مساعدتك اليوم؟";
    } else if (userMessage.includes('كيف حالك') || userMessage.includes('أخبارك')) {
        return "أنا بخير، شكرًا لسؤالك! كيف يمكنني مساعدتك اليوم؟";
    } else if (userMessage.includes('ما اسمك') || userMessage.includes('من أنت')) {
        return "اسمي بوت، وأنا هنا لمساعدتك في كل ما يتعلق بالبرمجة.";
    } else if (userMessage.includes('ماذا تفعل')) {
        return "أنا هنا لأجيب على أسئلتك وأساعدك في تعلم البرمجة.";
    } else if (userMessage.includes('ما هي البرمجة') || userMessage.includes('تعريف البرمجة')) {
        return "البرمجة هي عملية كتابة تعليمات لجهاز الحاسوب لتنفيذ مهام محددة باستخدام لغات البرمجة مثل Python، Java، C++.";
    } else if (userMessage.includes('ما هي python')) {
        return "Python هي لغة برمجة عالية المستوى وسهلة التعلم، تُستخدم في تطوير الويب، علم البيانات، الذكاء الاصطناعي، وغيرها.";
    } else if (userMessage.includes('ما هي java')) {
        return "Java هي لغة برمجة كائنية التوجه تستخدم بشكل واسع لتطوير التطبيقات المكتبية، تطبيقات الويب، وتطبيقات الأندرويد.";
    } else if (userMessage.includes('ما هي c++')) {
        return "C++ هي لغة برمجة قوية تُستخدم في تطوير أنظمة التشغيل، الألعاب، والبرامج التي تتطلب أداءً عاليًا.";
    } else if (userMessage.includes('ما هو التسويق الرقمي')) {
        return "التسويق الرقمي هو استخدام الإنترنت والأدوات الرقمية لترويج المنتجات والخدمات وزيادة التفاعل مع الجمهور المستهدف.";
    } else if (userMessage.includes('ما هي أدوات التسويق الرقمي')) {
        return "أدوات التسويق الرقمي تشمل منصات التواصل الاجتماعي، إعلانات جوجل، تحسين محركات البحث (SEO)، البريد الإلكتروني التسويقي، وغيرها.";
    } else if (userMessage.includes('ما هو التسويق عبر الإنترنت')) {
        return "التسويق عبر الإنترنت هو استراتيجية تسويقية تستخدم الإنترنت والوسائط الرقمية للتواصل مع الجمهور المستهدف والترويج للمنتجات والخدمات.";
    } else if (userMessage.includes('ما هي الروبوتات')) {
        return "الروبوتات هي أجهزة ميكانيكية تُبرمج للقيام بمهام محددة بشكل تلقائي أو شبه تلقائي باستخدام تقنيات البرمجة.";
    } else if (userMessage.includes('كيف نصنع روبوت')) {
        return "يمكنك صنع روبوت باستخدام مكونات ميكانيكية وبرمجية مثل المحركات، الحساسات، ووحدات المعالجة الصغيرة (مثل Arduino).";
    } else if (userMessage.includes('ما هو الذكاء الاصطناعي')) {
        return "الذكاء الاصطناعي هو فرع من فروع علوم الكمبيوتر يهدف إلى تطوير أنظمة قادرة على محاكاة العمليات الذهنية البشرية مثل التعلم والتفكير.";
    } else if (userMessage.includes('ما هي تطبيقات الذكاء الاصطناعي')) {
        return "تطبيقات الذكاء الاصطناعي تشمل السيارات الذاتية القيادة، المساعدات الصوتية مثل Alexa وSiri، وتحليل البيانات الضخمة (Big Data).";
    } else if (userMessage.includes('ما هو blockchain')) {
        return "Blockchain هي تقنية لامركزية تُستخدم لتسجيل البيانات بطريقة آمنة وشفافة، وتعتبر الأساس لتكنولوجيا العملات الرقمية مثل Bitcoin.";
    } else if (userMessage.includes('ما هو انترنت الأشياء')) {
        return "إنترنت الأشياء (IoT) هو مفهوم يصف شبكة من الأجهزة المتصلة بالإنترنت التي يمكنها التفاعل والتواصل مع بعضها البعض، مثل الأجهزة المنزلية الذكية.";
    } else if (userMessage.includes('من هو موسس منصة زوسر') || userMessage.includes('من هو المهنديس محمد قاسم')) {
        return "المهندس محمد قاسم هو مؤسس منصة زوسر و مدرب 7 لغات برمجة...";
    } else if (userMessage.includes('ما هي زوسر') || userMessage.includes('ما هي منصة زوسر ')) {
        return "منصة زوسر هي منصة تقدم كورسات متنوعه...";
    } else if (userMessage.includes('ماذا تقدم زوسر') || userMessage.includes('ما هي الكورسات ')) {
        return "زوسر هي منصة تقدم كورسات متعدده...";

    } else if (userMessage.includes('من هو موسس الموقع') || userMessage.includes('ما هي الكورسات ')) {
        return "زوسر هي منصة تقدم كورسات متعدده...";


    } else if (userMessage.includes('رقم الدعم الفني') || userMessage.includes('الدعم الفني')) {
        return "للتواصل مع الدعم الفني، يرجى الاتصال على الرقم: 01063064920.";
    } else {
        return "عذرًا، لا أملك إجابة لهذا السؤال. هل يمكنك المحاولة مرة أخرى؟";
    }
    
}
