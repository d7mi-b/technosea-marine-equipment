const services = [
    {
        id: 1,
        title: "بيع المعدات البحرية",
        description: "مجموعة واسعة من محركات القوارب، الأدوات، والملحقات البحرية من أفضل العلامات التجارية.",
        icon: "fi-ts-sailboat"
    },
    {
        id: 2,
        title: "الاستشارات الفنية",
        description: "فريق من الخبراء لتقديم المشورة التقنية ومساعدتك في اختيار المعدات الأنسب لاحتياجاتك",
        icon: "fi-ts-employee-man-alt"
    },
    {
        id: 3,
        title: "خدمة العملاء",
        description: "دعم فني على مدار الساعة للإجابة على استفساراتك وتقديم المساعدة اللازمة في أي وقت",
        icon: "fi-ts-user-headset"
    },
];

const servicesContainer = document.getElementsByClassName('services-container')[0];

services.forEach(e => {
    servicesContainer.innerHTML += `
        <article class="card">
            <section class="icon center">
                <i class="fi ${e.icon}"></i>
            </section>

            <header>
                <h3>${e.title}</h3>
            </header>

            <p>${e.description}</p>
        </article>
    `;
});

const products = [
    {
        id: 1,
        name: "محرك قوارب",
        description: "محرك قوارب مصمم لتقديم الأداء الأمثل مع توفير الوقود والاعتمادية",
        image: "/asset/images/product-1.jpeg"
    },
    {
        id: 2,
        name: "محرك قوارب",
        description: "محرك قوارب مصمم لتقديم الأداء الأمثل مع توفير الوقود والاعتمادية",
        image: "/asset/images/product-2.jpeg"
    },
    {
        id: 3,
        name: "محرك قوارب",
        description: "محرك قوارب مصمم لتقديم الأداء الأمثل مع توفير الوقود والاعتمادية",
        image: "/asset/images/product-1.jpeg"
    },
    {
        id: 4,
        name: "محرك قوارب",
        description: "محرك قوارب مصمم لتقديم الأداء الأمثل مع توفير الوقود والاعتمادية",
        image: "/asset/images/product-3.jpeg"
    }
];

const productsContainer = document.getElementsByClassName('products-container')[0];

products.forEach(e => {
    productsContainer.innerHTML += `
        <article class="card product">
            <section class="image center">
                <img src="${e.image}" alt="product">
            </section>

            <header>
                <h3>${e.name}</h3>
            </header>

            <p>${e.description}</p>
        </article>
    `;
});

const partners = [
    {
        id: 1,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 2,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 3,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 4,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 5,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 6,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 7,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 8,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
    {
        id: 9,
        name: "أويلي لمعدات السلامة ومكافحة الحرائق",
        image: "/asset/images/partner.png"
    },
];

const partnersContainer = document.getElementsByClassName('partners-container')[0];

partners.forEach(e => {
    partnersContainer.innerHTML += `
        <section class="partner center" title="${e.name}">
            <img src="${e.image}" alt="partner">
        </section>
    `;
})

const faqs = [
    {
        id: 1,
        question: "كيف يمكنني تتبع طلبي؟",
        answer: "يمكنك تتبع طلبك من خلال حسابك على موقعنا أو عبر البريد الإلكتروني الذي يتضمن رقم التتبع."
    },
    {
        id: 2,
        question: "ما هي سياسة الإرجاع؟",
        answer: "نقدم سياسة إرجاع مرنة خلال 30 يومًا من تاريخ الشراء، بشرط أن تكون المنتجات بحالة جديدة وغير مستخدمة."
    },
    {
        id: 3,
        question: "هل تقدمون خدمات تركيب المحركات؟",
        answer: "نعم، نقدم خدمات تركيب المحركات وصيانتها من خلال فريقنا المتخصص."
    },
    {
        id: 4,
        question: "هل الشحن متاح إلى جميع أنحاء البلاد؟",
        answer: "نعم، نحن نوفر الشحن إلى جميع أنحاء البلاد، مع خيارات شحن دولي لبعض المناطق."
    },
    {
        id: 5,
        question: "كيف يمكنني الاتصال بخدمة العملاء؟",
        answer: "يمكنك الاتصال بخدمة العملاء عبر البريد الإلكتروني technoseamarine@gmail.com."
    },
];

const faqContainer = document.getElementsByClassName('faq-container')[0];

faqs.forEach(e => {
    const article = document.createElement('article');
    article.classList.add('card');
    article.innerHTML = `
        <header>
            <h4>${e.question}</h4>

            <section>
                <i class="fi fi-rr-plus"></i>
                <i class="fi fi-rr-minus"></i>
            </section>
        </header>

        <p>${e.answer}</p>
    `;

    article.addEventListener('click', () => {
        article.classList.toggle('open-card');
    })

    faqContainer.append(article);
});

const heroSection = document.querySelector('body > section.hero');
heroSection.style.cssText = "animation: 1s showing-up linear forwards;"

const sections = document.querySelectorAll('body > section:not(body > section.hero)');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const offsetTop = section.offsetTop;
        
        if (offsetTop < window.scrollY + 500) {
            section.style.cssText = "animation: 1s showing-up linear forwards;"
        }
    })
})