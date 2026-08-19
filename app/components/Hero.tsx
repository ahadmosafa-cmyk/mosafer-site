import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">

      <div className="heroContent">

        <Image
          src="/images/logo.jpg"
          alt="پرس شیلنگ مسافر"
          width={150}
          height={150}
          priority
        />

        <h1>
          پرس شیلنگ مسافر
        </h1>

        <h2>
          خدمات تخصصی هیدرولیک و پنوماتیک
        </h2>

        <p>
          بیش از ۲۴ سال تجربه در پرس انواع شیلنگ‌های
          هیدرولیک، پنوماتیک، صنعتی و کشاورزی.
          تأمین اتصالات هیدرولیک، خم‌کاری لوله و
          مشاوره تخصصی در ارومیه.
        </p>

        <div className="heroButtons">

          <a href="tel:09145079265">
            تماس فوری
          </a>

          <a
            href="https://wa.me/989145079265"
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساپ
          </a>

        </div>

        <div className="heroStats">

          <div>
            <strong>۲۴+</strong>
            <span>سال تجربه</span>
          </div>

        </div>

      </div>

    </section>
  );
}