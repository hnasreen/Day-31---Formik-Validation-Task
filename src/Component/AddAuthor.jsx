import { useState } from "react"
import { addAuthor } from "../features/AuthorReducer/authorReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import '../Component/AddBook.css';

const AddAuthor = () => {

    const authors=useSelector((state=>state.authors));
    const dispatch=useDispatch();
    const navigate=useNavigate();

    let {values,errors,handleChange,handleSubmit}=useFormik({
        initialValues: {
            name:'',
            birth_date:'',
            biography:'',
        },
        validate: (values)=>{
            let errors={}
            if(values.name == ''){
                errors.name = "Enter the name"
            }
            if(values.birth_date == ''){
                errors.birth_date= "Enter the birthdate"
            }
            if(values.biography == ''){
                errors.biography= "Enter the biography"
            }
            return errors;
        },
        onSubmit:(values)=>{
            let {name,birth_date,biography}=values
            dispatch(addAuthor({id:authors[authors.length-1].id+1 , name,birth_date,biography}))
            navigate('/author');
        }
    });

    const [name,setName]=useState('');
    const [birth_date,setBirth_date]=useState('');
    const [biography,setBiography]=useState('');

  return (
    <div>
        <div className='d-flex w-600 vh-100 justify-content-center align-items-center'>
            <div className='w-80 border bg-secondary text-white p-5 ' style={{ width: '600px' }}>
                <h3>Add New Author</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name"> Name:</label>
                        <input type="text" name="name" className='form-control' placeholder="Enter the Name..." value = {values.name} onChange={handleChange}/>
                        <span className="error_class">{errors.name}</span>
                    </div>
                    <div>
                        <label htmlFor="birth_date"> Birth_Date:</label>
                        <input type="text" name="birth_date" className='form-control' placeholder="Enter the Birth_Date..." value={values.birth_date} onChange={handleChange}/>
                        <span className="error_class">{errors.birth_date}</span>
                    </div>
                    <div>
                        <label htmlFor="biography"> Biography:</label>
                        <input type="text" name="biography" className='form-control' placeholder="Enter Short Biography..." value={values.biography} onChange={handleChange}/>
                        <span className="error_class">{errors.biography}</span>
                    </div>
                    <br/>
                    <button className="btn btn-info">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddAuthor;