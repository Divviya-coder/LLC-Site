import Link from "next/link";

export const CoreFeatures = ({ paddingTop = 0, title = "Popular Services" }) => {
    return (
        <section
            className={`service-section section-padding pt-${paddingTop}`}
            id="services"
        >
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-content wow fadeInUp">
                        <img src="assets/img/bale.png" alt="img" />
                        Our Consulting Approach — Focused, Agile, and Impact-Driven
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        We combine strategic insight with practical expertise to deliver transformation at every level of your organization.
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
                                    <Link href="service-details">Strategic Market Research</Link>
                                </h3>
                                <p>
                                    Our in-depth research frameworks uncover market trends, customer behavior, and competitive positioning.
                                </p>
                                {/* <Link href="service-details" className="theme-btn bg-2">
                  Learn More <i className="far fa-arrow-right" />
                </Link> */}
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
                                    <Link href="service-details">Process Optimization</Link>
                                </h3>
                                <p>
                                    We streamline business operations to reduce costs and improve performance across departments.
                                </p>
                                {/* <Link href="service-details" className="theme-btn bg-2">
                                    Learn More <i className="far fa-arrow-right" />
                                </Link> */}
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
                                    <Link href="service-details">Project Implementation & Success Management</Link>
                                </h3>
                                <p>
                                    From planning to post-launch review, we ensure every initiative delivers measurable success.
                                </p>
                                {/* <Link href="service-details" className="theme-btn bg-2">
                                    Learn More <i className="far fa-arrow-right" />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
