import React from 'react';

export default function BookCard({ book }) {
    return (
        <div className="book-card">
            <div className="book-cover-wrapper">
                <img src={book.coverUrl} alt={book.title} className="book-cover" />
                <div className="book-overlay">
                    <span className="growth-factor">{book.growthFactor}</span>
                </div>
            </div>
            <div className="book-info">
                <span className="book-category">{book.category}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p className="book-description">{book.description}</p>
            </div>
        </div>
    );
}
