import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/placeme.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>PlaceMe</h5>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/ease.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Ease</h5>
                        <p>Full Stack Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/as.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Azeroth Shard Launcher</h5>
                        <p>Programmer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/joomap.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Joomap</h5>
                        <p>App Developer</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/placeme.png" alt="" />
            <div className="description-box">
              <h4>PlaceMe</h4>
              <p>Created all the elements and the functionaly of thhe platform, including payments</p>
              <span className="categories"><i className="fa fa-tag" />ReactJs, Bootstrap, Js, Css, GrapphQl, Sequelize</span>
            </div>
            <div className="link-box">
              <a href="https://www.youtube.com/watch?v=Z2goznvD23k">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/ease.png" alt="" />
            <div className="description-box">
              <h4>Ease</h4>
              <p>Debugged, resolved some critical bugs on both client and server, added some new features</p>
              <span className="categories"><i className="fa fa-tag" />Web Development, ReactJs, NodeJs, Apollo, Js</span>
            </div>
            <div className="link-box">
              <a href="http://dashboard.itsease.com/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/as.png" alt="" />
            <div className="description-box">
              <h4>Azeroth Shard Launcher</h4>
              <p>Merged Electron and React, Electron is used for all the O.S. interation, React for the Frontend</p>
              <span className="categories"><i className="fa fa-tag" />ElectronJS, ReactJs, Js, Css</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/AzerothShard/get-as-launcher/releases/latest">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/joomap.png" alt="" />
            <div className="description-box">
              <h4>Joomap</h4>
              <p>Created the android/ios app using Angular and Cordova</p>
              <span className="categories"><i className="fa fa-tag" />AngullarJs, Cordova, Ionic v1, Ionic v3, jQuery, CSS, SCSS</span>
            </div>
            <div className="link-box">
              <a href="https://www.youtube.com/watch?v=ROBsv2StBSM">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}