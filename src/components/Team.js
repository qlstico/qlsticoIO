import React from 'react';

class Team extends React.Component {
  render() {
  	return (
     <section className="section pt-4" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1 className="section-title text-center">Team behind the Idea</h1>
                        <div className="section-title-border margin-t-20"></div>
                        <p className="section-subtitle text-muted text-center font-secondary padding-t-30">In a team of four.</p>
                    </div>
                </div>
                <div className="row margin-t-50">
                    <div className="col-lg-3 col-sm-6">
                    <a href="https://github.com/dwyfrequency">
                        <div className="team-box text-center hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-1.jpg" className="img-fluid rounded"/>
                                </div>
                            </div>
                            <h4 className="team-name">Jack Dwyer</h4>
                            <p className="text-uppercase team-designation">Software Engineer</p>
                        </div>
                        </a>
                    </div>



                    <div className="col-lg-3 col-sm-6">
                    <a href="https://github.com/ricardopineda93">
                        <div className="team-box text-center hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-2.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Ricardo Pineda</h4>
                            <p className="text-uppercase team-designation">Software Engineer</p>
                        </div>
                        </a>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                    <a href="https://github.com/willgolden5">
                        <div className="team-box text-center hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-3.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">William Golden</h4>
                            <p className="text-uppercase team-designation">Software Engineer</p>
                        </div>
                        </a>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                    <a href="https://github.com/dwyfrequency">
                        <div className="team-box text-center hover-effect">
                            <div className="team-wrapper">
                                <div className="team-member">
                                    <img alt="" src="images/team/img-4.jpg" className="img-fluid rounded" />
                                </div>
                            </div>
                            <h4 className="team-name">Sri Velagapudi</h4>
                            <p className="text-uppercase team-designation">Software Engineer</p>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
  	);
  }
}
export default Team;
