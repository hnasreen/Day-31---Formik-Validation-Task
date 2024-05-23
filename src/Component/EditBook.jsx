import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBook } from "../features/BookReducer/bookReducer";


const EditBook = () => {

    const{id}=useParams();
    const books=useSelector((state=>state.books));
    const existingBooks=books.filter(f=>f.id==id);
    const {title,author,isbn_number,publication_date}=existingBooks[0];
    const [utitle,setTitle]=useState(title);
    const [uauthor,setAuthor]=useState(author);
    const [uisbn_number,setIsbn_Number]=useState(isbn_number);
    const [upublication_date,setPublication_Date]=useState(publication_date);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleUpdate = (event)=>{
        event.preventDefault();
        dispatch(editBook({
            id:id,
            title:utitle,
            author:uauthor,
            isbn_number:uisbn_number,
            publication_date:upublication_date
        }))
        navigate('/book');
    }

  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-500 border bg-secondary text-white p-5' style={{ width: '600px' }}>
                <h3>Update Book</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name"> Title:</label>
                        <input type="text" name="name" className='form-control' placeholder="Enter the Title..." value={utitle} onChange={e=>setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name"> Author:</label>
                        <input type="text" name="author" className='form-control' placeholder="Enter the Author..." value={uauthor} onChange={e=>setAuthor(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name"> ISBN Number:</label>
                        <input type="text" name="isbn_number" className='form-control' placeholder="Enter the ISBN Number..." value={uisbn_number} onChange={e=>setIsbn_Number(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name"> Publication Date:</label>
                        <input type="text" name="publication_number" className='form-control' placeholder="Enter the Publication Date..." value={upublication_date} onChange={e=>setPublication_Date(e.target.value)}/>
                    </div><br/>
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditBook