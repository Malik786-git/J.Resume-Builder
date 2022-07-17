import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../context/context";
const Build = () => {
   
  const {newResume} = useContext(myContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    profession: "",
    objective: "",
    experience: "",
    education: ""
  })

  const setResumeInput = (e)=> {

        setData({
          ...data,
          [e.target.name]: e.target.value
        })
  }

  const passResumeData = ()=> {
    newResume(data);
  }

  return (
    <>
      <div className="container">
      <h1 className='text-center mt-5 text-dark yourResume'>Build Your Resume</h1>
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <form>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Full Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={setResumeInput}
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="Malik M Jahangir"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={setResumeInput}
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Contact No.
              </label>
              <input
                type="number"
                name="contact"
                value={data.contact}
                onChange={setResumeInput}
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="+9200000000"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={data.address}
                onChange={setResumeInput}
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="Hno. D-4, xyz town, khi"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Profession
              </label>
              <input
                type="text"
                name="profession"
                value={data.profession}
                onChange={setResumeInput}
                className="form-control form-control-sm"
                id="exampleFormControlInput1"
                placeholder="Software Engineer"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Objective
              </label>
              <textarea
                name="objective"
                value={data.objective}
                onChange={setResumeInput}
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cumque consequuntur at."
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Experience
              </label>
              <textarea
                name="experience"
                value={data.experience}
                onChange={setResumeInput}
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="4-Year Experience as Full-Stact Web developer, at 10 Pearl"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Education
              </label>
              <textarea
                name="education"
                value={data.education}
                onChange={setResumeInput}
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Bachelor Of Computer Science from Dawood University of Engineering and Technology, Khi."
                rows="3"
              ></textarea>
            </div>
            <div className="text-center py-3">
            <NavLink className="createBtn" onClick={passResumeData} to='/resume'>Build</NavLink>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Build;
