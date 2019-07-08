import React from 'react';
import { Link } from 'react-router-dom';

class Descriptions extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc" id='documentation'>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Documentation</h2>
                        <p className="padding-t-15 home-desc">Easy to follow Documentation.</p>
                        <Link to="JavaScript:Void(0);" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">Coming Soon</Link>
                    </div>
                </div>
            </div>
            <div className="bg-pattern-effect">
                <img src="images/bg-pattern.png" alt="" />
            </div>
        </section>
  	);
  }
}
export default Descriptions;
