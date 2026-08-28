
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شیلنگ هیدرولیک | فروش و پرس شیلنگ هیدرولیک",
  description:
    "فروش، تأمین، ساخت و پرس انواع شیلنگ هیدرولیک سیم‌دار یک‌لا، دولا و چهارلا در سایزهای مختلف برای ماشین‌آلات صنعتی، راه‌سازی و کشاورزی.",
};

const hoseSpecs = [
  {
    size: '1/4"',
    oneLayer: "225 bar",
    twoLayer: "400 bar",
    fourLayer: "—",
  },
  {
    size: '5/16"',
    oneLayer: "215 bar",
    twoLayer: "350 bar",
    fourLayer: "—",
  },
  {
    size: '3/8"',
    oneLayer: "180 bar",
    twoLayer: "330 bar",
    fourLayer: "—",
  },
  {
    size: '1/2"',
    oneLayer: "160 bar",
    twoLayer: "275 bar",
    fourLayer: "—",
  },
  {
    size: '5/8"',
    oneLayer: "130 bar",
    twoLayer: "250 bar",
    fourLayer: "—",
  },
  {
    size: '3/4"',
    oneLayer: "105 bar",
    twoLayer: "215 bar",
    fourLayer: "420 bar",
  },
  {
    size: '1"',
    oneLayer: "88 bar",
    twoLayer: "165 bar",
    fourLayer: "380 bar",
  },
  {
    size: '1 1/4"',
    oneLayer: "62 bar",
    twoLayer: "125 bar",
    fourLayer: "350 bar",
  },
  {
    size: '1 1/2"',
    oneLayer: "50 bar",
    twoLayer: "90 bar",
    fourLayer: "290 bar",
  },
];

const products = [
  {
    number: "01",
    title: "شیلنگ سیم‌دار یک‌لا",
    image: "/images/یک-لایه-سیم.jpg",
    alt: "شیلنگ هیدرولیک سیم‌دار یک‌لا",
    text:
      "مناسب برای بسیاری از مدارهای هیدرولیک با فشار و شرایط کاری معمول. ساختار یک‌لایه در بسیاری از کاربردهای هیدرولیک انعطاف‌پذیری مناسبی ارائه می‌دهد.",
    extra:
      "انتخاب نهایی باید بر اساس فشار کاری، نوع سیال، دمای کاری، شعاع خم و نوع اتصال انجام شود.",
  },
  {
    number: "02",
    title: "شیلنگ سیم‌دار دو‌لا",
    image: "/images/دو-لایه-سیم.jpg",
    alt: "شیلنگ هیدرولیک سیم‌دار دو‌لا",
    text:
      "مناسب برای مدارهای هیدرولیک با فشار و شرایط کاری بالاتر. ساختار دو لایه تقویت سیمی مقاومت بیشتری در برابر فشار ایجاد می‌کند.",
    extra:
      "برای انتخاب صحیح باید فشار کاری و لحظه‌ای، نوع سیال، دمای محیط و سیال، شعاع خم و نوع اتصال بررسی شود.",
  },
  {
    number: "03",
    title: "شیلنگ سیم‌دار چهار‌لا",
    image: "/images/چهار-لایه-سیم.jpg",
    alt: "شیلنگ هیدرولیک سیم‌دار چهار‌لا",
    text:
      "مناسب برای کاربردهای سنگین و مدارهایی که به تحمل فشار بالاتر و مقاومت بیشتر در شرایط کاری سخت نیاز دارند.",
    extra:
      "در انتخاب شیلنگ چهارلایه، مشخصات فنی سازنده، فشار کاری و لحظه‌ای، دما، نوع سیال، شعاع خم و نوع اتصال اهمیت ویژه‌ای دارند.",
  },
  {
    number: "04",
    title: "برندهای شیلنگ هیدرولیک",
    image: "/images/brands/brands-hydraulic.png",
    alt: "برندهای شیلنگ هیدرولیک FORTEX، BDM و SANAPOWER",
    text:
      "مجموعه مسافر شیلنگ‌های هیدرولیک را از برندهای مختلف، متناسب با نوع دستگاه، سایز و شرایط کاری تأمین می‌کند.",
    extra:
      "برند و مدل قابل تأمین ممکن است بر اساس سایز، نوع شیلنگ و موجودی روز متفاوت باشد.",
    brands: true,
  },
];

