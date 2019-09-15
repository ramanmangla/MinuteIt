import React, { Fragment } from "react";

const About = () => {
  return (
      <Fragment>
         
          <div className='two-column'>
              <div>
              <h1 class='aboutHeading'>About MinuteIT</h1>

              <h5 class='aboutSubHeading'>An immersive note taker</h5>
                  <h6 class ='aboutSubHeading'>The must have app for any meeting or conference</h6>
                  <p class='aboutText'><br></br>Built Using:</p>
                  <ul class='aboutText'>
                      <li>Microsoft Azure</li>
                      <li>React</li>
                      <li>Nodejs</li>
                      <li>ESX</li>
                      <li>Javascript</li>
                          </ul>
    
                              <p class = 'aboutText'><br></br>Developed by:</p>
                      <ul class = 'aboutText'>        
                      <li>Daman Sharma</li>
                      <li>Raman Mangla</li>
                      <li>Mit Kapadia</li>
                      <li>Devendra Nanga</li>
                      </ul>
                  </div>
             </div>
    </Fragment>
  );
};

export default About;
