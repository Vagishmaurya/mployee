import React from 'react';
import './Card.css'; // Import the CSS file containing styles

const Card = () => {
  return (
    <div className="card">
      <div className="logo">
        <img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="Logo" width="52" height="52" />
      </div>
      <div className="content">
        <p className="heading">UI/UX Designer</p>
        <div className="tags">
          <span className="tag">Google</span>
          <span className="tag bg orange">Prototyping</span>
          <span className="tag bg red">Lorem</span>
          <span className="tag bg blue">Lorem</span>
        </div>
        <div className="details">
          <p className='border-left'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png " width={"14px"} alt="Option 4 Icon" />Experience: 0-3 years</p>
          <p className='border-left'><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png " width={"14px"} alt="Option 4 Icon" />Full time</p>
          <p>Posted on: 2 April 2024</p>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            
          </p>
        </div>
      </div>
      <div className='right'>
      <div className="buttons">
        <button className="apply-now">Apply Now</button>
        <button className="save"><img src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png " width={"14px"} alt="Option 4 Icon" />Save</button>
      </div>
     
      <div className="additional-info"><img src="https://img.freepik.com/premium-vector/circle-percentage-diagrams-87-ready-use-web-design-light-green-white-can-change-color_792347-215.jpg?w=360" width={'130px'} alt="Option 4 Icon" /></div>
      </div>
    </div>
  );
};

export default Card;
