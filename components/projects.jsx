import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (
            <section id="projects" className="projects-section bg-light">
                <div className="container">


                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src="bootstrap/img/bg-masthead.jpg" alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Project</h4>
                                <p className="text-black-50 mb-0">...</p>
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="bootstrap/img/demo-image-01.jpg" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-65 project">
                                <div className="d-flex h-50">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="text-white">Project 1</h4>
                                        <p className="mb-0 text-white-50">...</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="bootstrap/img/demo-image-02.jpg" alt="" />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-65 project">
                                <div className="d-flex h-50">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="text-white">Project 2</h4>
                                        <p className="mb-0 text-white-50">...</p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
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