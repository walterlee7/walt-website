import React, { Component, Fragment } from 'react';

class Contact extends Component {

    render() {
        return (
            <Fragment>
                <section id="contact" className="contact-section bg-black" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-30">
                                    <div className="card-body text-center">
                                        <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Github</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50"><a href="https://github.com/walterlee7">walterlee7</a></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-30">
                                    <div className="card-body text-center">
                                        <i className="fas fa-envelope text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">Email</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50">
                                            <a href="#">walter.lee9@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-3 mb-md-0">
                                <div className="card py-4 h-30">
                                    <div className="card-body text-center">
                                        <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                        <h4 className="text-uppercase m-0">LinkedIn</h4>
                                        <hr className="my-4" />
                                        <div className="small text-black-50"><a href="https://www.linkedin.com/in/walterlee7/">walterlee7</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="acknowledge">
                    <h4 className="container">Acknowledgements</h4>
                </section>
                <footer className="bg-black small text-center text-white-50">
                    <div className="container">
                        Walter Lee Website March 2019
                     </div>
                </footer>
            </Fragment>

        );
    }
}

export default Contact;