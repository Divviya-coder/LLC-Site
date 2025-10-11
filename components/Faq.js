const Faq = () => {
  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Some Question
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-content">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="false"
                        aria-controls="faq1"
                      >
                        Why do I need business consulting to grow my company?
                      </button>
                    </h4>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Strategic consulting provides expert insights and structured planning to help you identify opportunities, minimize risks, and accelerate growth effectively.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="true"
                        aria-controls="faq2"
                      >
                        How does Keystone help increase operational efficiency?
                      </button>
                    </h4>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Our consultants assess your existing processes, identify inefficiencies, and implement sustainable improvements that reduce waste and improve output.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        What industries do you serve?
                      </button>
                    </h4>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        We work across sectors including finance, technology, healthcare, manufacturing, and energy — adapting strategies to fit each client’s specific context.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Do you provide long-term support after project delivery?
                      </button>
                    </h4>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Yes. We offer post-project advisory and performance monitoring to ensure continued success and scalability.
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h4 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq5"
                        aria-expanded="false"
                        aria-controls="faq5"
                      >
                        Do you work with international clients?
                      </button>
                    </h4>
                    <div
                      id="faq5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Absolutely. Keystone Strategic Consultants LLC serves clients globally, leveraging cross-industry experience to deliver localized strategies with global standards.
                      </div>
                    </div>
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
export default Faq;
