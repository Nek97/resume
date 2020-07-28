import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>Aniello has extreme knowledge of UI developing and a very fast learning curve of new technologies
                      </p>
                      <cite>Joseph Roy</cite>
                    </blockquote>
                  </li> {/* slide ends */}

                  {/*}
                  <li>
                    <blockquote>
                      <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                        nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                      </p>
                      <cite>Mr. Adobe</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
      </React.Fragment>
    );
  }
}