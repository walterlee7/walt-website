import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topHref: "#pro-section",
            htmlHref: "#html-section",
            javaHref: "#javascript-section",
            java2Href: "#javascript-2",
            reactHref: "#react-section",
            react2Href: "#react-2",
            react3Href: "#react-3",
            react4Href: "#react-4",
            react5Href: "#react-5",
            vueHref: "#vue-section",
            cloneHref: "#clone-section",
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

                    <div id="pro-section" className="d-flex justify-content-center">
                        <a href={this.state.htmlHref} className="btn-html">HTML</a>
                        <a href={this.state.javaHref} className="btn-javascript">JavaScript</a>
                        <a href={this.state.reactHref} className="btn-react">React</a>
                        <a href={this.state.vueHref} className="btn-vue">Vue</a>
                    </div>

                    <div id="pro-clone-anchor" className="d-flex justify-content-center">
                        <a href={this.state.cloneHref} className="btn-clone">Clone</a>
                    </div>

                    <div className="panel-shadow">
                        <p className="frontend-style">This section showcases my Frontend projects on Github.</p>
                    </div>

                    <div id="html-section"><span className="panel-shadow pro-title-html">HTML</span></div>

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
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>

                        </div>
                    </div>

                    <div id="javascript-section"><span className="panel-shadow pro-title-javascript">JavaScript</span></div>

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
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
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
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <div id="react-section"><span className="panel-shadow pro-title-react">React</span></div>

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
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="react-2" />

                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/react-material-ui-project/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/material-ui.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - Material UI Layouts</h4>
                                <p id="pro-para" className="mb-0">This React project showcases different Material-UI layouts from <a href="https://material-ui.com/getting-started/page-layout-examples/" target="_blank" rel="noopener noreferrer">Material-UI website</a>.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.reactHref} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.react3Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="react-3" />

                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/react-redux-project/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/redux.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - Redux Counter</h4>
                                <p id="pro-para" className="mb-0">This React project uses Redux to store state data showcased thru a number counter.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.react2Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.react4Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="react-4" />

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
                                <a href={this.state.react3Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.react5Href} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.vueHref} className="btn pro-last-btn">LAST</a>
                            </div>
                        </div>
                    </div>

                    <hr id="react-5" />

                    <div id="react" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/react-us-state-capital-quiz/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/stateQuiz.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>React - U.S. State Capital Quiz</h4>
                                <p id="pro-para" className="mb-0">This React project fetches a JSON of questions of U.S. state capitals and turns it into a quiz.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.react4Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.vueHref} className="btn pro-next-btn">NEXT</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                            </div>
                        </div>
                    </div>

                    <div id="vue-section"><span className="panel-shadow pro-title-vue">Vue</span></div>

                    <div id="vue" className="pro-card row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="img-container col-xl-8 col-lg-7">
                            <a id="pro-img-text" href="https://walterlee7.github.io/vue-js-tutorial/" target="_blank" rel="noopener noreferrer"><div className="img-text">Click to View</div></a>
                            <img className="pro-img img-fluid mb-3 mb-lg-0" src="pro-imgs/vueTutorial.png" alt="react website" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4 id="pro-para-vue">Vue - Vue.js Directive Tutorial</h4>
                                <p id="pro-para-vue" className="mb-0">This is an introduction to Vue.js directives.</p>
                            </div>
                            <div className="text-center">
                                <a href={this.state.react4Href} className="btn pro-prev-btn">PREV</a>
                                <a href={this.state.htmlHref} className="btn pro-first-btn">FIRST</a>
                                <a href={this.state.topHref} className="btn pro-top-btn">TOP</a>
                            </div>
                        </div>
                    </div>

                    <div id="clone-section"><span className="panel-shadow pro-title-clone">Clone</span></div>

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
                                <a href={this.state.topHref} className="btn pro-top-btn">TOP</a>
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