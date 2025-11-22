import React, { useState } from 'react';
import { books } from '../data/books';

function ReadingList() {
  // Initialize state: add 'pagesRead' and 'completed' to each book
  const [bookList, setBookList] = useState(
    books.map(book => ({
      ...book,
      pagesRead: 0,
      completed: false
    }))
  );

  // Handle checking/unchecking a book
  const toggleCompleted = (id) => {
    setBookList(bookList.map(book =>
      book.id === id ? { ...book, completed: !book.completed } : book
    ));
  };

  // Handle pages read update
  const updatePagesRead = (id, pages) => {
    setBookList(bookList.map(book =>
      book.id === id ? { ...book, pagesRead: pages } : book
    ));
  };

  return (
    <div>
      <h1>Reading List</h1>
      <ul>
        {bookList.map(book => (
          <li key={book.id} style={{ marginBottom: '20px' }}>
            <h2>{book.title} by {book.author}</h2>
            <img src={book.coverUrl} alt={book.title} style={{ width: '100px' }} />
            <p>{book.description}</p>
            <p><strong>Growth Factor:</strong> {book.growthFactor}</p>

            <label>
              <input
                type="checkbox"
                checked={book.completed}
                onChange={() => toggleCompleted(book.id)}
              />{' '}
              Completed
            </label>

            <div>
              <label>
                Pages read:{' '}
                <input
                  type="number"
                  min="0"
                  value={book.pagesRead}
                  onChange={(e) => updatePagesRead(book.id, Number(e.target.value))}
                  style={{ width: '60px' }}
                />
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadingList;