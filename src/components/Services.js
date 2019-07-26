import React from 'react';

class Services extends React.Component {
  render() {
    return (
      <section className="section pt-5" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">What We Do</h1>
              <div className="section-title-border margin-t-20" />
              <p className="section-subtitle text-muted text-center padding-t-30 font-secondary">
                We aim to provide a cutting edge tool for database visualization
                and interaction by harnessing the power of GraphQL.
              </p>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-share text-custom" />
                <h4 className="padding-t-15">Data Visualization</h4>
                <p className="padding-t-15 text-muted">
                  Using GraphQL Voyager, we are able to dynamically generate a
                  visually appealing chart displaying your table relations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-search text-custom" />
                <h4 className="padding-t-15">Custom Querying</h4>
                <p className="padding-t-15 text-muted">
                  By building a virtual layer on top of your pre-existing
                  databases we are able to bring in an interactive playground
                  for custom GraphQL querying without you needing to set up a
                  schema.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-browser text-custom" />
                <h4 className="padding-t-15">Intuituve UX</h4>
                <p className="padding-t-15 text-muted">
                  Keeping everything simple, we make navigation in and around
                  your databases easy so you can focus on development.
                </p>
              </div>
            </div>
          </div>
          <div className="row margin-t-30">
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-gleam text-custom" />
                <h4 className="padding-t-15">Fast, Responsive & Seamless</h4>
                <p className="padding-t-15 text-muted">
                  Using the latest in React.js and GraphQL, you are given a
                  seamless SPA environment to interact with your data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-magic-wand text-custom" />
                <h4 className="padding-t-15">Truly Multipurpose</h4>
                <p className="padding-t-15 text-muted">
                  Our product is developed with all users in mind. From simple
                  projects to even the most complex, QLStico can serve local and
                  remote Postgres databases via SSL with minimal configuration.
                </p>
              </div>
            </div>
            <div className="col-lg-4 margin-t-20">
              <div className="services-box text-center hover-effect">
                <i className="pe-7s-rocket text-custom" />
                <h4 className="padding-t-15">More Features Coming Soon</h4>
                <p className="padding-t-15 text-muted">
                  Stay tuned for future release and support for multiple
                  database managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
