import React from 'react'
import {Formik, Form,Field, ErrorMessage} from "formik";
import * as yup from 'yup'; 
import axios from 'axios';


function Regiester() {

    //### initial value
    const initialValue = {
        username:"",
        password : ""
        
    };

//## validation 
    const validationSchema = yup.object().shape({
           
        username: yup.string().required("you must put title"),
        password:yup.string().min(3).max(15).required(),

    });



    //##resgiter
    const onSubmit = (data) => {
     console.log(data)
       axios.post("http://localhost:3001/auth", data).then((response)=>{
           //  history.push("/");
           console.log(data);

        });
    }


    return (
        <div>
        <Formik initialValues={initialValue} onSubmit = {onSubmit} validationSchema = {validationSchema}>
            <Form>
              <label> UserName:</label>
              <ErrorMessage name="username" component = "span" />
              <Field autoComplete = "off" id="username" name = "username" placeholder ="{EX . title ... }" /><br />
               
              <label> password:</label>
              <ErrorMessage name="password" component = "span" />
              <Field autoComplete = "off" type="password" id="password" name = "password" placeholder ="{EX . title ... }" /><br />
  

                <button type="submit"> Create </button>


            </Form>

        </Formik>
    </div>
    )
}

export default Regiester
