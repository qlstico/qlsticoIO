import React from 'react';

class FooterLinks extends React.Component {
  render() {
  	return (
        <div className="footer-alt">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="float-left pull-none ">
                        <p className="copy-rights text-muted">{(new Date().getFullYear())} © QLStico</p>
                    </div>
                    <div className="float-right pull-none ">
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
  	);
  }
}
export default FooterLinks;
