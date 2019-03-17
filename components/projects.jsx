import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (
            <section id="projects" class="projects-section bg-light">
                <div class="container">


                    <div class="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div class="col-xl-8 col-lg-7">
                            <img class="img-fluid mb-3 mb-lg-0" src="bootstrap/img/bg-masthead.jpg" alt="" />
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Project</h4>
                                <p class="text-black-50 mb-0">...</p>
                            </div>
                        </div>
                    </div>


                    <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div class="col-lg-6">
                            <img class="img-fluid" src="bootstrap/img/demo-image-01.jpg" alt="" />
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-65 project">
                                <div class="d-flex h-50">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Project 1</h4>
                                        <p class="mb-0 text-white-50">...</p>
                                        <hr class="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row justify-content-center no-gutters">
                        <div class="col-lg-6">
                            <img class="img-fluid" src="bootstrap/img/demo-image-02.jpg" alt="" />
                        </div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-65 project">
                                <div class="d-flex h-50">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Project 2</h4>
                                        <p class="mb-0 text-white-50">...</p>
                                        <hr class="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Projects;