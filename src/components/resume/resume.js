import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Salerno</h3>
                <p className="info">Undergraduate in Computer Science <span>•</span> <em className="date">April 2022</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Red Square Team</h3>
                <p className="info"> Preparation course <span>•</span> <em className="date">Febraury 2019</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>I.T.I.S. G. Marconi</h3>
                <p className="info"> High School Diploma <span>•</span> <em className="date">Febraury 2016</em></p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Red Square Team</h3>
                <p className="info">Senior Developer <span>•</span> <em className="date">January 2019 - Present</em></p>
                <p className="break-word">
                    The R.S.T. is a team of freelancers who work together to manage multiple projects of various entities at the same time, each has its main area of ​​work, but at the same time everyone can do everything.
                    Specifically, I deal with the development of the frontend with the creation of styles and all the graphic and functional elements, subsequently I connect everything with the server if it has already been created by my colleagues, but in the case of smaller projects I also take care of the server and the database.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Proxt s.a.s.</h3>
                <p className="info">Head Developer <span>•</span> <em className="date">March 2017 - October 2018</em></p>
                <p className="break-word">
                    Proxt s.a.s. is a small local company that had set itself the goal of digitizing Italian stores to expand the online market and the possibility of meeting and booking professionals of all kinds through the Joomap app.
                    My assumption made this possible, initially, the app was developed using ionic 1, finished the first version I rewrote the app in ionic 3 adding all the functionality necessary for publication.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Website Developer</h3>
                <p className="info">Freelancer <span>•</span> <em className="date">January 2011 - Febraury 2017</em></p>
                <p className="break-word">
                    At the age of 14, I started making websites using html, php, js and css, until then I had dedicated myself to cms.
                    Gradually I got more and more interesting projects and bigger and bigger challenges that led me to love more and more the world of programming, until the day I received my first contract as a programmer as an intern in a company, and thanks to my previous career I was immediately qualified as a senior developer, my skills of self-management and team management have allowed me to almost always have a role as a project manager in team work
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
                In my career I have had the opportunity to work in different teams and to develop different projects, each of them with its own peculiarities, and these experiences over the years have allowed me to develop my sklills more and more.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
                <li><span className="bar-expand javascript" /><em>Javascript / NodeJS</em></li>
                <li><span className="bar-expand graphql" /><em>GraphQL / Apollo Framework</em></li>
                <li><span className="bar-expand typescript" /><em>Typescript / Angular</em></li>
                <li><span className="bar-expand bootstrap" /><em>Bootstrap Framework</em></li>
                <li><span className="bar-expand php" /><em>PHP</em></li>
                <li><span className="bar-expand html" /><em>HTML & CSS</em></li>
                <li><span className="bar-expand testing" /><em>Testing / Debugging</em></li>
                <li><span className="bar-expand electron" /><em>Electron</em></li>
                <li><span className="bar-expand vscode" /><em>VS Code</em></li>
                <li><span className="bar-expand sql" /><em>SQL Database</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                <li><span className="bar-expand cpp" /><em>Illustrator</em></li>
                <li><span className="bar-expand ionic" /><em>Wordpress</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}