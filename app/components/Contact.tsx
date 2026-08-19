export default function Contact() {
  return (
    <section className="contactSection" id="contact">
      <div className="contactLayout">
        <div className="contactInfo">
          <span className="contactTag">تماس با ما</span>

          <h2>برای مشاوره و سفارش خدمات تماس بگیرید</h2>

          <p>
            آماده پاسخگویی و ارائه خدمات تخصصی هیدرولیک، پنوماتیک، شیلنگ
            غذایی و اسیدی، صنعتی و کشاورزی هستیم. برای دریافت مشاوره،
            استعلام قیمت و هماهنگی خدمات با ما در تماس باشید.
          </p>

          <div className="contactDetails">
            <div className="contactDetail">
              <span>تلفن ثابت</span>
              <a href="tel:04432382448" aria-label="تماس با تلفن ثابت">
                ۰۴۴۳۲۳۸۲۴۴۸
              </a>
            </div>

            <div className="contactDetail">
              <span>موبایل</span>
              <a href="tel:09145079265" aria-label="تماس با موبایل">
                ۰۹۱۴۵۰۷۹۲۶۵
              </a>
            </div>

            <div className="contactDetail">
              <span>موقعیت</span>
              <strong>
                ارومیه، کوی یکطرفه، خیابان پزشکیان، طبقه همکف
              </strong>
            </div>

            <div className="contactDetail">
              <span>ساعت کاری</span>
              <strong>هر روز، ۸ صبح تا ۸ شب</strong>
            </div>

            <div className="contactDetail">
              <span>حوزه فعالیت</span>
              <strong>
                هیدرولیک، پنوماتیک، غذایی و اسیدی، صنعتی و کشاورزی
              </strong>
            </div>
          </div>
        </div>

        <div className="contactAction">
          <div className="contactActionTop">
            <span>ارتباط مستقیم</span>

            <div className="contactIcon" aria-hidden="true">
              ☎
            </div>
          </div>

          <h3>نیاز به مشاوره دارید؟</h3>

          <p>
            برای ارتباط سریع‌تر می‌توانید مستقیماً با ما تماس بگیرید، از طریق
            واتساپ پیام ارسال کنید یا موقعیت مجموعه را روی نقشه مشاهده کنید.
          </p>

          <div className="contactButtons">
            <a href="tel:04432382448">تماس با ما</a>

            <a
              href="https://wa.me/989145079265"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ارتباط با ما در واتساپ"
            >
              واتساپ
            </a>

            <a
              href="https://maps.app.goo.gl/w1cCio1QEbvx73Mj9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="مشاهده موقعیت مجموعه روی نقشه"
            >
              موقعیت روی نقشه
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}