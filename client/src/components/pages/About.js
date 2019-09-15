import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className='single-column'>
        <h1 className='aboutHeading'>Minute It</h1>
        <p className='aboutText'>
          An application to provide Team Discussion Quality and Analytics.
          <br></br>
          <br></br>Built Using:
        </p>
        <ul className='aboutText'>
          <li>Microsoft Azure</li>
          <li>React</li>
          <li>Nodejs</li>
          <li>ESX</li>
          <li>Javascript</li>
        </ul>

        <p className='aboutText'>
          <br></br>Developed by:
        </p>
        <ul className='aboutText'>
          <li>Daman Sharma</li>
          <li>Raman Mangla</li>
          <li>Mit Kapadia</li>
          <li>Devendra Nanga</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default About;
