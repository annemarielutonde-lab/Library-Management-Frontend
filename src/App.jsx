
import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ViewBooks from './ViewBooks'
import RegisterBook from './RegisterBook'
import './App.css'

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
    { id: 2, title: "The Blue Sweater", author: "Jacqueline Novogratz", year: 2009 },
    { id: 3, title: "Born a Crime", author: "Trevor Noah", year: 2016 }
  ])

  const deleteBook = (id) => {
    setBooks((previousBooks) =>
      previousBooks.filter((book) => book.id !== id)
    )
  }

  return (
    <>
      <h1>Library Management System</h1>

      <nav>
        <Link to="/">View Books</Link>
        <Link to="/register">Register Book</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ViewBooks
              books={books}
              deleteBook={deleteBook}
            />
          }
        />

        <Route
          path="/register"
          element={<RegisterBook setBooks={setBooks} />}
        />
      </Routes>
    </>
  )
}

export default App
