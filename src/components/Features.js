import React from 'react';
import { Link } from 'react-router-dom';

class Features extends React.Component {
  render() {
    return (
      <section className="section bg-light" id="features">
        <div className="container">
          <div className="row vertical-content">
            <div className="col-lg-5">
              <div className="features-box">
                <h3>
                  For our Beta Version 1.0, we choose to specialize in
                  PostgreSQL as it has proven to be a popular open source
                  database manager in industry.{' '}
                </h3>
                <p className="text-muted web-desc">
                  Powered by Postgraphile for schema generation.
                </p>
                <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                  <li className="">
                    Instant GraphQL schema abstracted over Postgres databases.
                  </li>
                  <li className="">Highly Scalable.</li>
                  <li className="">
                    Powerful GraphQL IDE tools to help generate queries and
                    mutations.
                  </li>
                </ul>
                {/* <Link
                  to=""
                  className="btn btn-custom margin-t-30 waves-effect waves-light"
                >
                  Learn More <i className="mdi mdi-arrow-right" />
                </Link> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="features-img features-right text-right">
                <img src="images/pg1.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Features;
