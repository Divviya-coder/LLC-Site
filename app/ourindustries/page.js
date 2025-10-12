import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Popular Industries" pageTitle="Our Industries" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Work Gallery
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Featured Projects
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="row justify-content-center">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry1.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Financial Service</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Empowering Banks & Financial Institutions <br /> Through Strategy and Risk Management
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry2.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Healthcare & Life Sciences</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Enhancing Patient Outcomes <br /> With Strategic Healthcare Innovation
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry3.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Technology & IT Services</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Driving Digital Transformation <br /> For the Modern Enterprise
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry4.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Manufacturing & Industrial</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Optimizing Operations and <br /> Supply Chain Efficiency
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry5.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Energy & Utilities</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Sustainable Growth Strategies <br /> For the Energy Transition
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry6.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Retail & Consumer Goods</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Redefining Customer Experiences <br /> Through Data and Insights
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry7.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Education & Training</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Building Smart Learning Ecosystems <br /> Through Strategy and Technology
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="project-card-items">
                    <div className="project-image">
                      <img src="assets/img/industry8.jpg" alt="img" />
                    </div>
                    <div className="project-content">
                      <p>Public Sector</p>
                      <h3>
                        {/* <Link href="project-details"> */}
                        Driving Efficiency and Innovation <br /> In Government Services
                        {/* </Link> */}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
