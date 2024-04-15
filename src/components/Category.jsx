import React from 'react';

const Category = ({ fillterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button key={index} onClick={() => fillterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
