import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { UserContext } from '../context/user';

const ScrollButton = () => {
  const height = 200;

  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavavior: 'smooth',
    });
  };

  return (
    <button
      className={height > 100 ? 'scroll-btn show-scroll-btn' : 'scroll-btn'}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollButton;
