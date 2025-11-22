import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import { books } from '../data/books';

export default function testpage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(books.map(book => book.category))];

  const filteredBooks = activeCategory === 'All'
    ? books
    : books.filter(book => book.category === activeCategory);

  return (
    <div className="home">

      <header className="hero">
        <div className="container">
          <h1>Invest in Yourself</h1>
          <p>you clciked on a new page, congratulations!</p>
        </div>
      </header>

      <main className="container">
        <section className="filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="book-grid">
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </section>
      </main>
    </div>
  );
}