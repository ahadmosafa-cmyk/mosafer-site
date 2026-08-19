export default function Footer() {
return (
<footer className="footer">
<div className="footerTop">
<div className="footerBrand">
<h3>پرس شیلنگ مسافر</h3>

      <p>
        خدمات تخصصی پرس شیلنگ هیدرولیک و پنوماتیک، شیلنگ غذایی و اسیدی،
        صنعتی و کشاورزی با بیش از ۲۴ سال تجربه در ارومیه.
      </p>

      <p>
        آدرس: ارومیه، کوی یکطرفه، خیابان پزشکیان، طبقه همکف
      </p>

      <p>
        ساعت کاری: هر روز از ۸ صبح تا ۸ شب
      </p>
    </div>

    <div className="footerLinks">
      <h4>ارتباط سریع</h4>

      <a href="tel:04432382448">
        تلفن ثابت: ۰۴۴۳۲۳۸۲۴۴۸
      </a>

      <a href="tel:09145079265">
        موبایل: ۰۹۱۴۵۰۷۹۲۶۵
      </a>

      <a
        href="https://wa.me/989145079265"
        target="_blank"
        rel="noopener noreferrer"
      >
        واتساپ
      </a>

      <a
        href="https://maps.app.goo.gl/w1cCio1QEbvx73Mj9"
        target="_blank"
        rel="noopener noreferrer"
      >
        مشاهده موقعیت در نقشه
      </a>
    </div>
  </div>

  <div className="copyright">
    © {new Date().getFullYear()} پرس شیلنگ مسافر - تمامی حقوق محفوظ است
  </div>
</footer>

);
}