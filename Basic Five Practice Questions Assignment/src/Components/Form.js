import React from 'react'
import { useState } from 'react';
const Form = () => {
    const [product, setProduct] = useState('');
    const [message, setMessage] = useState('');
    return (
    <div>       
        <input type='text' placeholder='Enter the product name' onChange={(e) => {setProduct(e.target.value)}} value = {product} required />
        <button type='button' value = {message} onClick={() => setMessage("Product name is " + product + "!")}>Click</button>
        <h1>{message}</h1>
    </div>
  )
}
export default Form;