import React from "react";
const About = () => {
  return (
    <>
      <div className="container text-dark d-flex align-items-center justify-content-center Home">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                <h1 className="home-heading">
                  <strong>About Us ...</strong>
                </h1>
                <p className = 'aboutClass'>
                  The job market is more competitive today than its ever been
                  before. Whenever you apply for an open position, its safe to
                  assume that dozens if not hundreds of other people are
                  applying for the exact same position as well. You'll need an
                  excellent resume in order to stand out from the competition.
                  But writing effective resumes can be hard. <br /> — you must elaborate
                  enough on your background and skill set to impress prospective
                  employers, yet you also need to be concise enough to make sure
                  a hiring manager adds you to the "yes" pile quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
