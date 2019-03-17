import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <section id="contact" class="contact-section bg-black">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-30">
                                <div class="card-body text-center">
                                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Github</h4>
                                    <hr class="my-4" />
                                    <div class="small text-black-50">...</div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-30">
                                <div class="card-body text-center">
                                    <i class="fas fa-envelope text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Email</h4>
                                    <hr class="my-4" />
                                    <div class="small text-black-50">
                                        <a href="#">walter.lee9@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-30">
                                <div class="card-body text-center">
                                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">LinkedIn</h4>
                                    <hr class="my-4" />
                                    <div class="small text-black-50">...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;