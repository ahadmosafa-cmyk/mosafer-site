const products = [
  {
    number: "01",
    title: "شیلنگ هیدرولیک",
    description:
      "انواع شیلنگ هیدرولیک فشار قوی، سیم‌دار یک لا، دو لا و چهار لا برای ماشین‌آلات صنعتی، راه‌سازی، کشاورزی و سیستم‌های هیدرولیک.",
    href: "/products/hydraulic-hose",
  },
  {
    number: "02",
    title: "شیلنگ پنوماتیک",
    description:
      "انواع شیلنگ و تجهیزات پنوماتیک برای انتقال هوای فشرده و استفاده در سیستم‌های صنعتی و ماشین‌آلات.",
    href: "#contact",
  },
  {
    number: "03",
    title: "شیلنگ‌های شفاف",
    description:
      "شیلنگ‌های شفاف فنردار و انواع شیلنگ مناسب برای کاربردهای غذایی، شیمیایی و انتقال سیالات.",
    href: "#contact",
  },
  {
    number: "04",
    title: "اتصالات هیدرولیک و پنوماتیک",
    description:
      "تأمین انواع اتصالات هیدرولیک و پنوماتیک، اتصالات آلمانی، انگلیسی، کاترپیلاری، بیلی و کوماتسو.",
    href: "#contact",
  },
  {
    number: "05",
    title: "شیلنگ کولر",
    description:
      "ساخت و تأمین شیلنگ کولر به همراه اتصالات آلومینیومی مناسب برای سیستم‌های مختلف.",
    href: "#contact",
  },
  {
    number: "06",
    title: "شیلنگ کارواش ضدسایش",
    description:
      "انواع شیلنگ کارواش مقاوم در برابر سایش برای استفاده در شرایط کاری مختلف.",
    href: "#contact",
  },
];

export default function Products() {
  return (
    <section className="servicesSection" id="products">
      <div className="sectionTitle">
        <span>محصولات تخصصی مسافر</span>

        <h2>شیلنگ و اتصالات هیدرولیک و پنوماتیک</h2>

        <p>
          مجموعه مسافر علاوه بر خدمات تخصصی پرس و ساخت شیلنگ، تأمین انواع
          شیلنگ، اتصالات و تجهیزات هیدرولیک و پنوماتیک را نیز انجام می‌دهد.
        </p>
      </div>

      <div className="services">
        {products.map((product) => (
          <div className="card" key={product.number}>
            <span className="serviceNumber">{product.number}</span>

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <a href={product.href}>
              {product.href === "#contact"
                ? "استعلام و مشاوره"
                : "مشاهده محصول"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}