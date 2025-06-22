import React from 'react';

const ActionButton = ({ extraStyles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none ${extraStyles} hover:opacity-90 transition-opacity duration-300`}
  >
    Learn More
  </button>
);

export default ActionButton; 