import Image from "next/image";

export default function Header() {
return (
<header className="header">

  <div className="logoBox">

    <Image
      src="/images/logo.jpg"
      alt="پرس شیلنگ مسافر"
      width={70}
      height={70}
    />

    <div>
      <h2>پرس شیلنگ مسافر</h2>

      <span>
        Hydraulic & Pneumatic Services
      </span>
    </div>

  </div>

  <nav>
    <a href="/">خانه</a>

    <a href="#services">
      خدمات
    </a>

    <a href="#about">
      درباره ما
    </a>

    <a href="#contact">
      تماس با ما
    </a>
  </nav>

</header>

);
}