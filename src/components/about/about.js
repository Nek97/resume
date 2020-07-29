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
                            <p>I'm a Computer Science addicted, I'm undergraduate in Computer Science
                                I've 10 years of experience in software development and I usually spend my time making research and working in the field of IT
                                <br/>
                                I started to work before my university career. I used to study IT since I was 13 years old.
                                I've started with Pascal, TCL, C, C++, MySQL, Java, and Php with which I've learned the basics of programming languages, database administration, and software architecture.
                                I wrote my first website for enterprises and big open source companies in 2012.
                                <br/>
                                Later on, I enrolled at the University of Computer Science to improve my software engineering skills, learn the AGILE framework as well as improving my skills in UX, Java, and design patterns.
                                I'm involved as a lead developer of Azeroth Shard Launcher, and as Project Manager in the Red Square Team.
                                <br/>
                                Since 2015, I'm the Manager of my business, in parallel with my university career, as a FullStack freelance, DevOps, and PM, creating websites and web applications for my clients.
                                I always look for perfect, effective, and practical solutions to any potential problem. 
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
                                        <a href="cv/Aniello_Tortora-CV.pdf" className="button" download><i className="fa fa-download" />Download Resume</a>
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