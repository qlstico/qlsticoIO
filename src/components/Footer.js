import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
  	return (
         <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 margin-t-20">
                        <h4>QLStico</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#contact">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Info</h4>
                        <div className="text-muted margin-t-20">
                            <ul className="list-unstyled footer-list">
                                <li><a href="#started">Downloads</a></li>
                                <li><a href="#documentation">Documentation</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Social Media</h4>
                        <section className="cta">
                            <div className="container">
                                <div className="row">
                                        <ul className="list-inline social margin-t-20">
                                            <li className="list-inline-item"> <a href="www.github.com/qlstico" className="social-icon"><i className="mdi mdi-github-circle"></i></a></li>
                                            <li className="list-inline-item"> <a href="fb.com/qlstico" className="social-icon"><i className="mdi mdi-facebook"></i></a></li>
                                            <li className="list-inline-item"> <a href="mailto:support@qlstico.io" className="social-icon"><i className="mdi mdi-email"></i></a></li>
                                        </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-3 margin-t-20">
                        <h4>Subscribe</h4>
                        <div className="text-muted margin-t-20">
                            <p>Get notified of new feature release.</p>
                        </div>
                        <form className="form subscribe">
                            <input placeholder="Email" className="form-control" required />
                            <Link to="JavaScript:Void(0);" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
  	);
  }
}
export default Footer;
