import React from 'react';
import { Link } from 'react-router-dom';

class Download extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      os: null
    }
  }

  componentDidMount=() =>{
    this.setState({os:navigator.platform})
  }
  render() {

  	return (
        <section className="section section-lg bg-get-start" id='started'>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <h1 className="get-started-title text-white">Let's Get Started</h1>
                        <div className="section-title-border margin-t-20 bg-white"></div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalSocial" className="btn btn-bg-white waves-effect margin-t-20 mb-4">Download Now <i className="mdi mdi-arrow-right"></i> </button>

<div className="modal fade" id="modalSocial" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div className="modal-dialog cascading-modal" role="document">

    <div className="modal-content">

      <div className="modal-header light-blue darken-3 white-text">
        <h2 className="get-started-title text-black">Downloads</h2>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
      </div>

      <div className="modal-body mb-0 text-center">

      <h4 className="get-started-title text-black" align="left">Autodetected OS: { this.state.os}</h4>

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
