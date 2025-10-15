import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { TestimonialSlider1 } from "@/components/TestimonialSlider";
import Whatwedocta from "@/components/Whatwedocta";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Partners" />
      <section className="about-team-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                About Our Collaborations
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Strategic Partnerships that Drive Real Impact
              </h2>
            </div>
            <div className="text-items">
              <p className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                At Keystone Strategic Consultants LLC, collaboration is at the heart of everything we do. We believe that the most successful outcomes are built through strong, strategic partnerships — combining our consulting expertise with the innovation and capabilities of our partners.

              </p>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Together, we deliver comprehensive solutions that help clients achieve measurable business results, embrace digital transformation, and sustain long-term growth.

              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay=".3s">
              <div className="about-image">
                <img src="assets/img/ourpartners1.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay=".5s">
              <div className="about-image">
                <img src="assets/img/ourpartners2.jpg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Our Trusted Partners
            </span>
            <h2>Meet Our Strategic & Technology Partners</h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Eduardo D. Howard */}
                    {/* </Link> */}
                  </h4>
                  <p>CEO &amp; Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Jeremiah D. Marshall */}
                    {/* </Link> */}
                  </h4>
                  <p>Business Consultant</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Jeremy B. Forsberg */}
                    {/* </Link> */}
                  </h4>
                  <p>Senior Manager</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Duane V. McCormick */}
                    {/* </Link> */}
                  </h4>
                  <p>Junior Consultant</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* James H. Richardson */}
                    {/* </Link> */}
                  </h4>
                  <p>Digital Marketer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Duane V. McCormick */}
                    {/* </Link> */}
                  </h4>
                  <p>Junior Consultant</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Wayne D. Rodriguez */}
                    {/* </Link> */}
                  </h4>
                  <p>JWeb Developer</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                  <img src="assets/img/dummypartner.jpeg" alt="team-img" />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                    {/* <Link href="team-details"> */}
                    {/* Theodore E. Johnson */}
                    {/* </Link> */}
                  </h4>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Whatwedocta sectionPadding />
      <section className="testimonial-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-0">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Partner Testimonials
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              What Our Partners Say
            </h2>
          </div>
          <div className="testimonial-wrapper pt-5">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="testimonial-image">
                  <img src="assets/img/testimonial.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-5">
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
