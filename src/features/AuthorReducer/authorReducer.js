import { createSlice } from "@reduxjs/toolkit";
import {authorList} from "../../Component/AuthorData"


const authorSlice = createSlice({
    name:"authors",
    initialState:authorList,
    reducers:{
        addAuthor: (state,action)=>{
            state.push(action.payload)
        },
        editAuthor: (state,action)=>{
            const {id,name,birth_date,biography}=action.payload;
            const updating_author=state.find(author=>author.id==id);
            if(updating_author){
                updating_author.name=name;
                updating_author.birth_date=birth_date;
                updating_author.biography=biography;
            }
        },
        deleteAuthor: (state,action) =>{
            const {id}=action.payload;
            const uu=state.find(author=>author.id==id)
            if(uu){
                return state.filter(f=>f.id!==id)
            }
        }
    }
})

export default authorSlice.reducer;
export const {addAuthor,editAuthor,deleteAuthor}=authorSlice.actions;