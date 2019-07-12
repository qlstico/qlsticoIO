import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';


class Documentation extends React.Component {
  render() {
  	return (
          <section className="section section-lg bg-web-desc" id='documentation'>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-white">Documentation</h2>
                        <p className="padding-t-15 home-desc">Easy to follow Documentation.</p>
                        <button data-toggle="modal" data-target="#exampleModal" className="btn btn-bg-white margin-t-30 waves-effect waves-light mb-5">Learn More</button>
                        <div class="container demo">
    <div class="text-center">
    </div>
    <div class="modal left fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="nav flex-sm-column flex-row">
                    <h1 className="get-started-title text-black">Docsify.js</h1>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
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
export default Documentation;
