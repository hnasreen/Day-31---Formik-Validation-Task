import { useState } from "react"
import { addBook } from "../features/BookReducer/bookReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import '../Component/AddBook.css';


const AddBook = () => {

    const books=useSelector((state=>state.books));
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let {values,errors,handleChange,handleSubmit}=useFormik({
        initialValues: {
            title:'',
            author:'',
            isbn_number:'',
            publication_date:'',
        },
        validate: (values)=>{
            let errors={}
            if(values.title == ''){
                errors.title = "Enter the title"
            }
            if(values.author == ''){
                errors.author= "Enter the author"
            }
            if(values.isbn_number == ''){
                errors.isbn_number= "Enter the ISBN Number"
            }
            if(values.publication_date == ''){
                errors.publication_date= "Enter the Publication Date"
            }
            return errors;r4f
        },
        onSubmit:(values)=>{
            let {title, author, isbn_number, publication_date}=values
            dispatch(addBook({id:books[books.length-1].id+1 , title, author, isbn_number, publication_date}))
            navigate('/book');
        }
    });


    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [isbn_number,setIsbn_Number]=useState('');
    const [publication_date,setPublication_Date]=useState('');

  return (
    <div>
        <div className='d-flex w-600 vh-100 justify-content-center align-items-center'>
            <div className='w-80 border bg-secondary text-white p-5 ' style={{ width: '600px' }}>
                <h3>Add New Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title"> Title:</label>
                        {/* <input type="text" name="name" className='form-control' placeholder="Enter the Title..." onChange={e=>setTitle(e.target.value)}/> */}

                        <input type="text" name="title" className='form-control' placeholder="Enter the Title..." value= {values.title} onChange={handleChange}/>
                        <span className="error_class">{errors.title}</span>
                    </div>
                    <div>
                        <label htmlFor="author"> Author:</label>
                        <input type="text" name="author" className='form-control' placeholder="Enter the Author..." value = {values.author} onChange={handleChange}/>
                        <span className="error_class">{errors.author}</span>
                    </div>
                    <div>
                        <label htmlFor="isbn_number"> ISBN Number:</label>
                        <input type="text" name="isbn_number" className='form-control' placeholder="Enter the ISBN Number..." value = {values.isbn_number} onChange={handleChange}/>
                        <span className="error_class">{errors.isbn_number}</span>
                    </div>
                    <div>
                        <label htmlFor="publication_date"> Publication Date:</label>
                        <input type="text" name="publication_date" className='form-control' value={values.publication_date} placeholder="Enter the Publication Date..." onChange={handleChange}/>
                        <span className="error_class">{errors.publication_date}</span>
                    </div><br/>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBook