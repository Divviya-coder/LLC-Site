import Link from "next/link";

const Whatwedocta = ({ sectionPadding = false }) => {
    return (
        <section
            className={`cta-marketing-section fix ${sectionPadding ? "section-padding" : ""
                }`}
        >
            <div className="container">
                <div className="cta-marketing-wrapper">
                    <div className="content">
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Ready to Accelerate Your Business Growth?
                        </h2>
                        <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                            Let’s work together to design strategies that build resilience, efficiency, and innovation. Partner with Keystone Strategic Consultants LLC and move your business forward with confidence.
                        </p>
                    </div>
                    <div className="thumb wow fadeInUp" data-wow-delay=".6s">
                        <img src="assets/img/cta/cta-marketing.png" alt="img" />
                        <div className="circle-shape">
                            <img src="assets/img/cta/circle-shape.png" alt="shape-img" />
                        </div>
                    </div>
                    <Link
                        href="whoweare"
                        className="theme-btn bg-2 wow fadeInUp"
                        data-wow-delay=".7s"
                    >
                        Discover More <i className="far fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Whatwedocta;
