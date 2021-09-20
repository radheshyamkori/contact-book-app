import React from 'react';
import {useDispatch} from 'react-redux';
import Avatar from 'react-avatar';
import {Link} from 'react-router-dom';
import { deleteContact } from '../../actions/contactActions';

const Contacts = ({contact,selectAll}) => {
    const dispatch = useDispatch();
    const {name,phone,email,id} = contact
    return(        
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" checked={selectAll}
                        className="custom-control-input"/>
                        <label className="custom-control-label"></label>
                    </div>
                </td>
                <td><Avatar className="mr-2" name={name} size='45' round={true}/>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                {/* <td><i class="material-icons">mode_edit</i></td> */}
                <td>
                <Link to={`/contact/edit/${id}`}>
                    <span className="material-icons">edit</span>
                </Link>
                </td>
                <td>
                <Link>
                    <span className="material-icons" onClick={()=>
                        dispatch(deleteContact(id))
                    }>delete</span>
                </Link>
                </td>
                {/* <td><i class="material-icons">delete</i></td> */}
            </tr>        
    );

}
export default Contacts;