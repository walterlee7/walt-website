import React, { Component } from 'react';

class Projects extends Component {

    render() {
        return (
            <section id="projects" className="projects-section" >

                <div id="p-scroll">
                    <h1 className="pro-title">
                        <span className="pro-title-span">My Projects</span>
                    </h1>
                    <div id="pro-anchor" className="d-flex justify-content-center">
                        <a href="#react" className="btn-react">React</a>
                        <a href="#html" className="btn-html">HTML</a>
                        <a href="#python" className="btn-python">Python</a>
                    </div>
                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src="bootstrap/img/questionMark.png" alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React Project</h4>
                                <p id="pro-para" className="mb-0">Donec ut ante fringilla, varius ligula vitae, volutpat tortor. Donec porta malesuada dolor, in iaculis enim interdum nec. Morbi faucibus quis eros ac ornare. Sed sit amet eros eu nisi tristique molestie. Donec volutpat placerat molestie. Mauris massa mauris, blandit a consequat quis, dignissim ut ante. Sed sed risus vitae risus imperdiet ultricies. Nulla quam justo, viverra sed viverra non, consequat et sapien. Nullam leo leo, euismod in metus sed, bibendum condimentum lacus. Phasellus at auctor nulla. Nullam purus lectus, congue nec ex quis, mollis laoreet turpis. Duis eu ultricies massa.</p>
                            </div>
                        </div>
                    </div>
                    <div id="html" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src="bootstrap/img/questionMark.png" alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>HTML Project</h4>
                                <p id="pro-para" className="mb-0">Donec ut ante fringilla, varius ligula vitae, volutpat tortor. Donec porta malesuada dolor, in iaculis enim interdum nec. Morbi faucibus quis eros ac ornare. Sed sit amet eros eu nisi tristique molestie. Donec volutpat placerat molestie. Mauris massa mauris, blandit a consequat quis, dignissim ut ante. Sed sed risus vitae risus imperdiet ultricies. Nulla quam justo, viverra sed viverra non, consequat et sapien. Nullam leo leo, euismod in metus sed, bibendum condimentum lacus. Phasellus at auctor nulla. Nullam purus lectus, congue nec ex quis, mollis laoreet turpis. Duis eu ultricies massa.</p>
                            </div>
                        </div>
                    </div>
                    <div id="python" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0" src="bootstrap/img/questionMark.png" alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Python Project</h4>
                                <p id="pro-para" className="mb-0">Donec ut ante fringilla, varius ligula vitae, volutpat tortor. Donec porta malesuada dolor, in iaculis enim interdum nec. Morbi faucibus quis eros ac ornare. Sed sit amet eros eu nisi tristique molestie. Donec volutpat placerat molestie. Mauris massa mauris, blandit a consequat quis, dignissim ut ante. Sed sed risus vitae risus imperdiet ultricies. Nulla quam justo, viverra sed viverra non, consequat et sapien. Nullam leo leo, euismod in metus sed, bibendum condimentum lacus. Phasellus at auctor nulla. Nullam purus lectus, congue nec ex quis, mollis laoreet turpis. Duis eu ultricies massa.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Projects;