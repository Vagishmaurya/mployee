import React from 'react';
import Card from './Card';
import "./Cards.css"

const Cards = () => {

  const cardArray = Array.from({ length: 10 }, (_, index) => index);

  return (
    <>
    <div className="cards-container" style={{ maxWidth: '79vw', overflowY: 'scroll', maxHeight: '100vh', backgroundColor:'#F6F8FA',}}>
     <div className='border-job'>
      <div className='job-heading'>JOB(44)</div>
      <div className="cards-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '23px' , marginTop: '30px', marginLeft: '20px'}}>
        {cardArray.map((index) => (
          <Card key={index} style={{ margin: '0 23px 23px 0' }} /> 
        ))}
      </div>
      </div>
    </div>
    <div>
        Showing 1-20 from 1250 data
    </div>
    </>

  );
};

export default Cards;
