import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [showSavedJobsOptions, setShowSavedJobsOptions] = useState(false);

  const toggleSavedJobsOptions = () => {
    setShowSavedJobsOptions(!showSavedJobsOptions);
  };

  return (
    <div className="sidebar">
      <ul className="top-options">
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option 1 Icon" /><a href="#">Job Recommendation</a></li>
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option 2 Icon" /><a href="#">History</a></li>
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option 3 Icon" /><a href="#">Plans</a></li>
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option 4 Icon" /><a href="#">Option 4</a></li>
        <li className='row' onClick={toggleSavedJobsOptions}><img src="https://w7.pngwing.com/pngs/987/537/png-transparent-download-downloading-save-basic-user-interface-icon-thumbnail.png" alt="Saved Jobs Icon" /><a href="#">Saved Jobs</a></li>
        {showSavedJobsOptions && (
          <ul className="saved-jobs-options">
            <li><a href="#">UI UX Designer</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Machine Learning</a></li>
            <li><a href="#">Option 4</a></li>
          </ul>
        )}
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option 5 Icon" /><a href="#">Manage profile</a></li>
      </ul>
      <ul className="bottom-options">
        <li className='row'>Help and Support</li>
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option B Icon" /><a href="#">Settings</a></li>
        <li className='row'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="Option C Icon" /><a href="#">Help Centre</a></li>
        <li className='current'>Current Plan : Free</li>
      </ul>
      <div class="upgrade-box">
      <img src="https://cdn-icons-png.freepik.com/512/2267/2267359.png" alt="Icon"></img>
        <div class="upgrade-info">
       <div class="title">Upgrade to Pro</div>
    <div class="subtitle">Get all features</div>
  </div>
   </div>

    </div>
  );
}

export default Sidebar;
