
function ViewBooks({ books, deleteBook }) {
  return (
    <div>
      <h2>Available Books</h2>

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>

            <button onClick={() => deleteBook(book.id)}>
              Delete Book
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewBooks
