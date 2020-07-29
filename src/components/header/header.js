import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Aniello Tortora.</h1>
            <h3>I'm an Italy based <span>web developer</span>, <span>project manager</span> and <span>web designer</span> creating awesome and
              effective websites and web applications for companies of all sizes around the globe. Let's <a className="smoothscroll" href="#about">start scrolling </a>
               and learn more <a className="smoothscroll" href="#about">about me</a> in mine <span>ReactJS</span> based resume.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.facebook.com/nello1997"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://wa.me/+393457086780"><i className="fa fa-whatsapp" /></a></li>
              <li><a href="https://github.com/Nek97"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/devnek97/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/nek97/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}