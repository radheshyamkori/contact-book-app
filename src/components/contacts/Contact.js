import React, {useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import Contacts from "./Contacts";
import {clearAllContact, deleteAllContacts, selectAllContact} from '../../actions/contactActions';

const Contact = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false)
    const contacts = useSelector((state) => state.contact.contacts)
    const selectedContacts = useSelector((state) => state.contact.selectedContacts)
    console.log(contacts);
    useEffect(() => {
        if(selectAll){
            dispatch(selectAllContact(contacts.map(contact => contact.id)))
        }else if(!selectAll){
            dispatch(clearAllContact())
        }
    },[selectAll])

    
    return (        
        <div className="container">
        {
            selectedContacts.length > 0 ? (<button onClick={() => {
                return dispatch(deleteAllContacts())
            }} className="btn btn-danger mb-3">DeleteAll
            </button>):null
        }
            <table class="table shadow">
                <thead>
                    <tr>
                    <th scope="col">
                        <div className="custom-control custom-checkbox">
                            <input id="selectAll" type="checkbox"
                            value={selectAll} 
                            className="custom-control-input" onClick={()=>{setSelectAll(!selectAll)}}                                
                            />&nbsp;
                            <label htmlFor="selectAll" className="custom-control-label">    </label>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Phone</th>  
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th> 
                    </tr>
                </thead>
                <tbody>                   
                    {contacts.map((contact) => {
                        return(
                            <Contacts contact={contact} key={contact.id} selectAll={selectAll}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Contact;