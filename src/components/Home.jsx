import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {


  return (
    <>
      <div className="container text-dark d-flex align-items-center justify-content-center Home">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-md-6 mx-auto text-center">
                <h1 className="home-heading">
                  <strong className='text-center '> J. Resume Builder... </strong>
              
                   The Best Resume Maker Online <br/>
                </h1>
                  <p className="home-para">
                  The job market is more competitive today than its ever been before. Whenever you apply for an open position, its safe to assume that dozens if not hundreds of other people are applying for the exact same position as well. You'll need an excellent resume in order to stand out from the competition. But writing effective resumes can be hard.
                  </p>
                  <NavLink className="createBtn" to='/build'>Create Your Resume</NavLink>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
