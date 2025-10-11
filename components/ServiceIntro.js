import Counter from "./Counter";

const ServiceIntro = ({ paddingTop = 0 }) => {
    return (
        <section
            className={`grow-business-section fix section-padding pt-${paddingTop}`}
        >
            <div className="container">
                <div className="grow-business-wrapper-2">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-5">
                            <div
                                className="grow-business-image wow fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <img src="assets/img/grow/02.jpg" alt="img" />
                                <div
                                    className="grap-shape float-bob-x wow fadeInLeft"
                                    data-wow-delay=".5s"
                                >
                                    <img src="assets/img/grow/grap.png" alt="shape-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grow-business-content">
                                <div className="section-title">
                                    <span className="sub-content wow fadeInUp">
                                        <img src="assets/img/bale.png" alt="img" />
                                        Grow your Business
                                    </span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Innovative Business Growth Through Strategic Consulting
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    At Keystone Strategic Consultants LLC, we specialize in helping organizations evolve, perform, and thrive in an ever-changing business landscape. From strategy to execution, we deliver measurable results that accelerate growth, improve efficiency, and enhance competitiveness.
                                </p>
                                <div className="grow-counting-area">
                                    <div
                                        className="grow-counting-items wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <h2>
                                            <span className="count">
                                                <Counter end={25} />
                                            </span>
                                            %
                                        </h2>
                                        <p>Increase Sales</p>
                                    </div>
                                    <div
                                        className="grow-counting-items wow fadeInUp"
                                        data-wow-delay=".5s"
                                    >
                                        <h2>
                                            <span className="count">
                                                <Counter end={4} />
                                            </span>
                                            %
                                        </h2>
                                        <p>Reduced Losses</p>
                                    </div>
                                    <div
                                        className="grow-counting-items wow fadeInUp"
                                        data-wow-delay=".7s"
                                    >
                                        <h2>
                                            <span className="count">
                                                <Counter end={27} />
                                            </span>
                                            %
                                        </h2>
                                        <p>Business growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ServiceIntro;

