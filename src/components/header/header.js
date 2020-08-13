import React, { Component } from 'react';
import ReactStringReplace from "react-string-replace"
import { Vocabulary, StringCompletion} from "../languages/Vocabulary"
import { AppCtxStore } from "../../App.context"
export default class Header extends Component {
  static contextType = AppCtxStore
  constructor(props) {
      super(props);
  }
  render() {
    var language = this.context.getVocabulary()
    return (
      <React.Fragment>
      <header id="home">
        <nav id="nav-wrap" className="no-print">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">{language.show_navigation}</a>
          <a className="mobile-btn" href="#" title="Hide navigation">{language.hide_navigation}</a>
          <ul id="nav" className="nav no-print">
            <li className="current"><a className="smoothscroll" href="#home">{language.home}</a></li>
            <li><a className="smoothscroll" href="#about">{language.about}</a></li>
            <li><a className="smoothscroll" href="#resume">{language.resume}</a></li>
            <li><a className="smoothscroll" href="#portfolio">{language.works}</a></li>
            <li><a className="smoothscroll" href="#testimonials">{language.testimonials}</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{language.homeTitle}</h1>
            <h3>
              {
                ReactStringReplace(language.homeDescription, /@(\w+)/g, (match, i) => (
                  <span key={match + i}>{match}</span>
                ))
              }
            </h3>
            <hr />
            <ul className="social no-print">
              <li><a href="https://www.facebook.com/nello1997"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://wa.me/+393457086780"><i className="fa fa-whatsapp" /></a></li>
              <li><a href="https://github.com/Nek97"><i className="fa fa-github" /></a></li>
              <li><a href="https://www.linkedin.com/in/devnek97/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/nek97/"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown no-print">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}