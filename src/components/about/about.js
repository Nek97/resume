import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                {/*generated code*/}
                <section id="about">
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>
                            <p>
                                I'm Aniello, an Italian web developer, project manager, and web designer. I love to create awesome and effective websites and web applications for companies of all sizes around the globe. I'm an undergraduate in Computer Science.<br/>
                                I've ten years of experience in software development, and I usually spend my time doing research and working in the field of IT to continue to grow.
                                I started to work before my university career. I've started with programming languages such as c, java, and Php.<br/>
                                I've been programming since 2012. In the beginning, I created my first website for a company, and I worked as a freelancer during my college time. In 2017 I worked for an enterprise company, and in 2018 I became the head developer of that company.<br/>
                                When I've understood that computer science was my real passion and not only a job, I've left the previous school moving to computer science university and at the same time, I've continued to work on a lot of projects alone or as internal. At the beginning of 2019, I've applied to the Red Square Team.<br/>
                                In most of the projects I was assigned to, I had the freedom to manage the project and to lead my colleagues until I officially became a project manager within the team. However, this did not move me away from programming the most important and critical tasks were assigned to me, as well as the creation of styles as I can faithfully emulate or create an element from a properly designed model.
                                I'm also involved as a lead developer of several other project at the moment.
                                I always look for perfect, effective, and practical solutions to any potential problem.
                                I love the challenges that programming offers
                            </p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>Aniello Tortora</span><br />
                                        <span>Nocera Inferiore, SA 84014 IT</span><br />
                                        <span>+39 3457086780</span><br />
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="cv/Aniello_Tortora-CV.pdf" className="button no-print" download><i className="fa fa-download" />Download Resume</a>
                                    </p>
                                </div>
                            </div> {/* end row */}
                        </div> {/* end .main-col */}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}