import Link from "next/link";

const MainService = () => {
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
                        Empowering Businesses with Modern, Tailored Consulting Solutions
                    </span>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        We offer a comprehensive suite of consulting services designed to strengthen your business foundation, enhance productivity, and ensure long-term success.
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
                                    <Link href="service-details">Business Strategy & Planning</Link>
                                </h3>
                                <p>
                                    We work closely with leadership teams to define clear goals, identify opportunities, and create actionable strategies that deliver measurable growth.
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
                                    <Link href="service-details">Market Research & Business Intelligence</Link>
                                </h3>
                                <p>
                                    Turn insights into strategy. Our research and data analytics services help you understand your market, competitors, and growth potential.
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
                                    <Link href="service-details">Digital Transformation</Link>
                                </h3>
                                <p>
                                    Leverage emerging technologies, data analytics, and automation to modernize business operations, enhance decision-making, and create agile, digital-first organizations for sustainable growth.
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
                                    <Link href="service-details">Organizational Development</Link>
                                </h3>
                                <p>
                                    Empower your workforce through leadership development, change management, and culture transformation programs.
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
                                    <Link href="service-details">Operational Excellence</Link>
                                </h3>
                                <p>
                                    Optimize workflows, eliminate inefficiencies, and implement scalable solutions to drive productivity and profitability.
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
                                    <Link href="service-details">Financial & Risk Advisory</Link>
                                </h3>
                                <p>
                                    Build resilient business models with our financial planning, cost management, and risk assessment solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainService;
