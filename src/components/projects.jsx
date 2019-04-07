import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            htmlHref: "#html-anchor",
            javaHref: "#javascript-anchor",
            reactHref: "#react-anchor",
            react2Href: "#react-2",
        };

    }

    render() {
        return (
            <section id="projects" className="projects-section" >

                <div id="p-scroll">
                    <h1 className="pro-title">
                        <span className="panel-shadow pro-title-span">My Projects</span>
                    </h1>
                    <div id="pro-anchor" className="d-flex justify-content-center">
                        <a href={this.state.htmlHref} className="btn-html">HTML</a>
                        <a href={this.state.javaHref} className="btn-javascript">JavaScript</a>
                        <a href={this.state.reactHref} className="btn-react">React</a>
                    </div>

                    <div id="html-anchor"><span className="panel-shadow pro-title-html">HTML</span></div>

                    <div id="html" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/covalencelab1/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/firstwebsite.png" alt="html website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>HTML - My First Website</h4>
                                <p id="pro-para" className="mb-0">This was originally my first HTML website during my Covalence software bootcamp that uses only HTML and CSS.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.javaHref} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.react2Href} className="btn pro-last-btn">LAST</a>
                            </div>

                        </div>
                    </div>

                    <div id="javascript-anchor"><span className="panel-shadow pro-title-javascript">JavaScript</span></div>

                    <div id="javascript" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/day8_lab8_oop/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/dice.png" alt="javascript website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>JavaScript - Dice Generator</h4>
                                <p id="pro-para" className="mb-0">This was a fun exercise at my Covalence bootcamp to make a dice generator with JavaScript.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.htmlHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.reactHref} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.react2Href} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <div id="react-anchor"><span className="panel-shadow pro-title-react">React</span></div>

                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/day11_lab10_react/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/chirper.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - Chirper</h4>
                                <p id="pro-para" className="mb-0">This is a ReactJS project that posts text.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.javaHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.react2Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.react2Href} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <div id="react-2" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/Reacting-To-APIs/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/ghibli.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - Studio Ghibli API Fetch</h4>
                                <p id="pro-para" className="mb-0">This React project fetches and displays API data from https://ghibliapi.herokuapp.com/.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.reactHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.htmlHref} className="btn pro-last-btn">FIRST</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Projects;