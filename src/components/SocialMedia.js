import React from 'react';
import { Link } from 'react-router-dom';

class SocialMedia extends React.Component {
  render() {
  	return (
        <section className="cta bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-inline social margin-t-20">
                            <li className="list-inline-item"> <a href="www.github.com/qlstico" className="social-icon"><i className="mdi mdi-github-circle"></i></a></li>
                            <li className="list-inline-item"> <a href="fb.com/qlstico" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                            <li className="list-inline-item"> <a href="mailto:support@qlstico.io" className="social-icon"><i className="mdi mdi-email"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  	);
  }
}
export default SocialMedia;
