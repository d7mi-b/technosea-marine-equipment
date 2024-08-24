const Navbar = () => {
    const header = document.querySelector('body > header:first-child');
    
    const navbar = `
        <nav class="navbar">
            <section class="logo center non-responsive">
                <img src="/public/logo.png" alt="logo">
            </section>

            <ul>
                <li class="center bar responsive">
                    <i class="fi fi-ts-bars-staggered"></i>
                </li>
                <li class="logo center responsive">
                    <img src="/public/logo.png" alt="logo">
                </li>
                <ul>
                    <li>
                        <a href="/">الرئيسية</a>
                    </li>
                    <li>
                        <a href="/pages/about.html">من نحن؟</a>
                    </li>
                    <li>
                        <a href="/pages/services.html">الخدمات</a>
                    </li>
                    <li>
                        <a href="/pages/products.html">المنتجات</a>
                    </li>
                </ul>
            </ul>

            <section>
                <a class="center btn btn-linear" href="/pages/contact-us.html">تواصل معنا</a>
            </section>
        </nav>
    `;

    header.innerHTML = navbar;
}

export default Navbar;