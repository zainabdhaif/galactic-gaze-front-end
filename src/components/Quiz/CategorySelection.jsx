import React from 'react';
import './CategorySelection.css';
import categories from './categoriesData';

const CategorySelection = ({ onSelectCategory }) => {
    return (
        <div className="category-selection">
            <h2>Astronomy Quiz Zone: Uncover the Universe</h2>
            <p className='description'>
                Test your astronomy knowledge with our captivating space-themed quizzes! Whether you're passionate about planets, stars, or galaxies, you'll find a quiz that suits you. Get instant feedback on every question and retake any quiz until you achieve a perfect score. Dive in and challenge yourself to uncover the mysteries of the universe!
            </p>
            <h5 className='h5'>Select a category to begin </h5>
            <div className="category-div1">
                {categories.map((category, index) => (
                    <button key={index} onClick={() => onSelectCategory(category.name)}>
                        <img src={category.image} alt={category.name} className="category-image" />
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;
