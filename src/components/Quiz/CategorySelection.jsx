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
           
            <div className="quiz-card-container">
                {categories.map((category, index) => (
                    <div className="quiz-card" key={index}>
                        <h3>{category.name}</h3>
                        <p className="quiz-description">{category.description}</p>
                        <img src={category.image} alt={category.name} className="category-image" />
                        <button className="select-category-button" onClick={() => onSelectCategory(category.name)}>
                        Let's dive in
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySelection;