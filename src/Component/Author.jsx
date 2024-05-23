import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteAuthor } from "../features/AuthorReducer/authorReducer";


const Author = () => {

  const authors=useSelector((state=>state.authors));
  const dispatch=useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAuthor({id:id}))

  }

  return (
    <div>
    <div style={{ position: "absolute", top: 0, left: 0 }}>
        <Link to={"/"} className="btn btn-sm btn-primary">
          Go to Home
        </Link>
      </div>
      <div className='container-fluid' style={{ paddingTop: "50px" }}>
        <h2>Author List:</h2>
        <Link to='/addAuthor' className='btn btn-success my-3'>Create +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>birth_date</th>
              <th style={{ maxWidth: "400px" }}>Biography</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author,index)=>(
              <tr key={index}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.birth_date}</td>
                <td style={{ maxWidth: "400px", overflow: "hidden", textOverflow: "ellipsis" }}>{author.biography}</td>
                <td>
                  <Link to={`/editAuthor/${author.id}`} className="btn btn-sm btn-primary">Edit</Link>
                  <button onClick={()=>handleDelete(author.id)} className="btn btn-sm btn-danger ms-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Author