import React, {useContext, useRef} from 'react'
import { useReactToPrint } from 'react-to-print';
import { myContext } from "../context/context";
const Resume = () => {

  // get resume data 
  const { data } = useContext(myContext);

  // Download or Print Resume
  const componentRef = useRef();
  const printResume = useReactToPrint({
    content: ()=> componentRef.current,
   })
 
 
 
  // function printResume() {
   
  //   // var divContents = document.getElementById("resume").innerHTML;
  //   // var a = window.open('', '', 'height=500, width=500');
  //   // a.document.write('<html>');
  //   // a.document.write(divContents);
  //   // a.document.write('</body></html>');
  //   // a.document.close();
  //   // a.print();
  //   // alert("For Better UI, Make your own resume on Ms Words. Thankyou!")
  // }

  return (
    <>
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className='text-center mt-5 text-dark yourResume'>Your Resume</h1>
              <div className="row mx-auto">
                <div className="col-12 d-flex justify-content-center">
                     <div id='resume' className="resumeUI bg-light m-5" ref={componentRef}>
                         <div className="resumeHeadings text-center ">
                           <h3 className='pt-2 text-primary'>{data.name}</h3>
                           <h4>{data.profession}</h4>
                         </div>
                         <div className="personal px-3">
                         <h6>Personal</h6>
                         <ul className='text-dark'>
                            <li>{data.email}</li>
                            <li>{data.contact}</li>
                            <li>{data.address}</li>
                           </ul>

                         </div>
                         <div className="obj px-3">
                         <h6>Objective</h6>
                           <p className='text-dark'>
                                {data.objective}
                           </p>
                         </div>
                         <div className="experience px-3">
                         <h6>Experience</h6>
                           <p className='text-dark'>
                                {data.experience}
                          </p>
                         </div>
                         <div className="education px-3">
                         <h6>Education</h6>
                           <p className='text-dark'>
                              {data.education}
                          </p>
                         </div>
                     </div>
                </div>
              </div>
              <div className="text-center mb-5">
              <button className="createBtn" onClick={printResume}>Print Your Resume</button>
              </div>
             
        </div>
      </div>
     </div>
    </>
  )
}

export default Resume