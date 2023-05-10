import React from 'react';

const Card = ({ title, img, children }) => {
  const image = img || null;
  return (
    <div className='card' style={{width: '18rem'}}>
      {image ? <img src={image} alt='title' /> : null}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default Card;
