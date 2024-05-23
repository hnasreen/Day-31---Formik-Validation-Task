import { createSlice } from "@reduxjs/toolkit";
import { bookList } from "../../Component/BookData";


const bookSlice = createSlice({
    name:"books",
    initialState:bookList,
    reducers:{
        addBook: (state,action)=>{
            state.push(action.payload)
        },
        editBook: (state,action)=>{
            const {id,title,author,isbn_number,publication_date}=action.payload;
            const updating_book=state.find(book=>book.id==id);
            if(updating_book){
                updating_book.title=title;
                updating_book.author=author;
                updating_book.isbn_number=isbn_number;
                updating_book.publication_date=publication_date;
            }
        },
        deleteBook: (state,action) =>{
            const {id}=action.payload;
            const uu=state.find(book=>book.id==id)
            if(uu){
                return state.filter(f=>f.id!==id)
            }
        }
    }
})

export default bookSlice.reducer;
export const {addBook,editBook,deleteBook}=bookSlice.actions;