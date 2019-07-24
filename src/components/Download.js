import React from 'react';
import { Link } from 'react-router-dom';

class Download extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      os: null
    };
  }

  componentDidMount = () => {
    this.setState({ os: navigator.platform });
  };
  render() {
    if (this.state.os === 'MacIntel') {
      this.setState({ os: 'Mac OSX' });
    } else if (this.state.os === 'Win32') {
      this.setState({ os: 'Windows' });
    }

    return (
      <section className="section section-lg bg-get-start" id="started">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h1 className="get-started-title text-white">
                Let's Get Started
              </h1>
              <div className="section-title-border margin-t-20 bg-white" />
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modalSocial"
                className="btn btn-bg-white waves-effect margin-t-20 mb-4"
              >
                Download Now <i className="mdi mdi-arrow-right" />{' '}
              </button>

              <div
                className="modal fade"
                id="modalSocial"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog cascading-modal" role="document">
                  <div className="modal-content">
                    <div className="modal-header light-blue darken-3 white-text">
                      <h2 className="get-started-title text-black">
                        Downloads
                      </h2>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body mb-0 text-center">
                      <h4 className="get-started-title text-black" align="left">
                        Autodetected OS: {this.state.os}
                      </h4>
                      <iframe
                        src="https://drive.google.com/embeddedfolderview?id=1nlJBKboO0OejeRN_kNcx7_YUdF9KVWfj#grid"
                        width="100%"
                        height="500"
                        frameborder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-pattern-effect">
          <img src="images/bg-pattern-light.png" alt="" />
        </div>
      </section>
    );
  }
}
export default Download;
