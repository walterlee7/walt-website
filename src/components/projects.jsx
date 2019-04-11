import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            htmlHref: "#html-anchor",
            javaHref: "#javascript-anchor",
            java2Href: "#javascript-2",
            reactHref: "#react-anchor",
            react2Href: "#react-2",
            cloneHref: "#clone-anchor",
            clone2Href: "#clone-2",
            clone3Href: "#clone-3",
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

                    <div id="pro-clone-anchor" className="d-flex justify-content-center">
                        <a href={this.state.cloneHref} className="btn-clone">Clone</a>
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
                                <a href={this.state.java2Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.react2Href} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="javascript-2" />

                    <div id="javascript" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/day9_20180118_lab9/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/shapes.png" alt="javascript website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>JavaScript - Shape Generator</h4>
                                <p id="pro-para" className="mb-0">This was a fun exercise at my Covalence bootcamp to make a shape generator with JavaScript.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.javaHref} className="btn pro-prev-btn">PREV</a>
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
                                <a href={this.state.java2Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.react2Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="react-2" />

                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/Reacting-To-APIs/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/ghibli.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - Studio Ghibli API Fetch</h4>
                                <p id="pro-para" className="mb-0">This React project fetches and displays API data from <a href="https://ghibliapi.herokuapp.com/" target="_blank" rel="noopener noreferrer">the studio website</a>.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.reactHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                            </div>
                        </div>
                    </div>

                    <div id="clone-anchor"><span className="panel-shadow pro-title-clone">Clone</span></div>

                    <div className="panel-shadow">
                        <p className="clone-style">This section showcases my Github projects that were cloned from amazing programmers that I am refactoring over time.</p>
                    </div>

                    <div id="clone" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text-white" href="https://walterlee7.github.io/canvas-fireworks-clone/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/fireworks.png" alt="canvas website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Canvas - Fireworks</h4>
                                <p id="pro-para" className="mb-0">This is a Canvas Fireworks demo by <a href="https://codepen.io/jackrugile/" target="_blank" rel="noopener noreferrer">Jack Rugile</a>.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.clone2Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.clone3Href} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="clone-2" />

                    <div id="clone" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text-white" href="https://walterlee7.github.io/javascript-piano-clone/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/piano.png" alt="javascript website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>JavaScript - Piano</h4>
                                <p id="pro-para" className="mb-0">This is a JavaScript Piano project that is a clone of this wonderful project by <a href="https://codepen.io/gabrielcarol/" target="_blank" rel="noopener noreferrer">Caroline Gabriel</a>.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.cloneHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.clone3Href} className="btn pro-next-btn">NEXT</a>
                            </div>
                        </div>
                    </div>

                    <hr id="clone-3" />

                    <div id="clone" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/javascript-solitaire-clone/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/solitaire.png" alt="javascript website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>JavaScript - Solitaire</h4>
                                <p id="pro-para" className="mb-0">This is a click to move Solitaire game in JavaScript/BootStrap cloned from <a href="https://codepen.io/bfa/pen/ggGYeE" target="_blank" rel="noopener noreferrer">Brent Alexander</a>.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.clone2Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.cloneHref} className="btn pro-first-btn">FIRST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="pro-space" />

                </div>
            </section >
        );
    }
}

export default Projects;