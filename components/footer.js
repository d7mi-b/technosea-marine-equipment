const Footer = () => {
    const footer = document.querySelector('body > footer');

    footer.innerHTML = `
        <section class="logo center">
            <img src="/public/logo.png" alt="Technosea logo">
        </section>

        <section class="content">
            <article>
                <header>
                    <h4>تكنوسي للمعدات البحرية</h4>
                </header>

                <p>
                    نحن متخصصون في توفير أفضل المحركات والمعدات البحرية وقطع غيارها التي تضمن لك أداء فائقا وموثوقية عالية
                    وملتزمون بتقديم خدمات عالية الجودة تضمن لك تجربة بحرية مميزة وامنة 
                </p>
            </article>

            <section>
                <header>
                    <h4>روابط سريعة</h4>
                </header>

                <ul>
                    <li><a href="/">الرئيسية</a></li>
                    <li><a href="/pages/about.html">من نحن؟</a></li>
                    <li><a href="/pages/services.html">الخدمات</a></li>
                    <li><a href="/pages/products.html">المنتجات</a></li>
                </ul>
            </section>

            <section>
                <header>
                    <h4>روابط مهمة</h4>
                </header>

                <ul>
                    <li><a href="/#faq">الاسئلة الشائعة</a></li>
                    <li><a href="/pages/contact-us.html">تواصل معنا</a></li>
                </ul>
            </section>

            <section>
                <article>
                    <section class="icon center">
                        <i class="fi fi-ts-marker"></i>
                    </section>

                    <section>
                        <p>حضرموت – الشحر – الخور – الشارع العام </p>
                    </section>
                </article>

                <article>
                    <section class="icon center">
                        <i class="fi fi-ts-phone-flip"></i>
                    </section>

                    <section>
                        <p dir="ltr">967770263384 - 335532</p>
                    </section>
                </article>

                <article>
                    <section class="icon center">
                        <i class="fi fi-ts-envelope-open"></i>
                    </section>

                    <section>
                        <p><a href="mailto:technoseamarine@gmail.com">technoseamarine@gmail.com</a></p>
                    </section>
                </article>

                <ul class="icons">
                    <li><a href="/"><i class="fi fi-brands-whatsapp"></i></a></li>
                    <li><a href="/"><i class="fi fi-brands-twitter-alt"></i></li>
                    <li><a href="/"><i class="fi fi-brands-instagram"></i></a></li>
                </ul>
            </section>
        </section>

        <section class="copyright">
            <p>
                الحقوق محفوظة لتكنوسي للمعدات البحرية &copy; 2024
            </p>
        </section>
    `;
}

export default Footer;