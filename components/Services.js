import Link from "next/link";

const Services = () => {
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            What We Do
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
          We Provide the Best Business Consulting services to build a modern & strategically strong foundation for our clients
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-keywords" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Business Strategy Planning</Link>
                </h3>
                <p>
                We analyze your business structure, market position, and goals to craft a custom strategy that drives performance and competitive advantage.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items active">
              <div className="icon">
                <i className="flaticon-social-media" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Financial Consulting</Link>
                </h3>
                <p>
                Our team delivers clear financial insights<br/> and planning to help businesses optimize<br/> cash flow, reduce costs, and increase<br/> profitability.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-email-marketing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Operations Improvement</Link>
                </h3>
                <p>
                We streamline processes, enhance productivity, and implement data-driven systems that improve organizational efficiency.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-copy-writing" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Market Research & Analysis</Link>
                </h3>
                <p>
                We conduct comprehensive market<br/> research to uncover new opportunities, <br/>assess competition, and guide<br/> informed decision-making.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-software-development" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Risk Management</Link>
                </h3>
                <p>
                Our consultants help you identify, evaluate, and mitigate risks—ensuring business continuity and long-term<br/> resilience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-box-items">
              <div className="icon">
                <i className="flaticon-www" />
              </div>
              <div className="content">
                <h3>
                  <Link href="service-details">Leadership Transformation</Link>
                </h3>
                <p>
                We design training and development programs that empower leaders, improve team dynamics, and build a culture<br/> of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

export const Service2 = ({ paddingTop = 0, title = "Popular Services" }) => {
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            {title}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            We Provide Best Modern SEO <br />
            Service For Your Business
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/08.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Keyword Research</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/09.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Content Writing</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="service-popular-items">
              <div className="service-image">
                <img src="assets/img/service/10.png" alt="img" />
              </div>
              <div className="service-content">
                <h3>
                  <Link href="service-details">Site Optimizations</Link>
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptatem
                  accusantium
                </p>
                <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
