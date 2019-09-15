import React from "react";

const TranscriptHistory = () => {
  return (
    <div className='transcript-box'>
      <ul className='transcript-history'>
        <li>
          <span>Client X Meeting - 12/8/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>Client Y Meeting - 9/8/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>Client A Meeting - 1/8/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>Client Z Meeting - 12/7/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>DevOps Meeting - 1/7/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>Developers' Meeting - 29/6/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
        <li>
          <span>Developers' Meeting - 25/6/2019</span>{" "}
          <i className='fas fa-external-link-alt history-item' />
        </li>
      </ul>
    </div>
  );
};

export default TranscriptHistory;
