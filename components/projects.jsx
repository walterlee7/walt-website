import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (

            <section id="projects" className="projects-section" >
                <div className="container">
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src="bootstrap/img/bg-masthead.jpg" alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Project</h4>
                                <p className="text-black-50 mb-0">Words</p>
                            </div>
                        </div>
                    </div>
                </div>


            </section >
        );
    }
}

export default Projects;