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
                        <h3>For our Version 1.0, we choose to start with PostgreSQL as it has proven to be a popular open source db in industry. </h3>
                        <p className="text-muted web-desc">Postgraphile the power behind our application.</p>
                        <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                            <li className="">Rapidly Deploy Lightning Fast Servers.</li>
                            <li className="">Instant Schema Design.</li>
                            <li className="">Highly Scalable.</li>
                            <li className="">Highest level of Database Security.</li>
                        </ul>
                        <Link to="" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link>
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
