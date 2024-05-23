import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editAuthor } from "../features/AuthorReducer/authorReducer";


const EditAuthor = () => {

    const{id}=useParams();
    const authors=useSelector((state=>state.authors));
    const existingAuthors=authors.filter(f=>f.id==id);
    const {name,birth_date,biography}=existingAuthors[0];
    const [uname,setName]=useState(name);
    const [ubirth_date,setBirth_date]=useState(birth_date);
    const [ubiography,setBiography]=useState(biography);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleUpdate = (event)=>{
        event.preventDefault();
        dispatch(editAuthor({
            id:id,
            name:uname,
            birth_date:ubirth_date,
            biography:ubiography
        }))
        navigate('/author');
    }

  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-500 border bg-secondary text-white p-5' style={{ width: '600px' }}>
                <h3>Update Author</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name"> Name:</label>
                        <input type="text" name="name" className='form-control' placeholder="Enter the Name..." value={uname} onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="birth_date"> Birth Date:</label>
                        <input type="text" name="birth_date" className='form-control' placeholder="Enter the BirthDate..." value={ubirth_date} onChange={e=>setBirth_date(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="biography"> Biography: </label>
                        <input type="text" name="biography" className='form-control' placeholder="Enter Short Biography..." value={ubiography} onChange={e=>setBiography(e.target.value)}/>
                    </div>
                    <br/>
                    <button className="btn btn-info">Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditAuthor