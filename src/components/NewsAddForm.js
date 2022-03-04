import { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { newsCreated } from "../redux/action";


export default function NewsAddForm(){
    const [name, setName] = useState("");
    const [description, setDescrition] = useState("");
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newNews = {id: v4(), name, description, category};
        request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
            .then(() => console.log("Success"))
            .then(dispatch(newsCreated(newNews)))
            .catch(err => console.log(err))
        
        setName("");
        setCategory("");
        setDescrition("");
    }

    return(
        <form className="border  p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Name for new News</label>
                <input 
                    type="text" 
                    required 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="What is name of news?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea 
                    type="text" 
                    required 
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="What is your news about?" 
                    style={{'height': '120px'}}
                    value={description}
                    onChange={(e) => setDescrition(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Choose category of news</label>
                <select 
                    required 
                    className="form-select" 
                    id="category" 
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option></option>
                    <option className="btn btn-danger" value="Hot News">Hot News</option>
                    <option className="btn btn-primary" value="Sport News">Sport News</option>
                    <option className="btn btn-success" value="World News">World News</option>
                </select>
            </div>
            <button 
                type="submit" 
                className="btn btn-dark shadow-lg w-100 text-light"
                >Create News</button>
        </form>
    )
}