import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteBook } from "../features/BookReducer/bookReducer";


const Book = () => {

  const books=useSelector((state=>state.books));
  const dispatch=useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook({id:id}))

  }

  return (
    <div>
      <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Link to={"/"} className="btn btn-sm btn-primary">
          Go to Home
        </Link>
      </div>
      <div className='container-fluid' style={{ paddingTop: "50px" }}>
        <h2>Book List:</h2>
        <Link to='/addBook' className='btn btn-success my-3'>Create +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN Number</th>
              <th>Publication Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book,index)=>(
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn_number}</td>
                <td>{book.publication_date}</td>
                <td>
                  <Link to={`/editBook/${book.id}`} className="btn btn-sm btn-primary">Edit</Link>
                  <button onClick={()=>handleDelete(book.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Book