export default function ProductPage() {
  return (
    <main dir="rtl">
      <section className="servicesSection">
        {/* =========================
            Page Header
        ========================= */}

        <div className="sectionTitle">
          <span>محصولات تخصصی مسافر</span>

          <h1>شیلنگ هیدرولیک</h1>

          <div className="quickContact">
            <div>
              <span>قیمت و موجودی روز</span>
              <strong>برای سایز موردنظر استعلام بگیرید</strong>
            </div>

            <div className="quickContactButtons">
              <a href="tel:09145079265">📞 تماس</a>

              <a
                href="https://wa.me/989145079265"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 واتساپ
              </a>
            </div>
          </div>

          <p>
            انواع شیلنگ هیدرولیک فشار قوی برای ماشین‌آلات صنعتی، راه‌سازی،
            کشاورزی و سیستم‌های هیدرولیک. انتخاب شیلنگ بر اساس سایز، فشار کاری،
            نوع سیال، دمای کاری، مسیر نصب و نوع اتصال انجام می‌شود.
          </p>
        </div>

        {/* =========================
            Product Cards
        ========================= */}

        <div className="services">
          {products.map((product) => (
            <div className="card" key={product.number}>
              <span className="serviceNumber">{product.number}</span>

              <div className="productImageBox">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className={
                    product.brands
                      ? "brandImage"
                      : "productCardImage"
                  }
                />
              </div>

              <h2>{product.title}</h2>

              <p>{product.text}</p>

              {!product.brands && (
                <>
                  <p>
                    <strong>دمای کاری:</strong> مطابق مشخصات فنی مدل شیلنگ و
                    نوع سیال.
                  </p>

                  <p>{product.extra}</p>
                </>
              )}

              {product.brands && (
                <>
                  <p>{product.extra}</p>

                  <div className="brandAvailability">
                    <strong>برندهای قابل تأمین:</strong>

                    <span>FORTEX، BDM و SANAPOWER</span>
                  </div>
                </>
              )}
            </div>
          ))}

          {/* =========================
              Hydraulic Fittings
          ========================= */}

          <div className="card">
            <span className="serviceNumber">05</span>

            <h2>اتصالات هیدرولیک</h2>

            <p>
              تأمین و نصب انواع اتصالات هیدرولیک و انتخاب اتصال مناسب بر اساس
              نوع شیلنگ، دستگاه و سیستم مورد استفاده.
            </p>

            <p>
              انتخاب صحیح اتصال و روش نصب، نقش مهمی در ایمنی و طول عمر مجموعه
              شیلنگ هیدرولیک دارد.
            </p>
          </div>

          {/* =========================
              Hose Assembly
          ========================= */}

          <div className="card">
            <span className="serviceNumber">06</span>

            <h2>پرس و ساخت شیلنگ</h2>

            <p>
              ساخت و پرس شیلنگ هیدرولیک با دستگاه‌های پرس تخصصی و مونتاژ
              متناسب با نیاز دستگاه و شرایط کاری.
            </p>

            <p>
              شیلنگ و اتصالات بر اساس سایز، نوع اتصال و مشخصات فنی انتخاب و
              سپس مونتاژ و پرس می‌شوند.
            </p>
          </div>
        </div>

        {/* =========================
            Sizes
        ========================= */}

        <div className="sectionTitle">
          <h2>سایزهای شیلنگ هیدرولیک</h2>

          <p>
            شیلنگ‌های هیدرولیک در سایزهای مختلف از ۱/۴ تا ۱ و ۱/۲ اینچ، بسته
            به نوع شیلنگ و موجودی، قابل تأمین هستند. انتخاب سایز مناسب به دبی
            سیستم، فشار کاری، نوع دستگاه، مسیر نصب و نوع اتصال بستگی دارد.
          </p>

          <div className="productSizes">
            {hoseSpecs.map((hose) => (
              <span className="productSize" key={hose.size}>
                {hose.size}
              </span>
            ))}
          </div>
        </div>

        {/* =========================
            Technical Specifications
        ========================= */}

        <div className="productSpecs">
          <div className="productSpecsHeader">
            <h2>مشخصات فنی و فشار کاری شیلنگ‌های هیدرولیک</h2>

            <p>
              مقادیر جدول زیر به‌عنوان اطلاعات مرجع نمایش داده شده‌اند. فشار
              کاری مجاز نهایی باید با مشخصات فنی درج‌شده روی شیلنگ، برند، مدل و
              شرایط واقعی سیستم تطبیق داده شود.
            </p>
          </div>

          <div className="productTableWrapper">
            <table className="productTable">
              <thead>
                <tr>
                  <th>سایز</th>
                  <th>یک‌لا R1</th>
                  <th>دو‌لا R2</th>
                  <th>چهارلا 4SH</th>
                  <th>دمای کاری</th>
                </tr>
              </thead>

              <tbody>
                {hoseSpecs.map((hose) => (
                  <tr key={hose.size}>
                    <td>{hose.size}</td>
                    <td>{hose.oneLayer}</td>
                    <td>{hose.twoLayer}</td>
                    <td>{hose.fourLayer}</td>
                    <td>مطابق مشخصات مدل</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="productSpecsNote">
            <strong>نکته:</strong>{" "}
            فشار کاری شیلنگ باید با حداکثر فشار واقعی سیستم، فشارهای لحظه‌ای،
            نوع سیال، دمای کاری، اتصالات و روش صحیح پرس مطابقت داشته باشد.
            مقادیر جدول جایگزین مشخصات فنی سازنده محصول نیستند.
          </p>
        </div>

        {/* =========================
            Selection Guide
        ========================= */}

        <div className="sectionTitle">
          <h2>راهنمای انتخاب شیلنگ هیدرولیک</h2>

          <p>
            برای انتخاب صحیح شیلنگ، قطر داخلی، فشار کاری، فشار لحظه‌ای، نوع
            سیال، دمای کاری، شعاع خم، مسیر نصب و نوع اتصال باید بررسی شوند.
          </p>

          <h2>اهمیت فشار کاری</h2>

          <p>
            شیلنگ باید برای فشار کاری واقعی سیستم و همچنین فشارهای لحظه‌ای
            احتمالی مناسب باشد. استفاده از شیلنگ با ظرفیت نامناسب می‌تواند
            باعث کاهش عمر شیلنگ و ایجاد خطر در سیستم شود.
          </p>

          <h2>اهمیت دمای کاری</h2>

          <p>
            دمای سیال و دمای محیط هر دو در انتخاب شیلنگ اهمیت دارند. محدوده
            مجاز دما باید بر اساس مشخصات مدل شیلنگ و نوع سیال بررسی شود.
          </p>

          <h2>کاربرد شیلنگ هیدرولیک</h2>

          <p>
            شیلنگ‌های هیدرولیک در ماشین‌آلات راه‌سازی، تجهیزات کشاورزی،
            ماشین‌آلات صنعتی، دستگاه‌های هیدرولیک و سیستم‌های انتقال روغن تحت
            فشار استفاده می‌شوند.
          </p>

          <h2>خدمات مجموعه مسافر</h2>

          <p>
            مجموعه مسافر علاوه بر تأمین شیلنگ و اتصالات، خدمات ساخت، پرس،
            تعویض و تعمیر شیلنگ‌های هیدرولیک را نیز ارائه می‌دهد.
          </p>

          {/* =========================
              CTA
          ========================= */}

          <div className="productCTA">
            <div className="productCTAContent">
              <span className="productCTATag">
                مشاوره و استعلام قیمت
              </span>

              <h2>برای انتخاب شیلنگ مناسب با ما در تماس باشید</h2>

              <p>
                برای اطلاع از قیمت و موجودی، انتخاب سایز مناسب یا ساخت و پرس
                شیلنگ هیدرولیک، می‌توانید مستقیماً با مجموعه مسافر تماس بگیرید
                یا درخواست خود را از طریق واتساپ ارسال کنید.
              </p>

              <div className="productCTAButtons">
                <a href="tel:09145079265">📞 تماس مستقیم</a>

                <a
                  href="https://wa.me/989145079265"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 استعلام در واتساپ
                </a>
              </div>
            </div>
          </div>

          <p>
            <a href="/">بازگشت به صفحه اصلی</a>
          </p>
        </div>
      </section>
    </main>
  );
}
