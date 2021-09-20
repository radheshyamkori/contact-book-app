import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT,SELECT_CONTACT, CLEAR_CONTACT, DELETE_ALL } from '../constants/types';
//import { GET_CONTACT } from '../constants/types';

// Action for Add Contact
export const addContact = (contact) => {  // ES6 action format with return()
    return{
        type:CREATE_CONTACT,
        payload:contact
    }
}

// Action for get contact
export const getContact = (id) => ({  //ES7 action format without return and with ({})
    
        type:GET_CONTACT,
        payload:id
    
})

//Action for Update Contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload:contact
})

//Action for delete Contact
export const deleteContact = (id) => ({
    type:DELETE_CONTACT,
    payload:id
})

// Action for selectAll Contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})

//Action for Clear Selected Contacts
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,    
})

//Action for Delect All Contacts
export const deleteAllContacts = () => ({
        type:DELETE_ALL,        
})

// export const actionName = (payload) => ({// ES7 Standard format of action
//     type: type,
//     payload
// })
