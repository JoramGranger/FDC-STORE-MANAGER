import React from 'react';
import categoriesData from './categories.json';

const CategorySettings = () => {
  const categories = categoriesData.categories;

  const renderCategory = (category, level = 0) => {
    return (
      <div key={category.id}>
        {Array(level).fill('-').join('')} {category.name}
        {category.children && category.children.map(child => renderCategory(child, level + 1))}
      </div>
    );
  };

  return (
    <div>
      <h2>Category Settings</h2>
      {categories.map(category => renderCategory(category))}
    </div>
  );
};

export default CategorySettings;
