import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
//import { addContact } from '../../store';
import {addContact} from '../../actions/contactActions';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';



export const AddContact = () => {
    let history = useHistory();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState(""); 
   
    
    const dispatch = useDispatch();
    

    const createContact = (e) => {
        e.preventDefault();
        console.log("name:",name);
        console.log("phone:",phone);
        console.log("email:",email);
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email 
        }
        dispatch(addContact(newContact));
        history.push("/");
    }

    return(
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Add a Contact</div>
                <div className="card-body">
                {/* <form onSubmit={(e)=>createContact(e)}> */}
                <form>
                <div className="form-group py-2">
                    <input type="text" 
                    name="name" 
                    className="custom-control-input" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)}                        
                    />
                </div>
                <div className="form-group py-2">
                    <input type="text" 
                    name="phone"
                    className="custom-control-input" 
                    placeholder="Enter your phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}                        
                    />
                </div>
                <div className="form-group py-2">
                    <input type="text" 
                    name="email" 
                    className="custom-control-input" 
                    placeholder="Enter your email address" 
                    value={email} onChange={(e)=>setEmail(e.target.value)}                        
                    />
                </div>                
                <div className="form-group py-2">
                    <button type="submit" name="add" className="btn btn-primary" onClick={createContact}>Add</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    )
}
export default AddContact;
