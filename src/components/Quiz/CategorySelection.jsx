// src/CategorySelection.js
import React from 'react';
import './CategorySelection.css';
import categories from './categoriesData';

const CategorySelection = ({onSelectCategory }) => {
    return (
        <div className="category-selection">
            <h2>Select a Category</h2>
            <div className="category-div1" >
                {categories.map((category, index) => (
                    <button key={index} onClick={() => onSelectCategory(category.name)}>
                        <img src={category.image} alt={category.name}  className="category-image" />
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;