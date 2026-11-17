
import { useState } from 'react'

function RegisterBook({ setBooks }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      id: Date.now(),
      title: title,
      author: author,
      year: year
    }

    setBooks((previousBooks) => [...previousBooks, newBook])

    setTitle('')
    setAuthor('')
    setYear('')
  }

  return (
    <div>
      <h2>Register a New Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />

        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}

export default RegisterBook
