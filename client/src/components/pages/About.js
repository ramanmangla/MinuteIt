import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div className='single-column'>
        <h1 class='aboutHeading'>Minute It</h1>
        <p>An application to provide Team Discussion Quality and Analytics.</p>
        <p class='aboutText'>
          <br></br>Built Using:
        </p>
        <ul class='aboutText'>
          <li>Microsoft Azure</li>
          <li>React</li>
          <li>Nodejs</li>
          <li>ESX</li>
          <li>Javascript</li>
        </ul>

        <p class='aboutText'>
          <br></br>Developed by:
        </p>
        <ul class='aboutText'>
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
