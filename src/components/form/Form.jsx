import { useState } from 'react';
import styles from './Form.module.css'
import validation from './validation.js'

export default function Form (props) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({
            ...userData,
            [name]: value
        })

        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

   const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData)
   }

   return (
      <div  className={styles.container}>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
             type='text'
             name='email'
             value= {userData.email}
             onChange={handleChange}
             ></input>
             <p>{errors.email}</p>
             <br/>
            
            <label>Password:</label>
            <input
             type='password'
             name='password'
             value= {userData.password}
             onChange={handleChange}
             ></input>
             <p>{errors.password}</p>
            <button>Submit</button>
        </form>
    </div>
      
   ); 
}
