import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {addContact, getContact, updateContact} from '../../actions/contactActions';
import shortid from 'shortid';
import {useHistory, useParams} from 'react-router-dom';


export const EditContact = () => {
    let {id} = useParams(); 
    
    let history = useHistory();

    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
  

    const dispatch = useDispatch();
    useEffect(()=>{
        if(contact!=null)
        {
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    },[contact])

    const editContact = (e) => {
        e.preventDefault();
        console.log("name",name);
        console.log("phone",phone);
        console.log("email",email);
        const updatedContact = Object.assign(contact,{
            name: name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(updatedContact));
        history.push("/");
    }

    return(
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                <form>
                    <div className="form-group py-2">
                        <input type="text" 
                        name="name"
                        placeholder="Enter your name" 
                        className="custom-control-input"
                        value={name}
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="form-group py-2">
                        <input type="text" 
                        name="phone"
                        placeholder="Enter your phone"  
                        className="custom-control-input"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group py-2">
                        <input type="text"
                        name="email"
                        placeholder="Enter your email address" 
                        className="custgm-control-input"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div className="form-group py-2">
                        <button type="submit" className="btn btn-danger" name="Edit" onClick={editContact}>Save</button>
                        {/* <button type="submit" className="btn btn-danger" name="Edit">Save</button> */}
                    </div>
                </form>
                </div>

            </div>
        </div>
    )
}
export default EditContact;