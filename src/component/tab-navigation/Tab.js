import React from 'react';

const Tab = ({current, handleClick, value, index}) => {
  const classes = 
    current === index
      ? 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
      : 'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none';

  return (
    <button index={index} className={classes} onClick={handleClick}>
      {value}
    </button>
  )
}

export default Tab;