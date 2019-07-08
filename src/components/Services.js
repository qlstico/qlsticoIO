import React from 'react';

class Services extends React.Component {
  render() {
  	return (
        <section className="section pt-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Our Services</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">We bring a new and innovative way to integrate GraphQL into your existing databases.</p>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-diamond text-custom"></i>
                            <h4 className="padding-t-15">Data Visualization</h4>
                            <p className="padding-t-15 text-muted">Using GraphQL Voyager we are able to dynamically generate a visually appealing graph displaying your relations.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-display2 text-custom"></i>
                            <h4 className="padding-t-15">Custom Querying</h4>
                            <p className="padding-t-15 text-muted">By building a virtual layer on top of your pre-existing databases we are able to bring in an interactive playground for custom querying.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-piggy text-custom"></i>
                            <h4 className="padding-t-15">Intuituve GUI</h4>
                            <p className="padding-t-15 text-muted">Keeping everything simple, we made sure even the simplest users can be accustomed to our app.</p>
                        </div>
                    </div>
                </div>
                <div className="row margin-t-30">
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-science text-custom"></i>
                            <h4 className="padding-t-15">Safe & Secure</h4>
                            <p className="padding-t-15 text-muted">Using industry new technology such as React.js, we were able to build this application without ever creating a page refresh.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-news-paper text-custom"></i>
                            <h4 className="padding-t-15">Truly Multipurpose</h4>
                            <p className="padding-t-15 text-muted">Our product is developed with all users in mind. We currently support Mac OSX, Windows & Debian Linux OS.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 margin-t-20">
                        <div className="services-box text-center hover-effect">
                            <i className="pe-7s-plane text-custom"></i>
                            <h4 className="padding-t-15">More Features Coming Soon</h4>
                            <p className="padding-t-15 text-muted">Stay tuned for future release which support multiple databases.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default Services;
