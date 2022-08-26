import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit"


axios.defaults.baseURL = 'https://62c20f4aeff7f7856f193bbe.mockapi.io/api';



const addContact = createAsyncThunk("contacts/addContact", async({name,number}) => {
  const contact = {
    name,
    phone: number,
  };
   const response = await axios.post(`contacts`, contact) 
   return response.data
})




const deleteContact = createAsyncThunk("contacts/deleteContact", async(id) => {
 const response = await axios.delete(`/contacts/${id}`)
  return response.data.id
})



const getContacts = createAsyncThunk("contacts/getContact", async() => {
  
   const response = await axios.get(`contacts`) 
   return response.data 
})

export { addContact, deleteContact, getContacts };
