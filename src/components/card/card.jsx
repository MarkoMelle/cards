/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ title, img = null, children }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {img ? <img src={img} alt="title" /> : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
